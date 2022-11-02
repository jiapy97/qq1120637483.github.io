---
title: 大白话阐述什么是BFC（一道可能的面试题）
date: 2022-3-31
author: Justin
top: false
cover: false
categories: 面试题
tags:
  - 面试题
---

## 什么是BFC？
>在系统性的阐述什么是BFC之前，我们首先介绍下CSS中常见的布局。1. 普通流。行内元素排成一行，一行不够则换行，块级元素，一个占一行。2. 浮动。元素会脱离普通流。3. 定位。元素会脱离普通流。BFC也属于普通流，设置为BFC的元素，相当于一种隔离了的元素，容器内部的元素不会在布局上影响外面的元素。

`BFC指的是块级格式化上下文，一个元素如果具备了BFC的条件，那么这个元素会形成一个独立的渲染区域，内部元素的渲染不会影响外界。`

## 如何触发BFC？
1. 根元素(\<html/>)
2. 浮动元素(元素的float不是none)
3. 绝对定位元素(元素的position为absolute或fixed)
4. display为下面几种：
![image.png](https://img-blog.csdnimg.cn/img_convert/4ee0df07cab5ad37f793f4e6a9dab1e8.png)

5. overflow的值不为visible的块元素
6. contain的值为layout、content或paint的元素

## BFC的应用场景
### 1. 避免外边距重叠
>在同一个BFC内两个相邻的盒子会出现外边距塌陷的问题，我们可以让这两个div分别位于两个不同的BFC中，则可以有效的避免外边距塌陷的问题。
[codeSandBox在线演示](https://codesandbox.io/s/shiyongbfcbimianwaibianjutaxianwenti-c9z34?file=/index.html)

### 2. 清除浮动
>BFC容器之所以能够清除浮动，是因为BFC容器可以包裹浮动元素。

[codeSandBox在线演示](https://codesandbox.io/s/shiyongbfcqingchufudong-lim36?file=/index.html)

### 3. 阻止元素被浮动元素覆盖
>如果一个元素设置了浮动，但是下面的元素没有设置浮动，下面的元素会顶上来，形成一个浮动覆盖的效果，我们可以通过给非浮动元素设置成BFC元素，可以防止被浮动元素覆盖。

[codeSandBox在线演示](https://codesandbox.io/s/shiyongbfczuzhiyuansubeifudongyuansufugai-2oeqr?file=/index.html)

### 4. 使用BFC实现左侧盒子定宽，右侧盒子自适应布局
>左侧设置为浮动，右侧浮动，右侧的宽度计算为100% - 左侧

[codeSandBox在线测试](https://codesandbox.io/s/bfcshixianzuocegudingkuanduyouceziguayingkuandu-2x7mu?file=/index.html)


## 手写clearfix来清除浮动

```css
    <style>
        .clearfix::after {
            content: '';
            clear: both;
            display: block;
        }
    </style>
</head>
<body>
    <div class="clearfix">
        <div style="width:100px;height:100px;background-color: red;float: left;"></div>
        <div style="width:100px;height:100px;background-color: green;float: left;"></div>
    </div>
    <div>456</div>
    <p>789</p>
</body>
```




