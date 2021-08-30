---
title: python——提取漏洞描述中有争议的数据
date: 2021-04-14
categories: python
tags: 
- python
---
## 1. 提取数据
```python
# @time :2020-5-12
import openpyxl
import re

# 创建一个excel workbook对象
book = openpyxl.Workbook()
# 产生一个sheet
sh = book.active
# 修改当前sheet标题为 漏洞数据信息表
sh.title = '特殊文本信息表'
# 根据名称获取某个sheet对象
sh = book['特殊文本信息表']

# 标记
flag = 1

# 导入我们的xlsx文件
wb = openpyxl.load_workbook("vig_all.xlsx")

# 打开具体的某一个表
ws = wb.get_sheet_by_name("Sheet")

# cve列
cve_column = ws['C']

# desciprtion列
des_column = ws['G']

# 遍历每一个CVE编号
for i in range(len(cve_column)):
    # print(cve_column[i].value)
    try:
        if bool(re.search(r"\** REJECT \**",des_column[i].value)):
            print(des_column[i].value)
            sh['A' + str(flag)] = cve_column[i].value
            sh['B' + str(flag)] = des_column[i].value
            flag = flag + 1
    except Exception :
        pass


book.save("特殊文本.xlsx")




print("---运行结束---")
```
## 2. 数据去重
```pyhton
# @time :2020-5-12
import openpyxl
import re

# 创建一个excel workbook对象
book = openpyxl.Workbook()
# 产生一个sheet
sh = book.active
# 修改当前sheet标题为 漏洞数据信息表
sh.title = '特殊文本信息表'
# 根据名称获取某个sheet对象
sh = book['特殊文本信息表']

# 标记
flag = 1
# 导入我们的xlsx文件
wb = openpyxl.load_workbook("特殊文本.xlsx")

# 打开具体的某一个表
ws = wb.get_sheet_by_name("特殊文本信息表")

# cve列
cve_column = ws['A']

# 特殊文本列
des_column = ws['B']

# 定义一个字典
new_dic = dict()

# 将excel文件中的每一对数据都放到字典中
for i in range(len(cve_column)):
    new_dic[str(cve_column[i].value)] = des_column[i].value


values=set()
for key in list(new_dic.keys()):
    val = new_dic[key]
    if val in values: 
        del new_dic[key]
    else:
        values.add(val)

for key,value in new_dic.items():
    sh['A' + str(flag)] = key
    sh['B' + str(flag)] = value
    flag = flag + 1


book.save("已去重Cnvd特殊文本.xlsx")
print("---运行结束---")
```