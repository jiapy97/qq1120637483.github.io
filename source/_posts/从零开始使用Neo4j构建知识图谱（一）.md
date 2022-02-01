---
title: 从零开始使用Neo4j构建知识图谱（一）
date: 2022-02-01
author: Justin
top: false
cover: false
categories: Neo4j
tags:
  - Neo4j
---

## 一、安装Neo4j
>下面是官方文档：https://neo4j.com/download/ 通过上述网址下载后，记住弹出的key，后续软件的激活需要使用到这个key。

## 二、基础使用方法
1. 新建项目

![image.png](https://img-blog.csdnimg.cn/img_convert/c400736cd64fe60b234662497057b195.png)

2.更改项目名

![image.png](https://img-blog.csdnimg.cn/img_convert/b4f361720e1a8616d921452d547712b3.png)

3. 建立本地数据库或者远程数据库

![image.png](https://img-blog.csdnimg.cn/img_convert/da4db96bf0e744a79022cb98eb66f47d.png)

4. 启动本地数据库

![image.png](https://img-blog.csdnimg.cn/img_convert/88d4c6a2f71e68708a7a071fb9e92f39.png)

5. 通过Neo4j Broswer进行操作

![image.png](https://img-blog.csdnimg.cn/img_convert/bbfe110fc5ef595c373496e14be392e0.png)

## 节点操作
1. 创建节点

```shell
create(:大学{name:"西安电子科技大学"})
```

2. 查看构建好的节点图

![image.png](https://img-blog.csdnimg.cn/img_convert/dc37f8e846e913af3fee861edca6ad96.png)

3. 调整节点显示字体的大小

![image.png](https://img-blog.csdnimg.cn/img_convert/9c8dc157ba5d3bd76d781fa5ce3a2260.png)

4. 获取所有节点

```shell
match(n) return (n)
```

> 下面重点介绍下如何通过py2neo来对Neo4j进行操作。

5. 查询节点

```py
created_node = matcher[node_id]
print(created_node)
```

6. 附带条件的查询

```py
matcher.match('判决文书').where(name = 'XXX刑事判决书').first()
```

7. 返回符合条件的一个节点

```py
temp = selector.match('Person').first()
```

8. 增加和修改节点的属性值

```py
temp['name'] = '001'
```

9. 增加标签

```py
temp.add_label('案件')
graph.push(temp)
```

10. 删除节点

```py
graph.delete(node)
```

11. 创建节点

```py
node = Node('人', name = '张三')
graph.create(node)
```

## 使用py2neo连接数据库

```py
from py2neo import Graph,Node,Relationship,Subgraph
from py2neo.matching import *


graph = Graph("bolt://localhost:7687", auth=("neo4j", "1234"))
success = graph.run("UNWIND range(1, 3) AS n RETURN n, n * n as n_sq")
if (success):
  print("连接成功")
```


## 总结
> py2neo是一个操作Neo4j的python第三方库，我们可以边查询边使用，非常方便，重点参考官方文档和下文的一些重点参考文档。

## 参考文档
* [用py2neo对Neo4j进行数据的增删改查：节点](https://www.cnblogs.com/starmon/p/15412184.html)

* [neo4j︱与python结合的py2neo使用教程](https://blog.csdn.net/sinat_26917383/article/details/79901207)

* [py2neo的简单使用（1）](https://blog.csdn.net/qq_38486203/article/details/79826028)

