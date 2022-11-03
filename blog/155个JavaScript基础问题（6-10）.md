---
title: 155个JavaScript基础问题（6-10）
date: 2021-05-31
categories: 155个JavaScript基础问题
tags: 
- 155个JavaScript基础问题
---
## 6. 输出是什么？
```js
let c = { greeting: 'Hey!' }
let d

d = c
c.greeting = 'Hello'
console.log(d.greeting)
```
>答：输出是 'Hello'，因为在JS中对象是一种引用类型，d和c指向的是同一片内存区域，所以对c进行修改，d指向的内容也发生了改变。

## 7. 输出是什么？
```js
let a = 3
let b = new Number(3)
let c = 3

console.log(a == b)
console.log(a === b)
console.log(b === c)
```
>答：输出是 true、false、false。之所以是这样，当我们是用\==符号时，系统会检测两边是否有相同的值，有时候还会对值进行转换的比较，但是如果我们使用===符号时，不仅要求两边要有相同的值，还要求有相同的类型，new Number出来的是一种对象，其身上不仅仅有值，还有一堆额外的功能。

## 8. 输出是什么？
```js
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor
    return this.newColor
  }

  constructor({ newColor = 'green' } = {}) {
    this.newColor = newColor
  }
}

const freddie = new Chameleon({ newColor: 'purple' })
freddie.colorChange('orange')
```
>答：输出是TypeError，之所以是错误，原因在于Chameleon是一个类，colorChange是类中的静态方法，类中的静态方法只能被构造器使用，不能被实例进行调用。

## 9. 输出是什么？
```js
let greeting
greetign = {} // Typo!
console.log(greetign)
```
>答：输出的是{},表面上看greetign存在拼写错误，应该报错才对，但是这是在全局作用域下的，实际上是进行了赋值的，所以打印出的是{}.

## 10. 当我们这么做会发生什么？
```js
function bark() {
  console.log('Woof!')
}

bark.animal = 'dog'
```
>答：正常运行！之所以会这样，是因为JS中的函数也是一类特殊的对象，所以也可以通过点的形式添加属性。



