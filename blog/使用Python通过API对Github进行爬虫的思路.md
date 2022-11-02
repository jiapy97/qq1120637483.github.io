---
title: 使用Python通过API对Github进行爬虫的思路
date: 2022-02-06
author: Justin
top: false
cover: false
categories: Python
tags:
  - Python
---

## 一、从GitHub Advisory上获取Rust漏洞数据的方法
> 执行下面的语句即可：
```shell
python github_advisory_rust_vulnerability_first.py
```

### 增量更新方法
> 执行下面的语句即可：

```shell
python github_advisory_rust_update.py
```



## 二、获取Cargo的第三方依赖数据的方法

> 执行下面的程序

```shell
python3 Get_Cargo_First.py
python3 clean_dataset.py
```

> 将cargo数据集：cargo_dependency_datasets.json

### 增量更新的方法

> 首先执行下面的语句：

```shell
python3 Get_Cargo_First.py
```

> 接着执行下面的语句：

```shell
python3 cargo_update.py
```

> 最后将产生这样的数据集：cargo_dependency_datasets.json 和 cargo_hashtable.json

## 三、从Rust官方维护的漏洞数据库中获取数据的思路
> 下面是Rust官方维护的漏洞数据库对应的网址：

https://rustsec.org/

> 下面是Rust官方维护的漏洞数据库对应的Github仓库的地址：

https://github.com/RustSec/advisory-db

> 下面是仓库API对应的地址：

https://api.github.com/repos/rustsec/advisory-db/contents

> 下面是API使用的参考文档：

https://docs.github.com/en/rest/reference/repos#get-repository-content

一、找到所有的漏洞地址

1. 要考虑到仓库中的两个入口点：

    * crates
    * rust
    
> crates对应的url是：

https://api.github.com/repos/rustsec/advisory-db/contents/crates?ref=main

> rust对应的url是：

https://api.github.com/repos/rustsec/advisory-db/contents/rust?ref=main

2. 找到两个入口点的所有的元素对应的md文档

> 以rust为出发点，找到的每一个元素的URL项的URL，是每一个漏洞对应的URL。

> 以crates为出发点，找到每一个元素对应的URL项的URL，也是每一个漏洞对应的URL。

3. 将所有的url构造一个URLS为最终的url集合。

4. 向URLS中的每一个URL发起请求，将其中的content值进行base64解码，然后通过正则解析的方式获取关键信息，其中id作为key，然后整个元素作为value。


## 四、RustSec数据获取与更新

1. 爬取RustSec数据的方法，只需运行下面的语句。

```py
python3 rustsec_crawler.py
```

>将输出 RustSec_Dataset.json 与 RustSec_HashTable.json

2. 增量更新的方法

```py
python3 rustsec_update.py
```

>将更新 RustSec_Dataset.json 与 RustSec_HashTable.json

