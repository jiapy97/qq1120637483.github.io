---
title: LeetCode——替换后的最长重复字符（滑动窗口）
date: 2021-8-16
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---
## 题目描述
![image.png](https://img-blog.csdnimg.cn/img_convert/3bec257954e4e2f1372a4cff038b7868.png)

## 解题思路
>核心的解题思路是：滑动窗口。
1. 构造一个数组，该数组拥有26个元素，下标代表的是大写字母A-Z。
```js
let letterArr = new Array(26).fill(0);
```
2. 定义滑动窗口的左右边界和滑动窗口中出现次数最多的字母的出现次数。
```js
// 定义滑动窗口的左边界
let left = 0;
// 定义滑动窗口的右边界
let right = 0;
// 定义滑动窗口中出现次数最多的字母的次数
let max = 0;
```
3. 当右边界小于数组长度的时候，进入循环体，首先判断滑动窗口右边界指向的元素的是哪一个字母，然后将对应出现的次数+1，然后更新最大值，如果滑动窗口不满足条件，则更新左边界，反之更新右边界。
```js
while (right < s.length) {
    // 判断滑动窗口右边界指向的字母是哪一个字母，对应的将其次数加1
    let sub = s[right].charCodeAt() - 65;
    letterArr[sub]++;
    // 将右边界指向的字母出现的次数和最大值进行比较更新
    max = Math.max(max, letterArr[sub]);
    // 判断是更新左边界还是更新右边界
    if (right - left + 1 > max + k) {
        // 此时更新左边界
        letterArr[s[left].charCodeAt() - 65]--;
        left++;
        letterArr[s[right].charCodeAt() - 65]--;
    } else {
        right++;
    }
}
```
4. 返回滑动窗口的长度
```js
return s.length - left;
```

## AC代码
```js
var characterReplacement = function (s, k) {
    // 核心思路：滑动窗口
    // 构造所有大写字母的数组，下标代表元素A-Z，值代表的是在滑动窗口中出现的次数
    let letterArr = new Array(26).fill(0);
    // 定义滑动窗口的左边界
    let left = 0;
    // 定义滑动窗口的右边界
    let right = 0;
    // 定义滑动窗口中出现次数最多的字母的次数
    let max = 0;

    while (right < s.length) {
        // 判断滑动窗口右边界指向的字母是哪一个字母，对应的将其次数加1
        let sub = s[right].charCodeAt() - 65;
        letterArr[sub]++;
        // 将右边界指向的字母出现的次数和最大值进行比较更新
        max = Math.max(max, letterArr[sub]);
        // 判断是更新左边界还是更新右边界
        if (right - left + 1 > max + k) {
            // 此时更新左边界
            letterArr[s[left].charCodeAt() - 65]--;
            left++;
            letterArr[s[right].charCodeAt() - 65]--;
        } else {
            right++;
        }
    }

    return s.length - left;
};
```
## 题目反思
* 学会使用数组的下标和值表示某些元素出现的次数。
* 学会使用滑动窗口解决数组中的替换问题。
