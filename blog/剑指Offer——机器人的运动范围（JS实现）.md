---
title: 剑指Offer——机器人的运动范围（JS实现）
date: 2021-05-05
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/50893f841c3c529de707120b355d8541.png)

## 解题思路（序列化）
* 看到本题我首先想到的是两层嵌套循环，计算下标和与k的关系不就行了，果然不会那么简单，因为有的元素，虽然下标和符合条件，但是却不符合条件，原因是一个格子被访问到，周围必须得有其他被访问到的格子，以m = 15,n = 15 ,k = 2为例，虽然（10，10）的下标符合但是它不能被访问到。
* 这里采用队列 + 方向数组的方法来遍历所有符合条件的元素
* 本题还需要计算一个数位和，这里采用的是通过转换为字符串，再将字符串转化为数字的形式来进行计算
* 同时本题还要考虑边界条件
* 下面的注释很清晰，看懂了就理解了这道题目

## 序列化代码
```js
var movingCount = function (m, n, k) {
    // 首先计算数位和
    function getSum(x, y) {
        const temp1 = String(x).split('');
        const temp2 = String(y).split('');
        const sumArr = [...temp1, ...temp2];
        const sums = sumArr.reduce((pre, cur) => pre + Number(cur), 0);
        return sums;
    }
    // 定义方向数组
    const directionArr = [
        // 向上
        [-1,0],
        // 向下
        [1,0],
        // 向左
        [0,-1],
        // 向右
        [0,1]
    ];

    // 走过的坐标，不在重复计算，通过Set数据结构来实现
    let set = new Set(['0,0']);
    // 定义一个队列，这个队列存放的是下一个符合条件的，机器人可以走的坐标
    const queue = [[0,0]];
    // 当队列中没有元素的时候，说明符合条件的全都走一遍了，且都存储在集合中了，此时集合中的数量就是最终需要返回的结果
    while (queue.length !== 0) {
        // 获取队头元素的上下左右的元素
        let [x,y] = queue.shift();

        for (let i = 0; i < 4; i++) {
            let offsetX = directionArr[i][0] + x;
            let offsetY = directionArr[i][1] + y;
            // 判断边界条件和是否已经走过
            if (offsetX < 0 || offsetY < 0 || offsetX >= m || offsetY >= n || getSum(offsetX,offsetY) > k || set.has(`${offsetX},${offsetY}`)) {
                continue;
            }
            set.add(`${offsetX},${offsetY}`);
            queue.push([offsetX,offsetY]);
        }
    }
    return set.size;
};
```

## 总结（本题给我们的启示思路）
* 启示一：学会使用方向数组，遍历一个元素的上下左右
* 启示二：学会使用队列 + 方向数组的方式
* 启示三：学会通过字符串和数字的转换来求数位和
* 启示四：集合初始化时添加字符串的方式，是通过数组来实现的
