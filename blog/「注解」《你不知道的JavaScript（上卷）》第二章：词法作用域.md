---
title: 「注解」《你不知道的JavaScript（上卷）》第二章：词法作用域
date: 2021-03-26
categories: 《你不知道的JavaScript》
tags: 
- 《你不知道的JavaScript》
---
## 词法阶段
* 逐级嵌套的作用域举例
![](https://img-blog.csdnimg.cn/img_convert/418b2d1767b96c9583e36e4e75b99bd4.png)

## 查找
![](https://img-blog.csdnimg.cn/img_convert/f3b86bf4a5445540fcc89c3e69c6a31c.png)

## 欺骗词法
### eval()函数
![](https://img-blog.csdnimg.cn/img_convert/fe6a139eb3c06223cba51ba50d157cbc.png)

* 严格模式下的eval函数是无效的
![](https://img-blog.csdnimg.cn/img_convert/6007767c8e5784cfa5cf2f54cf1490b2.png)

### with关键字
* 基本用法
![](https://img-blog.csdnimg.cn/img_convert/db65a856a8923818ed4d017d39078eab.png)

* 使用with有时候会污染全局变量
![](https://img-blog.csdnimg.cn/img_convert/515e88fa570fa631064b9ff2d1a7f46f.png)

## 性能
![](https://img-blog.csdnimg.cn/img_convert/bbb8c3bcb187fe4f77f0169e9425b8b2.png)

## 小结
![](https://img-blog.csdnimg.cn/img_convert/5fe0486f56ea2449c8cbde5b6bdfe8c4.png)

