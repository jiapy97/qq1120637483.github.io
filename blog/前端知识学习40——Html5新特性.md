---
title: 前端知识学习40——Html5新特性
date: 2020-10-05
categories: 前端
tags: 
- 前端
---

## 1：新增语义化标签
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20201005165759.png)

## 2：新增视频标签
### 注意事项
* 1：尽量使用mp4格式
* 2：假如给video标签设置宽高不起作用的话，可以给其设置一个父盒子，然后给父盒子指定宽高。

### 常见属性
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20201005165932.png)

* 谷歌浏览器的自动播放被禁了，要想自动播放必须加上muted属性，也就是说必须静音播放。
* poster属性是当用户在进行加载等待的时候显示的画面。
* controls是显示控件

## 3：新增音频标签（audio）
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20201005170237.png)

## 4：新增input属性
>下列的属性必须放在form表单中。

![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20201005170315.png)
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20201005170336.png)

## 5：新增表单属性
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20201005170352.png)

* 1：required属性表示，当用户输入为空的时候，提示用户必须输入内容。
* 2：placehold属性，表示当用户输入前表单里的提示内容。
* 3：autofocus属性，表示用户刷新界面后，光标直接定位到表单中。
* 4：autocomplete属性默认是打开的，也就是说记录用户提交的内容，当用户下次提交的时候，自动进行提示，当使用autocomplete= "off"的时候可以关闭。（此时的input标签必须有name）
* 5：multiple属性可以让用户一次提交多个文件。