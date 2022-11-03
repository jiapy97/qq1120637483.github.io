---
title: 这一次，彻底搞懂EventLoop
date: 2021-12-12
author: Justin
top: false
cover: false
categories: 面试题
tags:
  - 面试题
---

## 一、为什么要有事件循环？
>`JS是单线程、非阻塞的。`JS的主要用途是与用户互动，并操作DOM，如果涉及成多线程的，一个线程要删除当前DOM节点，另一个线程要修改当前DOM节点，这就会带来很严重的同步问题。这就是为什么JS要设计成单线程的原因，而JS的非阻塞特性就是由event loop实现的。

## 二、浏览器的事件循环
### 执行栈和事件队列
#### 同步代码，按照顺序添加到执行栈中

>以下面的代码为例，分析执行栈的执行顺序。

```js
function a() {
    b();
    console.log('a');
}
function b() {
    console.log('b')
}
a();
```

1. 函数a入栈。
2. 函数b入栈。
3. console.log('b')入栈。
4. 输出b，console.log('b')出栈。
5. 函数b()执行完毕，出栈。
6. console.log('a')入栈，执行完毕后出栈。
7. 函数a执行完毕，出栈。

#### 异步代码，通过事件队列
>异步代码的执行，遇到异步事件不会等待它返回结果，而是将这个事件挂起，继续执行执行栈中的其他任务，当异步事件返回结果后，将它放到事件队列中，被放入事件队列中的语句不会立刻执行，而是等待当前执行栈中所有的任务都执行完毕，主线程空闲时，主线程会询问事件队列汇总是否有任务，如果有则取出排在第一位的事件，并把这个事件对应的回调放到执行栈中，然后执行其中的同步代码。

```js
function a() {
    b();
    console.log('a');
}
function b() {
    console.log('b')
    setTimeout(function() {
        console.log('c');
    }, 2000)
}
a();
```
>输出顺序如下：b a c。

>执行栈、事件队列、Web API三者之间的关系。

![image.png](https://img-blog.csdnimg.cn/img_convert/d0a0bea1755111e3725bef09bfb9c8fe.png)



### 宏任务和微任务
#### 为什么要区分宏任务和微任务？
>页面渲染事件和各种IO事件等随时被添加到任务队列中，会一直保持先进先出的原则，但是这样我们无法对各种事件进行区分优先级，因为有些任务需要优先执行，所以我们对异步任务进行了区分，引入了宏任务和微任务队列。

#### 典型的宏任务
* 全局代码
* script(整体代码)
* setTimeout()
* setInterval()
* setImmediate
* postMessage
* I/O
* UI交互事件
* requestAnimationFrame()

#### 典型的微任务
* Promise().then(回调)
* MutationObserver
* process.nextTick

#### 运行机制
>在事件循环中，先执行宏任务，因为全局代码属于宏任务，然后执行宏任务产生的微任务，若微任务在执行过程中产生了新的微任务，则继续执行微任务，微任务执行完毕后，执行宏任务，当前宏任务执行完毕之后，开始进行GUI渲染，渲染完毕之后继续执行下一个宏任务。

```js
console.log('start')

setTimeout(function() {
  console.log('setTimeout')
}, 0)

Promise.resolve().then(function() {
  console.log('promise1')
}).then(function() {
  console.log('promise2')
})

console.log('end')
```

>上文的代码执行顺序如下：

1. 全局代码当作宏任务开始执行，遇到同步任务直接执行，输出start.
2. setTimeout中的函数压入宏任务队列，promise.then回调放入微任务队列，然后执行同步代码输出end.
3. 当调用栈中的所有同步代码执行完毕之后，开始执行微任务中的代码，执行promise的回调，输出promise1,此时返回undefined，promise状态变为fulfilled，触发接下来的then回调，产生了新的微任务，继续执行这个微任务，输出promise2。
4. 当微任务队列执行完毕之后，开始进行UI渲染，然后开始下一轮的事件循环，执行setTimeout的回调，输出setTimeout.

>最终输出结果为：

* start
* end
* promise1
* promise2
* setTimeout

## 浏览器渲染时机
>浏览器会等到当前的微任务队列为空的时候，进行一次重新渲染，所以如果需要在异步的操作后重新渲染DOM的最好方法就是将其包装为微任务。

## Node.js的事件循环
>Node中的事件循环和浏览器中的有很大不同，Node.js采用V8作为JS的解析引擎，而I/O处理方面使用了自己设计的libuv。libuv库负责Node API的执行，它将不同的任务分配给不用的线程，形成一个事件循环，然后以异步的方式将任务的执行结果返回给V8引擎。

### Node中的事件循环流程图
>libuv引擎中的事件循环分为六个阶段，他们会按照顺序反复执行，每当进入某一个阶段时，都会从对应的回调队列中取出函数去执行，当队列为空或者执行的回调函数数量达到系统设定的阈值就会进入下一阶段。

![image.png](https://img-blog.csdnimg.cn/img_convert/6b129b5317c77171d8e16ddcdeddfbe2.png)

### 阶段分析
* timers：执行setTimout和setInterval的回调，看是否满足delay的要求，不满足则直接离开这个阶段。
* I/O callbacks阶段：执行除了下面操作以外的所有回调。
    * setTimeout和setInterval的回调
    * setImmediate的回调
    * 用于关闭请求的回调函数，比如socket.on('close')
* idle,prepare阶段：这个阶段仅在libuv内部使用，可以不用理会。
* poll阶段：这个阶段是轮询阶段，首先会判断poll队列是否为空，如果不为空就会遍历回调队列并执行，直到队列为空或者达到系统限制。如果poll队列不为空，查看是否有setImmediate需要执行，如果有，就结束poll阶段，进入check阶段。如果没有，就会等待新的回调IO事件的到来，然后执行，如果此时设定了timer，会判断timer是否超时，如果超时的话会回到timer阶段执行回调。
* check阶段：这个阶段主要执行setImmediate的回调函数。
* close callbacks阶段：这个阶段执行关闭请求的回调函数，例如socket.on('close')。

### setTimeout和setImmedate的执行顺序问题

>关于setTimeout，官网给出的注意事项是：当延迟大于2147483647或小于1时，延迟将被设置为1。非整数的延时将被截断为整数。

>请看下面的代码：会有怎样的执行顺序呢？

```js
setTimeout(() => console.log(1),0);
setImmediate(() => console.log(2));
```

![image.png](https://img-blog.csdnimg.cn/img_convert/a6ecf83f67bd089c2b92af044f57e5f9.png)

>`之所以会出现上面的情况，就是因为进入timer阶段时，可能到了1ms，也有可能没到，如果没到timer阶段就会跳过这个语句，进入下一个阶段了，这也就是为什么执行顺序会出现不同的情况。`

### process.nextTick的执行时机
>process.nextTick是Node.js提供的一个异步执行函数，它不是setTimeout(fn,0)的别名，它的效率更高，它的执行顺序要先于setTimeout和setInterval。

>下面这段代码的执行顺序说明了一切。

```js
console.log(1);
setTimeout(() => console.log('setTimeout=> 1'), 0);
process.nextTick(() => console.log('nextTick=> 1'));
console.log(2);
setTimeout(() => console.log('setTimeout=> 2'), 0);
process.nextTick(() => {
  console.log('nextTick=> 2');
  for (let i = 0; i < 1000; i++) { }    //一直等待它执行完毕后，才会执行下一个nextTick()和之后的任务队列中的回调函数
});
console.log(3);
process.nextTick(() => console.log('nextTick=> 3'));
setTimeout(() => console.log('setTimeout=> 3'), 0);
console.log(4);
setTimeout(() => console.log('setTimeout=> 4'), 0);
process.nextTick(() => console.log('nextTick=> 4'));
console.log(5);

for (let i = 0; i < 1000; i++) { }        //一直等待它执行完毕后，才会执行nextTick和setTimeout的回调。
```

![image.png](https://img-blog.csdnimg.cn/img_convert/95b28eb763392c2fbcbbf6981007d61d.png)

![image.png](https://img-blog.csdnimg.cn/img_convert/4383e2d72782fc32a4ecd849cd5a1d32.png)

## Node.js与浏览器事件循环的区别

>下面的这段代码很好的说明了Node.js与浏览器事件循环的区别，准确的说Node11以下版本和浏览器的事件循环是有区别的，Node11及以上版本和浏览器的执行顺序就一致了。

>Node11以下版本在会在执行宏任务的时候，会先执行完所有的宏任务在执行微任务，而Node11及以上版本和浏览器在执行宏任务的时候，如果产生了微任务，会把微任务执行完再去执行其他的宏任务。

```js
function test () {
  console.log('start')
   setTimeout(() => {
       console.log('children2')
       Promise.resolve().then(() => {console.log('children2-1')})
   }, 0)
   setTimeout(() => {
       console.log('children3')
       Promise.resolve().then(() => {console.log('children3-1')})
   }, 0)
   Promise.resolve().then(() => {console.log('children1')})
   console.log('end') 
}

test()
// 以上代码在node11以下版本的执行结果(先执行所有的宏任务，再执行微任务)
// start
// end
// children1
// children2
// children3
// children2-1
// children3-1

// 以上代码在node11及浏览器的执行结果(顺序执行宏任务和微任务)
// start
// end
// children1
// children2
// children2-1
// children3
// children3-1
```





## 典型题目分析
* 网易云考题

```js
const foo = new Promise(resolve => {
  console.log(1);
  resolve();
  console.log(2);
})
foo.then(() => {
  console.log(3);
})
console.log(4);
```

>执行顺序是1 2 4 3，resolve并不具备阻塞性质，因为会先输出1 2 ，3会被加入到微任务队列，所以最后输出的是3，4属于同步代码。

* 字节跳动考题

```js
console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);
async function echo() {
  console.log(5);
  await Promise.resolve()
  console.log(6);
}

echo();

requestAnimationFrame(() => {
  console.log(8);
})

new Promise((resolve) => {
  console.log(3);
  resolve()
}).then(() => {
  console.log(4);
})

console.log(7);
```

>上述代码的输出顺序为：1 5 3 7 6 4 8 2，我们需要把requestAnimation当作一个宏任务，但是这个宏任务和其他宏任务的执行顺序是不确定的，因此也有可能输出是1 5 3 7 6 4 2 8。


## 参考文献
* [JavaScript中的Event Loop（事件循环）机制](https://segmentfault.com/a/1190000022805523)