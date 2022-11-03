---
title: Kali-Linux-2020-2安装流程详解
date: 2020-08-09
categories: linux
tags: 
- linux
---

>因为linux的缓冲区溢出实验，需要在虚拟机的平台上使用linux，所以特地决定使用Kali-linux来进行安装实验。

## [主要参考博客](https://www.cnblogs.com/yzxag/p/12386917.html)
## 安装过程中主要遇到的问题
主要是出现如下错误：

![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200809134309.png)
后来经过我的反思，我认为是因为在这一步需要安装很多的软件，这些软件很多来自外网，所以那需要开启全局代理进行翻墙，同时使用如下办法。

![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200809134426.png)

>方法来源与 上述的博客