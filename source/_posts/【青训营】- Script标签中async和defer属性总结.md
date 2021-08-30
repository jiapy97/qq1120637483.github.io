---
title: 【青训营】- Script标签中async和defer属性总结
date: 2021-8-19
author: Justin
top: false
cover: false
categories: 面试题
tags:
  - 面试题
---
## 为什么需要async和defer？
>在进行详细介绍async和defer的区别之前，我们先讲讲为什么需要这两个属性，请看下面的例子，假如资源1需要加载很久才能完成，但是资源2很快就可以完成，此时用户需要等待很久才能看到页面，造成用户体验不好，所以我们需要一个推迟加载资源1的方法，这就是async和defer诞生的原因。
```js
<script src="资源1.js"></script>
<script src="资源2.js"></script>
```
* 解决上述问题的方法
>让第二个文件推迟执行，也就是说添加defer属性。
```js
<script src="资源1.js" defer></script>
```
## async和defer的区别
### 1. 不含async也不含defer
>此时执行顺序是同步的，也就是按照定义的顺序，谁在上面谁先执行，执行完一个在执行下一个。这是script标签在body底部的情况，如果在head中定义则会阻塞HTML的解析，请看下图。JS脚本的加载和执行会阻塞DOM的渲染。
### 2. 只含async
>立即下载，不影响其他操作，等下载完成之后在暂停HTML解析然后执行脚本。(加载完成后会立即执行)
### 3. 只含defer
>立即下载，但是在Html解析和script加载完之后在执行defer属性标记的脚本。

## async和defer的相同之处
* 都是异步加载。
* 都不影响DOM解析和其他资源的加载。

**执行步骤图示**
![在这里插入图片描述](https://img-blog.csdnimg.cn/3b2c1f2ae44146efa59678661d48d469.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NpbmF0XzQxNjk2Njg3,size_16,color_FFFFFF,t_70)


>如果你想对这两个属性进行测试，可以尝试使用node创建一个服务器，然后通过延迟返回来测试输出的顺序。

## 参考资料
* [async和defer属性的区别-[译]](https://juejin.cn/post/6844904015956803597)

* [async与defer有什么异同？](https://github.com/wsqww/devNote/issues/21)

* [Script async 与 defer 有什么区别](https://segmentfault.com/a/1190000038575560)

* [script标签上async 和 defer的区别](https://github.com/gwl002/gwl002.github.io/issues/7)
