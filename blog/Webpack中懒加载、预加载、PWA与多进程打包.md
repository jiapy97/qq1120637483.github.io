---
title: Webpack中懒加载、预加载、PWA与多进程打包
date: 2021-12-06
author: Justin
top: false
cover: false
categories: Webpack
tags:
  - Webpack
---

## 懒加载的实现方法
>通过动态import的方法来实现懒加载。（下面的函数，不点击按钮是不会加载test.js这个文件的）。

```js
console.log("index.js文件被加载了~");

document.getElementById('btn').onclick = function() {
  // 懒加载
  import(/* webpackChunkName: 'test' */'./test').then(({mul}) => {
    console.log(mul(4,5));
  });
}
```

## 预加载的开启方式
>只需在动态导入的时候，添加如下的参数即可。

```js
webpackPrefetch: true
```

>完整配置请看下面的代码。

```js
console.log("index.js文件被加载了~");

document.getElementById('btn').onclick = function() {
  // 懒加载
  import(/* webpackChunkName: 'test',webpackPrefetch: true */'./test').then(({mul}) => {
    console.log(mul(4,5));
  });
}
```

## 懒加载、预加载、正常加载的区别
* 懒加载：当文件需要用到的时候才会去加载，不用的时候不加载。
* 正常加载：正常的时候是并发去加载，但是一般受到6个个数的限制。
* 预加载：等其他资源加载完毕后，浏览器空闲了，再加载资源，但是不会运行这个文件。

## PWA的使用方法
### 什么是PWA？PWA有什么用？
>PWA可以让我们在离线的时候依然能够正常放问指定的资源。

### 如何实现PWA？
1. 安装插件

```shell
npm i workbox-webpack-plugin@5.0.0
```

2. 引入插件

```js
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
```

3. 在webpack.config.js中配置插件

>下面的配置会生成一个serviceworker配置文件。

```js
new WorkboxWebpackPlugin.GenerateSW({
  clientsClaim: true,
  skipWaiting: true
})
```

4. 在package.json中配置eslint允许其访问浏览器的全局变量

```js
  "eslintConfig": {
    "extends": "airbnb-base",
    "env": {
      "browser": true
    }
  }
```

5. 在入口文件处注册serviceWorker

```js
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(() => {
        console.log('sw注册成功~');
      })
      .catch(() => {
        console.log('注册出错！');
      });
  });
}
```

6. 通过服务器运行测试（sw代码必须运行在服务器上）

```js
serve -s build
```

> 上述的代码会将build文件当做静态文件对外允许访问。

## 多进程打包

### 为什么要有多进程打包？
>之所以要有多进程打包，是为了提高打包的速度。

### 如何开启多线程打包？
1. 安装插件

```shell
npm i thread-loader@2.1.3
```

2. 在需要开启的loader前面添加下面的代码

>重要的是下面的babel-loader。

```js
{
// 进行js兼容性的处理
test: /\.js$/,
exclude: /node_modules/,
use: [
  // 开启多进程打包
  'thread-loader',
  {
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
]
}
```

>指的注意的是：当资源比较小的时候，通过上面的代码甚至会更加耗时，这是正常现象，因为启动也需要一定的时间。

