---
title: Egg.js中使用富文本编辑器的方法
date: 2021-11-29
author: Justin
top: false
cover: false
categories: Egg.js
tags:
  - Egg.js
---

## 通过wysiwyg-editor实现
>wysiwyg-editor的主要参考文档包括下面两个：

* Github官方文档：https://github.com/froala/wysiwyg-editor
* 配置参考文档：https://froala.com/wysiwyg-editor/docs/options


### 方式一：通过CDN引入
>在需要使用富文本编辑器的页面，通过下面的cdn进行引入。

```js
<link href="https://cdn.jsdelivr.net/npm/froala-editor@latest/css/froala_editor.pkgd.min.css" rel="stylesheet" type="text/css" />

<textarea></textarea>

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/froala-editor@latest/js/froala_editor.pkgd.min.js"></script>

<script>
  new FroalaEditor('textarea');
</script>
```

>给富文本编辑器指定高度

```js
  <script>
    new FroalaEditor('#content',{
      height: 200
    });
  </script>
```

>给富文本编辑器指定语言。

```js
<link href="/public/wysiwyg/css/froala_editor.pkgd.min.css" rel="stylesheet" type="text/css" /> 
<script type="text/javascript" src="/public/wysiwyg/js/froala_editor.pkgd.min.js"></script>
<script type="text/javascript" src="/public/wysiwyg/js/languages/zh_cn.js"></script>
  <script>
    new FroalaEditor('#content',{
      height: 200,
      language: "zh_cn"
    });
  </script>
```

>去掉富文本编辑器的版权。

```js
  <script>
    new FroalaEditor('#content',{
      height: 200,
      language: "zh_cn",
      attribution: false
    });
  </script>
```

### 方式二：通过Github将源码下载下来后手动引入。

## 富文本编辑器实现图片的上传

### Egg.js中配置针对一些地址关闭CSRF安全验证
>只需在config.default.js中进行下面的配置即可，返回true的地址是不会进行CSRF校验的。

```js
  config.security = {
    csrf: {
      ignore: ctx => {
        if (ctx.request.url === `/${config.adminPath}/product/doUpload`) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
```

### 实现上传到富文本编辑器即上传到COS上
1. 在静态文件上添加imageUploadURL属性

```js
    new FroalaEditor('#content',{
      height: 200,
      language: "zh_cn",
      attribution: false,
      imageUploadURL: `/<%=adminPath%>/product/doUpload`
    });
```

2. 关闭CSRF验证。

3. 控制器中实现如下逻辑，需要注意的是需要给编辑器返回指定类型的json对象。

```js
async doUpload() {

    const { ctx } = this;
    const body = ctx.request.body;
    const file = ctx.request.files[0];
    if (file) {
      var source = fs.createReadStream(file.filepath);
      var filename = this.ctx.service.tools.getCosUploadFile(file.filename);

      await this.ctx.service.tools.uploadCos(filename,source);
    }

    ctx.body = {link: this.config.cosUrl + "/" + filename};

  }
```

## 总结
>通过上文介绍的插件来实现富文本编辑器，可以让我们站在巨人的肩膀上继续前进，本文只是给出了基本的使用方法，更加详细的配置文件和配置信息请查看上文的两个在线地址。



