---
title: 155个JavaScript基础问题（1-5）
date: 2021-05-28
categories: 155个JavaScript基础问题
tags: 
- 155个JavaScript基础问题
---
## 1. 输出是什么？
```js
function sayHi() {
  console.log(name)
  console.log(age)
  var name = 'Lydia'
  let age = 21
}

sayHi()
```
>答案是：undefined和报错
>因为var 定义的变量具有变量提升的效果，但是仅仅是变量声明的提升，并未进行赋值，所以是undefined，let定义的变量不具备变量提升的效果，所以是报错的。
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/506807e62e77477b9c40c3ac861547d2~tplv-k3u1fbpfcp-zoom-1.image)

## 2. 输出是什么？
```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1)
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1)
}

```
>答案是：333 和 012，因为JS的事件循环机制，setTimeout属于宏任务，要等到同步代码执行完之后才能执行，var在此处定义的是全局变量，因此同步代码执行完之后i已经变成了3，所以打印3个3，但是let定义的变量会形成一个块级作用域，因此是0 1 2

## 3. 输出是什么？
```js
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2
  },
  perimeter: () => 2 * Math.PI * this.radius
}

shape.diameter()
shape.perimeter()

```
>答：输出是20和NaN，因为diameter中的this指的是shape中的radius，但是perimeter由于是箭头函数所以，它的this取决于调用的位置，不取决于定义的位置，由于调用的位置在全局window，此处并没有radius所以值是undefined，所以进行乘积之后是NaN。

## 4. 输出是什么？
```js
+true;
!"Lydia";
```
>解：+号会将true变为1，+号倾向于返回一个值，但是!倾向于返回一个布尔值，因为"Lydia"是真实存在的，所以取反之后是false。

## 5. 哪一个是正确的？
```js
const bird = {
  size: 'small'
}
const mouse = {
  name: 'Mickey',
  small: true
}
```
![](https://img-blog.csdnimg.cn/img_convert/193c0ec0e56c7ce02b00ca621e95c8eb.png)
>答案：A，因为mouse通过点的形式调用bird的前提是mouse有这个属性，但是它没有，所以是无效的，但是bird.size是真实存在的，通过[]调用里面存放的是small这个字符串，这个和C选项是一样的，同理说明D的说法是不对的，所以本题选A。
