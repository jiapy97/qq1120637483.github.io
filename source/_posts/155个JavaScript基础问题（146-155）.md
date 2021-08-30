---
title: 155个JavaScript基础问题（146-155）
date: 2021-06-17
categories: 155个JavaScript基础问题
tags: 
- 155个JavaScript基础问题
---
## 146. 输出是什么？
```js
function getFruit(fruits) {
	console.log(fruits?.[1]?.[1])
}

getFruit([['🍊', '🍌'], ['🍍']])
getFruit()
getFruit([['🍍'], ['🍊', '🍌']])
```
![image.png](https://img-blog.csdnimg.cn/img_convert/45cbdf4b2768069a01de5d724a9a1035.png)
>答：D，本题主要考察的是可选链操作符，只要不存在返回的是undefined，所以选D。

## 147. 输出什么？
```js
class Calc {
	constructor() {
		this.count = 0 
	}

	increase() {
		this.count ++
	}
}

const calc = new Calc()
new Calc().increase()

console.log(calc.count)
```
![image.png](https://img-blog.csdnimg.cn/img_convert/ed8f284e9ef8c79b1bf8f5aee1cb907b.png)
>答：A，本题调用increase的对象和calc不是同一个对象，所以答案还是0.

## 148. 输出什么？
```js
const user = {
	email: "e@mail.com",
	password: "12345"
}

const updateUser = ({ email, password }) => {
	if (email) {
		Object.assign(user, { email })
	}

	if (password) {
		user.password = password
	}

	return user
}

const updatedUser = updateUser({ email: "new@email.com" })

console.log(updatedUser === user)
```
![image.png](https://img-blog.csdnimg.cn/img_convert/eaabf70242c72c33598c8bdcda227a4e.png)
>答：B，本题中并未对user这个对象的地址进行修改，只是对内部进行了修改，所以updatedUser和user地址相同。

## 149. 输出什么？
```js
const fruit = ['🍌', '🍊', '🍎']

fruit.slice(0, 1)
fruit.splice(0, 1)
fruit.unshift('🍇')

console.log(fruit)
```
![image.png](https://img-blog.csdnimg.cn/img_convert/7b81e4a787d0e0a1f434ac0f330fcd82.png)
>答：C，本题就是考查我们对常用API的熟系程度，splice会对原数组产生副作用，unshift则是在数组最前面添加元素，所以答案是C。

## 150. 输出什么？
```js
const animals = {};
let dog = { emoji: '🐶' }
let cat = { emoji: '🐈' }

animals[dog] = { ...dog, name: "Mara" }
animals[cat] = { ...cat, name: "Sara" }

console.log(animals[dog])
```
![image.png](https://img-blog.csdnimg.cn/img_convert/1b8e867a9a217e3d84c46223332540b7.png)
>答：B，用一个对象作为键，底层存储的是"object Object"，所以这样看来，dog和cat在animals的键是相同的，所以cat对应的值能够覆盖dog，所以选B。

## 151. 输出什么？
```js
const user = {
	email: "my@email.com",
	updateEmail: email => {
		this.email = email
	}
}

user.updateEmail("new@email.com")
console.log(user.email)
```
![image.png](https://img-blog.csdnimg.cn/img_convert/3ba62c845bb237e1d623cab66fcb0999.png)
>答：A，本题考查的是箭头函数this指向的问题，此时this指向的是全局对象，由于全局没有email这个属性，所以会报错：![image.png](https://img-blog.csdnimg.cn/img_convert/ee00d2ea63b1c9e1919ae8eecca98fa9.png)

## 152. 输出什么？
```js
const promise1 = Promise.resolve('First')
const promise2 = Promise.resolve('Second')
const promise3 = Promise.reject('Third')
const promise4 = Promise.resolve('Fourth')

const runPromises = async () => {
	const res1 = await Promise.all([promise1, promise2])
	const res2  = await Promise.all([promise3, promise4])
	return [res1, res2]
}

runPromises()
	.then(res => console.log(res))
	.catch(err => console.log(err))
```
![image.png](https://img-blog.csdnimg.cn/img_convert/ab58dc7754516db432e2d3c28a0d33f7.png)
>答：D,本题主要考察我们对Promise.all的了解，只要接收到了一个reject,直接将异步结果返回给捕捉错误的回调函数，所以直接打印Third.

## 153. 哪个作为method的值可以打印{ name: "Lydia", age: 22 }?
```js
const keys = ["name", "age"]
const values = ["Lydia", 22]

const method = /* ?? */
Object[method](keys.map((_, i) => {
	return [keys[i], values[i]]
})) // { name: "Lydia", age: 22 }
```
![image.png](https://img-blog.csdnimg.cn/img_convert/93278d891b8fe8619dc7eb67684ae7fd.png)
>答：C,本题主要是考查我们是否知道如何将二维数组转换为对象，可以通过C这个API，![image.png](https://img-blog.csdnimg.cn/img_convert/cddda98157f11fa2fc491918ae1aad16.png)

## 154. 输出什么？
```js
const createMember = ({ email, address = {}}) => {
	const validEmail = /.+\@.+\..+/.test(email)
	if (!validEmail) throw new Error("Valid email pls")

	return {
		email,
		address: address ? address : null
	}
}

const member = createMember({ email: "my@email.com" })
console.log(member)
```
![image.png](https://img-blog.csdnimg.cn/img_convert/274e092f5f617bf02863cfd0c0959bf9.png)
>答：C，本题需要知道一点，那就是空对象属于真值，所以在返回对象的时候，address并不是返回null,而是返回的{}.

## 155. 输出什么？
```js
let randomValue = { name: "Lydia" }
randomValue = 23

if (!typeof randomValue === "string") {
	console.log("It's not a string!")
} else {
	console.log("Yay it's a string!")
}
```
![image.png](https://img-blog.csdnimg.cn/img_convert/6cbab5d6a48e3ebea1a3044d02ac04f2.png)
>答：B，首先我们要知道本题的运算优先级，首先会计算typeof randomValue,这回返回一个"number"，这是一个字符串，对字符串取反，返回false，false并不等于"string"，所以最后输出的是else对应的语句，"Yay it's a string!"。

## 题目来源
https://github.com/lydiahallie/javascript-questions