---
title: React-50：一文学会redux开发者工具的基本使用
date: 2021-04-27
categories: React
tags: 
- React
---
## 安装方法
```
npm install redux-devtools-extension
```
## 使用方法
* 有异步action的情况
![](https://img-blog.csdnimg.cn/img_convert/de0c4434b7be066569527a80e9482ad0.png)

* 没有异步action的情况
![](https://img-blog.csdnimg.cn/img_convert/0b89d58f917d100210660e6eb26fd85c.png)

## redux-devtools-extension介绍
* action区域
![](https://img-blog.csdnimg.cn/img_convert/fd289165f05d07a26ae5361e468f5e5e.png)

* 查看action对象的type和data
![](https://img-blog.csdnimg.cn/img_convert/0e7af51929dc52d8a38b858468000e08.png)

* 查看redux帮我们保存的总的状态对象
![](https://img-blog.csdnimg.cn/img_convert/6b027850d5e899492047d56c90046e6a.png)

* 查看状态的比较变化
![](https://img-blog.csdnimg.cn/img_convert/e0a45e6835d611910856eb5bfbc47333.png)

* 回放状态的变化
![](https://img-blog.csdnimg.cn/img_convert/f2e812c63e4793a49313a4a4a3b279e5.gif)

* 临时dispatch
![](https://img-blog.csdnimg.cn/img_convert/6f55b975192e4d01d0f644c6ce3a428f.png)