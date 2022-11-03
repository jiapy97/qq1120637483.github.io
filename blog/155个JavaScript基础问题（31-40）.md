---
title: 155个JavaScript基础问题（31-40）
date: 2021-06-06
categories: 155个JavaScript基础问题
tags: 
- 155个JavaScript基础问题
---
## 31. 当点击按钮时,event.target是什么？
```js
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>
```
![](https://img-blog.csdnimg.cn/img_convert/11b5e19532086ea655412bad59c7fdae.png)
>答：C，触发事件的对象的引用是button.

## 32. 单击该段落时，输出是什么？
```js
<div onclick="console.log('div')">
  <p onclick="console.log('p')">
    Click here!
  </p>
</div>
```
![](https://img-blog.csdnimg.cn/img_convert/f50214891000d89972b313aafc698601.png)
>答：A，本题考查的是事件冒泡。

## 33. 输出是什么？
```js
const person = { name: 'Lydia' }

function sayHi(age) {
  console.log(`${this.name} is ${age}`)
}

sayHi.call(person, 21)
sayHi.bind(person, 21)
```
![](https://img-blog.csdnimg.cn/img_convert/e903932b0a9e9295230ba0a1334118d8.png)
>答：D，本题之所以选D的原因在于，call是立即执行的，bind返回一个函数。

## 34. 输出是什么？
```js
function sayHi() {
  return (() => 0)()
}

typeof sayHi()
```
![](https://img-blog.csdnimg.cn/img_convert/16d7ca36183c8439517ead1f1efb54bd.png)
>答：B,这是因为sayHi函数返回的是一个立即执行函数的结果，所以返回的是0,0属于number类型的。

## 35. 下面哪些值是假值?
```js
0
new Number(0)
('')
(' ')
new Boolean(false)
undefined
```
![](https://img-blog.csdnimg.cn/img_convert/3aa8f94d26bf08ae74c01f33c31e74af.png)
>答：A，首先我们要明确一点，new Number和new Boolean都不是字面量了，而是一个对象，所以他们不等价于假值，'' 和 ' '这两个也不一样，一个是空串可以表示假值，但是另一个是空格，不代表假值，所以本题选A。![](https://img-blog.csdnimg.cn/img_convert/4b70977ca0d800b86f79ed062bd27545.png)

## 36. 输出是什么？
```js
console.log(typeof typeof 1)
```
![](https://img-blog.csdnimg.cn/img_convert/827d9593b19cdd7426309613ce3685d4.png)
>答：B，这题有点坑，是因为typeof 1返回的是字符串 "number",这也就是为什么再次typeof返回的是string了。

## 37. 输出是什么？
```js
const numbers = [1, 2, 3]
numbers[10] = 11
console.log(numbers)
```
![](https://img-blog.csdnimg.cn/img_convert/5f031f06ee244ed581f20845d21f4c52.png)
>答：C，当给超过数组长度的位置设置值的时候，其实中间都是undefined，打印出来就像下面这样。![](https://img-blog.csdnimg.cn/img_convert/cc825869d50be7b230a4f33af2758dff.png)

## 38. 输出是什么？
```js
(() => {
  let x, y
  try {
    throw new Error()
  } catch (x) {
    (x = 1), (y = 2)
    console.log(x)
  }
  console.log(x)
  console.log(y)
})()
```
![](https://img-blog.csdnimg.cn/img_convert/cead90fab41f3e01514a90e70acb45cf.png)
>答：A，这道题主要是想考察catch会形成一个块级作用域，catch中接收到的x和let 定义的x不是同一个，但是catch中操作的y是同一个，这也就是为什么返回的是1 undefined 2的原因了。

## 39. JavaScript中的一切都是什么？
![](https://img-blog.csdnimg.cn/img_convert/ddf03a3cc57920dc09c155264c4d742e.png)
>答：A，这道题我原本想选C来着，但是仔细想想单纯的字面量必须要归为一类。
## 40. 输出是什么？
```js
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur)
  },
  [1, 2]
)
```
![](https://img-blog.csdnimg.cn/img_convert/815bff5a602c255bd9cde8333c27c747.png)
>答：C，这题没有什么坑，关键就是看清一点，使用reduce之前给了初始值[1,2].

## 题目来源
https://github.com/lydiahallie/javascript-questions
## 欢迎大家批评指针，共同努力，共同进步！