---
title: 需要掌握的Hooks之useReducer与useContext
date: 2021-9-1
author: Justin
top: false
cover: false
categories: Hooks
tags:
  - Hooks
---
## 什么是useReducer?
>useReducer是一种让函数组件保存状态的方式,是useState的替代方案.通过useReducer可以向子组件传递dispatch.

### useReducer接受什么?
>接收的第一个参数是一个reducer函数,第二个参数是一个初始的状态值.

### userReducer返回的是什么?
>返回的是一个数组,数组的第一个元素是存储的状态,第二个元素是出发action的dispatch方法.

### 定义的reducer函数接收什么,返回什么?
>接收两个参数,第一个是以前的状态值,第二个是action对象

```js
function reducer(state,action) {
    switch (action.type) {
        case 'increment':
            return state + 1
        default:
            return state;
    }
}

function App(props) {
    
    const [count, dispatch] = useReducer(reducer,0);

    return (
        <div>
            <span>{count}</span>
            <button onClick={() => dispatch({type: 'increment'})}>+1</button>
        </div>
    )
}
```
## 什么是useContext?
>在跨组件层级获取数据时简化获取数据的代码。下面详细讲解下useContext的使用步骤。
1. 通过createContext()创建一个xxxContext.
2. 通过xxxContext.Provider包裹并将value传递给目标组件。
3. 目标组件通过useContext(xxxContext)获取到value传递的值。

```js
// 1. 创建一个xxxContext
const countContext = createContext();

// 2. 通过xxxContext.Provider 包裹传递value给目标组件
function App() {
    return (
        <countContext.Provider value={666}>
            <Foo />
        </countContext.Provider>
    )
}
// 3. 目标组件通过useContext(xxxContext)获取value传递的值
function Foo() {
    const count = useContext(countContext)
    return (
        <div>
            {count}
        </div>
    )
}
```
>注意：useContext的参数必须是context对象本身，调用了useContext的组件会在context值变化时重新渲染。当前的context值由上层组件中距离当前组件最近的<xxxContext.Provider>的value prop决定。当Provider的value值发生变化时，它内部的所有消费组件都会被重新渲染，并且Provider及其内部consumer组件都不受制于shouldComponentUpdate函数，当consumer组件在其祖先组件退出更新的情况下也能更新。

## 参考文献
* [React中的createContext和useContext](https://juejin.cn/post/6989054367064129573)

