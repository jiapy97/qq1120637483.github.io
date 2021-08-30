---
title: 使用Python对指定文件夹下的所有文件中的指定位置添加内容
date: 2021-7-14
author: Justin
top: true
cover: true
categories: python
tags:
  - python
---
# 需求描述
>现在有一个文件夹，文件夹中有几百个markdown文件，我们想在每一个文件的第二行和第三行，分别添加date和title属性。

## python如何读取markdown文件
**我们只需使用open函数即可，但是在解码格式上年一定要采用UTF-8，否则会报错**

## 如何获取文件的创建时间
```py
t = os.path.getmtime(filePath + '\\' + i)
```

## 如何得到文件指定行的内容(通过linecache这个包)
```py
import linecache
categories_add = 'categories: ' + linecache.getline(filePath + '\\' + i, 5).strip()[2:]
```

## 全部代码
```py
import os
import time
import linecache
filePath = 'G:\HEXO\添加文件名和时间\\test'
def TimeStampToTime(timestamp):
    timeStruct = time.localtime(timestamp)
    return time.strftime('%Y-%m-%d',timeStruct)
for i in os.listdir(filePath):
    print(i)
    t = os.path.getmtime(filePath + '\\' + i)
    print(TimeStampToTime(t))
    file = open(filePath + '\\' + i, "r",encoding='utf-8') 

    text = file.read()
    # print(text)
    content_add = i[:-3]
    text_add = TimeStampToTime(t)
    pointer = text.find("date:")
    pos = text.find("title:")
    
    categories_add = 'categories: ' + linecache.getline(filePath + '\\' + i, 5).strip()[2:]
    print(categories_add)
    
    if pointer != -1 & pos != -1:
            # text = text[:pointer+6] + text_add  + text[pointer+6:]
            # text = text[:pos+7] + content_add + text[pos+7:]
            tagP = text.find("tags:")
            text = text[:tagP] + categories_add  + '\n' + text[tagP:]

            file = open(filePath + '\\' + i, "w",encoding='utf-8')
            file.write(text)
            file.close()
    # 下面的是写入标题   

    # print(i[:-3])
    # file = open(filePath + '\\' + i, "r",encoding='utf-8')

    # content = file.read()
    # content_add = i[:-3]
    # pos = content.find("title:")
    # if pos != -1:
    #     content = content[:pos+6] + content_add + content[pos+6:]
    #     file = open(filePath + '\\' + i, "w")
    #     file.write(content)
    #     file.close()
```


