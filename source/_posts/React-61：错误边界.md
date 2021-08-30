---
title: React-61：错误边界
date: 2021-05-01
categories: React
tags: 
- React
---
## 什么是错误边界？
* 所谓的错误边界，就是将错误控制在一定的范围内，例如子组件出现了错误，不能影响父组件的显示。将错误控制在子组件内。

## 控制可能出现的组件错误，是在该组件的父组件中进行监控
>### 通过getDerivedStateFromError
![](https://img-blog.csdnimg.cn/img_convert/ffcc587d5afaec79c46c46e19daffbb2.png)

>### 通过componentDidCatch进行统计错误
![](https://img-blog.csdnimg.cn/img_convert/82199704431c9642686d5bb2c81fee25.png)
