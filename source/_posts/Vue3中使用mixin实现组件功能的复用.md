---
title: Vue3中使用mixin实现组件功能的复用
date: 2021-12-27
author: Justin
top: false
cover: false
categories: Vue
tags:
  - Vue
---

## 一、如何使用mixins?
>mixins主要是进行逻辑的复用，下面我们详细介绍下mixins的主要使用步骤。

1. 在script标签中定义好要用的mixins。

```js
const baseMixin = {
  data() {
    return {
      apiUrl: "http://xxxxxx"
    }
  },
  methods: {
    success() {
      console.log("成功");
    }
  }
}
```

2. 引入mixins。

```js
export default {
  mixins: [baseMixin],
  data() {
    return {
      msg: "首页"
    }
  },
  components: {

  }
}
```

3. 在template中通过语法进行引用即可。

```js
{{apiUrl}}
```

## 二、mixins和组件都有的变量以谁为主？
>是以组件的变量或函数为主，请看下面的代码，最终页面上显示的内容是“来自组件的msg”。

```js
<template>
  <div class="container">
    首页模板----{{msg}}
    <br>
    <button @click="success()">点击触发成功</button>
  </div>
</template>
<script>
const baseMixin = {
  data() {
    return {
      apiUrl: "http://jpy.wiki",
      msg: "这是来自mixins的 msg"
    }
  },
  methods: {
    success() {
      console.log("成功");
    }
  }
}
export default {
  mixins: [baseMixin],
  data() {
    return {
      msg: "这是来自组件的msg"
    }
  },
  components: {

  }
}
</script>
```

## 三、全局配置mixins
1. 对外暴露mixin函数。

```js
const baseMixin = {
  data() {
    return {
      apiUrl: "http://jpy.wiki",
      msg: "这是来自mixins的 msg"
    }
  },
  methods: {
    success() {
      console.log("成功");
    }
  }
}
export default baseMixin;
```

2. 在main.js中引入mixin并对外暴露。

```js
import baseMixin from './mixin/baseMixin';
const app = createApp(App);
app.mixin(baseMixin);
app.mount('#app');
```

3. 在组件中可以直接使用。

```js
<template>
  <div class="container">
    首页模板----{{msg}}
    <br>
    <button @click="success()">点击触发成功</button>
  </div>
</template>
```


