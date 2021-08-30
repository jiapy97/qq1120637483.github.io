---
title: React-19：初始化React脚手架
date: 2021-04-11
categories: React
tags: 
- React
---
## 安装流程
1. npm i -g create-react-app
2. create-react-app react_staging  （名字可以自己起）
3. npm start (开启项目)

## 使用React脚手架实现Hello组件
### public下的index.html
* 这个文件主要是一个id为root的容器，用来存放React渲染的组件。

![](https://img-blog.csdnimg.cn/img_convert/cb46e325c6a7b8d6020b2974c1443e39.png)

### 入口文件index.js
* 这个文件是一个入口文件，这个文件主要负责，引入React核心库，React-dom库，以及引入App.js文件
* App.js是所有组件的外壳。
* 在index.js文件下可以直接通过DOM操作public下的index.html文件，因为底层React已经帮我们实现。

![](https://img-blog.csdnimg.cn/img_convert/7b40936f56240f01ecf80b43eb368b48.png)

### 外壳文件App.js
![](https://img-blog.csdnimg.cn/img_convert/7baa7111e19c2c1f4438b15b447bde7c.png)