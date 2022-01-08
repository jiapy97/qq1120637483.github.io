---
title: 这一次，彻底搞懂困扰已久的Redux
date: 2022-01-08
author: Justin
top: false
cover: false
categories: Redux
tags:
  - Redux
---

## Redux是什么？
>Redux是一个JavaScript状态容器，用于进行全局的状态管理。

## Redxu的流程图（核心中的核心）
![image.png](https://img-blog.csdnimg.cn/img_convert/01c6c07e0d0d9c28a94b1357a0181f77.png)

## Redux的三大核心
### 核心1：单一数据源
>所谓的单一数据源，指的是整个应用的state被存储在一棵object tree中，并且这个ibject tree只存在于唯一一个store中。

### 核心2：state是只读的
>唯一改变state的方法就是触发action,action是一个用于描述已发生事件的普通对象，这样确保了视图和网络请求都不能直接修改state，相反他们只能表达想要修改的意图，因为所有的修改都被集中化处理，并且严格按照一个接一个的顺序执行。

### 核心3：使用纯函数来执行修改
>为了描述action是如何改变state的，我们需要编写reducer,这个reducers是一些纯函数，它接收先前的state和action，并且返回新的state。可以复用、可以控制顺序、传入附加参数。

## Redux的组成
### state状态
>state就是我们传递的数据，我们在使用React开发项目的时候，大致可以把state分为三类。
* DominDate：来自服务器端传过来的数据，比如获取到的用户的信息等。
* UI State：决定当前UI展示状态的数据，比如弹框的显示和隐藏等。
* App State：App级别的状态，比如：当前是否请求loading。

### Action事件
>Action是把数据从应用传到store的载体，**它是store的唯一数据来源，一般来说，我们可以通过store.dispatch()将action传递给store**
![image.png](https://img-blog.csdnimg.cn/img_convert/d5a0aa7be76fe98a945e9e907633a8b8.png)

* Action的本质就是一个JS对象。
* Action对象的内部必须要有一个type属性来表示要执行的动作。
* 多数情况下，上述的type都是一个字符串常量。
* 除了type字段之外，action的结构随意进行定义。
* 一般更倾向于用action创建函数（详情请看下面的实例）。
* action只是描述了状态要改变，但是没有描述状态如何改变。

**action实例**
![image.png](https://img-blog.csdnimg.cn/img_convert/7976a3d9ced02dd8deb0ba00be39a8f2.png)

**action函数实例**
![image.png](https://img-blog.csdnimg.cn/img_convert/5f31e0a534aa1cd4782e18a84c26450d.png)

### Reducer
>Reducer的本质就是一个纯函数，它用来响应发送过来的actions，然后经过处理把state发送给Store。在Reducer函数中需要return返回值，这样store才能接受到数据，reducer会接收到两个参数，一个是初始化的state，第二个则是发送过来的action.

**reducer函数实例**
![image.png](https://img-blog.csdnimg.cn/img_convert/4c3069239d1c3ed257f906f7056ade8e.png)

### Store
>store就是把action和reducer联系到一起的对象。

**主要职责**
1. store和reducer建立连接是通过createStore(reducer)来建立连接的。
2. store和action建立连接是通过store.dispatch(action对象)来建立连接的。
3. store和组件建立联系是通过入口文件传入store这个props。
4. 组件获取状态是通过this.props.store.getState()。
5. 状态要想渲染到页面是通过store.subscribe()。



