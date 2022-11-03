---
title: 「注解」《你不知道的JavaScript（上卷）》第四章：提升
date: 2021-03-30
categories: 《你不知道的JavaScript》
tags: 
- 《你不知道的JavaScript》
---
## 先有鸡还是先有蛋
![](https://img-blog.csdnimg.cn/img_convert/acb85f3cbc19209b9124186e4b165e60.png)
![](https://img-blog.csdnimg.cn/img_convert/3ac22ebb0da28be7e2dd19ede06911d8.png)

## 编译器再度来袭
* 编译阶段会先执行声明，赋值是在执行阶段执行的
![](https://img-blog.csdnimg.cn/img_convert/b1ef8bc153a4d66e3b06928ceb006a2e.png)
![](https://img-blog.csdnimg.cn/img_convert/628c7481e512a9822415aa6e63de8726.png)
![](https://img-blog.csdnimg.cn/img_convert/fb0b9a79ffdce38e08b770ed2017f366.png)
* 函数声明会被提升，但是函数表达式不会被提升
![](https://img-blog.csdnimg.cn/img_convert/ca08fd946b5c9de50765ee881b15794b.png)
![](https://img-blog.csdnimg.cn/img_convert/c9e3469c018e5c0f065413fdb38e6078.png)

## 函数优先
* 在JavaScript中，重复的声明是会被忽略掉的。
* 函数声明优先级要高于变量声明的优先级的
![](https://img-blog.csdnimg.cn/img_convert/7c7d1a091d5bcffc72ec9f5f734c0b43.png)

## 小结
![](https://img-blog.csdnimg.cn/img_convert/a610adcd5ecaaa5c1dc434e34b0d1910.png)
![](https://img-blog.csdnimg.cn/img_convert/7077dd9bf7342205ac37148ace8eff17.png)
