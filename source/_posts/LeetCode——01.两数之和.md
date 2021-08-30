---
title: LeetCode——01.两数之和
date: 2020-05-25
categories: LeetCode
tags: 
- LeetCode
---
## 第一题（两数之和）
```python
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        # 定义一个空的字典  字典里对应的是      "值":"序号"
        d = {}
        # index指的是下标，element指的是值，enumerate返回的是索引和值
        for index,element in enumerate(nums):
            # 判断是否在字典里 是判断的  键  ，也就是说判断的是值
            if (target - element) in d:
                # 在的话 一方面返回字典里的一个数的下标，另一方面返回的是列表里的数的下标
                return [index,d[target - element]]
            # 不在的话，将  "值":"序号"  添加到字典中
            else:
                d[element] = index
```
