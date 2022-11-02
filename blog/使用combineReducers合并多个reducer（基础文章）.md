---
title: 使用combineReducers合并多个reducer（基础文章）
date: 2021-7-31
author: Justin
top: false
cover: false
categories: React
tags:
  - React
---

## comineReducers旨在解决什么问题？
>这个函数是redux库中的函数，旨在解决多个reducer暴露的问题，因为一个组件往往用到的不止一个reducer。

## 结合后的reducer函数
```js
import {INCREMENT,DECREMENT} from './action-types'
import {combineReducers} from 'redux'
// 管理count状态的reducer

function count(state=1,action) {
    console.log('count',state,action);
    switch (action.type) {
        case INCREMENT:
            return state + action.data
        case DECREMENT:
            return state - action.data
        default:
            return state;
    }
}
// 管理user状态的reducer
const initUser = {};

function user(state = initUser,action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default combineReducers({
    count,
    user
})
```
## 思维导图
![](https://img-blog.csdnimg.cn/img_convert/43c88f68a5a8b904aeb8f1dabba4ffbd.png)
