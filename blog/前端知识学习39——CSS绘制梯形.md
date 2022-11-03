---
title: 前端知识学习39——CSS绘制梯形
date: 2020-10-05
categories: 前端
tags: 
- 前端
---

## 1：制作一个直角三角形
### 实现步骤
* 将原本大盒子的宽度和高度都设置为0
* 给每一个边都设置px
* 将下边和左边的边框的宽度设置为0
* 将上边的宽度设置更大一些，并且将颜色设置为透明

### 实现代码
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20201005165424.png)

### 实现效果图
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20201005165451.png)

## 2：梯形的实现步骤

### 效果图展示
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20201005165544.png)

### 代码
```css
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box {
            width: 0;
            height: 0;
            border-width: 100px 50px 0 0;
            border-color: transparent red transparent transparent;
            border-style: solid;
        }
        .price {
            width: 160px;
            height: 24px;
            line-height: 24px;
            border: 1px solid red;
            margin: 0 auto;
        }
        .miaosha {
            position: relative;
            float: left;
            width: 90px;
            height: 100%;
            background-color: red;
            text-align: center;
            color: #fff;
            font-weight: 700;
        }
        .miaosha i {
            position: absolute;
            right: 0;
            width: 0;
            height: 0;
            border-color: transparent #fff transparent transparent;
            border-width: 24px 12px 0 0;
            border-style: solid;
        }
        .orign {
            font-size: 12px;
            color: gray;
            text-decoration: line-through;
        }
    </style>
</head>
<body>
    <div class="box"></div>
    <div class="price">
        <span class="miaosha">￥1650
            <i></i>
        </span>
        <span class="orign">￥5650</span>
    </div>
</body>
</html>
```
