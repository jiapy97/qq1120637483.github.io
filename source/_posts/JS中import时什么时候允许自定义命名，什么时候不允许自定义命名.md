---
title: JS中import时什么时候允许自定义命名，什么时候不允许自定义命名
date: 2021-04-27
categories: JS模块化
tags: 
- JS模块化
---
## 分别暴露的时候，不能自定义命名，必须和暴露的名字一致
![](https://img-blog.csdnimg.cn/img_convert/7ea9ac30b595bd8e0dec62fd328ed091.png)
![](https://img-blog.csdnimg.cn/img_convert/a9be805e5368e99ac9d74264710ae9ce.png)

## 默认暴露的时候，由于只暴露了一个，所以允许自定义命名，且导入的时候不用加大括号
![](https://img-blog.csdnimg.cn/img_convert/457e307ce0b9dcb55372ea3abb131c69.png)
![](https://img-blog.csdnimg.cn/img_convert/b845967333a154179fd1ecafa23d0397.png)
