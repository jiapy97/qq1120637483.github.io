---
title: 忘记Centos7密码的解决方案
date: 2020-06-01
categories: linux
tags: 
- linux
---
今天，在学习修改用户名的密码的时候，使用小键盘写的密码，最后我发现原来没有打开小键盘锁，以后再进行linux系统的操作的时候，一定不能使用小键盘。
## 1：在下述界面按下e
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200601182419.png)

## 2:修改下面两处
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200601182509.png)

## 3：按下
```
 ctrl + x
```
## 4: 输入
```
 passwd root
```
## 5:连续两次输入密码
不要使用小键盘
## 6：一直回车
## 重启即可，不用管其他的什么Selinux