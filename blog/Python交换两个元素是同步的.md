---
title: Python交换两个元素是同步的
date: 2020-10-09
categories: python
tags: 
- python
---

python中交换两个元素是同步的！！！
```python
a[i],a[i-1] = a[i-1],a[i]
```
上面的例子，假如a[i] = 3 , a[i-1] = 2，那么交换之后，a[i-1] = 3,a[i] = 2