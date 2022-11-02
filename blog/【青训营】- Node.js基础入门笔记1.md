---
title: 【青训营】- Node.js基础入门笔记1
date: 2021-8-23
author: Justin
top: false
cover: false
categories: 字节青训营
tags:
  - 字节青训营
---
## 1. Node.js简介
>Node是一个基于Chrome V8引擎、跨平台的JS**运行环境**，注意是环境。

### 版本管理
载体同一个设备可以通过下面的版本管理工具来切换node的版本。
* n: 一个npm全局的开源包，是依赖npm来全局安装、使用的。
* fnm: 快速简单，兼容性支持
* nvm: 独立的软件包。（Node Version Manager）

### Node的特点
#### 异步I/O
> 当Node执行IO操作时，会在响应返回并恢复操作，而不是阻塞线程并浪费CPU循环等待。

#### 单线程
>Node保持了JS在浏览器中单线程的特点。以浏览器为例，浏览器是多进程，JS引擎是单线程。
![image.png](https://img-blog.csdnimg.cn/img_convert/5786fd57c26c03e73bb78caae42899a8.png)

* 优点：
>不用处处在意状态同步的问题，不会发生死锁，没有线程上下文切换带来的性能开销。

* 缺点：
>无法利用多核CPU，错误会引起整个应用退出，健壮性不足，大量计算占用导致CPU，无法继续执行。



#### 跨平台
>Node兼容了Linux和*nix平台，主要得益于在操作系统和Node上层模块系统之间构建了一层平台架构。
![image.png](https://img-blog.csdnimg.cn/img_convert/2071e55e4e11b7e0097932d21aa9c272.png)

### 应用场景
>Node在大部分领域都有一席之地，尤其是I/O密集型的。

* Web领域：Express/Koa
* 前端构建：Webpack
* GUI客户端软件：VSCode/网易云音乐
* 1实时通信、爬虫、CLI等...

## 模块化机制
1. 何为模块化？
>根据功能或业务将一个大程序拆分为互相依赖的小文件，再用简单的方式拼装起来。

2. 为什么模块化？
>所有Script标签必须保证顺序正确，否则会依赖报错，全局变量存在命名冲突，占用内存无法被回收

