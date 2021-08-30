---
title: 一段代码看懂原型对象中的callback
date: 2021-06-11
categories: JavaScript基础
tags: 
- JavaScript基础
---
## 代码图示
![](https://img-blog.csdnimg.cn/img_convert/a4882652b92f93240c19cbb8526869fe.png)

```js
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
    var newArray = [];

    this.forEach(value => newArray.push(callback(value)))

    return newArray;
};

var new_s = s.myMap(function (item) {
    return item * 2;
});
```
