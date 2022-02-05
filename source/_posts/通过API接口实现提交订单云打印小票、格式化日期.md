---
title: 通过API接口实现提交订单云打印小票、格式化日期
date: 2022-02-05
author: Justin
top: false
cover: false
categories: Egg.js
tags:
  - Egg.js
---

## 一、硬件介绍
* 一台能够实现wifi自动接单的云打印机
* 可以参考飞蛾云打印机（https://www.feieyun.com/）

## 二、云打印机的使用方法
> 还是以上文提到的飞蛾云打印机为例，进行介绍：

1. 给打印机连接电源。
2. 给打印机装上打印纸。
3. 配置打印机WiFi密码。
4. 通过打印机的二维码来配置设备，并进行测试打印。

## 三、开发者接入云打印的方法
1. 通过飞蛾云打印的开放平台。
2. 通过文档注册账户。
3. 下载对应的SDK。
4. 配置SDK，并进行测试打印。

> 云打印机的SDK本质就是一个实现打印的Demo，针对不同的开发语言。

## 四、格式化日期
> 在Vue2中，我们可以使用过滤器对日期进行格式化，但是Vue3中去除了这个过滤器，官方建议使用计算属性或者自定义方法来对日期进行格式化。

> 下面主要介绍如何通过第三方模块moment，进行日期格式化。

1. 在项目中安装模块

```shell
 npm i moment --save
```

2. 在vue的指定页面中引入moment

```js
import moment from 'moment'
```

3. 定义一个方法

> 首先定义一个模式串，然后通过moment将毫秒变为秒，然后利用我们的模式串进行转换。

```js
getTime(time: any) {
  const pattern = "YYYY-MM-DD hh:mm:ss";
  return moment(time * 1000).format(pattern)
}
```

4. 在模板中调用我们上文定义好的方法

```js
<div class="order_time">下单时间：{{getTime(list.addTime)}}</div>
```

5. 此时毫秒的数据将变为年月日的时间格式。

## 格式化日期模式串的参数含义

![image.png](https://img-blog.csdnimg.cn/img_convert/e00b56a06cdc2848b2d345ee28e5b8d1.png)

[参考文献](https://blog.csdn.net/ZYS10000/article/details/104737438)

## 总结
> 我们常见的扫码点餐实现云打印小票的实现原理就是服务器通过SDK下达打印的指令，然后通过WIFI传递给打印机，从而实现云打印。