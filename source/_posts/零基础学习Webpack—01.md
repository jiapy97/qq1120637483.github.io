---
title: 零基础学习Webpack—01
date: 2021-06-27
categories: Webpack
tags: 
- Webpack
---
## Webpack是什么？
>Webpack是一种前端资源构建工具，一个静态模块打包器，在Webpack看来，前端的所有资源文件都会作为模块处理。它将根据模块的依赖关系进行静态分析，打包生成对应的静态资源(bundle).

**举例**
![image.png](https://img-blog.csdnimg.cn/img_convert/838b2aa7a61abe2923b1029acdad036e.png)

## 引出构建工具
* 在上面的例子中，很多文件中的语法浏览器并不能识别，需要将这些文件中的语法转换为浏览器能够识别的语法。因此构建工具应运而生了，通过构建工具可以将各种语法转换的工具进行汇总，我们只需关注这个构建工具如何使用即可，而不用分别去学习如何将less转为css,如何将js中的语法转换为ES5等。本次要学习的Webpack就是构建工具的一种。

## 打包是什么意思？
1. 在Webpack工作的时候，我们首先要告诉Webpack一个打包的起点，即入口文件。
2. webpack将文件中的每一个依赖记录好，然后形成一个依赖关系树状图。
![image.png](https://img-blog.csdnimg.cn/img_convert/42c62d9b447166000783620d825a66e9.png)

3. 根据依赖关系树，依次将资源引入。
4. 资源引入后形成一个代码块（chunk）。
5. 对chunk中的代码进行分别处理，比如将less编译成css,将js语法编译为浏览器能够识别的js语法。

**上面介绍的五个步骤，统一概括起来就是打包！**

## 打包好之后开始进行输出
* 输出后叫bundle.

## Webpack的五个核心概念
### 1. Entry
* 入口Entry指示Webpack以哪个文件为入口起点开始打包，分析构建内部依赖图。

### 2. Output
* 输出（Output）指示Webpack打包后的资源bundles输出到哪里去，以及如何命名。

### 3. Loader
* Loader让Webpack能够去处理那些非JS文件，Webpack自身只理解JS。（Loader就像是翻译官）

### 4. Plugins
* 插件（Plugins）可以用于执行范围更广的任务，插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等。

### 5. Mode
* 模式（Mode）指示Webpack使用相应模式的配置

![image.png](https://img-blog.csdnimg.cn/img_convert/a9b3b99605621be81f768f4b4b64a72b.png)
