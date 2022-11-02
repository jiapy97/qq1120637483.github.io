---
title: 「注解」《你不知道的JavaScript（上卷）》第三章：函数作用域和块作用域
date: 2021-03-27
categories: 《你不知道的JavaScript》
tags: 
- 《你不知道的JavaScript》
---
## 函数中的作用域
![](https://img-blog.csdnimg.cn/img_convert/c1ed0673cb3b4fbdcd60935d35708c1a.png)

## 隐藏内部实现
![](https://img-blog.csdnimg.cn/img_convert/3d95f32d6d1cfcd0b361b7f5e2a0116b.png)

* 为什么不将所有的变量和函数都放在全局作用域中？

![](https://img-blog.csdnimg.cn/img_convert/4940c502dfce61c4dfe55601a38d1fa0.png)![](https://img-blog.csdnimg.cn/img_convert/6132b5cacf211ed25c3604a30a001a2d.png)

### 规避冲突
* 隐藏作用域中的变量和函数可以避免同名标识符之间的冲突。

![](https://img-blog.csdnimg.cn/img_convert/55e2fd3103872ce5e99fb1052f72f045.png)
![](https://img-blog.csdnimg.cn/img_convert/3838ccc38577b9d385c20683f396de99.png)

#### 全局命名空间
* 很多第三方库为了防止变量冲突，通常会为变量命名一个非常独特的名字。
![](https://img-blog.csdnimg.cn/img_convert/0581f499771c7f7190562544d272e893.png)

#### 模块管理
![](https://img-blog.csdnimg.cn/img_convert/22f90241e637adc223ec3c126a4d5295.png)

## 函数作用域
* 立即执行函数是一种既不需要函数名同时能够自动执行的函数。
### 匿名和具名
* 区分匿名函数表达式和函数声明：函数声明需要函数名，但是函数表达式则不需要。
* 匿名函数表达式有以下几个缺点：
1. 匿名函数在栈追踪中没有名字，会使得调试困难。
2. 没有函数名，如果需要递归时，只能使用已经过期的arguments.callee引用。
3. 匿名函数降低了代码的可读性。

### 立即执行函数表达式
* 立即执行函数的英文缩写：IIFE
* 立即执行函数传递参数
![](https://img-blog.csdnimg.cn/img_convert/2bcf4cd08df480a51e0ffe04dc0336f5.png)

* 倒置代码的运行顺序：window才是真正的参数
![](https://img-blog.csdnimg.cn/img_convert/6e5b25a8a4e846372831cc58a73bef86.png)

## 块作用域
* 分清定义在块级作用域内还是块级作用域之外
![](https://img-blog.csdnimg.cn/img_convert/44a0fdca098fd7c75c1ae39c79abf21d.png)

### with关键字可以形成一个块作用域
### try/catch
* catch中的参数会形成一个块级作用域
* 但是如果在catch内部进行var声明，依然是声明在全局作用域中
![](https://img-blog.csdnimg.cn/img_convert/5ca00bf0df7df66bdb30c963e4dadff9.png)

### let关键字
* let关键字会形成一个隐式的块级作用域，这个隐式是相对于下面的显式而言的。
![](https://img-blog.csdnimg.cn/img_convert/372af1527c6736d2f2c790c9ded64a50.png)

* let声明的变量不会在块作用域中进行提升。
![](https://img-blog.csdnimg.cn/img_convert/3794585857f414406486b196b5e67ca1.png)

#### 垃圾收集
* 通过块级作用域，可以让引擎清楚的知道没有必要保存已经用不到的变量了。
![](https://img-blog.csdnimg.cn/img_convert/42adb1f87135b859e4794875adc8ca79.png)

#### const关键字
* const同样可以用来创建块级作用域，但是块级作用域的值是固定的，但是如果存放的是引用地址的话，地址不能变，但是地址指向的值是可以修改的。
![](https://img-blog.csdnimg.cn/img_convert/d259ecf852f429f9ab241f539e4450cd.png)

## 小结
![](https://img-blog.csdnimg.cn/img_convert/271abb84aab5f4aa89daf787599ccf1b.png)



