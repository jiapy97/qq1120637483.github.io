---
title: LeetCode——LRU 缓存机制（借助Map）
date: 2021-9-9
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---
## 题目描述
![image.png](https://img-blog.csdnimg.cn/img_convert/2334001134d15ad82ee518db33291848.png)

![image.png](https://img-blog.csdnimg.cn/img_convert/e172d2644b8e67da1bb999700ebf86ff.png)

## 解题思路
>解决这个问题之前，我们首先要读懂题意，知道什么是LRU缓存机制，LRU缓存机制指的是优先删除那些最久未使用的缓存，在本题中，一个缓存被put或者get都算是一次使用，明白这一点，也就理解了本题的核心题意。

### 1: 初始化构造函数
```js
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.map = new Map();
};
```

### 2：实现get方法
* 判断map中是都有目标key。
    * 没有则返回-1
    * 有，则保存对应的值，然后删除键值对，重新存，然后返回对应的值。这里之所以要进行重新存储，是为了更新首个元素为最久未使用的元素。

```js
LRUCache.prototype.get = function (key) {
    // 如果map中有这个key存在则返回，反之返回-1
    if (this.map.has(key)) {
        const value = this.map.get(key);
        this.map.delete(key);
        this.map.set(key,value)
        return this.map.get(key);
    } else {
        return -1;
    }
};
```

### 3：实现put方法
* 首先判断要存储的key是否存在
    * 存在：删除进行重新存储
    * 不存在：首先判断map的尺寸是否大于构造函数中的容量，如果大于则删除map的首元素，删除方法是`map.entries().next().value[0]`,如果不大于则直接存储。
    
```js
LRUCache.prototype.put = function (key, value) {
    // 首先判断这个key存在吗，存在则删除，重新放置 反之直接放置
    if (this.map.has(key)) {
        this.map.delete(key);
        this.map.set(key,value);
    } else {
        // 判断map的大小是否比题目给定的容量大
        if (this.map.size >= this.capacity) {
            this.map.delete(this.map.entries().next().value[0]);
            this.map.set(key,value)
        } else {
            this.map.set(key,value)
        }
    }
};
```

## 题目反思
* 通过本题应该学会使用map的各种API，从这题可以看出，我对map的各种API还不够熟系。
* map.entries()变为了一个可迭代的对象。
* next()会将一个可迭代对象变为一个普通对象。

