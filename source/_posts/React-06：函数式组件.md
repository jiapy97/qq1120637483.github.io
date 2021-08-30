---
title: React-06：函数式组件
date: 2021-04-05
categories: React
tags: 
- React
---
## 创建函数式组件的步骤
1. `创建函数式组件`
2. `渲染函数式组件到页面`

注意：
* 组件的标签名首字母要大写
* 标签名在渲染的时候，最后要加/
![](https://img-blog.csdnimg.cn/img_convert/22ffe20c08a7f36a6bcf27c5ff970eaa.png)

## 函数式组件中的this指向的是谁？
`undefined`
* 因为babel开启了严格模式，所以自定义的函数指向了undefined
