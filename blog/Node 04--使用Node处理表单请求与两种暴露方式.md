---
title: Node 04--使用Node处理表单请求与两种暴露方式
date: 2021-8-9
author: Justin
top: false
cover: false
categories: Node
tags:
  - Node
---
## 使用Node处理表单get请求
### 表单的格式
>一个HTML表单要想点击button按钮就能够提交数据，必须具备以下几个要素：
1. 表单要有action属性，这个属性是告知浏览器要将数据发送到哪里。
2. 每一个输入框要有name属性，这个属性是帮助我们定位输入的是什么的。
3. button的type属性要是submit.

```html
<form action="/pinglun" method="get">
    <div class="form-group">
        <label for="input_name">你的大名</label>
        <input type="text" class="form-control" required minlength="2" maxlength="10" id="input_name"
            name="name" placeholder="请写入你的姓名">
    </div>
    <div class="form-group">
        <label for="textarea_message">留言内容</label>
        <textarea class="form-control" name="message" id="textarea_message" cols="30" rows="10" required
            minlength="5" maxlength="20"></textarea>
    </div>
    <button type="submit" class="btn btn-default">发表</button>
</form>
```

### 服务器端使用Node的核心模块url(将url字符串转换为对象)
* 引入url模块
```js
const urlParse = require('url')
```
* 将url字符串解析为url对象
```js
const parseObj = urlParse.parse(url,true);
```
* 获取请求路径(这个请求路径是不包含查询字符串的)
```js
const pathname = parseObj.pathname;
```
* 获取表单发送过来的数据
```js
parseObj.query
```

## 让客户端的请求进行重定向
* 首先发送给客户端一个302状态码，让客户端进行临时重定向。
```js
res.statusCode = 302;
```
* 通过响应头让客户端跳转到指定的路径(下文的路径是根路径)
```js
res.setHeader('Location','/');
```

## Node中的两种暴露方式
### 使用exports.xxx进行暴露（需要暴露的内容都在一个对象中）
>使用这种暴露方式，暴露的是一个对象，我们以下面的例子进行举例说明：

* a.js
```js
const test = require('./b');
console.log(test);
```
* b.js
```js
const foo = '你好';
exports.foo = foo;
```

**我们对a进行调用，输出结果如下所示**
```json
{ foo: '你好' }
```

### 使用module.exports = XXX (这样暴露的就是XXX，我们在实际开发的过程中推荐使用这个方式)
* a.js
```js
const test = require('./b');
console.log(test);
```
* b.js
```js
const foo = '你好';
module.exports = foo;
```

**对a.js进行调用，输出结果如下所示：**
```json
你好
```

### 小结
>**node中实际暴露的是module.exports这个对象，你给这个对象赋值，返回的就是值，你给对象添加属性，返回的就是含有属性的对象。**


