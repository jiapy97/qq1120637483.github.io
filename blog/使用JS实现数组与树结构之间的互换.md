---
title: 使用JS实现数组与树结构之间的互换
date: 2021-12-22
author: Justin
top: false
cover: false
categories: 面试题
tags:
  - 面试题
---

## 为什么要构造树结构？
> 这个问题不仅仅是一道面试题，也是一种常见的场景，假如后端给我们传来的是一个数组，数组中给的数据，需要前端根据这个数据来构造一个导航栏，此时我们就需要构建一个树型结构，因此学会如何将数组构建成一颗树是很有必要的。

## 后端传过来的数据长什么样？
```js
let data = [
  {
    "id": "1",
    "name": "1",
    "fatherId": "0",
  },
  {
    "id": "2",
    "name": "1-1",
    "fatherId": "1"
  },
  {
    "id": "3",
    "name": "1-2",
    "fatherId": "1"
  },
  {
    "id": "4",
    "name": "1-1-1",
    "fatherId": "2"
  },
  {
    "id": "5",
    "name": "1-1-2",
    "fatherId": "2"
  },
  {
    "id": "6",
    "name": "2",
    "fatherId": "0"
  },
  {
    "id": "7",
    "name": "1-2-1",
    "fatherId": "3"
  }
];
```

>从上面的数据我们可以看出几个特点：

1. 根元素的fatherId是0，0是不存在的。
2. id是唯一的。
3. fatherId表示这个元素的父元素。

## 构建树结构的方法

1. 创建一个对象和数组作为容器
2. 遍历data中的每一个元素并存储到对象中。
3. 遍历每一个元素的parent并存储到对应的children中。

```js
let data = [
  {
    "id": "1",
    "name": "1",
    "fatherId": "0",
  },
  {
    "id": "2",
    "name": "1-1",
    "fatherId": "1"
  },
  {
    "id": "3",
    "name": "1-2",
    "fatherId": "1"
  },
  {
    "id": "4",
    "name": "1-1-1",
    "fatherId": "2"
  },
  {
    "id": "5",
    "name": "1-1-2",
    "fatherId": "2"
  },
  {
    "id": "6",
    "name": "2",
    "fatherId": "0"
  },
  {
    "id": "7",
    "name": "1-2-1",
    "fatherId": "3"
  }
];

// 首先构造一个map和root
const map = {};
const root = [];

// 遍历每一个元素，并存储在map中
data.forEach(item => {
  map[item.id] = item;
})

// 遍历每一个元素并获取响应的parent
data.forEach(item => {
  let parent = map[item.fatherId];
  if (parent) {
    (parent.children || (parent.children = [])).push(item)
  } else {
    // parent不存在说明这是根元素
    root.push(item)
  }

})

root
```

## CodeSandBox在线实现

* [将JS转换为树形结构](https://codesandbox.io/s/jiang-shu-zu-zhuan-huan-wei-shu-xing-jie-gou-xiq5q)

## 参考文献
> 特别鸣谢

* [原生JS实现树状结构列表](https://segmentfault.com/a/1190000023128084)
