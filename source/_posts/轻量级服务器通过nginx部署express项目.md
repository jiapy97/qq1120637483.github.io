---
title: 轻量级服务器通过nginx部署express项目
date: 2022-01-29
author: Justin
top: false
cover: false
categories: nginx
tags:
  - nginx
---

## 功能描述
> 博主在使用serverless搭建egg.js项目时发现，serverless目前还不支持socket.io，但是博主还是希望使用这个功能的，所以选择了购买轻量级服务器自己搭建，下面介绍下搭建的方法，自己搭建的好处是过程更加透明可控，缺点是比较繁琐，把这个过程写出来，让更多的开发者减少部署的难度，下面让我们来一起开始学习吧~

## 部署前的准备
1. 一台linux服务器。
2. 能够直接本地运行的前端项目。

## 服务器端设置
### 1. 安装node环境

```shell
wget https://nodejs.org/dist/v12.18.1/node-v12.18.1-linux-x64.tar.xz   
tar xf node-v12.18.1-linux-x64.tar.xz                                
cd node-v12.18.1-linux-x64   
```

### 2. 配置node

```shell
cp /etc/profile /etc/profile.bak
export PATH=$PATH:/root/node-v12.18.1-linux-x64/bin
source /etc/profile
```

### 3. 测试node是否安装完成

```shell
node -v
```

### 4. 安装forever

```js
npm install forever -g
```

### 5. 将node、npm、forever等工具加入到全局变量中

```shell
ln -s /usr/local/src/nodejs/bin/node /usr/local/bin/node
ln -s /usr/local/src/nodejs/bin/npm /usr/local/bin/npm
```

> 加入的过程中要注意上面路径中的node.js中的文件名，要根据自己的实际路径来。

### 6. 启动前端项目
```shell
forever start app.js
```

### 7. 安装nginx
```shell
yum -y install gcc zlib zlib-devel pcre-devel openssl openssl-devel
```

### 8. 下载并解压安装包
```shell
cd /usr/local
mkdir nginx
cd nginx
//下载tar包
wget http://nginx.org/download/nginx-1.13.7.tar.gz
tar -xvf nginx-1.13.7.tar.gz
```

### 9. 执行nginx相关命令
```shell
//进入nginx目录
cd /usr/local/nginx
//进入目录
cd nginx-1.13.7
//执行命令
./configure
//执行make命令
make
//执行make install命令
make install
```

### 10. 配置nginx.conf
```shell
vi /usr/local/nginx/conf/nginx.conf
```

### 11. 启动nginx
```shell
/usr/local/nginx/sbin/nginx -s reload
```

## nginx.conf的写法
> 将前端项目部署到服务器上，最关键的就是nginx.conf的写法，只要这个文件写的正确，几乎就快部署成功了。

> 快速查找nginx.conf文件的方法：

```shell
locate nginx.conf
```

> nginx.conf的写法：

* [CodeSandBox在线地址](https://codesandbox.io/s/async-https-9mj0v?file=/nginx.conf)

> 配置文件说明：

```shell
server {
    listen 80;
    server_name 124.223.104.214;
}
```

* server_name 后边跟的是你的服务器的地址
* listen 80 表示的是你的服务器开放的端口，这个端口一定要在服务器的设置上开启防火墙这个端口。

```shell
location / {
    #设置主机头和客户端真实地址，以便服务器获取客户端真实IP
    proxy_pass http://127.0.0.1:8000;
    proxy_set_header Host $host;

    proxy_set_header X-Real-IP $remote_addr;

    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;


    #禁用缓存
    proxy_buffering off;

}
```

* location 后面跟的是转发地址
* proxy_pass 后面跟的是你要转发给的部署在服务器上的后端地址和端口。



