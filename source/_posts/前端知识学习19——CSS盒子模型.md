---
title: 前端知识学习19——CSS盒子模型
date: 2020-09-01
categories: 前端
tags: 
- 前端
---
## 1.盒子模型的组成
```
内容 + padding + border + margin
```
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200530185501.png)

## 2.边框
### 边框的组成
```
边框宽度 + 边框样式 + 边框颜色
```
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200530185637.png)

### 边框样式
* solid 实线
* dashed 虚线
* dotted 点线

### 边框简写
```
border: 5px solid red
```
### 细线边框
```
border-collapse: collapse
<!-- 让两个边框之间的线变细，这个必须在table标签中使用 -->
```
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200530185927.png)

## 3.内边距 padding
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200530190004.png)
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200530190010.png)

> 假如盒子被内边距padding给撑大了，可以使用宽高 - 内边距的大小。来保证和效果图大小一致。

![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200530190159.png)

### 新浪导航栏案例
#### 代码
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .nav {
            border-top: 3px solid #ff8500;
            border-bottom: 1px solid #edeef0;
            height: 41px;
            background-color: #fcfcfc;
            
            
        }
        a {
            display: inline-block;
            font-size: 12px;
            text-decoration: none;
            line-height: 41px;
            color: #4c4c4c;
            padding: 0 20px;
        }
        a:hover {
            background-color: #eee;
            color: red;
        }
    </style>
</head>
<body>
    <div class="nav">
        <a href="#">新浪导航</a>
        <a href="#">手机导航网</a>
        <a href="#">移动客户端</a>
        <a href="#">微博</a>
        <a href="#">游戏王</a>
    </div>
</body>
</html>
```
#### 应用效果
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200530190345.png)

## 4.外边距 margin
### 为什么需要margin?
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200530190432.png)

![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200530190443.png)

### 块元素水平居中
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200530190524.png)

### 行内元素或者行内块元素水平居中的方法
* 给其父元素添加 text-align: center

### 外边距合并
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200530190643.png)

![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200530190707.png)

>合并受影响的是垂直方向的，水平方向的不受影响,垂直外边距的合并问题：之影响两个盒子的垂直方向，不影响水平方向，两个都是正，取较大值，一正一负进行加和，两个都是负，取绝对值较大的那个。

### 嵌套块元素垂直外边距塌陷
* 父元素和子元素同时有margin-top的时候，以最大的那个为准

![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200530190902.png)

#### 解决方案
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200530190952.png)

### 清除内外边距
* 在body里面写内容的时候，浏览器会默认给我们添加一个内边距和外边距

![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200530191101.png)

