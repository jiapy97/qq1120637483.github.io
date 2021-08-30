---
title: 输入二叉树数组生成对应的二叉树数据结构（JavaScript）
date: 2021-05-09
categories: JavaScript常用API
tags: 
- JavaScript常用API
---
## 需求
* 输入一个二叉树的数组，函数能够生成对应的二叉树的结构

## 代码
```js
const deserialize = (data) => {

    let res = ''
    for (let v of data) {
        res = res + v + ',';
    }
    for (let i = 0; i <= data.length; i++) {
        res = res + 'null' + ','
    }
    data = res;

    function TreeNode(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
    if (data.length === 0) return null;
    const list = data.split(',');   // split成数组
    list.splice(list.length - 1);
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

const test2 = deserialize([1,2,3,4]);
```

## 注意事项
`这里的二叉树的每一个节点的val值不是Number类型的，而是字符串类型的`