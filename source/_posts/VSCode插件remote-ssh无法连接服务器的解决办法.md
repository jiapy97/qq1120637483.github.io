---
title: VSCode插件remote-ssh无法连接服务器的解决办法
date: 2022-01-28
author: Justin
top: false
cover: false
categories: VSCode
tags:
  - VSCode
---

## 问题描述
> 最近在使用VSCode的插件来远程连接服务器的时候，发现怎么都无法连接服务器，最后看了很多文章，总算把这个问题解决了，下面介绍下问题原因。

## 问题原因
> 问题可能出在ssh配置文件上，第一次一旦输入错误后，导致.ssh文件下known_hosts出现错误的记录，我们只要将这个文件的最后一行删去即可。

![image.png](https://img-blog.csdnimg.cn/img_convert/33acfb3734a2fe3d9f89436017ec9fc9.png)

## 解决方法
1. 删除ssh种config文件的涉及到目标服务器的所有记录。
2. 刷新插件。
3. 删除known_hosts文件中涉及到目标服务器的记录。

## 重新登录
```shell
ssh root@xxx.xxx.xxx.xxx 22
```


