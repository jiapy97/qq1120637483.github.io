---
title: 元素渲染 (精读React官方文档—03)
date: 2021-06-20
categories: 精读React官方文档
tags: 
- 精读React官方文档
---
## 元素是什么？
>官方描述：元素是构成 React 应用的最小砖块。元素描述了你在屏幕上想看到的内容。与浏览器的 DOM 元素不同，React 元素是创建开销极小的普通对象。React DOM 会负责更新 DOM 来与 React 元素保持一致。
**解读**
* React元素的本质是对象。
* React DOM会负责将这个对象更新到DOM中，来和React元素保持一致。
* 组件和元素是不同的，组件是由元素组成的。
**元素举例**
```js
const element = <h1>Hello, world</h1>;
```

## 将一个元素渲染为DOM
* 一般情况下React构建的应用通常只有一个根节点。
**通过ReactDOM.render将React元素渲染到根DOM节点**
```js
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

## 更新已渲染的元素
>官方描述：React 元素是不可变对象。一旦被创建，你就无法更改它的子元素或者属性。一个元素就像电影的单帧：它代表了某个特定时刻的 UI。根据我们已有的知识，更新 UI 唯一的方式是创建一个全新的元素，并将其传入 ReactDOM.render()。
**解读**
>在React中要想更新UI必须调用render。

## React只更新它需要更新的部分
>官方描述：React DOM 会将元素和它的子元素与它们之前的状态进行比较，并只会进行必要的更新来使 DOM 达到预期的状态。
**解读**
>React在更新的时候，不会全部更新，只会更新不同的地方，这是一种通俗的说法，也就是React在更新的时候，会调用Diff算法，关于这个算法的详细描述，后面我会出专门的专栏进行讲解。
**例子**
```js
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```
**DOM结构**
![](https://img-blog.csdnimg.cn/img_convert/64cb1d298a29ec385776ffddf9195cca.gif)
