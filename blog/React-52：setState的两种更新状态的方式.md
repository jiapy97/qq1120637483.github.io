---
title: React-52：setState的两种更新状态的方式
date: 2021-04-28
categories: React
tags: 
- React
---
## 方式1：对象式的setState
![](https://img-blog.csdnimg.cn/img_convert/0c675dd92ebfb849592901c9bd6408bc.png)
![](https://img-blog.csdnimg.cn/img_convert/1112846bc4d975ed408f742b34998636.png)

* 回调的方式
![](https://img-blog.csdnimg.cn/img_convert/784c9a7b3956c979dc4d0d92064143db.png)

## 方式2：函数式的setState
* 通过函数式的setState，该函数能够接收到两个参数，一个是state，另一个则是props
![](https://img-blog.csdnimg.cn/img_convert/c25f4fe03a1edc6ece7eac77630c6b39.png)
