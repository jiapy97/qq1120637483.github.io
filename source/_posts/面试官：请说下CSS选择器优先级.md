---
title: 面试官：请说下CSS选择器优先级
date: 2021-7-27
author: Justin
top: false
cover: false
categories: 面试题
tags:
  - 面试题
---
## 什么是CSS选择器优先级？
>CSS选择器优先级是指在给CSS元素设置样式的时候，如果同时有多个CSS选择器同时指向一个元素，那么优先级高的选择器的元素样式会最终应用到这个元素上。

## 通过权重来计算CSS选择器的优先级
**1. !important的优先级是最高的。（没有这个属性的话，则按照下面的向量来计算优先级）**

****

![image.png](https://img-blog.csdnimg.cn/img_convert/55de2cc9a470a30526f0278866a0fb8b.png)

**2. 权重相同，看谁的定义靠后，越靠后就会覆盖掉前面的样式**

### 例子1
![image.png](https://img-blog.csdnimg.cn/img_convert/d9a685a108735d4dfd816dbaf83e1d1f.png)

### 例子2
![image.png](https://img-blog.csdnimg.cn/img_convert/57b2543917ac378502f79883ad46d270.png)

### 例子3（优先级相同，谁在后面谁起作用）
![image.png](https://img-blog.csdnimg.cn/img_convert/51d907e9bd4523ac9f36505d76805f8c.png)


## [参考资料]
[2分钟掌握 CSS 选择器优先级（特异性）](https://www.bilibili.com/video/BV1Fg4y1874w?from=search&seid=17581043688953657894)