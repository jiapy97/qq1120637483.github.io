---
title: JS模块化（三）：CMD规范
date: 2021-03-31
categories: JS模块化
tags: 
- JS模块化
---
## 目录结构
![](https://img-blog.csdnimg.cn/img_convert/2260a8eeb6c39e2f73c0055c1b4c97f3.png)

## module1：（没有依赖的模块）
```js
// 这是没有依赖的模块
define(function(require,exports,module) {
    let msg = 'module1';
    function foo() {
        return msg;
    }
    // 暴露模块
    module.exports = {foo};
})
```
## module2：（没有依赖的模块）
```js
define(function(require,exports,module){
    let msg = 'module2';
    function bar() {
        console.log(msg);
    }
    module.exports = bar;
})
```
## module3：（没有依赖的模块）
```js
define(function(require,exports,module) {
    let data = 'module3';
    function fun() {
        console.log(data);
    }
    // exports.module3 = {fun};
    module.exports = {fun};
})
```
## module4：（有依赖的模块）
```js
// 这是一个有依赖的模块
define(function(require,exports,module) {
    let msg = 'module4';
    // 同步引入
    let module2 = require('./module2');
    module2();
    // 异步引入
    require.async('./module3',function(module3) {
        // module3.module3.fun();
        module3.fun();
    })
    function fun2() {
        console.log(msg);
    }
    exports.fun2 = fun2;
})
```
## 主函数：main.js
```js
define(function(require) {
    let module1 = require('./module1');
    console.log(module1.foo()); 
    let module4 = require('./module4');
    module4.fun2();
})
```
## 浏览器端使用
![](https://img-blog.csdnimg.cn/img_convert/3e8e2521f599d94e56892ed1408d8f0c.png)