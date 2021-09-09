---
title: 前端知识学习18——CSS的三大特性
date: 2020-05-27
categories: 前端
tags: 
- 前端
---
## 1.层叠性
* 样式冲突的情况下，后写的会把先写的覆盖掉

![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200527215930.png)

## 2.继承性
* 给父标签添加样式，子标签也会被修改

![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200527220024.png)

* 行高的继承：

>font-size和font-family必须同时有，否则不起作用。注意font-size和font可不一样，font最少要给它两个属性font-size给一个属性都可以了。

![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200527220210.png)

## 3.优先级
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200527220239.png)

* 优先级最高的：

![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200527220342.png)

* 理解：继承过来权重为0。

![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200527220415.png)

* 特例：
>给body标签下的a标签修改颜色，不起作用，因为a继承body标签后，权重为零，浏览器默认给添加了下划线和蓝色的样式。

![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200527220528.png)

* 复合选择器权重叠加的问题：

![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200527220604.png)

![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200527220622.png)
