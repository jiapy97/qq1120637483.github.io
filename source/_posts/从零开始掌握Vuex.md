---
title: 从零开始掌握Vuex
date: 2021-12-21
author: Justin
top: false
cover: false
categories: Vue
tags:
  - Vue
---

## 什么是Vuex？
> Vuex是一个专门为Vue.js应用程序开发的状态管理模式，vuex可以实现vue不同组件之间的状态共享，可以实现组件里面数据的持久化。

## Vuex的几个核心概念
* State
* Getters
* Mutations
* Actions
* Modules

## Vuex的基本使用

1. 安装依赖

```js
npm install vuex@next --save
```

2. 在src目录下新建一个vuex文件夹，文件夹里新建store.js

```js
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      count: 100
    }
  }
})

export default store;
```

3. 将vuex挂载到vue身上

```js
import { createApp } from 'vue'
import App from './App.vue'
import route from './routes'
import store from './vuex/store'

// createApp(App).mount('#app')
let app=createApp(App);
//挂载路由
app.use(route)
// 挂载vuex
app.use(store);
app.mount('#app')
```

4. 在组件中使用vuex

```js
this.$store.state.count
```

## 使用mutations修改state
1. 在mutations中定义好修改state的方法

```js
const store = createStore({
  state() {
    return {
      count: 100
    }
  },
  mutations: {
    incCount(state) {
      state.count++;
    }
  }
})
```

2. 在组件中通过commit来操作指定的方法

```js
methods:{
  incCount() {
    this.$store.commit('incCount');
  }
}
```

## 通过mutations设置state

1. 定义设置的方法

```js
  mutations: {
    setCount(state,num) {
      state.count = num;
    }
  }
```

2. 前端通过相关方法直接操作

```js
methods:{
  setCount() {
    this.$store.commit('setCount',666);
  }
}
```

## 通过mapState读取store中的数据
1. 在组件中通过mapState声明接收哪些数据

```js
  computed: {
    ...mapState(['count'])
  }
```

2. 然后可以直接在组件中使用这个数据

```js
<h1>这是mapState获取到的数据：{{count}}</h1>
```

3. 也可以对接收到的数据进行重命名

```js
  computed: {
    ...mapState({
      num: state => state.count     
    })
  }
  <h1>这是mapState获取到的数据：{{num}}</h1>
```

## Vuex中的Getter
### 通过this.$store获取
1. 在store中添加属性getters

```js
  getters: {
    reverseMsg(state) {
      return state.msg.split('').reverse().join("");
    }
  }
```

2. 组件中通过computed直接调用

```js
  computed: {
    revMsg() {
      return this.$store.getters.reverseMsg;
    }
  }
```

3. 组件中直接使用

```js
<h3>获取到的getters里面的数据--{{ revMsg }}</h3>
```

### 通过mapGetters获取

```js
  computed: {
    ...mapGetters(['reverseMsg'])
  }
```

>如果想要改名还可以这样写：

```js
  computed: {
    ...mapGetters({
      rev: 'reverseMsg'
    })
  }
```

### 当state中的数据发生变化时，Getter会进行重新计算

## vuex中的actions
> actions的主要作用时执行mutations里面的方法，异步操作放在actions。

1. 在vuex中指定操作哪些mutations里面的方法

```js
  actions: {
    incCount(context) {
      context.commit('incCount')
    }
  }
```

2. 组件中通过$store.dispatch调用actions中的方法

```js
<button @click="$store.dispatch('incCount')">incCount</button>
```

## Vuex中的Modules
>modules主要解决的是多个store对外暴露的问题。

### 如何获取某个store中的数据
1. 对外暴露一个store

```js
let userStore = {
  state() {
    return {
      count: 100,
      msg: '你好雅'
    }
  },
  mutations: {
    incCount(state) {
      state.count++;
    },
    setCount(state,num) {
      state.count = num;
    },
    setMsg(state,msg) {
      state.msg = msg;
    }
  },
  getters: {
    reverseMsg(state) {
      return state.msg.split('').reverse().join("");
    }
  },
  actions: {
    incCount(context) {
      context.commit('incCount')
    },
    setMsg(context,msg) {
      setTimeout(() => {
        context.commit('SetMsg',msg)
      },1000)
    }
  }
}

export default userStore
```

2. store.js对外声明

```js
import { createStore } from 'vuex'
import newsStore from './newsStore';
import userStore from './userStore'

const store = createStore({
  modules: {
    "user": userStore,
    "news": newsStore
  }
})

export default store;
```

3. 组件中通过$store.state.xxx.xxx进行调用

```js
{{$store.state.user.count}}
```

### 如何执行某个store中的方法
>组件直接在methods中通过this.$store.commit('xxx)进行调用。

```js
  methods: {
    incCount() {
      this.$store.commit("incCount")
    }
  }
```

> 通过上面我们发现，这种方式无需我们制定调用哪一个store中的方法，因此如果不同store中含有相同名字的方法，这些方法都将被调用。


## Vuex结合Composition Api来使用
1. 从vuex中引入useStore。

```js
import {useStore} from 'vuex'
```

2. 在setup中调用store中的数据和方法

```js
  setup() {
    const store = useStore();
    return {
      count: computed(() => {
        return store.state.count
      }),
      incCount: () => {
        store.commit('incCount');
      }
    }
  }
```

3. 在setup中调用store中的getter

```js
  setup() {
    const store = useStore();
    return {
      num: computed(() => {
        return store.getters.num
      })
    }
```

> 核心就是通过store.getters.xxx

>上文我们介绍到的都是如何执行mutations中的方法，下面我们介绍下如何执行actions中的方法。

```js
  setup() {
    const store = useStore();
    return {
      incActionCount: () => {
        store.dispatch('incCount');
      }
    }
  }
```

> 要想在setup中执行actions中的方法核心就是通过store.dispatch来执行。

> 如果在执行actions中的方法时想要传值，可以在store.js的actions中定义下面这样的方法。

```js
actions: {
  setCount({commit},num) {
    commit('setCount',num)
  }
}
```

## Vue结合TypeScript项目中使用Vuex

1. 将store.js改为store.ts

2. 引入下列声明

```js
import { ComponentCustomProperties } from 'vue'
import { Store,createStore } from 'vuex'

declare module '@vue/runtime-core' {
  // 声明自己的 store state
  interface State {
    count: number,
    list: string[],   // 这里要动态改变哦
    msg: string
  }

  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
```

>具体的参考文档可以看：[vuex中ts支持](https://next.vuex.vuejs.org/zh/guide/typescript-support.html#vue-%E7%BB%84%E4%BB%B6%E4%B8%AD-store-%E5%B1%9E%E6%80%A7%E7%9A%84%E7%B1%BB%E5%9E%8B%E5%A3%B0%E6%98%8E)

3. 然后只需给state声明为any，其他参数声明为对应的类型即可。

4. 组件中通过lang=ts，即可正常使用this.$store.

5. 组件可以通过下面的方式来触发store中mutations中的方法。

```js
  methods: {
    incCount(): void {
      this.$store.commit('incCount')
    }
  }
```

6. composition API中结合TS和Vuex

> 在这种情况下通过setup中获取数据的方式主要是通过store.xxx

```js
<script lang="ts">
import {computed, defineComponent} from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore();
    return {
      msg: computed(() => {
        return store.state.msg
      })
    }
  }
})
</script>
```
