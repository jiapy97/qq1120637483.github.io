---
title: Ajax-19：如何解决跨域问题
date: 2021-03-25
categories: Ajax
tags: 
- Ajax
---
## 什么是JSONP？
jsonp是一个非官方的跨域解决方案，只支持GET请求。
## JSONP是如何工作的？
网页中有一些原本就具有跨域能力的标签，比如img,link,iframe,script，jsonp就是利用script标签的跨域能力进行发送请求的。
* 以script标签为例，jsonp接受的不能是普通的字符串，而应当是js代码
![](https://img-blog.csdnimg.cn/img_convert/f455300cf5c16dc7e2f0f3a70dff1906.png)

## 原生jsonp跨域案例
* 当用户的焦点离开输入框时，发送jsonp请求，然后返回该用户名已存在，同时将输入框的边框颜色变成红色。
* 客户端：
```js
// 获取input和p标签
const input = document.querySelector('input');
const p = document.querySelector('p');

// 定义handle函数
function handle(data) {
    input.style.border = 'solid 2px red';
    p.innerHTML = data.msg;
};

// 当用户的焦点移出输入框时触发函数
input.onblur = function() {
    // 获取用户输入的值
    let user_input = this.value;

    // 创建script标签,发送jsonp请求
    const script = document.createElement('script');
    // 向script标签中添加url
    script.src = "http://localhost:9000/jsonp";
    // 将创建好的script标签加到文档对象模型中
    document.body.appendChild(script);
```
* 服务器端
```js
// 测试jsonp服务
app.all('/jsonp',(request,response) => {
    const data = {
        id: 1,
        msg: '该用户名已存在'
    };
    const str = JSON.stringify(data);
    response.send(`handle(${str})`);
})
```