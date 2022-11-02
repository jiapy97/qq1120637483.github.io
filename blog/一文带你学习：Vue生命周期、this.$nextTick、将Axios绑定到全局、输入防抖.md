---
title: 一文带你学习：Vue生命周期、this.$nextTick、将Axios绑定到全局、输入防抖
date: 2021-12-20
author: Justin
top: false
cover: false
categories: Vue
tags:
  - Vue
---

## 生命周期图示

![image.png](https://img-blog.csdnimg.cn/img_convert/75d9c45527cb6de6aec889e968ff2c1d.png)

## 触发顺序
1. beforeCreate
2. created
3. beforeMount
4. mounted
5. beforeUpdate
6. updated
7. beforeUnmount
8. unmounted

## 动态组件keep-alive
>当我们卸载组件后进行重新挂载的时候，如果想要保持组件的状态，避免反复重渲染带来的性能问题，这个时候可以使用keep-alive。

### 使用方法
>我们只需通过keep-alive这个组件进行包裹目标组件即可。

```js
<keep-alive>
  <life-cycle v-if="isShow"></life-cycle>
</keep-alive>
```

>当keep-alive缓存的组件被激活时，activated这个生命周期函数被调用，当keep-alive缓存的组件被卸载时，deactivated这个生命周期函数被调用。

## this.$nextTick的用法
>有时候从远程获取到的值，改变了定义的变量，可以通过this.$nextTick获取到最新的。

```js
  mounted() {
    /*请求数据，操作dom , 放在这个里面  mounted*/
    const oDiv1 = document.querySelector('#msg');
    console.log('1: ' + oDiv1.innerHTML);
    this.msg = "$nextTick演示";
    const oDiv2 = document.querySelector("#msg");
    console.log("2: " + oDiv2.innerHTML);

    this.$nextTick(() => {
      const oDiv3 = document.querySelector("#msg");
      console.log("3: ",oDiv3.innerHTML);
    })
    console.log("模板编译完成4");
  }
```

>上面的输出1和2拿到的都是修改前的数据，只有nextTick拿到的是修改后的数据。

## Vue3中使用Axios请求第三方接口
1. 安装axios

```shell
npm i axios
```

2. 引入axios

```js
import axios from 'axios'
```

3. 发送get请求

```js
getData() {
  const api = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
  axios.get(api).then((response) => {
    console.log(response);
    this.list = response.data.result;
  }).catch(err => {
    console.log(err);
  })
}
```

## 将Axios绑定到全局

1. 在main.js中注释下这个语句

```js
// 首先将下面的这句话注释掉
// createApp(App).mount('#app')
```

2. 引入axios

```js
import Axios from 'axios'
```

3. 将axios绑定到全局

```js
const app = createApp(App);
app.config.globalProperties.Axios = Axios;

app.mount('#app');
```

## 使用fetch-jsonp请求jsonp接口
>在已有axios的情况下，为什么还需要fetch-jsonp，因为axios不支持jsonp请求，如果服务端只提供了jsonp调用，这个方法就很有用了。

1. 安装模块

```js
npm i fetch-jsonp
```

2. 引入模块

```js
import fetchJsonp from 'fetch-jsonp';
```

3. 绑定到全局

```js
app.config.globalProperties.fetchJsonp = fetchJsonp;
```

4. 发送请求

```js
getData() {
  const api = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=javascript";
  this.fetchJsonp(api, {
    jsonpCallback: "cb",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      this.list = data.s;
    })
    .catch((err) => {
      console.log(err);
    });
}
```

## 输入防抖的实现
>实现最后一个字符输入500ms后，才请求数据，新输入的会清空以前输入的定时器。

```js
export default {
  data() {
    return {
      keyword: "",
      list: [],
      timer: "",
    };
  },
  methods: {
    getData() {
      if (this.keyword != "") {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          const api =
            "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" +
            this.keyword;
          this.fetchJsonp(api, {
            jsonpCallback: "cb",
          })
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              console.log(data);
              this.list = data.s;
            })
            .catch((err) => {
              console.log(err);
            });
        }, 500);
      }
    },
  },
};
```


