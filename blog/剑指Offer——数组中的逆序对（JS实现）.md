---
title: 剑指Offer——数组中的逆序对（JS实现）
date: 2021-05-06
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/257ad1f2d48c241c87aba8127ca74ccf.png)

## 解题思路
* 我刚开始看到本题，首先想到的是暴力解法，也就是通过for循环进行不断遍历，结果超时。
* 看了题解才知道，解决逆序对的问题，往往通过归并排序
* 本题考查的本质还是归并排序，只是在归并排序的基础上，增加了一行代码而已。
* 归并排序使用的是分治法的思想，本题就是建立在还是合并的时候，进行统计计算，最终求出结果。

## 解题代码一（暴力法：超时）
```js
var reversePairs = function(nums) {
    let flag = 0;
    for (let i = 0; i < nums.length; i++) {
        const temp = nums.slice(i+1);
        for (let v of temp) {
            if (v < nums[i]) {
                flag++;
            }
        }
    }
    return flag;
};
```

## 解题代码二（归并排序）
```js
var reversePairs = function(nums) {
    // !采用归并排序的思想
    // 定义变量存储逆序对的数量
    let sum = 0;
    // 归并排序的返回结果赋值给sum
    mergeSort(nums);
    // 将最终结果进行返回
    return sum;

    // 归并排序函数
    function mergeSort(nums) {
        // 如果数组的长度小于2，说明只有一个元素的时候，我们返回这个数组，即递归的结束条件
        if (nums.length < 2) return nums;
        // 如果数组的长度不小于2，说明还没有分彻底 ，下面继续分
        let mid = Math.floor(nums.length / 2);
        // 左边的子数组
        let left = nums.slice(0,mid);
        // 右边的子数组
        let right = nums.slice(mid);
        // 将拆分好的左右子数组投入到合并函数中
        return merge(mergeSort(left),mergeSort(right));
    }

    // 合并函数（用户将拆分好的子数组进行合并）
    function merge(left,right) {
        // 定义一个存储合并排好顺序的总数组（包含左右子数组的）
        const res = [];
        // 左子数组的长度
        const leftLen = left.length;
        //  右子数组的长度
        const rightLen = right.length;
        // 开始循环遍历，是以res的下标为基础进行遍历的(i是左子数组的下标，j是右子树组的下标，index是res的下标)
        for (let i = 0,j = 0,index=0;index < leftLen + rightLen; index++) {
            // 下面的判断应先对越界条件进行判断
            if (i >= leftLen) {
                // 如果i越界说明，左子数组已经遍历完，此时res直接添加右子数组的下标指向的元素即可
                res.push(right[j++])
            } else if (j >= rightLen) {
                // 如果j越界，说明右子数组已经遍历完了，此时res直接添加左子数组下标指向的元素即可
                res.push(left[i++]);
            } else if (left[i] <= right[j]) {
                // 如果左子数组下标指向的元素小于等于右子数组下标指向的元素，此时不存在逆序对，将左子数组对应的结果加到res数组即可
                res.push(left[i++])
            } else {
                // 如果左子数组下标指向的元素大于右子数组下标指向的元素，此时是存在逆序对的
                res.push(right[j++]);
                sum = sum + leftLen - i
            }
        }
        // 返回合并好的数组（此处易错）
        return res; 
    }

};
```

## 总结（本题给我们的启示思路）
* 启示一：学会使用归并排序
* 启示二：学会归并排序的分治思想
