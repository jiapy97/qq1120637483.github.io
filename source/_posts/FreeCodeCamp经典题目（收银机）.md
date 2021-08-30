---
title: FreeCodeCamp经典题目（收银机）
date: 2021-8-2
author: Justin
top: false
cover: false
categories: FreeCodeCamp
tags:
  - FreeCodeCamp
---
## 题目描述
![image.png](https://img-blog.csdnimg.cn/img_convert/d8e96ab79bb036246b7df189ee322a8a.png)
![image.png](https://img-blog.csdnimg.cn/img_convert/05cbdac0675592875c9617174eb29e53.png)

## 测试案例
![image.png](https://img-blog.csdnimg.cn/img_convert/558c8b6e1189ab3ef28608e07e0eb819.png)

## 题目分析
>由于本题是我使用Chrome浏览器直接对题目进行的翻译，难免造成一些翻译上的错误。所以接下来，我们首先对题目进行一个分析，明确题目想要解决什么样的问题。

### 题目接收的参数是什么？
>本题给出的函数，总共接收三个参数。
* 参数1：顾客所有产品的总价。
* 参数2：顾客给的钱数。
* 参数3：是一个二维数组，每一个小数组中的第一个元素是面值，第二个元素是收银机中该面额的总值（美元）。

## 解题思路

### 1. 建立一个面值和美元对应的二维数组。
```js
const cashMap = [
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.1],
        ["QUARTER", 0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]
    ]
```
### 2. 计算出应找零多少
```js
// 首先计算出应找零多少钱
const shouldGive = cash - price;
```
### 3. 使用指针指向第一个小于等于找零金额的面值
```js
// 定义遍历指针，这个指针指向第一个小于等于需要找零金额的面值
let pointer;
for (let i = 0; i < cashMap.length; i++) {
    if (cashMap[i][1] > shouldGive) {
        pointer = i - 1;
        break;
    } else if (cashMap[i][1] === shouldGive) {
        pointer = i;
        break;
    }
}
```
### 4. 使用一个临时变量和临时指针保存需要找零的数字和第三步我们找到的指针。
```js
let tempGive = shouldGive;
let Tpointer = pointer;
// 定义最终返回的数组
let result = []
```
### 5. 找出指针指向的面额需要从收银机中拿出几张（下面的sub变量表示张数）
```js
let sub = Math.floor(tempGive / cashMap[Tpointer][1])
while (Tpointer >= 0) {
    if (sub * cashMap[Tpointer][1] > cid[Tpointer][1]) {
        sub = cid[Tpointer][1] / cashMap[Tpointer][1];
        result.push([cid[Tpointer][0], sub * cashMap[Tpointer][1]])
        tempGive = (tempGive - sub * cashMap[Tpointer][1]).toFixed(2)
        Tpointer--;
        if (Tpointer < 0) return { status: "INSUFFICIENT_FUNDS", change: [] };
        sub = Math.floor(tempGive / cashMap[Tpointer][1]);
    } else {
        result.push([cid[Tpointer][0], sub * cashMap[Tpointer][1]])
        tempGive = (tempGive - sub * cashMap[Tpointer][1]).toFixed(2)
        Tpointer--;
        if (Tpointer < 0) break;
        sub = Math.floor(tempGive / cashMap[Tpointer][1]);
    }
}
```
### 6. 如果找零后，收银机中没有钱了，此时返回close的状态
```js
const cidSum = cid.reduce((pre,item) => pre + item[1],0)
for (let i = 0; i < result.length; i++) {
    if (cidSum === shouldGive) {
        let test = [];
        for (let v of cashMap) {
            if (v[0] === result[i][0]) {
                test.push([v[0],result[i][1]])
            } else {
                test.push([v[0],0])
            }
        }
        return {
            status: 'CLOSED',
            change: test
        }
    }
}
```

## 全部代码
```js
function checkCashRegister(price, cash, cid) {
    // 建立面值哈希表
    const cashMap = [
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.1],
        ["QUARTER", 0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]
    ]
    // 1：首先计算出应找零多少钱
    const shouldGive = cash - price;
    // 2. 定义遍历指针，这个指针指向第一个小于等于需要找零金额的面值
    let pointer;
    for (let i = 0; i < cashMap.length; i++) {
        if (cashMap[i][1] > shouldGive) {
            pointer = i - 1;
            break;
        } else if (cashMap[i][1] === shouldGive) {
            pointer = i;
            break;
        }
    }

    let tempGive = shouldGive;
    let Tpointer = pointer;
    // 定义最终返回的数组
    let result = []


    // *  下面是需要反复修改的代码
    // sub 表示Tpointer指向的这个面值应该出几张
    let sub = Math.floor(tempGive / cashMap[Tpointer][1])
    while (Tpointer >= 0) {
        if (sub * cashMap[Tpointer][1] > cid[Tpointer][1]) {
            sub = cid[Tpointer][1] / cashMap[Tpointer][1];
            result.push([cid[Tpointer][0], sub * cashMap[Tpointer][1]])
            tempGive = (tempGive - sub * cashMap[Tpointer][1]).toFixed(2)
            Tpointer--;
            if (Tpointer < 0) return { status: "INSUFFICIENT_FUNDS", change: [] };
            sub = Math.floor(tempGive / cashMap[Tpointer][1]);
        } else {
            result.push([cid[Tpointer][0], sub * cashMap[Tpointer][1]])
            tempGive = (tempGive - sub * cashMap[Tpointer][1]).toFixed(2)
            Tpointer--;
            if (Tpointer < 0) break;
            sub = Math.floor(tempGive / cashMap[Tpointer][1]);
        }
    }
    result = result.filter(item => item[1] !== 0)
    
    const cidSum = cid.reduce((pre,item) => pre + item[1],0)
    for (let i = 0; i < result.length; i++) {
        if (cidSum === shouldGive) {
            let test = [];
            for (let v of cashMap) {
                if (v[0] === result[i][0]) {
                    test.push([v[0],result[i][1]])
                } else {
                    test.push([v[0],0])
                }
            }
            return {
                status: 'CLOSED',
                change: test
            }
        }
    }
    return { status: "OPEN", change: result }
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
```

## 题目反思
* 遇到难题不要怕，首先要学会将难题分解成一个一个的小问题。
* 通过解决一个又一个的小问题，大的困难问题自然而解。
* 必须熟练掌握四舍五入，保留小数，求和，去重等常见的API操作方法。

