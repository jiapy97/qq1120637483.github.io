---
title: React-24：React中使用fetch发送请求的两种方式
date: 2021-04-19
categories: React
tags: 
- React
---
## 方式1：使用promise的方式
```js
fetch(`http://localhost:3000/api1/search/users2?q=${this.input1.value}`).then(
            response => {
                console.log('成功联系到服务器');
                return response.json();
            },
        ).then(
            response => {
                console.log("成功获取到数据", response);
            },
        ).catch(
            error => {
                console.log("请求出错",error);
            }
        )
```
## 方式2：使用await async
```js
try {
            const response = await fetch(`http://localhost:3000/api1/search/users2?q=${this.input1.value}`);
            const data = await response.json();
            PubSub.publish('Item', { isLoading: false, isFirst: false,users: data.items });
            console.log(data);
        } catch (error) {
            PubSub.publish('Item', { isLoading:false,err:error.message });

        }
```
* 别忘了在函数的开头加上async
![](https://img-blog.csdnimg.cn/img_convert/7a8aa43b55f5f5574d7ae0b02a880828.png)