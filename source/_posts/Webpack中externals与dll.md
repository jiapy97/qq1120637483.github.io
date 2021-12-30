---
title: Webpack中externals与dll
date: 2021-12-30
author: Justin
top: false
cover: false
categories: webpack
tags:
  - webpack
---

## externals

### 为什么需要externals?
>有时候我们不希望将某些包进行打包，而是通过CDN链接进行引入，此时我们就可以用到externals。

### 使用externals的步骤
1. 再webpack.config.js中添加配置项指定要忽略打包的内容

```js
  externals: {
    jquery: 'jQuery'
  }
```

2. 在静态文件中通过CDN引入

```js
<script src="https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>
```

## dll
### 什么是dll？为什么需要dll?
>dll可以帮助我们对某些库（第三方库：jquery、react、vue...）等库进行单独打包。通过插件引入后，可以有效避免对这些包的重复打包。当运行webpack时，默认查找webpack.config.js配置文件，需要运行下面的指令。

```shell
webpack --config webpack.dll.js
```

### 如何实现dll打包
1. 在webpack.config.js的同名文件创建一个webpack.dll.js文件，并在其中对jquery进行单独打包。

```js
const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    jquery: ['jquery']
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname,'dll'),
    library: '[name]_[hash]'
  },
  plugins: [
    // 打包生成一个manifest.json提供和jquery的映射
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: resolve(__dirname,'dll/manifest.json') // 输出文件路径
    })
  ],
  mode: 'production'
}
```

2. 生成dll文件夹和指定文件

```shell
webpack --config webpack.dll.js
```

3. 在webpack.config.js中增加配置项

>告诉webpack哪些库不参与打包，并使用插件将dll已经打包好的jquery文件进行引入，这样以后jquery都不需要参与打包了，因为已经打包好了，我们只需要引入即可。

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {resolve} = require('path');
const webpack = require('webpack');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')

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
    }),
    // 告诉webpack哪些库不参与打包，同时使用的名称根据manifest.json中的来
    new webpack.DllReferencePlugin({
      manifest: resolve(__dirname,'dll/manifest.json')
    }),
    // 将某个文件打包输出去，并在html中自动引入该资源
    new AddAssetHtmlWebpackPlugin({
      filepath: resolve(__dirname,'dll/jquery.js')
    })
  ],
  mode: 'development'
}
```

