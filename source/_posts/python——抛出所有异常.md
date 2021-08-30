---
title: python——抛出所有异常
date: 2020-05-13
categories: python
tags: 
- python
---
使用下面的格式即可：
```python
    try:
        if bool(re.search(r"\** REJECT \**",des_column[i].value)):
            print(des_column[i].value)
            sh['A' + str(flag)] = cve_column[i].value
            sh['B' + str(flag)] = des_column[i].value
            flag = flag + 1
    except Exception :
        pass
```