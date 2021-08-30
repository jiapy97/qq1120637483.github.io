---
title: HOT100——两数相加（JS实现）
date: 2021-05-27
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/42c01b039a88f45bc1f7465038375042.png)
![](https://img-blog.csdnimg.cn/img_convert/0abd0cf9de8093257185ddee481fb855.png)

## 解题思路
* 本次使用暴力解法：
1. 拿到链表对应的字符字符串数值，然后将数值反转之后转为BigInt类型，之所以转为BigInt类型的原因在于后期测试用例中有大数形式。
2. 将两个数值相加，然后转为字符数组，然后反转。
3. 定义一个数组，将字符数组的每一个元素变为相应节点后，添加进数组。
4. 遍历这个临时数组，依次改变指针。
5. 返回数组的头元素即可。

## 手绘思路
![](https://img-blog.csdnimg.cn/img_convert/d8671e42435abfe40548331ebcfcdf09.png)

## 解题代码
```js
var addTwoNumbers = function(l1, l2) {
    function ListNode(val,next) {
        this.val = val;
        this.next = null;
    }
    // 拿到链表1的数值
    let str1 = '';
    let temp1 = l1;
    while (temp1 !== null) {
        str1 = str1 + temp1.val;
        temp1 = temp1.next;
    }
    str1 = str1.split('').reverse().join('');
    let num1 = BigInt(str1);
    // 拿到链表2的数值
    let str2 = '';
    let temp2 = l2;
    while (temp2 !== null) {
        str2 = str2 + temp2.val;
        temp2 = temp2.next;
    }
    str2 = str2.split('').reverse().join('');
    let num2 = BigInt(str2);

    let result = num1 + num2;
    // 以result为基础倒着建立一个链表
    let strResult = String(result).split('');
    strResult.reverse();
    let res = [];
    for (let v of strResult) {
        res.push(new ListNode(Number(v)))
    };
    for (let i = 0 ; i < res.length - 1;i++) {
        res[i].next = res[i+1]
    }

    return res[0]
    
    
};
```
## 总结（本题给我们的启示思路）
* 本题不是最优解，但是思路较为简单。
* 学会使用JS中的BigInt类型来解决大数问题。
* 学会使用遍历数组来改变节点指针的方法。


