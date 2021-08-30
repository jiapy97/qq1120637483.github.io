---
title: python——集合
date: 2020-05-24
categories: python
tags: 
- python
---
## 集合的两种创建方式
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200524125715.png)
* 集合是无序的
* 集合里面相同的元素只保留一个
* set会将字符串进行分开保存
## 集合的基本操作符
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200524161237.png)

## 利用集合进行数据去重
```python
# 利用集合进行数据去重

# 定义一个带有重复元素的列表
list_1 = [1,1,2,2,3,4,5,5]
# 将这个列表变成一个集合
set_1 = set(list_1)
# 再将集合变成列表  这样一来一回，就实现了去重操作
new_list = list(set_1)

print("去重后的列表是：{}".format(new_list))
```
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200524191542.png)
