---
title: Egg中使用Sequelize ORM框架操作MySQL--关联查询
date: 2021-11-16
author: Justin
top: false
cover: false
categories: Egg.js
tags:
  - Egg.js
---

## 一、Sequelize自定义表名
>只需在定义model的时候，加入tableName字段即可。

```js
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: STRING(30),
    age: INTEGER,
    sex: STRING(30),
    created_at: DATE,
    updated_at: DATE,
  },{
    tableName: "usera"
  });

  return User;
};
```

* 设置不显示createdAt等时间戳字段

```js
{
    tableName: "usera",
    timestamps: false
}
```

## 使用Sequelize实现多表查询
>注意：如果数据库中使用的是下划线命名法，在model中需要使用驼峰命名法。

### 一对一查询

* article表的结构

![image.png](https://img-blog.csdnimg.cn/img_convert/08dbdc25a0082ec04a496d65db0aeb97.png)

* article_cate表的结构

![image.png](https://img-blog.csdnimg.cn/img_convert/6fe24d92b5e495a32c7d7885c2979e99.png)

* article的model

```js
'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Article = app.model.define('article', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING(255),
    description: STRING(255),
    cateId: INTEGER,
    state: INTEGER
  },{
    tableName: "article",
    timestamps: false
  });
  // 实现关联的核心代码是下面的语句
  Article.associate = function() {
    // 1对1
    app.model.Article.belongsTo(app.model.ArticleCate,{foreignKey: 'cateId'});
  }

  return Article;
};
```

* article_cate的model

```js
'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const ArticleCate = app.model.define('article_cate', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING(255),
    state: INTEGER
  },{
    tableName: "article_cate",
    timestamps: false
  });

  return ArticleCate;
};
```

* 一对一查询方法

```js
async onevsone() {
    const result = await this.ctx.model.Article.findAll({
      include: {
        model: this.ctx.model.ArticleCate
      }
    });
    this.ctx.body = result;
  }
```

>查询到的结果如下图所示：


![image.png](https://img-blog.csdnimg.cn/img_convert/ad148cedc17a0f67e088a8290b718f26.png)

### 一对多查询

* article_cate.js

```js
ArticleCate.associate = function () {
    // 1对1
    app.model.ArticleCate.hasMany(app.model.Article, { foreignKey: 'cateId' });
    
  }
```

* 路由

```js
  async onevsmany() {
    const result = await this.ctx.model.ArticleCate.findAll({
      include: {
        model: this.ctx.model.Article
      }
    });
    this.ctx.body = result;
  }
```

### 多对多查询
>多对多查询主要是使用belongsToMany。

* 一门课程可以被多个学生选修

```js
Lesson.associate = function(){
//一个课程可以被多个学生选修
    app.model.Lesson.belongsToMany(app.model.Student, {
    through: app.model.LessonStudent,
    foreignKey: 'lessonId',
    otherKey: 'studentId'
    });
}
```

* 一个学生可以选修多门课程（代码中的through指的是中间表）

```js
Student.associate = function (){
    //一个学生可以选修多门课程
    app.model.Student.belongsToMany(app.model.Lesson, {
    through: app.model.LessonStudent,
    foreignKey: 'studentId', //注意写法
    otherKey: 'lessonId'
    });
}
```

* 查询语句

```js
const { ctx } = this;
let result = await ctx.model.Student.findAll({
    include: {
    model: ctx.model.Lesson
    }
});
```

