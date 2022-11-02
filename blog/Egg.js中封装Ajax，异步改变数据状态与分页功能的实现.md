---
title: Egg.js中封装Ajax，异步改变数据状态与分页功能的实现
date: 2021-12-11
author: Justin
top: false
cover: false
categories: Egg.js
tags:
  - Egg.js
---

## 实现点击页面上的符号即修改数据库中的数据并进行显示

### 静态页面设置
```js
<td class="text-center chStatus" data-adminPath="<%=adminPath%>" data-id="<%=list[i].id%>" data-model="Product" data-field="status">
<%if(list[i].status == 1){%>
  <img src="/public/admin/images/yes.gif" alt="">
  <%}else{%>
    <img src="/public/admin/images/no.gif" alt="">
  <%}%>
</td>
```

### 通过Jquery进行逻辑控制
1. 首先获取静态页面的数据。
2. 然后将数据通过ajax请求发送到指定的路由。
3. 根据控制器返回的数据，进一步控制页面的显示。

```js
$(function () {
  app.init();
})

var app = {
  init: function () {
    this.changeStatus();
  },
  changeStatus: function() {
    $(".chStatus").click(function() {
      var adminPath = $(this).attr("data-adminPath");
      var id = $(this).attr("data-id");
      var model = $(this).attr("data-model");
      var field = $(this).attr("data-field");
      var el = $(this).find("img");
      $.get("/" + adminPath + "/changeStatus",{"adminPath": adminPath,"id" :id,"model": model,"field": field},function (response) {
        if (response.success) {
          if (el.attr("src").indexOf("yes") != -1) {
            el.attr("src","/public/admin/images/no.gif");
          } else {
            el.attr("src","/public/admin/images/yes.gif");
          }
        }
      })
    })
  }
}
```

### 控制器动态控制数据的值
>控制器主要是获取传过来的数据，然后根据model和field进行动态的显示，这是一种复用的方法，指的我们学习和借鉴。

```js
async changeStatus() {
    let model = this.ctx.request.query.model;
    let field = this.ctx.request.query.field;
    let id = this.ctx.request.query.id;
    
    let modelObj = await this.ctx.model[model].findByPk(id);
    let json = {};
    if (!modelObj) {
      this.ctx.body = {"success": false,"msg": "参数错误"};
      return;
    } else {
      if (modelObj[field] == 1) {
        json = {
          [field]: 0
        }
      } else {
        json={
          [field]: 1
        }
      }
    }
    await modelObj.update(json);
    this.ctx.body = {
      "success": true,"msg": "更新数据成功"
    }
  }
```

## 分页功能的实现
### 后端通过egg-sequelize实现
>下面的代码中重点通过limit和offset实现，offset设置为(page - 1) * pageSize是一个分页公式。

```js
async index() {
    let page = this.ctx.request.query.page ? this.ctx.request.query.page : 1;
    let pageSize = 5;
    let result = await this.ctx.model.Product.findAll({
      include: { model: this.ctx.model.ProductCate },
      limit: pageSize,
      offset: (page - 1) * pageSize
    });
    await this.ctx.render('admin/product/index', {
      list: result
    })
  }
```

### 前端通过引入jqPaginator.js实现
1. 引入文件

```js
<script type="text/javascript" src="/public/admin/js/jqPaginator.js"></script>
```

2. 定义容器

```js
<div id="pagination" class="pagination" style="display: flex; justify-content: center" >

</div>
```

3. 定义跳转逻辑

>注意：此时要注意避免出现死循环的情况。

```js
<script>
  $('#pagination').jqPaginator({
    totalPages: <%=totalPages%>,
    visiblePages: 5,
    currentPage: <%=page%>,
    onPageChange: function(num,type) {
      if (type == "change") {
        location.href="/<%=adminPath%>/product?page=" + num;
      }  
    }
  });
</script>
```
    