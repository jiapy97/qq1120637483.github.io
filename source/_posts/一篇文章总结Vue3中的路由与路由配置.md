---
title: 一篇文章总结Vue3中的路由与路由配置
date: 2021-12-19
author: Justin
top: false
cover: false
categories: Vue
tags:
  - Vue
---

## 路由的基本配置
1. 安装插件

```shell
npm install vue-router@next --save
```

2. 创建一个routers.ts文件

3. 在routers.ts中引入组件并配置路径。

```js
import { createRouter,createWebHashHistory } from 'vue-router';
// 引入组件
import Home from './components/Home.vue';
import News from './components/News.vue';
import User from './components/User.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: '/', component: Home},
    {path: '/news', component: News},
    {path: '/user', component: User},
  ]
})

export default router;
```

4. 在main.ts中将路由文件挂载到vue身上。

```js
import { createApp } from 'vue'
import App from './App.vue'
import routers from './routers';

// createApp(App).mount('#app')

const app = createApp(App);
app.use(routers);
app.mount('#app');
```

5. 在用到路由的组件通过router-view组件或者router-link

```js
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <ul>
    <li>
      <router-link to="/">首页</router-link>
    </li>
    <li>
      <router-link to="/news">新闻</router-link>
    </li>
    <li>
      <router-link to="/user">用户</router-link>
    </li>
  </ul>

  <router-view></router-view>
</template>
```

>挂载router-link后，只需要在组件对应的页面路径上输入指定路由即可完成跳转，router-link则实现a标签进行跳转的形式路由。

## 动态路由的配置
>在routes.ts中按照下面的方式进行配置路由，通过/:aid的方式来进行动态路由的配置。

```js
//配置路由
const router = createRouter({

    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Home , alias: '/home' },
        { path: '/news', component: News },
        { path: '/user', component: User },
        { path: '/newscontent/:aid', component: NewsContent },
    ], 
})
```

>通过router-link进行跳转的时候，需要模板字符串和冒号＋to。

```js
<ul>
    <li v-for="(item, index) in list" :key="index">
        <router-link  :to="`/newscontent/${index}`"> {{item}}</router-link>
    </li>
</ul>
```

>通过this.$route.params获取动态路由传过来的值。

```js
mounted(){
    // this.$route.params 获取动态路由的传值
    console.log(this.$route.params)
}
```

>如果我们想要实现类似与GET传值，我们可以通过下面的方式

1. 将路由配置为普通路由。


```js
const router = createRouter({

    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Home , alias: '/home' },
        { path: '/news', component: News },
        { path: '/user', component: User },
        { path: '/newscontent', component: NewsContent },
    ], 
})
```

2. router-link通过问号的形式进行跳转。

```js
<router-link  :to="`/newscontent?aid=${index}`"> {{item}}</router-link>
```

3. 通过this.$route.query获取到get传值。

```js
console.log(this.$route.query);
```

## 路由编程式导航（JS跳转路由）
> 只需要通过this.$router.push进行指定即可。

```js
  this.$router.push({
    path: '/home'
  })
```

>如果想要实现get传值，可以通过下列的方式。

```js
this.$router.push({
    path: '/home',
    query: {aid: 14}
  })
}
```

>动态路由需要使用下面的这种方式。

```js
  this.$router.push({
    path: '/home/123',
    // query: {aid: 14}
  })
```

## 路由模式
### Hash模式
>Hash模式的典型特点就是页面路由中含有一个井号。

```js
const router = createRouter({

    history: createWebHashHistory(),
    routes: [
        ...,
    ], 
})
```

### HTML5 history模式
1. 引入createWebHistory。
2. router的配置项中的history属性设置为createWebHistory()。

```js
import { createRouter, createWebHistory } from 'vue-router'

//配置路由
const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...
    ], 
})
```

> 注意：开启HTML5 History模式之后，发布到服务器需要配置伪静态。[配置伪静态的方法](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90)。

## 命名路由
### 一般情况
1. 定义路由的时候配置name属性

```js
{ path: '/news', component: News,name:"news" }
```

2. 传入对象进行跳转

```js
<router-link :to="{name: 'news'}">新闻</router-link>
```

### 通过GET传值的方式
1. 定义路由的时候配置name属性

```js
{ path: '/newscontent', component: NewsContent, name: "content" },
```

2. 传入包括query的对象

```js
<li v-for="(item, index) in list" :key="index">
    <router-link  :to="{name: 'content',query: {aid: index}}"> {{item}}</router-link>
</li>
```

### 通过动态路由的方式

1. 定义动态路由并指定name属性

```js
{ path: '/userinfo/:id', name: "userinfo", component: UserInfo }
```

2. 传入包括params的对象

```js
<router-link :to="{name: 'userinfo',params: {id: 123}}">跳转到用户详情</router-link>
```

### 编程式路由
>和上面的方式很类似。

```js
<button @click="this.$router.push({name: 'userinfo',params: {id: 666}})">点击跳转</button>
```

## 路由重定向

```js
{ path: '', redirect: "/home" },   // 路由重定向
{ path: '/home', component: Home },
```

## 路由别名
>下面的这个实例中，访问people这个路由和访问alias这个路由是一致的。

```js
{ path: '/user', component: User, alias: '/people' }
```

> alias也可以是一个数组。

```js
{ path: '/user', component: User, alias: ['/people','/u']}
```

> 动态路由的形式。

```js
{ path: '/userinfo/:id', name: "userinfo", component: UserInfo, alias: '/u/:id' }
```

## 嵌套路由
>嵌套路由的应用场景一般在导航栏上。

1. 定义嵌套路由

```js
{
  path: '/user', component: User,
  children: [
    { path: '', redirect: "/user/userlist" },
    { path: 'userlist', component: UserList },
    { path: 'useradd', component: UserAdd }
  ]
}
```

2. router-link和router-view配合显示内容

```js
<div class="left">
  <ul>
    <li>
      <router-link to="/user/userlist">用户列表</router-link>
    </li>
    <li>
      <router-link to="/user/useradd">增加用户</router-link>
    </li>
  </ul>
</div>
<div class="right">
  <router-view></router-view>
</div>
```









      


