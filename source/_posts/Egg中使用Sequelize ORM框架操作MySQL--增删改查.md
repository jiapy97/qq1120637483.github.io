---
title: Egg中使用Sequelize ORM框架操作MySQL--增删改查
date: 2021-11-11
author: Justin
top: false
cover: false
categories: Egg.js
tags:
  - Egg.js
---

## 一、什么是Sequelize？
>Sequelize是一个基于Promise的Node.js ORM，它具有强大的事务支持，关联关系，预读和延迟加载，读取复制等功能。

## 二、使用Sequelize操作MySQL数据库
>更多操作方法，请参考官方文档：https://eggjs.org/zh-cn/tutorials/sequelize.html

1. 安装egg-sequelize以及mysql2

2. 在config/plugin.js中引入egg-sequelize插件

```js
exports.sequelize = {
    enable: true,
    package: 'egg-sequelize'
};
```

3. 在config/config.default.js中添加下面的配置

```js
config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'bank',
    username: 'root',
    password: "123456"
  };
```

## 三、Sequelize操作MySQL实现数据的增删改查
1. 在app下新建文件夹model，并在model中创建文件user.js

>注意：如果define中的是user，我们定义的数据表要是users，也就是说需要是复数形式。

```js
'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: STRING(30),
    age: INTEGER,
    sex: STRING(30),
    created_at: DATE,
    updated_at: DATE,
  });

  return User;
};
```

2. 可以通过Navicat可视化工具建立下面的数据表结构

![image.png](https://img-blog.csdnimg.cn/img_convert/24bfb7648cc587679d94fbe5e428a223.png)

### 增加数据

```js
  // 增加数据
  async create() {
    const user = await this.ctx.model.User.create({username: "张三",age: 20});
    this.ctx.body = user;
  }
```

### 查询数据

>更多其他的查询方法,请查看官方文档:https://www.sequelize.com.cn/core-concepts/model-querying-finders

1. 查询所有数据

```js
  // 查询数据
  async query() {
    const userList = await this.ctx.model.User.findAll();
    this.ctx.body = userList;
  }
```

2. 查询指定字段的数据

```js
// 查询指定字段的数据
const userList = await this.ctx.model.User.findAll({attributes: ['id','username']});
```

3. 应用where进行查询

```js
const userList = await this.ctx.model.User.findAll({where: {"id": 2}});
```

4. 对数据进行排序

```js
const userList = await this.ctx.model.User.findAll({order: [['id', 'ASC']]});
```

### 修改数据

* 根据主键进行修改

```js
  async update() {
    // 根据主键修改
    const user = await this.ctx.model.User.findByPk(2);
    user.update({"username": "秦二世","age": 10});
    this.ctx.body = "修改成功"
  }
```

### 删除数据

* 根据主键删除某个数据

```js
  async delete() {
    const data = await this.ctx.model.User.findByPk(2);
    if (!data) {
      this.ctx.state = 404;
      return;
    }
    data.destroy();
    this.ctx.body = "删除成功";
  }
```


