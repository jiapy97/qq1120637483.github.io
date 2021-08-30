---
title: 前端知识学习17——CSS背景
date: 2020-05-27
categories: 前端
tags: 
- 前端
---
## 1.背景图片
* backgroud-image
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200527214955.png)

## 2.背景平铺
* backgroud-repeat
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200527215028.png)
## 3.背景图片位置
* background-positon
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200527215047.png)
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200527215130.png)
> 使用img标签难以控制位置，使用背景图片便于掌控位置

## 4.文字图片小案例
### 代码
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        h3 {
            width: 170px;
            height: 40px;
            background-image: url(images/icon.png);
            background-repeat: no-repeat;
            text-indent: 4em;
            background-position: left;
            line-height: 40px;
            font-weight: normal;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <h3>
        成长守护平台  
    </h3>
</body>
</html>
```
### 实现效果
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200527215335.png)
## 5.背景固定
* backgroud-attachment
* 背景固定后，背景是固定不动的，滚动的是其他的位置
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200527215423.png)

## 6.背景颜色半透明
* 透明度，越小越透明
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200527215516.png)

## 7.背景总结
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200527215540.png)

## 8.五彩导航栏案例
### 代码
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .nav a {
            display: inline-block;
            width: 120px;
            height: 58px;
            background-color: pink;
            
            text-decoration: none;
            line-height: 50px;
            text-align: center;
            color: #fff;
        }
        .nav .bg1 {
            background-image: url(images/bg1.png);
        }
        .nav .bg1:hover {
            background-image: url(images/bg11.png);
        }
        .nav .bg2 {
            background-image: url(images/bg2.png);
        }
        .nav .bg2:hover {
            background-image: url(images/bg22.png);
        }
        .nav .bg3 {
            background-image: url(images/bg3.png);
        }
        .nav .bg3:hover {
            background-image: url(images/bg11.png);
        }
        .nav .bg4 {
            background-image: url(images/bg4.png);
        }
        .nav .bg4:hover {
            background-image: url(images/bg22.png);
        }
    </style>
</head>
<body>
    <div class="nav">
        <a href="#" class="bg1">五彩导航</a>
        <a href="#" class="bg2">五彩导航</a>
        <a href="#" class="bg3">五彩导航</a>
        <a href="#" class="bg4">五彩导航</a>
    </div>
</body>
</html>
```
### 实现效果
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200527215657.png)