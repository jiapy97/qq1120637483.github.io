---
title: React-27：NavLink的基本使用
date: 2021-04-19
categories: React
tags: 
- React
---
## 通过NavLink可以给Link添加类名，从而实现修改样式
![](https://img-blog.csdnimg.cn/img_convert/1d8998ddbf2b7d0a189e08cf7e913105.png)

## 封装NavLink
* 自定义组件MyNavLink
* 引入自定义组件
```
import MyNavLink from './components/MyNavLink';
```
* 向自定义组件传to属性，值为路由信息
![](https://img-blog.csdnimg.cn/img_convert/cda9b2f407fe0915185fab147dbe3288.png)

* 在自定义组件中，返回NavLink
![](https://img-blog.csdnimg.cn/img_convert/ac545fed84fac203fb53e46832f429dc.png)

* 使用拓展运算符解构对象是关键，因为上面的MyNavLink中间的值作为children属性传递给了封装的NavLink
