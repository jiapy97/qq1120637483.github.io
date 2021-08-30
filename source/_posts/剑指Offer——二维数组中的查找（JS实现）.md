---
title: 剑指Offer——二维数组中的查找（JS实现）
date: 2021-05-17
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/8f0ca65120b9dbfae3877b608475f8c8.png)

## 解题思路（数学规律）
* 本题主要是从二维数组的左下角的元素出发，不断的进行移动比较，因为本题给出的二维数组存在一个特点就是，从左小角的元素出发，一列的元素中，上面的元素总是比下面的元素小，一行的元素中，右边的元素总是比左边的大，这个特点就是我们解题的关键。

## 解题代码
```js
var findNumberIn2DArray = function(matrix, target) {
    // ! 本题核心：以左下角为起始点，如果比左下角的数字小，向上移动一位进行比较
    // ! 如果比左下角的数字大，向右移动一位进行比较
    if (matrix.length === 0) return false;
    // if (matrix[0])
    // 定位到左下角元素
    let origin = matrix[matrix.length - 1][0];
    // 定义移动时的指针;
    let top = matrix.length - 1;
    let right = 0;
    // 定义最终返回的结果
    let res;
    while (1) {
        if (top < 0 || right === matrix[0].length) return false;
        origin = matrix[top][right];
        if (origin === target) return true;
        if (origin < target) {
            right++;
        }
        if (origin > target) {
            top--;
        }
    }
};
```
## 总结（本题给我们的启示思路）
* 启示：学会通过二维数组中的内在规律来解题。

