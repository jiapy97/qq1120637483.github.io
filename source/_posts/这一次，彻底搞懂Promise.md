---
title: 这一次，彻底搞懂Promise
date: 2022-02-12
author: Justin
top: false
cover: false
categories: 面试题
tags:
  - 面试题
---

## 一、为什么要引入Promise?
>在介绍本章之前，首先先抛出几个问题：

* Promise解决了什么问题？
* Promise有哪些具体的使用场景？

### Promise解决了什么问题？
1. 回调地狱问题

> 在没有Promise之前，前端获取数据往往需要通过回调函数层层嵌套的方式来解决异步问题，例如下面这段代码实例：

```js
// 回调地狱实例

// 奶茶函数
function getTea(fn) {
  setTimeout(() => {
    fn('获取到一杯奶茶')
  },2000)
}

// 面包函数
function getBread(fn) {
  setTimeout(() => {
    fn('获取到一个面包')
  },100)
}

// 如果必须按照顺序获取，而不是根据时间，要求是先获取到奶茶后获取到面包。
getTea(function(data) {
  console.log(data);
  getBread(function(data) {
    console.log(data);
  }) 
})
```

2. 可读性问题

> 通过Promise我们可以将上面的代码重写为下面的方式，明显这样可读性更高。

```js
// 下面解释下，如何通过Promise来解决回调地狱的问题
function getTea() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('获取到一杯奶茶')
    }, 2000)
  })
}

function getBread() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('获取到一个面包')
    }, 500)
  })
}

getTea()
  .then(res => {
    console.log(res);
    return getBread();
  })
  .then(res => {
    console.log(res);
  })
```

3. 信任问题(也叫回调多次执行问题)

> 传统的回调函数无法保证只被执行一次，回调函数还要可能被执行其他操作，而Promise调用且仅调用一次resolve，不会产生回调多次执行的问题，所以Promise很好的解决了第三方库多次调用回调的问题。

### Promise有哪些具体的使用场景？
* 场景1：将图片的加载写成一个Promise，图片一旦加载完成，Promise的状态就会发生变化。
* 场景2：当下一个异步请求需要依赖上一个请求结果的时候，可以通过链式操作解决问题。
* 场景3：通过all()实现多个请求合并在一起，汇总所有的请求结果，只需设置一个loading即可。
* 场景4：通过race()可以设置图片请求超时。

## 二、手写Prromise身上的方法
### 手写Promise.all
> Promise.all的特点是接收的是一个可迭代对象，当这个可迭代对象中的所有元素都执行成功会返回一个数组，一个出错则立即返回错误。

```js
function myPromiseAll(iterable) {
  // 首先明确要返回的对象是一个Promise
  return new Promise((resolve,reject) => {
    // 首先将可迭代对象转换为数组
    const promises = Array.from(iterable);
    let flag = 0;
    const result = [];
    // 开始遍历执行
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(res => {
        result[i] = res;
        flag++;
        if (flag === promises.length) {
          resolve(result)
        }
      }).catch(err => {
        reject(err)
      })
    }
  })  
}
```

### 手写Promise.race
> Promise.race函数接收的是一个可迭代对象，相当于让这个可迭代对象中的所有promise对象进行赛跑，只要有一个promise对象发生了状态变化，那么直接返回这个promise对象返回的结果。

```js
// 手写promise.race
function myPromiseRace(iterator) {
  // 首先返回的是一个promise对象
  return new Promise((resolve,reject) => {
    for (let item of iterator) {
      Promise.resolve(item).then(res => {
        resolve(item);
      }).catch(err => {
        reject(err);
      })
    }
  })
}

let p1 = new Promise(resolve => {
  setTimeout(resolve, 105, 'p1 done')
})
let p2 = new Promise(resolve => {
  setTimeout(resolve, 100, 'p2 done')
})
myPromiseRace([p1, p2]).then(data => {
  console.log(data); // p2 done
})
```

### 手写Promise.finally
> Promise.finally的特点

* 无论成功还是失败，都会执行这个方法
* 返回的是一个Promise

> Promise.finally执行的例子

```js
let p = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve(111);
  },2000)
})

p.then(res => {
  console.log(res);  // 111
}).finally(() => {
  console.log('无论如何这里都会被执行');  // 无论如何这里都会被执行
})
```

> 手写Promise.finally（Promise.finally返回的本质上是一个then方法，需要在then方法中执行我们传入的参数，然后返回形参）

```js
Promise.prototype.finally = function(f) {
  return this.then((value) => {
    return Promise.resolve(f()).then(() => value)
  },(err) => {
    return Promise.resolve(f()).then(() => {
      throw err;
    })
  })
}
```

### Promise.all和Promise.race的区别
> Promise.all()成功和失败的返回值是不同的，成功的时候返回的是一个结果数组，而失败的时候返回的是最先被reject的值。当Promise.all()的结果是成功的时候，返回结果的数组里边的数据顺序和Promise.all()接收到的promise顺序是一致的。

> promise.race表示多个Promise赛跑的意思，里面哪个结果执行的快就返回哪个结果，不管结果本身是成功还是失败，其他Promise代码还会执行，只是不会返回。

### Promise.all和Promise.race的应用场景
#### promise.all()的应用场景
* 多个异步任务都得到结果时，进行显示的场景

> 比如，当用户点击按钮时，会弹出一个对话框，这个对话框中的数据来自两个不同的后端接口获取的数据，当用户刚点击的时候，显示的时数据加载中的状态，当这两部分数据都从接口获取到数据的时候，才让数据加载中的状态消失，此时就可以使用Promise.all方法。

#### Promise.race()的应用场景
* 提示用户请求超时

> 比如，当用户点击按钮发送请求的时候，当后端的接口超过我们设定的时间还没有获取到数据的时候，我们就可以提示用户请求超时。

## 三、Promise是如何解决串行和并行的？
### 什么是并行？什么是串行？
> 并行：指的是多个异步请求同时进行。

> 串行：一个异步请求完成之后再进行下一个请求。

### Promise实现并行请求
> Promise实现并行请求主要是依靠Promise.all方法和Promise.race方法，我们可以通过手写Promise.all方法或Promise.race方法来实现这一目标。

### Promise实现串行请求
> Promise实现串行请求主要是借助reduce函数。可以参考我的这篇文章[如何控制Promise的串行执行？](https://juejin.cn/post/7011289190461603870)

```js
// 借助reduce函数来实现Promise的串行执行
const funcArr = [
  () => {
    return new Promise((resolve) => {
      setTimeout(() => {resolve(1)},2000)
    })
  },
  () => {
    return new Promise((resolve) => {
      setTimeout(() => {resolve(2)},1000)
    })
  },
  () => {
    return new Promise((resolve) => {
      setTimeout(() => {resolve(3)},3000)
    })
  },
];

function inOrder(arr) {
  const res = [];
  return new Promise((resolve) => {
    arr.reduce((pre,cur) => {
      return pre.then(cur).then(data => res.push(data))
    },Promise.resolve()).then(data => resolve(res))
  })
}

inOrder(funcArr).then(data => console.log(data))   // [1,2,3]
```

## 四、什么是Promise穿透？
> 所谓的Promise的值穿透指的是.then或者.catch的参数希望是函数，如果传入的不是函数，则可能会发生值穿透。Promise方法通过return传值，没有return就只是相互独立的任务而已。看看下面这个例子的输出可能会更好的帮助我们理解什么是值穿透？

```js
Promise.resolve(1)
  .then(function(){return 2})
  .then(Promise.resolve(3))
  .then(console.log)   // 2
```

> 之所以发生了值穿透就是因为第二个then中传入的不是一个函数的形式。

## 五、使用Promise封装Ajax请求
> 使用Promise封装Ajax请求的关键步骤，全部在下面的代码中的注释里，详情请看下面的代码。

```js
// 使用Promise封装Ajax请求
const res = new Promise((resolve,reject) => {
  // 1. 创建一个XMLHttpRequest对象
  const xhr = new XMLHttpRequest();
  // 2. 初始化请求方法和URL
  xhr.open('GET','https://api.apiopen.top/getJoke');
  // 3. 发送请求
  xhr.send();
  // 4. 绑定事件，处理响应结果
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      // 这里4代表的就是说服务端返回了全部的结果
      // 如果服务端返回的状态码是2开头的，我们就resolve这个返回的结果，反之则reject对应的状态码
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response)
      } else {
        reject(xhr.status)
      }
    }
  }
})
res.then(function(value) {
  console.log(value);
},function(err) {
  console.log(err);
})
```

## 六、Promise有哪些状态？
> Promise主要有以下三种状态：

* pending状态（初始状态）
* fulfilled状态(已经成功的状态)
* rejected状态(已经失败的状态)

### Promise状态的变化过程
1. 从pending到fulfilled状态的切换

> resolve前是pending状态，resolve之后是fulfilled状态

```js
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('resolve前的状态：', p);
    resolve();
    console.log('resolve之后的状态', p);
  })
})
```

![image.png](https://img-blog.csdnimg.cn/img_convert/478d6501e00f746426b25d16d8f1c2f9.png)

2. 从pending状态到rejected状态

> reject前是pending状态，reject之后是rejected状态。

```js
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('reject前的状态：', p);
    reject();
    console.log('reject之后的状态', p);
  })
})
```

![image.png](https://img-blog.csdnimg.cn/img_convert/15873ec647ca0e3a481c9e6ae21d52e9.png)

## 七、将callback改写成Promise

1. 传统callback的形式

```js
const fs = require('fs');

fs.readFile('./temp.md',(err,data) => {
  console.log(data.toString());
})
```

2. 将callback改为promise的形式

> 核心就是通过resolve来获取callback的数据。

```js
const fs = require('fs');

async function myReadFile() {
  let result = await new Promise((resolve,reject) => {
    fs.readFile('./temp.md',(err,data) => {
      resolve(data.toString());
    })
  })
  console.log(result);   // xxxxx
  return result;
}

myReadFile()
```


