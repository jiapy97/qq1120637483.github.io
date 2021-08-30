---
title: axios基础（四）：axios创建实例对象发送请求
date: 2021-03-28
categories: Axios
tags: 
- Axios
---
## 示例代码
```js
// axios创建实例对象来发起请求
const fun = axios.create({
    baseURL: 'https://api.apiopen.top'
});

fun({
    url: 'getJoke'
}).then(response => console.log(response));
```