---
title: 剑指Offer——二叉树中和为某一值的路径（JS实现）
date: 2021-04-26
categories: LeetCode
tags: 
- LeetCode
---

## 题目描述
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0ed5150791f445fe8f8bbdd018eaa008~tplv-k3u1fbpfcp-zoom-1.image)

## 解题思路
* 这道题属于二叉树的深度优先遍历
* 首先我们要了解DFS的遍历过程
* 当root节点走到null的时候，说明该条路径已经遍历完毕
* 当一条路径遍历完毕之后，我们使用浅拷贝的方式将一条路径拷贝进res最终结果数组中
* 然后开始返回，每次返回都要将stack数组的最后一个元素清空，这是本题的核心点，刚开始被这个问题困扰了很久。

## 解题代码
```js
var pathSum = function (root, target) {
    const res = [];
    let stack = [];
    function dfs(node) {
        if (!node) return null;
        stack.push(node.val)
        let l = dfs(node.left);
        let r = dfs(node.right);
        if (l === null && r === null) {
            res.push([...stack]);
        }
        stack.pop();
        return;
    }
    dfs(root)
    const temp = res.filter((value) => {
        return value.reduce((pre, cur) => pre + cur, 0) === target;
    })
    return temp;
};
```

## 更优解
> 通过DFS求解路径。

```js
var pathSum = function(root, targetSum) {
    // 路径总和II 是经典的DFS问题
    if (!root) return [];
    const res = [];
    function dfs(root,sum,temp) {
        temp.push(root.val);
        if (root.val === sum && !root.left && !root.right) {
            res.push(temp);
            return;    
        }
        if (root.left) dfs(root.left,sum - root.val,temp.slice());
        if (root.right) dfs(root.right,sum - root.val,temp.slice());
    }
    dfs(root,targetSum,[]);
    return res;
};
```

## 总结（本题给我们的启示思路）
* 思路一：如何使用DFS算法遍历二叉树。
* 思路二：在进行遍历的时候，该返回什么?什么时候进行存储才是本题的核心，才应当是我们应该多加练习的地方。

