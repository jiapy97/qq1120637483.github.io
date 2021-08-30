---
title: 事件处理 (精读React官方文档—06)
date: 2021-06-23
categories: 精读React官方文档
tags: 
- 精读React官方文档
---
## React中的事件处理
* React中的事件的命名采用小驼峰的命名方式，小驼峰的实例onClcik
* 传统的HTML事件处理函数传入的是一个字符串
```js
<button onclick="activateLasers()">
  Activate Lasers
</button>
```
* React中事件处理通过大括号进行包裹
```js
<button onClick={activateLasers}>
  Activate Lasers
</button>
```
* 在React中要想阻止默认行为必须要通过preventDefault，不能通过返回false的方式。
>传统的 HTML 中阻止表单的默认提交行为。
```js
<form onsubmit="console.log('You clicked submit.'); return false">
  <button type="submit">Submit</button>
</form>
```
>React中阻止表单的默认提交行为
```js
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```
* React监听DOM元素，一般不是通过addEventListener。而是通过组件中的方法。
* 谨慎的对待JSX语法中回调函数的this,class的方法默认不会绑定this,为了解决这类问题，我们一般在回调函数中使用箭头函数。
```js
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // 此语法确保 `handleClick` 内的 `this` 已被绑定。
    return (
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
    );
  }
}
```

## 向事件处理程序传递参数
>官方描述：在循环中，通常我们会为事件处理函数传递额外的参数。例如，若 id 是你要删除那一行的 ID，以下两种方式都可以向事件处理函数传递参数。
```js
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```
* 上面的两种方式是等价的，一种是通过箭头函数，一种是通过bind来绑定JSX回调函数中的this，然后传入参数。
>官方描述：在这两种情况下，React 的事件对象 e 会被作为第二个参数传递。如果通过箭头函数的方式，事件对象必须显式的进行传递，而通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递。
**解读**
* 通过箭头函数的方式，事件对象需要显示传递，而通过bind则可以进行隐式传递。
