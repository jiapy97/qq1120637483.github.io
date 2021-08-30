---
title: python——split和join函数
date: 2020-05-25
categories: python
tags: 
- python
---
代码：
```python
a = "to be or not to be"

# 不指定的话，按照空格进行分开
print(a.split())
# 给定字符的话，这个字符不要了  相当于把"be"换成,
print(a.split("be"))

# join()  按照join前面的进行组合
b = ["张三","李四","哆啦A梦"]
print("+".join(b))
print("".join(b))
```
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200525214410.png)