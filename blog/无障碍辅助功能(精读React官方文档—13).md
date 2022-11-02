---
title: 无障碍辅助功能(精读React官方文档—13)
date: 2021-07-01
categories: 精读React官方文档
tags: 
- 精读React官方文档
---
## 什么是无障碍辅助功能？
>官方描述：网络无障碍辅助功能（Accessibility，也被称为 a11y，因为以 A 开头，以 Y 结尾，中间一共 11 个字母）是一种可以帮助所有人获得服务的设计和创造。无障碍辅助功能是使得辅助技术正确解读网页的必要条件。

**解读**

>无障碍辅助功能指的是一种可以帮助所有人获得服务的设计和创造。

## 标准和指南
### WCAG
[网络内容无障碍指南（Web Content Accessibility Guidelines，WCAG）](https://www.w3.org/WAI/standards-guidelines/wcag/) 为开发无障碍网站提供了指南。

### WAI-ARIA
[网络无障碍倡议 - 无障碍互联网应用（Web Accessibility Initiative - Accessible Rich Internet Applications）](https://www.w3.org/WAI/standards-guidelines/aria/) 文件包含了创建完全无障碍 JavaScript 部件所需要的技术。

**解读**

>虽然React大多数的DOM变量和属性命名都使用驼峰命名法，但是在无障碍辅助这方面JSX 支持所有 aria-* HTML 属性。aria-* 应该像其在 HTML 中一样使用带连字符的命名法。
```js
<input
  type="text"
  aria-label={labelText}
  aria-required="true"
  onChange={onchangeHandler}
  value={inputValue}
  name="name"
/>
```

## 语义化的HTML
>官方描述：语义化的 HTML 是无障碍辅助功能网络应用的基础。 利用多种 HTML 元素来强化您网站中的信息通常可以使您直接获得无障碍辅助功能。

* 有时候语义化的HTML会被div、ul、ol、table等元素破坏，此时我们可以使用React Fragments来组合各个组件。

* 举例
```js
import React, { Fragment } from 'react';

function ListItem({ item }) {
  return (
    <Fragment>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </Fragment>
  );
}

function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        <ListItem item={item} key={item.id} />
      ))}
    </dl>
  );
}
```
* 当不需要fragment 标签中添加任何 prop 且你的工具支持的时候，可以使用下面的这种短语法：
```js
function ListItem({ item }) {
  return (
    <>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </>
  );
}
```

## 无障碍表单
### 标记
>官方描述：所有的 HTML 表单控制，例如 \<input/> 和 \<textarea/> ，都需要被标注来实现无障碍辅助功能。我们需要提供屏幕朗读器以解释性标注。

* 官方提醒：请注意 for 在 JSX 中应该被写作 htmlFor：
```js
<label htmlFor="namedInput">Name:</label>
<input id="namedInput" type="text" name="name"/>
```

### 在出错时提醒用户
>官方描述：当出现错误时，所有用户都应该知情。下面的链接告诉我们如何给屏幕朗读器设置错误信息：
[W3C 展示用户推送](https://www.w3.org/WAI/tutorials/forms/notifications/)

## 控制焦点
>确保你的网络应用在即使只有键盘的情况下，依然能够正常使用。

### 键盘焦点及焦点轮廓
>官方定义：在 DOM 中，当前被选中来接受键盘信息的元素。我们可以在各处看到键盘焦点，它会被焦点轮廓包围，像下面的这个图像一样。
![image.png](https://img-blog.csdnimg.cn/img_convert/d736645c3c8c6f356db12a3e0011e92a.png)

### 跳过内容机制
**解读**

>跳过内容机制，就是一种隐藏的导航链接，它只会在使用键盘导航时可见。使用网页内部锚点和一些式样可以很容易地实现它，我们可以想想Github中有的文章的锚点跳转，大概就是那个意思。

### 使用程序管理焦点
* 为什么要使用程序管理焦点？
>我们的 React 应用在运行时会持续更改 HTML DOM，有时这将会导致键盘焦点的丢失或者是被设置到了意料之外的元素上。为了修复这类问题，我们需要以编程的方式让键盘聚焦到正确的方向上。比方说，在一个弹窗被关闭的时候，重新设置键盘焦点到弹窗的打开按钮上。
* 实现步骤
1. 先在一个 class 组件的 JSX 中创建一个元素的 ref
```js
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // 创造一个 textInput DOM 元素的 ref
    this.textInput = React.createRef();
  }
  render() {
  // 使用 `ref` 回调函数以在实例的一个变量中存储文本输入 DOM 元素
  //（比如，this.textInput）。
    return (
      <input
        type="text"
        ref={this.textInput}
      />
    );
  }
}
```
2. 在需要时于其他地方把焦点设置在这个组件上
```js
focus() {
  // 使用原始的 DOM API 显式地聚焦在 text input 上
  // 注意：我们通过访问 “current” 来获得 DOM 节点
  this.textInput.current.focus();
}
```
3. 有时，父组件需要把焦点设置在其子组件的一个元素上。我们可以通过props，让父组件将ref传递给子组件
```js
function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }
  render() {
    return (
      <CustomTextInput inputRef={this.inputElement} />
    );
  }
}

// 现在你就可以在需要时设置焦点了
this.inputElement.current.focus();
```
>官方提示：虽然这是一个非常重要的无障碍辅助功能，但它也是一种应该谨慎使用的技术。 我们应该在受到干扰时使用它来修复键盘焦点，而不是试图预测用户想要如何使用应用程序。

## 鼠标和指针事件
>确保任何可以使用鼠标和指针完成的功能也可以只通过键盘完成。只依靠指针会产生很多使键盘用户无法使用你的应用的情况。
由点击事件引起的破坏无障碍访问的典型示例：外部点击模式，用户可以通过点击元素以外的地方来关闭已打开的弹出框。

![image.png](https://img-blog.csdnimg.cn/img_convert/366759afaa2ab7df1e0d5f13839ed74b.png)

* 方法：在window对象上添加一个click事件
```js
class OuterClickExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.toggleContainer = React.createRef();

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.onClickOutsideHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onClickOutsideHandler);
  }

  onClickHandler() {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen
    }));
  }

  onClickOutsideHandler(event) {
    if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
      this.setState({ isOpen: false });
    }
  }

  render() {
    return (
      <div ref={this.toggleContainer}>
        <button onClick={this.onClickHandler}>Select an option</button>
        {this.state.isOpen && (
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        )}
      </div>
    );
  }
}
```
* 上面做法存在的问题
>当只使用键盘时，因为 window 对象不会接受到 click 事件，用户将无法使用 tab 切换到下一个元素。这样会导致用户无法使用你应用中的一些内容，导致不完整的用户体验。

* 使用正确的事件触发器，比如 onBlur 和 onFocus可以解决上述问题
```js
class BlurExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.timeOutId = null;

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);
  }

  onClickHandler() {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen
    }));
  }

  // 我们在下一个时间点使用 setTimeout 关闭弹窗。
  // 这是必要的，因为失去焦点事件会在新的焦点事件前被触发，
  // 我们需要通过这个步骤确认这个元素的一个子节点
  // 是否得到了焦点。
  onBlurHandler() {
    this.timeOutId = setTimeout(() => {
      this.setState({
        isOpen: false
      });
    });
  }

  // 如果一个子节点获得了焦点，不要关闭弹窗。
  onFocusHandler() {
    clearTimeout(this.timeOutId);
  }

  render() {
    // React 通过把失去焦点和获得焦点事件传输给父节点
    // 来帮助我们。
    return (
      <div onBlur={this.onBlurHandler}
           onFocus={this.onFocusHandler}>
        <button onClick={this.onClickHandler}
                aria-haspopup="true"
                aria-expanded={this.state.isOpen}>
          Select an option
        </button>
        {this.state.isOpen && (
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        )}
      </div>
    );
  }
}
```
* 注意：官方使用了aria-* props 以服务屏幕朗读器用户。

## 更为复杂的部件
>一个更加复杂的用户体验并不意味着更加难以访问。通过尽可能接近 HTML 编程，无障碍访问会变得更加容易，即使最复杂的部件也可以实现无障碍访问。
