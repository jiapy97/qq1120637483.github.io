---
title: Vue+TS中全局绑定axios、storage、接口地址的方法
date: 2022-01-24
author: Justin
top: false
cover: false
categories: vue
tags:
  - vue
---

## 全局绑定axios(在TypeScript中)
1. 通过cnpm安装到项目中。

```shell
cnpm i axios --save
```

2. 在main.ts中引入下面的接口和组件

```js
import Axios,{AxiosInstance} from  'axios'
```

3. 在main.ts中进行如下声明

```js
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance
  }
}
```

4. 在方法中可以直接通过this.$axios进行调用。

```js
requestData() {
  this.$axios.get('https://s.itying.com/api/v1/login').then(res => {
    console.log(res);
  })
}
```

## 封装并全局绑定storage
### 封装storage
1. 首先创建一个storage.ts文件

2. 下面是storage.ts文件中的内容

```js
export interface StorageInstance {
  set(key: string,value: any): void;
  get(key: string): any;
  remove(key: string): void;
}

class StorageClass implements StorageInstance {
  set(key: string, value: any): void {
    localStorage.setItem(key,JSON.stringify(value));
  }
  get(key: string): any {
    let temp = localStorage.getItem(key);
    if (temp) {
      return JSON.parse(temp);
    }
    return null;
  }
  remove(key: string): void {
    localStorage.removeItem(key);
  }
}
let Storge = new StorageClass();

export default Storage;
```

### 全局绑定storage
>需要注意的是，我们全局绑定的是我们上一步暴露的storage。

1. 引入已经封装好的storage。

```js
import Storage,{StorageInstance} from './model/storage'
```

2. 声明module

```js
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance,
    $storage: StorageInstance
  }
}
```

3. 挂载到全局

```js
app.config.globalProperties.$storage = Storage
```

4. 通过this.$storage即可访问

```js
this.$storage.set("token",res.data.token)
```

## 封装接口地址

1. 创建config.ts

2. 在文件中暴露相关接口地址

```js
export interface ConfigInstance {
  apiUrl: string;
  imgUrl: string;
}

class ConfigClass implements ConfigInstance {
  apiUrl: string;
  imgUrl: string;
  constructor() {
    this.apiUrl = 'https://s.itying.com/api/v1';
    this.imgUrl = 'https://s.itying.com'
  }
}

const Config = new ConfigClass();

export default Config;
```

3. 在main.ts中进行声明与挂载

```js
import Config,{ConfigInstance} from './model/config'
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance,
    $storage: StorageInstance,
    $config: ConfigInstance
  }
}
app.config.globalProperties.$config = Config
```

4. 组件中获取只需通过this.$config.apiUrl即可。


## 总结
> 在vue中进行全局绑定是一个非常重要和常用的操作，以api请求地址为例，假如一个大型的vue项目每一个接口地址都是写死的，那么一旦api地址发生更改，这将给修改带来极大的困难，但是如果我们绑定到全局，修改起来就是十分简单的一件事情了，所以将一些常用属性和方法绑定到全局中是非常重要的。






