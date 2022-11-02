---
title: 剑指Offer——旋转数组的最小数字（JS实现）
date: 2021-05-06
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/eb754efcae968f0e4d6a5a038e996d93.png)

## 解题思路（序列化）
* 我刚开始看到本题，我发现找到比数组第一个元素小的第一个元素返回不就行了，没找到就返回第一个，没想到竟然成功AC
* 看了题解后，采用了二分查找的思想，第一个指针指向第一个元素，第二个指针指向最后一个元素，当中位数大于最右边的元素，说明目标元素还在中位数的右边，我们的目标元素就是最小的那个值，此时令left = mid + 1,如果中位数小于最右边的元素，那么这个中位数有可能为目标元素，令right = mid;如果中位数等于最右边的元素，令right--;
* 循环结束，left下标对应的元素就应当是最小的元素，返回即可。

## 序列化代码
```js
var minArray = function(numbers) {
    let left = 0;
    let right = numbers.length - 1;
    // ! 我们的目标：让左右指针都指向最小的那个元素，然后终止循环
    while (left < right) {
        const mid = left + right >>> 1;
        if (numbers[mid] > numbers[right]) {
            // 如果中位数比最右边的大，说明目标元素还在中位数右边
            left = mid + 1;
        } else if (numbers[mid] < numbers[right]) {
            // 如果中位数比最右边的小
            right = mid;
        } else {
            right--;
        }
    }
    return numbers[left];
};
```

## 总结（本题给我们的启示思路）
* 启示一：学会使用零填充右移1位的方法来求中位数
* 启示二：学会使用二分查找的思想来找到最小值
