---
title: 使用egg-mysql操作MySQL数据库
date: 2021-11-09
author: Justin
top: false
cover: false
categories: Egg.js
tags:
  - Egg.js
---

## MySQL事务
>事务处理可以用来维护数据库的完整性，保证成批的SQL语句，要么全部执行，要么全部不执行。当批量执行SQL的时候，事务可以保证我们数据的一致性。

>下面是完整的执行流程

```shell
begin;

update user set balance = balance - 100 where id = 1;

update user set balance = balance + 100 where id = 2;

commit;
```

>如果遇到错误，可以不commit，而是使用rollback进行事务回滚。

## MySQL锁
### 1. 添加读锁
>设置读锁期间，在没释放锁之前是不能进行写操作的。

```shell
lock table user read;

update user set username="李四" where id = 3;
```

>上面的用法会报错：Table 'user' was locked with a READ lock and can't be updated。

>只有解除锁的时候才可以进行写操作。

```shell
lock table user read;
unlock tables;

update user set username="李四" where id = 3;
```

>上面的写法是正确的。

### 2. 添加写锁
>只有锁表的用户可以进行读写操作，其他用户即不能读也不能写。只有释放这个锁的时候才可以进行读写，因此在演示的时候，建议开启两个不同的命令行进行演示。

```shell
lock table user write;

select * from user;

update user set username = "333" where id = 3;

unlock tables;
```

## 使用egg-mysql操作MySQL数据库
### 配置egg-mysql
>egg-mysql的插件地址：https://www.npmjs.com/package/egg-mysql

1. 安装插件

```shell
npm i egg-mysql
```

2. 启用插件

>在config/plugin.js中启用这个插件，如果此时已经有了其他的插件，我们可以通过并行的方式进行添加，请看下面的例子。

```js
exports.ejs = {
  enable: true,
  package: 'egg-view-ejs'
};

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
```

3. 配置数据库的连接

>找到config.default.js文件，并在其中添加下面的语句进行配置连接数据库。

```js
exports.mysql = {
  // database configuration
  client: {
    // host
    host: 'mysql.com',
    // port
    port: '3306',
    // username
    user: 'test_user',
    // password
    password: 'test_password',
    // database
    database: 'test',    
  },
  // load into app, default is open
  app: true,
  // load into agent, default is close
  agent: false,
};
```

### 对数据库数据的增删改查
>更多关于对数据库的操作方法，请查询网址：https://eggjs.org/zh-cn/tutorials/mysql.html#read

#### 读取数据

```js
// 查询一条数据
const result = await this.app.mysql.get('user',{"id": 3});
// 查询全部数据
const all = await this.app.mysql.select('user',{});
// 带限制条件的
const all = await this.app.mysql.select('user',{
  where: {"id": 3}，
  // 升序排列
  orders: [["id","asc"]]
});
```

#### 添加数据
```js
const add = await this.app.mysql.insert('user',{username: '秦始皇',balance: '100000'});
```

#### 修改数据
1. 根据主键进行修改

```js
// 根据主键进行修改
const row = {
  id: 3,
  username: '王五'
}
const result = await this.app.mysql.update('user',row);
```

2. 通过原生SQL语句来修改数据

```js
const result = await this.app.mysql.query('update user set username=? where id = ?',["皇家礼炮",5]);
```

#### 删除数据
>下面的删除方式会把所有符合条件的都删除掉。

```js
const result = await this.app.mysql.delete('user',{
      username: '秦始皇'
    })
```

### 操作MySQL事务
>使用事务的时候，如果出现错误，不会真正的执行SQL语句，防止造成不同步的问题。

```js
// mysql事务
const conn = await this.app.mysql.beginTransaction();

try {
  // await conn.insert(table, row1);
  // await conn.update(table, row2);

  // 增加数据
  await conn.query('update user set username=? where id = ?',["皇家礼炮666",5]);
  await conn.insert('user',{username: '秦始皇2',balance: '100000'});

  await conn.commit();
} catch (err) {
  // error, rollback
  await conn.rollback(); // rollback call won't throw err
  throw err;
}
```







