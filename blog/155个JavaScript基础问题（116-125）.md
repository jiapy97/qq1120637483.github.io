---
title: 155个JavaScript基础问题（116-125）
date: 2021-06-16
categories: 155个JavaScript基础问题
tags: 
- 155个JavaScript基础问题
---
## 116. 输出什么？
```js
const person = {
  name: "Lydia",
  age: 21
}

const changeAge = (x = { ...person }) => x.age += 1
const changeAgeAndName = (x = { ...person }) => {
  x.age += 1
  x.name = "Sarah"
}

changeAge(person)
changeAgeAndName()

console.log(person)
```
![image.png](https://img-blog.csdnimg.cn/img_convert/f50a70eaed601820b493908a40077b75.png)
>答：C，本题主要考查函数传参和默认参数的区别，传参如果传的是引用地址，则会对这个引用产生影响，但是如果是默认参数，则是创建了一个新对象，对原引用没有影响。

## 117. 下面哪个选项会返回6？
```js
function sumValues(x, y, z) {
	return x + y + z;
}
```
![image.png](https://img-blog.csdnimg.cn/img_convert/01a78b5b4e7f7aebd6e313c07c086ce4.png)
>答：C，本题考查我们对拓展运算符的熟悉程度，只有C选项是将数组变为了三个元素，其余选项均为一个数组，所以选C。

## 118. 输出什么？
```js
let num = 1;
const list = ["🥳", "🤠", "🥰", "🤪"];

console.log(list[(num += 1)]);
```
![image.png](https://img-blog.csdnimg.cn/img_convert/6b425ec14b1b12f710f0bbc854544614.png)
>答：B，本题我们需要看清的是，这不是num++,而是num+=1,所以其实打印的是list[2].

## 119. 输出什么？
```js
const person = {
	firstName: "Lydia",
	lastName: "Hallie",
	pet: {
		name: "Mara",
		breed: "Dutch Tulip Hound"
	},
	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
};

console.log(person.pet?.name);
console.log(person.pet?.family?.name);
console.log(person.getFullName?.());
console.log(member.getLastName?.());
```
![image.png](https://img-blog.csdnimg.cn/img_convert/05b6287f59381f470e0626657441d876.png)
>答：B，本题主要考查可选连操作符(?.)，这是一个新特性，作用是如果该操作符前面的属性对象存在，则打印该属性对应的内容，如果不存在则返回undefined，至于第四个打印member的这个选项，答案应是报错的。

## 120. 输出什么？
```js
const groceries = ["banana", "apple", "peanuts"];

if (groceries.indexOf("banana")) {
	console.log("We have to buy bananas!");
} else {
	console.log(`We don't have to buy bananas!`);
}
```
![image.png](https://img-blog.csdnimg.cn/img_convert/89d9a58b5ab5a7e83911c5fe7f3d270d.png)
>答：B，这是因为indexOf返回的下标是0，这是一个假值，所以触发了else.

## 121. 输出什么？
```js
const config = {
	languages: [],
	set language(lang) {
		return this.languages.push(lang);
	}
};

console.log(config.language);
```
![image.png](https://img-blog.csdnimg.cn/img_convert/596a3746ed07707caa5aed50b3110d38.png)
>答：D，本题考查我们对setter的认识，这个方法存在的意义是修改对象的属性，如果调用的话返回的是undefined。

## 122. 输出什么？
```js
const name = "Lydia Hallie";

console.log(!typeof name === "object");
console.log(!typeof name === "string");
```
![image.png](https://img-blog.csdnimg.cn/img_convert/18a679277cfb496af1ad8e048bcdb0ff.png)
>答：C，本题非运算的优先级高于三个等号的优先级，所以先计算typeof name结果为字符串类型的string,取非之后，返回的是false,这个和后两个均不等，所以选C。

## 123. 输出什么？
```js
const add = x => y => z => {
	console.log(x, y, z);
	return x + y + z;
};

add(4)(5)(6);
```
![image.png](https://img-blog.csdnimg.cn/img_convert/bebc135293cac113cacb9302a0ad4386.png)
>答：A，这题主要考查箭头函数的作用域链，所以打印的是 4 5 6，选A。

## 124. 输出什么？
```js
async function* range(start, end) {
	for (let i = start; i <= end; i++) {
		yield Promise.resolve(i);
	}
}

(async () => {
	const gen = range(1, 3);
	for await (const item of gen) {
		console.log(item);
	}
})();
```
![image.png](https://img-blog.csdnimg.cn/img_convert/8982b04c52a92021c78032d584a25401.png)
>答：C，本题主要是考查生成器函数和for await of这种循环的用法，首先range这个生成器函数返回了3个Promise对象，通过for await of 这种循环可以将每个promise的值打印出来，所以选C。

## 125. 输出什么？
```js
const myFunc = ({ x, y, z }) => {
	console.log(x, y, z);
};

myFunc(1, 2, 3);
```
![image.png](https://img-blog.csdnimg.cn/img_convert/03ff3d6511abc786320d1244ab61bc08.png)
>答：D，本题主要考察对象的解构赋值，传入的应该是一个拥有x y z三个属性的对象，但是题目并未传入一个对象，所以打印的是3个undefined.

## 题目来源
https://github.com/lydiahallie/javascript-questions