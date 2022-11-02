---
title: React-60：render props
date: 2021-04-30
categories: React
tags: 
- React
---
## 组件间包含的内容是什么？
![](https://img-blog.csdnimg.cn/img_convert/55409785ddaba33da78abbe29730bb69.png)

* 包含的内容是传递给A组件的信息，A组件通过this.props.children可以获得

![](https://img-blog.csdnimg.cn/img_convert/07e381921c9f01a209ec04d67ed6bd35.png)

## 形成父子组件的两种形式
>### 第一种：直接嵌套
![](https://img-blog.csdnimg.cn/img_convert/fb9c18d3d342c4213596876134438f20.png)
A组件通过this.props.children调用B组件

![](https://img-blog.csdnimg.cn/img_convert/3b86e4750bdf69955c434bf5c27dcb1a.png)

>### 第二种：A组件中调用B组件
![](https://img-blog.csdnimg.cn/img_convert/4e4992135ad87c6e530dac696fd09de5.png)

## 通过renderProps向一个组件的子组件传递props
![](https://img-blog.csdnimg.cn/img_convert/bec6b76c21297c91098f3286d1a59bca.png)