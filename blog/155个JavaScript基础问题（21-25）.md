---
title: 155个JavaScript基础问题（21-25）
date: 2021-06-02
categories: 155个JavaScript基础问题
tags: 
- 155个JavaScript基础问题
---
## 21. 输出是什么？
```js
const sum = eval('10*10+5')
```
![](https://img-blog.csdnimg.cn/img_convert/66af1ba27d80e44f65ddbc83bbdfe72c.png)
>答：A，eval会将字符串变为表达式，然后执行。

## 22. cool_secret能够访问多长时间？
```js
sessionStorage.setItem('cool_secret', 123)
```
>答：使用sessionStorage存储内容时，一旦用户关闭Tab标签页，存储的内容将消失，localStorage则不会，除非调用localStorage.clear().

## 23. 输出是什么？
```js
var num = 8
var num = 10

console.log(num)
```
![](https://img-blog.csdnimg.cn/img_convert/a535ca17b13d72e57dec87914eb7a166.png)
>答：B，因为这是var声明的变量，会出现同名定义，然后变量保存最新的值的情况。

## 24. 输出是什么？
```js
const obj = { 1: 'a', 2: 'b', 3: 'c' }
const set = new Set([1, 2, 3, 4, 5])

obj.hasOwnProperty('1')
obj.hasOwnProperty(1)
set.has('1')
set.has(1)
```
![](https://img-blog.csdnimg.cn/img_convert/4ab475d4efad0188b627166021c15423.png)
>答：C，因为除了Symbol之外，所有的对象的键在底层实现都是字符串，所以通过hasOwnProperty检测字符串1和数字1返回的都是true,但是集合是区分字符串和数字的，所以是false,true.

## 25. 输出是什么？
```js
const obj = { a: 'one', b: 'two', a: 'three' }
console.log(obj)
```
![](https://img-blog.csdnimg.cn/img_convert/2869390402e90f1706f18c2bdc8db9b3.png)
>答：C，在对象中，如果出现重名键的情况，键的顺序不发生变化，但是后面的值会覆盖掉同名键前边的值。


