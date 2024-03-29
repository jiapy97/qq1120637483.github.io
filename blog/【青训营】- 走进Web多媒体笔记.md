---
title: 【青训营】- 走进Web多媒体笔记
date: 2021-9-13
author: Justin
top: false
cover: false
categories: 字节青训营
  - 字节青训营
---
## 什么是web多媒体技术？
>下面摘录下w3school的官方定义：多媒体是我们可以看到和听到的一切：文本、书籍、图片、音乐、声音、CD、视频、DVD、档案、电影等。多媒体以多种方式存在，在因特网上会发现很多被嵌入网页中的元素。

* 点播
* 直播
* 图片
* 实时通信
* 云游戏
* 视频编辑

## 音视频基础知识
>假设8bit表示一个子像素，清晰度为1280*720，频率25fps,时长60s,未压缩视频大小=8bit*3*1280*720*25*60=3.9GB,经过H264压缩后视频大小为11MB。

## 编码格式发展
* 1999：MPEG-4
* 2003：H.264
* 2010：VP8
* 2013：H.265,VP9
* 2015：VP10
* 2018：AV1

## 浏览器提供的原生多媒体能力
>video和audio元素 方法

* play()：开始播放音频/视频
* paused()：暂停当前播放
* load()：重新加载当前元素
* canPlayType()：检测浏览器是否能播放指定的类型
* addTextTrack()：向目标文件添加新的文本轨道
* autoplay()：设置或返回是否在加载完成后随即播放音频
* controls()：设置或返回是否显示控件


>video和audio元素的缺陷

* 不支持直接播放hls、flv等视频格式
* 视频资源的请求和加载无法通过代码控制

>MediaSource

* 拓展浏览器视频播放能力，支持视频分段加载，替代flash播放器
* 支持播放mp4、hls、flv等。
* 可实现视频分段加载、清晰度无缝切换、自适应码率、精确预加载等。

## Web多媒体技术的发展和突破
* 加密音视频播放
* 自适应码率
* 弹幕：无碰撞、交互弹幕、防挡人像。
* 网页推流
* 网页解码
* 云游戏原理和特点：无需安装、对硬件要求第、低延迟、强兼容性要求。

## 总结与展望
>字节跳动Web多媒体技术发展:

* 自主研发视频播放器
* xgplayer开源
* flv
* hls
* webrtc
* 视频编辑
* web heif
* 加密视频
* h265与防劫持
* 交互视频
* 云游戏


