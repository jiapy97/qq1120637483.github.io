---
title: 前端知识学习07——CSS基础选择器
date: 2020-05-15
categories: 前端
tags: 
- 前端
---
>CSS选择器进行样式书写的时候，都是在head标签里的style标签里进行的。
## 1. 标签选择器
* 将标签名作为选择器，修改后所有的这种标签的样式都被修改了
![](https://gitee.com/justin2/pic/raw/master/20200515172037.png)
![](https://gitee.com/justin2/pic/raw/master/20200515172049.png)
## 2. 类选择器
* 在标签中添加class名字，然后在style标签里使用 （.名字）
* div盒子里只能使用backgroud-color，我第一次使用color的时候，是无反应的，所以以后在写的时候，如果遇到无效的情况，可以尝试将这两种进行切换
![](https://gitee.com/justin2/pic/raw/master/20200515172200.png)
>下面的是标签选择器
![](https://gitee.com/justin2/pic/raw/master/20200515172346.png)
### 2.1 多类名
* 使用多类名，可以使我们的标签受到多个类的影响，也可以将相同的样式集中到一个类中。
![](https://gitee.com/justin2/pic/raw/master/20200515172554.png)
## 3. id选择器
* id选择器和类选择器的区别在于，id选择器原则上在一个html页面中只允许出现1次，这样可以防止后端JS调用的时候，防止出错。
![](https://gitee.com/justin2/pic/raw/master/20200515172710.png)
## 4. 通配符选择器
* 通配符选择器会将所有标签进行选中
![](https://gitee.com/justin2/pic/raw/master/20200515172757.png)
## 5. 基础选择器总结
* 熟记下面四种基础选择器的特点
![](https://gitee.com/justin2/pic/raw/master/20200515172917.png)

