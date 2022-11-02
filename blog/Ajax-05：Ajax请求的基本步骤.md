---
title: Ajax-05：Ajax请求的基本步骤
date: 2021-03-22
categories: Ajax
tags: 
- Ajax
---
## XHR请求即Ajax请求
![](https://img-blog.csdnimg.cn/img_convert/dabb9311e04d4195a1d69070fa6272ac.png)
## 1：创建对象
```js
const xhr = new XMLHttpRequest();
```
## 2：设置请求方法和url
```js
xhr.open('GET','http://127.0.0.1:8000/server');
```
## 3：发送
```js
xhr.send();
```
## 4：事件绑定
* on 当...的时候
* readystate 是xhr对象的属性，表示状态0 1 2 3 4
* 0 表示未初始化
* 1 表示open方法已经调用完毕
* 2 表示send方法已经调用完毕
* 3 表示服务端返回了部分结果
* 4 表示服务端返回了全部结果
```js
xhr.onreadystatechange = function() {
      // 首先判断服务端是否返回了所有结果
      if (xhr.readyState === 4) {
          // 判断响应状态码  2XX 表示成功
          if (xhr.status >= 200 && xhr.status < 300) {
              // 状态码
              console.log(xhr.status);
              // 状态字符串
              console.log(xhr.statusText);
              // 所有响应头
              console.log(xhr.getAllResponseHeaders());
              // 响应体
              console.log(xhr.response);
              result.innerHTML = xhr.response;
          }

      }
  }
```