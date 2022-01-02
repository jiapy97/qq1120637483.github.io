---
title: 图解前端调试工具Chrome Dev Tools的使用
date: 2022-01-02
author: Justin
top: false
cover: false
categories: debug
tags:
  - debug
---

## 快捷指令速查表

| 标题 |  |
| --- | --- |
| 快速打开Dev Tools | `Ctrl + Shift + i` |
| 打开命令菜单 | `Ctrl + Shift + P` |
| 快速打开Dev Tools | `Ctrl + Shift + i` |
| 快速打开Dev Tools | `Ctrl + Shift + i` |
| 快速打开Dev Tools | `Ctrl + Shift + i` |
| 快速打开Dev Tools | `Ctrl + Shift + i` |
| 快速打开Dev Tools | `Ctrl + Shift + i` |
| 快速打开Dev Tools | `Ctrl + Shift + i` |
| 快速打开Dev Tools | `Ctrl + Shift + i` |

## 修改Dev Tools的主题
* 修改为dark主题

`dark theme`

![image.png](https://img-blog.csdnimg.cn/img_convert/7c84164c2678b5e2eaf50acad1c801bb.png)

* 修改为白色主题
`light theme`


![image.png](https://img-blog.csdnimg.cn/img_convert/322037a1343e3bc9cd9e2d4772dcc761.png)

## 截屏
`screenshot`

![image.png](https://img-blog.csdnimg.cn/img_convert/913cbf806ff51aac6e25bdd0b90e0962.png)

## 改变调试窗口的位置
1. `dock to right`
2. `dock to left`
3. `dock to bottom`

## 常用Tab介绍
### 1. Element
* 查看页面在移动端布局的样子，可以点击下面的按钮

![image.png](https://img-blog.csdnimg.cn/img_convert/675e3165db00d83de494be2d7b5abea1.png)

* 给目标元素添加样式
>首先选中元素，然后在下面添加样式

![image.png](https://img-blog.csdnimg.cn/img_convert/fe48b8354aae29cd4c039813782c1acc.png)

* 让hover永驻

>选中目标元素然后点击下面的内容

![image.png](https://img-blog.csdnimg.cn/img_convert/3d0fc9f11adf3350d244de19ce0551b8.png)

* 只修改列表项中的某一个

>选中目标元素点击cls

![image.png](https://img-blog.csdnimg.cn/img_convert/5179276c8a8c1bf152280be8eee820db.png)

* 复制样式并粘贴样式

>选中目标样式，然后点击copy styles


![image.png](https://img-blog.csdnimg.cn/img_convert/f3d8489d3876f8dca2884bee746143da.png)

>选中需要粘贴样式的位置，然后粘贴到下面的位置

![image.png](https://img-blog.csdnimg.cn/img_convert/f01b1ed2b172ea6d541f84a75db9ef6a.png)

#### Computed
>这个tab栏主要记载了当前页面都应用了哪些样式，通过点击可以跳转到这些样式。

* Show all与Group

![image.png](https://img-blog.csdnimg.cn/img_convert/7c277f267d9f1c4f6ebb022a0d0a7f73.png)

#### Layout
>在Layout标签下可以调试Grid布局和Flex布局。

![image.png](https://img-blog.csdnimg.cn/img_convert/c9c81721cd3008f047ed95d2a83c2d26.png)

>勾选flex元素可以给flex元素加上横线边框。

![image.png](https://img-blog.csdnimg.cn/img_convert/649286a8ee65c3f7fc07e9882d31bf95.png)

>可以通过styles面板中的点击图标来测试flex的其他属性。

![image.png](https://img-blog.csdnimg.cn/img_convert/c7bf269184aa06a8a87894fe80e1b1f1.png)

#### Event Listeners 
>该面板可以查看当前页面所有的监听事件。

![image.png](https://img-blog.csdnimg.cn/img_convert/930cb008cb3c362be9d7548390979c26.png)

