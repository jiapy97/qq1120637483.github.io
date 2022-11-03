---
title: 155个JavaScript基础问题（41-45）
date: 2021-06-07
categories: 155个JavaScript基础问题
tags: 
- 155个JavaScript基础问题
---
## 41. 输出是什么?
```js
!!null
!!''
!!1
```
![](https://img-blog.csdnimg.cn/img_convert/ad7d109357cd905beef89d1deca1535e.png)
>答：B，本题属于考查让我们判断哪些属于真值，哪些属于假值。三个语句全都采用了两次非，所以我们直接可以看除去!的元素即可，null,''均属于假值，1则属于真值，所以本题选B。

## 42. setInterval方法的返回值是什么？
```js
setInterval(() => console.log('Hi'), 1000)
```
![](https://img-blog.csdnimg.cn/img_convert/215031ce92305e6ef466680d744963fe.png)
>答：A，本题考查我们对循环定时器的熟系程度，循环定时器之所以要返回一个id，是因为在很多时候，我们卸载组件后，同时需要将循环定时器关闭，如何关闭呢？所以开发人员为我们提供了一个循环定时器id，这个id就是循环定时器的返回结果。

## 43. 输出是什么？
```js
[...'Lydia']
```
![](https://img-blog.csdnimg.cn/img_convert/c03b3ecb095b57c9657157633b601b49.png)
>答：A，本题考查拓展运算符，首先字符串类型的值是属于可迭代的，所以拓展运算符会把字符串中的每个元素映射成一个字符，然后放到数组中，如下图所示。![](https://img-blog.csdnimg.cn/img_convert/5fa1055c387456b9322c8d6ddaa1e339.png)

## 44. 输出是什么？
```js
function* generator(i) {
  yield i;
  yield i * 2;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);
```
![](https://img-blog.csdnimg.cn/img_convert/d3d008cdbe2a125a68a222fb572fdb53.png)
>答：C，本题考查的是生成器函数，生成器函数是一种可以暂停的函数，通过next调用生成器函数，但是遇到yield则暂停，并返回生成的结果，然后下一个next，继续从暂停的位置继续运行。

## 45. 返回值是什么？
```js
const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "one");
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, "two");
});

Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
```
![image.png](https://img-blog.csdnimg.cn/img_convert/a407efead08e411f3778347cae3ad459.png)
>答：B，本题主要是考查Promise.race方法，针对这个方法，我们只需要记住一点，谁先执行完就是谁，所以本题选B，因为第二个Promise,100ms就执行完了。

## 题目来源
https://github.com/lydiahallie/javascript-questions