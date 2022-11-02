---
title: 剑指Offer——I.翻转单词顺序（JS实现）
date: 2021-05-14
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/21b446fec8f4a79a9857d3a8d784647a.png)

## 解题思路（路径循环法）
1. 去掉字符串两侧空格
2. 以空格为基础分割，分割之后过滤掉中间的空格
3. 将数组反转之后再连接即可

## 解题代码
```js
var reverseWords = function(s) {
    // 去掉字符串两侧空格
    s = s.trim();
    // 以空格为基础分割，分割之后过滤掉中间的空格
    const temp = s.split(' ').filter(value => value !== '')
    // 将数组反转之后再连接即可
    return temp.reverse().join(' ')
};
```

## 总结（本题给我们的启示思路）
* 启示一：学会使用trim去掉字符串两侧空格，这个函数不会对原字符串产生影响，因此需要自己进行赋值
* 启示二：学会使用filter对数组进行过滤
* 启示三：学会使用reverse对数组进行反转
* 启示四：学会使用join连接数组为字符串
* 本题思路较为简单，主要是要对常用API比较熟悉

