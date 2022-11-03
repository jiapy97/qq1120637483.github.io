---
title: JS文件通过Node运行和HTML文件的script标签运行不一致的原因
date: 2021-04-04
categories: debug
tags: 
- debug
---
## 问题描述
* 在Node中输出的是Undefined
![](https://img-blog.csdnimg.cn/img_convert/3faff311637be58c42c45538828c5337.png)
* 在HTML中输出的是 not awesome
![](https://img-blog.csdnimg.cn/img_convert/25af9f2ed66a9f96b915941089515ff8.png)

## 原因
* 在Html中this指向的是window,但是在node中this指的是空对象。
