---
title: 你真的了解Vue的生命周期吗？
date: 2022-04-26
author: Justin
top: false
cover: false
categories: Vue
tags:
  - Vue
---

## Vue生命周期的主要阶段
### 创建前后
1. beforeCreate：实例刚在内存中被创建出来，此时还没有初始化好data和methods属性。
2. created：实例已经在内存中创建好，此时data和methods已经创建好，此时还没有开始编译模板。

### 载入前后
3. beforeMount：此时已经完成了模板的编译，但是还没有挂载到页面上。
4. mounted：此时已经编译好模板，并挂载到了页面指定的容器中。

### 更新前后
5. beforeUpdate：状态更新之前执行这个函数，此时data中的状态值是最新的，但是界面上显示的数据还是旧的，因为此时还没有开始重新渲染DOM节点。
6. updated：实例更新完毕之后调用此函数，此时data中的状态值和界面上显示的数据都已经完成了更新，界面已经被重新渲染好了。

### 销毁前后
7. beforeDestroy：实例销毁之前调用，在这一步，实例仍然可用。
8. destroyed阶段：Vue实例销毁后调用，调用后，Vue实例所指向的内容都会解除绑定，所有的事件监听器都会被移除，所有的子实例也会被销毁。

## Vue父子组件的生命周期

![image.png](https://img-blog.csdnimg.cn/img_convert/2b132cc2ee5d8c5427c5c4c023ec0a7c.png)

## Vue不同生命周期函数的作用

![image.png](https://img-blog.csdnimg.cn/img_convert/75ec4eaceb3f1215aca84a17ea70e01a.png)

## 问题汇总
### RQ1：Vue虚拟DOM渲染在哪个生命周期？
> 执行到beforeMount的时候虚拟DOM已经渲染完成，等beforeMount这个钩子函数执行完之后真实DOM已经渲染完成。

### RQ2：created和mounted的区别，操作dom是在哪个里面操作？
> created在模板渲染成HTML前调用，通常初始化某些属性值，然后再渲染视图。

> mounted在模板渲染成HTML之后再调用，通常是初始化页面完成后，对DOM的节点进行操作。

### RQ3：发起http请求在哪个钩子？ 绑定事件在哪个钩子？取消事件在哪个钩子？
> 发起HTTP请求一般在created这个钩子函数中，但是如果设计到需要页面加载完成之后调用，则需要在mounted这个钩子中写。

> 绑定事件在mounted钩子函数中。

> 取消事件在beforeDestroy钩子函数中。

