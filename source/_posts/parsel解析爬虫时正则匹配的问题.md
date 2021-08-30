---
title: parsel解析爬虫时正则匹配的问题
date: 2020-05-23
categories: 爬虫
tags: 
- 爬虫
- python
---
今天，在进行parsel的正则匹配的时候，发现怎么都匹配不上,下面这样的字符。
```
&nbsp;&nbsp;
```
经过反复的头脑风暴和不断的测试，我发现，使用下面的方法可以实现
先使用
```
sel.css('font::text').getall()
```
把该函数匹配到的字符进行输出，我发现是下面这样的。
![](https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20200523122632.png)
也就是说nbsp变成了\xa0
## 解决办法：
```
sel.re(r'\n \n\xa0\xa0(.*?)<br>')
```
