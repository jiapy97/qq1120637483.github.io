---
title: Next.js下配置babel以支持Css-In-Js
date: 2021-9-18
author: Justin
top: false
cover: false
categories: Next
tags:
  - Next
---
>由于Next.js和Emotion.js的升级，以往的babel配置不再适用于最新版本，如果还使用以前的babel配置则会报下面的错误

## 错误提示
* React is not defined.

>出现上面的错误，并不是没有引入react，而是在项目代码中想要使用emotion等css-in-js库，但是没有进行正确的配置，导致的错误，这个错误很难排查，主要是官方也没有给出解决方案。

## 解决方案
* 在项目的跟目录下创建.babelrc，并写入下面的代码。

```shell
{
    "presets": [
        [
            "next/babel",
            {
                "preset-react": {
                    "runtime": "automatic",
                    "importSource": "@emotion/react"
                }
            }
        ]
    ],
    "plugins": [
        "@emotion/babel-plugin"
    ]
}
```


## 参考链接
* [Github issue](https://github.com/nrwl/nx/issues/6778)