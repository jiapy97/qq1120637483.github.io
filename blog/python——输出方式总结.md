---
title: python——输出方式总结
date: 2020-05-24
categories: python
tags: 
- python
---
## python输出方式总结

### 1.使用 % 的方式  特点：一一对应
```python
print("努力学习%s,努力工作%s" %("11","22"))
```
### 2.使用format方法
```python
# 2.1 默认顺序替换，按照默认顺序进行 一一对应
print("{}提高生产力,{}提高能力".format("pyhton","python"))

# 2.2 进行数字替换 0里面填的是666   1里面填的是888
print("{1}提高生产力,{0}提高能力".format("666","888"))

# 2.3 进行字符替换
print("{a}自律，{b}自强，{c}努力".format(a = "王五" , b= "张三" , c = "李四"))

# 2.4 打印组合类型（列表等）
listx = [1,2,3,4,5]
print("这是一个列表:{}".format(listx))
# 打印列表中的某一项
print("列表中的第三项：{}".format(listx[2]))

# 2.5 调用函数
import math
# 函数要赋值给一个变量，让这个变量去调用
print("π的值是：{a.pi}".format(a = math))

# 2.6 精度控制
print("π的小数点后三位是：{:.3f}".format(math.pi))
```
### 输出效果：
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200524183558.png)




