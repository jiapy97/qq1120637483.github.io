---
title: React-55：EffectHook（让函数式组件能够使用生命周期钩子）
date: 2021-04-28
categories: React
tags: 
- React
---
## 为什么要使用EffectHook?
* 因为在函数式组件中无法使用生命周期钩子的，例如：componentDidMount这个生命周期钩子，通过这个Hook可以让我们在函数式组件中使用生命周期钩子。

## 核心函数：useEffect（接收两个参数）
* 第一个参数：是一个回调函数
这个回调函数相当于是componentDidMount，这个回调函数可以返回一个回调函数，返回的这个回调函数则是相当于componentWillUnmount。
* 第二个参数代表着监控谁，一旦监控的对象发生了变化，则要调用第一个参数里的回调函数，第二个参数不写代表监控所有的状态，写谁代表监控谁，所以在下面的案例中，传入的是一个空数组，代表谁也不监控，这就实现了第一个回调函数的componentDidMount的作用。
![](https://img-blog.csdnimg.cn/img_convert/43d6129389fa3d402bd0b73896d77fe4.png)