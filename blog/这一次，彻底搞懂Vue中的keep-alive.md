---
title: 这一次，彻底搞懂Vue中的keep-alive
date: 2022-05-05
author: Justin
top: false
cover: false
categories: Vue
tags:
  - Vue
---

## keep-alive的使用场景及其特点

1. 用于Vue性能优化。
2. 缓存组件。
3. 频繁切换，不需要重复渲染。
4. keep-alive有include和exclude属性，这两个属性决定了哪些组件可以进入缓存。
5. keep-alive还有一个max属性，通过它可以设置最大缓存数，当缓存的实例超过max的时候，vue会删除最久没有使用的缓存，属于LRU缓存策略。
6. keep-alive其内部所有嵌套的组件都具有两个生命周期钩子函数，分别是activated和deactivated，它们分别在组件激活和失活的时候触发。

> 将组件放入keep-alive中即可实现组件的缓存。

```js
<keep-alive>
    <KeepaliveA v-if="state === 'A' " />
    <KeepaliveB v-if="state === 'B' "/>
    <KeepaliveC v-if="state === 'C' "/>
</keep-alive>
```

## keep-alive的原理？
> keep-alive在实现上，维护了一个key数组和一个缓存对象，这个key数组记录目前缓存的组件的key值，如果这个组件没有指定key值，会自动生成一个唯一的key值，缓存对象会以key值为键，vnode为值，用于缓存组件对应的虚拟DOM，在keep-alive的渲染函数中，其基本逻辑是判断当前渲染的vnode是否有对应的缓存，如果有则从缓存中读取到对应的组件实例，没有就把它缓存。

## keep-alive如何根据不同场景来更新数据？
> 可以利用keep-alive提供的include和exclude指定缓存哪些组件不缓存哪些组件，然后配合vuex等状态管理工具实现动态控制。

