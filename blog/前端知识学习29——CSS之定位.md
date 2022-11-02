---
title: 前端知识学习29——CSS之定位
date: 2020-09-26
categories: 前端
tags: 
- 前端
---

## 1：为什么需要定位？
>定位可以让盒子自由的在某个盒子内部移动位置，或者固定在屏幕的某一个位置，并且可以压住其他盒子。

## 2：定位的组成
```
定位 = 定位模式 + 边偏移
```
## 2.1：定位模式
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200926165020.png)

## 2.2：边偏移
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200926165048.png)

## 3：静态定位
* 静态定位 = 无定位（不需要边偏移）
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200926165137.png)

## 4：相对定位
>相对定位的三个特点：

* 相对定位是相对自身原本的位置进行移动，x轴和y轴都是参照原本的位置进行移动的。
* 相对定位是不脱离标准流的，移动后原本的位置继续占用。
* 相对定位会使得元素提升一个等级，也就是说如果和别的元素重叠的话，会盖住别的元素。

![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200926165415.png)

## 5：绝对定位
* 绝对定位是相对于它的祖先元素而言的，假如祖先元素没有定位，或者没有祖先元素，则是以浏览器为参照点的。
* 如果祖先元素有定位（固定，绝对，相对定位等），则以最近一级的父元素为参考点。
* 绝对定位脱离标准流，不在占有原来的位置。
* 绝对定位会使得行内元素变为块元素，可以给宽高。

![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200926165905.png)

## 6：什么时候用绝对定位，什么时候用相对定位？
> 子级要是绝对定位的话，父级用相对定位。子级采用绝对定位的原因在于子级不能占用位置，而父级采用相对定位的原因在于父级要占用位置。这就是子绝父相的由来。

`记住口诀：子绝父相`

![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200926170418.png)

## 7：固定定位
>固定定位就是你的鼠标移动，但是某一元素依然在固定的位置上。

**特点：**
* 以浏览器的可视窗口为参照点。
* 与父元素没有任何关系
* 不随着浏览器的滚动条而滚动
* 固定定位不占用原来的位置，相当于一种绝对定位。

![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200926170655.png)

## 8：固定定位小技巧：固定到版心的右侧
>算法：先让固定定位走到浏览器可视窗口的一半，然后margin-left: 

![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200926170836.png)

## 9：粘性定位
>粘性定位是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位。粘性定位的父盒子不能设置以下几种情况：

* 父元素不能设置overflow: hidden或者overflow: auto属性。
* 必须指定 边偏移
* 父元素的高度不能低于sticky元素的高度
* sticky元素仅在其父元素内生效

![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200926171223.png)

## 10：定位总结
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200926171245.png)

## 11：定位的叠放顺序
>假如，两个定位相遇就会遇到一个谁在上面的问题，这就涉及到一个叠放顺序的问题。

![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200926171349.png)

![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200926171359.png)

## 12：定位的特殊特性
* 1：行内元素加上固定定位或者绝对定位，可以设置宽高。
* 2：块级元素如果设置固定定位或者绝对定位，如果不给宽高，默认是内容的大小。
* 3：脱离标准流的盒子，不会触发外边距合并的问题（浮动，绝对定位，固定定位）
* 4：浮动元素会压住下面标准流的盒子，但是不会压住下面的文字，这也就是浮动设置的初衷是为了方便文字环绕的实现。
* 5：绝对定位或者固定定位会压住下面标准流的所有内容。

![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200926171954.png)