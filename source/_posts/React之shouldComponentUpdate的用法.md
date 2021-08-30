---
title: React之shouldComponentUpdate的用法
date: 2021-7-19
author: Justin
top: false
cover: false
categories: React
tags:
  - React
---
## 为什么要使用shouldComponentUpdate?
>只要是组件继承自React.Component就会存在当父组件重新render的时候，子组件也会重新执行render,即使这个子组件没有任何变化。子组件只要调用setState就会重新执行render,及时setState的参数是一个空对象。


## shouldComponentUpdate的用法
**在子组件中：**
```js
shouldComponentUpdate(nextProps,nextState) {
    if (nextProps.m1 === this.props.m1 && nextState.m2 === this.state.m2) {
        return false;
    } else {
        return true;
    }
}
```

>根据下面的React生命周期流程图可知，当shouldComponentUpdate返回为true的时候，当前组件进行render，如果返回的是false则不进行render.
![image.png](https://img-blog.csdnimg.cn/img_convert/66a7f53b2d64bfc5357631bcb108a359.png)

### [codeSandBox在线演示](https://codesandbox.io/s/reactzhongshouldcomponentupdatedeyongfa-9v08q?file=/src/index.js)


