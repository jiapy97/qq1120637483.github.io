---
title: Ajax-14：请求重复发送问题
date: 2021-03-24
categories: Ajax
tags: 
- Ajax
---
## 目标：当点击最新请求的时候，将上一次未完成的请求取消掉
* 通过定义变量来存储表示是否正在发送请求的布尔值
* 当用户点击发送请求的时候，开始判断这个变量是否为true,如果为true，则取消请求
* 然后将变量置为true,直到检测到返回状态码为4将变量置为false
## 代码
```js
let isSending = false;
btn[0].onclick = function() {
    // 在此处判断是否正在发送，如果正在发送则取消
    if(isSending) xhr.abort();
    isSending = true;
    xhr = new XMLHttpRequest();
    xhr.open("GET","http://localhost:8000/cancel");
    xhr.send();
    xhr.onreadystatechange = function() {
        if(xhr.readystate === 4) {
            isSending = false;
        }
    }
};
```
## 实现效果
![](https://img-blog.csdnimg.cn/img_convert/2d0acc2f93739bb8a59a8fc546b1ebe0.png)