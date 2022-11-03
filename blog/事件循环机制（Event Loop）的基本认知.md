---
title: 事件循环机制（Event Loop）的基本认知
date: 2021-05-18
categories: 浏览器知识
tags: 
- 浏览器知识
---
## 一、什么是事件循环机制？
>在介绍事件循环机制之前，我们要首先了解以下什么是事件循环机制，我们首先看下下面这段代码的执行顺序，正确的执行顺序应该是序号1>3>2

![](https://img-blog.csdnimg.cn/img_convert/d725ac1dc59a44f7311a8b1841510daf.png)

### 为什么是上面的顺序呢？
原因是JS引擎指向代码是从上往下执行的，所以首先会执行序号1这个语句，JS引擎会将这个语句放在调用栈当中，然后执行代码，将序号1打印在控制台当中，当这段代码执行完毕之后，便将这段代码从调用栈中移出去。然后开始执行后续的代码，此时setTimeout这段代码进入调用栈，这段代码，会调用Web API,2秒之后进入callback队列，此时JS引擎将setTimeout移出调用栈，继续执行后面的代码，所以屏幕上会先打印出序号1,3，此时eventLoop登场了，它会不断循环的访问callbackqueue，等2s之后Web API会将要执行的打印序号2这句话放入callbackqueue,eventLoop将callbackQueue中的内容放入调用栈，开始执行，然后屏幕上打印出序号2，这就是eventLoop的基本流程。
### 执行顺序图解
![](https://img-blog.csdnimg.cn/img_convert/d49b4d614dd7d061a67249e2b0eae291.png)

### 引出事件循环是什么
>JS的运行机制就是事件循环!
## 二、JS的执行顺序是什么？
1. JS是从上到下一行一行执行。
2. 如果某一行执行报错，则停止执行下面的代码。
3. 先执行同步代码，再执行异步代码

## 三、事件循环的执行过程
* 同步代码，调用栈执行后直接出栈
* 异步代码，放到Web API中，等待时机，等合适的时候放入回调队列（callbackQueue），等到调用栈空时eventLoop开始工作，轮询
* 微任务执行时机比宏任务要早
![](https://img-blog.csdnimg.cn/img_convert/c3dbc1a173bddef90d1a4a7ef7a16aef.png)

* 微任务在DOM渲染前触发，宏任务在DOM渲染后触发

## 四、微任务和宏任务的根本区别
* 微任务是由ES6语法规定的
* 宏任务是由浏览器规定的

## 五、事件循环的整体流程
1. 先清空call stack中的同步代码
2. 执行微任务队列中的微任务
3. 尝试DOM渲染
4. 触发Event Loop反复询问callbackQueue中是否有要执行的语句，有则放入call back继续执行
![](https://img-blog.csdnimg.cn/img_convert/bf35f47b530b624884c99f520551cd0c.png)

## 六、事件循环经典案例
![](https://img-blog.csdnimg.cn/20201015205742198.gif)

## 参考资料
[什么是Event Loop?](https://www.bilibili.com/video/BV1u54y1j7Yu?from=search&seid=14237450040319513888)

[[JavaScript]什么是事件循环(Event Loop)？](https://blog.csdn.net/iChangebaobao/article/details/109283166)
