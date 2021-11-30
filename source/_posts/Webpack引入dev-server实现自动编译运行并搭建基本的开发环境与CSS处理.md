---
title: Webpack引入dev-server实现自动编译运行并搭建基本的开发环境与CSS处理
date: 2021-11-30
author: Justin
top: false
cover: false
categories: Webpack
tags:
  - Webpack
---

## 配置dev-server
### 安装相关包
```shell
npm i webpack-dev-server@3.10.3
```

### 增加配置项

```js
  devServer: {
    contentBase: resolve(__dirname,'build'),
    compress: true,
    port: 3000,
    open: true
  }
```

>下面我们对配置项进行一一解读。

* contentBase：指定服务器的启动路径。
* compress：是否进行压缩。
* port：服务器的启动端口号。
* open: 是否默认打开浏览器。

>进行完上面的配置后，我们便可以实现在源文件中编写代码，自动编译打包了。

## 搭建开发环境
>下面的开发环境具有以下几个特点：

* 能够处理Less资源
* 能够处理CSS资源
* 能够处理图片资源
* 能够处理HTML中的img资源
* 能够处理字体等其他资源
* 能够将打包的文件加入到HTML中。
* 包含devServer

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
        // 处理less资源
        test: /\.less$/,
        use: ['style-loader','css-loader','less-loader']
      },
      {
        // 处理CSS资源
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        // 处理图片资源
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]',
          // 关闭es6模块
          esModule: false
        }
      },
      {
        // 处理html中的img资源
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        // 处理其他资源
        exclude: /\.(html|js|css|less|jpg|png|gif)/,
        loader: 'file-loader',
        options: {
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
  mode: 'development',
  devServer: {
    contentBase: resolve(__dirname,'build'),
    compress: true,
    port: 3000,
    open: true
  }
}
```

## 将文件打包输出到指定的路径
### built.js
>通过路径拼接的形式。

```js
output: {
    filename: 'js/built.js',
    path: resolve(__dirname,'build')
}
```

### 图片资源
>在options中添加outPath配置项

```js
{
    // 处理图片资源
    test: /\.(jpg|png|gif)$/,
    loader: 'url-loader',
    options: {
      limit: 8 * 1024,
      name: '[hash:10].[ext]',
      // 关闭es6模块
      esModule: false,
      outputPath: 'imgs'
    }
  }
```

## 提取多个CSS文件为单独文件
>之所以要提取CSS文件为单独文件，是因为webpack在打包的过程中默认将CSS代码写入到JS文件中了，所以我们希望的是CSS打包后变成单独的文件。

* 核心配置文件

```js
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/built.css'
    })
  ],
  mode: 'development'
}
```

## CSS兼容性处理
1. 安装指定插件

```shell
npm i postcss-loader@3.0.0 postcss-preset-env@6.7.0 -D
```

2. 在package.json中添加下面的配置

```js
"browserslist": {
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ],
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ]
  }
```

3. webpack配置文件

```js
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 设置nodejs环境变量
process.env.NODE_ENV = 'development';

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-preset-env')()
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/built.css'
    })
  ],
  mode: 'development'
}
```

## 压缩CSS
1. 安装指定版本的插件

```shell
npm i optimize-css-assets-webpack-plugin@5.0.3
```

2. 引入插件

```js
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
```

3. 调用插件

```js
plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/built.css'
    }),
    new OptimizeCssAssetsWebpackPlugin()
  ]
```





