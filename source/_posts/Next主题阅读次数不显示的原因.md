---
title: Next主题阅读次数不显示的原因
date: 2020-05-03
categories: debug
tags: 
- debug
- hexo
---
解决流程：
1：我首先根据这篇博客[Hexo博客Next主题添加统计文章阅读量功能](https://bjtu-hxs.github.io/2018/06/12/leancloud-config/)进行了相关设置。
2：出现了一个问题，就是阅读次数后面没有数字显示。
3：经过我的反复尝试，终于我发现原来并不需要将下面的置为true。
```
leancloud_visitors:
  enable: false
```
4: 只需要将valine下的这行代码进行修改即可。
```
valine:
  visitor: true
```