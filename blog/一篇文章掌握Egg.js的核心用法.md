---
title: 一篇文章掌握Egg.js的核心用法
date: 2021-10-26
author: Justin
top: false
cover: false
categories: Egg.js
tags:
  - Egg.js
---
## 快速创建一个egg项目
1. 创建一个文件夹并进行自定义命名
```shell
mkdir 自定义名字
```
2. 进入上述文件夹，并初始化egg
```shell
npm init egg --type=simple
```
3. 安装依赖
```shell
npm install
```
4. 运行项目
```shell
npm run dev
```
## 推荐使用下面的方式创建项目
1. 首先全局安装egg-init
2. 使用egg-init创建项目
3. 进入项目
4. 安装依赖
5. 运行

```js
npm i egg-init -g
egg-init eggname --type=simple
cd eggname
npm i
npm run dev
```

## Egg的目录结构
![image.png](https://img-blog.csdnimg.cn/img_convert/3527084bad42607855874313f2515370.png)

### 1. app文件夹
>app文件夹是我们的主要项目文件夹。

### 2. config文件夹
>config文件夹是我们的主要配置文件和插件配置的位置。

### 3. logs文件夹
>logs文件夹是我们的日志文件夹，一般不适用。

### 4. node_modules文件夹
>这个文件夹是我们的模块安装的文件夹。

### 5. package.json文件
>当前项目所下载的依赖，以及启动设置等。

## Egg的约定规范
### 路由写在哪里？
>路由写在app下的router.js
![image.png](https://img-blog.csdnimg.cn/img_convert/c6ac8dc5d501b96a6d24ac7df1fe2680.png)

### 模板写在哪里？
>模板写在app文件夹下面的view文件夹中
![image.png](https://img-blog.csdnimg.cn/img_convert/c28243451d880ecbe23e342e0cdda88d.png)

### 查询数据，获取数据写在哪里？
>写在app文件夹下面的service文件夹中。
![image.png](https://img-blog.csdnimg.cn/img_convert/3b3126dd38199d734b217eb34a94326f.png)

### 业务逻辑写在哪里？
>Controller负责处理业务逻辑。
![image.png](https://img-blog.csdnimg.cn/img_convert/4e6ad931685c19fb2e0deb9af1683777.png)

### 判断权限写在哪里？
>写在app文件夹下的middleware文件夹中。
![image.png](https://img-blog.csdnimg.cn/img_convert/a9b139d000dd254d5cd99fa641e3abfe.png)

### 静态文件放在哪里？
>静态文件放在app文件夹下的public文件夹中。
![image.png](https://img-blog.csdnimg.cn/img_convert/fc741928037aa10230bfc7446ebc057d.png)

### 拓展功能写在哪里？
>app文件夹下的extend文件夹中。
![image.png](https://img-blog.csdnimg.cn/img_convert/a16bb4351a9a033415bba366df64ffa5.png)

## 配置Egg的代码提示
1. 安装eggjs插件
![image.png](https://img-blog.csdnimg.cn/img_convert/f78f13ba8c92261f808c1aacff0d6399.png)

2. 如果没有提示找到下面的文件，并修改为下面的内容

![image.png](https://img-blog.csdnimg.cn/img_convert/1daed3103db8fb025edb7ce9574bddfb.png)
```json
{
    "egg-controller": {
            "scope": "javascript,typescript",
            "prefix": "egg controller",
            "body": [
                    "'use strict';",
                    "const Controller = require('egg').Controller;",
                    "class $1Controller extends Controller {",
                            "    async index() {",
                                    "        const { ctx } = this;",
                                    "        ctx.body = '$2';",
                                    "    }",
                            "}",
                            "module.exports = $1Controller;",
            ],
            "description": "egg 控制器的代码提示"
    },

    "egg-service": {
            "scope": "javascript,typescript",
            "prefix": "egg service",
            "body": [
                    "const Service = require('egg').Service;",
                    "class $1Service extends Service {",
                            "    async find(uid) {",
                                    "        const sql = ``;",
                                    "        const data = await this.app.mysql.query(sql);",
                                    "        return data;",
                                    "    }",
                            "}",
                            "module.exports = $1Service;",
            ],
            "description": "egg 控制器的代码提示"
    },

    "myjuqery": {
            "prefix": "myjuqery",
            "body": [
                    "<script src='http://code.jquery.com/jquery-3.4.1.min.js'></script>"
            ],
            "description": "导入juqery工具包"
    },

    "myaxios": {
            "prefix": "myaxios",
            "body": [
                    "<script src='https://unpkg.com/axios/dist/axios.min.js'></script>"
            ],
            "description": "导入axios工具包"
    },
    "react-class": {
            "scope": "javascript,typescript",
            "prefix": "reactclass",
            "body": [
                    "import React from 'react';",
                    "import '../css/$1.css'",
                    "",
                    "class $1 extends React.Component {",
                    "    render() {",
                    "        return (",
                    "",
                    "        );",
                    "    }",
                    "}",
                    "export default $1;",
            ],
            "description": "react 类组件的代码提示"
    },
    "react-function": {
            "scope": "javascript,typescript",
            "prefix": "reactfunction",
            "body": [
                    "import React from 'react';",
                    "",
                    "function $1() {",
                    "     return (",
                    "",
                    "     );",
                    "}",
                    "",
                    "export default $1;",
            ],
            "description": "react 函数组件的代码提示"
    }
}
```

## Egg如何获取数据处理数据？
### Egg给客户端响应数据。
```js
this.ctx.body = 'xxx'
```
### Egg获取客户端的请求参数
```js
this.ctx.query
```
### 配置动态路由并获取参数
1. 动态路由配置
```js
router.get('/newslist/:id',controller.news.newslist);
```
2. 获取参数
```js
this.ctx.params
```
>注意：配置完动态路由之后，如果访问的路由不带参数返回的是404.

## 配置模板引擎
1. 安装插件
```js
npm i egg-view-ejs --save
```
2. 进行项目配置
* plugin.js
```js
exports.ejs = {
    enable: true,
    package: 'egg-view-ejs',
};
```
* config.default.js
```js
// 配置模板引擎
config.view = {
    mapping: {
        '.html': 'ejs',
    },
};
```
3. 异步调用render
```js
await ctx.render('index.html')
```
>egg会自动向view文件夹中寻找index.html文件的。下面介绍一个index.html实例。

```html
<h1>新闻页面</h1>
<%=msg%>
<h2>下面是一个for循环</h2>
<%
    for(let i = 0; i < list.length; i++) { %>
        <li><%=list[i]%></li>
    <%}
%>
```

## 访问Egg项目中的静态资源
>在路径中带上public即可。
```html
<img src="/public/images/CSS.png" alt="">
```

## 控制器获取service提供数据的方法
* Controller/news.js
```js
const list = await this.service.news.getNewsList();
await ctx.render('index.html',{
    msg,
    list
})
```
* service/news.js
```js
async getNewsList () {
    const list = [1,2,3,4]
    return list;
}
```
>注意：不只是控制器可以调用服务的数据，一个服务也可以调用另一个服务的数据。

    
