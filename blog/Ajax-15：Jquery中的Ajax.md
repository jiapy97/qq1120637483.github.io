---
title: Ajax-15：Jquery中的Ajax
date: 2021-03-24
categories: Ajax
tags: 
- Ajax
---
>注意事项：在使用Jquery之前一定要先引入相关库。
```js
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
```
## 使用Jquery发送GET请求
```js
$('button').eq(0).click(function() {
  $.get('http://localhost:8000/jquery-server',{a:20,b:30},function(data) {
      console.log(data);
  },'json')
});
```
## 使用Jquery发送POST请求
```js
$('button').eq(1).click(function() {
    $.post('http://localhost:8000/jquery-server',{a:20,b:30},function(data) {
        console.log(data);
    })
});
```
## 使用Jquery进行通用型方法请求
```js
// 通用型方法
$('button').eq(2).click(function () {
    $.ajax({
        url: 'http://localhost:8000/jquery-server',
        data: { a: 20, b: 100 },
        dataType: 'json',
        type: 'GET',
        success: function (data) {
            console.log(data);
        },
        // 超时时间
        timeout: 4000,
        error: function () {
            console.log("网络超时");
        },

        headers: {
            a: 666,
            b: 777
        }
    })
})
```
* 上面的很多属性都是可以进行自定义的。
* 在设置headers的时候，服务端必须有下面这段代码
```
response.setHeader('Access-Control-Allow-Headers', '*');
```
