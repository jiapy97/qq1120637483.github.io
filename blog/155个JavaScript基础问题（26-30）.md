---
title: 155个JavaScript基础问题（26-30）
date: 2021-06-03
categories: 155个JavaScript基础问题
tags: 
- 155个JavaScript基础问题
---
## 26. JavaScript全局执行上下文做了两件事：全局对象和this关键字
![](https://img-blog.csdnimg.cn/img_convert/80e49c11587124548272f844944c3635.png)
>答：A，一行JavaScript代码运行的时候，是在执行上下文运行的，在JS代码执行前，执行上下文将会做三件事：1. this绑定。2. 创建词法环境。3. 创建变量环境。

## 27. 输出是什么？
```js
for (let i = 1; i < 5; i++) {
  if (i === 3) continue
  console.log(i)
}
```
![](https://img-blog.csdnimg.cn/img_convert/97a239f6d88a471b9f30cb35e76227bb.png)
>答：C，因为3被跳过了，continue这个关键词的作用是，跳过本次循环继续下次循环。

## 28. 输出是什么？
```js
String.prototype.giveLydiaPizza = () => {
  return 'Just give Lydia pizza already!'
}

const name = 'Lydia'

name.giveLydiaPizza()
```
![](https://img-blog.csdnimg.cn/img_convert/636375a0a5a11df576bed7a027444ee6.png)
>答：A，因为String也属于构造函数，所以通过给构造函数的原型对象添加方法，实例是能够访问到的。

## 29. 输出是什么？
```js
const a = {}
const b = { key: 'b' }
const c = { key: 'c' }

a[b] = 123
a[c] = 456

console.log(a[b])
```
![](https://img-blog.csdnimg.cn/img_convert/34c8459a7a63dccb4f44a3f055b6a956.png)
>答：B，这是因为一个对象作为键的时候，是将下面的形式存进去了。这也就是为什么答案选B。
![](https://img-blog.csdnimg.cn/img_convert/2f926862e0edb9360a661ec6accc127e.png)

## 30. 输出是什么？
```js
const foo = () => console.log('First')
const bar = () => setTimeout(() => console.log('Second'))
const baz = () => console.log('Third')

bar()
foo()
baz()
```
![](https://img-blog.csdnimg.cn/img_convert/4911f95d8aceff3d5c82bfc46f67e06b.png)
>答：B，本题考查的其实是JS事件循环，首先会运行同步代码，其次是微任务和宏任务。

## 题目来源
[155个JavaScript基础问题](https://github.com/lydiahallie/javascript-questions)
## 感谢批评指针！共同学习！