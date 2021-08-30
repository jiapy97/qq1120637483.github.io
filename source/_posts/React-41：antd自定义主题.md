---
title: React-41：antd自定义主题
date: 2021-04-23
categories: React
tags: 
- React
---
## 1. 安装工具包
```
npm install less-loader@7.3.0 --save-dev
```
## 2. 修改 config-overrides.js文件
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
## 3. npm start即可