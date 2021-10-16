---
title: 从原理上解读useState钩子函数
date: 2021-10-15
author: Justin
top: false
cover: false
categories: Hooks
tags:
  - Hooks
---

## 原生useState具有的几个特点
1. 返回一个数组，数组的第一个参数值是状态值，第二个参数值是设置状态的方法。
2. useState会判断传入的state是初始值还是已存在的值。
3. useState可能被多次调用
4. 调用设置状态的方法后需要重新渲染组件。

## 手写useState
### 第一步：用不同的数组来分别存放状态值和设置状态的方法
```js
let states = [];
let setters = [];
let stateId = 0;
```
### 第二步：判断useState传入的初始状态值是否已经存在
>存在用以前的，不存在则使用初始状态值
```js
states[stateId] = states[stateId] ? states[stateId] : initialState;
```

### 第三步：通过状态的id来返回设置状态的方法，然后加入到设置方法的数组中
>注意：自定义的渲染函数必须能够操作全局的状态id.
```js
setters.push(createSetter(stateId));
function createSetter(stateId) {
    return function (newState) {
        states[stateId] = newState;
        myRender();
    }
}
function myRender() {
    stateId = 0;
    ReactDOM.render(<App />, document.querySelector('#root'));
}
```

### 第四步：返回第i个状态值和操作状态的方法，并对stateId+1
```js
let value = states[stateId];
let setter = setters[stateId];
stateId++;
return [value, setter]
```

## 完整代码
```js
import React from 'react'
import ReactDOM from 'react-dom'

// 自定义Hook

/**
 * @description: 手写useState
 * @param {*}
 * @return {*}
 */
let states = [];
let setters = [];
let stateId = 0;
function createSetter(stateId) {
    return function (newState) {
        states[stateId] = newState;
        myRender();
    }
}
function myRender() {
    stateId = 0;
    ReactDOM.render(<App />, document.querySelector('#root'));
}
function myUseState(initialState) {
    // 判断state是否存在，存在则使用以前的，不存在则使用初始值
    states[stateId] = states[stateId] ? states[stateId] : initialState;
    setters.push(createSetter(stateId));
    let value = states[stateId];
    let setter = setters[stateId];
    stateId++;
    return [value, setter]
}
function App() {
    const [count, setCount] = myUseState(0);
    const [name, setName] = myUseState('张三');
    return (
        <div>
            <h1>当前求和为：{count}</h1>
            <button onClick={() => setCount(count + 1)}>点我+1</button>
            <h1>当前姓名为：{name}</h1>
            <button onClick={() => setName('李四')}>点我切换姓名</button>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));
```

## CodeSandBox在线实现地址
* [在线实现](https://codesandbox.io/s/shou-xie-usestate-62gkc?file=/src/index.js)

## 参考资料
* [官方文档：useState](https://zh-hans.reactjs.org/docs/hooks-reference.html#usestate)

* [从源码剖析useState的执行过程](https://juejin.cn/post/6844903833764642830)
