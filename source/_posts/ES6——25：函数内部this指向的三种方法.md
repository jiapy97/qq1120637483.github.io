---
title: ES6——25：函数内部this指向的三种方法
date: 2021-03-16
categories: ES6
tags: 
- ES6
---
## 1：call()方法
![](https://img-blog.csdnimg.cn/img_convert/cc5a3902b0481327a1fd49c6bd660c32.png)
## 2：apply()方法
![](https://img-blog.csdnimg.cn/img_convert/55ea899b07d13f5e54f58d155b37773b.png)
* apply方法的第二个参数是一个数组
* 使用apply可以求最大值和最小值
![](https://img-blog.csdnimg.cn/img_convert/84b9015a070f5d066a77cbcf2ce40169.png)
## 3：bind()方法
![](https://img-blog.csdnimg.cn/img_convert/714951d486a49e99f7ddf8ee8bef7a16.png)
* bind不会调用函数。
* 调用bind函数后返回的是一个新函数，这个新函数的this是我们指定的。
![](https://img-blog.csdnimg.cn/img_convert/a08a50021ff55aefaf3bc9d7abec23c3.png)