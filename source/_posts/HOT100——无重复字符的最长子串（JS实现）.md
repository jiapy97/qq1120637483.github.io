---
title: HOT100——无重复字符的最长子串（JS实现）
date: 2021-05-29
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/e134f590cce5c300618b5187d2e5baf7.png)

## 解题思路
* 本题采用双指针 + 哈希表的方式解决问题。
* 最大值是通过不断更新出来的。
* 右指针移动到字符串的最后一个元素循环结束。
* 循环体中首先判断右指针指向的元素是否出现在哈希表中，如果出现了，对应的值+1，反之赋值为1.
* 哈希表存在的意义就是为了辅助我们的左指针的移动，当右指针的元素出现的次数大于2，此时说明重复了，我们要不断移动左指针，直到右指针重复的这个元素不重复为止，移动左指针之前还要将左指针指向的这个元素的哈希值-1，防止后面出现了同样的元素
* 最后右指针右移，然后不断比较res和right - left的较大值赋给res。

## 解题代码
```js
var lengthOfLongestSubstring = function(s) {
    // 本题采用滑动窗口 + 双指针的方法
    // 定义左指针
    let left = 0;
    // 定义右指针
    let right = 0;
    // 定义最大值
    let res = 0;
    // 定义滑动窗口（哈希表）
    let window = new Map();

    // 循环结束条件是 右指针走到了最右边
    while (right < s.length) {
        // 判断右指针指向的元素，是否在哈希表中，在则+1，不在则添加进去
        if (window.has(s[right])) {
            window.set(s[right],window.get(s[right]) + 1);
        } else {
            window.set(s[right],1);
        }
        // 判断右指针指向的元素，是否出现了重复
        while (window.get(s[right]) > 1) {
            // 当右指针指向的元素出现了两次，说明重复了，左指针指向的元素在哈希表中的值-1，然后左指针右移
            // 之所以 -1 之后再右移，根本原因在于防止左边的元素重复出现
            window.set(s[left],window.get(s[left]) -1);
            left++;
        }
        // 指针右移,不断更新最大值
        right++;
        res = Math.max(res,right - left);
    }

    return res;
};
```
## 总结（本题给我们的启示思路）
* 学会通过不断更新的方式获取最大值。
* 学会通过哈希表 + 双指针的方式来解决问题。


