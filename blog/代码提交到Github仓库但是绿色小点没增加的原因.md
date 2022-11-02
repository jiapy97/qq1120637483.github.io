---
title: 代码提交到Github仓库但是绿色小点没增加的原因
date: 2021-03-29
categories: debug
tags: 
- debug
---
## 原因
大概率是因为Github本地仓库的邮件名和Github账户的邮件名不一致。
## 解决办法
```
git config user.email  'your_email@example.com'
```
## 参考文献
[解决提交代码到Github不显示小绿点的问题](https://jasonkayzk.github.io/2020/06/25/%E8%A7%A3%E5%86%B3%E6%8F%90%E4%BA%A4%E4%BB%A3%E7%A0%81%E5%88%B0Github%E4%B8%8D%E6%98%BE%E7%A4%BA%E5%B0%8F%E7%BB%BF%E7%82%B9%E7%9A%84%E9%97%AE%E9%A2%98/)