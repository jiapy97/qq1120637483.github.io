---
title: 表单(精读React官方文档—09)
date: 2021-06-26
categories: 精读React官方文档
tags: 
- 精读React官方文档
---
## 表单基本介绍
>官方描述：在 React 里，HTML 表单元素的工作方式和其他的 DOM 元素有些不同，这是因为表单元素通常会保持一些内部的 state。

**举例**

```js
<form>
  <label>
    名字:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="提交" />
</form>
```

**解读**

该表单具有默认的HTML表单行为，实现这种效果的方式，在React中是通过受控组件的方式。

## 受控组件
>受控组件的定义：渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。

* 让前一个例子在提交的时候，打印出名称的受控组件的例子
```js
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('提交的名字: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}
```
**解读**

>对于受控组件来说，输入的值始终由React的state驱动，因为表单上设置了value属性，初始值为状态中的值，然后每当输入的值发生变化的时候，都会调用handlechange这个函数，不断更新状态的值，状态一旦发生变化，将重新渲染UI，所以说，对于受控组件，输入的值始终由React的state驱动。

## textarea标签
>官方描述：在 React 中，\<textarea /> 使用 value 属性代替。这样，可以使得使用 \<textarea /> 的表单和使用单行 input 的表单非常类似：
```js
class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '请撰写一篇关于你喜欢的 DOM 元素的文章.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('提交的文章: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          文章:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}
```
**解读**

textarea标签在用法上和上文介绍的Input表单很类似。

## select 标签
* select标签是用来干什么的？答：下拉列表
```js
<select>
  <option value="grapefruit">葡萄柚</option>
  <option value="lime">酸橙</option>
  <option selected value="coconut">椰子</option>
  <option value="mango">芒果</option>
</select>
```

* React中选中一个下拉菜单选项不是通过selected而是通过value属性
```js
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('你喜欢的风味是: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          选择你喜欢的风味:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">葡萄柚</option>
            <option value="lime">酸橙</option>
            <option value="coconut">椰子</option>
            <option value="mango">芒果</option>
          </select>
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}
```
### 小结
>总的来说，这使得 \<input type="text" />, \<textarea /> 和\<select /> 之类的标签都非常相似—它们都接受一个 value 属性，你可以使用它来实现受控组件。

* 官方提示
在select标签中可以通过给value传入一个数组，来默认选中多个菜单项。
```js
<select multiple={true} value={['B', 'C']}>
```

## 文件Input标签
>官方描述：在 HTML 中，\<input type="file" /> 允许用户从存储设备中选择一个或多个文件，将其上传到服务器，或通过使用 JavaScript 的 File API 进行控制。
```js
<input type="file" />
```

**解读**
文件Input标签是一个非受控组件，因为其具有只读属性。

## 处理多个输入
>官方描述：当需要处理多个 input 元素时，我们可以给每个元素添加 name 属性，并让处理函数根据 event.target.name 的值选择要执行的操作。
```js
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          参与:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          来宾人数:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
```
**解读**

name属性相当于是Input标签的标识符。

* 上面的案例在更新状态的时候，使用了ES6 计算属性名称的语法更新给定输入名称对应的 state 值。
```js
this.setState({
  [name]: value
});
```

**这样做的原因**

对象的键底层存的是字符串，name是一个变量，我们要存的是变量对应的值，而不是name这个字符串。

## 受控输入空值
>官方描述：在受控组件上指定 value 的 prop 会阻止用户更改输入。如果你指定了 value，但输入仍可编辑，则可能是你意外地将value 设置为 undefined 或 null。
下面的代码：输入最初被锁定，但在短时间延迟后变为可编辑。
```js
ReactDOM.render(<input value="hi" />, mountNode);

setTimeout(function() {
  ReactDOM.render(<input value={null} />, mountNode);
}, 1000);
```
## 受控组件的替代品
>我们首先介绍下受控组件的缺点：

* 需要为数据变化的每种方式都编写事件处理函数，并通过一个React组件传递所有的输入state

* 替代方法：使用非受控组件，我们将在后面进行介绍。
