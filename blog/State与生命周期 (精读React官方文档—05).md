---
title: State与生命周期 (精读React官方文档—05)
date: 2021-06-22
categories: 精读React官方文档
tags: 
- 精读React官方文档
---
## state是私有的。
>官方描述：State 与 props 类似，但是 state 是私有的，并且完全受控于当前组件。
**解读**
* 官方对state的介绍很重要，我们必须要知道state是私有的，并且完全受控于当前组件。

## 将函数组件转换为类组件
1. 创建一个同名的类，并且继承与React.Component.
2. 添加一个空的render()方法.
3. 将函数体(return(...))移动到render方法中.
4. 在render方法中使用this.props代替props.
5. 删除剩余的空函数声明.

### 函数组件
```js
function Clock(props) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}
```

### 类组件
```js
class Clock extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
```
* 每次更新的时候render函数都会被调用。

## 向类组件中添加局部state
1. 将render方法中的this.props.data转换为this.state.date.
2. 给类添加一个构造函数，并为this.state赋值.
3. 移出类元素中的date属性.

## 将声明周期方法添加到类组件中
* componentDidMount():组件挂载后开始运行，此处适合开启定时器。
* componentWillUnMount():组件将要卸载的时候运行，此处适合清除定时器。
* 上面的这种方法叫做声明周期方法。

### 使用类组件实现计时功能
```js
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick();
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);
```

### 计时器的执行顺序
1. 当Clock组件传递给ReactDOM.reder后，React会首先调用Clock组件的构造函数，然后初始化state.
2. React调用组件的render方法，然后更新DOM进行渲染。
3. 当Clock的输出被插入到DOM中后，开始调用componentDidMount这个生命周期函数，这个生命周期函数中，React向浏览器设置一个定时器，每隔1秒，调用组件的tick方法。
4. 浏览器每调用一次tick方法，tick方法都会通过setState更新一次状态，只要状态发生了改变，React就会重新调用组件的render方法，然后进行重新渲染，然后更新DOM。
5. 一旦Clock组件从DOM中删除，React就会调用生命周期函数componentWillUnmount，然后清除定时器。

## 正确使用state
1. 不要直接修改state,而是需要通过setState.
```js
this.state.comment = 'Hello';  //不行
this.setState({comment: 'Hello'});  //可以
```
2. state的更新可能是异步的.
* 下面的代码可能无法更新state
```js
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
```
* 解决上面的问题，可以让state接收一个函数，这也是setState更新状态的第二种方式。
```js
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```
3. state的更新会被合并。
>看下面的例子你就明白了。
```js
constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }
componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }
```
>官方解释：this.setState({comments}) 完整保留了 this.state.posts， 但是完全替换了 this.state.comments。
这里官方的解释非常完善了。

## 数据是向下流动的
>官方描述：组件可以选择把它的 state 作为 props 向下传递到它的子组件中。FormattedDate 组件会在其 props 中接收参数 date，但是组件本身无法知道它是来自于 Clock 的 state，或是 Clock 的 props，还是手动输入的。
```js
<FormattedDate date={this.state.date} />
```
```js
function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
```
**解读**
* 这种数据流就是单向数据流，因为state产生的数据只能影响其子组件，
