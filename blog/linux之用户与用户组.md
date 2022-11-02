---
title: linux之用户与用户组
date: 2020-06-02
categories: linux
tags: 
- linux
---
## 用户的账户和id存放的位置
```
/etc/passwd
```
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200602210048.png)

## gedit命令
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200602210107.png)

## 添加用户
```
useradd + 用户名
```
## 新建用户并加入到特定用户组中
```
useradd -g root 用户名
```
* 将“用户名” 加入root用户组，同时home目录下也会添加这个用户的

## 切换用户
```
su - 用户名
```
## 添加用户组
```
groupadd 名字
```
## 判断一个用户所属的用户组
```
id + 用户名
```
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200602153354.png)