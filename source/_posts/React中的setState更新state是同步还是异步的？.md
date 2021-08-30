---
title: React中的setState更新state是同步还是异步的？
date: 2021-7-19
author: Justin
top: true
cover: true
categories: React
tags:
  - React
---
## 问题引入
>React中的setState是用来更新状态的重要工具，但是setState是同步的还是异步的，需要我们进行一定的探讨，接下来让我们好好研究研究。

## 使用setState的两种形式
1. 函数形式的setState
```js
test1 = () => {
        // 函数形式的setState,函数形式的setState能够接收到两个参数，一个是state，另一个是props
        this.setState(state => ({count: state.count + 1}))
    }
```

2. 对象形式的setState
```js
test2 = () => {
        // 对象形式的setState
        const count = this.state.count + 1;
        this.setState({count})
    }
```

## 使用过setState之后能否立即获取到状态更新后的值
>答案是不能。

```js
test1 = () => {
        // 函数形式的setState,函数形式的setState能够接收到两个参数，一个是state，另一个是props
        this.setState(state => ({count: state.count + 1}))
        console.log('函数形式的setState更新后：',this.state.count);
    }
```
![image.png](https://img-blog.csdnimg.cn/img_convert/78dd77a5aa0a67baf75f69112f7cd8b8.png)

## 如何立即获取到状态更新后的值
>使用setState的第二个参数，这个参数接收的是一个回调函数，这个回调函数会在界面渲染之后调用。

```js
test3 = () => {
        this.setState(state => ({count: state.count + 1}),() => {
            console.log('函数形式的setState更新后：',this.state.count);
        });
    }
```
![image.png](https://img-blog.csdnimg.cn/img_convert/6f0b820c172c3d308877763f1da3e274.png)

## setState()更新状态是同步还是异步的？
>回到我们要探讨的正题，setState()更新状态时同步的还是异步的？

**判断setState()更新状态时异步还是同步的，主要是看执行setState的位置**

1. 在React控制的回调函数中（生命周期钩子，react事件监听回调）这种情况是异步的。
2. 在非react控制的异步回调函数中（定时器回调/原生事件监听回调/promise回调）这种情况是同步的。

### 异步举例

* 在React事件回调函数中使用setState(异步的)
```js
// React事件回调函数中
update1 = () => {
    console.log('React事件回调函数更新之前：',this.state.count);
    this.setState(state => ({count: state.count + 1}))
    console.log('React事件回调函数更新之后：',this.state.count);
}
```
![image.png](https://img-blog.csdnimg.cn/img_convert/4280e7af6888177abc7a060f94229ab3.png)

* 在生命周期钩子函数中使用setState(异步的)
```js
// 在生命周期钩子函数中
componentDidMount() {
    console.log('生命周期钩子函数更新之前：',this.state.count);
    this.setState(state => ({count: state.count + 1}))
    console.log('生命周期钩子函数更新之后：',this.state.count);
}
```
![image.png](https://img-blog.csdnimg.cn/img_convert/87e8a0af7fa8ad795469686d5437eb97.png)

### 同步举例
* setTimeout
```js
// 定时器回调
update2 = () => {
    setTimeout(() => {
        console.log('setTimeout 更新之前：', this.state.count);
        this.setState(state => ({ count: state.count + 1 }))
        console.log('setTimeout 更新之后：', this.state.count);
    })
}
```
![image.png](https://img-blog.csdnimg.cn/img_convert/65894a301b2694840dfbf379c7ea6988.png)

* 原生onclick
```js
update3 = () => {
    const h1 = this.refs.count;
    h1.onclick = () => {
        console.log('onclick 更新之前：', this.state.count);
        this.setState(state => ({ count: state.count + 1 }))
        console.log('onclick 更新之后：', this.state.count);
    }
}
```
![image.png](https://img-blog.csdnimg.cn/img_convert/f0fdca44083e264dc490332a5ad9a669.png)

* Promise
```js
update4 = () => {
    Promise.resolve().then(value => {
        console.log('Promise 更新之前：', this.state.count);
        this.setState(state => ({ count: state.count + 1 }))
        console.log('Promise 更新之后：', this.state.count);
    })
}
```
![image.png](https://img-blog.csdnimg.cn/img_convert/5cdb8340d2c2f94a222b177cd10f542d.png)

## setState多次调用的问题
>下面要讨论的多次调用的问题是基于异步的前提下来讨论的。

### 情况1：两个函数式setState的情况（不会合并）
```js
// 测试函数式 setState合并 与更新的问题
update5 = () => {
    console.log('测试通过函数式更新setState的合并问题 更新之前：', this.state.count);
    this.setState(state => ({ count: state.count + 1 }))
    console.log('测试通过函数式更新setState的合并问题 更新之后：', this.state.count);
    console.log('测试通过函数式更新setState的合并问题 更新之前：', this.state.count);
    this.setState(state => ({ count: state.count + 1 }))
    console.log('测试通过函数式更新setState的合并问题 更新之后：', this.state.count);
}
```
![image.png](https://img-blog.csdnimg.cn/img_convert/57dfbe0ad19ee329af054a7f1c1c2daa.png)

### 情况2：两个对象式setState的情况（会合并）
```js
// 测试对象式 setState合并 与更新的问题
update6 = () => {
    console.log('测试通过对象式更新setState的合并问题 更新之前：', this.state.count);
    this.setState({count: this.state.count + 1})
    console.log('测试通过对象式更新setState的合并问题 更新之后：', this.state.count);
    console.log('测试通过对象式更新setState的合并问题 更新之前：', this.state.count);
    this.setState({count: this.state.count + 1})
    console.log('测试通过对象式更新setState的合并问题 更新之后：', this.state.count);
}
```
### 情况3：先函数式后对象式（会合并）
```js
update7 = () => {
    console.log('测试通过函数式更新setState的合并问题 更新之前：', this.state.count);
    this.setState(state => ({ count: state.count + 1 }))
    console.log('测试通过函数式更新setState的合并问题 更新之后：', this.state.count);
    console.log('测试通过对象式更新setState的合并问题 更新之前：', this.state.count);
    this.setState({count: this.state.count + 1})
    console.log('测试通过对象式更新setState的合并问题 更新之后：', this.state.count);
}
```
![image.png](https://img-blog.csdnimg.cn/img_convert/817c7527e7b9fa81bd5e813b960aaf7c.png)

### 情况4：先对象式后函数式
```js
update7 = () => {
    console.log('测试通过对象式更新setState的合并问题 更新之前：', this.state.count);
    this.setState({count: this.state.count + 1})
    console.log('测试通过对象式更新setState的合并问题 更新之后：', this.state.count);
    console.log('测试通过函数式更新setState的合并问题 更新之前：', this.state.count);
    this.setState(state => ({ count: state.count + 1 }))
    console.log('测试通过函数式更新setState的合并问题 更新之后：', this.state.count);
}
```
![image.png](https://img-blog.csdnimg.cn/img_convert/64ea64cff48fab36e9565fa169c032c1.png)
>### 核心技巧：函数式传入的state总是能够获取到最新的state,但是对象式则不能，但是最后render只会更新一次。

## 一道经典的setState的面试题（看懂这个，你可能就懂了！）
**请问下面的APP组件打印的是什么？**

```js
class App extends Component {
    state = {
        count: 0
    }
    // 在生命周期钩子函数中
    componentDidMount() {
        this.setState({ count: this.state.count + 1 })
        this.setState({ count: this.state.count + 1 })
        console.log(this.state.count);

        this.setState(state => ({ count: state.count + 1 }))
        this.setState(state => ({ count: state.count + 1 }))
        console.log(this.state.count);

        setTimeout(() => {
            this.setState(state => ({ count: state.count + 1 }))
            console.log('setTimeout:', this.state.count);

            this.setState(state => ({ count: state.count + 1 }))
            console.log('setTimeout:', this.state.count);
        }, 0)
        Promise.resolve().then(value => {
            this.setState(state => ({ count: state.count + 1 }))
            console.log('Promise',this.state.count);
            this.setState(state => ({ count: state.count + 1 }))
            console.log('Promise:',this.state.count);
        })
    }

    render() {
        const { count } = this.state;
        console.log('render: ', count);
        return (
            <div>
                <h1>当前求和为{count}</h1>
            </div>
        )
    }
}
```

### 答案
![image.png](https://img-blog.csdnimg.cn/img_convert/3263ee2352ed9f60b04038eef651c584.png)

### 答案解析（按输出顺序进行解析）
1. 第一行： react首先会渲染下组件，此时获取到的count值是state中存的初始值，所以是0.
2. 第2、3行：执行完render之后，会进入componentDidMount钩子函数，遇到两个对象式的setState会进行合并，但由于此时在钩子函数中，获取state是异步的，所以打印的都是0，但是当遇到函数式的setState，则不会合并，此时count的值已经变为了3.
3. 第四行：此时componentDidMount中出了Promise和setTimeout外都执行了，上面的代码对JS来说都属于同步代码，此时可以进行更新render了，所以打印了render 3.
4. 第五行：setTimeout和Promise中，由于Promise是微任务，所以优先执行，在执行的时候，这里的setState是同步更新state的，所以调用一次setState就要调用一次render,所以第五行打印的是render: 4.
5. 第六行：执行log操作，打印的是Promise: 4。。。

**剩下的内容均属于JS事件循环的知识了，如果你有不懂的地方可以参考我的专栏中的事件循环机制的基本认知这篇博文。**

### [codeSandBox](https://codesandbox.io/s/yidaoguanyusetstatedejingdianmianshiti-fm4j6)
