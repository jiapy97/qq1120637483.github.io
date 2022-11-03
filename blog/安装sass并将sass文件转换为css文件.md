---
title: 安装sass并将sass文件转换为css文件
date: 2022-01-07
author: Justin
top: false
cover: false
categories: Sass
tags:
  - Sass
---

## 安装sass
* 全局安装sass

```shell
npm install -g sass
```

> 注意：sass的后缀名是scss。

## 将sass文件转换为css文件

* 将sass文件转换为css文件

```shell
sass --watch test.scss output.css
```

> 执行上面的语句会监听scss文件的变化，一旦文件发生变化并保存后将立即输出到css文件上。

* 监听目录的变化

```shell
sass --watch app/sass:public/stylesheets
```

> sass将会监听app/sass目录下所有文件的变动，并编译css到public/stylesheets目录。其中以冒号进行分割，前面是sass目录，后面是css目录。

## 在sass中定义并使用变量
* 定义变量

```js
$myFontSize: 18px;
```

* 使用变量

```js
font-size: $myFontSize;
```

