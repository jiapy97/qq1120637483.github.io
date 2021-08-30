---
title: LeetCode——数组中数字出现的次数II
date: 2021-03-27
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/61c65afd8488266619d74e11314a5cb5.png)

## 解题思路
* 使用JS中的Map数据结构
* 首先创建Map数据结构，然后依次遍历判断该数据结构中是否包含数组的元素，如果不包含就创建键值对，并将值置为1，包含的话则将值+1
* 最后遍历Map数据结构，如果值为1的话，则返回对应的键。

## 解题代码
```js
var singleNumber = function(nums) {
    const m = new Map();

    for(let v of nums) {
        if (m.has(v)) {
            m.set(v,m.get(v)+1);
        } else {
            m.set(v,1);
        }
    };
    for (let v of m) {
        if(v[1] === 1) {
            return v[0];
        }
    }
};
```