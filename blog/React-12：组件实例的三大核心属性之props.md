---
title: React-12：组件实例的三大核心属性之props
date: 2021-04-07
categories: React
tags: 
- React
---
## props有什么用？
* 通过props属性可以在渲染类组件的时候，给类传参。
![](https://img-blog.csdnimg.cn/img_convert/31a1dc58d27b76886e0c051fc4696eaa.png)

## 批量传递props
* 通过{...p}的形式
![](https://img-blog.csdnimg.cn/img_convert/042dd6ab99593c1f3643b4970a6174d1.png)

## 对props进行限制
* 对props的类型和必要性进行限制
* 使用这个限制之前需要引入prop-type.js这个文件
![](https://img-blog.csdnimg.cn/img_convert/c0eae039de722a2e728fd3978ffe7502.png)
* 对props的值给初始值
![](https://img-blog.csdnimg.cn/img_convert/c966171e84052689b841878682464636.png)

## props是只读的，不能修改
![](https://img-blog.csdnimg.cn/img_convert/9b78480bc4de1b41b5d64eae7fdffcae.png)

## props的简写方式
* 将props的一些属性，通过静态的方式添加到类身上
![](https://img-blog.csdnimg.cn/img_convert/3d83a01052be256506a5ad024ad3fcb9.png)

## 函数式组件使用props
![](https://img-blog.csdnimg.cn/img_convert/437360b1db848b8e7e28fb11265f3692.png)

