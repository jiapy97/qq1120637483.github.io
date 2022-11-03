---
title: 使用腾讯云ServerLess部署Egg.js（项目问题排查记录）
date: 2022-02-02
author: Justin
top: false
cover: false
categories: ServerLess
tags:
  - ServerLess
---

## 问题描述
> 博主在使用serverless部署egg.js项目时，由于该项目已经多次部署过，所以直接使用了serverless deploy命令，在然后通过云函数的控制台中自动进行了安装依赖，发现出现了405错误，这在平时从未发生过，然后我开始了耗时一下午的Bug排查，下面介绍下Bug排查的过程。

## 1. 检查代码是否写错
> 博主首先对更新的代码进行了检查，由于更新代码只是一个后端返回的API内容上的修改，所以几乎不可能是更新代码的问题，因此这个原因被排除了。

## 2. 查看最新文档
> 下面是官方给出的最新文档：

* [快速部署 Egg 框架](https://cloud.tencent.com/document/product/1154/40492)

> 通过查询官方文档，我们能够发现官方文档发生了下面的变化。

![image.png](https://img-blog.csdnimg.cn/img_convert/118dc519cac4904651131feb74e50de9.png)

> 也就是说，需要给项目添加一个`scf_bootstrap`启动文件到项目的根目录，通过查看这个文件的代码，我们可以发现其实我们不需要修改什么，只需要复制就行。于是我在项目中添加了这个文件，重新部署后发现还是报405的错误，这又是为什么呢？

## 3. 给文件添加权限
> 通过仔细查看文档和咨询相关的售后人员，他们说需要给启动文件添加权限。

![image.png](https://img-blog.csdnimg.cn/img_convert/c0f050035c7c52d686eb825670b024b8.png)

> 我们可以发现chmod其实是一个linux命令，那么我们该如何在windows下执行呢?答案是通过git命令行工具去执行即可。

## 4. 确保部署文件和对应的serverless应用一致
> 在serverless项目中有一个非常重要的文件就是serverless.yml配置文件，这个配置文件需要和我们的应用中的相关信息保持一致。

## 5. 通过云函数的命令行安装依赖
> 云函数的自动安装依赖有时候会无效，因此通过命令行安装依赖很重要。

```shell
cd src
npm i
```

## 总结
> 要想确保云函数的部署成功， 最关键的是要保证serverless.yml文件和启动文件授权。

