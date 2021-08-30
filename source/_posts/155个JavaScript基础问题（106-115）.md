---
title: 155个JavaScript基础问题（106-115）
date: 2021-06-12
categories: 155个JavaScript基础问题
tags: 
- 155个JavaScript基础问题
---
## 106. 输出什么？
```js
const colorConfig = {
  red: true,
  blue: false,
  green: true,
  black: true,
  yellow: false,
}

const colors = ["pink", "red", "blue"]

console.log(colorConfig.colors[1])
```
![image.png](https://img-blog.csdnimg.cn/img_convert/723039ea112cf76799a0fcfe0e2f1b45.png)
>答：D，JS通过点访问对象属性的时候，会把colors当做一个属性，发现找不到为undefined，然后调用[1]会报错。

## 107. 输出什么？
```js
console.log('❤️' === '❤️')
```
![image.png](https://img-blog.csdnimg.cn/img_convert/ddd3730f925cc12983cc3f8af49f98dc.png)
>答：A，显然这两个字面量是相等的。

## 108. 那些方法修改了原数组？
```js
const emojis = ['✨', '🥑', '😍']

emojis.map(x => x + '✨')
emojis.filter(x => x !== '🥑')
emojis.find(x => x !== '🥑')
emojis.reduce((acc, cur) => acc + '✨')
emojis.slice(1, 2, '✨') 
emojis.splice(1, 2, '✨')
```
![image.png](https://img-blog.csdnimg.cn/img_convert/330763e07ee315fe30a8273b5bdd3775.png)
>答：map,filter,slice返回的是新数组，find返回的是数组中的某个元素，reduce返回的是一个值，只有splice是对原数组产生了更改。

## 109. 输出什么？
```js
const food = ['🍕', '🍫', '🥑', '🍔']
const info = { favoriteFood: food[0] }

info.favoriteFood = '🍝'

console.log(food)
```
![image.png](https://img-blog.csdnimg.cn/img_convert/526b9fcd1844e0370a0029d33ce7e28b.png)
>答：A，上述代码只是修改了info中的值，并未对food对象产生任何影响。

## 110. 下面的函数干了什么？
```js
JSON.parse()
```
![image.png](https://img-blog.csdnimg.cn/img_convert/1e1beba5a460368f912a4c58b12f3d94.png)
>答：A，这个题就看我们对JS中常用API的了解程度了，就是将JSON字符串转换为对应的JavaScript值。

## 111. 输出什么？
```js
let name = 'Lydia'

function getName() {
  console.log(name)
  let name = 'Sarah'
}

getName()
```
![image.png](https://img-blog.csdnimg.cn/img_convert/faf5b041a9eb2d5d5e83c3505828093a.png)
>答：D，本题中let存在变量声明的提升，但是并未进行初始化，此时存在暂时性死区，在暂时性死区中调用let定义的变量会报错，所以选D。

## 112. 输出什么？
```js
function* generatorOne() {
  yield ['a', 'b', 'c'];
}

function* generatorTwo() {
  yield* ['a', 'b', 'c'];
}

const one = generatorOne()
const two = generatorTwo()

console.log(one.next().value)
console.log(two.next().value)
```
![image.png](https://img-blog.csdnimg.cn/img_convert/70d689ccbd86275e7c2216dcc2a84135.png)
>答：C，本题中的两个函数猛一看没区别，实际上第二个函数多了一个*号，所以调用第二个函数的next().value返回的其实是一个元素，所以本题选C。

## 113. 输出什么？
```js
console.log(`${(x => x)('I love')} to program`)
```
![](https://img-blog.csdnimg.cn/img_convert/2cc590f0275113522636351e34ef25c9.png)
>答：A，本题的模板字符串大括号中是一个立即执行函数，所以打印的结果是A。

## 114. 下面的函数将会发生什么？
```js
let config = {
  alert: setInterval(() => {
    console.log('Alert!')
  }, 1000)
}

config = null
```
![image.png](https://img-blog.csdnimg.cn/img_convert/adb1e4b6accd0bfcc8e120f5cea26232.png)
>答：C，这是因为循环定时器中的参数是一个箭头函数，箭头函数中的上下文绑定到config了，通过赋值为null,回调函数仍然保留着对config的引用，所以循环定时器不会停止，仍然是每隔1秒继续打印，可以通过clear的方式取消掉这个循环定时器。

## 115. 下面哪一个方法会返回'Hello World!'?
```js
const myMap = new Map()
const myFunc = () => 'greeting'

myMap.set(myFunc, 'Hello world!')

//1
myMap.get('greeting')
//2
myMap.get(myFunc)
//3
myMap.get(() => 'greeting')
```
![image.png](https://img-blog.csdnimg.cn/img_convert/38acb4041bd2753f07a90e013d70e7c1.png)
>答：B，首先我们要明确一点，Map中值为Hello world!的键是myFunc的地址引用，1,2,3中只有第二个键是myFunc的地址引用，3是一个新地址，所以选B。

## 题目来源
https://github.com/lydiahallie/javascript-questions