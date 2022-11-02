---
title: for...in和for....of的区别是什么？
date: 2022-05-06
author: Justin
top: false
cover: false
categories: 面试题
tags:
  - 面试题
---

## 核心区别：获取的内容不同
* for...in主要获取对象的key和数组的下标，同时for...in还能够遍历原型链上的可枚举属性。
* for...of主要获取对象的value值。

```js
const obj = {'a' : '111','b':'222'};

for (let key in obj) {
    console.log(key);  // a b
}
//  没有部署原生的iterator接口的对象不能直接遍历
for (let value of Object.keys(obj)) {
    console.log(obj[value]);  // 111  222
}
```


## 常见问题汇总
### RQ1：for...in或者for...of能遍历Symbol类型的值吗？
> 无论是for...in还是for...of都不能遍历Symbol类型的值，遍历Symbol类型的值需要使用Object.getOwnPropertySymbols()方法。

### RQ2：for...in遍历出原型上的属性怎么办？
> 如果只想要遍历实例对象身上的属性，不遍历原型链上的属性可以使用hasOwnProperty方法来过滤。

### RQ3：for in 和 Object.keys()的区别？
> for...in循环会遍历原型链上的可枚举属性，但是Object.keys()则不会涉及到原型链上的属性。


