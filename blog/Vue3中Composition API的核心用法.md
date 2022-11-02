---
title: Vue3中Composition API的核心用法
date: 2021-12-15
author: Justin
top: false
cover: false
categories: Vue
tags:
  - Vue
---

## 什么是Composition API?
>Composition API也叫组合式API，是Vue3.x中的新特性。通过创建Vue组件，我们可以将接口的可重复部分提取到可重用的代码段中，没有Composition API之前Vue相关业务的代码需要配置到option的特定区域，如果在大型项目中这种方式会导致后期的维护性比较复杂，同时代码可复用性不高，Vue3的Composition API就是解决这个问题的。

## 在setup中使用ref和reactive定义响应式数据
>使用ref和reactive定义数据前，需要从vue中进行解构。

```js
import {ref,reactive} from 'vue';
```

>ref和reactive均可以定义响应式数据，定义的数据在Vue模板中可以直接获取，但是如果通过方法获取的话，ref和reactive定义的数据在获取上有一定的差异，ref定义的需要通过value属性间接获取，reactive定义的数据可以直接获取，在修改这两类数据也是如此。

```js
export default {
  setup() {
    // 使用ref定义响应式数据
    const title = ref("这是一个标题");
    // 使用reactive定义响应式数据
    const userinfo = reactive({
      username: "张三",
      age: 20
    });
    // 获取reactive中的属性可以直接获取
    const getUserName = () => {
      alert(userinfo.username)
    };
    // 获取ref中的数据需要通过value属性
    const getTitle = () => {
      alert(title.value)
    };
    const setUserName = () => {
      // 修改reactive中的属性可以直接修改
      userinfo.username = "修改后的张三"
    };
    const setTitle = () => {
      // 修改ref中的属性，需要通过value
      title.value = "这是修改后的标题"
    };
    return {
      title,
      userinfo,
      getUserName,
      getTitle,
      setTitle,
      setUserName
    }
  },
  data() {
    return {
      msg: "这是Home组件的msg"
    }
  },
  methods: {
    run() {
      alert('这是Home组件的run方法')
    }
  }
}
```

>可以使用v-model直接进行双向数据绑定。

```js
<input type="text" v-model="title">
<input type="text" v-model="userinfo.username">
```

## toRefs解构响应式对象数据
>之所以需要toRefs是因为通过toRefs解构的数据还具有响应式的特性，通过传统的拓展运算符进行解构则不具备了响应式的特性，这就是为什么需要toRefs的原因。

1. 从vue中解构出toRefs

```js
import {ref,reactive,toRefs} from 'vue';
```

2. setup的返回数据中进行如下的修改

```js
return {
  title,
  userinfo,
  getUserName,
  getTitle,
  setTitle,
  setUserName,
  ...toRefs(article)
}
```

## setup中的计算属性
>setup中的计算属性和一般的计算属性类似，区别在于无法读取到this。

```js
setup() {
    let userinfo = reactive({
      firstName: "",
      lastName: ""
    });

    let fullName = computed(() => {
      return userinfo.firstName + " " + userinfo.lastName
    })

    return {
      ...toRefs(userinfo),
      fullName
    }
  }
```

## readonly:深层的只读代理
>readonly存在的意义是能够将响应式对象转换为普通的原始对象。

1. 引入readonly。

```js
import {computed, reactive,toRefs,readonly} from 'vue'
```

2. 给readonly传入响应式对象。

```js
let userinfo = reactive({
  firstName: "666",
  lastName: ""
});
userinfo = readonly(userinfo);
```

## setup中的watchEffect
>setup中的watchEffect具有以下几个特点。

1. 能够监听setup中的数据变化，数据一旦变化就会执行watchEffect中的回调函数。
2. 及时setup中的数据没有变化，初始的时候也会执行一次。

```js
  setup() {
    let data = reactive({
      num: 1
    });
    watchEffect(() => {
      console.log(`num2=${data.num}`);
    });
    setInterval(() => {
      data.num++;
    },1000)
    return {
      ...toRefs(data)
    }
  }
```

## setup中的watch
>使用watch监控数据的基本方法。

```js
  setup() {
    let keyword = ref("111");
    watch(keyword,(newData,oldData) => {
      console.log("newData是：",newData);
      console.log("oldData是：",oldData);
    })
    return {
      keyword
    }
  }
```

## watch与watchEffect的区别
1. watch在首次页面渲染的时候不会执行，但是watchEffect会。
2. watch能够获取到数据状态变化前后的值。


## setup中的生命周期钩子函数

![image.png](https://img-blog.csdnimg.cn/img_convert/ae5ee47a577fe5db6161f37677987ce0.png)

>在setup中生命周期钩子类似于直接调用一个函数。

```js
  setup() {
    let keyword = ref("111");
    watch(keyword,(newData,oldData) => {
      console.log("newData是：",newData);
      console.log("oldData是：",oldData);
    })
    onMounted(() => {
      console.log('onMounted');
    })
    onUpdated(() => {
      console.log('onUpdated');
    })
    return {
      keyword
    }
  }
```

## setup中的props
1. 父组件进行传值。

```js
<Search :msg="msg" />
```

2. 声明接收

```js
props: ['msg'],
  setup(props) {
    console.log(props);
  }
```

## Provide与inject
>有时，我们需要将数据从父组件传递到子组件，但是如果父组件到子组件是一个嵌套很深的关系，通过props进行传递将变得很麻烦，这种情况下，我们可以使用provide和inject来实现。

### 一般用法
1. 根组件通过provide传递数据。

```js
export default {
  data() {
    return {

    }
  },
  components: {
    Home
  },
  provide() {
    return {
      title: "app组件里面的标题"
    }
  }
}
```

2. 需要接收数据的组件通过inject声明接收

```js
export default {
  inject: ['title'],
  data() {
    return {

    }
  },
  components: {

  }
}
```

3. 声明接收后可以直接使用。

```js
<template>
  <div class="container">
    这是Location组件
    {{title}}
  </div>
</template>
```

### provide能够获取到this中的数据

```js
export default {
  data() {
    return {
      title: "根组件的数据"
    }
  },
  components: {
    Home
  },
  provide() {
    return {
      title: this.title
    }
  }
}
```

>`注意:`上面的一般用法中，如果父组件中的数据发生了变化，子组件的不会发生变化，因此推荐使用下面的composition API中的provide与inject能够实现同步变化。

## setup中的provide与inject

* 根组件

```js
import Home from './components/Home.vue'
import {ref,provide} from 'vue'
export default {
  setup() {
    let title = ref('app根组件里面的title');
    let setTitle = () => {
      title.value = "改变后的title"
    }
    provide("title",title);
    return {
      title,
      setTitle
    }
  },
  data() {
    return {
    }
  },
  components: {
    Home
  }
}
```

* 用到数据的组件

```js
import {inject} from 'vue'
export default {
  setup() {
    let title = inject('title');
    return {
      title
    }
  },
  data() {
    return {

    }
  },
  components: {

  }
}
```

>与props不同的是，子组件中的数据如果使用了双向数据绑定会同步到父组件。



    

