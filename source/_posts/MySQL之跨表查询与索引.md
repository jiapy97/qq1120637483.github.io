---
title: MySQL之跨表查询与索引
date: 2021-11-07
author: Justin
top: false
cover: false
categories: MySQL
tags:
  - MySQL
---

## 一、笛卡尔积连接
>在演示笛卡尔积连接之前，我们先看看相关表的结构：

* article表

![image.png](https://img-blog.csdnimg.cn/img_convert/c5b9bf60cec23803053de4f809fffb71.png)

* article_cate表

![image.png](https://img-blog.csdnimg.cn/img_convert/0020900a48bec5aa879069343b377c38.png)

>笛卡尔积连接就是实现跨表查询的一种方式。

```shell
select article.id as id,article.title as title,article.state as state,article_cate.title as cate from article,article_cate where article.cate_id=article_cate.id
```

## 二、内连接
>项目中使用比较多的是内连接来进行跨表查询。内连接主要是加入了INNER JOIN和ON两个关键字。

```shell
select article.id as id,article.title as title,article.state as state,article_cate.title as cate from article INNER JOIN article_cate on article.cate_id = article_cate.id; 
```

>其他方法：使用IN来进行查询，例如：张三选修的课程id对应的课程名称是什么，我们首先看下数据表的结构：

* lesson表

![image.png](https://img-blog.csdnimg.cn/img_convert/4a732035774793bbe1509b305318b1e8.png)

* student表

![image.png](https://img-blog.csdnimg.cn/img_convert/8f49738ee4289bf02a3341ac3797ee2d.png)

* lesson_student表

![image.png](https://img-blog.csdnimg.cn/img_convert/d57bb1fdd815a5d06bb609c3aa39cfd2.png)

>查询张三选修的课程的名称

```shell
select * from lesson where id in (select lessonId from lesson_student where studentId=1);
```

>查询哪些学生选修了Java程序设计

```shell
select * from student where id in (select studentId from lesson_student where lessonId=2);
```

## 三、MySQL索引
>当查询海量数据的时候，通过索引可以增加查询的效率，极大的降低查找的时间。

1. 创建索引

>给name创建索引名为index_name。

```shell
create index index_name on student(name);  
```

2. 查看索引

```shell
show index from student;
```

3. 删除索引

```shell
drop index index_name on student;
```

4. 创建唯一索引

```shell
create unique index index_name on student(name);
```

>我们也可以通Navicat等可视化工具来设置索引，通过右键选择某个数据表，选择设计表，然后添加索引。

![image.png](https://img-blog.csdnimg.cn/img_convert/c090938874c2e6efe7f14c9cc686d508.png)


