---
title: 深入 JSX(精读React官方文档—21)
date: 2021-7-18
author: Justin
top: false
cover: false
categories: 精读React官方文档
tags:
  - 精读React官方文档
---
>JSX的本质是React.createElement()函数的语法糖。以下面的JSX代码为例：
```js
<MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton>
```

* 会编译为：
```js
React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'Click Me'
)
```

* 自闭合的标签形式
```js
<div className="sidebar" />
```

* 会编译为：
```js
React.createElement(
  'div',
  {className: 'sidebar'}
)
```

## 指定React元素类型
>JSX标签的第一部分指定了React元素的类型。大写字母开头的JSX标签意味着它们是React组件。

## React必须在作用域内
>由于JSX会编译成React.createElement调用形式，所以React库必须包含在JSX代码作用域内，例如下面的代码中，虽然React和CustomButton没有被直接使用，但是还是需要被导入：
```js
import React from 'react';
import CustomButton from './CustomButton';

function WarningButton() {
  // return React.createElement(CustomButton, {color: 'red'}, null);
  return <CustomButton color="red" />;
}
```
>如果你企图通过script标签加载React,必须将React挂载到全局变量中。

## 在JSX类型中使用点语法
>在JSX中可以使用点语法来引用一个React组件，例如下面的代码，MyComponents是一个对象，DatePicker是一个组件。
```js
import React from 'react';

const MyComponents = {
  DatePicker: function DatePicker(props) {
    return <div>Imagine a {props.color} datepicker here.</div>;
  }
}

function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />;
}
```

## 用户定义的组件必须以大写字母开头
>以小写字母开头的元素代表的是一个HTML内置的组件，比如div、span会生成相应的字符串'div','span'传递给React.createElement,大写字母开头的元素则对应这JS引入或者自定义的组件。

* 如果你确实需要一个以小写字母开头的组件，则在JSX使用它之前，必须将它赋值给一个大写字母开头的变量，下面的代码则无法按照预期运行：
```js
import React from 'react';

// 错误！组件应该以大写字母开头：
function hello(props) {
  // 正确！这种 <div> 的使用是合法的，因为 div 是一个有效的 HTML 标签
  return <div>Hello {props.toWhat}</div>;
}

function HelloWorld() {
  // 错误！React 会认为 <hello /> 是一个 HTML 标签，因为它没有以大写字母开头：
  return <hello toWhat="World" />;
}
```
* 要想解决上述的问题，我们只需对hello进行重命名Hello,同时在JSX中使用Hello
```js
import React from 'react';

// 正确！组件需要以大写字母开头：
function Hello(props) {
  // 正确！ 这种 <div> 的使用是合法的，因为 div 是一个有效的 HTML 标签：
  return <div>Hello {props.toWhat}</div>;
}

function HelloWorld() {
  // 正确！React 知道 <Hello /> 是一个组件，因为它是大写字母开头的：
  return <Hello toWhat="World" />;
}
```
## 在运行时选择类型
>官方描述：不能将通用表达式作为React元素类型，如果你想通过通用表达式来动态决定元素类型，你需要首先将它赋值给大写字母开头的变量。

**错误实例**

```js
import React from 'react';
import { PhotoStory, VideoStory } from './stories';

const components = {
  photo: PhotoStory,
  video: VideoStory
};

function Story(props) {
  // 错误！JSX 类型不能是一个表达式。
  return <components[props.storyType] story={props.story} />;
}
```

**正确实例**
```js
import React from 'react';
import { PhotoStory, VideoStory } from './stories';

const components = {
  photo: PhotoStory,
  video: VideoStory
};

function Story(props) {
  // 正确！JSX 类型可以是大写字母开头的变量。
  const SpecificStory = components[props.storyType];
  return <SpecificStory story={props.story} />;
}
```
## JSX中的Props
>有多种方式可以在JSX中指定props.

### JS表达式作为props
>可以吧包裹在{}中的JS表达式作为一个prop传递给JSX元素，例如下面的JSX：
```js
<MyComponent foo={1 + 2 + 3 + 4} />
```
>需要注意的是：if语句和for循环不是JS表达式，所以这些不能在JSX中直接使用，但是可以用在JSX之外的代码中。
```js
function NumberDescriber(props) {
  let description;
  if (props.number % 2 == 0) {
    description = <strong>even</strong>;
  } else {
    description = <i>odd</i>;
  }
  return <div>{props.number} is an {description} number</div>;
}
```

### 字符串字面量
>可以将字符串字面量赋值给prop,例如下面的两个JSX表达式是等价的：
```js
<MyComponent message="hello world" />

<MyComponent message={'hello world'} />
```
>当你将字符串字面量赋值给prop时，它的值是未转义的，下面两个JSX表达式是等价的：
```js
<MyComponent message="&lt;3" />

<MyComponent message={'<3'} />
```

### props默认值为‘True’
>如果你没给prop赋值，那么它的默认值为true,下面两个JSX表达式是等价的：
```js
<MyTextBox autocomplete />

<MyTextBox autocomplete={true} />
```

### 属性展开
>如果已经有了一个props对象，则可以使用展开运算符来传递整个props对象，所以下面的两个组件是等价的：
```js
function App1() {
  return <Greeting firstName="Ben" lastName="Hector" />;
}

function App2() {
  const props = {firstName: 'Ben', lastName: 'Hector'};
  return <Greeting {...props} />;
}
```
* 只保留当前组件需要的props,使用展开运算符将其它props传递下去的情况：
```js
const Button = props => {
  const { kind, ...other } = props;
  const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
  return <button className={className} {...other} />;
};

const App = () => {
  return (
    <div>
      <Button kind="primary" onClick={() => console.log("clicked!")}>
        Hello World!
      </Button>
    </div>
  );
};
```
>在上述的例子中，kind的prop会被安全的保留，它将不会被传递给DOM中的button元素，所有其它的props会通过...other对象传递，使得这个组件的应用非常灵活，我们可以看到它传递了一个onClick和children属性，但是我们建议谨慎的使用该语法，因为可能将props传递给不相关的组件。

## JSX中的子元素
>包含在开始和结束标签之间的JSX表达式内容将作为特定属性props.children传递给外层组件，下面将介绍几种不同的方法来传递子元素。

### 字符串字面量
* 下面的组件的props.children就只是该字符串
```js
<MyComponent>Hello world!</MyComponent>
```
* 可以采用编写HTML的方式来编写JSX
```js
<div>This is valid HTML &amp; JSX at the same time.</div>
```
>JSX会移出收尾的空格以及空行，下面的几种方式都是等价的。
```js
<div>Hello World</div>

<div>
  Hello World
</div>

<div>
  Hello
  World
</div>

<div>

  Hello World
</div>
```

### JSX子元素
>子元素允许由多个JSX元素组成，这对于嵌套组件非常有用：
```js
<MyContainer>
  <MyFirstComponent />
  <MySecondComponent />
</MyContainer>
```

* 可以将不同类型的子元素混合在一起。
```js
<div>
  Here is a list:
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</div>
```

* React组件也能够返回存储在数组中的一组元素：
```js
render() {
  // 不需要用额外的元素包裹列表元素！
  return [
    // 不要忘记设置 key :)
    <li key="A">First item</li>,
    <li key="B">Second item</li>,
    <li key="C">Third item</li>,
  ];
}
```

### JavaScript表达式作为子元素
>JS表达式可以被包裹在{}中作为子元素，所以下面的表达式是等价的：
```js
<MyComponent>foo</MyComponent>

<MyComponent>{'foo'}</MyComponent>
```
>这UI与展示任意长度的列表非常有用
```js
function Item(props) {
  return <li>{props.message}</li>;
}

function TodoList() {
  const todos = ['finish doc', 'submit pr', 'nag dan to review'];
  return (
    <ul>
      {todos.map((message) => <Item key={message} message={message} />)}
    </ul>
  );
}
```

* JS表达式也可以和其他类型的子元素组合，这种做法可以方便的替代模板字符串。
```js
function Hello(props) {
  return <div>Hello {props.addressee}!</div>;
}
```

### 函数作为子元素
>props.children和其他prop一样，它可以传递任意类型的数据，而不仅仅是React已知的可渲染类型，例如你有一个自定义组件，你可以把回调函数作为props.children进行传递：
```js
// 调用子元素回调 numTimes 次，来重复生成组件
function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}
```
>可以将任何东西作为子元素传递给自定义组件，只要确保在该组件渲染之前能够被转换为React理解的对象。

## 布尔类型、Null以及Undefined将会被忽略
>false、null、undefined、true是合法的子元素，但是它们不会被渲染，所以下面的JSX表达式渲染的结果相同：
```js
<div />

<div></div>

<div>{false}</div>

<div>{null}</div>

<div>{undefined}</div>

<div>{true}</div>
```

* 上述的类型，有助于帮助我们依据特定的条件来渲染其他的React元素，例如在以下JSX中，仅当showHeader为true的时候，才会渲染Header组件：
```js
<div>
  {showHeader && <Header />}
  <Content />
</div>
```

* 0仍然会被渲染
```js
<div>
  {props.messages.length &&
    <MessageList messages={props.messages} />
  }
</div>
```

* 要想解决上述的问题，要确保&&之前的表达式总是布尔值
```js
<div>
  {props.messages.length > 0 &&
    <MessageList messages={props.messages} />
  }
</div>
```

* 如果你想渲染false、true、null、undefined等值，你需要先将它们转换为字符串
```js
<div>
  My JavaScript variable is {String(myVariable)}.
</div>
```

## 欢迎大家关注我的专栏，一起学习React!
