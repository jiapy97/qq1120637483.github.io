---
title: Egg.js中定时任务的核心用法
date: 2021-11-03
author: Justin
top: false
cover: false
categories: Egg.js
tags:
  - Egg.js
---
## 一、定时任务的基本使用
1. 在app文件夹下新建一个schedule文件夹，并在下面建立一个watchfile.js（可以自定义）

```js
const Subscription = require('egg').Subscription;

let i = 0;

class WatchFile extends Subscription {
  static get schedule() {
    return {
      interval: '1s',
      type: 'all'      // 指定所有的进程都需要执行
    }
  }
  async subscribe() {
    i++;
    console.log(i);
  }
}
module.exports = WatchFile;
```

2. 控制台将每隔1s打印下面的内容

![image.png](https://img-blog.csdnimg.cn/img_convert/89990d683194597efc34d941d29e66ab.png)

3. 下面是一种简写的方式

```js
let i = 0;
module.exports = {
  schedule: {
    interval: '1s', // 1 分钟间隔
    type: 'all', // 指定所有的 worker 都需要执行
  },
  async task(ctx) {
    i++;
    console.log(i);
  },
};
```

## 二、定时爬取指定网页的内容
1. 安装cheerio模块

>这个模块能够解析HTML页面的内容，使用的是JQuery语法。

```shell
npm install cheerio
```

2. 导入模块

```shell
const cheerio = require('cheerio');
```

3. 在服务中定义爬虫模块spider.js

```js
'use strict';

const Service = require('egg').Service;

class SpiderService extends Service {
  async requestUrl(url) {
    const result = await this.ctx.curl(url);
    return result;
  }
}

module.exports = SpiderService;
```

4. 定时任务解析服务获取到的内容

```js
module.exports = {
  schedule: {
    interval: '1s', // 1 分钟间隔
    type: 'all', // 指定所有的 worker 都需要执行
  },
  async task(ctx) {
    const url = "https://news.baidu.com";
    const result = await ctx.service.spider.requestUrl(url);
    const htmlData = result.data.toString();
    const $ = cheerio.load(htmlData,{decodeEntities: false});

    $('.hotnews a').each(function() {
      console.log($(this).html());
    })
  },
};
```

