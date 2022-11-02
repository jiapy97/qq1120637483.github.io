---
title: React使用TS模板脚手架报错：声明了“ React”，但从未读取其值
date: 2021-10-8
author: Justin
top: false
cover: false
categories: debug
tags:
  - debug
---

## 报错提示
>声明了“ React”，但从未读取其值。

## 错误原因
>因为是使用的基于TS的react模板脚手架，因此在安装依赖的时候，必须安装带有@types/xxx的文件。

## 解决办法
```shell
npm install -D @types/react
```

