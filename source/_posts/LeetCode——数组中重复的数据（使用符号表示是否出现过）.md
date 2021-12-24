---
title: LeetCode——数组中重复的数据（使用符号表示是否出现过）
date: 2021-12-24
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 题目描述

![image.png](https://img-blog.csdnimg.cn/img_convert/74820c34dbb16dbe505c8e4a4974e345.png)

## 题目核心

1. 数组中的元素只出现过一次或者两次。
2. 数组中每个元素的值都在1到N之间，其中N为数组的长度。
3. 解题不得使用其他的额外空间，必须在nums数组本身上进行操作。

## 解题思路

> 本题的核心解题思路就是使用nums[i]的正负来表示值为i+1的元素是否出现，首次出现将其变为负数，再次出现则将其加入到结果数组中。

![image.png](https://img-blog.csdnimg.cn/img_convert/b30127f79ffcdd716ec2e093fbef7f9c.png)

## AC代码

```js
 var findDuplicates = function(nums) {
  const res = [];

  for (let num of nums) {
    let absNum = Math.abs(num);
    if (nums[absNum - 1] < 0) {
      res.push(absNum);
    } else {
      nums[absNum - 1] *= -1;
    }
  }

  return res;
};
```

## 题目反思
> 本题比较难以理解，最重要的核心就是使用正负号来表示元素是否出现过，之所以能这样做，是因为题目中每个元素的值都在1-N之间，因为这个条件的限制，造成了一个元素的值-1对应的元素的正负和自己出现的次数出现了关联。