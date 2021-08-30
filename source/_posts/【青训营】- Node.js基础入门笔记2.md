---
title: 【青训营】- Node.js基础入门笔记2
date: 2021-8-24
author: Justin
top: false
cover: false
categories: 字节青训营
tags:
  - 字节青训营
---
## 模块化机制
### CommonJS规范
* 加载方式
1. 加载内置模块require('fs')
2. 加载相对或绝对路径的文件模块require('/User/...')
3. 加载npm包 require('lodash')

* npm包查找原则
1. 当前目录的node_modules文件夹
2. 如果没有，沿着路径向上递归，直到根目录下的node_modules
3. 找到之后会加载package.json 中main属性指向的文件，如果没有package.json则依次查找index.js、index.json、index.node

* require.cache
>require.cache中缓存着加载过的模块，缓存的原因：同步加载。
1. 文件模块查找比较耗时，如果每次require都需要重新遍历查找，性能会比较差。
2. 在实际开发中模块可能包含副作用代码。

### 其他模块化规范
* AMD是RequireJS在推广过程中规范化产出，异步加载，推崇依赖前置。
* CMD是SeaJS在推广过程中规范化产出，异步加载，推崇就近依赖。
* UMD规范，兼容AMD和CommonJS模式。
* ES Modules,语言层面的模块化规范，与环境无关，可借助babel编译。

## 包管理机制
>npm是Node.js中的包管理其，提供了安装、删除等其他命令来管理包。

* 常用命令
```shell
npm init
npm config
npm run
npm install 
npm uninstall
npm update
npm publish
```

## 异步编程
### Promise
>Promise是一个具有四个状态的有限状态机，其中三个核心状态为pending,fulfilled、rejected以及还有一个未开始的状态。

## Web应用开发
### HTTP模块
>搭建一个最简单的HTTP服务，可以通过Node.js内置的HTTP模块。

### KOA介绍
>Koa是基于Node.js平台的下一代Web开发框架，Koa它仅仅提供了一个轻量优雅的函数库，使得编写Web应用变得得心应手，不在内核方法中绑定任何中间件。下面介绍下执行过程。
* 服务启动
    * 实例化application
    * 注册中间件
    * 创建服务、监听端口
* 接受/处理请求
    * 获取req/res对象
    * 执行中间件
    * 输出设置到ctx.body上的内容
    


