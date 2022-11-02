---
title: python——去除字典中相同值的项
date: 2020-05-13
categories: python
tags: 
- python
---
这里的去除，并不单单指的是删除值，而是把这个键值对都删了，只保留相同值的第一个
#### 核心代码
```python
# 创建一个集合
values=set()
# 将字典所有的 键 转换为列表，并进行遍历
for key in list(new_dic.keys()):
    # 将每一个键的值取出来赋给val
    val = new_dic[key]
    # 如何取出的值在集合里，就把键值对删掉
    if val in values: 
        del new_dic[key]
    # 如果不在，就把这个值添加到集合中去   
    else:
        values.add(val)
```