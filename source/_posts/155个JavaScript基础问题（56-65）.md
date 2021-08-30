---
title: 155个JavaScript基础问题（56-65）
date: 2021-06-08
categories: 155个JavaScript基础问题
tags: 
- 155个JavaScript基础问题
---
## 56. 输出是什么？
```js
const set = new Set([1, 1, 2, 3, 4]);

console.log(set);
```
![](https://img-blog.csdnimg.cn/img_convert/bf1f348e4a49fdd0687e198b179cf9d7.png)

>答：D、本题考查集合的用法，集合有去重的功能，所以答案是打印出集合形式的1 2 3 4.

## 57. 输出是什么？
```js
// counter.js
let counter = 10;
export default counter;
```
```js
// index.js
import myCounter from "./counter";

myCounter += 1;

console.log(myCounter);
```
![](https://img-blog.csdnimg.cn/img_convert/a6ae112b4782d31c229f0067d0830886.png)
>答：C，引入的模块是只读的，不能修改引入的模块。

## 58. 输出是什么？
```js
const name = "Lydia";
age = 21;

console.log(delete name);
console.log(delete age);
```
![](https://img-blog.csdnimg.cn/img_convert/5e635dd2a56d54183141e46546652442.png)
>答：A，只需记住一点，属性是还可以删除的，定义的变量无法使用delete的，age相当于给全局对象添加属性，name则是定义变量。

## 59. 输出是什么？
```js
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);
```
![](https://img-blog.csdnimg.cn/img_convert/eb9e9ada553a3b5a2c97aca528609db1.png)
>答：C，本题主要考察数组的解构赋值，所以y是1，因为需要个数上对应。

## 60. 输出是什么？
```js
const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
```
![](https://img-blog.csdnimg.cn/img_convert/175bc12ae319e546bc775b2d16830eb2.png)
>答：B，本题主要考察的是通过拓展运算符对对象进行解构，所以答案选B。

## 61. 输出是什么？
```js
const person = { name: "Lydia" };

Object.defineProperty(person, "age", { value: 21 });

console.log(person);
console.log(Object.keys(person));
```
![](https://img-blog.csdnimg.cn/img_convert/2b0dc02cd70ed2b5bc62e2196a879332.png)
>答：B，本题主要考察的是defineProperty的用法，通过该方法给对象添加的属性，需要声明其属性是否可迭代，如果没有声明默认是不可迭代，所以本题选B。

## 62. 输出是什么？
```js
const settings = {
  username: "lydiahallie",
  level: 19,
  health: 90
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);
```
![](https://img-blog.csdnimg.cn/img_convert/56442ae1658487bfbffeafd86d0f732b.png)
>答：A，本题主要考察JSON.stringify的用法，第二个参数意味着将哪些属性转换为字符串，所以本题选A。

## 63. 输出是什么？
```js
let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = number => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);
```
![](https://img-blog.csdnimg.cn/img_convert/7c0436538e11a875650f3c62738551d9.png)
>答：A，本题主要考察的是x++的调用顺序问题，两次调用都是将10返回之后再加的。

## 64. 输出是什么？
```js
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log(x.number *= 2);
};

multiply();
multiply();
multiply(value);
multiply(value);
```
![](https://img-blog.csdnimg.cn/img_convert/b73f5243b9d9bd2ba96c7711f4d1e5bd.png)
>答：C，本题考查的是默认参数和传参的区别，通过默认参数每次都会创建一个新对象，对源对象没有影响，但是直接传参的话，如果传的是引用，则会产生影响。

## 65. 输出是什么？
```js
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
```
![](https://img-blog.csdnimg.cn/img_convert/7c6a1f917bf09486aea74ec4a4f58c8d.png)
>答：D，本题主要考察的是reduce函数的用法，reduce的第一个参数是累积器的值，第二个参数的值是当前元素的值，如果不指定累积器的值，那么累积器的值是第一个元素的值即1，y是2。后面由于没有加减操作，所以累积器为undefined.

## 题目来源
https://github.com/lydiahallie/javascript-questions

## 欢迎大家关注专栏，每日更新。