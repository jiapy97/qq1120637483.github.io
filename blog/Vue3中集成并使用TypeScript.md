---
title: Vue3中集成并使用TypeScript
date: 2022-01-19
author: Justin
top: false
cover: false
categories: Vue
tags:
  - Vue
---

## 一、安装

1. 创建vue项目
```shell
vue create vue-test-demo
```

2. 进入项目

```shell
cd vue-ts-demo
```

3. 新增typescript

```js
vue add typescript
```

4. 跳过class语法


## 二、如何让组件能够使用TS语法？
1. script标签的lang属性设置为ts。

```js
<script lang="ts">
```

2. 从vue中导入defineComponent

```js
import { defineComponent } from 'vue';
```

3. 组件对外暴露时需要通过defineComponent进行包裹。

```js
export default defineComponent({
  name: 'App',
  components: {
    Home
  }
});
```

## 三、Vue中使用TS语法实例
>定义接口并实现接口。

```js
<script lang="ts">
import {defineComponent} from 'vue'
interface News{
  title: string,
  description: string,
  count: number,
  content?: string
}
let newsData: News= {
  title: "这是一个新闻",
  description: "这是新闻的描述",
  count: 12
}
export default defineComponent({
  data() {
    return newsData
  },
  methods: {
    setTitle(): void{
      this.title = '123';
    }
  }
});
</script>
```

## 四、组合式API中使用TS
>下文首先介绍reactive的使用注意事项。

### 第一种实现方式（参数）

```js
interface User {
  username: string;
  age: number;
}
  setup() {
    let user: User = reactive({
      username: "张三",
      age: 20,
    });
    function setUsername(username: string) {
      user.username = username;
    }
    return {
      ...toRefs(user),
      setUsername
    };
  }
```

### 第二种实现方式（泛型）
```js
  setup() {
    let user = reactive<User>({
      username: "张三",
      age: 20,
    });
    function setUsername(username: string) {
      user.username = username;
    }
    return {
      ...toRefs(user),
      setUsername
    };
  }
```

### 第三种实现方式（通过as）

```js
let user = reactive({
  username: "张三",
  age: 20,
}) as User;
```

>下面介绍下ref的注意事项。

1. ref不支持直接指定类型。

> 下面的是错误的形式。

```js
let num: string = ref('666');
```

2. ref支持泛型。

```js
let num = ref<number | string>('666');
```

    


