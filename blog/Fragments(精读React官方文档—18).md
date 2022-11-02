---
title: Fragments(精读React官方文档—18)
date: 2021-07-08
categories: 精读React官方文档
tags: 
- 精读React官方文档
---
## Fragments存在的意义是什么？
>Fragments旨在解决一个组件包含多个元素，但是无需向DOM添加额外节点。
```js
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
```

## 动机
>以下面的代码为例，如果Columns组件返回多个td元素才能实现效果，但是如果我们在Columns组件中使用了div父元素，则会使td元素失效。Fragment则可以解决这个问题。
```js
class Table extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <Columns />
        </tr>
      </table>
    );
  }
}
```
```js
class Columns extends React.Component {
  render() {
    return (
      <div>
        <td>Hello</td>
        <td>World</td>
      </div>
    );
  }
}
```
```js
<table>
  <tr>
    <div>
      <td>Hello</td>
      <td>World</td>
    </div>
  </tr>
</table>
```

## 用法
* 使用React.Fragment代替原本的div
```js
class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Hello</td>
        <td>World</td>
      </React.Fragment>
    );
  }
}
```
* 通过上面的方法我们就可以正确的输出table了。
```js
<table>
  <tr>
    <td>Hello</td>
    <td>World</td>
  </tr>
</table>
```

### 短语法
* 我们可以使用一种类似空标签的语法来声明Fragments
```js
class Columns extends React.Component {
  render() {
    return (
      <>
        <td>Hello</td>
        <td>World</td>
      </>
    );
  }
}
```
>短语法不支持key或属性。

### 带key的Fragments
* 使用显示React.Fragment语法声明的片段可能具有key
```js
function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        // 没有`key`，React 会发出一个关键警告
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
```
>key是唯一可以传递给Fragment的属性。


