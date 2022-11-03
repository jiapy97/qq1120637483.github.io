---
title: axios基础（一）：json-server服务搭建
date: 2021-03-28
categories: Axios
tags: 
- Axios
---
## 搭建步骤
### 1：npm安装
```
npm install -g json-server
```
### 2：创建db.json文件
```json
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```
### 3：启动json-server服务
```
json-server --watch db.json
```
