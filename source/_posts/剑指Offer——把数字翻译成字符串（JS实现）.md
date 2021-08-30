---
title: 剑指Offer——把数字翻译成字符串（JS实现）
date: 2021-05-04
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/518e4b3f70a5d2be6bba99a28be2630f.png)

## 解题思路
* 本题关键点在于：使用递归的思想。
* 考虑两种情况：1. 单个的数字（可以翻译） 2.连续的两个数字组成的数字在0-25之间。（可以翻译）
* 递归的结束条件是字符串的长度达到了输入数字的长度
* 千言万语其实就是下面这个图的思想（来自于LeetCode题解: https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/solution/shou-hui-tu-jie-dfsdi-gui-ji-yi-hua-di-gui-dong-ta/）
![](https://img-blog.csdnimg.cn/img_convert/b73c1aca0e2d636280c82e3af02dab19.png)
* 有时候无法理解递归的过程的时候，可以通过手画下面的递归图来帮助我们理解递归
![](https://img-blog.csdnimg.cn/img_convert/c3350a4d8363eb9ecbdfa319d7e5072a.png)

## 解题代码
```js
var translateNum = function(num) {
    let result = 0;
    const strLen = num.toString().length;
    num = num.toString();
    function dfs(str,pointer) {
        if (str.length === strLen) {
            result++;
            return;
        }
        if (Number(num[pointer]) * 10 + Number(num[pointer + 1]) >= 10 && Number(num[pointer]) * 10 + Number(num[pointer + 1]) < 26) {
            dfs(str + num[pointer],pointer+1);
            dfs(str + num[pointer] + num[pointer+1],pointer+2);
        } else {
            dfs(str + num[pointer],pointer+1);
        }
    }
    dfs('',0)
    return result;
};
```

## 总结（本题给我们的启示思路）
* 启示一：学会使用递归求解
* 启示二：学会画递归图
* 启示三：知道每一层递归返回到哪里了，心里要有数
