---
title: 剑指Offer——对称的二叉树（JS实现）
date: 2021-12-28
categories: LeetCode
tags: 
- LeetCode
---

## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/0d855ca46f338038328f02f8966b30af.png)
## 解题思路
* 这道题属于二叉树的问题
* 本题的核心在于通过层次遍历，来将一层的元素的值和这一层元素进行反转之后，相同下标的元素是否相同，只要相同，则说明是对称二叉树，反之则不是对称二叉树。

## 解题代码
```js
var isSymmetric = function(root) {
    if (!root) return true;
    let flag = true;
    let queue = [root];
    
    while (queue.length !== 0) {
        const temp = [];
        for (let v of queue) {
            temp.push(v);
        }
        let copy = [];
        for (let v of temp) {
            if (v === null) {
                copy.push(null);
                continue;
            }
            copy.push(v.val);
        }
        copy = copy.reverse();
        for (let i = 0; i < temp.length;i++) {
            if (temp[i] === null) {
                if (temp[i] !== copy[i]) {
                    flag = false;
                    return flag;
                } else {
                    continue;
                }
            }
            if (temp[i].val !== copy[i]) {
                flag = false;
                return flag;
            }
        }
        queue = [];
        for (let v of temp) {
            if (v === null) {
                queue.push(null);
                queue.push(null);
                continue;
            }
            queue.push(v.left);
            queue.push(v.right);
        }
        const test = queue.every((value) => {
            return value === null
        }) 
        if (test === true) break;
    }

    return flag;
};
```

## 使用BFS的思想解题（推荐）

```js
var isSymmetric = function (root) {
  // 对称二叉树这道题目可以使用BFS的核心思想来求解
  if (!root) return false;
  const queue = [];
  // 初始化时入队两个节点
  queue.push(root.left, root.right);

  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i += 2) {
      // 一次出队两个元素
      let left = queue.shift();
      let right = queue.shift();
      // 只要有一个存在，另一个存在的情况
      if ((!left && right) || (left && !right)) {
        return false;
      }
      // 两个都存在
      if (left && right) {
        // 如果值不同则返回false
        if (left.val != right.val) {
          return false;
        }
        // 推入一对节点：左孩子的左孩子，右孩子的右孩子
        queue.push(left.left, right.right);
        queue.push(left.right, right.left);
      }
    }
  }

  return true;
};
```

## 总结（本题给我们的启示思路）
* 思路一：如何进行层次遍历。
* 思路二：同一层的元素通过逆转后，判断相同下标的元素的值是否相同，来判断是否是对称二叉树。

