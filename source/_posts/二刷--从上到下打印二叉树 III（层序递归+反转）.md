---
title: 二刷--从上到下打印二叉树 III（层序递归+反转）
date: 2021-11-24
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 题目描述

![image.png](https://img-blog.csdnimg.cn/img_convert/5e1f819498e2982b7668cb2247102f87.png)

## 解题思路
### 实现方式一：递归法进行层序遍历然后根据层次的奇偶进行反转

```js
var levelOrder = function (root) {
  // 核心思路：二叉树的层序遍历--递归实现
  if (!root) return [];
  let result = [];

  function levelOrder(root,level) {
    if (!root) return null;
    result[level] = result[level] || [];

    result[level].push(root.val);
    levelOrder(root.left,level + 1);
    levelOrder(root.right,level + 1);
  }
  levelOrder(root,0);
  for (let i = 0; i < result.length; i++) {
    if (i % 2 != 0) {
      result[i] = result[i].reverse();
    }
  }
  return result;
};
```

### 方式2：将节点加入数组时判断层次是奇数还是偶数，进而选择是push还是unshift

```js
var levelOrder = function (root) {
  // 核心思路：二叉树的层序遍历--递归实现
  if (!root) return [];
  let result = [];

  function levelOrder(root,level) {
    if (!root) return null;
    result[level] = result[level] || [];

    if (level % 2 === 0) {
      result[level].push(root.val);
    } else {
      result[level].unshift(root.val);
    }
    levelOrder(root.left,level + 1);
    levelOrder(root.right,level + 1);
  }
  levelOrder(root,0);
  return result;
};
```

## 题目反思
>本题给我们的经验是，本题是对二叉树的层序遍历的改编题，本质还是想要考查我们对二叉树的层序遍历的熟系程度，二叉树的层序遍历分为迭代法和递归法，本次我们使用的是递归法，但是递归实现的时候，二叉树的同一层是从左到右进行遍历的，我最开始尝试解决这个问题的时候，想的是先判断层次的奇数还是偶数，然后将不同的左右子树投入递归，其实这样是不行的，本质上还是没有理解递归的顺序，上述递归的方式本质上还是先遍历完左子树然后遍历右子树，之所以能够实现层序遍历，是因为在递归的过程中，加入了辅助判断条件层次这一变量，这个题目的解题思路指的我们反复揣摩学习。
