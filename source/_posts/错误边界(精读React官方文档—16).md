---
title: 错误边界(精读React官方文档—16)
date: 2021-07-04
categories: 精读React官方文档
tags: 
- 精读React官方文档
---
## 什么是错误边界？
>官方描述：过去，组件内的 JavaScript 错误会导致 React 的内部状态被破坏，并且在下一次渲染时 产生 可能无法追踪的 错误。这些错误基本上是由较早的其他代码（非 React 组件代码）错误引起的，但 React 并没有提供一种在组件中优雅处理这些错误的方式，也无法从错误中恢复。部分 UI 的 JavaScript 错误不应该导致整个应用崩溃，为了解决这个问题，React 16 引入了一个新的概念 —— 错误边界。

**解读**

错误边界指的是部分UI导致的JS错误导致整个应用崩溃，React为防止这种问题的发生引入 了错误边界，错误边界是一种组件，这种组件可以检测发生在其子组件树任何位置的JS错误，并打印这些错误，同时展示降级UI，而并不会展示那些发生崩溃的子组件，错误边界在渲染期间，生命周期方法以及整个组件树的构造函数中捕获错误。

## 错误边界无法捕获哪些错误？
1. 事件处理
2. 异步代码
3. 服务端渲染
4. 它自身抛出来的错误

## 渲染备用UI
* 使用static getDerivedStateFromError()
```js
static getDerivedStateFromError(error) {
// 更新 state 使下一次渲染能够显示降级后的 UI
return { hasError: true };
}
```
## 打印错误信息
* 使用componentDidCatch()打印错误信息
```js
componentDidCatch(error, errorInfo) {
// 你同样可以将错误日志上报给服务器
logErrorToMyService(error, errorInfo);
}
```

## 打印错误信息并渲染备用UI
```js
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}
```
* 我们可以将错误边界封装为一个组件进行使用
```js
<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>
```
>错误边界的工作方式类似于JS中的catch，不同的地方在于错误边界只针对React组件，只有类组件才可以成为错误边界组件。

**注意**

1. 错误边界仅可以捕获其子组件的错误，它无法捕获自身的错误。
2. 如果一个错误边界无法渲染错误，则错误会冒泡至最近的上层错误边界。

## 错误边界应该放置在哪？
>错误边界的位置可以选在最顶层的路由组件并未用户展示一个错误信息。

## 未捕获错误的新行为
>自React16以来，任何未被错误边界捕获的错误将会导致整个React组件树被卸载。之所以这样做是因为官方认为展示错误信息比不显示任何内容要糟糕。

## 组件栈追踪
>在开发环境下，React16会把渲染期间发生的所有错误打印到控制台，处了错误信息和JS栈外，React16还提供了组件栈追踪，我们可以准确的查看发生在组件树内的错误信息
![image.png](https://img-blog.csdnimg.cn/img_convert/57023041fd788a130b009febdfb3a24f.png)
同时我们还可以在组件栈追踪中查看文件名和行号，这一功能在Create React App中默认打开。

## 关于try/catch?
* try/catch虽好，但是只能应用于命令式代码
```js
try {
  showButton();
} catch (error) {
  // ...
}
```
* 错误边界保留了React的声明性质。及时一个错误发生在componentDidUpdate方法中，并且由某一个深层组件树的setState引起，其仍然能够冒泡到最近的错误边界。

## 关于事件处理器
>React不需要错误边界来捕获事件处理器中的错误，与render方法和生命周期方法不同，事件处理器不会在渲染期间触发，因此如果他们抛出异常，React仍然能够知道需要在屏幕上显示什么。如果我们需要在事件处理器内部捕获错误，我们可以使用普通的JS try/catch语句：
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    try {
      // 执行操作，如有错误则会抛出
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    if (this.state.error) {
      return <h1>Caught an error.</h1>
    }
    return <button onClick={this.handleClick}>Click Me</button>
  }
}
```
## React15中的命名不再使用
>请将unstable_handleError替换为componentDidCatch。

