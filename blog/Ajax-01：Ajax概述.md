---
title: Ajax-01：Ajax概述
date: 2021-03-21
categories: Ajax
tags: 
- Ajax
---
## 什么是Ajax？
答：它是浏览器提供的一套方法，可以实现页面无刷新更新数据，提高用户浏览网站的体验。
## Ajax发送的请求是什么请求？
答：HTTP请求。
## Ajax的优缺点
优点：
1. 可以无需刷新页面即与服务器端进行通信。
2. 允许你根据用户事件来更新部分页面内容。

缺点：
1. 没有浏览历史，不能后退。
2. 存在跨域问题。   
2.  SEO不友好。

## HTTP协议的请求报文
* 行：GET/POST等请求方式、 URL相关参数、HTTP协议的版本。
* 头：Host，Cookie，Content-Type、User-Agent
* 空行：这个是固定的，不用管。
* 体：如果是GET请求，这个是空的，如果是POST请求，那么这个就不为空，可以是要发送的参数。
![](https://img-blog.csdnimg.cn/img_convert/1e3fc4c1af3a347a65e4d5bf4744a427.png)
## HTTP协议的响应报文
* 行：HTTP协议版本、返回状态码、状态字符串
* 头：Content-Type: text/html，字符编码：charset=utf-8，Content-length:2048，内容编码格式：Content-encoding：gzip
* 空行：固定的
* 体： <html>...</html>

![](https://img-blog.csdnimg.cn/img_convert/686f35ce1f8ca0a5a5b28624b0f0867b.png)

