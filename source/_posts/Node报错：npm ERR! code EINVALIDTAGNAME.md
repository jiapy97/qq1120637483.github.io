---
title: Node报错：npm ERR! code EINVALIDTAGNAME
date: 2021-8-11
author: Justin
top: false
cover: false
categories: Node
tags:
  - Node
---
## 报错警告
npm ERR! code EINVALIDTAGNAME

## 原因
>没有进行npm init便开始安装包。

## 注意事项
这里我们需要注意的是npm init和npm i并不相同，npm i 代表的是npm install表示安装，并不表示初始化，初始化需要我们npm init这个命令不能够简写。
