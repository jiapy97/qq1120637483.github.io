---
title: 一篇文章学会使用BootStrap
date: 2021-02-16
categories: BootStrap
tags: 
- BootStrap
- 前端
---

## 1：引入BootStrap的结构
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.min.js"></script>
</body>
</html>
```
## 2：基本模板
```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <!-- 下面一句的作用是告诉IE浏览器以最新版本（edge)的方式渲染页面 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 实现响应式，支持移动设备 -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim 和 Respond.js 是为了让 IE8 支持 HTML5 元素和媒体查询（media queries）功能 -->
    <!-- 警告：通过 file:// 协议（就是直接将 html 页面拖拽到浏览器中）访问页面时 Respond.js 不起作用 -->
    <!--[if lt IE 9]>
      <script src="https://cdn.jsdelivr.net/npm/html5shiv@3.7.3/dist/html5shiv.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/respond.js@1.4.2/dest/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <h1>你好，世界！</h1>

    <!-- jQuery (Bootstrap 的所有 JavaScript 插件都依赖 jQuery，所以必须放在前边) -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"></script>
    <!-- 加载 Bootstrap 的所有 JavaScript 插件。你也可以根据需要只加载单个插件。 -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>
  </body>
</html>
```

## 3：流体容器（.container-fluid）
* 流体容器会随着页面窗口的大小变化而变化，其宽度始终占据整个屏幕的宽度。
* 流体容器相当于width=100%
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <style>
        .container-fluid {
            background-color: aqua;
        }
    </style>
</head>
<body>
    <div class="container-fluid">
        test
    </div>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.min.js"></script>
</body>
</html>
```
## 4：固定容器（.container）
* 固定容器的宽度是固定的，不会随屏幕大小的变化而变化。
* 固定容器是有三个阈值的，如下图所示（当屏幕宽度大于等于1200px的时候，容器的宽度为1170px）
![](https://img-blog.csdnimg.cn/img_convert/f84f87e5f4aafddf1e654d64af919dc0.png)
![](https://img-blog.csdnimg.cn/img_convert/92d1289d35a1cd17239e14ae68c76e21.png)
## 5：栅格系统
* 在栅格系统中一行被分为12列
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <style>
        .container {
            background-color: aqua;
        }
        div[class |= col] {
            border: 1px solid;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-lg-10">col-lg-10</div>
            <div class="col-lg-2">col-lg-2</div>
        </div>
        <div class="row">
            <div class="col-lg-2">col-lg-2</div>
            <div class="col-lg-10">col-lg-10</div>
        </div>
        <div class="row">
            <div class="col-lg-6">col-lg-6</div>
            <div class="col-lg-6">col-lg-6</div>
        </div>
    </div>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.min.js"></script>
</body>
</html>
```
### 5.1 效果
![](https://img-blog.csdnimg.cn/img_convert/fea1c0de9b385b74e7ef0bf2229bb45d.png)
### 5.2 列的阈值划分（lg,md,sm,xs的含义）
![](https://img-blog.csdnimg.cn/img_convert/0a49c94385566326a2423a50b9f488f6.png)
### 5.3 被两个列控制
![](https://img-blog.csdnimg.cn/img_convert/8f8496941cb97567c620393a9ba8d186.png)
> 当屏幕处于lg的时候是10列，2列分布
> 当屏幕处于md大小的时候，是6列，6列平分。

![](https://img-blog.csdnimg.cn/img_convert/d3796093ce763130b93653b27df0b317.png)
>当屏幕处于sm的状态时，第一个占6列，第二个占6列，第二个之所以占6列，是因为第二个col-xs-6向上兼容。

### 5.4 列偏移
* 向右偏移一列。
![](https://img-blog.csdnimg.cn/img_convert/c4a13d3b16d522d4b2e6e9b314d53527.png)
## 6：标题标签
* 给类名添加.h1到.h6，实现下面的效果
![](https://img-blog.csdnimg.cn/img_convert/6dd832f1dab894e9d2b8f42b08000d1f.png)
## 7：常用标签
### 7.1 对齐
```html
<p class="text-left">Left aligned text.</p>
<p class="text-center">Center aligned text.</p>
<p class="text-right">Right aligned text.</p>
<p class="text-justify">Justified text.</p>
<p class="text-nowrap">No wrap text.</p>
```
![](https://img-blog.csdnimg.cn/img_convert/ea2a9f592bb57c267883a25351974094.png)
### 7.2 改变大小写
```html
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">Capitalized text.</p>
```
### 7.3 常用标签查询网址
https://v3.bootcss.com/css/#overview
## 8：表格（table)
* 模板代码
```html
<div class="container table-responsive">
        <table class="table table-bordered table-striped table-hover ">
            <tr class="success">
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
            </tr>
            <tr>
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
            </tr>
            <tr>
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
            </tr>
        </table>
    </div>
```
* 使用方法网址：[表格](https://v3.bootcss.com/css/#tables)
### 8.1 把表格变成响应式表格
* 通过给container所在的div添加table-responsive
## 9：按钮
* [参考网址](https://v3.bootcss.com/css/#buttons)
* 添加类名 btn-block  会让按钮占一整行
* 通过类名active使得按钮处于激活状态（被按的情况）
* 添加类名 disabled  使得按钮处于禁用状态
### 9.1 按钮模板
```html
<div class="container">
        <a class="btn btn-default" href="#" role="button">Link</a>
        <!-- 在导航和导航条上一般使用button -->
        <button class="btn btn-default" type="submit">Button</button>
        <input class="btn btn-default" type="button" value="Input">
        <input class="btn btn-default" type="submit" value="Submit">
        <button type="button" class="btn btn-success">（成功）Success</button>
        <button type="button" class="btn btn-primary btn-block btn-lg">（大按钮）Large button</button>
        <button type="button" class="btn btn-success btn-lg">（大按钮）Large button</button>

        <!-- 把按钮变为块元素 -->
        <button class="btn btn-success btn-block btn-md">充满容器</button>
        <!-- 使得按钮处于激活状态 -->
        <button class="btn btn-success btn-block btn-md active">充满容器</button>
        <!-- 使按钮处于不可用状态 -->
        <button class="btn btn-success btn-block btn-md disabled">充满容器</button>
    </div>
```
### 9.2 模板效果
![](https://img-blog.csdnimg.cn/img_convert/2795f82d0d6d84c6fcb40443be50059b.png)
## 10：图片
|类名| 作用 |
|--|--|
| img-responsive  | 使图片支持响应式布局 |
| center-block  | 让图片居中 |
| img-rounded  | 使图片表现为圆角矩形 |
| img-circle  | 使图片表现为圆形 |
| img-thumbnail | 让图片表现为带相册框的矩形 |
### 10.1 示例代码
```html
<div class="container">
        <img src="images/01-242x200.jpg" class="img-responsive center-block img-rounded">
        <img src="images/01-242x200.jpg" class="img-responsive center-block img-circle">
        <img src="images/01-242x200.jpg" class="img-responsive center-block img-thumbnail">
    </div>
```
### 10.2 效果展示
![](https://img-blog.csdnimg.cn/img_convert/72f137bf8b70db244f9d6d117422bc5f.png)
## 11：辅助类
### 11.1 关闭符号
```html
<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
```
### 11.2 三角符号
```html
<span class="caret"></span>
```
### 11.3 快速浮动
|类名| 作用 |
|--|--|
| pull-left | 快速左浮动 |
| pull-right | 快速右浮动 |
### 11.4 让内容块居中
|类名| 作用 |
|--|--|
| center-block | 内容块居中 |
| text-center | 让div中的文本居中 |
### 11.5 清除浮动
|类名| 作用 |
|--|--|
| clearfix （这个类名是给父元素添加的）| 清除浮动 |
## 12：响应式工具
### 12.1 隐藏或显示内容
* 通过添加如下类名，实现隐藏或显示内容（带星号的不要用）
![](https://img-blog.csdnimg.cn/img_convert/331d8f4293b0f596489539a17b8c647a.png)
## 13：缩略图
### 13.1 仿BootStrap官网缩略图源码
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <style>
        .thumbnail h3 {
            color: #337ab7;
        }
        .thumbnail small {
            font-size: 65%;
            text-align: center;
            line-height: 1;
            font-weight: 400;
        }
        .thumbnail p {
            text-align: center;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="thumbnail">
                    <img src="images/BootStrap网站实例.png" alt="...">
                    <div class="caption">
                        <h3 class="text-center">优站精选<br>
                            <small> Bootstrap 网站实例</small></h3>
                        <p>Bootstrap 优站精选频道收集了众多基于 Bootstrap 构建、设计精美的、有创意的网站。</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="thumbnail">
                    <img src="images/webpack.png" alt="...">
                    <div class="caption">
                        <h3 class="text-center">优站精选<br>
                            <small> Bootstrap 网站实例</small></h3>
                        <p>Bootstrap 优站精选频道收集了众多基于 Bootstrap 构建、设计精美的、有创意的网站。</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="thumbnail">
                    <img src="images/react.png" alt="...">
                    <div class="caption">
                        <h3 class="text-center">优站精选<br>
                            <small> Bootstrap 网站实例</small></h3>
                        <p>Bootstrap 优站精选频道收集了众多基于 Bootstrap 构建、设计精美的、有创意的网站。</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="thumbnail">
                    <img src="images/typescript.png" alt="...">
                    <div class="caption">
                        <h3 class="text-center">优站精选<br>
                            <small> Bootstrap 网站实例</small></h3>
                        <p>Bootstrap 优站精选频道收集了众多基于 Bootstrap 构建、设计精美的、有创意的网站。</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3">
                <div class="thumbnail">
                    <img src="images/svelte.png" alt="...">
                    <div class="caption">
                        <h3 class="text-center">优站精选<br>
                            <small> Bootstrap 网站实例</small></h3>
                        <p>Bootstrap 优站精选频道收集了众多基于 Bootstrap 构建、设计精美的、有创意的网站。</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="thumbnail">
                    <img src="images/nextjs.png" alt="...">
                    <div class="caption">
                        <h3 class="text-center">优站精选<br>
                            <small> Bootstrap 网站实例</small></h3>
                        <p>Bootstrap 优站精选频道收集了众多基于 Bootstrap 构建、设计精美的、有创意的网站。</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="thumbnail">
                    <img src="images/babeljs.png" alt="...">
                    <div class="caption">
                        <h3 class="text-center">优站精选<br>
                            <small> Bootstrap 网站实例</small></h3>
                        <p>Bootstrap 优站精选频道收集了众多基于 Bootstrap 构建、设计精美的、有创意的网站。</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="thumbnail">
                    <img src="images/nodejs.png" alt="...">
                    <div class="caption">
                        <h3 class="text-center">优站精选<br>
                            <small> Bootstrap 网站实例</small></h3>
                        <p>Bootstrap 优站精选频道收集了众多基于 Bootstrap 构建、设计精美的、有创意的网站。</p>
                    </div>
                </div>
            </div>
        </div>
    </div>


</body>

</html>
```
### 13.2 实现效果
![](https://img-blog.csdnimg.cn/img_convert/ce10f4cce318052a0e4ce11fd7e94c50.png)
> 要想实现点击图片跳转到指定网页，给img标签添加一个a标签即可。

## 14：仿BootStrap项目推荐页
### 14.1 源代码
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <style>
        .thumbnail h3 {
            color: #337ab7;
        }
        .thumbnail small {
            font-size: 65%;
            text-align: center;
            line-height: 1;
            font-weight: 400;
        }
        .thumbnail p {
            text-align: center;
        }
        .jumbotron {
            position: relative;
            color: #fff;
            text-align: center;
            background: linear-gradient(45deg, #020031, #6d3353);
            text-shadow: 0 1px 3px rgb(0 0 0 / 40%), 0 0 30px rgb(0 0 0 / 8%);
            box-shadow: inset 0 3px 7px rgb(0 0 0 / 20%), inset 0 -3px 7px rgb(0 0 0 / 20%);
        }

        .jumbotron h1 {
            font-size: 90px;
            font-weight: 700;
            line-height: 1;
        }

        .jumbotron h2 {
            font-size: 24px;
            font-weight: 200;
            line-height: 1.25;
        }

        .jumbotron:after {
            content: '';
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: block;
            background: url(./images/bootstrap-bgc.png) repeat 50%;
            position: absolute;
            opacity: .4;
            background-size: 150px 150px;
        }

        .masthead {
            padding: 90px 0 110px;
        }

        .projects-header {
            width: 60%;
            text-align: center;
            font-weight: 200;
            display: block;
            margin: 60px auto 40px;
        }

        .page-header {
            padding-bottom: 9px;
            /* margin: 40px 0 20px; */
            border-bottom: 1px solid #eee;
        }

        .page-header h2 {
            display: block;
            font-size: 42px;
            letter-spacing: -1px;
            margin-block-start: 0.83em;
            /* margin-block-end: 0.83em; */
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            /* font-weight: bold; */
        }

        .page-header p {
            margin: 0 0 10px;
            display: block;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
        }
    </style>
</head>

<body>
    <div class="jumbotron masthead">
        <div class="container">
            <h1>Bootstrap</h1>
            <h2>简洁、直观、强悍的前端开发框架，让web开发更迅速、简单。</h2>
        </div>
    </div>
    <div class="container projects">
        <div class="projects-header page-header">
            <h2>Bootstrap相关优质项目推荐</h2>
            <p>这些项目或者是对Bootstrap进行了有益的补充，或者是基于Bootstrap开发的</p>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="thumbnail">
                    <a href="http://google.com" target="_blank"><img src="images/BootStrap网站实例.png" alt="..." ></a>
                    <div class="caption">
                        <h3 class="text-center">优站精选<br>
                            <small> Bootstrap 网站实例</small></h3>
                        <p>Bootstrap 优站精选频道收集了众多基于 Bootstrap 构建、设计精美的、有创意的网站。</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="thumbnail">
                    <img src="images/webpack.png" alt="...">
                    <div class="caption">
                        <h3 class="text-center">优站精选<br>
                            <small> Bootstrap 网站实例</small></h3>
                        <p>Bootstrap 优站精选频道收集了众多基于 Bootstrap 构建、设计精美的、有创意的网站。</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="thumbnail">
                    <img src="images/react.png" alt="...">
                    <div class="caption">
                        <h3 class="text-center">优站精选<br>
                            <small> Bootstrap 网站实例</small></h3>
                        <p>Bootstrap 优站精选频道收集了众多基于 Bootstrap 构建、设计精美的、有创意的网站。</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="thumbnail">
                    <img src="images/typescript.png" alt="...">
                    <div class="caption">
                        <h3 class="text-center">优站精选<br>
                            <small> Bootstrap 网站实例</small></h3>
                        <p>Bootstrap 优站精选频道收集了众多基于 Bootstrap 构建、设计精美的、有创意的网站。</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3">
                <div class="thumbnail">
                    <img src="images/svelte.png" alt="...">
                    <div class="caption">
                        <h3 class="text-center">优站精选<br>
                            <small> Bootstrap 网站实例</small></h3>
                        <p>Bootstrap 优站精选频道收集了众多基于 Bootstrap 构建、设计精美的、有创意的网站。</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="thumbnail">
                    <img src="images/nextjs.png" alt="...">
                    <div class="caption">
                        <h3 class="text-center">优站精选<br>
                            <small> Bootstrap 网站实例</small></h3>
                        <p>Bootstrap 优站精选频道收集了众多基于 Bootstrap 构建、设计精美的、有创意的网站。</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="thumbnail">
                    <img src="images/babeljs.png" alt="...">
                    <div class="caption">
                        <h3 class="text-center">优站精选<br>
                            <small> Bootstrap 网站实例</small></h3>
                        <p>Bootstrap 优站精选频道收集了众多基于 Bootstrap 构建、设计精美的、有创意的网站。</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="thumbnail">
                    <img src="images/nodejs.png" alt="...">
                    <div class="caption">
                        <h3 class="text-center">优站精选<br>
                            <small> Bootstrap 网站实例</small></h3>
                        <p>Bootstrap 优站精选频道收集了众多基于 Bootstrap 构建、设计精美的、有创意的网站。</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</body>

</html>
```
### 14.2 实现效果
![](https://img-blog.csdnimg.cn/img_convert/80877ad5e19d88e08ce8132c75360174.png)
## 15：表单
### 15.1 基本模板
```html
<div class="container">
    <div class="col-md-5">
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="username" class="form-control" id="exampleInputEmail1" placeholder="Email">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <div class="form-group">
                <label for="exampleInputFile">File input</label>
                <input type="file" id="exampleInputFile">
                <p class="help-block">Example block-level help text here.</p>
            </div>
            <div class="checkbox">
                <label>
                    <input type="checkbox"> Check me out
                </label>
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
    </div>
</div>
```
### 15.2 基本模板呈现的效果
![](https://img-blog.csdnimg.cn/img_convert/78faf4734d27cc901832f5355126b555.png)
* 其余表单样式参阅[表单](https://v3.bootcss.com/css/#forms)
## 16：字体图标
### 16.1 示例代码
```html
<button type="button" class="btn btn-default" aria-label="Left Align">
    <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span>
</button>

<button type="button" class="btn btn-default btn-lg">
    <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Star
</button>
```
### 16.2 示例效果
![](https://img-blog.csdnimg.cn/img_convert/72b972a1bcc9b82748f9d18eb5a8e552.png)
* 基础类 glyphicon 是一定要加的。
* 改图标只用从库中选择类名然后添加上即可。
* 通过给span单独加样式，可以在字体图标的基础上继续进行修改
## 17：下拉菜单
* 引入时要先引入jquery和bootstrap.js才可以使用
### 17.1 模板代码
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <div class="dropdown">
            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Dropdown
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </div>
    </div>
    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
</body>
</html>
```
### 17.2 模板效果
![](https://img-blog.csdnimg.cn/img_convert/156a26de4c95f77c5297facb1cd0a1e7.png)
## 18：按钮组
### 18.1 示例代码
```html
<div class="btn-group" role="group" aria-label="...">
  <button type="button" class="btn btn-default">Left</button>
  <button type="button" class="btn btn-default">Middle</button>
  <button type="button" class="btn btn-default">Right</button>
</div>
```
### 18.2 呈现效果
![](https://img-blog.csdnimg.cn/img_convert/705a2385e24a2afadf2fe67bb73889ce.png)
## 19：输入框组
### 19.1 示例代码
```html
<div class="input-group">
        <span class="input-group-addon" id="basic-addon1">@</span>
        <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
    </div>

    <div class="input-group">
        <input type="text" class="form-control" placeholder="Recipient's username" aria-describedby="basic-addon2">
        <span class="input-group-addon" id="basic-addon2">@example.com</span>
    </div>

    <div class="input-group">
        <span class="input-group-addon">$</span>
        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
        <span class="input-group-addon">.00</span>
    </div>

    <label for="basic-url">Your vanity URL</label>
    <div class="input-group">
        <span class="input-group-addon" id="basic-addon3">https://example.com/users/</span>
        <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
    </div>
```
### 19.2 实现效果
![](https://img-blog.csdnimg.cn/img_convert/f45827ce90c913e80eb83c41782a3c95.png)
## 20：导航
### 20.1 基本案例
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
</head>

<body>
    <div class="container">
        <ul class="nav nav-tabs">
            <li role="presentation" class="active"><a href="#">Home</a></li>
            <li role="presentation"><a href="#">Profile</a></li>
            <li role="presentation"><a href="#">Messages</a></li>
        </ul>
    </div>



    <script src="js/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script>
        $('.nav-tabs a').click(function (e) {
            e.preventDefault()
            $(this).tab('show')
        })
    </script>
</body>

</html>
```
>注意：除了js要引入外，还要单加一个scripts标签，然后里面填上下面的代码,别忘了将类名修改为自己的导航的类名
```html
$('.nav-tabs a').click(function (e) {
            e.preventDefault()
            $(this).tab('show')
        })
```
### 20.2 案例实现效果
![](https://img-blog.csdnimg.cn/img_convert/a5e030a172c0085b81f5b86a08bbfce9.png)
## 21：导航条
### 21.1 示例代码
```html
<div class="container">
<nav class="navbar navbar-default">
   <div class="container-fluid">
     <!-- Brand and toggle get grouped for better mobile display -->
     <div class="navbar-header">
       <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
         <span class="sr-only">Toggle navigation</span>
         <span class="icon-bar"></span>
         <span class="icon-bar"></span>
         <span class="icon-bar"></span>
       </button>
       <a class="navbar-brand" href="#">Brand</a>
     </div>
 
     <!-- Collect the nav links, forms, and other content for toggling -->
     <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
       <ul class="nav navbar-nav">
         <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
         <li><a href="#">Link</a></li>
         <li class="dropdown">
           <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
           <ul class="dropdown-menu">
             <li><a href="#">Action</a></li>
             <li><a href="#">Another action</a></li>
             <li><a href="#">Something else here</a></li>
             <li role="separator" class="divider"></li>
             <li><a href="#">Separated link</a></li>
             <li role="separator" class="divider"></li>
             <li><a href="#">One more separated link</a></li>
           </ul>
         </li>
       </ul>
       <form class="navbar-form navbar-left">
         <div class="form-group">
           <input type="text" class="form-control" placeholder="Search">
         </div>
         <button type="submit" class="btn btn-default">Submit</button>
       </form>
       <ul class="nav navbar-nav navbar-right">
         <li><a href="#">Link</a></li>
         <li class="dropdown">
           <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
           <ul class="dropdown-menu">
             <li><a href="#">Action</a></li>
             <li><a href="#">Another action</a></li>
             <li><a href="#">Something else here</a></li>
             <li role="separator" class="divider"></li>
             <li><a href="#">Separated link</a></li>
           </ul>
         </li>
       </ul>
     </div><!-- /.navbar-collapse -->
   </div><!-- /.container-fluid -->
 </nav>
</div>

<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
```
### 21.2 实现效果
![](https://img-blog.csdnimg.cn/img_convert/92c3c00344e282358dca8679fe57bbd4.png)
## 22：分页与翻页
### 22.1 模板代码
```html
<div class="container">
        <nav aria-label="Page navigation">
            <ul class="pagination pagination-lg">
                <li>
                    <a href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li><a href="#">1</a></li>
                <li class="active"><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li class="disabled"><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li>
                    <a href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
```
### 22.2 实现效果
![](https://img-blog.csdnimg.cn/img_convert/fb3b7adbc167cde86edb29efc58aa991.png)
## 23：标签
### 23.1 模板代码
```html
<h1>Example heading <span class="label label-default">New</span></h1>
<h1>Example heading <span class="label label-success">New</span></h1>
```
### 23.2 模板效果
![](https://img-blog.csdnimg.cn/img_convert/10c875cca39acb6bf9dc4c5365db3aae.png)
## 24：徽章
### 24.1 模板代码
```html
<div class="container">
    <a href="#">Inbox <span class="badge">42</span></a>

    <button class="btn btn-primary" type="button">
        Messages <span class="badge">4</span>
    </button>
    <ul class="nav nav-pills" role="tablist">
        <li role="presentation" class="active"><a href="#">Home <span class="badge">42</span></a></li>
        <li role="presentation"><a href="#">Profile</a></li>
        <li role="presentation"><a href="#">Messages <span class="badge">3</span></a></li>
      </ul>
</div>
```
### 24.2 模板效果
![](https://img-blog.csdnimg.cn/img_convert/c1dd45b6f5822fc5f79c8ee0750c1920.png)
## 25：巨幕
### 25.1 模板代码
```html
<div class="container">
    <div class="jumbotron">
        <h1>Hello, world!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, sapiente amet tempora veritatis voluptas
            quis temporibus repudiandae ex nam similique.</p>
        <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
    </div>
</div>
```
### 25.2 模板效果
![](https://img-blog.csdnimg.cn/img_convert/8f570f66fd30f59ff17d4ad4256b96cc.png)
## 26：页头
### 26.1 模板代码
```html
<div class="page-header">
    <h1>Example page header <small>Subtext for header</small></h1>
</div>
```
### 26.2 模板效果
![](https://img-blog.csdnimg.cn/img_convert/6cb81dbb75602131d827c573645ae01f.png)
## 27：警告框
### 27.1 模板代码
```html
<div class="container">
    <div class="alert alert-success" role="alert">Lorem ipsum dolor sit amet.</div>
    <div class="alert alert-info" role="alert">Lorem ipsum dolor sit amet.</div>
    <div class="alert alert-warning" role="alert">Lorem ipsum dolor sit amet.</div>
    <div class="alert alert-danger" role="alert">Lorem ipsum dolor sit amet.</div>
    <div class="alert alert-warning alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span
                aria-hidden="true">&times;</span></button>
        <strong>Warning!</strong> Better check yourself, you're not looking too good.
    </div>
    <div class="alert alert-info" role="alert">
        <a href="http://www.baidu.com" class="alert-link">http://www.baidu.com</a>
    </div>
</div>
<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
```
### 27.2 模板效果
![](https://img-blog.csdnimg.cn/img_convert/4d485e6263f60ee7b065239a0c043e55.png)
## 28：进度条
### 28.1 模板代码
```html
<div class="container">
    <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
            style="width: 60%;">
            <span class="sr-only">60% Complete</span>
        </div>
    </div>
    <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
            style="width: 60%;">
            60%
        </div>
    </div>
</div>
```
### 28.2 模板效果
![](https://img-blog.csdnimg.cn/img_convert/5f588b12a352a0d2eefd18fda65f4c5c.png)
## 29：媒体对象
### 29.1 模板代码
```html
<div class="container">
    <ul class="media-list">
        <li class="media">
          <div class="media-left">
            <a href="#">
              <img class="media-object" src="images/02_64x64.jpg" alt="...">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">Media heading</h4>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, itaque!
          </div>
        </li>
        <li class="media">
            <div class="media-left">
              <a href="#">
                <img class="media-object" src="images/02_64x64.jpg" alt="...">
              </a>
            </div>
            <div class="media-body">
              <h4 class="media-heading">Media heading</h4>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, itaque!
            </div>
          </li>
          <li class="media">
            <div class="media-left">
              <a href="#">
                <img class="media-object" src="images/02_64x64.jpg" alt="...">
              </a>
            </div>
            <div class="media-body">
              <h4 class="media-heading">Media heading</h4>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, itaque!
            </div>
          </li>
          <li class="media">
            <div class="media-left">
              <a href="#">
                <img class="media-object" src="images/02_64x64.jpg" alt="...">
              </a>
            </div>
            <div class="media-body">
              <h4 class="media-heading">Media heading</h4>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, itaque!
            </div>
          </li>
      </ul>
</div>
<div class="container">
    <div class="media">
        <div class="media-left">
          <a href="#">
            <img class="media-object" src="images/02_64x64.jpg" alt="...">
          </a>
        </div>
        <div class="media-body">
          <h4 class="media-heading">Media heading</h4>
          ...
        </div>
      </div>
</div>
```
### 29.2 模板效果
![](https://img-blog.csdnimg.cn/img_convert/72335b6b79a626c18f3c24d7d4de02cc.png)
## 30：列表组
### 30.1 模板代码
```html
<div class="container">
    <div class="row">
        <div class="col-md-4">
            <ul class="list-group">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>
        </div>
        <div class="col-md-4">
            <ul class="list-group">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>
        </div>
        <div class="col-md-4">
            <ul class="list-group">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>
        </div>
    </div>
</div>
```
### 30.2 模板效果
![](https://img-blog.csdnimg.cn/img_convert/b3f26307fb4e2b73453d7b047d19b6de.png)
## 31：面板
### 31.1 模板代码
```html
<div class="container">
    <div class="panel panel-default">
        <div class="panel-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, voluptatum.
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading">Panel heading without title</div>
        <div class="panel-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi.
        </div>
      </div>
      
      <div class="panel panel-success">
        <div class="panel-heading">
          <h3 class="panel-title">Panel title</h3>
        </div>
        <div class="panel-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto facere, eveniet nulla voluptatem qui debitis libero officia error dolor labore quod illum, perferendis quibusdam voluptatum accusamus beatae cumque. Deserunt, laborum! Eum, inventore laudantium soluta voluptatibus, voluptas mollitia facere sint harum ad iste, ex eius ea atque porro iusto rem nostrum.
        </div>
      </div>
      
</div>
<div class="container">
    <div class="panel panel-default">
        <!-- Default panel contents -->
        <div class="panel-heading">Panel heading</div>
        <div class="panel-body">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam quas et quaerat dolorem doloremque maxime sequi sunt optio nam quisquam!</p>
        </div>
      
        <!-- Table -->
        <table class="table table-bordered table-striped table-hover ">
            <tr class="success">
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
            </tr>
            <tr>
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
            </tr>
            <tr>
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
                <td>表格内容</td>
            </tr>
        </table>
      </div>
</div>
```
### 31.2 模板效果
![](https://img-blog.csdnimg.cn/img_convert/28a17d20333aec5cbad21936b013aefe.png)
## 32：轮播图
### 32.1 模板代码
```html
<div class="container" style="width: 50%;">
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
            <div class="item active">
                <img src="images/轮播图.jpg" style="width: 100%; height: 100%;">
                <div class="carousel-caption">
                    <h3>第三张轮播图</h3>
                    <p>这里是对轮播图的介绍</p>
                </div>
            </div>
            <div class="item">
                <img src="images/轮播图.jpg" style="width: 100%; height: 100%;">
                <div class="carousel-caption">
                    <h3>第三张轮播图</h3>
                    <p>这里是对轮播图的介绍</p>
                </div>
            </div>
            <div class="item">
                <img src="images/轮播图.jpg" style="width: 100%; height: 100%;">
                <div class="carousel-caption">
                    <h3>第三张轮播图</h3>
                    <p>这里是对轮播图的介绍</p>
                </div>
            </div>
        </div>

        <!-- Controls -->
        <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</div>
<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
```
### 32.2 模板效果
![](https://img-blog.csdnimg.cn/img_convert/e138c87c16837809bcd171300cd55f65.png)
