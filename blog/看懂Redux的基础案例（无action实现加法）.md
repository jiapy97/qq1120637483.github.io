---
title: 看懂Redux的基础案例（无action实现加法）
date: 2021-05-08
categories: React
tags: 
- React
---
## 实现效果
![](https://img-blog.csdnimg.cn/img_convert/4c35a238e7f1d5219b1e6676516006f0.png)

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

class App extends Component {

    componentDidMount() {
        console.log(this.props.store);
    }
    Increment = () => {
        const {value} = this.selectNumber;
        this.props.store.dispatch({type: 'increment',data: value*1})
    };
    Decrement = () => {
        const {value} = this.selectNumber;
        this.props.store.dispatch({type: 'decrement',data: value*1})
    }
    IncrementIfOdd = () => {
        const {value} = this.selectNumber;
        const count = this.props.store.getState();
        if (count % 2 !== 0) {
            this.props.store.dispatch({type: 'increment',data: value*1});
        }
    }
    IncrementAsync = () => {
        const {value} = this.selectNumber;
        setTimeout(() => {
            this.props.store.dispatch({type: 'increment',data: value*1});
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
## reducer.js
```js
let initState = 0;
export default function operatorCount(preState = initState, action) {
    // 规则：不能修改传递过来的preState
    console.log('reducer被调用了');
    const { type, data } = action;
    let newState;
    switch (type) {
        case 'increment':
            newState = preState + data;
            return newState;
        case 'decrement':
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