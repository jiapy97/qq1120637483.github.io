---
title: 155个JavaScript基础问题（126-135）
date: 2021-06-16
categories: 155个JavaScript基础问题
tags: 
- 155个JavaScript基础问题
---
## 126. 输出什么？
```js
function getFine(speed, amount) {
  const formattedSpeed = new Intl.NumberFormat({
    'en-US',
    { style: 'unit', unit: 'mile-per-hour' }
  }).format(speed)

  const formattedAmount = new Intl.NumberFormat({
    'en-US',
    { style: 'currency', currency: 'USD' }
  }).format(amount)

  return `The driver drove ${formattedSpeed} and has to pay ${formattedAmount}`
}

console.log(getFine(130, 300))
```
![](https://img-blog.csdnimg.cn/img_convert/a78864c35b11375c5462bb91f85fbc78.png)
>答：B，本题主要考察Intl.NumberFormat的用法，意在输出指定类型的字符串，所以选B。

## 127. 输出什么？
```js
const spookyItems = ["👻", "🎃", "🕸"];
({ item: spookyItems[3] } = { item: "💀" });

console.log(spookyItems);
```
![image.png](https://img-blog.csdnimg.cn/img_convert/0d17026ae437386739fed2efcbdb6059.png)
>答：B，本题在解构对象的时候，对数组进行了赋值，所以选B。

## 128. 输出什么？
```js
const name = "Lydia Hallie";
const age = 21;

console.log(Number.isNaN(name));
console.log(Number.isNaN(age));

console.log(isNaN(name));
console.log(isNaN(age));
```
![image.png](https://img-blog.csdnimg.cn/img_convert/4cc66ecf0dad5ae7607fc3a2fe6f54c8.png)
>答：C，本题主要是考查我们对Number.isNaN和isNaN这两种API的用法区别的认识，前者不仅要检查是否是非数字，还要检查是否等于NaN,后者则只用检查是否是非数字，所以最终的结果选C。

## 129. 输出什么？
```js
const randomValue = 21;

function getInfo() {
	console.log(typeof randomValue);
	const randomValue = "Lydia Hallie";
}

getInfo();
```
![image.png](https://img-blog.csdnimg.cn/img_convert/58051682d5b142ab55914d434ae92e83.png)
>答：D，这种问题属于考查临时性死区的问题，在const形成的块级作用域中，变量声明提升了，但是并未初始化，此时调用会产生一个临时性死区，一旦调用就会报错。

## 130. 输出什么？
```js
const myPromise = Promise.resolve("Woah some cool data");

(async () => {
	try {
		console.log(await myPromise);
	} catch {
		throw new Error(`Oops didn't work`);
	} finally {
		console.log("Oh finally!");
	}
})();
```
![image.png](https://img-blog.csdnimg.cn/img_convert/8b92ed74f3db23688b0bd4809cbbb2a4.png)
>答：C，本题并没有太多的坑，只要知道正常的async和await的用法，即可知道选C。

## 131. 输出什么？
```js
const emojis = ["🥑", ["✨", "✨", ["🍕", "🍕"]]];

console.log(emojis.flat(1));
```
![image.png](https://img-blog.csdnimg.cn/img_convert/78dba2226619707b042be84a4e7ef844.png)
>答：B，这里的flat(1)，我们可以理解为将数组降维处理，去掉数组里面的一维数组，测试案例看这个图：![image.png](https://img-blog.csdnimg.cn/img_convert/67ceec46e935951babba60cee9d91b56.png)，所以选B。

## 132. 输出什么？
```js
class Counter {
	constructor() {
		this.count = 0;
	}

	increment() {
		this.count++;
	}
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);
```
![image.png](https://img-blog.csdnimg.cn/img_convert/5bb4e8a3e7e116bfcd49a3e6c9787118.png)
>答：D，本题中counterTwo和counterOne指向的是同一片对象，所以对counterTwo的加就是对counterOne的加，所以最终的结果是3.

## 133.输出什么？
```js
const myPromise = Promise.resolve(Promise.resolve("Promise!"));

function funcOne() {
	myPromise.then(res => res).then(res => console.log(res));
	setTimeout(() => console.log("Timeout!"), 0);
	console.log("Last line!");
}

async function funcTwo() {
	const res = await myPromise;
	console.log(await res);
	setTimeout(() => console.log("Timeout!"), 0);
	console.log("Last line!");
}

funcOne();
funcTwo();
```
![image.png](https://img-blog.csdnimg.cn/img_convert/db69c3fbe4598095a9cf51ad25fdb84b.png)
>答：D，本题主要是考查事件循环机制，详情请看我的专栏，首先调用栈执行第一个函数中的同步代码，然后微任务Promise，然后开始执行第二个函数，因为await关键字的存在，函数会一直等到Promise的状态变为resolved才会继续执行同步代码，所以打印了Promise,然后执行同步代码Last line，当调用栈为空的时候，最后执行两个宏任务setTimeout，先1后2.

## 134. 如何在index.js中调用sum.js中的sum方法？
```js
// sum.js
export default function sum(x) {
	return x + x;
}

// index.js
import * as sum from "./sum";
```
![image.png](https://img-blog.csdnimg.cn/img_convert/829a28e06b32a34eae1450b23a5b06c7.png)
>答：C，本题主要是考查我们对通过import * 导入一个默认暴露函数的理解，只有通过C是可以的。

## 135. 输出什么？
```js
const handler = {
	set: () => console.log("Added a new property!"),
	get: () => console.log("Accessed a property!")
};

const person = new Proxy({}, handler);

person.name = "Lydia";
person.name;
```
![image.png](https://img-blog.csdnimg.cn/img_convert/c2945693de32ee1b67600d9a50814417.png)
>答：C，本题主要考查我们对Proxy对象的用法熟悉程度，通过该API，我们可以给对象添加自定义行为，当给对象设置值的时候，set方法会被调用，当调用对象的时候，get方法将会被调用。

## 题目来源
https://github.com/lydiahallie/javascript-questions