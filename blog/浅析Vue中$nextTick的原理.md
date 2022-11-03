---
title: 浅析Vue中$nextTick的原理
date: 2022-04-26
author: Justin
top: false
cover: false
categories: Vue
tags:
  - Vue
---

## 一、$nextTick有什么用？
1. Vue是异步渲染的框架。
2. data改变之后，DOM不会立刻渲染。
3. $nextTick会在DOM渲染之后被触发，以获取最新的DOM节点。
4. 连续多次的异步渲染，$nextTick只会执行最后一次渲染后的结果。

## 二、$nextTick的原理
>\$nextTick主要通过事件循环中的任务队列的方式异步执行传入的回调函数，首先会判断当前的执行环境是否支持Promise，MutationObserver，setImmediate，setTimeout。如果支持则创建对应的异步方法，这里的MutationObserver并不是监听DOM，而是利用其微任务特性。需要注意的是更新DOM的方法也是通过nextTick进行调用的，因此就可以实现传入$.nextTick的回调函数在DOM渲染完成之后执行这些微任务。

## 三、循环调用的话nextTick里面有容错机制吗？
>多次调用 nextTick 会将方法存入队列 callbacks 中，通过这个异步方法清空当前队列。

