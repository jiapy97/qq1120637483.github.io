---
title: Webpack中处理Eslint、处理JS兼容性、压缩JS与HTML
date: 2021-12-01
author: Justin
top: false
cover: false
categories: Webpack
tags:
  - Webpack
---

## 一、引入Eslint
1. 安装相关工具包

```js
npm install eslint eslint-loader eslint-config-airbnb-base eslint-plugin-import
```

2. loader配置的核心写法

```js
module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // 自动修复
          fix: true
        }
      }
    ]
  }
```

3. 在package.json中引入下面的配置

```js
  "eslintConfig": {
    "extends": "airbnb-base"
  }
```

4. 如果想要忽略某些语句，可以在语句的上方通过下面的注释来实现。

```js
// eslint-disable-next-line
```

## 二、JS兼容性处理
### 方式1：基本兼容处理（缺点：并不能完全兼容新特性）
1. 安装相关工具包

```js
npm install babel-loader @babel/preset-env @babel/core
```

2. 配置核心module

```js
module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  }
```

>上面提到的方法只能解决基础的兼容性问题，却不能解决类似于Promise等ES6语法的兼容性问题，如果想要实现全部的兼容可以通过下面的方法。

### 方式2：全部兼容处理（缺点：占用内存大）

1. 安装babel/polyfill

```shell
npm i @babel/polyfill@7.8.3
```

2. 无需进行配置，只需在需要进行兼容处理的js文件中进行引入即可。

```js
import '@babel/polyfill';
```

### 方式3：按需处理（推荐方式1+3）
1. 安装相关模块

```js
npm i core-js@3.6.4
```

2. 核心webpack配置文件（重点看module部分）

```js
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env',
              {
                // 按需加载
                useBuiltIns: 'usage',
                corejs: {
                  version: 3
                },
                // 指定兼容性做到哪个版本的浏览器
                targets: {
                  chrome: "60",
                  firefox: "60",
                  ie: "9",
                  safari: "10",
                  edge: "17"
                }
              }]
          ]
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development'
}
```

## 三、压缩JS
>只要我们开启了生产环境JS会自动帮我们压缩代码。

```js
mode: 'production'
```

## 四、压缩HTML
>如果想要压缩HTML的话，只需在HtmlWebpackPlugin插件中添加如下配置即可。

```js
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        // 移出空格
        collapseWhitespace: true,
        // 移除注释
        removeComments: true
      }
    })
  ]
```





