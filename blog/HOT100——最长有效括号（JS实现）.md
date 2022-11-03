---
title: HOT100——最长有效括号（JS实现）
date: 2021-06-18
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![image.png](https://img-blog.csdnimg.cn/img_convert/c610ac3e373ccb49688957d5344e0e46.png)

## 解题思路
* 使用辅助栈 + 求连续最长的元素序列。
* 为什么要使用栈？通过这个辅助栈可以帮助我们更好的定位哪些位置上的字符能够构成有效的括号。
* 如何求连续最长的元素序列，是通过循环更新最大值的方法来求解的。

## 解题代码
```js
var longestValidParentheses = function(s) {

    if (s.length === 0) return 0;
    // 创建一个同纬度的数组，用于判断哪些下标组合是有效的括号
    const fillArr = new Array(s.length).fill(0);
    // 辅助栈
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            if (stack.length > 0) {
                fillArr[i] = 1;
                fillArr[stack.pop()]=1
                
            }
        }
    }
    fillArr
    // 计算最长连续的1
    let count = 0;
    let max = 0;

    for (let v of fillArr) {
        if (v === 1) {
            count++;
            max = max > count ? max : count;
        } else {
            count = 0;
        }
    }
    return max;
};
```

## 启示
* 学会使用辅助栈来解决有效的括号这一类的问题。
* 学会通过更新最大值的方式来获取最大值。
