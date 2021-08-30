---
title: React-62：组件间通信方式总结
date: 2021-05-01
categories: React
tags: 
- React
---
## 几种通信方式
1. props
（1）：children props
（2）：render props
2. 消息订阅与发布
3. 集中式管理
redux.dva等
4. conText
生产者消费者模式

## 建议的搭配方式
|组件关系| 使用工具 |
|--|--|
| 父子组件 | props |
| 兄弟组件 | 消息订阅-发布、集中式管理 |
| 祖孙组件 | 消息订阅-发布、集中式管理、conText（开发用的少，封装插件用的多） |
