---
title: 通过craco给antd进行自定义主题配置
date: 2021-05-05
categories: Ant Design
tags: 
- Ant Design
---
## 1. 安装craco插件
```
npm install @craco/craco
```
## 2. 修改package.json
```
"scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject"
  },
```
## 3. 在项目根目录创建一个 craco.config.js 用于修改默认配置（按需引入）
```
const CracoLessPlugin = require('craco-less');


module.exports = {
    babel: {
        plugins: [
           [
               "import", 
               {
                   "libraryName": "antd",
                   "libraryDirectory": "es",
                    "style": true //设置为true即是less
                }
            ]
        ]
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1DA57A' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
```