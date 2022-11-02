---
title: React-13：组件实例的三大核心属性之refs
date: 2021-04-08
categories: React
tags: 
- React
---
## refs有什么作用？
* 可以理解为充当JSX用法标签中的标识符，为了区分和定位JSX标签用的。
![](https://img-blog.csdnimg.cn/img_convert/9a9e87d18e7f646349202a0a6a1d6b9e.png)
![](https://img-blog.csdnimg.cn/img_convert/7943419efc083c0ec15ecb5a2c4ad25e.png)

## 回调形式的ref
* 注意：通过回调形式的ref，标识符是直接添加到类的实例对象上的，而不是refs
![](https://img-blog.csdnimg.cn/img_convert/7fdb4451db77254b877da751a9052045.png)

## ref中的回调函数执行的次数
* 如果ref中的回调函数是内联函数的形式的话，当更新状态时，这个函数会被执行两次，第一次传入null,第二次才回传入当前节点的信息。
![](https://img-blog.csdnimg.cn/img_convert/c0159cd4daac7a0ed163cccae0e7b67d.png)
![](https://img-blog.csdnimg.cn/img_convert/9b61005a2e7e7b1657ea5928e8be2ba3.png)

## JSX语法中如何进行注释？
* 通过{/*    */}的方法进行注释

## 类绑定中的ref回调只在初始化的时候执行一次
![](https://img-blog.csdnimg.cn/img_convert/6874a729dee0bfbe7adf94cca60c65e2.png)

## 使用React.createRef创建ref
* 使用这个API创建的ref容器中，只能存放一个标签，新标签会覆盖原有的。
* 基础用法
![](https://img-blog.csdnimg.cn/img_convert/1da7398a0637bdbbb8eafddd2e214cd1.png)


