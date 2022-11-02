---
title: 组合VS继承(精读React官方文档—11)
date: 2021-06-29
categories: 精读React官方文档
tags: 
- 精读React官方文档
---
>官方推荐：使用组合而非继承来实现代码间的代码重用。

## 包含关系
>有些组件无法提前知道其子组件的内容，官方建议通过一个children prop来将子组件传递到渲染结果中去。
```js
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}
```
* 其他组件将任意组件作为子组件传递给上面我们定义的组件中
```js
function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}
```
**解读**

> \<FancyBorder/> JSX 标签中的所有内容都会作为一个 children prop 传递给 FancyBorder 组件。

* 有时候也可以不使用children prop，例如下面的这种情况
```js
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}
```
**解读**

>上面的案例告诉我们一个概念，即在React中组件也是可以当做props进行传递的，因为组件在本质上来说也是对象。

## 特例关系
* 有时候一些组件是另一些组件的特殊实例，比如下面的例子
```js
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />
  );
}
```
* 组合也同样适用于类组件
```js
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    );
  }

  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}
```
**解读**

>上面例子中的Dialog的children属性就是下面标红的部分：![image.png](https://img-blog.csdnimg.cn/img_convert/93a7c2ec45cc0a9c04a03eaf6ebae8cd.png)

## 讨论下继承
>官方在大量实践中表明没有发现需要使用继承来构建组件层次的情况。Props 和组合提供了清晰而安全地定制组件外观和行为的灵活方式。
注意：组件可以接受任意 props，包括基本数据类型，React 元素以及函数。如果你想要在组件间复用非 UI 的功能，我们建议将其提取为一个单独的 JavaScript 模块，如函数、对象或者类。组件可以直接引入（import）而无需通过 extend 继承它们。

**解读**

>在React中几乎不需要使用继承，只需学会如何灵活的使用组合即可，同时props这个强大的属性可以接受几乎一切数据类型，详情请见官方描述。
