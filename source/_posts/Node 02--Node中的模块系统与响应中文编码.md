---
title: Node 02--Node中的模块系统与响应中文编码
date: 2021-8-6
author: Justin
top: false
cover: false
categories: Node
tags:
  - Node
---
## require的加载顺序
>require加载文件是运行到该位置才加载，请看下面的一段代码
**a.js**
```js
console.log('a开始执行了');

require('./b');

console.log('a 执行结束了');
```

**b.js**
```js
console.log('b执行结束');
```

**执行结果**

![image.png](https://img-blog.csdnimg.cn/img_convert/98ddaa4903f6a00c69ff9e802005767b.png)

## Node中没有全局作用域只有模块作用域
>请看下面的两端代码
**a.js**

```js
var a = '777'
console.log('a开始执行了');

require('./b');

console.log('a 执行结束了');

console.log('a的值是：',a);
```

**b.js**
```js
var a = '666'

console.log('b执行结束');
```

**执行结果**

![image.png](https://img-blog.csdnimg.cn/img_convert/15f0b3d999220af3744ae370143ec520.png)

## 使用exports暴露模块
>exports其实是一个空对象，我们相当于向这个空对象中添加元素，然后进行暴露。
**a.js**
```js
const test = require('./b');

console.log(test.a);
```

**b.js**
```js
var a = '666'

exports.a = a;
```

**node运行 a.js**
![image.png](https://img-blog.csdnimg.cn/img_convert/22bef6f5fb36d2cb2a54b76929a02e4c.png)

## 响应中文编码
>服务器直接返回中文，在浏览器上显示的是乱码，所以我们可以通过设置setHeader中的编码格式来解决这一问题。

```js
server.on('request',(req,res) => {
    res.setHeader('Content-Type','text/plain; charset=utf-8');
    res.end('Node,你好');
})
```

### Content-Type有什么作用？
>**Content-Type就是用来告知对方发送的数据内容是什么类型的。下面我们将给出Content-Type的例子**

例子：设置为普通文本类型（plain）与html类型的
```js
server.on('request',(req,res) => {
    const url = req.url;
    if (url === '/plain') {
        res.setHeader('Content-Type','text/plain; charset=utf-8');
        res.end('这是中文哦！');
    } else if (url === '/html') {
        res.end('<h1>你好这是一级标题</h1');
    }
})
```
>浏览器会默认将html的字符串解析为HTML代码，如果我们想要的不是HTML代码而是字符串，可以通过设置setHeader为text/plain；




