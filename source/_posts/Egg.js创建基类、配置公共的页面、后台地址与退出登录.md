---
title: Egg.js创建基类、配置公共的页面、后台地址与退出登录
date: 2021-11-18
author: Justin
top: false
cover: false
categories: Egg.js
tags:
  - Egg.js
---

## 通过HTML的meta标签实现指定时间后的页面跳转

```html
<meta http-equiv="refresh" content="3;url=http://www.baidu.com"> 
```

## 创建基类
### 为什么要创建基类？
>之所以要创建基类，是因为我们希望复用一些通用的逻辑，比如登录成功如何操作，登录出现错误如何操作，这就是我们为什么要创建基类的根本原因。

### 实现方法
1. 首先在控制器下创建一个base.js文件

2. 在文件中定义需要被复用的异步函数。

```js
'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  async success(msg,redirectUrl) {
    await this.ctx.render("admin/public/success",{
      msg,
      redirectUrl
    })
  }
  async error(msg,redirectUrl) {
    await this.ctx.render("admin/public/error",{
      msg,
      redirectUrl
    })
  }
}

module.exports = BaseController;
```

3. 需要用到基类的地方需要修改继承。

```js
const BaseController = require('./base.js');
class LoginController extends BaseController{};
```

4. 通过this异步调用this中的方法

```js
await this.success("登录成功","/admin")
```

## 配置公共的成功失败的页面
1. 在view下的指定文件夹内部定义成功的静态页面和错误的静态页面。
2. 通过meta标签实现指定时间后跳转。
3. 通过ejs模板接收传入的参数。

```js
<%- include ../public/page_header.html %>

 <meta http-equiv="refresh" content="1;url=<%=redirectUrl%>"> 

 <div class="container" style="width: 480px;margin-top:100px;">

    <div class="row">                 
            <div class="alert alert-success">            	
                <h2><%=msg%></h2>   
            	
            	<br />
            		
            	<p>如果您不做出选择，将在 3秒后跳转到第一个链接地址。</p>            
            
            </div>       
    </div>
</div>

</body>
</html>
```

## 配置可以修改的后台地址
>之所以要配置可以修改的后台地址是为了在修改路径的时候，只需修改配置文件中的地址即可，避免了一个一个修改的繁琐。

1. 在config.default.js中指定后台路径。
2. 指定中间件匹配上文提到的路径，并将这个指定的路径传入到中间件中。

```js
  config.adminPath = "aaa";
  config.adminAuth = {
    match: `/${config.adminPath}`,
    adminPath: config.adminPath
  }
```

3. 路由中获取指定路径的方法

```js
const {
    router,
    controller,
    config
  } = app
router.get(`/${config.adminPath}/manager`, controller.admin.manager.index);
```

4. 中间件中通过配置全局变量的方式拿到adminPath

```js
ctx.state.adminPath = options.adminPath;
```

5. 控制器中通过this.config获取路径

```js
await this.error('用户名或密码错误',`/${this.config.adminPath}/login`)
```

6. 静态页面中直接通过模板引擎获取

```js
<li class="list-group-item"> <a href="/<%=adminPath%>/role" target="rightMain"> 角色管理</a></li>
```

>静态页面之所以能够获取到是因为我们第四步配置的中间件，把adminPath配置到了全局变量中了。

## 退出登录功能的实现
1. 在控制器中定义退出的异步函数

>在异步函数中首先要清空session，因为中间件判断登录与否是通过session实现的，退出登录后跳转到登录页面。

```js
  // 退出登录
  async loginOut() {
    this.ctx.session.userinfo = null;
    await this.success("退出成功",`/${this.config.adminPath}/login`);
  }
```

2. 配置路由

```js
router.get(`/${config.adminPath}/login/loginOut`,controller.admin.login.loginOut)
```

3. 点击退出处的静态页面配置

```js
<li><a href="/<%=adminPath%>/login/loginOut">安全退出</a>
```

