---
title: 实现Sleep函数的四种方法
date: 2022-03-05
author: Justin
top: false
cover: false
categories: 面试题
tags:
  - 面试题
---

> 实现sleep函数，是一道考察候选人JS基本功的考题，让我们来一起探索这道题目吧~

## 方式一：使用Promise + then
> 在Promise中通过setTimout来设置定时器，通过then来执行回调。

```js
// 使用Promise实现sleep

const sleep = time => {
  return new Promise(resolve => {
    setTimeout(resolve,time)
  })
}

var start = new Date().getTime();
sleep(2000).then(() => {
  console.log(1);
  var end = new Date().getTime();       
  console.log(end-start+'ms');  // 2004ms
})
```

## 方式二：使用生成器函数 + then
> 通过生成器函数的yield关键字返回一个Promise，然后通过next().value.then进行调用。

```js
function* sleep(time) {
  yield new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

var start = new Date().getTime();
sleep(2000).next().value.then(() => {
  console.log(1);
  var end = new Date().getTime();
  console.log(end - start + 'ms');  // 2003ms
})
```

## 方式三：使用async + await
> async + await的方式可以实现异步阻塞任务。

```js
function sleep(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

var start = new Date().getTime();
async function output() {
  await sleep(2000);
  var end = new Date().getTime();
  console.log(end - start + 'ms');  // 2002ms
}
output()
```

## 方式四：直接通过setTimeout实现
```js
function sleep(callback,time) {
  setTimeout(callback,time);
}
const start = new Date().getTime();

function output() {
  console.log(111);
  const end = new Date().getTime();
  console.log(`${end - start} ms`); // 2006 ms
}

sleep(output,2000)
```

## RQ：为什么定时器执行后存在时间误差？
> 因为setTimeout属于宏任务，在执行宏任务之前如何当前执行栈中在执行的任务超过了定时器设定的时间，是可能存在误差的。
