---
title: Koa的洋葱模型到底是什么？
date: 2022-05-10
author: Justin
top: false
cover: false
categories: 面试题
tags:
  - 面试题
---

## 什么是Koa？
> Koa是一个精简的node框架，被认为是第二代Node框架，其最大的特点就是独特的中间件流程控制，是一个典型的洋葱模型，它的核心工作包括下面两个方面：

1. 将node原生的req和res封装成为一个context对象。
2. 基于async/await的中间件洋葱模型机制。

## Koa1和Koa2在源码上的区别有何不同？
1. Koa1是使用generator、yield的模式。
2. Koa2使用的是async/await + Promise的模式。

## 什么是洋葱模型？
> Koa的洋葱模型是以next()函数为分割点，先由外到内执行Request的逻辑，然后再由内到外执行Response的逻辑，这里的request的逻辑，我们可以理解为是next之前的内容，response的逻辑是next函数之后的内容，也可以说每一个中间件都有两次处理时机。洋葱模型的核心原理主要是借助compose方法。为了大家更好的理解什么是洋葱模型，这个图很好的给出了解释：

![image.png](https://img-blog.csdnimg.cn/img_convert/6bdcbf3b5c4068f62326debea8f1550a.png)

> 下面是洋葱模型的示例代码：

```js
const Koa = require('koa');

//Applications
const app = new Koa();

// 中间件1
app.use((ctx, next) => {
  console.log(1);
  next();
  console.log(2);
});

// 中间件 2 
app.use((ctx, next) => {
  console.log(3);
  next();
  console.log(4);
});

app.listen(7000, '0.0.0.0', () => {
    console.log(`Server is starting`);
});
```

> 当我们访问指定路径的7000端口时，中间件的打印顺序是1 -> 3 -> 4 -> 2。

## 源码解析
1. use方法

> 当我们使用中间件的时候，首先是使用use方法，use方法会将传入的中间件回调函数存储到middleware中间件数组中。

2. listen方法

> 当执行app.listen去监听端口的时候，其实其内部调用了http模块的createServer方法，然后传入内置的callback方法，这个callback方法就会将use方法存储的middleware中间件数组传给compose函数。

3. compose方法

> compose方法是洋葱模型的核心，compose方法中有一个dispatch方法，第一次调用的时候，执行的是第一个中间件函数，中间件函数执行的时候就是再次调用dispatch函数，也就说形成了一个递归，这就是next函数执行的时候会执行下一个中间件的原因，因此形成了一个洋葱模型。

```js
function compose (middleware) {
  // ...
  return function (context, next) {
    // last called middleware #
    let index = -1
    // 一开始的时候传入为 0，后续会递增
    return dispatch(0)
    function dispatch (i) {
      // 假如没有递增，则说明执行了多次
      if (i <= index) return Promise.reject(new Error('next() called multiple times'))
      index = i
      // 拿到当前的中间件
      let fn = middleware[i]
      if (i === middleware.length) fn = next
      // 当 fn 为空的时候，就会开始执行 next() 后面部分的代码
      if (!fn) return Promise.resolve()
      try {
        // 执行中间件，留意这两个参数，都是中间件的传参，第一个是上下文，第二个是 next 函数
        // 也就是说执行 next 的时候也就是调用 dispatch 函数的时候
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err)
      }
    }
  }
}
```


## 为什么需要洋葱模型？
> 因为很多时候，在一个app里面有很多个中间件，有些中间件需要依赖其他中间件的结果，洋葱模型可以保证执行的顺序，如果没有洋葱模型，执行顺序可能出乎我们的预期。


## 参考文献
[【Node】深入浅出 Koa 的洋葱模型](https://juejin.cn/post/7012031464237694983)