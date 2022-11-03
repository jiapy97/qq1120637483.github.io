---
title: Vue的作用域插槽slot有什么用？
date: 2022-04-27
author: Justin
top: false
cover: false
categories: Vue
tags:
  - Vue
---

## 一、基本使用
> 由父组件向子组件中传递数据，子组件通过slot进行接收，不传递则显示的是默认的内容。

* 父组件

```js
<template>
  <div id="app">
    <slotDemo :url="website.url">
        {{website.title}}
    </slotDemo>
  </div>
</template>

<script>
import slotDemo from './components/slotDemo'

export default {
  name: 'App',
  data() {
    return {
      website: {
        url: 'https://www.baidu.com',
        title: '这是根节点的title'
      }
    }
  },
  components: {
    slotDemo
  }
}
</script>
```

* 子组件

```js
<template>
    <a :href="url">
        <slot>
            默认内容
        </slot>
    </a>
</template>

<script>
export default {
    name: 'slotDemo',
    props: ['url'],
}
</script>
```

## 二、父组件通过slot接收子组件传递过来的值
1. 子组件通过slot进行动态属性传值

```js
<template>
    <a :href="url">
        <slot :slotData = "website">
            默认内容
        </slot>
    </a>
</template>

<script>
export default {
    name: 'slotDemo',
    props: ['url'],
    data() {
        return {
            website: {
                url: '这是子组件的URL',
                title: '子组件的title'
            }
        };
    }
};
</script>
```

2. 父组件通过template v-slot进行接收

```js
<template>
  <div id="app">
    <slotDemo :url="website.url">
        <template v-slot="slotProps">
          {{slotProps.slotData.title}}
        </template>
    </slotDemo>
  </div>
</template>
```

## 三、具名插槽

![image.png](https://img-blog.csdnimg.cn/img_convert/d7da1e416f57f27a3b7da211f926f7be.png)
