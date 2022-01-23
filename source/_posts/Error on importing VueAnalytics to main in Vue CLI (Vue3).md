---
title: Error on importing VueAnalytics to main.ts in Vue CLI (Vue3)
date: 2022-01-23
author: Justin
top: false
cover: false
categories: debug
tags:
  - debug
---

## 问题描述
> 最近，在安装完vue-router之后，在写ts的时候，出现下面的错误,起初我以为是版本不兼容，在重装了多次版本后还是没有解决，最后通过直觉告诉我是删除node_modules然后使用cnpm进行安装，后来通过这个方法解决了。

```
Error on importing VueAnalytics to main.ts in Vue CLI (Vue3)
```

## 解决办法

1. 删除node_modules文件夹。

2. 使用cnpm进行安装。

```shell
cnpm i
```
