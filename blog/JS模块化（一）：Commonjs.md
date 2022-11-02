---
title: JS模块化（一）：Commonjs
date: 2021-03-30
categories: JS模块化
tags: 
- JS模块化
---
## 什么是模块化？
答：将一个复杂的程序依据一定的规则封装成几个块，并进行组合在一起，其内部数据是私有的，只是向外部暴露一些接口与外部其它模块进行通信。
## 为什么要模块化？
* 降低复杂度
* 部署方便
* 降低耦合
* 避免命名冲突
## Commonjs模块化规范
* 这个文件有两个是必须的，一是包名，二是版本号。
* 包名不能含有大写和中文。
* 自动生成package.json文件
```
npm init
```
* 安装uniq
```
npm install uniq
```
*  --save是什么含义？
这个的意思是说，添加到package.json中
## commonjs模块暴露的三种方式
### 1：module.exports = {}
![](https://img-blog.csdnimg.cn/img_convert/3a05af3c8b0c4256ac190284b924aa32.png)

### 2：module.exports = function()
* 这种写法是覆盖方式的，后面的会覆盖前面的，不建议
![](https://img-blog.csdnimg.cn/img_convert/624df4b69744c4dfa15a0d832e2359e8.png)

### 3：exports.属性
* 这种是通过给exports添加属性的形式，推荐使用
![](https://img-blog.csdnimg.cn/img_convert/f3aaa617b6c753ea7e61425bbbbc1db8.png)

### 4：通过npm安装
* 以uniq这个包为例，这个包可以筛选出数组中独一无二的元素。
1. npm install uniq
2. 导入 const uniq = require('uniq');
3. 使用 const result = uniq(arr);
![](https://img-blog.csdnimg.cn/img_convert/52545a9c8e2699ae7eb8b8e624a6a6c8.png)

## commonjs基于浏览器端应用
* 首先全局安装并且同时需要局部安装browserify
```
npm install browserify -g
npm install browserify --save-dev
```
* 浏览器端是无法准确识别require方法的
![](https://img-blog.csdnimg.cn/img_convert/00396192c76bbb0dc1f94b8adb5e16b3.png)
* 需要使用browserify进行打包处理
![](https://img-blog.csdnimg.cn/img_convert/181058462da4d06905a4a65c55d6d141.png)
* 浏览器运行的不是我们的源文件，而是打包好的文件
* 此时运行成功
![](https://img-blog.csdnimg.cn/img_convert/625e65724abf61baece1413a85fdc93b.png)
