---
title: React项目中一种维持登录的方法
date: 2021-05-19
categories: React
tags: 
- React
---
## 1. 引入store.js库
[项目地址](https://github.com/marcuswestin/store.js#user-content-installation)
```
npm i store
```
## 2. 定义并导出存储到本地的模块(storageUtils.js)
```js
// ! 本模块主要是进行local数据存储
import store from 'store'
const USER_KEY = 'user_key';

export default {
    // 保存用户
    saveUser(user) {
        store.set(USER_KEY,user);// 登录成功的时候，读取用户数据并放在内存中
            const user = result.data;
            // memoryUtils.user = user;
            storageUtils.saveUser(user);
    },

    // 读取用户
    getUser() {
        return store.get(USER_KEY) || {}
    },

    // 删除用户
    removeUser() {
        store.remove(USER_KEY);
    }
}
```
## 3. 登录成功时将用户的数据通过storageUtils的saveUser方法进行保存
```js
// 登录成功的时候，读取用户数据并放在内存中// 将local中的user保存到内存中去
const user = storageUtils.getUser();
memoryUtils.user = user;
const user = result.data;
// memoryUtils.user = user;
storageUtils.saveUser(user);
```
## 4. 定义记录用户信息的内存文件（memoryUtils.js）
```js
// ! 本文件主要存放需要存储的用户信息等内容
export default {
    user: {}
}
```
## 5. 在入口文件将local中的用户信息保存到内存文件中
```js
// 将local中的user保存到内存中去
const user = storageUtils.getUser();
memoryUtils.user = user;
```
## 6. 登录成功后的界面首先检测内存文件中是否有用户，有则加载，无则跳转到登录路由
```js
const user = memoryUtils.user;
// 如果没有获取到用户id则直接返回登录页面
if (!user._id) {
    return <Redirect to='/login' />
}
```
