---
title: React-57：Fragment（让函数式组件能够使用ref）
date: 2021-04-29
categories: React
tags: 
- React
---
## 为什么要使用Fragment？
* 通过React进行开发的时候，有时候会产生很多无用的包裹标签
![](https://img-blog.csdnimg.cn/img_convert/ffd296bfb4a806ce1087a1b783835692.png)

## Fragment标签的效果
* 在React进行解析的时候，会将Fragment丢掉，可以有效的防止标签包裹无效冗余。
![](https://img-blog.csdnimg.cn/img_convert/c085d08d6d2bf123e87af299db915e01.png)