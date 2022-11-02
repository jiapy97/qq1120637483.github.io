---
title: LeetCode——去除重复字母（借助栈）
date: 2021-8-30
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---
## 题目描述
![image.png](https://img-blog.csdnimg.cn/img_convert/73aaaef9c869036d2d22c3df49109d1f.png)

## 解题思路
>本题我们采用栈的思路来解决这个问题,在解决问题之前,首先我们要看懂这个题目,这个题目并不是说对字母去重后直接按照字典序排列的,而是附加了一个条件即不能打乱其他字符的相对位置,如何能保证不打乱其他字符的相对位置呢?可以采用将该元素在字符串中最后一次出现时再加入栈,即使前面加入了也要pop出去.

### 第一步: 如果字符出现在栈中则直接跳过
```js
if (stack.indexOf(char) > -1) continue;
```
### 第二步: 如果字符没有出现在栈中,则进行下面的判断
1. 栈中是否有元素.
2. 栈顶元素是否大于第i个字符.
3. 第i个字符后面还有栈顶元素吗?
>都满足则让栈顶元素出栈.
```js
while (stack.length > 0 && stack[stack.length -1] > char && s.indexOf(stack[stack.length - 1],i) > i) {
    // 走到这里说明该元素需要跳过
    stack.pop();
}
```
### 第三步: 将第i个元素入栈
```js
stack.push(char);
```
### 第四步: 通过join方法将数组连接成字符串
```js
stack.join('')
```

## AC代码
![image.png](https://img-blog.csdnimg.cn/img_convert/fbdb1a1a49b0f30313c50b583c618805.png)

## 题目反思
1. 学会使用栈来解决重复字母问题.
2. 学会通过join方法将数组变为字符串.
3. 判断一个元素是否在数组中出现过不仅可以通过ES6中的方法,还可以通过indexof与-1的关系来进行判断.
4. indexof可以接受两个参数,第一个参数代表的是哪一个字符,第二个参数代表的是从哪里开始往后查找,这个知识在解决本题的过程中,发挥了不可磨灭的作用.


