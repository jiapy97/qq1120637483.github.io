---
title: DNS解析优化的主要方法
date: 2021-9-27
author: Justin
top: false
cover: false
categories: 前端优化
tags:
  - 前端优化
---

## 如何清除DNS缓存？
>在浏览器中输入下面的地址：

`chrome://net-internals/#dns`

>同时需要清空socket池

![image.png](https://img-blog.csdnimg.cn/img_convert/32d28fc3e1bd4eb6ff532b189ce705ae.png)

>清除系统的DNS缓存

1. 查看Windows系统中的缓存

```shell
ipconfig /displaydns
```

2. 在windows中清除DNS缓存记录

```shell
ipconfig /flushdns
```

3. 在macOS中清除DNS缓存记录

```shell
sudo killall -HUP mDNSResponder
```

## 如何清空缓存并进行硬刷新？
>在F12的情况下，右键刷新按钮即可选择。

## 什么是TTL？
>当我们进行域名解析设置的时候，平台总会让我们设置一个TTL时间，这个TTL时间指的就是域名对应的DNS解析记录的缓存的过期时间。如果经常更换域名指向的IP地址，可以将这个时间设置短一些，但是如果不经常更换IP地址的话，可以将这个时间设置的长一些。

## DNS解析优化的主要方法

>一般来说，在前端优化中与DNS有关的有两点：

* 减少DNS的请求次数
* 进行DNS预获取：DNS Prefetch

### 1. 减少DNS查找
>域名系统DNS将主机名映射到IP地址，就像电话簿将人们的姓名映射到他们的电话号码中，在浏览器中输入 www.taobao.com 时，浏览器联系的DNS解析器将返回该服务器的IP地址，DNS有成本，DNS通常需要20-120毫秒来查找给定主机名的IP地址，在DNS查找完成之前，浏览器无法从该主机名下载任何内容。

>缓存DNS查找以提高性能，这种缓存可以由用户的ISP或局域网维护的特殊缓存服务器上进行，但是在个别用户的计算机上也会发生缓存，DNS信息保留在操作系统的DNS缓存中，大多数浏览器都有自己的缓存，与操作系统的缓存分开，只要浏览器将DNS记录保留在自己的缓存中，它就不会对操作系统的记录请求进行干扰。

>默认情况下Chrome会缓存1分钟的DNS查找。

>当客户端中的DNS缓存为空时（浏览器和操作系统都为空），DNS查找的次数和页面中主机名的数量相同。这其中包括页面中URL、图片、脚本文件、样式表、Flash对象等包含的主机名。减少主机名的数量可以减少DNS查找次数。

>减少主机名的数量还可以减少页面中并行下载的数量，减少DNS查找次数可以节省响应时间，但是减少并行下载却会增加响应时间。

### 2. DNS预获取
>DNS-prefetch（DNS预获取）是尝试在请求资源之前解析域名，这可能是后面要加载的文件，也可能是用户尝试打开的链接目标。域名解析和内容载入时串行的网络操作，所以这个方式能减少用户的等待时间，提升用户体验。

>DNS-prefetch可以帮助开发人员掩盖DNS解析延迟。HTML的link元素通过dns-prefetch的rel属性值提供此功能，然后再href属性中指要跨域的域名。

![image.png](https://img-blog.csdnimg.cn/img_convert/9ab6c26121ab5a9c3a9dd0d99d78b36b.png)

>每当站点引用跨域资源的时候，都应在head元素中放置dns-prefetch提示，但是要记住下面的注意事项。

1. DNS-prefetch仅对跨域的DNS查找有效。
2. dns-prefetch要谨慎使用，多页面重复DNS预解析会增加DNS查询次数。
3. 默认情况下浏览器会对页面中和当前域名不在同一个域的域名进行预获取，并且缓存结果，这就是隐式的DNS Prefetch。如果想对页面中没有出现的域进行获取，那么就要使用显示的DNS Prefetch了。
4. 虽然使用DNS Prefetch能够加快页面的解析速度，但是也不能滥用，因为有开发者指出禁用DNS预获取能节省每月100亿的DNS查询。

### 3. 延长DNS缓存时间

### 4. 尽可能使用A记录代替CNAME

### 5. 使用CDN加速域名





