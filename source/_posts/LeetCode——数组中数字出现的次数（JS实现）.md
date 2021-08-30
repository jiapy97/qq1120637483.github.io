---
title: LeetCode——数组中数字出现的次数（JS实现）
date: 2021-04-10
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/9ba47653d6d34345db5420b0183acb61.png)

## 解题思路
### 思路一：使用哈希表（空间复杂度不满足）
* 将键表示为数组的元素，值表示为出现的次数

```js
// 方法1：使用Map数据结构
var singleNumbers = function(nums) {
    const m = new Map();
    for (let v of nums) {
        if (m.has(v)) {
            m.set(v,m.get(v) + 1)
        } else {
            m.set(v,1);
        }
    }
    result = [];
    for (let v of m) {
        if (v[1] === 1) {
            result.push(v[0])
        }
    }
    console.log(result);
    return result;
};
```
### 思路2：使用位运算（多个for循环：不满足空间复杂度的要求）
* 因为题目中说了除了两个数字出现一次外，其余数字都出现了两次，凡是出现了两次，做异或运算都为0，所以全部进行遍历异或得到的值一定是那两个只出现一次的数字。
* 我们根据全部遍历异或的到的结果比如是0111，从最后一位1可以看出，这两个只出现1次的数字的最后一位一定是不同的，所以我们根据这个特征来进行分组。
* 最后一位为1的分为1组，为0的分为1组。
* 两个组分别进行异或，得到的值然后返回就是最终的结果。可以在纸上演算下。

```js
// 使用位运算的方法
var singleNumbers = function(nums) {
    let temp = 0;
    let temp2 = 0;
    let temp3 = 0;
    for (let v of nums) {
        temp = temp ^ v;
    }
    let temp1 = temp.toString(2);
    let flag = 1;
    for (let i = temp1.length-1;i >= 0;i--) {
        console.log(temp1[i]);
        if (temp1[i] === '0') {
            flag = flag + 1;
        } else {
            break;
        }
    }
    // 遍历每个数组，将数组中的值转为二进制
    const result = []
    for (let v of nums) {
        result.push(v.toString(2));
    }
    console.log(result);
    let arr1 = [];
    let arr2 = [];
    for (let v of result) {
        if (v[v.length-flag] === '1') {
            arr1.push(v);
        } else {
            arr2.push(v);
        }
    }
    console.log(flag);
    console.log(arr1);
    console.log(arr2);
    for (let i in arr1) {
        arr1[i] = parseInt(arr1[i],2)
    }
    for (let i in arr2) {
        arr2[i] = parseInt(arr2[i],2)
    }
    console.log(arr1);
    console.log(arr2);
    for (let v of arr1) {
        temp2 = temp2 ^ v;
    }
    for (let v of arr2) {
        temp3 = temp3 ^ v;
    }
    console.log(temp2,temp3);
    return [temp2,temp3];
};
```
## 最终解决方案（符合题目要求）
* 使用位运算

1. 首先让数组的所有元素依次进行异或运算，得到的值从右往左第一个1的位置就是两个只出现1次元素的不同的位置。
2. 使用变量记录从右往左第一个1的位置。
3. 将第二步得到的变量与数组中的每个元素进行与运算，可以将上述的数组分为两组
4. 这两组分别进行全体异或，得到两个值然后返回就是题目要的只出现一次的数字。

## 代码
```js
var singleNumbers = function(nums) {
    let temp = 0;
    let a = 0;
    let b = 0;
    for (let v of nums) {
        temp = temp ^ v;
    }
    console.log(temp);
    // 判断从右往左第几位是1
    let One_Location = 1;
    while ((temp & One_Location) === 0) {
        One_Location = One_Location << 1;
    }
    for (let v of nums) {
        if ((One_Location & v) === 0) {
            a = a ^ v;
        } else {
            b = b ^ v;
        }
    };
    return [a,b];
};
```
