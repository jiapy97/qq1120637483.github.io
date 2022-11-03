---
title: HP笔记本播放视频前几秒没音
date: 2020-06-03
categories: debug
tags: 
- debug
---
## 问题描述
惠普笔记本有时候会出现这样的问题：即有时候打开视频的时候，前几秒的声音是听不到的，后来发现是下面的情况。

## 原因
声音延迟2s的具体原因是Realtek的省电管理出现问题，为了节省电量Realtek在不工作时会自动关闭，导致每次启动Realtek时都需要重新加载，所以说会出现声音延迟1~2s的问题。

## 解决方案
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200603101127.png)