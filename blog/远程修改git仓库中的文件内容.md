---
title: 远程修改git仓库中的文件内容
date: 2020-04-30
categories: Git
tags: 
- Git
---
## 新建一个文件夹，并在这个文件夹中将远程仓库克隆下来。
![](https://gitee.com/justin2/pic/raw/master/20200430095035.png)
## 进入我们要修改的文件夹（这点很重要）
![](https://gitee.com/justin2/pic/raw/master/20200430095049.png)
## 查看我们当前所在的分支
![](https://gitee.com/justin2/pic/raw/master/20200430095111.png)
## 查看远程仓库的状态
![](https://gitee.com/justin2/pic/raw/master/20200430095125.png)
## 修改远程仓库中文件的内容
![](https://gitee.com/justin2/pic/raw/master/20200430095139.png)
## 查看远程仓库的状态
![](https://gitee.com/justin2/pic/raw/master/20200430095151.png)
## 加入暂存区
![](https://gitee.com/justin2/pic/raw/master/20200430095201.png)
## 远程提交（引号里是自己的）
![](https://gitee.com/justin2/pic/raw/master/20200430095214.png)
## 推送上去
![](https://gitee.com/justin2/pic/raw/master/20200430095224.png)

>由于使用的是Gitee因此要输入用户名和密码，今天用了好久才发现，原来我的Gitee的用户名是我的手机号
## 如果出现问题，可以参考下面的解决办法（推荐方案2）
方案1：
![](https://gitee.com/justin2/pic/raw/master/20200430093026.png)
方案2：
![](https://gitee.com/justin2/pic/raw/master/20200430093729.png)
>总结下：当出现上述的问题的时候，是因为远程仓库发生了变化，本地需要先更新才可以继续上传。