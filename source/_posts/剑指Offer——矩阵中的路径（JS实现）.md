---
title: 剑指Offer——矩阵中的路径（JS实现）
date: 2021-05-11
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/25612918ad88fab8c6e285e720dad7a2.png)
![](https://img-blog.csdnimg.cn/img_convert/2b6103dbfc5e2de565a17d9e7a27d1d9.png)

## 解题思路
* 本题采用的DFS + 剪枝
* 首先通过循环遍历二维数组，找到第一个和字符串的元素相同的元素，然后使用DFS开始遍历，知道遍历到字符串的最后一个元素都相同，则返回true,反之则返回false
* 剪枝的作用在于在进行DFS遍历的时候，防止重复遍历

## 解题代码
```js
var exist = function(board, word) {
    // ! 本题采用深度优先搜索DFS的算法思想
    // 记录二维数组的行数
    const row = board.length;
    // 记录二维数组的列数
    const col = board[0].length;
    // 定义核心DFS函数
    function dfs(i,j,board,index) {
        // 如果下标越界或者元素不匹配则返回false
        if (i < 0 || i >= row || j < 0 || j >= col || board[i][j] !== word[index]) return false;
        // 经过上面的if语句，如果index走到最后一个下标，说明包含这个字符串，返回true
        if (index === word.length - 1) return true;
        // 因为前面的是起点，我们还要遍历起点之后的元素，先记录下当前元素
        let temp = board[i][j];
        // 让当前元素这个位置不能被重复参与
        board[i][j] = '*';
        // 定义一个元素的上下左右是否符合
        let res = dfs(i-1,j,board,index+1) || dfs(i+1,j,board,index + 1) || dfs(i,j-1,board,index+1) || dfs(i,j+1,board,index+1);
        // 恢复元素的原本值，让后续的遍历可以使用
        board[i][j] = temp;
        // 返回res
        return res;
    }
    // 从board中寻找第一个和word[0]相同的元素，开始遍历
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            // 只要能遍历到一个true，则返回true
            if (dfs(i,j,board,0)) return true;
        }
    }
    // 如果遍历完，都没有true，说明没有，则返回false
    return false;
};
```
## 总结（本题给我们的启示思路）
* 启示一：学会使用DFS + 剪枝的方法遍历二维数组中的有关路径

