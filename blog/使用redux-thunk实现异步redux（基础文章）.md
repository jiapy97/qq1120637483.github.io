---
title: 使用redux-thunk实现异步redux（基础文章）
date: 2021-7-30
author: Justin
top: false
cover: false
categories: React
tags:
  - React
---
## 使用redux-thunk实现异步redux
>Redux存在一个问题，就是无法实现**异步的action**,这也就是为什么我们要引入redux-thunk的原因。

## 在哪里引入redux-thunk？
>在redux的核心组件store中引入。我们引入的这个thunk,相当于一个中间件。所以我们同时需要从redux中引入applyMiddleware，放入createStore的第二个参数中。

```js
import {createStore,applyMiddleware} from 'redux';
import reducer from './reducer'
import thunk from 'redux-thunk'

export default createStore(reducer,applyMiddleware(thunk))
```

## 异步action和普通的action有什么不同？
>普通action返回的是对象，但是异步action返回的是一个函数。

**异步action和同步action的区别**

```js
// 同步action
export const decrement = (number) => ({type: DECREMENT,data: number});
// 异步增加的action
export const incrementAsync = (number) => {
    return dispatch => {
        setTimeout(() => {
            dispatch({type: INCREMENT,data: number})
        },1000)
    }
}
```

## 最后别忘了，组件中已经没有定时器了，定时器在异步action中。
```js
incrementIfAsync = () => {
    const number = this.numberRef.current.value * 1;
    this.props.incrementAsync(number);
}
```
## [codeSandBox在线演示(使用redux-thunk实现异步action操作状态)](https://codesandbox.io/s/shiyongredux-thunkshixianyibuactioncaozuozhuangtai-z9ped)
