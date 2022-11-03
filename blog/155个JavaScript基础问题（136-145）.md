---
title: 155个JavaScript基础问题（136-145）
date: 2021-06-17
categories: 155个JavaScript基础问题
tags: 
- 155个JavaScript基础问题
---
## 136. 以下哪一项会对对象person有副作用？
```js
const person = { name: "Lydia Hallie" };

Object.seal(person);
```
![image.png](https://img-blog.csdnimg.cn/img_convert/b994d79601c7b67ecd4baa536a2ef904.png)
>答：A,首先我们要明白Object.seal的作用，是防止添加新属性或者对原有属性进行删除，B属于添加新属性，C属于删除原有属性，D属于将所有可枚举对象的属性的值从源对象分配到目标对象，并返回目标对象，所以属于添加，所以只有A项对person对象产生了副作用。

## 137. 以下哪一项会对对象person产生副作用？
```js
const person = {
	name: "Lydia Hallie",
	address: {
		street: "100 Main St"
	}
};

Object.freeze(person);
```
![image.png](https://img-blog.csdnimg.cn/img_convert/4c014a48fc9e94ea55455ec82fbfee21.png)
>答：C，本题考查我们对Object.freeze这个API的用法的了解程度，这个冻结属于浅冻结，所以对内部对象的属性是可以修改的，比如这个street属性。

## 138. 输出什么？
```js
const add = x => x + x;

function myFunc(num = 2, value = add(num)) {
	console.log(num, value);
}

myFunc();
myFunc(3);
```
![image.png](https://img-blog.csdnimg.cn/img_convert/586b8d71279c6ac5acc1ff558783215a.png)
>答：A，本题没什么坑，就是考查我们对默认传参的了解。

## 139. 输出什么？
```js
class Counter {
  #number = 10

  increment() {
    this.#number++
  }

  getNum() {
    return this.#number
  }
}

const counter = new Counter()
counter.increment()

console.log(counter.#number)
```
![image.png](https://img-blog.csdnimg.cn/img_convert/de12ae325140186a31c00d18895f95c4.png)
>答：D，本题考查的是ES2020的新特性，访问类的私有属性，不能通过实例直接调用，可以通过实例的方法获取到，所以选D。

## 140. 选择哪一个？
```js
const teams = [
	{ name: "Team 1", members: ["Paul", "Lisa"] },
	{ name: "Team 2", members: ["Laura", "Tim"] }
];

function* getMembers(members) {
	for (let i = 0; i < members.length; i++) {
		yield members[i];
	}
}

function* getTeams(teams) {
	for (let i = 0; i < teams.length; i++) {
		// ✨ SOMETHING IS MISSING HERE ✨
	}
}

const obj = getTeams(teams);
obj.next(); // { value: "Paul", done: false }
obj.next(); // { value: "Lisa", done: false }
```
![image.png](https://img-blog.csdnimg.cn/img_convert/68ed5757359e48bb2b32c9805a5f0448.png)
>答：B,本题主要是考查我们队yield和yield* 的认知，yield返回的是一个值，yield*则是将函数委托到另一个生成器函数或可迭代对象，显然本题适用于后者，所以选B。

## 141. 输出什么？
```js
const person = {
	name: "Lydia Hallie",
	hobbies: ["coding"]
};

function addHobby(hobby, hobbies = person.hobbies) {
	hobbies.push(hobby);
	return hobbies;
}

addHobby("running", []);
addHobby("dancing");
addHobby("baking", person.hobbies);

console.log(person.hobbies);
```
![image.png](https://img-blog.csdnimg.cn/img_convert/54e721b8c3483776491d5b8103788b77.png)
>答：C，本题还是考查默认传参和实际传参的区别，running加不到数组hobbies中是因为，传递了实参空数组，其余的都是传递了person对象的引用，则能够添加进去，所以选C。

## 142. 输出什么？
```js
class Bird {
	constructor() {
		console.log("I'm a bird. 🦢");
	}
}

class Flamingo extends Bird {
	constructor() {
		console.log("I'm pink. 🌸");
		super();
	}
}

const pet = new Flamingo();
```
![image.png](https://img-blog.csdnimg.cn/img_convert/c71e2dc04999ca4501045c469038ad3b.png)
>答：B，本题考查我们对继承的理解，首先会调用子类的构造函数，其次调用父类的构造函数，所以打印的是B。

## 143. 哪一个选项会导致报错？
```js
const emojis = ["🎄", "🎅🏼", "🎁", "⭐"];

/* 1 */ emojis.push("🦌");
/* 2 */ emojis.splice(0, 2);
/* 3 */ emojis = [...emojis, "🥂"];
/* 4 */ emojis.length = 0;
```
![image.png](https://img-blog.csdnimg.cn/img_convert/4c8ce095063c501779cf6bf689a911cf.png)
>答：D，长度属性是可以修改的，所以第4个并没有错，第三个错在对emojis的地址进行修改，这是不允许的，因为这是const关键字修饰的。

## 144. 我们需要向person对象添加什么，以致执行 [...person] 时获得形如 ["Lydia Hallie", 21] 的输出？
```js
const person = {
  name: "Lydia Hallie",
  age: 21
}

[...person] // ["Lydia Hallie", 21]
```
![image.png](https://img-blog.csdnimg.cn/img_convert/35edfbff0de3d02c3503037d5ab2bbe4.png)
>答：C，本题需要添加迭代器来定义迭代规则，对象默认并不是可迭代的，在添加规则的时候，生成器对象一定要yield* Object.values.

## 145. 输出什么？
```js
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach(num => {
	if (num) count += 1
})

console.log(count)
```
![image.png](https://img-blog.csdnimg.cn/img_convert/7643d622f57fc31725a39833533f8070.png)
>答：C，当num为0的时候，count并不加，所以总共加了三次，选C。

## 题目来源
https://github.com/lydiahallie/javascript-questions
