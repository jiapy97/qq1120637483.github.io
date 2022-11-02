---
title: 系统梳理Webpack配置
date: 2021-12-26
author: Justin
top: false
cover: false
categories: Webpack
tags:
  - Webpack
---

## 一、entry
### 入口个数和输出个数的关系
1. 字符串形式

>当只有一个入口的时候，打包形成一个chunk，输出一个bundle。

```js
entry: './src/index.js',
```

2. 数组形式

>当以数组的形式引入文件的时候，也只是形成一个chunk,输出一个bundle。(这种方式可以在HMR功能中，让html的热更新生效)

```js
entry: ['./src/index.js','./src/add.js'],
```

3. 对象形式

> 多入口，有几个入口文件就行形成几个chuank，输出几个bundle文件。此时chunk的名称就是key。

```js
entry: {
    index: './src/index.js',
    add: './src/add.js'
  }
```

4. 特殊用法

>下面的这种写法会将index.js和count.js合并打包到index中，会将add单独进行打包。

```js
entry: {
    index: ['./src/index.js','./src/count.js'],
    add: './src/add.js'
}
```

## 二、output
1. publicPath的作用

>这个属性主要是配置所有资源引入公共路径的前缀。

```js
output: {
    filename: 'js/[name].js',
    path: resolve(__dirname, 'build'),
    publicPath: '/'
}
```

>加上上面的属性后，引入资源的路径就会变为下面的样子。

[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-DklLkh55-1640396718734)(https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0e0a869d0c514eef8332ba8333d95acc~tplv-k3u1fbpfcp-watermark.image?)]

2. filename

>指定打包后文件的目录和名称。

```js
filename: 'js/[name].js'
```

3. path

> 指定输出文件的路径。

```js
path: resolve(__dirname, 'build')
```

4. chunkFilename

>非入口chunk的名称，例如通过import导入的chunk。

```js
chunkFilename: 'js/[name]_chunk.js'
```

5. library

>这个属性主要定义了打包后的库向外暴露的变量名，同时通过livraryTarget还可以指定变量名添加到哪里。

```js
library: '[name]'
```

>加上上面这个配置项，打包的文件变为下面的样子。

![image.png](https://img-blog.csdnimg.cn/img_convert/29c239f1a99b993c0a3a9d366eab91d0.png)

>同时可以通过下面的配置，设置变量名添加到哪个环境中。

```js
libraryTarget: 'window',
libraryTarget: 'global',
libraryTarget: 'commonjs'
```

## 三、module
1. use

>多个loader使用use，单个loader用loader。

```js
use: ['style-loader','css-loader']
```

2. exclude

>让loader排除指定的文件。

```js
exclude: /node_modules/
```

3. test

>让loader匹配什么类型的文件。

```js
test: /\.js$/
```

4. include

>指定检查什么类型的文件。

```js
include: resolve(__dirname,'src')
```

5. enforce

>优先执行。

```js
enforce: 'pre'
```

6. options

>给某个loader进行配置特殊属性。

```js
options: {}
```

7. oneOf

>设置只有一个loader会生效。

```js
oneOf: []
```

## 四、resolve
1. alias

>这个属性主要是帮助我们配置解析模块路径别名，有时候引入路径过于复杂，可以通过这个进行简写。

```js
  resolve: {
    alias: {
      $css: resolve(__dirname,'src/css')
    }
  }
```

>配置完上面的属性后，引入文件可以通过下面的形式进引入。

```js
import '$css/index.css';
```

2. extensions

>这个属性可以帮助我们在引入文件的时候，省略后缀，但是系统在查找文件的时候，是按照数组中出现的先后顺序来执行的。

```js
resolve: {
    alias: {
      $css: resolve(__dirname,'src/css')
    },
    // 配置省略文件路径的后缀名
    extensions: ['.js','.json','.css']
  }
```

3. modules

>告诉webpack解析模块去找哪个目录，这样能够减少webpack的查找次数，提高打包的性能。

```js
resolve: {
    alias: {
      $css: resolve(__dirname,'src/css')
    },
    // 配置省略文件路径的后缀名
    extensions: ['.js','.json','.css'],
    modules: [resolve(__dirname,'../node_modules'),'node_modules']
  }
```

## 五、dev-server
>需要注意的是：dev-server只适用于开发环境中。关于dev-server的常见配置属性都在下面的代码中，具体的注释解释了属性的用途。

```js
devServer: {
    // 运行代码的目录
    contentBase: resolve(__dirname,'build'),
    // 监视contentBase目录下的所有文件，一旦文件变化就会reload
    watchContentBase: true,
    watchOptions: {
      // 忽略文件
      ignored: /node_modules/
    },
    // 启动gzip压缩
    compress: true,
    // 端口号
    port: 5000,
    // 域名
    host: 'localhost',
    // 自动打开浏览器
    open: true,
    // 开启HMR功能
    hot: true,
    // 不要显示启动服务器日志信息
    clientLogLevel: 'none',
    // 除了一些基本启动信息以外，其他内容都不要显示
    quiet: true,
    // 如果出错了，不要全屏提示
    overlay: false,
    // 服务器代理 --> 解决开发环境下的跨域问题
    proxy: {
      // 一旦devServer(5000)服务器接受到 /api/xxx 的请求，就会把请求转发到另外一个服务器（3000）
      '/api': {
        target: 'http://localhost:3000',
        // 发送请求时，请求路径重写： 将/api/xxx --> /xxx (去掉/api)
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
```

## 六、optimization
>optimization的主要配置信息可以参见下面的代码。

```js
optimization: {
    splitChunks: {
      chunks: 'all'
    },
    // 将当前模块的记录其他模块的hash单独打包为一个文件 runtime
    runtimeChunk: {
      name: entrypoint => `runtime-${entrypoint.name}`
    },
    minimizer: [
      new TerserWebpackPlugin({
        // 开启多进程打包
        parallel: true
      })
    ]
  }
```






    
