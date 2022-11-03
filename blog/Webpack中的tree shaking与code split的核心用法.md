---
title: Webpack中的tree shaking与code split的核心用法
date: 2021-12-05
author: Justin
top: false
cover: false
categories: Webpack
tags:
  - Webpack
---

## 什么是tree shaking?
>我们可以将我们的项目比作一棵树，树上每一个用到的第三方模块或者函数都可以比作一个绿色的树叶，但是我们的项目中可能存在很多没有被用到的模块或者函数，这些就是需要我们摇晃掉的树叶，这个过程我们叫做tree shaking。

## 如何开启tree shaking？
>开启tree shaking只需满足下面两个条件，即可自动开启。

1. 必须使用ES6模块化。
2. 开启production环境。

>如果想要把所有的代码都进行tree shaking还需要在package.json中进行如下的配置。

* package.json

```js
"sideEffects": ["*.css"]
```

## Webpack中设置多入口文件
1. 通过对象的形式个entry进行赋值

```js
  entry: {
    main: './src/js/index.js',
    test: './src/js/test.js'
  }
```

2. 给output指定输出的文件名以便于区分。

```js
  output: {
    filename: 'js/[name].[contenthash:10].js',
    path: resolve(__dirname, 'build')
  }
```

## 设置公用的模块只打包生成一次
>之所以设置将公用的模块之打包一次，是为了进行复用，举个栗子，A文件和B文件都引用了Jquery，不使用下面的配置进行打包的话，会将jquery这个模块打包两次，这显然不合理。但是，通过下面的配置允许只打包一次。（在多入口的情况下）

```js
optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
```

## 通过JS代码，让某个文件被单独打包成一个chunk
>这种使用方式适用于单入口文件的情况。只需在使用的地方，通过下面的使用方式即可。

```js
import(/* webpackChunkName: 'test' */'./test')
  .then(({ mul, count }) => {
    // eslint-disable-next-line
    console.log(mul(2, 5));
  })
  .catch(() => {
    // eslint-disable-next-line
    console.log('文件加载出错');
  })
```

>下面给出完整代码，以方便大家理解。

```js
function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}

import(/* webpackChunkName: 'test' */'./test')
  .then(({ mul, count }) => {
    // eslint-disable-next-line
    console.log(mul(2, 5));
  })
  .catch(() => {
    // eslint-disable-next-line
    console.log('文件加载出错');
  })


// eslint-disable-next-line
console.log(mul(2, 3));
// eslint-disable-next-line
console.log(sum(1, 2, 3, 4));
```



