---
title: Ajax-17：使用fetch函数发送ajax请求
date: 2021-03-25
categories: Ajax
tags: 
- Ajax
---
## 基础用法
```js
btn.onclick = function() {
    fetch('http://localhost:8000/fetch',{
        // 请求方法
        method: 'POST',
        // 请求头
        headers: {
            name: 'justin'
        },
        // 请求体
        body: {
            username: 'jusitn',
            password: 123456
        }
    }).then(value => {console.log(value);})
}
```