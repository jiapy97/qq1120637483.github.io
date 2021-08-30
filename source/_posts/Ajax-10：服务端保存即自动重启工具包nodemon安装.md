---
title: Ajax-10：服务端保存即自动重启工具包nodemon安装
date: 2021-03-23
categories: Ajax
tags: 
- Ajax
---
## 安装代码
```
npm install -g nodemon
```
## 使用方式
```
nodemon xxx.js
```
## 实现效果
* 在未使用该工具之前，如果对服务器端的代码做了修改，需要暂停服务器端，重新node以下才可以实现刷新，但是通过nodemon可以无需暂停，保存即实现刷新。