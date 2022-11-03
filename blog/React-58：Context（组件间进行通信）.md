---
title: React-58：Context（组件间进行通信）
date: 2021-04-29
categories: React
tags: 
- React
---
## context的主要使用场景
* 适用于下面的A组件和C组件或者A组件和D组件进行通信，至于A组件和B组件进行通信，可以使用props
![](https://img-blog.csdnimg.cn/img_convert/7970321d900ed24a880ae00bedd21f99.png)

## Context使用步骤（下面的这个只适用于类式组件）
1. 构造Context容器对象（这个对象要放在父子孙都能访问到的区域）
![](https://img-blog.csdnimg.cn/img_convert/2ab1c6b886806cb4e8cbc2ed66e78aa6.png)

2. 通过第一步创建的容器对象调用Provider属性进行包裹（下面的value关键字不能用其他关键字替代）
![](https://img-blog.csdnimg.cn/img_convert/f9c089ccecc21eae1d27a7a7c47dc154.png)

3. 需要接收的组件进行声明接收
![](https://img-blog.csdnimg.cn/img_convert/6a35b0716863ede712b21ffe52315d79.png)

## 函数式组件和类式组件通用写法
![](https://img-blog.csdnimg.cn/img_convert/c209e6ed7bef54fd4b2b8d22545d0e2f.png)

