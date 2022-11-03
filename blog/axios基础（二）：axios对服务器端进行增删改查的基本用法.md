---
title: axios基础（二）：axios对服务器端进行增删改查的基本用法
date: 2021-03-28
categories: Axios
tags: 
- Axios
---
## GET请求
```js
// 给第一个btn绑定GET请求
btns[0].onclick = function() {
    axios({
        method: 'GET',
        url: "http://localhost:3000/posts/2"
    }).then((response) => {
        console.log(response);
    })
}
```
## POST请求
```js
// 给第二个按钮，绑定POST请求，既然是POST请求则需要请求体
btns[1].onclick = function() {
    axios({
        method: 'POST',
        url: "http://localhost:3000/posts",
        data: {
            title: "这是第三篇文章，菜根谭",
            author: "玩野猫"
        }
    }).then((response) => {
        console.log(response);
    })
}
```
## PUT请求
```js
// 给第三个按钮，绑定PUT请求，PUT请求可以理解为修改已有的数据  需要加id
btns[2].onclick = function() {
    axios({
        method: 'PUT',
        url: "http://localhost:3000/posts/3",
        data: {
            title: "朱元璋很好看",
            author: "刘伯温"
        }
    }).then((response) => {
        console.log(response);
    })
}
```
## DELETE请求
```js
// 给第四个按钮，绑定DELETE请求，需要加id
btns[3].onclick = function() {
    axios({
        method: 'delete',
        url: "http://localhost:3000/posts/3",
    }).then((response) => {
        console.log(response);
    })
}
```