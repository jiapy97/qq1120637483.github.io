---
title: 155个JavaScript基础问题（66-75）
date: 2021-06-09
categories: 155个JavaScript基础问题
tags: 
- 155个JavaScript基础问题
---
## 66. 使用哪个构造函数可以成功继承Dog类?
```js
class Dog {
  constructor(name) {
    this.name = name;
  }
};

class Labrador extends Dog {
  // 1 
  constructor(name, size) {
    this.size = size;
  }
  // 2
  constructor(name, size) {
    super(name);
    this.size = size;
  }
  // 3
  constructor(size) {
    super(name);
    this.size = size;
  }
  // 4 
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }

};
```
![](https://img-blog.csdnimg.cn/img_convert/9d08ea1710984b8bb226dcc51ac8e1da.png)
>答：B，在子类调用super之前不能访问this，所以1,4会报错，在调用super的时候需要使用到子类的参数，所以2正确。

## 67. 输出是什么？
```js
// index.js
console.log('running index.js');
import { sum } from './sum.js';
console.log(sum(1, 2));

// sum.js
console.log('running sum.js');
export const sum = (a, b) => a + b;
```
![](https://img-blog.csdnimg.cn/img_convert/b8f81c1013c9d66f7f637878c0573b28.png)
>答：B，此题考查的是CommonJS中require和import的区别，import是在代码编译阶段执行的，所以会先于代码执行，但是require则不同，require是需要的时候才调用。

## 68. 输出是什么?
```js
console.log(Number(2) === Number(2))
console.log(Boolean(false) === Boolean(false))
console.log(Symbol('foo') === Symbol('foo'))
```
![](https://img-blog.csdnimg.cn/img_convert/10769cd96df90fbd9a761487ace138ea.png)
>答：B，本题意在考查我们对Symbol的认知，每个Symbol都是唯一的，给Symbol传参数，只是对Symbol的描述。

## 69. 输出是什么？
```js
const name = "Lydia Hallie"
console.log(name.padStart(13))
console.log(name.padStart(2))
```
![](https://img-blog.csdnimg.cn/img_convert/5163fe2e8b801911f03f5337ce2c47da.png)
>答：C，本题意在考查padStart的用法，这个API的作用是当参数大于字符串的长度时，多几个就在字符串的左侧添加几个空格，但是如果参数小于字符串的长度，则不添加。

## 70. 输出是什么？
```js
console.log("🥑" + "💻");
```
![](https://img-blog.csdnimg.cn/img_convert/3447b23df56d9717172d954ea5fae953.png)
>答：A，本题就是考查字符串拼接，不要被图画吓到。

## 71. 如何能打印出console.log后面的注释值。
```js
function* startGame() {
  const 答案 = yield "Do you love JavaScript?";
  if (答案 !== "Yes") {
    return "Oh wow... Guess we're gone here";
  }
  return "JavaScript loves you back ❤️";
}

const game = startGame();
console.log(/* 1 */); // Do you love JavaScript?
console.log(/* 2 */); // JavaScript loves you back ❤️
```
![](https://img-blog.csdnimg.cn/img_convert/063da016735e84ef0c03a334b38f5c4d.png)
>答：C，本题主要考察的是生成器函数的用法和yield关键字，所以本题选C，不理解的可以查查生成器函数的用法。

## 72. 输出是什么？
```js
console.log(String.raw`Hello\nworld`);
```
![](https://img-blog.csdnimg.cn/img_convert/876aff04df04b21fed99d12d86a87be0.png)
>答：C，本题意在考查模板标记函数和String.raw这个API的用法，我们其实只需要知道String.raw会将\n,\t等打印出来，所以选C。

## 73. 输出是什么？
```js
async function getData() {
  return await Promise.resolve("I made it!");
}

const data = getData();
console.log(data);
```
![](https://img-blog.csdnimg.cn/img_convert/fc53c0b3692da8295965ab124ecf9b9a.png)
>答：C，通过上述方法返回的是一个等待态的Promise。

## 74. 输出是什么？
```js
function addToList(item, list) {
  return list.push(item);
}

const result = addToList("apple", ["banana"]);
console.log(result);
```
![image.png](https://img-blog.csdnimg.cn/img_convert/aee8f1e264089363078514033e706b8d.png)
>答：B，此题意在考查push方法返回值是什么，我一直以为push方法返回的是undefined，其实是添加元素后数组的长度，所以本题选B。

## 75. 输出是什么？
```js
const box = { x: 10, y: 20 };

Object.freeze(box);

const shape = box;
shape.x = 100;
console.log(shape)
```
![image.png](https://img-blog.csdnimg.cn/img_convert/3d115ee358d129930832edb96a56f0e2.png)
>答：B，本题意在考查Object.freeze的用法，此方法见名思意，是将对象进行冻结，使得无法对冻结的对象添加、修改、删除属性操作，在非严格模式下选B，但是在严格模式下会出现TypeError。

## 题目来源
https://github.com/lydiahallie/javascript-questions