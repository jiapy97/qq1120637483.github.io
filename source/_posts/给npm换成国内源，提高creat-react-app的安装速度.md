---
title: 给npm换成国内源，提高creat-react-app的安装速度
date: 2021-04-10
categories: npm
tags: 
- npm
---
## 通过命令行输入下面代码
```
npm config set registry https://registry.npm.taobao.org
-- 配置后可通过下面方式来验证是否成功
npm config get registry
```
## 参考文献
[create-react-app慢的解决方法](https://www.jianshu.com/p/cffd2d6aa72e)