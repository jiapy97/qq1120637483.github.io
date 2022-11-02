---
title: 剑指Offer——序列化二叉树（JS实现）
date: 2021-05-04
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/c61187b2b0e02888aae834aa4665122b.png)

## 解题思路（序列化）
* 本题分为两个部分：一是序列化二叉树，二是反序列化二叉树。
* 序列化二叉树：将以可二叉树，变成一个字符串，这个字符串本人刚开始以为是按照题目给的例子得是层序遍历才行，后来看了题解才知道，原来前序遍历也可以，下面的解法是采用的层序遍历，层序遍历使用的是数组存储每一层的下一层元素，然后将这个数组变成循环的条件，知道数组为空

## 序列化代码
```js
const serialize = (root) => {
    if (!root) return [];
    let queue = [root];
    const res = [];
    while (queue.length !== 0) {
        const temp = [];
        for (let v of queue) {
            res.push(v);
            if (v === 'null') continue;
            if (v.left !== null) {
                temp.push(v.left);            
            } else {
                temp.push('null');
            }
            if (v.right !== null) {
                temp.push(v.right);
            } else {
                temp.push('null');
            }
        }
        queue = temp;    
    }
    let resString = ''
    for (let v of res) {
        if (v instanceof Object) {
            resString = resString + v.val + ',';
        } else {
            resString = resString + v + ',';
        }
    }
    return resString;
};
```

## 解题思路（反序列化）
* 反序列化是本题的难点，下面的代码，以后可以作为一个常用函数，输入二叉树的层序遍历的字符串，即可生成二叉树的数据结构
* 反序列化采用的是队列 + 多指针的思想
* 采用一号指针指向队头指针指向原数组的位置
* 采用二号指针指向队头指针的left和right指向原数组的位置
* 初始时，二号指针指向下标1，一号指针指向下标0
* 队头遍历完之后，将左右指针域的元素入队
* 直至所有元素遍历完，结束循环，返回头指针

## 反序列化代码
```js
const deserialize = (data) => {
    if (data.length === 0) return null;
    const list = data.split(',');   // split成数组
    list.splice(list.length-1);
    let list_Pointer = 1;
    let queue_pointer = 0;
    const root = new TreeNode(list[0])
    let queue = [root];

    while (list_Pointer !== list.length) {
        if (queue[0] === null) {
            queue.shift();
            queue_pointer++;
            continue;
        }
        if (queue_pointer === list_Pointer) {
            list_Pointer = list_Pointer + 2;
        }
        if (list[list_Pointer] === 'null') {
            queue[0].left = null;
        } else {
            queue[0].left = new TreeNode(list[list_Pointer]);
        }
        if (list[list_Pointer + 1] === 'null') {
            queue[0].right = null;
        } else {
            queue[0].right = new TreeNode(list[list_Pointer + 1]);
        }
        queue.push(queue[0].left);
        queue.push(queue[0].right);
        queue.shift();
        queue_pointer++
        list_Pointer = list_Pointer + 2;
    }
    return root
};
```

## 总结（本题给我们的启示思路）
* 启示一：学会使用队列+数组进行二叉树的层序遍历
* 启示二：学会使用队列+多指针将一个字符串生成二叉树JS的数据结构
