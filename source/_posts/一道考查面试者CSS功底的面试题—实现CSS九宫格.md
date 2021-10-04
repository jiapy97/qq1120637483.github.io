---
title: 一道考查面试者CSS功底的面试题—实现CSS九宫格
date: 2021-10-5
author: Justin
top: false
cover: false
categories: 面试题
tags:
  - 面试题
---

>通过CSS实现九宫格可以很好的考查候选人的CSS基本功，所以在当今的前端面试中，无论是大厂还是小厂，这个面试题经常出现在候选人面前，这道题目看似简单，但是最终能够做出来的人也是凤毛麟角，让我们来一探究竟吧。

## 方法一：使用table
>table布局能够实现的原因在于table的tr和td能够将元素形成行列显示。table布局中有一个是否合并边框的样式border-collapse: collapse;值得我们注意。

### HTML部分
```html
<table>
    <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
    </tr>
    <tr>
        <td>4</td>
        <td>5</td>
        <td>6</td>
    </tr>
    <tr>
        <td>7</td>
        <td>8</td>
        <td>9</td>
    </tr>
</table>
```
### CSS部分
```css
* {
    margin: 0;
    padding: 0;
}
table {
    border-collapse: collapse;
    margin: 0 auto;
}
table td {
    width: 60px;
    height: 60px;
    background-color: blue;
    border: 1px solid #000;
    text-align: center;
    line-height: 60px;;
}
```

## 方法二：使用flex布局
>使用flex布局的核心在于flex-wrap: wrap。

### HTML部分
```html
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
</ul>
```

### CSS部分
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
li {
    list-style: none;
}
ul {
    display: flex;
    flex-wrap: wrap;
    width: 180px;
    height: 180px;
}
ul > li {
    background-color: blue;
    width: calc(100% / 3);
    height: 60px;
    line-height: 60px;
    border: 1px solid #000;
    text-align: center;
}
```

## 实现效果
![image.png](https://img-blog.csdnimg.cn/img_convert/136dde832b618a8935fdb21b35f3b727.png)



