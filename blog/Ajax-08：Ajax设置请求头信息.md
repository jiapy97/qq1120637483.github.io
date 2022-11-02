---
title: Ajax-08：Ajax设置请求头信息
date: 2021-03-23
categories: Ajax
tags: 
- Ajax
---
## 固定情况
```js
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
```
![](https://img-blog.csdnimg.cn/img_convert/1039f8da8911bb87812856856364b648.png)
## 自定义请求头
1. 添加自定义请求头
![](https://img-blog.csdnimg.cn/img_convert/4d107e66c0719becebb9e2b889b45e80.png)
2. 服务器路由设置为all,并且添加自定义响应头
![](https://img-blog.csdnimg.cn/img_convert/035ccedc2febffea1a9fe3c9fc81db52.png)
![](https://img-blog.csdnimg.cn/img_convert/1d163530a36a031731ee14a286de6192.png)