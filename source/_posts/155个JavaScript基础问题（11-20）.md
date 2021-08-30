---
title: 155个JavaScript基础问题（11-20）
date: 2021-06-01
categories: 155个JavaScript基础问题
tags: 
- 155个JavaScript基础问题
---
## 11. 输出是什么？
```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}

console.log(member.getFullName());
```
![](https://img-blog.csdnimg.cn/img_convert/bb1d4a2282306ef1dc2202beb5ef268d.png)

>答：A，本题中Person是一个构造函数，不能像普通的对象给构造函数添加属性，要想给构造函数的实例添加属性，可以通过原型的方式来实现。

## 12. 输出是什么？
```js
function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

const lydia = new Person('Lydia', 'Hallie')
const sarah = Person('Sarah', 'Smith')

console.log(lydia)
console.log(sarah)
```
![](https://img-blog.csdnimg.cn/img_convert/7d22adf5ab0ab3a8f5826bb6a5b204ae.png)

>答：A，关于Lydia的选项一般不易选错，因为通过new关键词，this会引用我们创建的空对象，但是sarah没有使用new关键词，所以，此时的this是指向global的，而sarah本身是undefined.

## 13. 事件捕获的三个阶段是哪些？
![](https://img-blog.csdnimg.cn/img_convert/561c062c904081f4136c0184e429f7d7.png)

>答：选D、DOM事件流的三个阶段分别是事件捕获阶段、处于目标阶段、事件冒泡阶段。事件捕获的三个阶段图示：![](https://img-blog.csdnimg.cn/img_convert/a62390057b66bda69fa9fa9f2d7fc67a.png)

## 14. 所有的对象都有原型？
![](https://img-blog.csdnimg.cn/img_convert/d85f4d790b94ac5aaefd02040c3092b3.png)

>答：错。这句话是不够准确的，准确的说应该是除去Object之外的所有对象都有原型。

## 15. 输出是什么？
```js
function sum(a, b) {
  return a + b
}

sum(1, '2')
```
![](https://img-blog.csdnimg.cn/img_convert/bf3ceb532a4e9cfe8743a7c4f44a62cc.png)

>答：C，因为JS将字符串2和数字1相加时，会进行类型转换，将1转换为字符串类型的，然后就相当于一种字符串拼接。

## 16. 输出是什么？
```js
let number = 0
console.log(number++)
console.log(++number)
console.log(number)
```
![](https://img-blog.csdnimg.cn/img_convert/9df0951d8fee2123a94f94e777e376bd.png)

>答：C，number++是先输出值，再进行加，但是++number则是先加，再进行输出。

## 17. 输出是什么？
```js
function getPersonInfo(one, two, three) {
  console.log(one)
  console.log(two)
  console.log(three)
}

const person = 'Lydia'
const age = 21

getPersonInfo`${person} is ${age} years old`
```
![](https://img-blog.csdnimg.cn/img_convert/5bef2ad85bb78ed2b1cdcce8bb835e87.png)

>答：B，我刚开始看到这道题的时候，我在想getPersonInfo是不是少加一个括号，后来我发现并不是这样，本题意在考查标签函数。所谓的标签函数就是函数名后面直接带一个模板字符串，并从模板字符串中的插值表达式中获取参数。标签表达式的第一个参数是模板字符串中的普通文本，大括号标记的地方视为空字符串，第二个参数则是模板字符第一个大括号中的，以此类推。

## 18. 输出是什么？
```js
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log('You are an adult!')
  } else if (data == { age: 18 }) {
    console.log('You are still an adult.')
  } else {
    console.log(`Hmm.. You don't have an age I guess`)
  }
}

checkAge({ age: 18 })
```
![](https://img-blog.csdnimg.cn/img_convert/03ff811fb18e02bc17be1e51e8aae4fd.png)

>答：C，对象在进行比较时，比较的是引用的内存地址，此处参数形式的对象的地址和用于比较的对象的地址是不同的，所以=== 和 == 返回的都是false,所以最后答案选C。

## 19. 输出是什么？
```js
function getAge(...args) {
  console.log(typeof args)
}

getAge(21)
```
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/778d806389204f1f8a1ca377c48ed76c~tplv-k3u1fbpfcp-zoom-1.image)

>答：C、拓展运算符返回的是实参数组，数组属于object类型。

## 20. 输出是什么？
```js
function getAge() {
  'use strict'
  age = 21
  console.log(age)
}

getAge()
```
![](https://img-blog.csdnimg.cn/img_convert/a952524c9835489c8df56ac35fa8b387.png)

>答：C、因为这是严格模式，所以会出现引用错误，如果不是严格模式的话，age属性会被添加到全局对象中去。

## 参考文献
[题目来源](https://github.com/lydiahallie/javascript-questions)

[JavaScript事件捕获和事件冒泡](https://www.bilibili.com/video/BV1m7411L7YW?from=search&seid=5828352374642195178)

[ES6 - 标签函数](https://zhuanlan.zhihu.com/p/31687266)

## 为什么不一次性放完所有题目？
博主认为学习贵在坚持，而不是三天打鱼两天晒网，学习不是收藏不看，而是每天进步一点点，大家一起加油！
>## 欢迎大家指正批评
