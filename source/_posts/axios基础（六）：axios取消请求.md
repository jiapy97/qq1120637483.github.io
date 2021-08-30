---
title: axios基础（六）：axios取消请求
date: 2021-03-30
categories: Axios
tags: 
- Axios
---
>为了测试取消请求的效果，我们需要将json-server服务具有延时响应的效果。
## 实现json-server延时响应的启动方式
```
json-server --watch db.json -d 2000   
```
上面的2000就代表延时2s，再响应服务
## 实现axios取消请求的方法
* 声明一个全局变量cancel
* 在axios请求的时候，配置一个cancelToken属性，这个属性的值是一个CancelToken对象，对象的参数是一个回调函数。
* 取消的时候，只需要调用cancel函数即可。

## 实现代码
```js
// 申明全局变量
let cancel = null;
// 第一个事件：发送请求
btns[0].onclick = function() {
    axios({
        method: 'GET',
        url: 'http://localhost:3000/posts',
        // 添加配置对象的属性
        cancelToken: new axios.CancelToken(function(c) {
            cancel = c;
        })
    }).then(response => {console.log(response);})
}
// 第二个事件：取消请求
btns[1].onclick = function() {
    cancel();
}
```