---
title: React-04：JSX语法规则
date: 2021-04-02
categories: React
tags: 
- React
---
## 定义虚拟DOM的时候不要加引号
![](https://img-blog.csdnimg.cn/img_convert/1ee16a8f9d26758c45cc1f2e8fc1df71.png)

## 读取来自变量的数据需要加上大括号
![](https://img-blog.csdnimg.cn/img_convert/ea78246d27cf0b3841857be68f102dd2.png)

## 虚拟DOM中的类名不是class而是className
![](https://img-blog.csdnimg.cn/img_convert/9e30612b0b457dbff83516851a41634f.png)

## 虚拟DOM的内联样式
'style写法应是'
![](https://img-blog.csdnimg.cn/img_convert/d69f0fae946e58b3e58249f5d008ea12.png)

## 内联样式的变量名要使用小驼峰命名
![](https://img-blog.csdnimg.cn/img_convert/4b7f344c31f8eaec270846c57e7387fe.png)

## 虚拟DOM中只能有一个根标签
![](https://img-blog.csdnimg.cn/img_convert/396fc8e9c147a106daa875986346c1a3.png)

## 标签必须闭合，单标签手动加/
![](https://img-blog.csdnimg.cn/img_convert/26c70ff385d084efe2fa037729df3296.png)

## 虚拟DOM中的标签首字母
* 若标签的首字母为小写字母，则将其转化为HTML标签对应的标签，没有则报错。
* 若标签的首字母为大写字母，React就去渲染对应的组件，若组件没有定义则报错。