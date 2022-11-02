---
title: Webpack中生产环境的基本配置与HMR的使用
date: 2021-12-02
author: Justin
top: false
cover: false
categories: Webpack
tags:
  - Webpack
---

>在文章开始之前，首先想让大家知道一个知识点，那就是loader的加载顺序问题，是从下到上开始进行加载的。

## 定义nodejs的环境变量，决定使用browserslist的哪个环境

```js
process.env.NODE_ENV = 'production';
```

## 复用loader
>首先定义好需要复用的loader。

```js
const commonCssLoader = [
  MiniCssExtractPlugin.loader,
  'css-loader',
  {
    // 还需要再package.json中定义browserslist
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: () => [require('postcss-preset-env')()]
    }
  }
]
```

>在需要进行使用的地方，通过拓展运算符来进行使用。

```js
module: {
    rules: [
      {
        // 处理CSS
        test: /\.css$/,
        use: [...commonCssLoader]
      },
      {
        test: /\.less$/,
        use: [...commonCssLoader,'less-loader']
      }
    ]
  }
```

## 生产环境下基本文件的配置方式
>下面的配置包含了HTML、CSS、JS、图片、压缩、兼容性等的处理方式。

```js
const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 下面的这个插件是压缩CSS的插件
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

// 定义nodejs的环境变量，决定使用browserslist的哪个环境
process.env.NODE_ENV = 'production';

// 复用loader
const commonCssLoader = [
  MiniCssExtractPlugin.loader,
  'css-loader',
  {
    // 还需要再package.json中定义browserslist
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: () => [require('postcss-preset-env')()]
    }
  }
]

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        // 处理CSS
        test: /\.css$/,
        use: [...commonCssLoader]
      },
      {
        test: /\.less$/,
        use: [...commonCssLoader, 'less-loader']
      },
      {
        // 进行Eslint检查
        test: /\.js$/,
        // 排除其他文件
        exclude: /node_modules/,
        // 优先执行
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          // 设置自动修复
          fix: true
        }
      },
      {
        // 进行js兼容性的处理
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env',
              {
                useBuiltIns: 'usage',
                corejs: { version: 3 },
                targets: {
                  chrome: '60',
                  firefox: '50'
                }
              }
            ]
          ]
        }
      },
      {
        // 打包图片资源
        test: /\.(jpg|png|gif)/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]',
          outputPath: 'imgs',
          esModule: false
        }
      },
      {
        // 处理HTML中的图片资源
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        // 处理其他资源
        exclude: /\.(js|css|less|html|jpg|png|gif)/,
        loader: 'file-loader',
        options: {
          outputPath: 'media'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/built.css'
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  mode: "production"
}
```

## 使用HMR
### 什么是HMR？
>HMR可以理解为模块热替换，所谓的模块热替换指的是一个模块重新发生变化，只会重新打包这一个模块，而不是打包所有的模块，这可以极大的提升构建速度。

### 开启HMR
>只需在devServer中开启hot为true即可。

```js
devServer: {
    contentBase: resolve(__dirname,'build'),
    compress: true,
    port: 3000,
    open: true,
    // 开启HMR功能
    hot: true
  }
```

### 哪些文件支持HMR，哪些文件不支持HMR？
#### 支持HMR的文件
>样式文件（CSS文件）可以使用HMR功能，因为style-loader内部实现了。

#### 不支持HMR的文件
* HTML文件：HTML文件默认不能使用HMR功能，并且设置了HMR会使得HTML的热更新失效，如果要解决这个热更新的问题，需要修改entry入口。

```js
entry: ['./src/index.js','./src/index.html']
```

* JS文件：默认不能使用HMR功能的，如果想要使用HMR功能，需要添加支持HMR功能的代码。

>下面我们在入口文件中来检测print.js这个文件的变化，只有这个文件发生了变化的时候，才会热加载这个模块，并且只加载这个模块。

```js
if (module.hot) {
  module.hot.accept('./print.js',function() {
    // 一旦print.js这个文件发生了变化，会执行下面的函数
    print();
  })
}
```

>注意：上面的这段代码是添加到入口文件中的。


