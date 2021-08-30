---
title: Node 01--使用Node读写文件与简单的Http服务
date: 2021-8-5
author: Justin
top: false
cover: false
categories: Node
tags:
  - Node
---
>关于Node是什么，以及如何安装node等基础知识，本系列文章便不再赘述，本专栏的特点是只讲干货，从零基础开始学习NodeJs.

## Node和浏览器环境的不同之处
### 1. Node中没有DOM和BOM
```js
console.log(window);
console.log(document);
```
>我们通过node命令运行上面的代码是会报错的。
![image.png](https://img-blog.csdnimg.cn/img_convert/e8c95bf342087f58cc62ca4ff3376eae.png)

### 2. 浏览器环境下的JS是没有操作文件的能力的，但是Node有
>fs是file-system的简写，是文件系统的意思，在Node中如果想要进行文件操作，就必须引入fs这个核心模块，在fs这个核心模块中，提供了操作文件的相关API，例如fs.readFile就是用来读取文件的。
```js
const fs = require('fs');

fs.readFile('./readme.md',(err,data) => {
    if (!err) {
        console.log(data.toString());
    }
})
```
![image.png](https://img-blog.csdnimg.cn/img_convert/257d8b6e81d1848b3340ace8746c9f64.png)

## 使用Node创建基础的HTTP服务
```js
// 1. 加载http核心模块
const http = require('http');

// 2. 创建服务器实例
const server = http.createServer();

// 3. 注册request请求事件
server.on('request',(request,response) => {
    console.log('服务器端收到请求');
    console.log('客户端的请求路径是：',request.url);
    response.write('<h1>Hello,Node!</h1>');
    // response.end();
    if (request.usr = '/index') {
        response.write('666');
    }
    response.end();
})

// 4. 绑定端口号，启动服务器
server.listen(3000,() => {
    console.log('服务器启动成功');
});
```
### 响应数组、对象、数字等格式的内容使用JSON.stringify
```js
const http = require('http');

// 1. 创建服务器实例
const server = http.createServer();

// 2. 监听请求事件，设置请求处理函数
server.on('request',(request,response) => {
    if (request.url === '/index') {
        // response.write('666666');
    }
    const test = [{name: 'justin',phone: '11'}];
    response.end(JSON.stringify(test));
})

// 3. 监听指定端口
server.listen(3000,() => {
    console.log('服务器启动成功！');
})
```
## 使用OS模块获取当前系统的信息
```js
const os = require('os');

console.log(os.cpus());
```
```json
[
  {
    model: 'Intel(R) Core(TM) i5-6300HQ CPU @ 2.30GHz',
    speed: 2304,
    times: {
      user: 1780218,
      nice: 0,
      sys: 2250343,
      idle: 24643734,
      irq: 617593
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-6300HQ CPU @ 2.30GHz',
    speed: 2304,
    times: {
      user: 1810000,
      nice: 0,
      sys: 1999546,
      idle: 24864125,
      irq: 370703
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-6300HQ CPU @ 2.30GHz',
    speed: 2304,
    times: {
      user: 1855187,
      nice: 0,
      sys: 1691656,
      idle: 25126828,
      irq: 148062
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-6300HQ CPU @ 2.30GHz',
    speed: 2304,
    times: {
      user: 1898781,
      nice: 0,
      sys: 1538750,
      idle: 25236140,
      irq: 65781
    }
  }
]
```



