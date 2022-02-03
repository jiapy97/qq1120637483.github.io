---
title: 从零开始使用Neo4j构建知识图谱（二）
date: 2022-02-03
author: Justin
top: false
cover: false
categories: Neo4j
tags:
  - Neo4j
---

## 一、Neo4j导入导出数据库

### 导入数据库
> 有时候，我们想要直接导入一个数据库，Neo4j的数据库文件的后缀有一种时dump形式。

1. 点击增加文件到项目中

![image.png](https://img-blog.csdnimg.cn/img_convert/e77cb204843f4995da22ef0bb7605283.png)

2. 选择从dump文件创建新的数据库

![image.png](https://img-blog.csdnimg.cn/img_convert/2a56cd420fa4113f2a012b1cd7b7de73.png)

3. 为新数据库设定数据库名和密码

4. 启动项目

### 导出数据库
> 导出数据库主要包括以下几个步骤。

1. 通过Neo4j Browser暂停数据库服务

2. 通过相关命令行输入下面的代码

```shell
bin/neo4j-admin dump --database=neo4j --to=/dumps/neo4j/neo4j-<timestamp>.dump
```

> 注意事项：首先我们必须在对应的项目的bin目录中输入上面的命令，下面介绍下如何定位到bin目录

* 首先进入相关项目的命令行
* 输入ls查看当前所在的位置
* 从这个位置出发找到bin目录

> --to后面跟的其实是对应盘的根目录。

## 二、通过py2neo执行Cypher语句
> 主要是通过run方法来执行相关语句，返回的是一个迭代器，这个迭代器只有通过遍历才能够获取数据。

```py
find_test = graph.run("match (n:Person{name: 'test_node'}) return n")
for i in find_test:
    print(i)
```

## 三、删除节点之间的关系
> 注意：下面的删除方法可能会把相应的节点也删掉。

```shell
MATCH (p1:Dependency)-[r:依赖于]-(p2:Dependency) DELETE r
```

## 四、基本查询方法

1. 显示数据库的状态

```shell
SHOW DATABASE neo4j;
```

2. 显示所有数据库的状态

```shell
SHOW DATABASES;
```

3. 创建数据库

```shell
CREATE DATABASE sales;
```

4. 切换数据库

```shell
:use sales
```

5. 停止数据库

```shell
STOP DATABASE sales;
```

6. 启动数据库

```shell
:use system
START DATABASE sales;
```

## 官方参考文档
* [Neo4j官方文档](https://neo4j.com/docs/operations-manual/current/backup-restore/offline-backup/)

