---
title: 一台电脑绑定两个Github账号
date: 2021-02-17
categories: Git
tags: 
- Git
---

## 1：首先我们的PC已经绑定过一个账号了，也就意味这我们右id_rsa了。
## 2：生成新的公钥并命名为id_rsa_2
```
ssh-keygen -t rsa -f ~/.ssh/id_rsa_2 -C "yourmail@xxx.com"
```
## 3：修改config配置
![](https://img-blog.csdnimg.cn/img_convert/4ffa3ddaaca09adcf1cf074fa30ceeb0.png)
## 4：将指定公钥输入github
id_rsa_2.pub  指的是公钥
## 5：设置全局用户名和密码
```
# 取消全局 用户名/邮箱 配置
git config –global –unset user.name
git config –global –unset user.email
# 单独设置每个repo 用户名/邮箱
git config user.email “xxxx@xx.com”
git config user.name “xxxx”
```
## 6：链接远程仓库
```
git remote add origin ***
```