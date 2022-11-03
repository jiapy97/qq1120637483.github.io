---
title: MySql基础命令与查询方法
date: 2021-11-06
author: Justin
top: false
cover: false
categories: MySQL
tags:
  - MySQL
---

## 一、连接MySQL
1. 首先安装MySQL,然后开启相关服务。

![image.png](https://img-blog.csdnimg.cn/img_convert/f56fb95408bbed4444eeb74c746b2664.png)

2. 运行MySQL

```shell
mysql -u root -p
```

## 二、运行Navicat可视化工具
1. 在Navicat中连接MySQL数据库

![image.png](https://img-blog.csdnimg.cn/img_convert/99d8a3d95179aab1f3d0a0acfc4389c9.png)

2. 在本地新建一个数据库

![image.png](https://img-blog.csdnimg.cn/img_convert/8671a5025268c9822063ffd3f3880b02.png)

3. 在数据库中新建一个表，表建立相应的字段

![image.png](https://img-blog.csdnimg.cn/img_convert/55b7598330feca6039663fda3b05c9d3.png)

## 三、MySQL的基础命令
* 首先启动MySQL服务，然后通过下面的命令连接数据库

```shell
mysql -u root -p
```

* 显示当前存在的数据库

```shell
show databases;
```

* 选择想要操作的数据库

```shell
use xxx;
```

>当出现Database changed表示切换成功！

* 查看当前数据库都有哪些数据表

```shell
show tables;
```

* 查看指定表中都有哪些数据

```shell
select * from xxx
```

* 指定查询表中的哪些字段

```shell
select xxx from xxx;
```

* 指定查询条件

```shell
select * from user where id=1;
select * from user where id>1;
```

* 创建一个数据库

```shell
create database xxx;
```

* 添加数据表

```shell
create table users(
id int(11),
username varchar(255),
age int(3)
);
```

* 显示表的结构

```shell
describe users;
```

* 向表中添加数据

```shell
insert into users(id,username,age) values (1,'王五',18);
```

* 修改指定的数据(将user表中id为1的字段的username修改为：王五)

```shell 
update user set username="王五" where id=1;
```

* 修改多个字段的情况

```shell
update user set username="王五",id=666 where id=1;
```

* 删除指定的数据

```shell
delete from user where id=666;
```

* 对数据进行升序排列

```shell
select * from user order by id asc;
```

* 对数据进行降序排列

```shell
select * from user order by id desc;
```

* 对某个表统计数量

```shell
select count(1) from user;
```

* 只查询指定数量的数据

>下面的方法只会查询前两条数据。

```shell
select * from user limit 1;
```

* 跳过两条，查询1条

```shell
select * from user limit 2,1;
```

* 删除指定的表

```shell 
drop table test;
```

* 删除指定的数据库

```shell
drop database test;
```

## 四、MySQL中的模糊查询
* 将邮件信息中包含qq.com的都选出来

```shell
select * from class where email like "%qq.com%";
```

* 查询email中以node开头的

```shell
select * from class where email like "node%";
```

* 查询email中以163.com结尾的元素

```shell
select * from class where email like "%163.com";
```

## 五、MySQL中的分组函数

![image.png](https://img-blog.csdnimg.cn/img_convert/355f4b120a354b56d8e96dfe4c2a5591.png)


```shell
select avg(score) from class;
select count(score) from class;
select max(score) from class;
select min(score) from class;
select sum(score) from class;
```

>复合条件查询

```shell
select * from class where score in (select max(score) from class);
```

## 六、MySQL别名

```shell
select id,name as n,email as e,score as s from class;
```

## 七、MySQL表与表之间的关系
>表与表之间一般存在三种关系，即一对一，一对多和多对多关系。


