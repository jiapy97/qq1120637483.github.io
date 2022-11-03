---
title: python——打开excel表并获取其中的某一列
date: 2020-05-13
categories: python
tags: 
- python
---
打开excel文件，并获取具体的某列
```python
# 导入我们的xlsx文件
wb = openpyxl.load_workbook("vig_all.xlsx")

# 打开具体的某一个表
ws = wb.get_sheet_by_name("Sheet")

# cve列
cve_column = ws['C']

# desciprtion列
des_column = ws['G']
```
后续我们可以使用循环，获取每一个具体的单元格
```python
# 遍历每一个CVE编号
for i in range(len(cve_column)):
```