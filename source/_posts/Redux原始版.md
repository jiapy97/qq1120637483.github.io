---
title: Redux原始版
date: 2021-05-08
categories: React
tags: 
- React
---
## 入口文件index.js
```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store'

ReactDOM.render(<App store={store}/>,document.querySelector('#root'))

store.subscribe(() => {
    ReactDOM.render(<App store={store}/>,document.querySelector('#root'))
});
```
## 外壳文件App.js
```js
import React, { Component } from 'react';
import {createIncrementAction,createDecrementAction} from './redux/action_Creater'
class App extends Component {

    componentDidMount() {
        console.log(this.props.store);
    }
    Increment = () => {
        const {value} = this.selectNumber;
        this.props.store.dispatch(createIncrementAction(value * 1))
    };
    Decrement = () => {
        const {value} = this.selectNumber;
        this.props.store.dispatch(createDecrementAction(value * 1))
    }
    IncrementIfOdd = () => {
        const {value} = this.selectNumber;
        const count = this.props.store.getState();
        if (count % 2 !== 0) {
            this.props.store.dispatch(createIncrementAction(value * 1));
        }
    }
    IncrementAsync = () => {
        const {value} = this.selectNumber;
        setTimeout(() => {
            this.props.store.dispatch(createIncrementAction(value * 1));
        },1000)
    }
    render() {
        const count = this.props.store.getState();
        return (
            <div>
                <h1>当前求和为：{count}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;&nbsp;
                <button onClick={this.Increment}>+</button>&nbsp;
                <button onClick={this.Decrement}>-</button>&nbsp;
                <button onClick={this.IncrementIfOdd}>奇数则+</button>&nbsp;
                <button onClick={this.IncrementAsync}>异步+</button>
            </div>
        );
    }
}

export default App;
```
## action常量文件action_types.js
```js
export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
```
## action文件（action_Creater.js）
```js
import {INCREMENT,DECREMENT} from './action_types'
export const createIncrementAction = value => ({type: INCREMENT,data: value});
export const createDecrementAction = value => ({type: DECREMENT,data: value});
```
## reducer.js
```js
import {INCREMENT,DECREMENT} from './action_types'
let initState = 0;
export default function operatorCount(preState = initState, action) {
    // 规则：不能修改传递过来的preState
    console.log('reducer被调用了');
    const { type, data } = action;
    let newState;
    switch (type) {
        case INCREMENT:
            newState = preState + data;
            return newState;
        case DECREMENT:
            newState = preState - data;
            return newState;
        default:
            return preState;
    }

}
```
## store.js
```js
import {createStore} from 'redux';
import reducer from './reducer'
export default(createStore(reducer))
```
# 总结
1. store是核心
2. store和reducer建立连接是通过`createStore(reducer)`建立联系的
3. store和action建立联系是通过`store.dispatch(action对象)`
4. store和组件建立联系是通过入口文件传入store这个props
5. 组件获取状态是通过`this.props.store.getState()`
6. 状态要想渲染到页面必须通过`store.subscribe()`