---
title: Webpack中的source-map、oneOf、缓存的核心用法
date: 2021-12-04
author: Justin
top: false
cover: false
categories: Webpack
tags:
  - Webpack
---

## source-map是什么?
>source-map是一种提供构建后代码到源代码的映射技术，可以根据这个映射来追踪源代码的错误。

### 设置source-map的方法
>我们只需在webpack.config.js中添加一个配置项即可。

```js
devtool: "source-map"
```

### 选择类型
* 开发环境：eval-source-map
* 生产环境：source-map

## oneOf是什么？
>有时候，我们在webpack配置中写了很多的loader，这也就意味着，一个文件要被多个loader过滤一遍，这在有些情况下是很冗余的，因此，我们希望只匹配一个loader，这就是我们为什么需要oneOf的原因。

### oneOf如何使用？
```js
module: {
    rules: [
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
        oneOf: [
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
      }
    ]
  }
```

>需要注意的是：被oneOf包裹的所有loader中，不能存在两个配置处理同一种类型的文件，如果存在这样的两个loader，可以将其中一个提取出来，就像上面的那种处理方式一样。

## 缓存
>之所以需要缓存的原因在于，以babel为例，对一个项目进行编译，如果每次都是对整个项目进行重新编译比较浪费资源，因为我们可能只是对项目中进行了细微的改动，这就是为什么需要缓存的原因。

### babel-loader开启缓存
>只需给babel-loader的options中添加一个配置项即可。

```js
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
      ],
      cacheDirectory: true
    }
  }
```

### 文件资源缓存
#### hash配置
>每次进行webpack打包的时候，给文件生成不同的文件名，这样静态资源的引入路径名也会发生变化，所以一旦进行重新打包，即使是强缓存，也能够感知到最新的变化，因为文件名变啦。

* 修改js文件的哈希后缀

```js
output: {
    filename: 'js/built.[hash:10].js',
    path: resolve(__dirname, 'build')
  }
```

* 修改CSS文件的哈希后缀

```js
new MiniCssExtractPlugin({
  filename: 'css/built.[hash:10].css'
})
```

>注意：上面的这种方式存在一个缺点，就是一旦重新打包，会导致所有的缓存失效，即使只改动了一个文件。

#### contenthash(推荐使用)
>contenthash根据文件的内容生成hash值，不同文件hash值一定不一样。

* 处理JS文件

```js
output: {
    filename: 'js/built.[contenthash:10].js',
    path: resolve(__dirname, 'build')
  }
```

* 处理CSS文件

```js
new MiniCssExtractPlugin({
  filename: 'css/built.[contenthash:10].css'
})
```




