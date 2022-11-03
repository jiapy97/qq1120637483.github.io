---
title: 前端知识学习36——Vertical-align属性应用
date: 2020-10-05
categories: 前端
tags: 
- 前端
---

## 1：应用场景
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20201005161756.png)

>认识底线，基线，中线，和顶线。（图片和文字默认的是基线对齐）
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20201005161844.png)

## 2：主要使用场景
>让文字和图片对齐

![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20201005161945.png)

![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20201005162124.png)

`代码`
```css
vertical-align: middle;
```

## 3：图片底侧有空白区域的解决方案
>问题描述：给img标签加上父盒子，并且给这个父盒子边框，我们发现图片底侧是有一部分空白的区域。

* 解决方案1：给img标签加上vertical-align: bottom
* 解决方案2：给img标签加上vertical-align: middle
* 解决方案3：将img标签转换为块级元素 display: block