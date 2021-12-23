---
title: LeetCode——实现strStr()（KMP算法）
date: 2021-12-23
author: Justin
top: false
cover: false
categories: LeetCode
tags:
  - LeetCode
---

## 题目描述
> 实现strStr()这个题目的本质考查KMP算法，也是前端的indexOf这个API的底层实现原理，因此这道题无论是原理上还是从面试角度来看都是非常重要的一道题目。

![image.png](https://img-blog.csdnimg.cn/img_convert/cc578fe6ea1208bda4a00c9f6a525afa.png)

![image.png](https://img-blog.csdnimg.cn/img_convert/07866f2b667f6274eea3c228d9cdbdcb.png)

## 解题思路
> 这道题目想实现的是字符串匹配，即找到目标模式串在母串的位置，如果模式串为空，直接返回下标0，其余情况，返回模式串首次出现的位置。本题最核心的莫过于构建next数组，next数组代表的是模式串的前缀和后缀之间相同元素的个数，这个next数组可以指导后续模式串失配的时候的移动次数。这是kmp算法的核心，至于为什么是这样，本文不再进行详细赘述，更加详细的情况可以去搜索KMP算法。

```js
 var strStr = function(haystack, needle) {
  let n = haystack.length;
  let m = needle.length;
  if (m === 0) return 0;

  // 构造next数组
  let next = new Array(m).fill(0);
  for (let j = 0,i = 1; i < m; i++) {
    while (j > 0 && needle[i] != needle[j]) {
      j = next[j-1];
    }
    if (needle[j] === needle[i]) {
      j++;
    }
    next[i] = j;
  }

  // 使用next数组
  for (let i = 0, j = 0; i < n;i++) {
    while (j > 0 && haystack[i] != needle[j]) {
      j = next[j-1];
    }
    if (haystack[i] === needle[j]) {
      j++;
    }
    if (j === m) {
      return i - m + 1;
    }
  }

  return -1;

};
```

## 题目反思
> KMP算法是indexOf实现的底层原理，核心功能就是利用已经匹配的元素的已知信息，减少从头匹配的次数，从而提高匹配的效率。


