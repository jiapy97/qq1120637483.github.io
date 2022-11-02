---
title: 条件渲染 (精读React官方文档—07)
date: 2021-06-24
categories: 精读React官方文档
tags: 
- 精读React官方文档
---
## 引言
>官方描述：React 中的条件渲染和 JavaScript 中的一样，使用 JavaScript 运算符 if 或者条件运算符去创建元素来表现当前的状态，然后让 React 根据它们来更新 UI。
* 观察下面两个组件
```js
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
```
* 再创建一个 Greeting 组件，它会根据用户是否登录来决定显示上面的哪一个组件。
```js
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
```
这个示例根据 isLoggedIn 的值来渲染不同的问候语。

**解读**
>通俗的来说，就是React允许我们按需进行渲染，而不必渲染所有组件。

## 元素变量
>官方描述：你可以使用变量来储存元素。 它可以帮助你有条件地渲染组件的一部分，而其他的渲染部分并不会因此而改变。

**解读**
>在React中可以通过变量来存储元素，需要的时候进行渲染。
* 观察下面的两个组件
```js
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
```
>官方描述：下面我们将创建一个名叫 LoginControl 的有状态的组件。它将根据当前的状态来渲染 <LoginButton /> 或者 <LogoutButton />。同时它还会渲染上一个示例中的 <Greeting />。
* 下面是通过if语句来进行条件渲染
```js
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);
```

## 与运算符&&
>官方描述：通过花括号包裹代码，你可以在 JSX 中嵌入表达式。这也包括 JavaScript 中的逻辑与 (&&) 运算符。它可以很方便地进行元素的条件渲染。
```js
{unreadMessages.length > 0 &&
    <h2>
      You have {unreadMessages.length} unread messages.
    </h2>
}
```

* 为什么可以这么写？
>之所以能这样做，是因为在 JavaScript 中，true && expression 总是会返回 expression, 而 false && expression 总是会返回 false。
* 精选案例
```js
render() {
  const count = 0;
  return (
    <div>
      { count && <h1>Messages: {count}</h1>}
    </div>
  );
}
```
**解读**
>官方描述：请注意，返回 false 的表达式会使 && 后面的元素被跳过，但会返回 false 表达式。在下面示例中，render 方法的返回值是 \<div>0\</div>。

## 三目运算符
* 实例
```js
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}
```
```js
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn
        ? <LogoutButton onClick={this.handleLogoutClick} />
        : <LoginButton onClick={this.handleLoginClick} />
      }
    </div>
  );
}
```
>官方提示：如果条件过于复杂，建议提取组件。

## 阻止条件渲染
>官方描述：若要完成此操作，你可以让 render 方法直接返回 null，而不进行任何渲染。
>下面的示例中，<WarningBanner /> 会根据 prop 中 warn 的值来进行条件渲染。如果 warn 的值是 false，那么组件则不会渲染:
```js
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
```
>官方提示：在组件的 render 方法中返回 null 并不会影响组件的生命周期。例如，上面这个示例中，componentDidUpdate 依然会被调用。
