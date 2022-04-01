---
title: 这一次，彻底搞懂Vue的组件通信
date: 2022-04-02
author: Justin
top: false
cover: false
categories: 面试题
tags:
  - 面试题
---

## 前言
> vue的组件通信无论是在工作中还是在面试中都是经常考到的知识，这一次让我们一起来系统的梳理下Vue的组件通信都有哪些方式吧~

## 一、父组件向子组件进行传值
`核心：通过props就行传递。`

1. 在父组件中引入子组件。
2. 通过在子组件的标签上进行传递。
3. 子组件中通过声明props进行接收。

## 二、子组件向父组件传值

`核心：通过this.$emit('父组件中的函数名',传递参数)`

1. 父组件给子组件绑定函数。
2. 子组件通过this.$emit出发父组件给子组件绑定的函数。

## 三、子组件通过$parent来获取父组件实例的属性和方法

`核心：在子组件中通过this.$parent.xxx来获取父组件的属性和方法`

## 四、通过\$refs或$children获取子组件的属性或方法
### 通过$refs获取子组件的属性和方法
1. 给子组件绑定ref属性。
2. 通过this.$refs.son.xxx来调用子组件身上的属性和方法。

### 通过$children获取子组件的属性和方法
> \$children属性无需绑定，即可直接使用，\$children获取的是一个数组，有多少个子组件就有多少个元素，\$children[0]代表的是第0个组件。

## 五、通过\$attrs和\$listeners获取父组件中的属性和方法
`核心：主要包括下面的两点：`

1. 通过\$attrs获取父组件通过子组件props形式传递过来的，但是不在子组件props声明接收的属性。

```js
<Son :obj="obj" :msg="msg" />
```

> 例如上面这个例子，在子组件中obj被props声明接收了，但是msg并没有声明接收，那么子组件的this.\$attrs这个对象中就包含了msg。

2. 通过\$listeners可以获取到父作用域中的v-on事件监听器。

> 注意：this.\$listeners能够获取到的父组件中的事件监听器必须要通过v-on传递给子组件。

## 六、使用Event Bus实现跨组件通信
1. 在main.js中对外暴露一个Vue实例

```js
export const eventBus = new Vue()
```

2. 在组件1中引入这个eventBus

```js
import {eventBus} from '../main'
```

3. 组件1中的数据发生变化的时候通过eventBus.$emit派发数据。

```js
eventBus.$emit('add-age',1)
```

4. 组件2在crated生命周期钩子函数中监听事件并修改数据。

```js
created() {
    eventBus.$on('add-age',(num) => {
      this.ageData += num
    })
}
```

## 七、父组件通过provide和inject向所有子组件传入数据，不管子组件层次有多深
> 特点是：父组件有一个provide来提供数据，子组件有一个inject来使用这个数据。

1. 根组件

```js
  provide: {
    text: '叶子节点你好'
  }
```

2. 叶子组件

```js
inject: ['text'],
```

> 对叶子节点来说，此时根组件传过来的值已经在this身上了。


