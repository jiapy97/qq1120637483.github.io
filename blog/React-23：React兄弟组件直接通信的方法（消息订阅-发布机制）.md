---
title: React-23：React兄弟组件直接通信的方法（消息订阅-发布机制）
date: 2021-04-18
categories: React
tags: 
- React
---
## 1：安装pubsub-js
```
npm install pubsub-js
```
## 2：引入pubsub库
```
import PubSub from 'pubsub-js';
```
## 3：发布消息
![](https://img-blog.csdnimg.cn/img_convert/108396af3d6e6ade6e2298aaf2488d55.png)

## 4：订阅消息
![](https://img-blog.csdnimg.cn/img_convert/b3976b55ae600816fbc8b87f95d84092.png)