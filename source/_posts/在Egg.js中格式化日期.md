---
title: 在Egg.js中格式化日期
date: 2022-01-03
author: Justin
top: false
cover: false
categories: Egg.js
tags:
  - Egg.js
---

## 将时间戳格式化为时分秒
1. 在app文件夹下创建文件夹extend,然后在extend文件夹下创建helper.js

```js
const sd = require('silly-datetime');

module.exports = {
  formatTime(unix) {
    return sd.format(new Date(unix * 1000),'YYYY-MM-DD HH:mm');
  }
}
```

2. 将时间戳修改为时分秒

```js
helper.formatTime(list[i].addTime)
```
