---
title: Ajax-16：Axios发送Ajax请求
date: 2021-03-25
categories: Ajax
tags: 
- Ajax
---
## axios的CDN引入链接
```
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```
## axios的GET请求
```js
const btns = document.querySelectorAll('button');
// 配置baseURL
axios.defaults.baseURL = 'http://localhost:8000';
btns[0].onclick = function() {
    axios.get('/axios-server',{
        // url参数
        params: {
            id: 666666,
            name: 'justin'
        },
        // 请求头信息
        headers: {
            color: "red"
        }
    }).then(value => {console.log(value);})
}
```
## axios的POST请求
```js
btns[1].onclick = function () {
    axios.post('/axios-server',{
        username: 'pink',
        password: 123456
    }, {
        // url参数
        params: {
            id: 999,
            school: 'Tsinghua'
        },
        // 请求头参数
        headers: {
            height: 600,
            weight: 300
        }
    })
}
```
* 第一个参数是URL
* 第二个参数是请求体
* 第三个参数是请求头参数
## axios的通用函数发送请求
```js
btns[2].onclick = function() {
    axios({
        // 请求方式
        method: 'POST',
        url: '/axios-server',
        // url参数
        params: {
            vip: 100,
            name: 'jusitn'
        },
        // 头信息
        headers: {
            a: 100,
            b: 30000
        },
        // 请求体参数
        data: {
            username: 'admin',
            password: 123456
        }
    }).then(value => {console.log(value);})
}
```
