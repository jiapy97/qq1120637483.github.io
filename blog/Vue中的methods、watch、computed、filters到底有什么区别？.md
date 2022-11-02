---
title: 手写函数柯里化
date: 2022-04-25
author: Justin
top: false
cover: false
categories: 面试题
tags:
  - 面试题
---

## 一、methods
> methods中存放的是事件的回调函数，具有以下几个特点：

1. 可以通过Vue实例访问方法，在方法中最好不要使用箭头函数，因为涉及到this指向的问题。
2. 重新渲染的时候，methods总会执行该函数。
3. methods是函数调用，filters和computed、watch是属性调用。
4. methods是不具有缓存性的。

## 二、filters
> filters一般用于格式化输出的场景，比如日期格式化，filters过滤器可以进行串联调用，所以可以定义一些基础的filters，然后按需在组件内使用。filters不具有缓存性。

```js
{{msg | fliterA | filterB}}
```

## 三、computed
> computed是计算属性，会监听一个依赖属性，如果这个属性发生变化，就会更新视图，适用于计算比较消耗性能的计算场景，因为其具有缓存功能，这意味着其监听的数据如果没有发生变化，多次调用计算属性会返回之间的计算结果，不必再次执行函数。

## 四、watch
> watch可以监听某一个数据的变化，watch要想监听对象中某个属性是否发生了变化，需要将deep属性置为true。但是watch无法拿到对象中属性变化的旧值，只能拿到新的对象。

```js
  watch: {
    name(newValue, oldValue) {
      console.log("name", newValue, oldValue);
    },
    info: {
      handler: function(newValue,oldValue) {
        console.log('info',newValue,oldValue);
      },
      deep: true
    }
  },
 ```
 
 ## 问题汇总
 ### RQ1：watch和computed的区别
 1. watch是监听一个数据是否发生变化，当这个数据发生变化才执行函数。
 2. computed则是只要其函数内部的代码指向的数据发生了变化，其就会执行函数，然后返回。
 3. computed具有缓存特性，watch则没有。
 
 
 