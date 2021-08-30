---
title: React是什么 (精读React官方文档—01)
date: 2021-06-19
categories: 精读React官方文档
tags: 
- 精读React官方文档
---
## React是什么？
>关于React是什么，我们首先看一下官方是如何进行介绍的。“React 是一个声明式，高效且灵活的用于构建用户界面的 JavaScript 库。”

>到底什么是声明式编程？要想准确理解声明式编程，我们首先要知道什么是命令式编程，命令式编程是指的详细的告诉计算机该怎么做，来达到我们的目的，声明式编程则是命令式的编程的方面，只告诉计算机我们想要的结果，至于底层怎么实现，则不是我们所关心的，这就是声明式编程的通俗化理解。

## 什么是组件？
>官方定义：将一些简短、独立的代码片段组合成复杂的 UI 界面，这些代码片段被称作“组件”。

>解读：我们可以理解为能够组成一个UI界面的每一个独立的代码片段，例如表单的代码集合，轮播图的代码集合，讲这些能够构成特定功能的代码集合我们称之为组件。

## React.component子类
>我们以下面这段代码为例，进行详细的分析：

```js
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
```
>官方描述：ShoppingList是React的一个组件类。一个组件接收一些参数，我们把这些参数叫做 props（“props” 是 “properties” 简写），然后通过 render 方法返回需要展示在屏幕上的视图的层次结构。render 方法的返回值描述了你希望在屏幕上看到的内容。React 根据描述，然后把结果展示出来。更具体地来说，render 返回了一个 React 元素，这是一种对渲染内容的轻量级描述。大多数的 React 开发者使用了一种名为 “JSX” 的特殊语法，JSX 可以让你更轻松地书写这些结构。

**解读：**
1. 组件接收的参数叫做props. 
2. render方法返回的结果就是渲染到屏幕上我们看到的结果。
3. render函数中包含的是JSX语法，这个和JS语法不同。

## JSX语法
>官方描述：在 JSX 中你可以任意使用 JavaScript 表达式，只需要用一个大括号把表达式括起来。每一个 React 元素事实上都是一个 JavaScript 对象，你可以在你的程序中把它当保存在变量中或者作为参数传递。

**解读：**
* 官方明确的说了再JSX中可以任意使用JS表达式，但是需要通过大括号括起来。
* 此处我们要注意，官方说的可是JS表达式，所以我们首先要明确一点什么是JS表达式，if语句算是JS表达式吗？我们看下面的这个例子。![image.png](https://img-blog.csdnimg.cn/img_convert/3ad195f5a6a24092a695e7c3baec801f.png)，在这个例子中React会报错，因为if语句不算表达式，到底什么才是表达式呢？请继续往下看。
* 表达式的定义：下面的定义摘录自MDN，表达式是一组代码的集合，它返回一个值。具体的解释，请看[JS表达式（MDN）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators)



