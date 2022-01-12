---
title: 考查候选人正则基本功的面试题之《解析URL请求参数》
date: 2021-01-12
author: Justin
top: false
cover: false
categories: 面试题
tags:
  - 面试题
---

## 需求描述
>有一个字符串请求URL，我们需要将该字符串形式的URL中的请求参数转换为对象，相同key的value以数组形式进行呈现，没有value属性的参数，将value置为true。

## 目标字符串
`http://www.getui.com?user=superman&id=345&id=678&user=superman2`

## 实现函数
```js
function parseParam(url) {
    // 1. 将问号后面的字符提取出来
    const paramStr = /.+\?(.+)$/.exec(url)[1];
    // 2. 使用&分割字符串
    const paramArr = paramStr.split('&');
    // 3. 创建要返回的对象
    const paramObj = {};
    // 4. 将每一个param存到对象中
    for (let v of paramArr) {
        // 5. 分为有等号还是没有等号两种情况
        if (/=/.test(v)) {
            // 有等号
            // 将等号分割为key和value
            let [key,value] = v.split('=');
            // 对value进行解码
            value = decodeURIComponent(value);
            // 如果是数字字符串就将其转换为浮点数
            value = /^\d+$/.test(value) ? parseFloat(value) : value;
            // 判断要返回的对象中是否已经有了相同的key，有则添加，没有则赋值
            if (paramObj.hasOwnProperty(key)) {
                paramObj[key] = [].concat(paramObj[key],value);
            } else {
                paramObj[key] = value;
            }
        } else {
            // 没有等号
            // 直接将这个param键对应的值置为true
            paramObj[v] = true;
        }
    }
    return paramObj
}

console.log(parseParam('http://www.getui.com?user=superman&id=345&id=678&user=superman2'));

```

## codeSandBox在线实现
* [https://codesandbox.io/s/shou-xie-jie-xi-urlqing-qiu-can-shu-hmjv3?file=/index.html](https://codesandbox.io/s/shou-xie-jie-xi-urlqing-qiu-can-shu-hmjv3?file=/index.html)

## 题目反思
* 这道题需要我们准确掌握如何将问号后面字符串提取出来的正则表达式。
* 需要熟练掌握数组基本API的使用。
* 需要掌握concat的两个参数的用法。
