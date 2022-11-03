---
title: 155个JavaScript基础问题（86-95）
date: 2021-06-10
categories: 155个JavaScript基础问题
tags: 
- 155个JavaScript基础问题
---
## 86. 那个选项是将hasName置为true的方法，前提是不能将true作为参数进行传递？
```js
function getName(name) {
  const hasName = //
}
```
![](https://img-blog.csdnimg.cn/img_convert/04e672abae84a5c2628008297a1b63b7.png)
>答：A，对name取!返回的是布尔值，C项返回的是一个对象包装器，B返回的是name本身，D返回的是name的长度。

## 87. 输出是什么？
```js
console.log("I want pizza"[0])
```
![](https://img-blog.csdnimg.cn/img_convert/65adfae8c852fc02e1213b7641c158e0.png)
>答：B，本题意在告诉我们字符串也是可以通过类似数组下标的方式进行取值的。

## 88. 输出什么？
```js
function sum(num1, num2 = num1) {
  console.log(num1 + num2)
}

sum(10)
```
![image.png](https://img-blog.csdnimg.cn/img_convert/9ab55a4ea35a360624ef2c09ccacac7d.png)
>答：B，本题考查的是函数的默认传参，在本题的情况下，如果只传一个参数，第二个参数默认是第一个参数的值。

## 89. 输出什么？
```js
// module.js 
export default () => "Hello world"
export const name = "Lydia"

// index.js 
import * as data from "./module"

console.log(data)
```
![](https://img-blog.csdnimg.cn/img_convert/e5765076078b3b0dd2c2898eb406400e.png)
>答：A，本题意在考查import * as的用法，通过这种用法，会将module.js文件中的所有暴露导入到index.js中的data对象中，所以选A，下面是测试截图。![image.png](https://img-blog.csdnimg.cn/img_convert/56dcfc72e954462a3632d56a3967a0c8.png)

## 90. 输出什么？
```js
class Person {
  constructor(name) {
    this.name = name
  }
}

const member = new Person("John")
console.log(typeof member)
```
![image.png](https://img-blog.csdnimg.cn/img_convert/91be7189caf3620da03dd0236dd950af.png)
>答：C，Person类的实例对象属于object。

## 91. 输出什么？
```js
let newList = [1, 2, 3].push(4)

console.log(newList.push(5))
```
![image.png](https://img-blog.csdnimg.cn/img_convert/161ddcdc41e8acb23f2fa2c24311808c.png)
>答：D，本题意在考查push方法的返回值，我们要知道返回的并不是一个新数组而是新数组的长度，所以给一个数字添加元素，是要报错的，所以选D。

## 92. 输出什么？
```js
function giveLydiaPizza() {
  return "Here is pizza!"
}

const giveLydiaChocolate = () => "Here's chocolate... now go hit the gym already."

console.log(giveLydiaPizza.prototype)
console.log(giveLydiaChocolate.prototype)
```
![image.png](https://img-blog.csdnimg.cn/img_convert/9a61a86bdfd6287b8ec7a81d4a63e7df.png)
>答：D，常规函数有prototype属性，但是箭头函数没有这个属性，所以选D，下面是codepen的测试截图：![](https://img-blog.csdnimg.cn/img_convert/f81a655af70853fe53df16252f55c2a6.png)

## 93. 输出什么？
```js
const person = {
  name: "Lydia",
  age: 21
}

for (const [x, y] of Object.entries(person)) {
  console.log(x, y)
}
```
![image.png](https://img-blog.csdnimg.cn/img_convert/285303e33a67441a654e2f31b80124e2.png)
>答：A，本题意在考查Object.entries这个API的用法，这个API将对象键值对存入一个二维数组，具体解释请看下图：![image.png](https://img-blog.csdnimg.cn/img_convert/032739f3ef5147ca1fe1fefdbe07b714.png)

## 94. 输出什么？
```js
function getItems(fruitList, ...args, favoriteFruit) {
  return [...fruitList, ...args, favoriteFruit]
}

getItems(["banana", "apple"], "pear", "orange")
```
![](https://img-blog.csdnimg.cn/img_convert/cb825fd7c6b07a26bceca76a50a04395.png)
>答：D，本题意在考查我们对拓展运算符的理解，这里的拓展运算符必须放在最后一个参数，不然会报错。![](https://img-blog.csdnimg.cn/img_convert/0d6eac0b4bc28b2db5460216f9187a56.png)

## 95. 输出什么？
```js
function nums(a, b) {
  if
  (a > b)
  console.log('a is bigger')
  else 
  console.log('b is bigger')
  return 
  a + b
}

console.log(nums(4, 2))
console.log(nums(1, 2))
```
![image.png](https://img-blog.csdnimg.cn/img_convert/1b748ec379e5a45706607e5b341a26bc.png)
>答：B，这道题有点坑，主要是JS在编译的时候会自动给return后面加个分号，所以永远访问不到a+b,所以选B。

## 题目来源
https://github.com/lydiahallie/javascript-questions