---
title: Vue与antd结合使用
date: 2022-01-04
author: Justin
top: false
cover: false
categories: Vue
tags:
  - Vue
---

## 什么是antd？
> antd是蚂蚁集团旗下开发的一款优秀的前端UI框架，目前这个框架支持Vue和React。这个框架主要用于开发企业级的后台产品，如果想开发移动端应用的话可以选择Ionic。

## 选择合适的官方文档
>在antd vue官网上选择2.x的antd，因为这个版本对应的是vue3的。

![image.png](https://img-blog.csdnimg.cn/img_convert/79213f1bb286c20e8e90b493f211f765.png)

## 使用步骤
1. 在已有的antd项目中安装antd。

```js
npm i --save ant-design-vue@next
```

2. 在入口文件中引入antd以及antd.css，并挂载到vue身上。

```js
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
app.use(Antd);
```

3. 只需在组件的模板中直接使用即可。

### 添加图标
1. 在script标签中引入图标

```js
import {
  HomeOutlined,
} from '@ant-design/icons-vue';
```

2. 注册组件

```js
  components: {
    HomeOutlined
  }
```

3. 使用组件

```js
<HomeOutlined />
```

4. 可以通过行内样式的形式来改变组件的样式

```js
<HomeOutlined style="color: blue" />
```

5. 在按钮里加入图标（通过template）

```js
<a-button type="primary" :size="size">
  <template #icon>
    <DownloadOutlined />
  </template>
  Download
</a-button>
```

> 注意：上面的这种写法依然要引入并注册。

## 表单组件
> 下面是vue结合antd的基础表单组件的实现效果和代码。

![image.png](https://img-blog.csdnimg.cn/img_convert/c65443818a2dac978eee77e473ac6697.png)

```js
<template>
  <div>
    <ul class="input_list">
      <li>姓名：<a-input v-model:value="userinfo.username"></a-input></li>
      <li>年龄：<a-input v-model:value="userinfo.age"></a-input></li>
      <li>
        性别：
        <a-radio-group v-model:value="userinfo.sex">
          <a-radio value="男">男</a-radio>
          <a-radio value="女">女</a-radio>
        </a-radio-group>
      </li>
      <li>
        爱好：
        <span v-for="(item, index) in userinfo.hobbies" :key="index">
          <a-checkbox v-model:checked="item.checked">{{
            item.label
          }}</a-checkbox>
        </span>
      </li>
      <li>
        城市：
        <a-select
          v-model:value="userinfo.selectedCity"
          mode="tags"
          style="width: 300px"
          placeholder="选择城市"
          :options="userinfo.options"
        >
        </a-select>
      </li>
      <li>
        生日：
        <a-date-picker v-model:value="userinfo.birthday" @change="pickerChange" />
      </li>
    </ul>

    {{ userinfo }}
  </div>
</template>

<script>
import { defineComponent } from "vue";
import moment from 'moment';
const dateFormat = "YYYY-MM-DD";
export default defineComponent({
  data() {
    return {
      userinfo: {
        username: "",
        age: "",
        sex: "男",
        hobbies: [
          { label: "吃饭", checked: true },
          { label: "睡觉", checked: true },
          { label: "写代码", checked: false },
        ],
        options: [
          { value: "北京" },
          { value: "上海" },
          { value: "广州" },
          { value: "深圳" },
        ],
        selectedCity: ["北京"],
        birthday: moment('2021-01-03', dateFormat),
      },
    };
  },
  methods: {
    pickerChange(e) {
      // console.log(e._d)
      if (!e) return;
      var oDate = new Date(e._d);
      console.log(oDate.getTime());
    },
  },
});
</script>

<style lang="scss">
ul {
  list-style: none;
}

.input_list {
  padding: 10px;
  li {
    margin-bottom: 15px;
    & > input {
      width: 400px !important;
    }
  }
}
</style>
```

## 在Node.js中实现图片上传或文件
1. 安装第三方依赖

```shell
npm i --save multer
```

2. 引入multer模块

```js
const multer = require('multer');
```

3. 配置storage

```js
var storage = multer.diskStorage({
//配置上传的目录
destination: async (req, file, cb)=>{
    //1、获取当前日期 20200703
    let day=sd.format(new Date(), 'YYYYMMDD');
    // static/upload/20200703
    let dir=path.join("static/upload",day)
    //2、按照日期生成图片存储目录  mkdirp是一个异步方法
    await mkdirp(dir)   

    cb(null, dir) //上传之前目录必须存在
},
//修改上传后的文件名
filename: (req, file, cb)=> {
    //1、获取后缀名
    let extname= path.extname(file.originalname);
    //2、根据时间戳生成文件名
    cb(null, Date.now()+extname)
}
```

4. 使用multer

* tools.js

```js
const multer = require('multer');
const path = require('path');
const sd = require('silly-datetime');
const mkdirp = require('mkdirp')
let tools={
    multer(){

        var storage = multer.diskStorage({
            //配置上传的目录
            destination: async (req, file, cb)=>{
                //1、获取当前日期 20200703
                let day=sd.format(new Date(), 'YYYYMMDD');
                // static/upload/20200703
                let dir=path.join("static/upload",day)
                //2、按照日期生成图片存储目录  mkdirp是一个异步方法
                await mkdirp(dir)   
                
                cb(null, dir) //上传之前目录必须存在
            },
            //修改上传后的文件名
            filename: (req, file, cb)=> {
                //1、获取后缀名
                let extname= path.extname(file.originalname);
                //2、根据时间戳生成文件名
                cb(null, Date.now()+extname)
            }
        })
        
        var upload = multer({ storage: storage })

        return upload;
        
    },
    md5(){

    }
}

module.exports=tools
```

* routers.js

```js
router.post("/doAdd",tools.multer().single("pic"), (req, res) => {
    //获取表单传过来的数据    
    res.send({
        body: req.body,
        file: req.file
    });
})
```

