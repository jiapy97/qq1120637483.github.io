---
title: 剑指Offer——树的子结构（JS实现）
date: 2021-05-09
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/cc6a1429b297d8533ff1049259fa4492.png)

## 解题思路
* 本题采用两个递归互相调用的方式进行求解
* 一个树是否是另一个树的子结构，有3种情况
* 情况一：子树和当前节点完全一致
* 情况二：子树在左子树中
* 情况三：子树在右子树中
* 第一个递归用于控制发生的是哪一种情况
* 第二个递归则用于进行遍历，如果A树为空，说明A数遍历完了都没有匹配到，说明B树不是子树，如果B树为空，说明B树遍历完了，说明B树是子树，如果A和B的值不相同，则返回false,此时也许会有疑问，那万一子结构在树的深部岂不是直接返回false了？这是第一个递归就开始发挥作用了。
* 本题的难点在于：如果只有一个递归，当A和B的值不同时，若直接返回false，显然不合理，但是如果不返回false，后续很难进行

## 解题代码
```js
var isSubStructure = function(A, B) {
    // 判断是否是树的子结构有两种情况
    // 情况1：当前节点是子结构
    // 情况2：当前节点的左右子树是子结构
    // 如果A节点为空，或者B节点为空，都说明不是子树
    if (!A || !B) {
        return false;
    }
    return (dfs(A,B) || isSubStructure(A.left,B) || isSubStructure(A.right,B));

    function dfs(A,B) {
        // 如果B的节点为空，说明B已经遍历完了，说明此时B是A的子结构
        if (!B) {
            return true;
        }
        // 如果A都遍历完了，说明B不是子结构
        if (!A) {
            return false;
        }
        // 如果当前节点不同，则返回false
        if (A.val !== B.val) {
            return false;
        }
        // 当前节点相同，还要判断当前节点的左右子树是否都相同
        return (dfs(A.left,B.left) && dfs(A.right,B.right));
        
    }
};
```
## 总结（本题给我们的启示思路）
* 启示一：学会使用两个递归进行互补计算
* 启示二：多考虑边界条件

