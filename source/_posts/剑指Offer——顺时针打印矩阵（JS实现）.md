---
title: 剑指Offer——顺时针打印矩阵（JS实现）
date: 2021-05-13
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/c81b408628a3503f65ded286536a9471.png)

## 解题思路（路径循环法）
* 所谓的路径循环，就是路径本身存在一种循环，就是每一次顺时针是一次循环，每循环完一条边，就要修改想对应的边界条件，直到循环遍历完所有的节点。
* 所谓一图胜千言，有时候很多描述不如一张图片来的清晰易懂。
* 具体的思路来源于下面的这个题解
![](https://img-blog.csdnimg.cn/img_convert/3dadb98cbc04519a90d8c5d80869f5d5.png)

* [题解](https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/solution/mian-shi-ti-29-shun-shi-zhen-da-yin-ju-zhen-she-di/)

## 解题代码
```js
var spiralOrder = function(matrix) {
    // !解题核心：本题存在一个路径上的循环：
    // 循环（左 ——> 右，上 ——> 下，右 ——> 左，下 ——> 上）
    // 如果是空数组
    if (matrix.length === 0) return [];
    // 定义四个指针
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    // 定义存储最终结果的数组
    let res = [];
    // 最外边的循环是控制 顺时针圈数的循环
    while (1) {
        // 左 ——> 右
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i]);
        }
        top++;
        if (top > bottom) break;
        // 上 ——> 下
        for (let i = top; i <= bottom; i++) {
            res.push(matrix[i][right]);
        }
        right--;
        if (right < left) break;
        // 右 ——> 左
        for (let i = right; i >= left; i--) {
            res.push(matrix[bottom][i]);
        }
        bottom--;
        if (bottom < top) break;
        // 下 ——> 上
        for (let i = bottom; i >= top; i--) {
            res.push(matrix[i][left]);
        }
        left++;
        if (left > right) break;
    }
    return res
};
```
## 总结（本题给我们的启示思路）
* 启示一：学会给循环增加边界条件
* 启示二：学会读懂题目中的隐藏循环条件

