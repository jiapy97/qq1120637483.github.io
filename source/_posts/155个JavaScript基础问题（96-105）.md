---
title: 155个JavaScript基础问题（96-105）
date: 2021-06-12
categories: 155个JavaScript基础问题
tags: 
- 155个JavaScript基础问题
---
## 96. 输出什么？
```js
class Person {
  constructor() {
    this.name = "Lydia"
  }
}

Person = class AnotherPerson {
  constructor() {
    this.name = "Sarah"
  }
}

const member = new Person()
console.log(member.name)
```
![image.png](https://img-blog.csdnimg.cn/img_convert/354480c476fe30bb33caa15b12e656f1.png)
>答：B，这题可以理解为Person中存放了新的地址，Person也指向了新的类，所以其实例也是新的类的实例对象，所以打印出的是B。

## 97. 输出什么？
```js
const info = {
  [Symbol('a')]: 'b'
}

console.log(info)
console.log(Object.keys(info))
```
![image.png](https://img-blog.csdnimg.cn/img_convert/3c237c160cfc8ba12134a15e9134f41e.png)
>答：D，本题意在考查我们对Symbol的理解，Symbol是不可枚举的，但是通过访问整个对象可以看到，所以答案选D。

## 98. 输出什么？
```js
const getList = ([x, ...y]) => [x, y]
const getUser = user => { name: user.name, age: user.age }

const list = [1, 2, 3, 4]
const user = { name: "Lydia", age: 21 }

console.log(getList(list))
console.log(getUser(user))
```
![image.png](https://img-blog.csdnimg.cn/img_convert/b88f5487c940b6df8760dbc343e05cfd.png)
>答：A，本题意在考查数组的解构赋值和箭头函数如何返回一个对象，我们要切记箭头函数在简写的情形下，要想返回一个对象，需要用小括号包着，否则会报错，但是题目中选的是undefined,其次数组的解构赋值中拓展运算符后面存放的是一个剩余数组，所以选A。

## 99. 输出什么？
```js
const name = "Lydia"

console.log(name())
```
![image.png](https://img-blog.csdnimg.cn/img_convert/73bf1a372da50af0546959eaa19c39a6.png)
>答：C，本题中JS会将name当作函数运行，所以会出现类型错误。

## 100. 输出什么？
```js
// 🎉✨ This is my 100th question! ✨🎉

const output = `${[] && 'Im'}possible!
You should${'' && `n't`} see a therapist after so much JavaScript lol`
```
![image.png](https://img-blog.csdnimg.cn/img_convert/be774b7942c37d9e81b36cedfca9ce6e.png)
>答：B，本题主要是需要我们直到空字符串属于假的值，但是空对象和空数组都属于真值，所以本题选B。

## 101. 输出什么？
```js
const one = (false || {} || null)
const two = (null || false || "")
const three = ([] || 0 || true)

console.log(one, two, three)
```
![image.png](https://img-blog.csdnimg.cn/img_convert/874aac5648513453c611a7e026081397.png)
>答：C，空对象属于真值，null属于假值，[]属于真值，所以本题选C。

## 102. 依次输出什么？
```js
const myPromise = () => Promise.resolve('I have resolved!')

function firstFunction() {
  myPromise().then(res => console.log(res))
  console.log('second')
}

async function secondFunction() {
  console.log(await myPromise())
  console.log('second')
}

firstFunction()
secondFunction()
```
![](https://img-blog.csdnimg.cn/img_convert/362160ebbd510b66c4bfb659e0ec483b.png)
>答：D，本题主要考查事件循环机制和.then和await的区别，在第一个函数中，同步代码是要优先于微任务的执行的，在第二个函数中，await会由暂停机制，等接收到成功的Promise对象后，才继续执行后续代码，所以有一种看起来是同步代码的感觉，所以本题选D。

## 103. 输出什么？
```js
const set = new Set()

set.add(1)
set.add("Lydia")
set.add({ name: "Lydia" })

for (let item of set) {
  console.log(item + 2)
}
```
![image.png](https://img-blog.csdnimg.cn/img_convert/62d92deda972e3eeb3e1c23fb142fe72.png)
>答：C，本题意在考查不同类型的值通过+号后的变化，数值型的则是直接相加，字符串的则是拼接，对象形式的，则是C项的第三个那样进行拼接。

## 104. 结果是什么？
```js
Promise.resolve(5)
```
![image.png](https://img-blog.csdnimg.cn/img_convert/47add6abc3a09ac442465b50aae22026.png)
>答：C，通过resolve后，返回的是fulfilled的Promise.

## 105. 输出什么？
```js
function compareMembers(person1, person2 = person) {
  if (person1 !== person2) {
    console.log("Not the same!")
  } else {
    console.log("They are the same!")
  }
}

const person = { name: "Lydia" }

compareMembers(person)
```
![image.png](https://img-blog.csdnimg.cn/img_convert/a16412cc2ca817d9d35aee34f41cfd72.png)
>答：B，本题函数中的两个参数实际上都是Person的引用，所以答案选B。

## 题目来源
https://github.com/lydiahallie/javascript-questions