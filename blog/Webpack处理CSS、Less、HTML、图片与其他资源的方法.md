---
title: Webpack处理CSS、Less、HTML、图片与其他资源的方法
date: 2021-11-22
author: Justin
top: false
cover: false
categories: Webpack
tags:
  - Webpack
---
## 安装指定版本的webpack
```shell
npm i webpack@4.41.6 webpack-cli@3.3.11 -D
```

## 安装指定版本的loader
```shell
npm i css-loader@3.4.2 style-loader@1.1.3 -D
```

## 配置Webpack使得JS能够处理CSS样式
>下面是配置文件webpack.config.js

```js
// 引入用于拼接绝对路径的方法

const { resolve } = require('path');

module.exports = {
  // 入口起点
  entry: './src/index.js',
  // 输出
  output: {
    // 输出文件名
    filename: 'built.js',
    // 输出路径
    path: resolve(__dirname,'build')
  },
  module: {
    rules: [
      {
        // 匹配哪些文件
        test: /\.css$/,
        use: [
          // use数组中loader执行顺序是从下到上，依次执行
          // 创建style标签，将JS中的样式资源插入其中，添加到header标签中
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  // plugins的配置
  plugins: [

  ],
  mode: 'development'
}
```
>执行上述的配置命令只需在根目录输入webpack回车即可将打包后的文件输出到指定的路径。

## 配置Webpack能够处理less样式
>只需在webpack的配置文件中的rules下面添加下面的规则即可，需要安装下面的工具包。

```shell
npm i less-loader@5.0.0 less@3.11.1 -D
```

```js
{
    // 匹配哪些文件
    test: /\.less$/,
    use: [
      'style-loader',
      'css-loader',
      'less-loader'
    ]
}
```

## 配置Webpack能够处理HTML资源
>主要是引入插件HtmlWebpackPlugin，这个插件能够将打包后的所有资源自动引入到HTML文件中。

>主要配置如下：

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {resolve} = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname,'build')
  },
  module: {
    rules: [

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

## 打包图片资源
>下面我们首先看看主要的webpack配置文件的代码，然后我将带着大家逐一分析每一个loader的作用。

```js
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname,'build')
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['style-loader','css-loader','less-loader']
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          // 小于限制大小的图片资源将采用base64编码
          limit: 40 * 1024,
          esModule: false,
          name: '[hash:10].[ext]'
        }
      },
      {
        test: /\.html$/,
        // 负责处理HTML中的图片处理
        loader: 'html-loader'
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

* style-loader、css-loader、less-loader

>将处理好的css样式、less样式插入到style标签中。

* url-loader

>将指定格式的图片进行打包，但是这个loader只能打包css或less文件中的图片，无法打包HTML中引入的图片，因此我们引入了下面的html-loader。

* html-loader

## 打包其他资源
>这里我们以字体图标为例，来演示如何进行打包，主要是打包后缀为ttf的文件，主要是使用file-loader来进行打包。

```js
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname,'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        // 打包其他资源，使用排除的方式
        exclude: /\.(css|js|html)$/,
        loader: 'file-loader',
        options: {
          // 定义哈希值的长度
          name: '[hash:10].[ext]'
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






