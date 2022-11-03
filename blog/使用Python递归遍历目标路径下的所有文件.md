---
title: 使用Python递归遍历目标路径下的所有文件
date: 2022-02-17
author: Justin
top: false
cover: false
categories: python
tags:
  - python
---

## 需求介绍
> 从网上获取目标网站的数据一般通过网络爬虫的方式，但是这种方式往往可能效率比较低，而且有些网站可能会限制爬虫，比如著名的Github，当通过API爬虫的方式获取数据的时候，Github官方对爬虫速率进行了限制，超过了这个速率的爬虫会被限制，同时Github官方还要求提供Github用户验证等等，这些限制无形中都加大了我们爬虫的难度，但是其实我们还可以通过直接下载Github仓库的方式来获取数据，这种方式比爬虫要更加方便快捷，但是下下来的文件中很多是文件夹或者不符合条件的文件，我们该如何快速的通过python脚本将这些文件提取出来呢？下面就是我们要介绍的使用python递归遍历目标路径下的所有文件。

## 实现思路
1. 导入操作json和文件的模块,并定义最终存储的变量。

```py
import os
import json
target_json = []
```

2. 定义递归函数，接收路径作为参数，遍历路径中的每一个item，并判断其为文件夹还是文件,文件夹则投入继续递归，文件则读取文件中的json数据并存储到指定变量中。

```py
def getTarget(dir):
  temp = os.listdir(dir)
  for t in temp:
    if (os.path.isfile(dir + '/' + t)):
      print('找到了',t)

      for line in open(dir + '/' + t): 
        # print(line)
        line=line.strip('\n')
        line = json.loads(line)
        target_json.append(line)
      # with open(dir + '/' + t) as f:
      #   line = f.readline()
      #   while line:
      #     target_json.append(line)
        # print(line)
    else:
      getTarget(dir + '/' + t)
      
getTarget('./crates.io-index-master')
```

3. 将指定变量中的数据存储为json文件，方便后续使用。

```py
json_str = json.dumps(target_json)
with open('target_json.json', 'w') as json_file:
    json_file.write(json_str)
```

## 总结
> 获取有代码仓库的网站的数据，不一定要使用爬虫，有时候直接从代码仓库中下载数据并使用脚本进行处理，无论是从获取的速度还是精度都要更高。


