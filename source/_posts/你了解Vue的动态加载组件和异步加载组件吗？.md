---
title: 你了解Vue的动态加载组件和异步加载组件吗？
date: 2022-04-30
author: Justin
top: false
cover: false
categories: Vue
tags:
  - Vue
---

## 如何动态加载组件？
1. 引入可能被使用的组件

```js
import slotDemo from './components/slotDemo'
import HelloWorld from './components/HelloWorld'
```

2. 通过动态属性is来读取组件名

```js
<component  :is="comName"/>
```

## 如何异步加载组件？


1. 通过import在注册组件的时候引入组件

```js
components: {
    FormDemo: () => import(`../xxxComponent`)
}
```

2. 通过条件渲染来加载组件

```js
<FormDemo v-if="showFormDemo" />
<button @click="showFormDemo = true" >show form demo</button>
```

