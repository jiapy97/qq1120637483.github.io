---
title: 组件与props (精读React官方文档—04)
date: 2021-6-21
categories: 精读React官方文档
tags: 
- 精读React官方文档
---
## 组件的概念
>官方描述：组件允许你将 UI 拆分为独立可复用的代码片段，并对每个片段进行独立构思。组件，从概念上类似于 JavaScript 函数。它接受任意的入参（即 “props”），并返回用于描述页面展示内容的 React 元素。
**解读**
* 组件是独立可复用的代码片段，这种代码片段接收props参数并返回React元素。

## 函数组件与类组件
### 函数组件
```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
* 函数组件的本质就是一个JS函数，它符合上文我们对组件的定义，接收一个props参数并返回一个React元素。

### 类组件
```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## 渲染组件
* React元素不仅可以是DOM标签还可以是自定义组件
```js
const element = <div />;
const element = <Welcome name="Sara" />;
```
* 组件名称必须以大写字母开头。

## 组合组件
>官方描述：组件可以在其输出中引用其他组件。这就可以让我们用同一组件来抽象出任意层次的细节。按钮，表单，对话框，甚至整个屏幕的内容：在 React 应用程序中，这些通常都会以组件的形式表示。
**解读**
官方对这一概念的描述可能较为晦涩难懂，实际上通俗的讲，就是说一个组件中可以包含多个其他组件，我们看看官方给的例子就明白了。
```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```
* 一般情况下React应用的顶层组件为APP组件。

## 提取组件
>官方描述：将组件拆分为更小的组件。
```js
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```
* 上面的这个组件接收author,text,date等三个props,这个组件具有一定的嵌套关系，因此我们可以提取其中一部分的功能，然后建立新的组件。
* 提取Avator组件
```js
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
```
* 官方给Avatar这个组件的属性起名为user,意在告诉我们从组件自身的角度命名 props，而不是依赖于调用组件的上下文命名。
* 对Comment组件进行调整
```js
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```
* 后面根据这种方法，依次提取其他可复用的组件。

## Props的只读性
>官方描述：所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。
**解读**
* 我们不能修改函数组件或类组件的props，应尽量编写纯函数，所谓纯函数就是指同样的输入返回同样的结果，不产生副作用。
* 纯函数实例
```js
function sum(a, b) {
  return a + b;
}
```


