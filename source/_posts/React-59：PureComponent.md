---
title: React-59：PureComponent
date: 2021-04-30
categories: React
tags: 
- React
---
## React中的component存在两个问题
* 只要执行setState()，即使不改变状态数据，组件也会重新render()
* 当前组件重新render()，就会自动重新render子组件，如果子组件并没有用到父组件的任何东西，这样就会使得效率低。

## 造成上述问题的原因
* shouldComponentUpdate()总是返回true

## 效率高的做法
* 只有当组件的state或props数据发生改变时才重新render

>## 解决问题的方法

1. 通过手动判断shouldComponentUpdate来决定是否render
![](https://img-blog.csdnimg.cn/img_convert/c4df7016662d629ee16258d9a2491ef4.png)

2. 将从React中引入的Component改为PureComponent（父子组件都得改）
![](https://img-blog.csdnimg.cn/img_convert/59081042e068265011d8fee31d741c87.png)
