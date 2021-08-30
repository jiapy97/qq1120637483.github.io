---
title: 解决Hexo博客的Next主题中阅读全文没有auto_excerpt的问题
date: 2021-04-01
categories: Hexo
tags: 
- Hexo
---
## 1：使用npm安装hexo-excerpt
```
npm install hexo-excerpt --save
```
## 2：在站点配置文件中添加
```
excerpt:
  depth: 5  
  excerpt_excludes: []
  more_excludes: []
  hideWholePostExcerpts: true
```