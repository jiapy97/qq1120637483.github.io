---
title: ERROR-Command `Install ‘code‘ command in PATH` exited with status code 1
date: 2021-04-05
categories: debug
tags: 
- debug
---
## 报错提示
ERROR: Command `Install 'code' command in PATH` exited with status code 1.

## 原因
* 在Windows系统中，我们想通过shell命令工具，添加code快捷指令，但是windows系统不存在这个指令。

## 解决办法
`在系统的环境变量中将VScode的bin目录加进去`
![](https://img-blog.csdnimg.cn/img_convert/151c37ca06a1614fade0b7a61b0ff376.png)
![](https://img-blog.csdnimg.cn/img_convert/a155bacfaee469d3a0e60c7f0996f99f.png)