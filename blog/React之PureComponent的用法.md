---
title: React之PureComponent的用法
date: 2021-7-19
author: Justin
top: false
cover: false
categories: React
tags:
  - React
---
## PureComponent有什么用？
>一般组件的shouldComponentUpdate默认返回的是true,但是一旦父组件及时状态或props没有变化，也会造成子组件的render调用，这是很不合理的，我们可以让子组件继承自PureComponent来解决这个问题。

## PureComponent的基本原理
1. 重写了shouldComponentUpdate方法。
2. 对组件的新/旧 state和props中的数据进行浅比较，如果没有变化则返回false，反之返回true.

## PureComponent用法实例
```js
import React, { Component,PureComponent } from 'react'
import ReactDOM from 'react-dom'


class App extends Component {
    state = {
        m1: 1
    }
    
    test1 = () => {
        this.setState(state => ({
            m1: state.m1 + 1
        }))
        // this.setState({})
    }
    render() {
        console.log('调用了A render: ');
        return (
            <div>
                <h1>A组件：m1={this.state.m1}</h1>
                <button onClick={this.test1}>A 测试1</button>
                <B m1={this.state.m1}/>
            </div>
        )
    }
}

class B extends PureComponent {
    state = {
        m2: 1
    }
    
    test2 = () => {
        this.setState({})
    }
    render() {
        console.log('调用了 B render: ');
        return (
            <div>
                <h1>B组件：m2={this.state.m2}, m1={this.props.m1}</h1>
                <button onClick={this.test2}>B 测试2</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
```
>### [codeSandBox在线演示](https://codesandbox.io/s/reactzhongpurecomponent-ycetr?file=/src/index.js)
