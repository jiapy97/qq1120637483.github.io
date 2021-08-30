---
title: react-redux的3个主要作用
date: 2021-7-29
author: Justin
top: false
cover: false
categories: React
tags:
  - React
---
## 已经有了redux为什么还要设计react-redux?
>因为redux和组件的耦合度太高，为了解耦，所以设计了redux。一旦我们引入了react-redux，我们便不再需要使用store的subscribe自己去订阅状态了。UI组件就像普通组件一样内部没有redux的身影。可读性更高。

## UI组件和容器组件
>react-redux将组件分为UI组件和容器组件，UI组件只负责UI的呈现，不带有任何业务逻辑，通过props接收数据，不使用Rdux的API，一般保存在components文件夹下，容器组件，只负责管理数据和业务逻辑，不负责UI的呈现，使用redux的API，一般保存在containers文件夹下。


## react-redux的核心API
### 1. Provider：该组件包含的组件能够获取到状态state.
>Provider存在的意义相当于可以替换掉redux中的subscribe。
```js
ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
),document.querySelector('#root'))
```

### 2. connect：连接UI组件和容器组件以及Redux

## react-redux的三个主要作用
### 作用1
**将组件分为了容器组件和UI组件，UI组件通过props来获取状态和操作状态的方法。**

### 作用2
**通过Provider组件来取代redux中的store.subscribe来监听组件的状态变化，用于渲染组件。**

### 作用3
**在容器组件中通过核心API connect来连接UI组件和redux，connect是一个高阶函数，第一个参数接收的是两个回调函数，回调函数1：将接收一个state，然后返回一个对象对象中包含了UI组件想要的状态。回调函数2：接收一个dispatch，返回一个对象，对象中包含了UI组件想要操作状态的方法。同时还有一个简写方法，就是第二个参数直接传入一个对象，该对象包含操作状态的方法。（核心：就是将state和dispatch映射到UI组件的props中）**

### 核心代码
```js
export default connect(
    state => ({count: state}),
    dispatch => {
        return {
            increment: number => dispatch(increment(number)),
            decrement: number => dispatch(decrement(number)),
        }
    }
)(Counter)
```
**下面是简写形式**
```js
export default connect(
    state => ({count: state}),
    {increment,decrement}
)(Counter)
```

## 注意事项
* 渲染的是容器组件，而不是UI组件。（Provider包裹的）




