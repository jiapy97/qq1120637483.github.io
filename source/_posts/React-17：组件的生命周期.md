---
title: React-17：组件的生命周期
date: 2021-04-09
categories: React
tags: 
- React
---
## 卸载组件
```js
 ReactDOM.unmountComponentAtNode(document.querySelector('.test'));
```
## 组件挂载完毕
```js
componentDidMount() {
    this.timer = setInterval(() => {
        let {opacity} = this.state;
        opacity = opacity - 0.1;
        if (opacity <= 0) opacity = 1;
        this.setState({opacity:opacity})
    },200)
}
```
## 组件将要被卸载
```js
// 组件将要被卸载
componentWillUnmount() {
    clearInterval(this.timer)
}
```
## 循环定时器
```js
this.timer = setInterval(() => {
    let {opacity} = this.state;
    opacity = opacity - 0.1;
    if (opacity <= 0) opacity = 1;
    this.setState({opacity:opacity})
},200)
```
## 组件挂载流程
1. 构造器
2. 将要挂载
3. render
4. 挂载完毕
![](https://img-blog.csdnimg.cn/img_convert/abc12e7762cdc1e82053cbc66a81b9dc.png)

## setState更新流程
![](https://img-blog.csdnimg.cn/img_convert/5496d2254e0a0f039c98c07182ba144b.png)

## forceUpdate流程
* 强制更新是不受shouldComponentUpdate这个阀门的限制的，因为不走这个函数过。
![](https://img-blog.csdnimg.cn/img_convert/4cbda59025680ee5d1234793ba69311a.png)

## 父组件render流程
* componentWillReceiveProps（组件将要接收新的参数的钩子函数），这个钩子函数当传入默认参数的时候不会被触发，只有传入新的参数的时候才会被触发。
![](https://img-blog.csdnimg.cn/img_convert/4ccd10e71b0e4abbffe4875af30ced86.png)

## 组件的生命周期（旧）
![](https://img-blog.csdnimg.cn/img_convert/e5f381b461e58bb972b53f7700645b91.png)

## 在新版本中除了componentWillUnmount之外，其余都需要加上UNSAFE_
![](https://img-blog.csdnimg.cn/img_convert/3b8a9fcadcbee05f440cca7a094b19b0.png)

## 组件的生命周期（新）
![](https://img-blog.csdnimg.cn/img_convert/adc9c46e04bb683ee8d4fe1d4344d865.png)

## 新旧生命周期的区别在哪里？
* 在新的生命周期中，废弃了旧版本的3个带will的钩子，新提出了2个钩子。

## getDerivedStateFromProps
* 这个函数前面应加static，因为是静态的。
* 通过这个钩子修改的state，state任何时候都取决于props，其他的函数无法进行修改。
* 只要这个钩子拦着，所有的状态都得听props的。

## getSnapshotBeforeUpdate与componentDidUpdate协同
![](https://img-blog.csdnimg.cn/img_convert/480a3f1b7385ec00653817e9c5c7c66c.png)

## getSnapshotBeforeUpdate的使用场景
### 需求：制作新闻滚动盒子，新渲染的新闻始终在上面，滚动条停在一个位置，这个位置的新闻固定不动展示给用户。
* 首先明确两个概念：scroolHeight指的是当前滚动盒子的总高度，scrollTop指的是从盒子的**最底部**出发，向上跳多少高度。

```js
class NewsList extends React.Component {
    state = { newsArr: [] };

    componentDidMount() {
        setInterval(() => {
            const { newsArr } = this.state;
            const news = "新闻" + (newsArr.length + 1);
            this.setState({ newsArr: [news, ...newsArr] });
        }, 900)
    }
    getSnapshotBeforeUpdate() {
        // 返回当前list盒子的高度
        return this.refs.list.scrollHeight;
    }
    componentDidUpdate(preProps,preState,height) {
        this.refs.list.scrollTop += this.refs.list.scrollHeight - height;
    }
    render() {
        return (
            <div className="list" ref="list">
                {
                    this.state.newsArr.map((value,index) => {
                        return (
                            <div key={index} className="news">{value}</div>
                        )
                    })
                }
            </div>
        )
    }
}
ReactDOM.render(<NewsList />, document.querySelector('.test'));
```

![](https://img-blog.csdnimg.cn/img_convert/4821594351eb411aad0372060c7f2568.gif)

# 总结：组件的声明周期
* 组件的生命周期，关键还是看懂新的组件生命周期那张图里的流程顺序。



