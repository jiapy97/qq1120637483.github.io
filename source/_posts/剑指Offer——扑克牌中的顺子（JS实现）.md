---
title: 剑指Offer——扑克牌中的顺子（JS实现）
date: 2021-05-10
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/82daaac9d5c730ad50e5f5d1a34e7516.png)

## 解题思路
* 本题采用的是通过零数组来辅助判断是否是顺子
* 具体的过程，代码注释中都有

## 解题代码
```js
var isStraight = function (nums) {
    // 将nums数组中所有0元素放入下面的数组中
    const zeroArr = [];
    // 将数组从小到大进行排序
    nums.sort((num1, num2) => num1 - num2);
    // 将含零的元素添加到0的数组中
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeroArr.push(nums[i]);
        }
    }
    // 将nums数组中的0全部过滤掉
    nums = nums.filter(value => value !== 0);
    // 如果nums数组中含有重复元素，说明不是顺子，直接返回false
    if ([...new Set(nums)].length !== nums.length) return false;
    // 遍历nums的所有非零元素
    for (let i = 1; i < nums.length; i++) {
        // 如果后一个比前一个大一，说明属于顺子，继续判断
        if (nums[i] - nums[i - 1] === 1) {
            continue;
        } else if (nums[i] - nums[i - 1] > 1) {
            // 如果后一个比前一个大的多，首先判断0数组中是否有元素，没有则返回false
            if (zeroArr.length === 0) return false;
            // 如果有0元素，则判断零的个数是否能够填补空缺的数字
            if (zeroArr.length >= nums[i] - nums[i - 1] - 1) {
                for (let j = 0; j < nums[i] - nums[i - 1] - 1; j++) {
                    zeroArr.pop();
                }
            } else {
                return false;
            }
        }
    }
    return true;
};
```
## 总结（本题给我们的启示思路）
* 启示一：学会使用辅助数组来判断目标元素
* 启示二：学会通过集合给数组进行去重
* 启示三：学会通过filter进行过滤数组

