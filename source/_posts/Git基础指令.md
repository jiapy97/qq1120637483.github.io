---
title: Git基础指令
date: 2020-05-02
categories: Git
tags: 
- Git
---
## 指令的含义
|创建分支|git branch name|切换到name分支
|---|---|---|
|切换分支|git checkout name|Head指向name
|提交分支|git commit|每一次提交都会包含当前指向的分支|
|合并分支1|git merge 名字|将merge后面的分支合并到当前所在的分支，也就是*指向的分支|
|合并分支2|git rebase 名字|合并到名字的后面|
|分离HEAD|git checkout 名字|这里的 名字 指的是HEAD指向的分支指向的位置|

* **git commit** ：只提交暂存区的文件，也就是说只提交status下是绿色的文件
* **git reset** ：将绿色的文件，重新变为红色，想当于撤销的操作。
* **git status** ：查看暂存区的工作状态，存在绿色的话，说明还没有提交到本地库
* 提交的格式选择(尽量选择下面这种格式,引号里相当于是注释)
![](https://i.loli.net/2020/05/02/KnpPLcZ2u7oMONC.png)
* **git log**：查看历史的提交记录
*
