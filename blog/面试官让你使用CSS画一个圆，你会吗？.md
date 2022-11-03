---
title: 面试官让你使用CSS画一个圆，你会吗？
date: 2021-10-7
author: Justin
top: false
cover: false
categories: 面试题
tags:
  - 面试题
---

>最近看到一道比较基础的前端面试题，和大家分享下。面试官问：请使用CSS绘制一个圆。

## 方法：使用border-radius
>我们只需要将border-radius设置为50%即可。

### HTML部分
```html
<div class="circle">
</div>
```

### CSS部分
```css
 .circle {
	width: 80px;
	height: 80px;
	background-color: pink;
	margin: 10px auto;
	border-radius: 50%;
 }
```

### 实现效果
![](https://img-blog.csdnimg.cn/img_convert/c67be70c08308c258dce8a347b2ab46e.png)
