---
title: 这一次，彻底搞懂React生命周期
date: 2021-7-20
author: Justin
top: false
cover: false
categories: React
tags:
  - React
---
# 阅读指南
>本文采用总分总的结构，首先给出React生命周期流程图，让大家知道我们的研究目标是什么，第二部分则分别对React生命周期中的重点难点的生命钩子函数进行介绍。第三部分给出React生命周期的总结。

# React生命周期流程图
![image.png](https://img-blog.csdnimg.cn/img_convert/9ea61e1d763dbedca737486f3502e764.png)

## 1. getDerivedStateFromProps(props, state)
>官方解释：调用这个钩子函数，会使得state在任何时候的状态值都取决于props.

### 这个函数是静态的，所以前面要加static.
### 返回的是什么？
>返回的应该是状态对象（或者null）,总之返回的应该是一个对象，如果你什么都不返回，会出现警告。**这个返回的对象就是render要渲染的state**

### 接收的是什么？
>接收两个参数，一个是最新的props，一个是最新的state.

### [codeSandBox在线演示](https://codesandbox.io/s/reactzhonggetderivedstatefromprops-qzmmq?file=/src/index.js)

---
## 2. shouldComponentUpdate(nextProps, nextState)
### 接收的是什么？
>接收两个参数，一个是最新的但是还未render的props，另一个则是最新的但是还未render的state.

### 返回的是什么？
>返回的是布尔值，返回true则让当前组件进行更新，返回false则让当前组件不更新。

### [codeSandBox在线演示](https://codesandbox.io/s/reactzhongshouldcomponentupdatedeyongfa-9v08q?file=/src/index.js)

---

## 3. componentDidMount
### 接受的是什么？
>这个生命周期钩子函数是在挂载的最后阶段调用，并未接收参数。
### 可以在这个钩子函数中处理组件挂载后的一些操作。

## 4. getSnapshotBeforeUpdate(preProps,preState)
### 接收的是什么？
>接收两个参数，一个是之前的props，一个是之前的state.

### 返回的是什么？
>在这个生命周期钩子函数中，记录了更新DOM之前的一些HTML属性，返回的值，会被componentDidUpdate的第三个参数接收。

### [codeSandBox在线演示（新闻滚动条案例）](https://codesandbox.io/s/getsnapshotbeforeupdateyingyongxinwengundongtiaoanli-ryvlw)

## 5. componentDidUpdate(prevProps, prevState, snapshot)
### 接收的是什么？
>接收的是之前的props和之前的state，这个state是滞后与DOM的，同时第三个参数是接收的getSnapshotBeforeUpdate传来的参数。

### 返回的是什么？
>并不会返回什么，但是可以在此处进行更新后的对比，并对DOM进行操作，或者发起网络请求。

## 6. componentWillUnmount()
>该生命周期函数会在组件卸载之前调用，在这个方法中可以进行清除定时器等操作。在这个生命周期钩子函数中不应调用setState，因为如果这样组件将永远不会重新渲染。

## 7. forceUpdate(callback)
>该生命周期函数不用更改state或props也能对组件进行更新，调用render，且不用通过shouldComponentUpdate这个钩子。

### [codeSandBox在线演示](https://codesandbox.io/s/reactzhiforceupdatedeshiyong-nfb8r?file=/index.html)

## 总结生命周期
>React生命周期最关键的是要记住每一个生命周期钩子函数接收的是什么？返回的是什么？在什么阶段调用，这是核心也是关键，最后一定要熟记流程图！