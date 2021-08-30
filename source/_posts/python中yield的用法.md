---
title: python中yield的用法
date: 2020-07-28
categories: python
tags: 
- python
---
## yield执行步骤
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200728182906.png)

* 1：执行foo函数，打印starting...
* 2: foo函数返回的是一个迭代器，此时的g是可以迭代的，所以print(next(g))打印的是4
* 3：正常打印20个*
* 4：第二次执行next(g)的时候，从上次yield结束的位置继续，此时res变量获得的是None,因为4已经返回了。
* 5：因为foo函数里有while循环，所以会继续返回一个4
含有yield的函数直接实例化的时候，里面不会被执行的。使用next才开始执行。
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200728191529.png)

send函数相当于在暂停的那个位置给补充一个数。