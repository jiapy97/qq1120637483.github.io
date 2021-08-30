---
title: LeetCode——数组中的第K个最大元素（堆排序-大顶堆）
date: 2021-8-10
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---
## 题目描述
![image.png](https://img-blog.csdnimg.cn/img_convert/2387703be9cdedd3863db5c5c5359671.png)

## 解题思路
>本题如果直接再用API解题肯定是不行的，因为面试不可能考你API如何使用，前几天写过这个题目是通过快速排序写的，这次我们采用堆排序，通过大顶堆的方式来求出第K个最大的元素，其实这类问题都属于经典的TOP K问题，属于面试的常考题。

### 1. 构建大顶堆
>为什么要构建大顶堆，是因为大顶堆的对顶元素是整个数组中最大的元素.我们正式利用这点来求解问题的。
1. 构建大顶堆的第一步是从最后一个非叶子节点开始，一直遍历到根节点.
2. 一个节点的左子节点是 2*n + 1.
3. 一个节点的右子节点是 2*n + 2.
4. 一个节点的父节点是(n-1) / 2 (向下取整)
5. 一棵树的最后一个非叶子节点是 Math.flool(nums.length/2)-1.

### 2. 将大顶堆下沉K-1次，得到的就是第K大的元素
>假如，我们要求的是第一大的元素，K-1就是零，也就是说不需要进行下沉，此时的大顶堆的堆顶就是最大的元素。若K-1=2，只需下沉两次，堆顶就是我们的最大的元素。所谓的下沉就是将堆顶与末尾元素进行交换。然后将堆的长度减一之后继续进行堆化。

## 解题代码
```js
// 通过大顶堆求解问题
var findKthLargest = function(nums, k) {
    // 堆的大小
    let heapSize = nums.length;
    // 调用大顶堆函数
    buildMaxHeap(nums,heapSize);
    // 要想求第K大的元素，就需要将大顶堆下沉K-1次，每下沉一次进行一次重新的堆化；
    for (let i = 0; i < k - 1; i++ ) {
        swap(nums,0,nums.length - 1 - i);
        // 将最后一个元素忽略，不参与堆化
        nums
        heapSize--;
        // 从第0个元素开始继续进行堆化
        maxHeapify(nums,0,heapSize);
    }
    // 此时堆顶就是第K个最大元素
    return nums[0]
    // 构建大顶堆
    function buildMaxHeap(nums,heapSize) {
        for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
            maxHeapify(nums,i,heapSize)
        }
    }
    function maxHeapify(nums,i,heapSize) {
        // 首先假定第i个是最大的
        let max = i;
        let leftChild = 2 * i + 1;
        let rightChild = 2 * i + 2;
        // 如果下标不越界（即子孩子存在），并且子节点小于第i个元素
        if (leftChild < heapSize && nums[leftChild] > nums[max]) {
            max = leftChild;
        }
        if (rightChild < heapSize && nums[rightChild] > nums[max]) {
            max = rightChild;
        }
        // 判断是否发生了交换
        if (max !== i) {
            swap(nums,i,max);
            // 交换之后，从下面上来的元素的位置后面需要继续进行堆化
            maxHeapify(nums,max,heapSize);
        }
    }

    function swap (nums,i,j) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
};

findKthLargest([8,5,0,3,7,1,2], 3)
```

## 题目反思
* 学会使用大顶堆的方式来求解TOP K问题。
* 本题的思路也是解决堆排序的核心思路。

