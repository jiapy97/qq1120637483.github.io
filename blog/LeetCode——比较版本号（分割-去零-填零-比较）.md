---
title: LeetCode——比较版本号（分割-去零-填零-比较）
date: 2021-11-20
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 题目描述

![image.png](https://img-blog.csdnimg.cn/img_convert/2dafc44aea1f6493687f2ba748b224b1.png)

![image.png](https://img-blog.csdnimg.cn/img_convert/1fb684c5a6cde54724a2e5ce04624b0a.png)

## 解题思路
1. 首先使用split将元素根据标点符号点，进行分割。
2. 对数组中的每一个元素进行去零操作，并不是所有的元素都要进行去零操作，只有该元素包含了两个字符或者以上内容的时候，并且该元素的第一个字母是0才需要进行去零操作，其余则不需要去零操作。
3. 填0操作：首先比较两个数组的长度，长度较短的数组通过填0操作，补充到相同的长度，这样可以方便后续的比较。
4. 比较：定义两个指针，分别指向这两个数组，同时往后遍历，只要比较到大小关系则进行返回对应的值。

## AC代码
```js
var compareVersion = function (version1, version2) {
  const arr1 = version1.split('.');
  const arr2 = version2.split('.');

  // 对数组中的每一个字符串进行去0操作：只有两位以上的才需要进行去0操作
  function deleteZero(arr) {
    for (let i = 0; i < arr.length; i++) {
      while (arr[i].length > 1 && arr[i][0] === '0') {
        let temp = arr[i].split('');
        temp.shift();
        arr[i] = temp.join('');
      }
    }
  }

  deleteZero(arr1);
  deleteZero(arr2);

  // 进行填0操作
  // 首先比较两个数组的长度
  if (arr1.length > arr2.length) {
    let flag = arr2.length
    for (let i = flag; i < arr1.length; i++) {
      arr2[i] = '0';
    }
  }
  else if (arr1.length < arr2.length) {
    let flag = arr1.length;
    for (let i = flag; i < arr2.length; i++) {
      arr1[i] = '0';
    }
  }

  let left = 0;
  let right = 0;
  while (left < arr1.length) {
    if (Number(arr1[left]) === Number(arr2[right])) {
      left++;
      right++;
      continue;
    }
    if (Number(arr1[left]) < Number(arr2[right])) {
      return -1;
    }
    if (Number(arr1[left]) > Number(arr2[right])) {
      return 1;
    }
  }
  return 0;

};
```

## 题目反思
>本题可能不是最优解，但是通过这个题目告诉我们的是面对问题不要畏惧，只要理清思路，找到题目中的案例之间的规律，题目都是能够迎刃而解的，下面让我们分析下本题都用到了哪些知识点。

* 学会使用split将字符串分割为数组。
* 学会给数组中的元素进行去除和填充操作。
