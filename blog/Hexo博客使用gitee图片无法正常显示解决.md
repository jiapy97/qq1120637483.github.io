---
title: Hexo博客使用gitee图片无法正常显示解决
date: 2020-05-02
categories: debug
tags: 
- debug
- hexo
---
经过系统性的排查问题，原因在于gitee不支持大于1M的图片公开访问，访问这样的图片需要登录，这也就是为什么Chrome浏览器正常（因为你登录了），其他浏览器都无法访问的原因。