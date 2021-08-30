---
title: 【青训营】- TypeScript入门笔记
date: 2021-8-25
author: Justin
top: false
cover: false
categories: 字节青训营
tags:
  - 字节青训营
---
## 1. TypeScript基础
### 1.1 开发环境
1. 安装VSCode
2. 安装Node.js
3. 创建项目
```
mkdir first-ts-project && cd first-ts-project
npm init -y
npm install --save-dev typescript
npm install --save-dev typescripr@next
```
4. 创建tsconfig.json
5. 选择TypeScript版本

### 1.2 预备知识
#### JS与TS的关系
>TypeScript是JavaScript的超集，TS提供了所有JS的特性，并在其上层增加了TypeScript的类型系统，这个类型系统被设计为可选的，这就意味着，所有合法的JS代码都是合法的TS代码。

#### TS的编译过程
>TS的类型检查和生成JS是两个独立的过程，类型检查出错不影响生成JS代码！

#### 类型系统
* 结构类型系统：通过类型的实际结构确定两个类型是否相等或兼容
* 名义类型系统：通过类型的名称确定两个类型是否相等

#### 类型注解
>TS放在后面。加单冒号。

#### 类型拓宽、收窄
* 类型拓宽：TS不用字面量类型作为该变量的类型，而是从字面量类型拓展到相应的更宽泛的类型，这个过程叫做类型拓宽。

* 类型收窄：在某些情况下，TS可以更加确定变量的类型，此时它会将变量类型收窄。

>TS试图在类型确定性和灵活性之前取得平衡，TS提供一系列方法来帮助收窄类型，以提高类型的确定性。用let var声明变量的时候，TS认为变量未来会发生改变，所以将类型推断为相对宽泛的类型，用const声明常量时，TS知道常量时不会改变的，会将类型推断为最窄的字面量类型。

#### 值空间与类型空间
* 如何判断符号是在哪个空间？
1. 转译后消失的符号->类型空间
2. 作为类型注解、别名的符号->类型空间
3. 类型断言后的符号->类型空间
4. const、let、var后面的符号->值空间
5. class、enum、namespace后的符号->值空间+类型空间


