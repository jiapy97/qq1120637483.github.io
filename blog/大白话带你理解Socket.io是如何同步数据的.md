---
title: 大白话带你理解Socket.io是如何同步数据的
date: 2022-01-26
author: Justin
top: false
cover: false
categories: Socket.io
tags:
  - Socket.io
---

## 需求分析
> 有时候，我们想要在不同的客户端中对数据进行同步，以扫码点餐为例，一个餐桌上的二维码被多个用户扫描之后，我们希望所有客户端打开的页面中的数据是同步的，这个需求socket.io可以帮助我们实现。

## 有哪些实现方法？

### 方法1：不断轮询
> 所谓的不断轮询，指的是在很短的时间内，不同的客户端都去向服务器请求数据，这样能够在很短的时间内刷新数据，但是这种方法会带来很严重的性能浪费，在网络环境不好的情况下，还会带来很大的延迟，因此，这种方法并不推荐。

### 方法2：长连接
> 浏览器和服务器首先进行握手，建立一个有效的连接，建立连接之后，双方可以在任意时刻，互相推送消息，这种方法比较推荐，能够带来比较好的用户体验。

## 长连接实现
### 通过Socket.io实现长连接
> socket.io将websocket、ajax等通信方式进行了有效的封装，在使用socket.io的过程中，我们不用担心兼容问题，socket.io会帮助我们选择最佳的通信方式，所以说socket.io包含了websocket，因此会带来较好的兼容性。

### 使用socket.io实现聊天室功能
> 下面是参考文档

https://socket.io/get-started/chat

1. 服务端：安装socket.io

```shell
npm install socket.io
```

2. 服务端：创建socket.io服务器

> 下面的代码主要使用了socket.io和express。

```js
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/',(req,res) => {
  res.render('index');
})

server.listen(8002)

// 创建socket.io服务
io.on('connection',(socket) => {
  console.log('一个用户连接到服务器');
  // 下面是给客户端的广播
  socket.emit("serverMsg","已经建立了连接")
})
```

3. 客户端：连接socket.io服务器并监听广播

```js
  // 1. 连接socket.io服务器
  const socket = io();
  // 2. 监听广播
  socket.on("serverMsg",function(serverData){
    console.log(serverData);
  })
```

4. 客户端：向服务端发送数据

> 下面的代码使用的是Jquery，但是核心就是socket.emit这一句话。

```js
  $('#send').click(function() {
    const msg = $('#msg').val();
    // alert(msg);
    socket.emit("clientMsg",msg);
  });
```

5. 服务端监听消息并发送广播

```js
  socket.on("clientMsg",(clientData) => {
    console.log(clientData);
    io.emit("serverMsg",clientData);
  })
```

## 总结
> socket.io是一个非常强大的通信库，通过上面的例子，我们可以看到socket.on主要是用来监听特定广播的，但是io.emit则是向所有用户进行广播使用的。

