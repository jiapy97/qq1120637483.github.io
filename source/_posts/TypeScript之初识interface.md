---
title: TypeScript之初识interface
date: 2021-10-20
author: Justin
top: false
cover: false
categories: TypeScript
tags:
  - TypeScript
---

## interface的作用
1. 描述对象的形状
2. 对类的一部分行为进行抽象
>下面的文章主要围绕着上面的两部分进行讲解。

## 一、描述对象的形状
>注意：下面的interface之间的元素是通过分号进行分割的。interface 后面跟的名字大小写都可以。

```ts
interface person {
    name: string;
    music: string;
}
let person: person = {
    name: 'justin',
    music: 'test'
}
```
* 通过interface定义的对象，属性的个数不可多页不可少，如果非要少的话，可以采取下面的这种形式。**可选属性**
```ts
interface person {
    name: string;
    music?: string;
}
let person: person = {
    name: 'justin',
}
```
* 通过**interface**定义的对象，如果想出现**自由属性**，可以通过下面的这种方式。
```ts
interface person {
    name: string;
    music?: string;
    [propName: string]: any;
}
let person: person = {
    name: 'justin',
    sex: 'fox'
}
```
* 通过**readonly**定义**只读属性**
```ts
interface person {
    readonly id: number;
    name: string;
    music?: string;
    [propName: string]: any;
}
let person: person = {
    id: 123456,
    name: 'justin',
    sex: 'fox'
}

person.id = 666;  // 此处会报错
```



