---
title: 如何排查是哪个插件影响了我们的CSS样式？
date: 2021-7-21
author: Justin
top: false
cover: false
categories: debug
tags:
  - debug
---
## 问题描述
>今天在学习Flex布局的时候，首先定义了一个div盒子，但是页面竟然出现了三个div盒子，我首先想到可能是浏览器插件对样式进行了修改，后来果然是这样。

## 排查方法
1. 首先打开浏览器的网络页面。
![image.png](https://img-blog.csdnimg.cn/img_convert/3bffc9ab5fd2d197df76bd04c913cb48.png)

2. 清空所有的请求。
![image.png](https://img-blog.csdnimg.cn/img_convert/78de53b524517c65c5b3ca446d457a46.png)

3. 刷新页面。
![image.png](https://img-blog.csdnimg.cn/img_convert/b71834bc2e87aefd74eb3687e15ccfa9.png)

4. 任意点击一个非本地的请求，从Request URL中判断是哪个插件的请求。
![image.png](https://img-blog.csdnimg.cn/img_convert/7bfdf42d171e300fbbd098a4fc29a665.png)

## 排查结果
>### 原来是SurfingKeys这个插件修改了我们的样式，我们只需将该插件设置为点击时使用，即可恢复原状。
