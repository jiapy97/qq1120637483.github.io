---
title: JS模块化（四）：ES6规范
date: 2021-03-31
categories: JS模块化
tags: 
- JS模块化
---
## 1：初始化package.json
```
npm init
```
## 2：安装babel-preset-es2015（在生产环境中）
```
npm install babel-preset-es2015 --save-dev
```
## 3：在package.json的同级目录增加.babelrc文件
* 并将下面的内容添加进去
```json
{
    "presets": ["es2015"]
}
```
>如果需要全局安装babel:
>npm install --global babel-cli
## 4：将ES6转化为ES5
```js
babel js/src -d js/build
```
## 5：使用browserify进行打包
* 注意：打包的是ES5文件
```
browserify js/build/main.js -o js/dist/bundle.js
```
## 6：引入bundle.js文件
![](https://img-blog.csdnimg.cn/img_convert/79a283f56a4badc7672efc35e28b404f.png)

# 这篇文章是对本文的补充：
[ES6—49：模块化](https://blog.csdn.net/sinat_41696687/article/details/114517025?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522161613176716780269827058%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=161613176716780269827058&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_v1~rank_blog_v1-1-114517025.pc_v1_rank_blog_v1&utm_term=%E6%A8%A1%E5%9D%97%E5%8C%96)