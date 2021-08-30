---
title: 修改VScode编辑器默认注释的颜色
date: 2021-05-03
categories: VSCode
tags: 
- VSCode
---
## 为什么要修改？
Vscode默认的注释颜色是灰色的，在有的主题下，比较暗淡，影响视觉体验。
## 修改方法
1. Ctrl + Shift + P  输入settings
![](https://img-blog.csdnimg.cn/img_convert/3a36c079c8121a7736ee539f6118f170.png)

2. 添加以下代码并保存
```
//改变注释颜色
    "editor.tokenColorCustomizations": {
        "comments": "#009933" // 注释
    }, //如果后面还加内容，记得块末用逗号隔开
    // "editor.insertSpaces": false
```