---
title: 与第三方库协同(精读React官方文档—20)
date: 2021-7-16
author: Justin
top: false
cover: false
categories: 精读React官方文档
tags:
  - 精读React官方文档
---
>React可以被应用于任何web应用中，也可以被嵌入到其他应用中，同时其他应用也可以嵌入到React中。下文将介绍React是如何与其他库进行协同的。

## 集成带有DOM操作的插件
>React不会理会React自身之外的DOM操作，它会根据内部虚拟DOM来决定是否需要更新，而且如果同一个DOM节点被另一个库操作了，React会觉得困惑而且没有办法恢复。避免冲突的最简单方式就是防止React组件更新。

## 如何解决这个问题
>下面举个例子，一个用于通用JQuery插件的wrapper，首先添加一个ref到根DOM元素，然后再componentDidMount中获取到这个DOM元素的引用，然后将其传递给JQuery插件。为了防止Reacat在挂载后出触碰这个DOM，我们的render函数返回的是一个空的\<div />.这个div元素既没有属性也没有子元素，所以React没有理由去更新它，使得Jquery插件可以自由的去管理这部分DOM。我们同时定义了componentDidMount和componentWillUnmount生命周期函数，因为我们绑定后还要进行注销监听，因为这样可以避免内存泄漏。

## 集成JQuery Chosen插件
>下面的例子将给用于增强select输入的Chosen插件写一个wrapper.

### Chosen对DOM做了哪些操作？
* 读取原DOM节点的属性，然后使用行内样式隐藏它。
* 紧挨着这个select之后增加一个独立的具有它自身显示表现的DOM节点。
* 值发生变化的时候触发JQuery事件来通知我们这些变化。

**最终想要实现的效果**

```js
function Example() {
  return (
    <Chosen onChange={value => console.log(value)}>
      <option>vanilla</option>
      <option>chocolate</option>
      <option>strawberry</option>
    </Chosen>
  );
}
```
* 首先创建一个空组件，这个组件的render函数会返回一个包含select的div
```js
class Chosen extends React.Component {
  render() {
    return (
      <div>
        <select className="Chosen-select" ref={el => this.el = el}>
          {this.props.children}
        </select>
      </div>
    );
  }
}
```
* 我们为什么要把select使用一个额外的div包裹起来，是因为上文我们说过，Chosen会紧挨着我们传递给它的select节点追加一个DOM元素。但是React规定一个组件只能有一个根DOM元素，所以我们通过一个div进行包裹，就不会使得React更新和Chosen追加的额外DOM节点发生冲突。

* 实现声明周期函数
```js
componentDidMount() {
  this.$el = $(this.el);
  this.$el.chosen();
}

componentWillUnmount() {
  this.$el.chosen('destroy');
}
```
* 实现在值变化的时候被通知到，需要在订阅由Chosen管理的select上的JQuery change事件。不直接把this.props.onChange传递给Chosen，是因为组件的props可能随时变化，并且也包括事件处理函数。我们通过定义一个handleChange方法来调用this.props.onChange，然后订阅JQuery的change事件：
```js
componentDidMount() {
  this.$el = $(this.el);
  this.$el.chosen();

  this.handleChange = this.handleChange.bind(this);
  this.$el.on('change', this.handleChange);
}

componentWillUnmount() {
  this.$el.off('change', this.handleChange);
  this.$el.chosen('destroy');
}

handleChange(e) {
  this.props.onChange(e.target.value);
}
```
* Chosen的文档建议我们使用JQuery的trigger()来通知原始DOM元素这些变化，我们需要增加一个componentDidUpdate生命周期函数来通知Chosen关于children列表的变化。
```js
componentDidUpdate(prevProps) {
  if (prevProps.children !== this.props.children) {
    this.$el.trigger("chosen:updated");
  }
}
```
* Chosen组件的完整实现
```js
class Chosen extends React.Component {
  componentDidMount() {
    this.$el = $(this.el);
    this.$el.chosen();

    this.handleChange = this.handleChange.bind(this);
    this.$el.on('change', this.handleChange);
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.children !== this.props.children) {
      this.$el.trigger("chosen:updated");
    }
  }

  componentWillUnmount() {
    this.$el.off('change', this.handleChange);
    this.$el.chosen('destroy');
  }
  
  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div>
        <select className="Chosen-select" ref={el => this.el = el}>
          {this.props.children}
        </select>
      </div>
    );
  }
}
```
## 和其他视图库集成
>得益于ReactDOM.render()的灵活性，使得React可以被嵌入到其他的应用中。

### 利用React替换基于字符串的渲染
* 在旧的Web应用中使用字符串渲染DOM是非常常见的，比如下面这段例子，这种例子是非常适合引入React的，我们可以直接把基于字符串的渲染重写为React组件。
```js
$('#container').html('<button id="btn">Say Hello</button>');
$('#btn').click(function() {
  alert('Hello!');
});
```
* 使用React组件进行重写
```js
function Button() {
  return <button id="btn">Say Hello</button>;
}

ReactDOM.render(
  <Button />,
  document.getElementById('container'),
  function() {
    $('#btn').click(function() {
      alert('Hello!');
    });
  }
);
```
* 使用React事件系统直接注册click处理函数到React button元素
```js
function Button(props) {
  return <button onClick={props.onClick}>Say Hello</button>;
}

function HelloButton() {
  function handleClick() {
    alert('Hello!');
  }
  return <Button onClick={handleClick} />;
}

ReactDOM.render(
  <HelloButton />,
  document.getElementById('container')
);
```
## 把React嵌入到Backbone视图
* Backbone是通过使用HTML字符串或者产生字符串的模板函数来创建DOM元素的过程的，这个过程同样可以通过渲染一个React组件来替换掉。下面我们会创建一个名为ParagraphView的Backbone视图，这个视图会重载render函数来渲染一个React Paragraph组件到Backbone提供的DOM元素中，在这里我们仍然需要使用ReactDOM.render()
```js
function Paragraph(props) {
  return <p>{props.text}</p>;
}

const ParagraphView = Backbone.View.extend({
  render() {
    const text = this.model.get('text');
    ReactDOM.render(<Paragraph text={text} />, this.el);
    return this;
  },
  remove() {
    ReactDOM.unmountComponentAtNode(this.el);
    Backbone.View.prototype.remove.call(this);
  }
});
```
>当一个组件在React树中从内部删除的时候，清理的工作是自动完成的，但是因为我们现在手动移出整个树，所以必须调用ReactDOM.unmountComponentAtNode()。

## 和Model层集成
>React组件也可以使用其他框架和库的Model层。

## 在React组件中使用Backbone的Modal
>在React组件中使用Backbone的Model和Collection最简单的方法就是监听多种变化事件并且手动强制触发一个更新。
```js
class Item extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.forceUpdate();
  }

  componentDidMount() {
    this.props.model.on('change', this.handleChange);
  }

  componentWillUnmount() {
    this.props.model.off('change', this.handleChange);
  }

  render() {
    return <li>{this.props.model.get('text')}</li>;
  }
}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.forceUpdate();
  }

  componentDidMount() {
    this.props.collection.on('add', 'remove', this.handleChange);
  }

  componentWillUnmount() {
    this.props.collection.off('add', 'remove', this.handleChange);
  }

  render() {
    return (
      <ul>
        {this.props.collection.map(model => (
          <Item key={model.cid} model={model} />
        ))}
      </ul>
    );
  }
}
```


