---
title: Socket.io中的命名空间
date: 2022-01-27
author: Justin
top: false
cover: false
categories: Socket.io
tags:
  - Socket.io
---

## 什么是Socket.io中的命名空间？
> 所谓的命名空间，在一个域中发消息，只有当前的域的socket能够收到消息，其他域的消息则不能。

1. 服务端：通过io.of创建命名空间。

2. 服务端进行广播的时候，也需要使用命名空间。

3. 客户端向服务端发起连接的时候也需要指定命名空间。

## egg.js中如何集成socket.io?
> 参考文档：https://eggjs.org/zh-cn/tutorials/socketio.html


1. 安装egg-socket.io

```shell
npm i egg-socket.io --save
```

2. 在plugin.js中进行插件配置

```js
  io: {
    enable: true,
    package: 'egg-socket.io',
  }
```

3. 在conig.default.js中进行如下配置

```js
  config.io = {
    init: {}, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: [],
        packetMiddleware: [],
      },
    },
  };
```

4. 指定io触发的时候连接的中间件

```js
  config.io = {
    init: {}, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: ["connection"],  // 建立连接的时候，触发的中间件
        packetMiddleware: [],
      },
    },
  };
```

5. 中间件connection.js

```js
module.exports = app => {
  return async (ctx, next) => {
    console.log("连接成功。。。");
    ctx.socket.emit('serverMsg', '连接成功');
    await next();
  };
};
```

6. 客户端引入socket.io的cdn时尽量引入版本2的，因为版本2的可以直接跨域。

```js
<script src="https://cdn.bootcdn.net/ajax/libs/socket.io/2.2.0/socket.io.js"></script>
```

7. 分清是一对一广播还是一对多广播

* 一对一广播

```js
ctx.socket.emit('serverMsg', `Hi! I've got your message: ${message}`);
```

* 一对多广播

```js
await ctx.app.io.emit('serverMsg', `Hi! I've got your message: ${message}`);
```

8. 学会使用分组广播

```js
app.io.to(roomId).emit("serverMsg","this is addCart msg");
```

> 下面是分组广播但是不通知自己的情况：

```js
ctx.socket.broadcast.to(roomId).emit('serverMsg',"this is addCart msg");
```

## 客户端发送请求的实例

```js
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
    <title>Socket.io客户端1</title>    
    <script src="https://cdn.bootcdn.net/ajax/libs/socket.io/2.2.0/socket.io.js"></script>
    <!-- <script src="https://cdn.jsdelivr.net/npm/socket.io-client@4.4.1/dist/socket.io.min.js"></script> -->
</head>
<body>
    <h2>客户端111</h2>
    <br>
    <button onclick="send()">发送消息</button>
</body>

<script>
  //1、连接socket.io服务器
  var socket = io.connect("http://192.168.1.7:7001?roomId=20");

  socket.on("serverMsg",function(serverData){
    console.log(serverData);
  })
 
  function send(){
    socket.emit("clientMsg","client AddCart");
  }
</script>
</html>
```

## 总结
> 客户端发送socket请求的时候，如果服务端使用的是egg.js，则建议尽量使用V2版本，因为这个版本的socket不需要配置跨域，V4版本则需要配置跨域。在客户端与服务端通信时，尽量统一监听字段，这样可以有效防止出错。





