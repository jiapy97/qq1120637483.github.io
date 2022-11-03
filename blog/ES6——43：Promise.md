---
title: ES6——43：Promise
date: 2021-03-18
categories: ES6
tags: 
- ES6
---
## 基本使用
![](https://img-blog.csdnimg.cn/img_convert/db7804af105d8cedd09f7d5df5952607.png)
## Promise封装读取文件
![](https://img-blog.csdnimg.cn/img_convert/44e7e89667c31444643637e0490ade9e.png)
![](https://img-blog.csdnimg.cn/img_convert/b5cc0df85c9008f0f167e866cff22108.png)
## Promise封装AJAX请求
```js
const p = new Promise((resolve,reject) => {
    // 1. 创建对象
    const xhr = new XMLHttpRequest();
    // 2. 初始化
    xhr.open("GET","https://api.apiopen.top/getJoke");
    // 3. 发送
    xhr.send();
    // 4. 绑定事件，处理响应结果
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status <= 300) {
                resolve(xhr.response);
            } else {
                reject(xhr.status);
            }
        }
    }
});

p.then(function(value) {
    console.log(value);
},function(reason) {
    console.log(reason);
});
```
![](https://img-blog.csdnimg.cn/img_convert/c1246b449de327693defac371c4bd8e2.png)
## Promise.prototype.then 方法
then方法的返回值分以下三种情况：
1. 返回非Promise对象
![](https://img-blog.csdnimg.cn/img_convert/672619937e10bcdd4a8ce6aca0c09871.png)
2. 返回Promise对象（resove状态）
![](https://img-blog.csdnimg.cn/img_convert/7ecc720a5cac68f8c171180076556264.png)
3. 返回Promise对象（reject状态）
![](https://img-blog.csdnimg.cn/img_convert/6b4ffd0f841b7217da9b7836c58a5da2.png)
## Promise对象的catch方法
>此方法是当Promise对象的状态为reject时，调用的方法，参数只是一个函数。

![](https://img-blog.csdnimg.cn/img_convert/6fa69162f0bcd3170ecba0d8a3538368.png)
## 使用Promise读取三个文件中的内容
```js
// 首先，引入fs模块
const fs = require('fs');

const p = new Promise((resolve,reject) => {
    fs.readFile("./test.md",(err,data) => {
        resolve(data);
    });
});

p.then((value) => {
    return new Promise((resolve,reject) => {
        fs.readFile("./木言人.md",(err,data) => {
            resolve([value,data]);
        });
    });
}).then((value) => {
    return new Promise((resolve) => {
        fs.readFile("./读书有感.md",(err,data) => {
            value.push(data);
            resolve(value);
        });
    });
}).then((value) => {
    console.log(value.toString());
});
```
![](https://img-blog.csdnimg.cn/img_convert/7ae108cbabc7b4adad0404c2940ad4fc.png)
## Promise.allSettled()方法
* 参数是一个数组。
* 这个数组的每一个元素都是一个Promise对象
* 该方法返回的始终是一个成功的Promise对象，这个对象的结果包含了参数数组中的每一个Promise对象的返回状态和值。

![](https://img-blog.csdnimg.cn/img_convert/3ee2df06f76d5f08aa2048e1c28e6340.png)

