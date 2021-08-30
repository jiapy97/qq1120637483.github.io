---
title: 剑指Offer——二叉搜索树的后序遍历序列（JS实现）
date: 2021-05-04
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/a01276b57fe499281b2aa85177df9630.png)

## 解题思路
* 本题关键点在于：二叉搜索树的后序遍历序列的最后一个元素是根节点，左子树均小于根节点，右子树均大于根节点
* 使用递归是本题的解题方法
* 本题需要额外考虑的情况在于有的序列是没有右子树的，如果没有右子树，那么分割左右子树的位置就是根节点所在的位置，默认右子树是一个空数组

## 解题代码
```js
var verifyPostorder = function(postorder) {
    // !本题的解题关键：二叉搜索树的后序遍历，最后一个元素是根节点
    // 如果输入的数组长度小于2，则返回true
    let len = postorder.length;
    if (len < 2) return true;
    // 区分左右子树 
    let flag = 0;
    // 找到根节点
    let root = postorder[len-1];
    for (let i = 0; i < postorder.length;i++) {
        if (postorder[i] > postorder[len-1]) {
            flag = i;
            break;
        }
        if (i === len-1) {
            flag = i;
        }
    }
    // 左子树
    let leftTree = postorder.slice(0,flag);
    // 右子树
    let rightTree = postorder.slice(flag,len-1);

    // 如果右子树的每一个节点都大于根节点，则继续递归判断，反之为false
    if (rightTree.every((value) => value > root)) {
        return verifyPostorder(leftTree) && verifyPostorder(rightTree);
    } else {
        return false;
    }
};
```

## 总结（本题给我们的启示思路）
* 启示一：学会使用递归求解
* 启示二：知道二叉搜索树的后序遍历序列的最后一个节点是根节点
* 启示三：知道没有右子树的序列，按照空数组来进行处理
