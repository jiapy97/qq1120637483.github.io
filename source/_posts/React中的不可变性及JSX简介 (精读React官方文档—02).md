---
title: React中的不可变性及JSX简介 (精读React官方文档—02)
date: 2021-06-19
categories: 精读React官方文档
tags: 
- 精读React官方文档
---
## 为什么不可变性在React中非常重要？
* 不可变性指的是不直接修改数据，而是使用新的数据替换旧的数据。
* 不可变性带来的优势：
1. 撤销和回退操作在开发中是很常见的，不直接在数据上进行修改，可以帮助我们更好的回溯数据。
2. 更容易跟踪数据的改变。
3. 方便确定React重新渲染的时机。

## 通过slice函数返回数组的副本
* 这个方法是我们必须掌握的。
```js
const arr = [1,2,3,4];

arr.slice()  // [1,2,3,4]
console.log(arr === arr.slice()); //false
```

## JSX简介
```js
const element = <h1>Hello, world!</h1>;
```
**解读**
* JSX是JavaScript的语法拓展。
* JSX可以生成React元素。

### 为什么使用JSX？
>官方描述：React 认为渲染逻辑本质上与其他 UI 逻辑内在耦合，React 并没有采用将标记与逻辑进行分离到不同文件这种人为地分离方式，而是通过将二者共同存放在称之为“组件”的松散耦合单元之中，来实现关注点分离。在 JavaScript 代码中将 JSX 和 UI 放在一起时，会在视觉上有辅助作用。它还可以使 React 显示更多有用的错误和警告消息。
**解读**
* 我们首先要搞懂一个概念耦合是什么？答：耦合表示两个子系统（或类）之间的关联程度。也就是React认为渲染的逻辑和其他UI逻辑的广联程度比较大，在JS中将JSX和UI放在一起会帮助我们显示更多的错误和警告。

### JSX也是一个表达式
* 可以在if或for语句中使用JSX，并将JSX进行返回，赋值给变量，将JSX当做参数进行出传递，都是可以的。
* 编译后，JSX表达式会被转换为普通的JavaScript函数调用。

### JSX特定属性
1. 属性值为字面量的情况可以通过引号的形式进行引入。
```js
const element = <div tabIndex="0"></div>;
```
2. 属性值为JS表达式的时候，需要通过大括号来进行引入。
```js
const element = <img src={user.avatarUrl}></img>;
```
**注意事项：**

JSX中使用小驼峰命名来对属性进行命名，例如：JSX 里的 class 变成了 className，而 tabindex 则变为 tabIndex。

### 使用JSX指定子元素
* 单标签的形式
```js
const element = <img src={user.avatarUrl} />;
```
* JSX标签中包含很多元素的情形。
```js
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

### JSX防止注入攻击
>官方描述：React DOM 在渲染所有输入内容之前，默认会进行转义。它可以确保在你的应用中，永远不会注入那些并非自己明确编写的内容。所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止 XSS（cross-site-scripting, 跨站脚本）攻击。

**解读**
React底层已经帮我们做好了，我们可以直接用了。

### JSX表示对象
* Babel不仅有将ES6转为ES5的功能，同时还可以将JSX语法转译为React.createElement()这个函数调用。下面两种代码是等效的。
```js
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```
```jsx
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```
* React.createElement()实际上创建了这样一个对象。
```js
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```
**解读**
通俗的说，Babel会将JSX语法转换为JS对象的形式，React 通过读取这些对象，然后使用它们来构建 DOM 以及保持随时更新。

