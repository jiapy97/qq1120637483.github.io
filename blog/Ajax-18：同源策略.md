---
title: Ajax-18：同源策略
date: 2021-03-25
categories: Ajax
tags: 
- Ajax
---
## 什么是同源策略？
同源策略是浏览器的一种安全策略。同源指的是协议、域名、端口号必须完全相同，违背同源策略就是**跨域**。
## 同源下访问URL可以简写
```js
const btn = document.querySelector('button');

btn.onclick = function() {
    const xhr = new XMLHttpRequest();
    // 因为满足同源策略，所以url路径可以简写
    xhr.open('GET','/data');
    xhr.send();
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            if(xhr.status >= 200 && xhr.status < 300) {
                console.log(xhr.response);
            }
        }
    }            
}
```
## 注意事项
* 通过VScode右键打开的网页是5500端口，在进行测试的时候，我们一定要看清和我们服务器端口设置的端口是否一致，一旦不一致就会出现跨域问题。
