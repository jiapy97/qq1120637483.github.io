---
title: TypeScript介绍--(TypeScript 01)
date: 2021-7-20
author: Justin
top: false
cover: false
categories: TypeScript
tags:
  - TypeScript
---
## TypeScript的五个特点
1. TS是由微软开发的开源编程语言。
2. TS是JS的超集。（所谓的超集是指兼容了所有的特性）
3. TS是开发大型应用的基石。
4. TS提供了更加丰富的语法提示。
5. TS在编写阶段能够检查错误。

## 全局安装TS
```
npm install typescript -g
```

## 将TS文件编译为JS文件
```
tsc index.ts
```

## 为什么说TS是静态类型，JS是动态类型？
>在JS中给一个字符串变量赋值为number是可以的，但是在TS中则不行，这可以理解为为什么说TS是静态的，JS是动态的。可以理解为TS中类型是一旦确定下来无法更改，JS则不是。

![image.png](https://img-blog.csdnimg.cn/img_convert/7eae35ed35d7d9cefc59bab3c1cca360.png)

