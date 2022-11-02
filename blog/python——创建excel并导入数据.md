---
title: python——创建excel并导入数据
date: 2020-05-13
categories: python
tags: 
- python
---
```python
# 创建一个excel workbook对象
book = openpyxl.Workbook()
# 产生一个sheet
sh = book.active
# 修改当前sheet标题为 漏洞数据信息表
sh.title = '特殊文本信息表'
# 根据名称获取某个sheet对象
sh = book['特殊文本信息表']
# 写入A1  此处可以设置循环
sh['A' + str(flag)] = cve_column[i].value

# 以指定文件名进行保存
book.save("特殊文本.xlsx")
```