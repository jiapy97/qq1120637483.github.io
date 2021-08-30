---
title: React-29：解决多级路由样式丢失的问题
date: 2021-04-20
categories: React
tags: 
- React
---
## 问题描述
`
给React加上多级路由之后，刷新页面有时候会造成样式的丢失。
`
![](https://img-blog.csdnimg.cn/img_convert/b53312eb1b167907ec8e49d76c890008.png)

## 解决方法一
* 去掉相对路径的点
![](https://img-blog.csdnimg.cn/img_convert/4c22ae5c70b04c616c96b935197d5848.png)

## 解决方法二
* 在样式文件的路径前面加上%PUBLIC_URL%
![](https://img-blog.csdnimg.cn/img_convert/ab5d679148d452857e2c40fd406886f0.png)

## 解决方法三
* 将BrowserRouter改为HashRouter
![](https://img-blog.csdnimg.cn/img_convert/82a5df58cbb222cdc536a61079962c75.png)