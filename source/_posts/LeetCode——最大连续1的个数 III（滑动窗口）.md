---
title: LeetCode——最大连续1的个数 III（滑动窗口）
date: 2021-8-16
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---
## 题目描述
![image.png](https://img-blog.csdnimg.cn/img_convert/70823013c0adde9a2decd49bcfb6a6fc.png)

## 解题思路
>本题的核心思路是滑动窗口，而滑动窗口的实现需要借助双指针，这是解决本题的核心思路。
1. 定义滑动窗口的左右边界。
```js
let l = 0;
let r = 0;
```
2. 定义滑动窗口中连续1的个数（包含K个零）
```js
let max = 0;
```
3. 定义滑动窗口中零的个数。
```js
let zeros = 0;
```
4. 核心循环体
* 进入循环的条件是右边界越界
```js
while (r < nums.length)
```
* 判断滑动窗口中零的个数和K的关系
    >只有两种关系，要么滑动窗口中零的个数小于等于K,要么大于K，如果小于K，说明窗口右边界还未满足条件，还需要继续扩充右边界，此时让r++,但是在右边界扩充的时候，我们要看当前右指针指向的元素是0还是1，如果是1则直接向右扩充即可，但是如果是1，则需要更新0的个数之后，继续扩充，如果零的个数大于K，则需要移动左边界，在移动左边界的时候，依然要考虑上述因素。
    ```js
    if (zeros <= k) {
            if (nums[r] === 1) {
                r++;
            } else {
                r++;
                zeros++;
            }
        }
        if (zeros > k) {
            if (nums[l] === 0) {
                zeros--;
                l++;
            } else {
                l++;
            }
        }
    ```
* 更新最大值（因为r总是先移动后判断，所以用右边界-左边界就可以和最大值进行比较更新）
```js
if (r - l > max) {
    max = r - l;
}
```

## AC代码
```js
// 核心思路: 滑动窗口 + 更新最大值
var longestOnes = function (nums, k) {
    // 定义滑动窗口的左右边界
    let l = 0;
    let r = 0;
    // 定义滑动窗口中连续1（包含K个零）的最大值
    let max = 0;
    // 定义滑动窗口中0的个数
    let zeros = 0;

    // 进入循环的条件是：滑动窗口的右边界没有越界
    while (r < nums.length) {
        if (zeros <= k) {
            if (nums[r] === 1) {
                r++;
            } else {
                r++;
                zeros++;
            }
        }
        if (zeros > k) {
            if (nums[l] === 0) {
                zeros--;
                l++;
            } else {
                l++;
            }
        }
        if (r - l > max) {
            max = r - l;
        }
    }
    return max;
};
```
## 执行结果
![image.png](https://img-blog.csdnimg.cn/img_convert/46a6893690961a7f49b57eff9e9782fc.png)

## 题目反思
* 学会使用滑动窗口的方式求解子区间、子数组问题。
* 学会使用更新的方式获取最大值。