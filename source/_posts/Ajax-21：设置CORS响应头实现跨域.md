---
title: Ajax-21：设置CORS响应头实现跨域
date: 2021-03-26
categories: Ajax
tags: 
- Ajax
---
## CORS是什么？
CORS（跨域资源共享），是官方的跨域解决方案，它的特点是是不需要再客户端做任何特殊的操作，完全在服务器中进行处理，支持GET和POST请求。跨域资源共享标准新增了一组HTTP首部字段，允许服务器声明哪些源站通过浏览器有权限访问哪些资源。
## 设置允许跨域的相应头
```js
response.setHeader('Access-Control-Allow-Origin', '*')
```
