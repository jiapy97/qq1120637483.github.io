---
title: 这一次，彻底搞懂HTML5新特性
date: 2022-02-28
author: Justin
top: false
cover: false
categories: 面试题
tags:
  - 面试题
---

## 前言
> HTML5已经被提出多年，关于HTML5到底带来了哪些新特性？和之前的HTML版本有什么区别？这经常是面试官考到的题目，下面让我们来深刻的总结这个问题吧~

## HTML新特性
### 1：语义化标签
> 通过语义化标签，可以让页面有更加完善的结构，让页面的元素有含义，同时利于被搜索引擎解析，有利于SEO，主要标签包括下面的标签：

| 标签 | 描述 |
| --- | --- |
| header | 表示文档的头部区域 |
| footer | 表示文档的尾部区域 |
| nav | 表示文档导航部分 |
| section | 表示文档的某一节 |
| article | 表示文章 |
| main | 表示文档主要的内容区域 |

### 2：增强型表单
> 例如可以通过input的type属性指定类型是number还是date或者url，同时还添加了placeholder和required等表单属性。

### 3. 媒体元素
> 新增了audio和video两个媒体相关的标签，可以让开发人员不必以来任何插件就能在网页中嵌入浏览器的音频和视频内容。

### 4. canvas绘图
> canvas绘图指的是在页面中设定一个区域，然后通过JS动态的在这个区域绘制图形。

### 5. svg绘图
> 这一部分不详细展开，想要了解的小伙伴可以参考其他文章~

### 6. 地理定位
> 使用getCurrentPosition()方法来获取用户的位置，从而实现队地理位置的定位。

### 7. 拖放API
> 通过给标签元素设置属性draggable值为true，能够实现对目标元素的拖动。

### 8. Web Worker
> Web Worker通过加载一个脚本文件，进而创建一个独立工作的线程，在主线程之外运行，worker线程运行结束之后会把结果返回给主线程，worker线程可以处理一些计算密集型的任务，这样主线程就会变得相对轻松，这并不是说JS具备了多线程的能力，而实浏览器作为宿主环境提供了一个JS多线程运行的环境。

### 9. Web Storage
> 关于Web Storage部分，大家需要重点掌握的是cookie、Localstorage和SessionStorage三者之间的区别：

![image.png](https://img-blog.csdnimg.cn/img_convert/5ff77340963295f7eda03878b42f1aec.png)

### 10. Websocket
> 关于websocket协议，大家主要需要记住的就是websocket和HTTP的区别。

* 相同点

> HTTP和Websocket都是基于TCP的应用层协议。

* 不同点

> websocket是双向通信协议，模拟socket协议，可以双向发送和接受消息，HTTP是单向的，意思是说通信只能由客户端发起。
> websocket是需要浏览器和服务器通过握手建立连接，但是HTTP是浏览器向服务器发送连接，服务器预先不知道这个连接。

* 联系

> websocket建立握手时需要基于HTTP进行传输，建立连接之后呢便不再需要HTTP协议了。

## 总结
> 关于HTML5的新特性，希望大家能从以上十个点来进行系统性的回答。

