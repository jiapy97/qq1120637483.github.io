---
title: 给next主题添加搜索，一直转圈（loading）
date: 2020-04-25
categories: hexo
tags: 
- hexo
---
## 结论：生成的search.xml的问题
>在我给next主题添加搜索功能时，我发现搜索那个区域一直有个圈在转，后来经过我的反复排查，大约耗时一上午吧，调试的时候真的令人头疼，我终于找到问题所在了，那就是因为生成的search.xml文件的问题。
## 解决方案：在[xml验证器](https://validator.aborla.net/?__cf_chl_jschl_tk__=b9482396112de743e3b68997352b4464da25a2a3-1587811681-0-ATINmZY8sGoeGP9szYrRxI7y3MSsDxnHw0ZixFC3nC-NG8rwVPDwStQYK3fRnMBmVnHctv2FQCx_uJrB2X6g4zNNDKX9fhqb8mtMh5QwPJzttxlHR2T_ZKpqKRL1sHq5qr30p6PItmr-qapRUmI0rbCzwPPQYV4T8FXiS3PWsN-2JqRLewjpnM1KsU3dXHLHiD7i3v8BfVG9R9luQS-kvFkDEfmHP6tmGSbdViF6MSmyVyr_BTXG6FTSNNBVfkEujQurh5xwRqKn2qwsrSRFidk)里将错误的文件生成正确的后，复制粘贴到原文件中即可。