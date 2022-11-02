---
title: LeetCode——下一个排列（降序重排法）
date: 2022-02-09
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 题目描述

![image.png](https://img-blog.csdnimg.cn/img_convert/a7984eef838c356a53661cce50ace4e2.png)

## 解题思路
### 第一步：从右往左倒着找看是否有降序元素的存在
> 如果有降序元素的存在则进行标记，可以设置一个变量来帮助我们标记。加入nums[right] > nums[right-1]，我们此时要记录这个right-1的位置后续有用，如果没有降序元素的存在，则直接进行升序排列即可，不用再看下面的步骤了，直接返回。

### 第二步：从降序位置往后的所有元素进行一次升序排列

### 第三步：对升序排列的数组进行遍历找到第一个比right元素大的元素，进行交换

### 第四步：交换后进行二次升序排列。

## AC代码

```js
var nextPermutation = function(nums) {
  // 下一个排列要求的是原地排序
  let flag = false;
  let right = nums.length - 1;
  // 第一步：从右往左进行遍历，查找是否有降序元素的存在
  while (right) {
    if (nums[right] > nums[right-1]) {
      flag = true;
      right--;
      break;
    } else {
      right--;
    }
  }

  if (flag) {
    const sorted = nums.splice(right + 1).sort((next,pre) => next - pre);
    // 找到排序好的数组的第一个比nums[right]的元素，然后进行交换
    let temp;
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i] > nums[right]) {
        temp = i;
        break;
      }
    }
    let t = nums[right];
    nums[right] = sorted[temp];
    sorted[temp] = t;
    // 对sorted进行二次排序
    sorted.sort((next,pre) => next - pre);
    // 进行拼接
    nums.push(...sorted);
  } else {
    nums.sort((next,pre) => next - pre)
  }

};
```

## 总结
> 下一个排列这个题目是一道高频考题，核心思路就是理解整个题目的意思，难点不在写代码上，难点在理解这个思路上，只要我们能够安装上文介绍的解题思路进行解题，很快就能解决这个问题，本题的可能不好想，因为倒序本身就不符合常规思维，但是多加练习就能理解的。

## 参考文献
* [HOT100——下一个排列（JS实现）](https://juejin.cn/post/6982746312764555271)



