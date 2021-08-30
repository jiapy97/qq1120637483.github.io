---
title: TypeScript的类型推论与联合类型--(TypeScript 03)
date: 2021-7-22
author: Justin
top: false
cover: false
categories: TypeScript
tags:
  - TypeScript
---
## 什么是TS中的类型推断？
>以下面的例子为例，有时候我们并没有进行类型注解，TS经过推断后给我们添加的类型注解。
![image.png](https://img-blog.csdnimg.cn/img_convert/b836150831c19865195d5dfbb48506de.png)

## 什么时候需要进行类型注解什么时候不需要呢？
* 比如下面的代码，TS能够推断的，我们可以不进行注解
```ts
let a = 3;
```

* 比如下面的代码，TS不能够对参数进行推断的情况下，我们需要进行注解
```ts
function test(a,b) {
    return a + b;
}
```

## 什么是联合类型？
>联合类型指的是一个变量可能具有多种类型，下面我们看一个简单的例子就明白了。
```ts
let a: string | number;

a = 2;
a = '123';
```
* 联合类型调用共有属性可以，但是如果是非共有属性则不行。
```ts
function test(a: number | string) {
    return a.split('');   //Error
}

function test(a: number | string) {
    return a.toString()    //Right
}

test(1)
```
