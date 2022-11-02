---
title: Webpack面试题系统梳理（完美应对90%场景）
date: 2021-12-07
author: Justin
top: false
cover: false
categories: Webpack
tags:
  - Webpack
---

## 一、什么是Webpack？

>webpack是用于现代JavaScript应用程序的静态模块打包工具。webpack会分析我们的项目结构，找到JavaScript模块以及其他的一些浏览器不能直接运行的拓展语言（例如Sass、TypeScript等）,并将其打包为合适的格式供浏览器使用。

## 二、为什么需要Webpack?
>如今在开发前端项目时，为了简化开发的复杂程度，引入了模块化、TypeScript、less、sass等CSS预处理器实践方法，但是使用它们开发的文件需要进行额外的处理才能被浏览器识别，webpack的出现就是为了解决这个需求的。

## 三、Webpack的使用场景
1. 根据模板生成HTML，并自动处理css/js引用路径。
2. 自动处理img里面的图片路径，字体引用等。
3. 开启本地服务器，实现修改代码即热更新的功能。
4. 编译jsx、es6、sass、less等并添加sourcemap等辅助。
5. 异步加载内容，不需要时不加载到DOM。
6. 配合Vue.js、react.js等框架的开发。

## 四、Webpack的构建流程
1. 初始化参数：从配置文件和shell语句中读取与合并参数，得出最终的参数。
2. 开始编译：用上一步得到的参数初始化Compiler对象，加载所有配置的插件，执行对象的run方法开始执行编译。
3. 确定入口：根据配置中的entry找到所有的入口文件。
4. 编译模块：从入口文件出发，调用所有配置的Loader对模块进行翻译，再找出改模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。
5. 完成模块编译：在经过第四步使用Loader翻译完所有模块后，得到了每个模块翻译后的最终内容以及它们之间的依赖关系。
6. 输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的Chunk,再把每个chunk转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会。
7. 输出完成：在确定好输出内容之后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统中。

## 五、Loader和Plugins的区别
1. 用法不同

>loader是一个转换器，将A文件编译成B文件，比如将A.less转换为A.css，单纯的文件转换过程。webpack将一切文件视为模块，但是webpack原生只能解析JS文件，如果想将其他文件也打包的话，就会用到loader。plugin是一个扩展器，它丰富了webpack本身，会监听webpack打包过程中的某些节点，在合适的时机通过Webpack提供的API改变输出的结果。比如HtmlWebpackPlugin是用来生成一个HTML文件的。

2. 运行时机不同

>loader运行在打包文件之前，plugins则在整个编译周期都起作用。

## 六、常用的Loader与plugins
### 常用Loader及其作用
1. style-loader

>用于将css编译后的样式，挂载到页面的style标签上。

2. css-loader

>用于识别.css文件，处理css必须配合style-loader共同使用，只安装css-loader样式不会生效。

3. sass-loader

>css预处理器，sass的特点是编写css更加便捷。

4. postcss-loader

>用于补充css样式各种浏览器内核前缀，可以实现更好的兼容性。

5. babel-loader

>用于将ES6及以上的语法转换为ES5语法。

6. ts-loader

>用于配置项目TypeScript。

7. html-loader

>如果有时候需要引入一个html页面代码片段赋值给DOM元素内容使用，这时就用到html-loader。

8. file-loader

>用于处理文件类型资源，如jpg,png等图片。

9. url-loader

>url-loader也是处理图片类型资源，这个与file-loader的不同之处是，url-loader可以根据图片大小进行不同的操作，如果图片大小大于指定的大小则将图片进行打包，反之则将其转换为base64字符串合并到js文件中。

10. html-withimg-loader

>我们在编译图片时，都是使用file-loader和url-loader，这两个loader都是查找js文件中的相关图片资源的，但是HTML文件中的图片不会进行打包，因此，要想实现打包就要使用html-withimg-loader。

11. vue-loader

>用于编译.vue文件，如果我们自己搭建vue项目就可以使用vue-loader。

12. eslint-loader

>用于检查代码是否符合规范，是否存在语法错误。

### 常用Plugins及其作用
1. html-webpack-plugin

>可以根据模板自动生成html代码，并自动引用css和js文件。

2. extract-text-webpack-plugin

>将js文件中引用的样式单独抽离成css文件。

3. HotModuleReplacementPlugin

>热更新插件。

4. optimize-css-assets-webpack-plugin

>不同组件中重复的css可以快速去重，压缩CSS代码的。

5. compression-webpack-plugin

>生产环境下可以采用gzip压缩JS和CSS文件。

6. clean-webpack-plugin

>清理每次打包下没有使用的文件。

7. mini-css-extract-plugin

>是一个专门用于将打包的CSS内容提取到单独文件的插件。

## 七、Webpack生产环境和开发环境的区别
>开发环境和生产环境的需求不同。

>开发环境的需求

* 模块热更新
* sourceMap
* 接口代理
* 代码规范检查
* dev server

>生产环境的需求

* 提取公共代码
* 压缩混淆
* 文件压缩
* 去除无用的代码
* 改善加载时间

## 八、如何提高打包速度，减少打包体积？
### 第一步：对打包的速度和体积进行分析
1. 使用speed-measure-webpack-plugin来进行速度分析，分析整个打包的总耗时，查看每个loader和plugin的耗时情况。
2. 采用webpack-bundle-analyzer进行体积分析，主要分析依赖的第三方库的文件大小和业务代码里的组件大小。

### 第二步：提高Webpack打包速度
#### 一、 确定影响打包速度的因素
1. 开始打包时，首先需要搜索所有的依赖项，这需要占用一定的时间即搜索时间，所以我们要优化`搜索时间`。
2. webpack会根据我们配置的loader解析相应的文件，所以我们需要优化这个`解析时间`。
3. webpack会将所有依赖的模块打包到一个文件中，其中JS压缩时发布编译的最后阶段，JS压缩时需要先将代码转换为抽象语法树，然后处理这个抽象语法树最后还原成JS，这个过程涉及到大量计算，因此我们需要对这个`压缩时间`进行优化。
4. 当更改项目中的一个文件，需要重新进行打包，但是很多没有更改的文件也需要重新打包，因此我们需要对`二次打包的时间`进行优化。

#### 二、 优化解析时间
>运行在Node.js上的webpack是单线程模式的，因此在打包大量文件时，就会比较漫长。

1. 使用thread-loader并行解析资源，只需要把这个loader放置在其他loader之前，就会开启多进程处理。
2. 在webpack的构建过程中，大多数时间消耗在loader的解析转换上，可以利用happyPack使用多进程对文件进行打包，对多核CPU利用率更高，HappyPack可以让Webpack同一时间处理多个任务，将任务分解给多个子进程去并发的执行，子进程处理完后，再把结果发送给主进程。

#### 三、 合理利用缓存
1. 在性能开销较大的loader之前添加cache-loader，将会显著提升二次构建的速度。
2. 使用DLLPlugin将第三方模块单独打包生成一个文件，因为一般情况下，第三方模块的代码是不会轻易改变的。这样只有第一次打包的时候去分析这个文件里的代码，再次打包的时候回使用上次已经打包过的代码。

#### 四、 优化压缩时间
>webpack4默认内置使用terser-webpack-plugin来压缩优化代码，同时terser可以启动多进程并行运行来提高压缩的速度。

#### 五、 优化搜索时间
>我们在使用Loader的时候可以通过test、include、exclude三个配置项来优化Loader的文件搜索范围。比如说将node_modules给排除掉，因为node_modules中使用的代码都是经过编译过的。

### 第三步：减少Webpack的打包体积
#### 一、 按需加载
>在开发项目时，避免引入不需要的代码，尽可能的进行按需加载。

#### 二、Scope Hoisting
>Scope Hoisting会分析出模块之间的依赖关系，尽可能的把打包出来的模块合并到一个函数中。

#### 三、Tree Shaking
>利用Tree Shaking可以实现删除项目中共未被引用的代码。


## 九、 实现Loader和Plugin
### 实现Loader
>Loader的本质是一个函数，这个函数会接收一个参数，这个参数是待匹配文件的源码，函数会返回处理后的源码。

>下面我们写一个Loader，将var关键字替换为let

```js
module.exports = function (source) {
    return source.replace(/var/g,'let');
}
```

>调用这个Loader只需在webpack.config.js中使用下面的方法

```js
module: {
  rules: [
    {
      test: /\.js$/,
      use: [
        {
          loader: path.resolve('./src/myLoader.js')
        }
      ]
    }
  ]
}
```



### 实现Plugin 
>一个Webpack Plugin包含以下五个部分。

1. 一个JavaScript命名函数。
2. 在函数的prototype上有一个apply方法。
3. 有一个绑定到webpack自身的事件钩子。
4. 处理webpack内部实例的特定数据。
5. 功能完成后调用webpack提供的回调。

```js
function myPlugin(options) {}

myPlugin.prototype.apply = function (compiler) {
  compiler.plugin('emit',function(compilation,callback) {
    // 功能完成后调用webpack提供的回调
    console.log('Hello Webpack');
    callback();
  })
}

module.exports = myPlugin;
```

>如何调用我们手写的插件呢？

```js
const myPlugin = require('./src/myPlugin.js');

module.exports = {
  ...,
  plugins: [
    new Plugin()
  ]
}
```

## 十、 Webpack热更新的原理（HMR）
### 什么是HMR？
>HMR即（Hot Module Replacement模块热替换）是指当代码发生修改并保存后，webpack会对更新的部分代码进行重新打包，并将新的模块发送到浏览器端，浏览器将新的模块替换掉旧的模块，这样能够在不刷新浏览器的前提下对应用进行更新。

### Webpack热更新的工作流程
1. 第一步：webpack启动监听模式之后，webpack第一次编译项目，并将结果存储在内存文件系统中，内存webpack服务器通知浏览器加载资源，浏览器获取的静态资源除了JS代码之外，还有一部分是通过webpack-dev-server注入的HMR runtime代码，作为浏览器和webpack通信的客户端。
2. 第二步：文件系统中的一个文件或者模块发生了变化，webpack监听到文件变化对文件重新编译打包，每次编译生成唯一的hash值，根据变化的内容生成两个补丁文件，说明变化内容的manifest和chunk.js。
3. 第三步：HMR-server通过websocket将manifest推送给浏览器。
4. 第四步：浏览器端的HMR runtime根据manifest的hash和chunkid使用ajax拉取最新的模块chunk。
5. 第五步：触发render流程实现局部热重载。

## 十一、webpack、babel和babel-loader三者之间的关系
* babel是编译工具，把ES6及以上语法编译成ES5等低版本语法。
* webpack是打包工具，定义入口文件，将所有的模块引入整理后，通过loader和plugin处理后，打包输出。
* webpack通过babel-loader使用babel。


## 十二、webpack的Tree shaking的作用及原理
### 作用
>Tree Shaking是一种通过清除多余代码来优化项目打包体积的技术。

### 原理
>借助ES6模块语法的静态结构，通过编译阶段的静态分析，找到没有引入的模块并打上标记，然后在压缩阶段利用像uglify-js这样的压缩工具删除没有用到的代码。


## 参考链接
* [分享12个Webpack中常用的Loader](https://juejin.cn/post/6942322281913778206)





