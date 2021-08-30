---
title: 高阶组件(精读React官方文档—19)高阶组件(精读React官方文档—19)
date: 2021-07-10
categories: 精读React官方文档
tags: 
- 精读React官方文档
---
**核心**
1. 高阶组件不用关心数据是如何渲染的，只用关心逻辑即可。
2. 被包装的组件不用关心数据是怎么来的，只用负责渲染即可。
3. 最后渲染的是高阶组件返回的组件。

[一个例子看懂高阶组件的用法](https://codesandbox.io/s/loving-blackburn-dtrwv?file=/src/index.js)
>高阶组件（HOC）是React中用于复用组件逻辑的一种高级技巧，HOC是基于React的组合特性而形成的设计模式。

**解读**

* 高阶组件是一种函数，接收的参数是组件，返回的也是组件。

```js
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

## 使用HOC解决横切关注点问题
>组件是React中代码复用的基本单元，但是有些模式并不适合传统组件。

* 下面的组件订阅外部数据源，用以渲染评论列表,组件名为CommentList
```js
class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      // 假设 "DataSource" 是个全局范围内的数据源变量
      comments: DataSource.getComments()
    };
  }

  componentDidMount() {
    // 订阅更改
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    // 清除订阅
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    // 当数据源更新时，更新组件状态
    this.setState({
      comments: DataSource.getComments()
    });
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    );
  }
}
```
* 订阅单个博客帖子的组件BlogPost
```js
class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      blogPost: DataSource.getBlogPost(props.id)
    };
  }

  componentDidMount() {
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    this.setState({
      blogPost: DataSource.getBlogPost(this.props.id)
    });
  }

  render() {
    return <TextBlock text={this.state.blogPost} />;
  }
}
```
### 上面两个组件的相同点
1. 在挂载时，向DataSource添加一个侦听器。
2. 在侦听器内部，当数据源发生变化变化时，调用setState。
3. 在卸载时，删除侦听器。

### 上面两个组件的不同点
1. DataSource上调用不同的方法。

>上面两个组件相同点的地方被不断的重复调用，在大型项目中，所以我们需要将这些共同使用的地方给抽象出来，然后让许多组件之间共享它，这正是高阶组件擅长的地方。

* 编写一个创建组件函数，这个函数接收两个参数，一个是要被包装的子组件，另一个则是该子组件订阅数据的函数。
```js
const CommentListWithSubscription = withSubscription(
  CommentList,
  (DataSource) => DataSource.getComments()
);

const BlogPostWithSubscription = withSubscription(
  BlogPost,
  (DataSource, props) => DataSource.getBlogPost(props.id)
);
```
* 当渲染 CommentListWithSubscription 和 BlogPostWithSubscription 时， CommentList 和 BlogPost 将传递一个 data prop，其中包含从 DataSource 检索到的最新数据.
```js
// 此函数接收一个组件...
function withSubscription(WrappedComponent, selectData) {
  // ...并返回另一个组件...
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(DataSource, props)
      };
    }

    componentDidMount() {
      // ...负责订阅相关的操作...
      DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props)
      });
    }

    render() {
      // ... 并使用新数据渲染被包装的组件!
      // 请注意，我们可能还会传递其他属性
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}
```
>HOC不会修改传入的组件，也不会使用继承来复制其行为，相反HOC是通过将组件包装在容器组件中来组成新的组件，HOC是纯函数，没有副作用。

**解读**

1. 被包装组件接收来自容器组件的所有prop,同时也接收一个新的用于render的data prop
2. HOC不用关心数据的使用方式，被包装组件也不用关心数据是怎么来的。

## 不要改变原始组件，使用组合
* 不要试图在HOC中修改组件原型
```js
function logProps(InputComponent) {
  InputComponent.prototype.componentDidUpdate = function(prevProps) {
    console.log('Current props: ', this.props);
    console.log('Previous props: ', prevProps);
  };
  // 返回原始的 input 组件，暗示它已经被修改。
  return InputComponent;
}

// 每次调用 logProps 时，增强组件都会有 log 输出。
const EnhancedComponent = logProps(InputComponent);
```
* 上面这种写法会造成另一个同样会修改componentDidUpate的HOC增强它，那么前面的HOC就会失效。
* HOC不应该修改传入组件，而应该使用组合的方式，将组件包装在容器组件中实现功能。
```js
function logProps(WrappedComponent) {
  return class extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('Current props: ', this.props);
      console.log('Previous props: ', prevProps);
    }
    render() {
      // 将 input 组件包装在容器中，而不对其进行修改。Good!
      return <WrappedComponent {...this.props} />;
    }
  }
}
```
## 约定：将不相关的props传递给被包裹的组件
>HOC为组件添加特性，自身不应该大幅改变约定，HOC应该透传与自身无关的props,大多数HOC都应该包含一个类似于下面的render方法
```js
render() {
  // 过滤掉非此 HOC 额外的 props，且不要进行透传
  const { extraProp, ...passThroughProps } = this.props;

  // 将 props 注入到被包装的组件中。
  // 通常为 state 的值或者实例方法。
  const injectedProp = someStateOrInstanceMethod;

  // 将 props 传递给被包装组件
  return (
    <WrappedComponent
      injectedProp={injectedProp}
      {...passThroughProps}
    />
  );
}
```
## 约定：最大化可组合性
* 有时候HOC仅仅接收一个参数，也就是被包裹的组件
```js
const NavbarWithRouter = withRouter(Navbar);
```
* HOC通常可以接收多个参数
```js
const CommentWithRelay = Relay.createContainer(Comment, config);
```
* React Redux的connect函数
```js
// React Redux 的 `connect` 函数
const ConnectedComment = connect(commentSelector, commentActions)(CommentList);
```
* 让我们将connect函数进行拆分
```js
// connect 是一个函数，它的返回值为另外一个函数。
const enhance = connect(commentListSelector, commentListActions);
// 返回值为 HOC，它会返回已经连接 Redux store 的组件
const ConnectedComment = enhance(CommentList);
```
>总结：connect就是一个返回高阶组件的高阶函数。这个函数可能看起来难懂，但是实际上这个函数返回了一个高阶组件，然后这个高阶组件接收一个组件作为参数，最后再返回一个组件。
```js
// 而不是这样...
const EnhancedComponent = withRouter(connect(commentSelector)(WrappedComponent))

// ... 你可以编写组合工具函数
// compose(f, g, h) 等同于 (...args) => f(g(h(...args)))
const enhance = compose(
  // 这些都是单参数的 HOC
  withRouter,
  connect(commentSelector)
)
const EnhancedComponent = enhance(WrappedComponent)
```
## 约定：包装显示名称以便轻松调试
>HOC创建的容器组件会和任何其他组件一样，显示在React Developer Tools中，为了方便调试，需要选择显示一个名称，以表明他是HOC的产物。

```js
function withSubscription(WrappedComponent) {
  class WithSubscription extends React.Component {/* ... */}
  WithSubscription.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`;
  return WithSubscription;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
```
## 使用高阶组件的注意事项
1. 不要在render方法中使用HOC
```js
render() {
  // 每次调用 render 函数都会创建一个新的 EnhancedComponent
  // EnhancedComponent1 !== EnhancedComponent2
  const EnhancedComponent = enhance(MyComponent);
  // 这将导致子树每次渲染都会进行卸载，和重新挂载的操作！
  return <EnhancedComponent />;
}
```
2. 务必复制静态方法
```js
// 定义静态函数
WrappedComponent.staticMethod = function() {/*...*/}
// 现在使用 HOC
const EnhancedComponent = enhance(WrappedComponent);

// 增强组件没有 staticMethod
typeof EnhancedComponent.staticMethod === 'undefined' // true
```
>为了解决上述的问题，可以在返回之前把这些方法拷贝到容器组件上：
```js
function enhance(WrappedComponent) {
  class Enhance extends React.Component {/*...*/}
  // 必须准确知道应该拷贝哪些方法 :(
  Enhance.staticMethod = WrappedComponent.staticMethod;
  return Enhance;
}
```
3. refs不会被传递
>虽然高阶组件的约定式将所有props传递给包装组件，但是这对refs并不适用，因为ref实际上并不是一个prop，关于这个问题，我的专栏里前面介绍ref的讲过这个问题。

## 欢迎大家跟着我的专栏，一起学习React!


