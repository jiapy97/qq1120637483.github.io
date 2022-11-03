---
title: LeetCode——求1+2+…+n
date: 2021-03-25
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/625074c72a559d2fb8a469ca1ab97346.png)
## 解题思路
1. 使用递归
2. 使用数组的reduce方法，将初始累积器值置为1，然后索引下标+1进行累积。

## 解题代码
```js
var sumNums = function (n) {
    return Array(n).fill(null).reduce((pre, item, idx) => pre + idx + 1, 0)
};

```
## 实现效果
![](https://img-blog.csdnimg.cn/img_convert/f66b7a763e8abda77be8f2587827a6bc.png)