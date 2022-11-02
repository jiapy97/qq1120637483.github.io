---
title: ES6——03：类的继承与extends和super关键字
date: 2021-03-12
categories: ES6
tags: 
- ES6
---
## extends关键字
>使用entends关键字可以让子类继承父类的函数。

![](https://img-blog.csdnimg.cn/img_convert/fd0681005822af531b2b746324caf418.png)
## super关键字
* super关键字用来调用父类的普通函数和构造函数。
![](https://img-blog.csdnimg.cn/img_convert/9e4d9f17cc3cd9bfdaad90e20feb4171.png)
### super调用父类的构造函数
![](https://img-blog.csdnimg.cn/img_convert/97fd4ee06890548054aec3e462159aab.png)
### 调用父类的普通函数
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210217184249624.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NpbmF0XzQxNjk2Njg3,size_16,color_FFFFFF,t_70)
### super必须在子类this之前调用
![](https://img-blog.csdnimg.cn/img_convert/4fcaa14f949295c17e45d1db38e43ad0.png)
