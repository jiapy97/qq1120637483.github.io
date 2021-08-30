---
title: 155个JavaScript基础问题（46-55）
date: 2021-06-07
categories: 155个JavaScript基础问题
tags: 
- 155个JavaScript基础问题
---
## 46. 输出是什么？
```js
let person = { name: "Lydia" };
const members = [person];
person = null;

console.log(members);
```
![](https://img-blog.csdnimg.cn/img_convert/b30d203ba99176abeb72a39af99cba99.png)
>答：D，很多朋友认为person改为了null，members中的person也应该变为null，其实person中存放的是对象的地址，members[0]中存放的也是这个对象的地址，person只是将地址置为了null,并不影响members[0]中存放的地址，所以本题选D。

## 47. 输出是什么？
```js
const person = {
  name: "Lydia",
  age: 21
};

for (const item in person) {
  console.log(item);
}
```
![](https://img-blog.csdnimg.cn/img_convert/6f235c428dde7e99060c918ea6d3bcdd.png)
>答：B，本题考查的是for in循环，该循环遍历的是对象的键，而对象的键在底层存放的都是字符串。

## 48. 输出是什么？
```js
console.log(3 + 4 + "5");
```
![](https://img-blog.csdnimg.cn/img_convert/dd3a1a06e0504f5ad501b1d6df118107.png)
>答：B,此题考查的是运算符

## 49. num的值是什么？
```js
const num = parseInt("7*6", 10);
```
![](https://img-blog.csdnimg.cn/img_convert/ddb97edd2c50d987ca7393df618fa052.png)
>答：C，本题想考查的是parseInt在进制转换的用法，本意是想将第一个参数转为十进制数字，但是解析到*便暂停了，所以是7.

## 50. 输出是什么？
```js
[1, 2, 3].map(num => {
  if (typeof num === "number") return;
  return num * 2;
});
```
![](https://img-blog.csdnimg.cn/img_convert/32fb5d6ae9fd340dfa13e32ed4cc297d.png)
>答：C，本题考查map的用法，但是每一个元素都返回的是undefined.

## 51. 输出是什么？
```js
function getInfo(member, year) {
  member.name = "Lydia";
  year = "1998";
}

const person = { name: "Sarah" };
const birthYear = "1997";

getInfo(person, birthYear);

console.log(person, birthYear);
```
![](https://img-blog.csdnimg.cn/img_convert/7079502590112411296af8f1f1e76c2e.png)
>答：A，本题考查函数传参过程中是值传递还是引用传递，传递一个对象是引用传递，引用传递会影响到引用本身，但是值传递则不会。

## 52. 输出是什么？
```js
function greeting() {
  throw "Hello world!";
}

function sayHi() {
  try {
    const data = greeting();
    console.log("It worked!", data);
  } catch (e) {
    console.log("Oh no an error:", e);
  }
}

sayHi();
```
![](https://img-blog.csdnimg.cn/img_convert/6059f0c81e12324f8e43c35b3fdd17a7.png)
>答：D，本题考查try catch的用法，当greeting函数返回一个错误时，便不再继续执行try中的其他语句了，并将错误字符串传给e,所以最后打印的是D。

## 53. 输出是什么？
```js
function Car() {
  this.make = "Lamborghini";
  return { make: "Maserati" };
}

const myCar = new Car();
console.log(myCar.make);
```
![](https://img-blog.csdnimg.cn/img_convert/7c4ab633a3d75090e8883ece7e8dcdf6.png)
>答：B，返回属性时，值不是构造函数设定的值，而是返回的值，所以选B![image.png](https://img-blog.csdnimg.cn/img_convert/7bac1fab5bed57681ad21465756e4eea.png)

## 54. 输出是什么？
```js
(() => {
  let x = (y = 10);
})();

console.log(typeof x);
console.log(typeof y);
```
![](https://img-blog.csdnimg.cn/img_convert/26062dea48bf6281e80a560835614f54.png)
>答：A，本题考查的是立即执行函数和函数的执行顺序问题，所以本题y是number类型的，x属于undefined类型的。

## 55. 输出是什么？
```js
class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.bark = function() {
  console.log(`Woof I am ${this.name}`);
};

const pet = new Dog("Mara");

pet.bark();

delete Dog.prototype.bark;

pet.bark();
```
![](https://img-blog.csdnimg.cn/img_convert/b6bbe4fff518a75dd254dbce49f52e59.png)
>答：A，本题考查原型链的问题，原型对象中的this也是指向实例对象的，所以ABC三个选项的第一部分都是对的，通过delete方法删除了原型对象上的bark方法，所以此时再次调用bark会报错，所以此时只有A是对的。

## 题目来源
https://github.com/lydiahallie/javascript-questions