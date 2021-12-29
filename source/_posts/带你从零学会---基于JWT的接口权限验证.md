---
title: 带你从零学会---基于JWT的接口权限验证
date: 2021-12-29
author: Justin
top: false
cover: false
categories: Egg.js
tags:
  - Egg.js
---

## 服务端配置JWT的方法
1. 安装jsonwebtoken第三方工具包

```shell
npm i jsonwebtoken
```

2. 引入jwt

```js
var jwt = require('jsonwebtoken');
```

3. 在控制器中生成token，并进行返回

```js
router.get('/login', function (req, res, next) {
  var token = jwt.sign({ uid: '1', username: "zhangsan" }, 'this is sign', {
    expiresIn: 60*60*24
  });
  res.send({
    "token":token
  });
});
```

>注意：sign函数接收的第一个参数表示的是要传递的信息，第二个参数相当于是签名，第三个参数接收的是一个配置对象，对象中可以设置token的过期时间。

4. 安装basic-auth

```js
npm install basic-auth
```

5. 引入basic-auth

```js
var auth = require('basic-auth')
```

6. 获取到用户传来的token

```js
const token = auth(req);
```

>注意：通过postman传递token，可以通过下面的这种方式来进行传递。

![image.png](https://img-blog.csdnimg.cn/img_convert/b1df7596cede81ebe6a0d7186caf923e.png)

7. 验证token是否合法

>下面的验证是在控制器中实现的，如果想要实现复用可以在中间件中实现。

```js
router.get('/address', function (req, res, next) {

  const token = auth(req);
  if (token) {
    try {
      const decoded = jwt.verify(token.name, 'this is sign');
      if (decoded) {
        res.send({
          success: true,
          msg: "验证成功"
        })
      } else {
        res.send({
          success: false,
          msg: "token错误"
        })
      }
    } catch (error) {
      res.send({
        success: false,
        msg: error
      })
    }
  } else {
    res.send({
      success: false,
      msg: "token错误"
    })
  }
})
```

8. 通过中间件复用验证token的逻辑

```js
//权限判断的中间件
var authMiddleWare = function (req, res, next) {

  var result = auth(req);
  if (!result) {
    res.send({
      success: false,
      msg: "token错误"
    });
    return;
  }
  try {
    var decoded = jwt.verify(result.name, 'this is sign');
    console.log(decoded);
    next();
  } catch (error) {
    res.send({
      success: false,
      msg: error
    })
  }
}
```

9. 在路由匹配时，通过第二个参数来加入中间件判断

```js
router.get('/address',authMiddleWare, function (req, res, next) {
  res.send({
    success: true,
    result:[
      {"name":"张三","address":"北京市"},
      {"name":"李四","address":"北京市"},
      {"name":"王五","address":"北京市"}
    ]      
  });
});
```

## 前端携带token进行请求的方法
1. 首先将axios挂载到Vue的原型对象上。

```js
Vue.prototype.$http = axios;
```

2. 前端获取token的方法

>下面的这个方法不仅获取到了token，而且将token保存到了localstorage上。

```js
  this.$http
    .get("http://localhost:3000/api/login")
    .then(function(response) {         
      console.log(response.data.token);

      //保存用户信息 和 token
      localStorage.setItem('token',response.data.token);
    })
    .catch(function(error) {        
      console.log(error);
    });
```

3. 前端携带token发送请求

```js
getAddress() {
  var token=localStorage.getItem('token');
  this.$http
    .get("http://localhost:3000/api/address?uid=1&address_id=345", {
      auth: {
        username: token,
        password: 'sign'
      }
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
}
```

## Egg.js中使用egg-jwt实现接口权限验证
1. 安装egg-jwt

```js
cnpm i egg-jwt --save
```

2. 在config下的plugin.js中进行配置

```js
jwt: {
    enable: true,
    package: 'egg-jwt'
  }
```

3. 在config.default.js下配置密钥

```js
  // 配置JWT的密钥
  config.jwt = {
    secret: "123456xxx"
  }
```

4. 通过控制器请求指定路由返回token

```js
  async login() {
    const token = this.app.jwt.sign({foo: 'bar'},this.app.config.jwt.secret,{
      expiresIn: 60*60*2
    });
    this.ctx.body = {
      "success": true,
      "token": token
    }
  }
```

5. 配置指定路由需要进行token验证

>只需在路由的第二个参数上进行配置即可。

```js
router.get(`/api/v1`,app.jwt, controller.api.v1.index);
```

>注意在egg.js中使用的不是basic auth，而是bearer token，如果想要通过测试工具进行测试可以使用VSCode中的插件Postcode。

![image.png](https://img-blog.csdnimg.cn/img_convert/5f79de81afeee2fae73e1288bfc0b44f.png)

6. 由于egg.js中使用的不是basic auth，因此前端携带token的方式也要进行改变。

```js
getIndex() {
  var api = "http://localhost:7001/api/v1";
  this.Axios.get(api, {
    headers: {
      Authorization: "Bearer " + this.token,
    },
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
```

>上文演示的都是get请求携带token的方法，下面我们演示下post请求如何携带token。

```js
addPeopleInfo() {
  var api = "http://localhost:7001/api/v1/addPeopleInfo";
  this.Axios.post(api, {
    tableId: 12,
    pNum: 4,
    pMark: "不要辣椒",
  },{
    headers: {
      Authorization: "Bearer " + this.token,
    },
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
```
    



        
