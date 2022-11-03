---
title: HOT100——三数之和（JS实现）
date: 2021-06-05
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/9d17834ec2c713d5a84e50fef5ddbaef.png)

## 解题思路
1. 如果元素的个数小于3，直接返回空数组。
2. 对数组进行从小到大排序。
3. 定义三个指针，分别是i,left,right。其中i是我们固定循环的指针，一直循环到nums.length - 2,其中left每次开始循环的时候是比i+1,right每次开始循环是最后一个数字。
4. 当三数之和等于0时进行存储，小于0，left++,大于0，right--。
5. 本题还有一个非常重要需要考虑的地方就是，重复值的问题，当三数之和为0的时候，如果left++的值和left的值相同，那么这就是一个重复的值，这个值是不需要添加进去的，如果right--的值和right的值相同也是同样的道理，并且，在判断是我们同时要考虑left++后依然要小于right,right--之后依然要大于left.

## 解题代码
```js
var threeSum = function (nums) {
    // 如果元素的个数小于4，直接返回空数组
    if (nums.length < 3) {
        return [];
    }
    let res = [];
    let temp = [];
    nums.sort((num1, num2) => num1 - num2);
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && (nums[i] === nums[i - 1])) {
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            if (nums[i] + nums[left] + nums[right] === 0) {
                if (nums[left] === nums[left + 1] && right > left+1) {
                    left++
                    continue;
                } else if (nums[right] === nums[right - 1] && right > left + 1) {
                    right--;
                    continue;
                }
                temp.push(nums[i]);
                temp.push(nums[left]);
                temp.push(nums[right]);
                res.push(temp);
                temp = [];
                left++
            } else if (nums[i] + nums[left] + nums[right] < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return res
};
```

## 启示
* 学会固定一个指针，然后移动其余两个指针的方法来解决问题。
