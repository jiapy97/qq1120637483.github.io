---
title: The href attribute requires a valid value to be accessible
date: 2021-05-30
categories: debug
tags: 
- debug
---
## 警告原因
```js
href="javascript:;"
```
上面这段代码的存在。

## 解决办法
```js
使用href="/#"代替
```

## 潜在问题
虽然上述方法可以解决Rract的警告问题，但是可能会影响到页面跳转功能的实现，如果你想使用的是Link-Button的功能，可以考虑下面的方法
```
<Button type="link">Link Button</Button>
```

