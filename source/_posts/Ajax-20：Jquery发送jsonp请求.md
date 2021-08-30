---
title: Ajax-20：Jquery发送jsonp请求
date: 2021-03-26
categories: Ajax
tags: 
- Ajax
---
## 客户端
```js
$('button').eq(0).click(function() {
    $.getJSON('http://localhost:9000/jquery-jsonp?callback=?',function(data) {
        $('.result').html(`
            编号: ${data.id}<br>
            消息: ${data.msg}
        `)
    })
});
```
## 服务器端
```js
// 测试jquery的jsonp服务
app.all('/jquery-jsonp',(request,response) => {
    const data = {
        id: 1,
        msg: '该用户名已存在'
    };
    const str = JSON.stringify(data);
    // 接受callback参数
    let cb = request.query.callback;

    response.end(`${cb}(${str})`);
})
```