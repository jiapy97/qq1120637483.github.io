---
title: axios基础（五）：axios拦截器
date: 2021-03-29
categories: Axios
tags: 
- Axios
---
## 请求拦截器与响应拦截器的概念
* 请求拦截器：相当于一种请求检测机制，只有通过该检测的请求才能被发送。
* 响应拦截器：相当于一种响应检测机制，只有通过该检测的响应才能被返回。

## 请求拦截器有什么作用？
* 请求拦截器可以给请求添加参数
![](https://img-blog.csdnimg.cn/img_convert/87914f83b71466f1124c0865f570fe9d.png)
* 响应拦截器可以对响应做出一些修改，使得客户端接收到的是被修改过的响应
![](https://img-blog.csdnimg.cn/img_convert/23dc7f092d450a538bb6b98c49284a20.png)

## 拦截器的执行顺序是什么？
* 请求拦截器是谁在定义的最后，谁先拦截，相应拦截器则是谁先定义谁先拦截。
![](https://img-blog.csdnimg.cn/img_convert/d90e60337ffc83429a0f8136977763d7.png)

## 模板代码
```js
// 设置请求拦截器
axios.interceptors.request.use(function (config) {
    console.log("请求拦截器 拦截成功 1号");
    config.params = {a: 666666};    
    return config;
    // throw new Error;
}, function (error) {
    console.log("请求拦截器 拦截失败 1号");
    return Promise.reject(error);
});

axios.interceptors.request.use(function (config) {
    console.log("请求拦截器 拦截成功 2号");
    return config;
    // throw new Error;
}, function (error) {
    console.log("请求拦截器 拦截失败 2号");
    return Promise.reject(error);
});
// 设置响应拦截器
axios.interceptors.response.use(function (response) {
    console.log("响应拦截器 成功 1号");
    // console.log(response);
    return response.data;
}, function (error) {
    console.log("响应拦截器 default 1号");
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    console.log("响应拦截器 成功 2号");
    return response;
}, function (error) {
    console.log("响应拦截器 default 2号");
    return Promise.reject(error);
});

// 使用axios发送请求
axios({
    method: 'GET',
    url: 'http://localhost:3000/posts'
}).then((response => {console.log(response)})).catch(reason => {console.log("自定义回调错误");});
```
