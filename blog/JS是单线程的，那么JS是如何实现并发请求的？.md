---
title: JS是单线程的，那么JS是如何实现并发请求的？
date: 2022-02-10
author: Justin
top: false
cover: false
categories: 面试题
tags:
  - 面试题
---

## JS为什么能够执行并发请求？
> 一般情况下，在单线程中，所有的任务需要排队，前一个任务执行完毕之后，才会去执行下一个任务，如果前一个任务耗时很长，后一个任务就不得不一直等着，那么JS是如何实现并发请求的呢？或者说JS是如何实现异步请求的呢？答案就是因为有消息队列和事件循环的存在。

## 什么是消息队列？
> 消息队列指的是一个先进先出的队列，在这个队列中可以存在各种消息。

## 什么是事件循环？
> 事件循环指的是主线程重复从消息队列中获取消息、执行的过程。

## 事件循环的基本流程
> JS的主线程一般只会做一件事情，就是从消息队列里取出消息，然后执行消息，再取出消息然后再执行，当消息队列为空时，就会等待直到消息队列中有消息的存在，而且主线程只有再将当前的消息执行完成之后，才会去执行下一个消息，这种机制就是事件循环机制。

## 事件循环的例子
> 请看下面的一段代码，我们来详细介绍下事件循环中代码的执行流程是什么？

```js
console.log('main1');

process.nextTick(function() {
    console.log('process.nextTick1');
});

setTimeout(function() {
    console.log('setTimeout');
    process.nextTick(function() {
        console.log('process.nextTick2');
    });
}, 0);

new Promise(function(resolve, reject) {
    console.log('promise');
    resolve();
}).then(function() {
    console.log('promise then');
});

console.log('main2');
```

> 正确的执行顺序请看下方的结果：

* main1
* promise
* main2
* process.nextTick1
* promise then
* setTimeout
* process.nextTick2

> 详细分析：
> 事件循环在执行上流程上，首先将全局代码当作一个宏任务，会先执行这个宏任务，执行这个宏任务的时候，会首先执行同步代码，遇到微任务就添加到微任务队列，遇到宏任务就会添加到宏任务队列，当同步代码执行完毕的时候，会开始执行微任务队列中的任务，执行完毕之后会执行宏任务队列中的任务，所以，本题最重要的就是要区分好宏任务是什么，微任务是什么，setTimeout中的回调函数时宏任务，process.nextTick是微任务，所以执行顺序是上面的结果。


