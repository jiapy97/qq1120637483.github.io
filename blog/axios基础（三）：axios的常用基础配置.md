---
title: axios基础（三）：axios的常用基础配置
date: 2021-03-28
categories: Axios
tags: 
- Axios
---
## 常用基础配置
```js
// axios的常用默认配置
axios.defaults.method = 'GET';
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.params = {id: 2};

btns[0].onclick = function() {
    axios({
        url: '/posts'
    }).then(response => {console.log(response);})
}
```
![](https://img-blog.csdnimg.cn/img_convert/7ed04ef568b7f86ed357236ade6be5da.png)