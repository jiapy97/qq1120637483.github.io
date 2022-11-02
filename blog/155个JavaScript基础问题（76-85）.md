---
title: 155个JavaScript基础问题（76-85）
date: 2021-06-10
categories: 155个JavaScript基础问题
tags: 
- 155个JavaScript基础问题
---
## 76. 输出是什么？
```js
const { name: myName } = { name: "Lydia" };

console.log(name);
```
![](https://img-blog.csdnimg.cn/img_convert/cf4d5ee3129aef999fef4528566ce1a7.png)
>答：D，题目中的解构方式相当于将字符串的值赋给了myName,而不是name,所以下文调用name，相当于调用一个没有声明的变量。

## 77. 下面的函数是纯函数吗？
```js
function sum(a, b) {
  return a + b;
}
```
![](https://img-blog.csdnimg.cn/img_convert/163c021cdd86b110a3445ae6bd15f7df.png)
>答：A，因为同样的输入是同样的输出，且不受输入值以外的其他信息影响。

## 78. 输出是什么？
```js
const add = () => {
  const cache = {};
  return num => {
    if (num in cache) {
      return `From cache! ${cache[num]}`;
    } else {
      const result = num + 10;
      cache[num] = result;
      return `Calculated! ${result}`;
    }
  };
};

const addFunction = add();
console.log(addFunction(10));
console.log(addFunction(10));
console.log(addFunction(5 * 2));
```
![](https://img-blog.csdnimg.cn/img_convert/f91f806a79c8249bc8a53bc48fbf4459.png)
>答：C，本题主要考查的是闭包的理解，函数首先检查cache中是否有传入的参数，有则返回无则+10然后存进去，然后返回。

## 79. 输出什么？
```js
const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"]

for (let item in myLifeSummedUp) {
  console.log(item)
}

for (let item of myLifeSummedUp) {
  console.log(item)
}
```
![](https://img-blog.csdnimg.cn/img_convert/4d1010f837e3618c123b8f518f36bb9e.png)
>答：A，本题意在考查我们对for-in和for-of的理解，我们只需要记住一点，for-in遍历的是键，但是for-of遍历的是值。

## 80. 输出是什么?
```js
const list = [1 + 2, 1 * 2, 1 / 2]
console.log(list)
```
![](https://img-blog.csdnimg.cn/img_convert/cdf4ae9aed953e297b91e7b4b4ecfd0f.png)
>答：C，本题考查JS的默认机制。

## 81. 输出什么？
```js
function sayHi(name) {
  return `Hi there, ${name}`
}

console.log(sayHi())
```
![](https://img-blog.csdnimg.cn/img_convert/1b474c22c68e9e3f26a84bb72d61b411.png)
>答：B，本题由于模板字符串中没有接收到name，所以返回的是undefined，所以最终答案是B。

## 82. 输出是什么？
```js
var status = "😎"

setTimeout(() => {
  const status = "😍"

  const data = {
    status: "🥑",
    getStatus() {
      return this.status
    }
  }

  console.log(data.getStatus())
  console.log(data.getStatus.call(this))
}, 0)
```
![](https://img-blog.csdnimg.cn/img_convert/607aa9c5acf3868210421d8dfe7ea76c.png)
>答：B，本题意在考查setTimeout函数在特定情况下的this指向问题，在上面这种情况下，this指向的是全局，全局下正好有个😎，所以本题选B。

## 83. 输出什么？
```js
const person = {
  name: "Lydia",
  age: 21
}

let city = person.city
city = "Amsterdam"

console.log(person)
```
![](https://img-blog.csdnimg.cn/img_convert/feb123f803a4c435b3fcbe93835c71de.png)
>答：A，仔细想想本题并未对person对象添加任何属性，所以选A。

## 84. 输出什么？
```js
function checkAge(age) {
  if (age < 18) {
    const message = "Sorry, you're too young."
  } else {
    const message = "Yay! You're old enough!"
  }

  return message
}

console.log(checkAge(21))
```
![](https://img-blog.csdnimg.cn/img_convert/852ca7485c598b1affbfcb84ac647c61.png)
>答：C，这题真的挺坑的，意在考查const、let引起的块级作用域，由于块级作用域的存在，我们无法在块级作用域之外访问到声明的变量，请记住这个题。

## 85. 下面的代码将打印出什么？
```js
fetch('https://www.website.com/api/user/1')
  .then(res => res.json())
  .then(res => console.log(res))
```
![](https://img-blog.csdnimg.cn/img_convert/c04edcbc9a6091438801ddb2e39488d7.png)
>答：C，这就是考查我们对Promise的理解程度了，必然是前一个then中回调方法返回的结果了。

## 题目来源
https://github.com/lydiahallie/javascript-questions