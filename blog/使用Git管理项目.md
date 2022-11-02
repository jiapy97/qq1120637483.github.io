---
title: 使用Git管理项目
date: 2021-05-14
categories: Git
tags: 
- Git
---
## 一、 在Github上建立仓库
![](https://img-blog.csdnimg.cn/img_convert/76b7886d64ef80971ac6ce7a24de04f6.png)

## 二、在项目根目录创建.gitignore文件
```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.
/.idea
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

```
## 三、初始化git
```
git init
```
## 四、将现有文件添加到暂存区
```
git add .
```
## 五、提交到版本区
```
git commit -m "本次提交的信息"
```
## 六、将本地仓库和远程仓库进行关联
```
git remote add origin https://github.com/xxx.git 
```
## 七、将本地分支推送到远程
```
git push origin master
```
## 创建新分支（创建之前需要将原本的分支进行保存并提交）
```
# 创建dev分支
git checkout -b dev
# 将新创建的dev分支推送到远程
git push origin dev
```
## 查看所有分支
```
git branch -a
```
## 切换分支
```
git checkout 分支名
```
## 通过克隆的方式获取远程分支
```
# 通过git clone获取的是master分支
# 通过下面的这种方式可以获取远程的其他分支
git checkout -b dev origin/dev
```
## git pull 和 git push 的区别
![](https://img-blog.csdnimg.cn/img_convert/6e970b51e71f464de8a663cbcb170ab1.png)

