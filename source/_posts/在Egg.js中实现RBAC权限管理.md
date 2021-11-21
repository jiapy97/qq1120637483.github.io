---
title: 在Egg.js中实现RBAC权限管理
date: 2021-11-21
author: Justin
top: false
cover: false
categories: Egg.js
tags:
  - Egg.js
---

## 什么是RBAC？
>RBAC是基于角色的权限访问控制，在RBAC中，权限与角色相关联，用户通过成为适当角色的成员而得到这些角色的权限，也就是说权限是和角色绑定在一起的。

## RBAC权限管理树形图

![image.png](https://img-blog.csdnimg.cn/img_convert/bde90ef7781e5550894e6263062eae38.png)

## 角色管理
### 增加角色
* 静态页面中通过post进行提交的时候，需要配置csrf

```js
<input type="hidden" name="_csrf" value="<%=csrf%>" />
```

* 在增加角色的控制器中首先获取到请求的角色名，如果角色名为空，则渲染基类控制器中的错误提示，如果不为空，则通过sequelize中的model来操作数据库，并将指定内容添加到数据库中。

```js
  async doAdd() {
    const title = this.ctx.request.body.title;
    if (title != '') {
      await this.ctx.model.Role.create({
        title,
        description: this.ctx.request.body.description,
        status: 1,
        addTime: this.service.tools.getUnixTime()
      })
      await this.success("增加角色成功", `/${this.config.adminPath}/role`)
    } else {
      await this.error("角色名不能为空", `/${this.config.adminPath}/role/add`)
    }
  }
```

### 编辑角色
#### 跳转到编辑页面
>为了防止前端请求到错误的id，需要通过异常处理的方式，让错误的请求跳转到基类控制器中的错误提示页面，如果请求正常，则查询请求id，然后渲染到编辑的页面。

```js
  // 跳转编辑页面
  async edit() {
    try {
      const id = this.ctx.request.query.id;
      let result = await this.ctx.model.Role.findAll({
        where: {
          id
        }
      })
      console.log(result);
      await this.ctx.render('admin/role/edit', {
        list: result[0]
      });
    } catch (error) {
      await this.error("非法请求", `/${this.config.adminPath}/role`)
    }
  }
```

#### 执行编辑功能
>首先获取到post请求的id，然后根据这个id到数据库中去查询，然后判断是否查询到，如果没有查询到则报错，查询到了则更新数据。

```js
  // 执行编辑功能
  async doEdit() {
    let id = this.ctx.request.body.id;
    let role = await this.ctx.model.Role.findByPk(id);
    if (!role) {
      await this.error("非法请求", `/${this.config.adminPath}/role/edit?id=${id}`)
      return
    }
    await role.update(this.ctx.request.body);
    await this.success("修改数据成功", `/${this.config.adminPath}/role`);
    this.ctx.body = "修改已被执行"
  }
```

>注意：在编辑角色的时候，静态页面传递id的时候可以通过隐藏表单的形式来进行传递。

```js
<input type="hidden" name="id" value="<%=list.id%>">
```


### 删除角色
>首先获取到要删除的id，然后根据主键去查询这个角色，如果没有查到则报错，查到的话则删除。

```js
  // 删除角色功能的实现
  async delete() {
    let id = this.ctx.request.query.id;
    let role = await this.ctx.model.Role.findByPk(id);
    if (!role) {
      await this.error("非法请求", `/${this.config.adminPath}/role`);
      return;
    }
    await role.destroy();
    await this.success("删除数据成功", `/${this.config.adminPath}/role`);
  }
```

## 管理员数据表与角色表进行关联
>首先，我们要明确管理员数据表和角色表是通过哪一个字段进行关联的，是通过角色id进行关联的，所以，我们首先在admin的model中通过belongsTo进行关联。

* model下的admin.js

```js
  Admin.associate = function() {
    app.model.Admin.belongsTo(app.model.Role,{foreignKey: 'roleId'})
  }
```

* 在控制器中进行关联查询的方式

```js
let result = await this.ctx.model.Admin.findAll({
      include: {model: this.ctx.model.Role}
    });
```

## 权限管理
### 权限表的自关联
>之所以要进行自关联是因为，一个菜单或者模块如果属于一个顶级模块的话，顶级模块的id和其子项的module_id是一致的，这一点可以从下面的数据表中可以看出。

![image.png](https://img-blog.csdnimg.cn/img_convert/bfecd5ac5a0054df9005ee5ea94fb066.png)

>在access.js中实现下面的功能。

```js
  // 进行数据表的自关联
  Access.associate = function() {
    app.model.Access.hasMany(app.model.Access,{foreignKey: 'moduleId'});
  }
```

### 修改权限

```js
  async edit() {
    // 修改权限
    let id = this.ctx.request.query.id;
    // console.log(id);
    let accessResult = await this.ctx.model.Access.findAll({
      where: {
        id
      }
    });
    // console.log(accessResult[0]);
    // 获取顶级模块
    let accessList = await this.ctx.model.Access.findAll({
      where: {moduleId: 0}
    });

    await this.ctx.render("admin/access/edit",{
      access: accessResult[0],
      accessList
    })
  }
```

## 角色与权限进行关联
>角色与权限进行关联主要是通过一个中间数据表来进行关联，下面是这个数据表的结构。

![image.png](https://img-blog.csdnimg.cn/img_convert/bbfbafd71bfe896e5fd9c2a1731bc4dd.png)

## 进入角色授权界面，显示该角色已经拥有的权限
>进入显示授权页面的控制器。

1. 获取要授权的角色ID。
2. 获得所有的权限列表。
3. 定义一个临时数组并找到第一步角色id对应的权限，并将其权限id添加到临时数组中。
4. 将所有权限数组通过转换为字符串后再转换为JSON，然后通过两层循环将其添加标记后再进行渲染。

```js
  // 授权
  async auth() {
    // 获取要给哪个id的角色进行授权
    let roleId = this.ctx.request.query.id;
    let allAuthResult = await this.ctx.model.Access.findAll({
      where: {moduleId: 0},
      include: {model: this.ctx.model.Access}
    });
    let tempArr = [];
    let roleAuthResult = await this.ctx.model.RoleAccess.findAll({where: {roleId}});

    for (let v of roleAuthResult) {
      tempArr.push(v.accessId);
    }

    allAuthResult = JSON.parse(JSON.stringify(allAuthResult));

    for (let i = 0; i < allAuthResult.length; i++) {
      if (tempArr.indexOf(allAuthResult[i].id) != -1) {
        allAuthResult[i].checked = true;
      }
      for (let j = 0; j < allAuthResult[i].accesses.length; j++) {
        if (tempArr.indexOf(allAuthResult[i].accesses[j].id) != -1) {
          allAuthResult[i].accesses[j].checked = true;
        }
      }
    }

    // this.ctx.body = allAuthResult;

    await this.ctx.render('admin/role/auth',{
      authList: allAuthResult,
      roleId
    });
  }
```

## 用户权限判断
>判断当前登录用户的权限，防止用户访问没有授权的页面。

1. 在service中定义函数来判断用户请求的URL是否有权限访问。
2. 定义一个可以忽略的URL数组，在这个数组中的请求都是直接允许所有用户访问的，比如退出登录，如果是超级管理员或者请求URL在上述的数组中，直接返回true。
3. 获取角色id对应的所有权限，然后去权限表中查询当前请求URL对应的id，如果在上述的数组中，则返回true，反之返回true。

```js
class AdminService extends Service {
  async checkAuth() {
    let roleId = this.ctx.session.userinfo.roleId;
    let isSuper = this.ctx.session.userinfo.isSuper;
    let adminPath = this.config.adminPath;
    let pathname = this.ctx.request.url;
    pathname = pathname.split("?")[0];

    // 忽略权限判断的地址
    
    if (this.config.ignoreUrl.indexOf(pathname) != -1 || isSuper === 1) {
      return true;
    }
    let roleAccessArr = [];
    let roleAuthResult = await this.ctx.model.RoleAccess.findAll({
      where: {roleId}
    });
    for (let i = 0; i < roleAuthResult.length; i++) {
      roleAccessArr.push(roleAuthResult[i].accessId);
    }

    // 获取当前访问的URL，对应的权限ID
    let accessUrl = pathname.replace(`/${adminPath}/`,'');
    let accessUrlResult = await this.ctx.model.Access.findAll({
      where: {url: accessUrl}
    });
    if (accessUrlResult.length) {
      if (roleAccessArr.indexOf(accessUrlResult[0].id) != -1) {
        return true;
      }
      return false;
    }
    return false;

  }
}
```




