---
title: ES6——51：awiat与async结合使用
date: 2021-03-19
categories: ES6
tags: 
- ES6
---
## await要放在async函数中
## 基础用法
![](https://img-blog.csdnimg.cn/img_convert/c7456a1452804442a9e9512d0e20203c.png)
## async和await结合读取文件内容
![](https://img-blog.csdnimg.cn/img_convert/302340f1abec4308160dbf99e02df396.png)
## async与await结合发送ajax请求
```js
function sendAjax(url) {
    return new Promise((resolve,reject) => {
        // 1. 创建对象
        const x = new XMLHttpRequest();
        // 2. 初始化
        x.open('GET',url);
        // 3. 发送
        x.send();
        // 4. 事件绑定
        x.onreadystatechange = function() {
            if (x.readyState === 4) {
                if (x.status >= 200 && x.status <= 300) {
                    resolve(x.response);
                } else {
                    reject(x.status);
                };
            };
        };
    });
};

async function readAjax() {
    let result = await sendAjax('https://api.apiopen.top/getJoke');
    console.log(result);
}

readAjax();
```
