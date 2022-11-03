---
title: 项目中引入Ant Design
date: 2021-05-14
categories: Ant Design
tags: 
- Ant Design
---
## 一、安装antd
```
npm install antd
```
## 二、实现antd的按需打包
* 为什么要实现按需打包？
    * 因为直接引入antd，会引入很多我们不需要的包，造成空间上的浪费。
1. 引入相关工具包
```
npm install react-app-rewired customize-cra babel-plugin-import
```
2. 在项目根目录下创建一个配置文件（config-overrides.js）
```js
const { override, fixBabelImports } = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    })
);
```
3. 修改package.json
```json
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  },
```
## 三、实现antd自定义主题
1. 下载工具包
```
npm install less less-loader
npm install less-loader@7.3.0 --save-dev
```
2. 修改config-overrides.js
```js
const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: { '@primary-color': 'aqua' },
        }
    }),
);
```
3. 下面的这句代码要注释掉
![](https://img-blog.csdnimg.cn/img_convert/82d61367f3e8b2b2137a4894a54d6308.png)