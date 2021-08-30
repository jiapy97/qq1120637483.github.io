---
title: 剑指Offer——栈的压入、弹出序列（JS实现）
date: 2021-04-20
categories: LeetCode
tags: 
- LeetCode
---
## 题目描述
![](https://img-blog.csdnimg.cn/img_convert/0b44be93fbf8e93686649f1fbeb39b44.png)

## 解题思路
* 本题的思想在于想到模拟栈
* 我们首先定义一个数组用来模拟栈
* 从pushed数组的第一个元素开始进行入栈，如果该元素在popped数组的第一个元素，我们就将入栈的元素出栈，然后继续判断栈顶元素是否和popped数组指针指向的元素相同，相同则出栈。
* 如果最后模拟栈的元素个数为零，则说明是栈的压入和弹出序列，反之则不是。

## 解题代码
```js
var validateStackSequences = function (pushed, popped) {

    // 本题使用模拟栈的写法
    const stack = [];
    // 定义一个指向popped元素的指针
    let pointer = 0;

    for (let i = 0; i < pushed.length; i++) {
        stack.push(pushed[i]);
        if (popped[pointer] === pushed[i]) {
            stack.pop();
            pointer++;
        }
        if (pointer === popped.length) break;
        while (stack[stack.length-1] === popped[pointer]) {
            stack.pop();
            pointer++;
            if (pointer === popped.length) return true;
        }
    }
    
    while (stack.length !== 0) {
        if(stack[stack.length - 1] === popped[pointer]) {
            stack.pop();
            pointer++;
        } else {
            return false;
        }  
    }

    return true;
};
```
## 总结
* 本题属于栈类型的问题。
* 核心思路在于想到模拟栈的压入和弹出去对比popped的指针指向的元素，最后通过判断栈是否为空，来判断是否属于栈的压入和弹出。