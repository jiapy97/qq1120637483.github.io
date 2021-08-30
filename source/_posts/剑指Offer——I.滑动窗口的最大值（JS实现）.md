---
title: 剑指Offer——I.滑动窗口的最大值（JS实现）
date: 2021-05-12
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/4bacd57f017299480e802ae870cd728e.png)

## 解题思路一（暴力法）
* 暴力法就是定义一个滑动窗口，然后通过循环不断地去移动这个窗口，直到窗口走到最后，然后分别求出每一个窗口的最大值，存到最终结果数组中，最后返回
* 虽然通过暴力法也能够通过，但是还是希望能够找到更优解。

## 解题代码一（暴力法）
```js
var maxSlidingWindow = function(nums, k) {
    // ! 方法一：暴力解法
    // 定义最终返回的结果数组
    if (k === 0) return [];
    const res = [];
    // 开始循环遍历
    for (let i = 0; i < nums.length - k + 1; i++) {
        let temp = nums.slice(i,i+k);
        res.push(Math.max(...temp));
    }
    return res;
};
```

## 解题思路二（双端队列）
* 首先我们要清楚什么是双端队列，传统的队列的特点是先进先出，也就是只有一个出口，双端队列是既可以从队头出，也可以从队尾出
* 我们构造一个双端队列，用来辅助我们判断滑动窗口的最大值
* 我们首先定义左右指针，左右指针都是从零开始的，当左指针移动到nums.length - k的时候，说明遍历完了，此时结束while循环
* 右指针是我们判断时的关键指针，当右指针元素大于队尾的时候，我们要将队尾元素出队，因为我们要构造的是一个降序排列的双端队列
* 当队尾元素为空，或者队尾元素大于右指针指向的元素时，我们将右指针指向的元素入队
* 当右指针-左指针 === k的时候，首先记录队首元素，这就是滑动窗口当前的最大值，同时说明滑动窗口的长度已经大于k了，此时判断队首元素是否是左指针指向的元素，如果是的，将这个元素从队头去掉，然后左指针+1

## 解题代码二（双端队列）
```js
var maxSlidingWindow = function(nums, k) {
    // ! 方法一：双端队列
    // 定义最终返回的结果数组
    if (k === 0) return [];
    const res = [];
    // 定义双端队列
    const doubleQueue = [];
    // 定义左右指针
    let left = 0;
    let right = 0;
    // 当左指针移动到nums.length - k即可结束循环
    while (left <= nums.length - k) {
        if (doubleQueue.length > k) doubleQueue.shift();
        // 如果滑动窗口的长度超过了k值，则将left向右移动一个，并将此时的双端队列的队头元素出队
        if (right - left === k) {
            res.push(doubleQueue[0]);
            if (nums[left] === doubleQueue[0]) {
                doubleQueue.shift();
            }
            left++;
            continue;
        }
        // 如果双端队列为空，则将right指针指向的数字加入队列
        if (doubleQueue.length === 0) {
            doubleQueue.push(nums[right]);
            right++;
            continue;
        }
        if (nums[right] <= doubleQueue[doubleQueue.length - 1]) {
            doubleQueue.push(nums[right]);
            right++;
            continue;
        }
        while (nums[right] > doubleQueue[doubleQueue.length - 1]) {
            if (doubleQueue.length === 0) {
                doubleQueue.push(nums[right]);
                right++;
            } else {
                doubleQueue.pop();
            }
        }

    }
    return res;
};
```
## 总结（本题给我们的启示思路）
* 启示一：学会使用双端队列的方法来判断滑动窗口的最大值

