---
title: 「注解」《你不知道的JavaScript（上卷）》第五章：作用域闭包
date: 2021-04-04
categories: 《你不知道的JavaScript》
tags: 
- 《你不知道的JavaScript》
---
## 启示
* 理解闭包可以看做是某种意义上的重生。
* 掌握闭包将会功力大增。
* JavaScript中闭包无处不在。
![](https://img-blog.csdnimg.cn/img_convert/c137969a1654989be08c9f99e33cb49d.png)

## 实质问题
![](https://img-blog.csdnimg.cn/img_convert/98dff911963aa88cb251689d20766a57.png)
![](https://img-blog.csdnimg.cn/img_convert/9d2e1c7ad5bd0c8fa3aed1cd09f72307.png)

* 闭包使得函数可以继续访问定义时的词法作用域。
![](https://img-blog.csdnimg.cn/img_convert/c74e9e04238fdfa804db7673a204306b.png)
![](https://img-blog.csdnimg.cn/img_convert/852f792f33f4d27e1bfcff1f03b32d0e.png)

## 现在我懂了
![](https://img-blog.csdnimg.cn/img_convert/bc93bb1a1d9dde31fd4802842a9e17d7.png)
![](https://img-blog.csdnimg.cn/img_convert/58704f9f8a0b36ee48d67d7fab8cb014.png)
![](https://img-blog.csdnimg.cn/img_convert/9c01c4806569982aaf9655d2334dfec8.png)

## 循环和闭包
* 在看懂for循环中的闭包问题时，我们首先要知道一点，那就是延迟函数的回调通常是在循环结束的时候才执行，即使setTimeout的第二个参数是0.
![](https://img-blog.csdnimg.cn/img_convert/9708817c6bc3334ce885a3f473ebb46f.png)

* 所以下面的循环回输出5个6
![](https://img-blog.csdnimg.cn/img_convert/44f24facad46a11aed1ef04b2821f6d7.png)
![](https://img-blog.csdnimg.cn/img_convert/6ee54b88205c960a7cb5f0d3161dfffb.png)

* 尝试通过立即执行函数来解决这个问题
* 尝试1
![](https://img-blog.csdnimg.cn/img_convert/e0f9d9603f874288e5fe184ef6e6a2cf.png)

* 尝试2
![](https://img-blog.csdnimg.cn/img_convert/552e0901780d589d80e459f8f04bc3be.png)
![](https://img-blog.csdnimg.cn/img_convert/575f89727cb7173370a1070f9e4fbfc9.png)

### 重返块作用域
![](https://img-blog.csdnimg.cn/img_convert/74cebdb3a909628fc719ea3958e8b78b.png)
![](https://img-blog.csdnimg.cn/img_convert/b9f9177a845c40dbca69d9ee950de838.png)

## 模块
* 模块模式要具备两个必要条件
![](https://img-blog.csdnimg.cn/img_convert/f1ce33a1e17d715234c2bdb47b9cb126.png)
* 通过模块模式可以构造一个API对象
![](https://img-blog.csdnimg.cn/img_convert/dc3551fbfa9f5aded03e24d638a2e136.png)

### 现代的模块机制
* 本小节主要讲了模块define的源码，不做深入讨论。

### 未来的模块机制
* 关于模块化的内容，请参考这个文档
[ES6—49：模块化](https://blog.csdn.net/sinat_41696687/article/details/114517025?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522161624253116780255275278%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=161624253116780255275278&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_v1~rank_blog_v1-1-114517025.pc_v1_rank_blog_v1&utm_term=%E6%A8%A1%E5%9D%97)

## 小结
![](https://img-blog.csdnimg.cn/img_convert/4c916820df07b226dd1e9281246214e0.png)