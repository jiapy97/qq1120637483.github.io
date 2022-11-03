---
title: JS模块化（二）：AMD规范（require.js）
date: 2021-03-30
categories: JS模块化
tags: 
- JS模块化
---
>AMD规范也可以称之为require.js
## 目录结构
![](https://img-blog.csdnimg.cn/img_convert/ad2d597039f9ae457f8072d1a1a6da7a.png)

## 无依赖模块写法
```js
// 这是一个没有依赖的模块
define(function() {
    let name = '这是没有依赖的模块';
    function getName() {
        return name;
    }
    // 暴露模块
    return {getName};
})
```
## 有依赖模块的写法
```js
// 下面的是有依赖的模块
define(['dataService'],function(dataService) {
    let msg = "alert.js";
    function showMsg() {
        console.log(msg,dataService.getName());
    };

    // 暴露模块
    return {showMsg};
})
```
## 主函数（汇总模块）
```js
(function() {
    requirejs.config({

        baseUrl: './js',

        paths: {
            dataService: './modules/dataService',
            alerter: './modules/alerter'
        }
    });
    requirejs(['alerter'],function(alerter) {
        alerter.showMsg();
    })
})()
```
## 浏览器执行网页
```js
<script data-main="./js/main.js" src="./js/libs/require.js"></script>
```
## require.js下载网址
https://github.com/requirejs/requirejs
### 注意事项
* 尤其要注意地址路径是否正确。
## require.js引入第三方模块
* 下面我们以jquery这个库为例：
1. 在libs下添加库文件
![](https://img-blog.csdnimg.cn/img_convert/160f0e107058a36212317385f323bd08.png)
2. 在主函数处配置路由
![](https://img-blog.csdnimg.cn/img_convert/b7d602bf2cedf9344e0439b8ba4fa570.png)
3. 在需要暴露的模块处添加参数
![](https://img-blog.csdnimg.cn/img_convert/778d72d0092026ed3edc389ea491f2e0.png)