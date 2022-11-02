---
title: Ajax-07：Ajax发送POST请求
date: 2021-03-23
categories: Ajax
tags: 
- Ajax
---
## 需求描述
当鼠标移动到div上的时候，向服务器发送请求，然后把服务器返回的结果显示到div上
## 客户端网页
![](https://img-blog.csdnimg.cn/img_convert/71743c0ab96465870b5cab9c8bebc1f2.png)
## 客户端代码
```js
<h2>需求：当鼠标移动到div上的时候，向服务器发送请求，然后把服务器返回的结果显示到div上</h2>
<div class="result"></div>
<script>
    const result = document.querySelector('.result');
    result.addEventListener('mouseover',function() {
        // 1. 创建xhr对象
        const xhr = new XMLHttpRequest();

        // 2. 初始化，设置请求方式和URL
        xhr.open('POST',"http://localhost:8000/server");

        // 3. 发送
        xhr.send();

        // 4. 事件绑定，处理服务器返回的结果
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if(xhr.status >= 200 && xhr.status < 300) {
                    result.innerHTML = xhr.response;
                }
            }
        }
    });
```
## 服务器端代码
由于是POST请求，需要添加路由，才能防止跨域问题的出现。
![](https://img-blog.csdnimg.cn/img_convert/b12fad447869784eecf4b443f2bf2b7d.png)
## 实现效果
![](https://img-blog.csdnimg.cn/img_convert/05b29bd723571018526e34b2ef39a26c.png)
## POST设置请求体
![](https://img-blog.csdnimg.cn/img_convert/c20a70552cb904909ae0b18165e87481.png)
* 请求体的格式无要求。
![](https://img-blog.csdnimg.cn/img_convert/467bba9c0a9575d42b8be5206b73b3b0.png)