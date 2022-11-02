---
title: Vue中的v-if和v-for为什么不能一起用？
date: 2022-05-07
author: Justin
top: false
cover: false
categories: 面试题
tags:
  - 面试题
---

## 假如v-if和v-for一起使用会出现什么情况？
```js
<ul>
  <li v-for="(item,index) in arr " v-if="flag" :key="index"  >
    {{item}}
  </li>
</ul>
```

> 一起使用，会出现下面的错误提示：

![image.png](https://img-blog.csdnimg.cn/img_convert/7b7a4485ef10f50740dc8c06fbac449e.png)

## 为什么不能一起使用？
> 因为v-for的优先级比v-if的优先级高，所以如果嵌套使用的话，每次v-for都会执行一次v-if，造成重复计算的问题，会影响性能，所以vue官方不推荐这样使用。

