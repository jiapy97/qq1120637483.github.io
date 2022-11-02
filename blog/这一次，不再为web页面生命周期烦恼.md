---
title: 这一次，不再为web页面生命周期烦恼
date: 2021-8-15
author: Justin
top: false
cover: false
categories: 面试题
tags:
  - 面试题
---
## 什么是Web页面生命周期？
>我们每天在浏览器中通过一个又一个的标签页来浏览相关的信息，当我们在浏览器打开很多个标签页的时候，浏览器在资源紧张的时候，并不会为每一个网页保存资源，浏览器会在标签页不活动的时候，重新分配资源。浏览器对这些页面的干预会通过页面生命周期API暴露出来。这个生命周期就是本次我们讨论的主要话题。

## 页面生命周期的主要事件
### 1. DOMContentLoaded
>该API表示浏览器已经完全加载了HTML，并构建好了DOM树，但是css和img等外部资源尚未加载完成。注意：这里的外部资源指的是需要发送http请求获得的资源，而不是自己文件中的资源，我们看下面的例子，下面的这个例子中的img是来自cdn的资源，而不是本地资源，如果是请求的本地资源是能够获取到图片的尺寸的。

```html
<h1>Hello, DOMContentLoaded!</h1>
<img id="img" src="https://en.js.cx/clipart/train.gif?speed=1&cache=0">

<script>
    function testReady() {
        alert('DOM树已经构建完毕！')
        alert(`此时图片的大小为${img.offsetWidth}*${img.offsetHeight}`)

    }
    document.addEventListener('DOMContentLoaded',testReady);
</script>
```
[CodeSandBox在线演示](https://codesandbox.io/s/webye-mian-de-sheng-ming-zhou-qi-t9i8l?file=/index.html)

* DOMContentLoaded会等待所有script标签执行完毕之后再执行。
```js
<script>
    document.addEventListener("DOMContentLoaded", () => {
        alert("DOM ready!");
    });
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js"></script>

<script>
    alert("Library loaded, inline script executed");
</script>
```
>上面的代码会先输出 Library...，然后才输出DOM ready!

* 如果一个样式资源后面跟着一个script标签，必须执行完样式和这个script标签才会调用DOMContentLoaded。
```js
<script>
    document.addEventListener("DOMContentLoaded", () => {
        alert("DOM ready!");
    });
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js"></script>

<script>
    alert("Library loaded, inline script executed");
</script>
<link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap-grid.css" rel="stylesheet">
<script>
  // 在样式表加载完成之前，脚本都不会执行
  alert(getComputedStyle(document.body).marginTop);
</script>
```
### 2. window.onload
>这个事件表示，页面已经加载完了所有的HTML、DOM树和样式图片等资源。
```js
<script>
    window.onload = function test() {
        alert('HTML、图片、样式等资源均加载完毕');
        alert(`图片的大小是${img.offsetWidth}*${img.offsetHeight}`);
    }
</script>

<img id="img" src="https://en.js.cx/clipart/train.gif?speed=1&cache=0" />
```
[CodeSandBox在线演示](https://codesandbox.io/s/window-onloadde-shi-yong-fang-shi-zrk8k?file=/index.html)

### 3. window.unload
>这个事件在访问者离开页面的时候触发，在这里可以做一些不涉及延迟操作的事。
```js
let analyticsData = { /* 带有收集的数据的对象 */ };

window.addEventListener("unload", function() {
  navigator.sendBeacon("/analytics", JSON.stringify(analyticsData));
});
```
### 4. window.beforeunload
>这个事件会在叶面即将关闭或者跳转的时候提醒用户是否确认。
```js
<h1>Hello, DOMContentLoaded!</h1>
<a href="http://www.baidu.com">点击跳转到百度</a>

<script>
    window.addEventListener('beforeunload', (event) => {
        // Cancel the event as stated by the standard.
        event.preventDefault();
        // Chrome requires returnValue to be set.
        event.returnValue = 'Write something clever here..';
    });

</script>
```
[CodeSandBox在线演示](https://codesandbox.io/s/onbeforeunloadde-ji-ben-yong-fa-70i63?file=/index.html)

## 判断文档是否加载完毕：readyState
>该API共包含以下三个状态。
### 1. loading(文档正在加载)
### 2. interactive(可交互，但是一些图片资源和样式仍在加载中)
### 3. complete(文档全部加载完成)

```js
console.log('初始化状态是：',document.readyState);

img.onload = () => console.log('图片被加载完毕');

document.addEventListener('DOMContentLoaded',() => console.log('DOMContentLoaded'))

document.addEventListener('readystatechange',() => console.log('状态变为：',document.readyState))

window.onload = () => console.log('window onload');
```
[CodeSandBox在线演示](https://codesandbox.io/s/readystate-utpic?file=/index.html)

## 参考资料
* [页面生命周期](https://www.zhouzh.tech/posts/33c2ee80-99dc-11eb-8cf4-976b62ae6e9b)

* [MDN---document.readyState](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/readyState)



