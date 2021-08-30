---
title: 解决React脚手架保存后浏览器不能及时刷新的问题
date: 2021-06-20
categories: debug
tags: 
- debug
---
## 问题描述
>当我使用React脚手架创建一个项目后，发现保存代码后，浏览器并不会自动刷新，需要我手动刷新后，才会显示出来。

## 问题解决方案
在package.json同级目录下新建一个文件名为.env,并添加下面的内容
```
FAST_REFRESH=false
```

## 停止项目，重新npm start
