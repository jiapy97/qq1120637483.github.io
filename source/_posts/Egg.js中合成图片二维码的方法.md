---
title: Egg.js中合成图片二维码的方法
date: 2021-12-28
author: Justin
top: false
cover: false
categories: Egg.js
tags:
  - Egg.js
---

## 借助qr-image实现生成二维码
1. 引入qr-image包

```js
const qr = require('qr-image');
```

2. 在service中定义获取二维码的函数

```js
  async getQrImage(qrText) {
    return new Promise((resolve,reject) => {
      try {
        const qrImage = qr.image(qrText,{type: 'png'});
        resolve(qrImage);
      } catch (error) {
        reject(false);
      }
    })
  }
```

>在控制器中调用第二步的函数即可获取到一个二维码对象。

## 借助canvas将二维码图片和背景图片合成在一起

1. 引入canvas

```js
const { createCanvas,Image } = require('canvas');
```

2. 在service中定义异步函数将两张图片合成在一起

```js
async getCanvasImage(text, bgDir, codeDir) {
    return new Promise((reslove, reject) => {
      try {
        const canvas = createCanvas(502, 448)
        const ctx = canvas.getContext('2d');
        //绘制背景图片
        const img1 = new Image();
        img1.onload = () => {
          ctx.drawImage(img1, 0, 0);
          //填充文字  注意字体
          ctx.font = '30px "Microsoft YaHei"'
          ctx.fillStyle = "#ffffff";
          ctx.fillText(text, 195, 185);

          const img2 = new Image();
          img2.onload = () => {
            ctx.drawImage(img2, 170, 210);
            reslove(canvas.createPNGStream());
          }
          img2.onerror = err => {
            reject(err);
          }
          //需要注意顺序
          img2.src = codeDir;
        }
        img1.onerror = err => { reject(err); }
        //需要注意顺序
        img1.src = bgDir;
      } catch (error) {
        reject(false);
      }
    })
  }
```

3. 在控制器中传入相关参数进行合并

```js
async showCode() {
    let id = this.ctx.request.query.id;
    let table = await this.ctx.model.Table.findByPk(id);
    let qrImage = await this.ctx.service.tools.getQrImage("http://xxx");
    let qrImageObj = await this.ctx.service.tools.uploadCos("code_1.jpg",qrImage);

    let canvasStream = await this.ctx.service.tools.getCanvasImage(
      table.title,
      'app/public/admin/images/bg.png',
      "http://" + qrImageObj.Location
    );
    let canvasImageObj = await this.ctx.service.tools.uploadCos("code_image_1.png",canvasStream);
    // this.ctx.body = canvasImageObj;
    await this.ctx.render("admin/table/code",{
      imgUrl: "http://" + canvasImageObj.Location
    })
  }
```

## 使用Html5 Canvas加水印合成图片二维码
>在已经有node canvas的情况下，还介绍html5 canvas是因为node canvas需要系统安装指定的程序，这对系统环境要求较高，而HTML5 canvas则不需要安装。

1. 静态静态页面中定义好canvas函数

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    #canvas {
      margin: 0 auto;
      display: block;
      width: 502px;
      height: 448px;
    }
  </style>

</head>
<body>
  <canvas id="canvas" width="505" height="448"></canvas>
</body>
<script>
  // 1.获取canvas这个DOM节点
  var canvas = document.querySelector('#canvas');
  //2.定义2d画布
  var ctx = canvas.getContext('2d');
  const img1 = new Image();
  img1.onload = () => {
    ctx.drawImage(img1, 0, 0);
    //填充文字  注意字体
    ctx.font = '30px "Microsoft YaHei"'
    ctx.fillStyle = "#ffffff";
    ctx.fillText("<%=text%>", 195, 180);

    const img2 = new Image();
    img2.onload = () => {
      ctx.drawImage(img2, 170, 205);
    }
    img2.onerror = err => {
      //  throw err 
      console.log(err);
    }
    //需要注意顺序
    img2.src = "<%=codeSrc%>";
  }
  img1.onerror = err => { console.log(err); }
  //需要注意顺序
  img1.src = "<%=bgSrc%>";
</script>
</html>
```

2. 在控制器中渲染数据即可

```js
  async showCode() {
    let id = this.ctx.request.query.id;
    let table = await this.ctx.model.Table.findByPk(id);
    let qrImage = await this.ctx.service.tools.getQrImage("http://jpy.wiki");
    let qrImageObj = await this.ctx.service.tools.uploadCos("code_1.jpg",qrImage);

    await this.ctx.render("admin/table/code",{
      text: table.title,
      bgSrc: '/public/admin/images/bg.png',
      codeSrc: "http://" + qrImageObj.Location
    })
  }
```
