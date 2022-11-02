---
title: nextTick的实际使用场景分析
date: 2022-01-25
author: Justin
top: false
cover: false
categories: vue
tags:
  - vue
---

## 需求分析
> 有时候，我们需要页面的所有数据都渲染完成后在获取数据，通过传统的方法无法获取到渲染后的数据，举个例子，页面中通过v-for渲染的li有12个，但是，我们却在异步获取数据的函数中无法通过document.querySelector拿到所有的数据，此时就需要使用nextTick.

## 案例分析
> 例如下面这个页面，我们想要实现的是先渲染页面，然后获取li的数量。

![image.png](https://img-blog.csdnimg.cn/img_convert/833f35245975a6c39ce0dd7a95078bf8.png)

## 代码分析
> 请注意，下面的代码要写在获取口味的异步函数完成之后。(这一点很重要，直接放在mounted函数之中是没有作用的。)

```js
  this.$axios.get(this.$config.apiUrl + "/flavorList").then((res) => {
    console.log(res);
    this.flavorList = res.data.result;
    this.$nextTick(() => {
      // 渲染整个页面之后，再执行下面的代码
      this.initEvent();
    });
  });
```

## 原理分析
> 我们不仅要知道nextTick是如何使用的，还要知道nextTick的原理，这是一道面试常考的题目。

> 有时候，我们也许无法避免的需要直接对DOM进行操作，但是我们想要操作的是页面渲染完成后的结果，此时nextTick就可以帮助我们实现。

### vue如何判断DOM是否更新完毕？
#### 利用MutationObserver？而是事件循环。
> MutationObserver是HTML5新增的一个API，这个API可以帮助我们监听DOM。但是通过vue实际上并不是通过MutationObserver，而是通过事件循环，让nextTick在UI render之后再执行，这样就能访问到更新后的DOM了。在时间循环中宏任务总是要等到微任务执行完毕之后再执行，当调用nextTick的时候，会在更新DOM的微任务队列后追加我们自己的回调函数，从而能够保证我们的回调函数是在DOM渲染完成之后被执行的。




