---
title: 给Hexo添加自定义菜单menu的方法
date: 2020-04-24
categories: hexo
tags: 
- hexo
---
## 1：修改站点配置文件下的menu
![](https://gitee.com/justin2/pic/raw/master/20200412091841.png)
## 2:修改主题目录下的language目录下的zh-CN.yml
![](https://gitee.com/justin2/pic/raw/master/20200412092209.png)
## 3：设置图标
![](https://gitee.com/justin2/pic/raw/master/20200412092311.png)
##### 将红框里的改成[图标网站](https://fontawesome.com/icons)里的类型，这里注意选择的是下面的这个位置：
![](https://gitee.com/justin2/pic/raw/master/20200412092551.png)
## 4：创建菜单的文件夹
##### 在blog目录下使用git bush 输入以下命令：
```
hexo new page 'name'
```
##### 注意这里的name填的是，上面提到的菜单类型，我在配置的时候，就是在这个位置出了问题，所以这个位置一定要小心！

## 5：在 index.md 中增加 type 属性
![](https://gitee.com/justin2/pic/raw/master/20200412093442.png)
##### 注意：这里的类型，也是我们上文提到的菜单类型！

## 6：在文章中加入相关属性

