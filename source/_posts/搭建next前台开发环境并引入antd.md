---
title: 搭建next前台开发环境并引入antd
date: 2021-9-14
author: Justin
top: false
cover: false
categories: Next
  - Next
---

>参考文档：https://jspang.com/detailed?id=52

## 1：搭建next开发环境

```shell
npx create-next-app blog
```

## 2：进入blog目录
```shell
cd blog
```

## 3：使用yarn测试
```js
yarn dev
```

>如果能够进入到下面的界面，说明前三步已经成功了！

![](https://img-blog.csdnimg.cn/img_convert/396d0b0e355a0a878ba143907967e35f.png)

## 4：加载antd
```shell
yarn add antd 
```

## 5：在pages目录下建立_app.js文件，并写入下列内容
```js
import App from 'next/app'

import 'antd/dist/antd.css'

export default App
```

## 6：引入Button组件
```js
import React from 'react'
import Head from 'next/head'
import {Button} from 'antd'
const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <div><Button>我是按钮</Button></div>
 </>
)

export default Home
```

## 7：测试实现效果
>出现下面的效果，表示前台环境搭建成功！

![](https://img-blog.csdnimg.cn/img_convert/57aed284eea2d3ffa6c8e9ddda31c625.png)

