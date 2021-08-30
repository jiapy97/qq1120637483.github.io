---
title: 剑指Offer——数组中出现次数超过一半的数字（JS实现）
date: 2021-04-16
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/c2afef4e921806d51952ea7f59ec4b08.png)

## 解题思路
* 使用哈希Map的键存放数组的元素
* 使用哈希Map的值存放该元素出现的次数
* 找出出现次数大于长度一半的元素，返回即可

## 实现代码
```js
var majorityElement = function(nums) {
    // 存储数组的长度的一半
    let len = nums.length/2;
    const m = new Map();
    for (let v of nums) {
        if (m.has(v)) {
            m.set(v,m.get(v)+1);
        } else {
            m.set(v,1);
        }
    };
    for (let v of m) {
        if (v[1] > len) {
            return v[0];
        }
    }
};
```