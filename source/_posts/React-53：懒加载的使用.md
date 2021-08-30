---
title: React-53：懒加载的使用
date: 2021-04-28
categories: React
tags: 
- React
---
## 1.  从react中导入lazy和Suspense
![](https://img-blog.csdnimg.cn/img_convert/6bc236a1031f041224650fa6bd1f9766.png)

## 2.  使用lazy函数导入要使用懒加载的组件
![](https://img-blog.csdnimg.cn/img_convert/5eb4e223c19cd08ed8f24b28efd594da.png)

## 3. 使用Suspense + fallback的形式包裹路由组件
![](https://img-blog.csdnimg.cn/img_convert/faf4fb17388c898852a73e7b1c6716df.png)

* 注意fallback包裹的组件是当懒加载组件无法显示的时候，显示的组件，所以Loading组件不能够使用懒加载的方式。

>测试懒加载可以通过放慢浏览器的访问速度
![](https://img-blog.csdnimg.cn/img_convert/d17296c43231cac7710ef61244ea3d6e.png)