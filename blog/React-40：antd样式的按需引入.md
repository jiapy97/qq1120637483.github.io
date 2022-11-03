---
title: React-40：antd样式的按需引入
date: 2021-04-23
categories: React
tags: 
- React
---
> 为什么要按需引入？
* 像下面这种将全部样式都引入，会造成内存消耗过大，因为我们引入了很多我们并不使用的样式
![](https://img-blog.csdnimg.cn/img_convert/bbbab9180a82160751642daa28e9663a.png)

## 第一步：安装工具包
```
npm install react-app-rewired customize-cra
```
## 第二步：将项目文件中的package.json中的文件进行下面的修改
![](https://img-blog.csdnimg.cn/img_convert/784e6dbc996c528e874c3ad521a55a02.png)

## 第三步：项目根目录创建一个 config-overrides.js 用于修改默认配置
```js
const { override, fixBabelImports } = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
);
```
## 第四步：安装babel-plugin-import
```
npm install babel-plugin-import
```
## 到这列，我们就可以将最开始的那个语句删掉了。
* 样式正常
![](https://img-blog.csdnimg.cn/img_convert/2eb3c94f810f22b1505e2563ec908138.png)

## 参考文献
https://3x.ant.design/docs/react/use-with-create-react-app-cn
