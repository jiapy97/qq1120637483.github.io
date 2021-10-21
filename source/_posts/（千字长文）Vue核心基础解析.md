---
title: （千字长文）Vue核心基础解析
date: 2021-10-22
author: Justin
top: false
cover: false
categories: Vue
tags:
  - Vue
---

## 什么是Vue?
>Vue是一个渐进式的框架，渐进式指的是可以将Vue作为应用的一部分嵌入其中，带来更丰富的交互体验，比如一个项目是使用Jquery构建的，此时就可以通过Vue对部分网页进行重构，而不必重构全部的网页。

## 通过Vue.js文件使用Vue
```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <div id="app">{{message}}</div>

    <script src="./vue.js"></script>
    <script>
        const app = new Vue({
            el: '#app',
            data: {
                message: "Hello Vue"
            }
        });
    </script>
</body>
</html>
```
>el属性决定了这个Vue对象挂载到哪一个元素上。data属性会存储一些和绑定对象上相关联的数据。


## 全局安装脚手架
```shell
npm install -g @vue/cli
```

## 通过Vue脚手架创建项目
```shell
vue create demo
```

## 运行项目
```shell
npm run serve
```

## 使用Vite构建Vue项目
```
npm init vite@latest <project-name> -- --template vue
```

## src下面的目录解析
* assets文件夹

>上述文件夹下面主要存放静态文件。

* components文件夹

>这个文件夹主要存放自定义组件

* App.vue

>这个文件是我们的根组件。

* main.js

>上述文件是我们的入口文件。

## 绑定数据与绑定HTML(v-html)的方法
```js
<template>
    <div>
        <h1>{{msg}}</h1>
        <p>绑定对象：{{userInfo.username}}---{{userInfo.userage}}</p>
        <p>
            {{h2}}
        </p>
        <p>绑定HTML：<span v-html="h2"></span></p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: "你好Vue",
                userInfo: {
                    username: "张三",
                    userage: "24"
                },
                h2: "<h2>这是一个H2标题</h2>"
            }
        }
    }
</script>

<style>
    h1 {
        text-align: center;
        color: red
    }
</style>
```

## 绑定属性
### 绑定图片属性src
>方式1

```js
<img v-bind:src="imgSrc">
```

>方式2

```js
<img :src="imgSrc">
```

### 绑定自定义属性
>方式1

```js
<div v-bind:title="title">鼠标放上去就知道了</div>
```

>方式2

```js
<div :title="title">鼠标放上去就知道了</div>
```

### 绑定静态值需要加单引号
>下面是一个动态属性名的例子，其中的值是静态的。

```js
<a v-bind:[myHref]="'http://www.baidu.com'">跳转到百度</a>
<script>
    export default {
        data() {
            return {
                msg: "你好Vue",
                myHref: "href"
            }
        }
    }
</script>
```

## 循环遍历
>下面的循环遍历是以v-for为基础进行的。

```js
<ul>
    <li v-for="(item,index) in list1" :key="index">
        {{item}} -- {{index}}
    </li>
</ul>
```

>下面是需要二次遍历的情况

```js
<li v-for="(item,index) in list3" :key="index">
    {{item.title}}
    <ol>
        <li v-for="(j,key) in item.double" :key="key">
            {{j.color}}
        </li>
    </ol>
</li>
```

>下面是循环遍历对象的情况

```js
<li v-for="(value,key,index) in myobj" :key="index">
    {{value}} -- {{key}} -- {{index}}
</li>
```

## 事件方法
>下面是事件方法的基本用法。

```js
<template>
    <div>
        <h1>{{msg}}</h1>
        <button @click="setMsg()">点我改变信息</button>
        <button @click="getMsg()">点击弹出消息</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: "你好"
            }
        },
        methods: {
            setMsg() {
                this.msg = "这是改变后的msg"
            },
            getMsg() {
                alert(this.msg)
            }
        }
    }
</script>
```

## class绑定多个动态属性
```js
<template>
    <div>
        <div :class="{'active': isActive,'red': isRed}">这是动态类</div>
        <div class="test" :class="{'active': isActive}"></div>
        <div :class="[colorClass,baseClass]"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: "你好",
                myClass: "red",
                isActive: true,
                isRed: false,
                colorClass: 'color',
                baseClass: 'base'
            }
        },
    }
</script>

<style>
    .red {
        background-color: red;
        width: 100px;
        height: 100px;
    }
    .test {
        background: pink;
        width: 100px;
        height: 100px;
    }
    .active {
        display: block;
        font-size: 30px;
        color: aqua;
    }
    .color {
        background-color: blue;
    }
    .base {
        width: 500px;
        height: 500px;
    }
</style>
```

## 数组语法结合三目运算
```js
<div :class="[flag ? colorClass:baseClass]">111</div>
```

## 循环遍历数组并指定类和样式
```js
<template>
    <div>
        <ul>
            <li v-for="(item,index) in list" :key=index :class="{'red': index===0,'blue': index===1}">
                {{item}}
            </li>
            <li v-for="(item,index) in list" :key=index :style="[index===0?styleRed:null,index===1?styleBlue:null]">
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: ['赵','钱','孙','李'],
                styleRed: {
                    color: 'red'
                },
                styleBlue: {
                    color: 'blue'
                }
            }
        },
    }
</script>

<style>
    .red {
        background-color: red;
        width: 100px;
        height: 100px;
    }
    .blue {
        background-color: blue;
        width: 100px;
        height: 100px;
    }
</style>
```
### @是v-on的缩写
>下面的这种写法也是可以的。

```js
<button v-on:click="setmsg()">点我修改为李四</button>
```

### 一个方法调用另一个方法
```js
<button @click="run()">一个方法调用另一个方法</button>
export default {
    data() {
        return {
            list: ['赵','钱','孙','李'],
            styleRed: {
                color: 'red'
            },
            styleBlue: {
                color: 'blue'
            },
            msg: "张三"
        }
    },
    methods: {
        getmsg() {
            alert(this.msg)
        },
        setmsg() {
            this.msg = "李四";
        },
        run() {
            this.getmsg()
        }
    }
}
```

### 获取事件对象
>核心就是传递给目标函数一个$event。

```js
<button  data-aid="123" @click="eventFn($event)">点我获取事件对象</button>
```

>需要传入多个参数的情况，将$event放在最后。

```js
<button  data-title2="666" data-aid="123" @click="eventFn(111,$event)">点我获取事件对象</button>
```

### 获取事件对象的自定义属性
>下面是html结构

```js
<button  data-title2="666" data-aid="123" @click="eventFn($event)">点我获取事件对象</button>
```

>下面是获取方法：通过e.srcElement.dataset.xxx;

```js
alert(e.srcElement.dataset.aid)
alert(e.srcElement.dataset.title2)
```

### 一次触发多个函数
```js
<button @click="one(),two()">点我一次触发两个</button>
one() {
    console.log("这是one");
},
two() {
    console.log("这是two");
}
```

### 阻止事件的默认行为
#### 方式一：通过preventDefault。
```js
<a href="http://www.baidu.com" target="_blank" @click="stopEvent($event)">点我跳转到百度</a>
stopEvent(e) {
    e.preventDefault()
}
```

#### 方式二：通过事件修饰符来阻止
```js
<a href="http://www.baidu.com" target="_blank" @click.prevent="stopFn2">点我跳转到百度</a>
stopFn2() {

}
```

### 按键修饰符
>按键修饰符主要是检测用户按了什么键，主要是通过@keyup实现。

```js
<input type="text" @keyup="doSearch($event)">
doSearch(e) {
    if (e.keyCode === 13) {
        alert('检测到用户按了回车键')
    }
}
```

>实现输入的时候，不做操作，只有按回车的时候才执行函数。

```js
<input type="text" @keyup.enter="doSearch($event)">
```

### 获取元素对象
* 原生JS获取DOM对象

```js
const usernameObj = document.querySelector('#username');
alert(usernameObj.value)
```

* 通过this.$refs

```js
<li>年龄：<input type="text" ref="age"></li>
alert(this.$refs.age.value)
```

### 双向数据绑定MVVM
>MVVM就是我们常说的双向数据绑定，Vue就是一个MVVM框架，M表示model,V表示View，在MVVM框架中model改变会影响view，view视图改变反过来会影响model。

* 获取双向数据绑定的值（直接从this中拿即可）

```js
alert(this.username)
```

* 对radio单选框进行双向数据绑定

```js
<input type="radio" name="sex" id="sex1" value="男" v-model="userinfo.sex"> <label for="sex1">男</label>
<input type="radio" name="sex" id="sex2" value="女" v-model="userinfo.sex"> <label for="sex2">女</label>
```

* 对select选择框进行双向数据绑定

```js
<select v-model="userinfo.city">
    <option v-for="(item,index) in userinfo.cityList" :key="index" :value="item">{{item}}</option>
</select>
```

* 对checkbox进行双向数据绑定

```js
<span v-for="(item,index) in userinfo.hobbies" :key="index">
    <input type="checkbox" :id="'ch' + index" v-model="item.checked" />
    <label :for="'ch'+index">{{item.title}}</label>
</span>
hobbies: [
    {
        title: "吃饭",
        checked: false
    },
    {
        title: "睡觉",
        checked: true
    },
    {
        title: "写代码",
        checked: false
    },
]
```

* 对textarea进行双向数据绑定

```js
<textarea cols="30" rows="10" v-model="userinfo.mark"></textarea>
mark: ""
```

## Vue的生命周期

## Vue的template

### 插值操作
>所谓的插值操作，可以理解为双大括号语法。

```js
<h2>当前求和为：{{count}}</h2>
```

### v-once
>v-once存在的意义是数据只渲染一次，当数据发生变化的时候，渲染的数据不随着变化。

```js
<h2 v-once>当前求和为：{{count}}</h2>
```

### v-html
>v-html存在的意义是将字符串形式的html文本渲染为真正的HTML。

```js
<div id="root">
  <h2 v-html="url"></h2>
</div>
<script src="../vue.js"></script>

<script>
  const app = new Vue({
    el: "#root",
    data: {
      count: 0,
      url: '<a href="http://www.baidu.com">百度一下</a>'
    }
  });
</script>
```

### v-text
>v-text能够实现类似双大括号插值的方法，但是这个指令不够灵活，一般不推荐使用。

```js
<h2 v-text="count"></h2>
```

### v-pre
>v-pre指令存在的意义是显示原生的内容，指的是不从vue中提取数据，双大括号显示的还是双大括号。

![image.png](https://img-blog.csdnimg.cn/img_convert/8381c69a2a4df712f9250096214f81f0.png)

### v-cloak
>v-cloak指令存在的意义是控制JS解析引擎还未解析到双大括号语法或卡顿的时候，显示的内容。这个指令需要结合css语法。

![image.png](https://img-blog.csdnimg.cn/img_convert/7088c535b1ec5a5ac96f805e95e1a011.png)

### v-bind
>v-bind可以使用冒号进行缩写。

```js
<img :src="imgUrl" alt="">
data: {
  count: 0,
  imgUrl: 'https://jiapeiyang.oss-cn-beijing.aliyuncs.com/img/20211012134540.png'
}
```

>v-bind动态绑定class。

![image.png](https://img-blog.csdnimg.cn/img_convert/493beb07f8233f838db4a89833a19b22.png)

* 也可以通过下面的语法

![image.png](https://img-blog.csdnimg.cn/img_convert/2376c26c1fe88550c9f881fdbb1aad5f.png)

* 对象语法

![image.png](https://img-blog.csdnimg.cn/img_convert/77a815269cf97ad8c4fd8faafbcd5d26.png)

* 数组语法

1. 加单引号的情况
![image.png](https://img-blog.csdnimg.cn/img_convert/87cdd7c292da15d68f9f1fbd5715ba6f.png)

2. 不加单引号的情况

![image.png](https://img-blog.csdnimg.cn/img_convert/3e3cd4837a17e788d7fca58b506420a5.png)

>v-bind动态绑定style。

1. 加单引号的情况。

```js
<h2 :style="{fontSize: '50px'}">当前求和为：{{count}}</h2>
```

>此时的50px代表的是字面量并不是变量，但是如果不加单引号，此时的50px指的是一个变量，Vue会从data中寻找这个变量。

2. 不加单引号的情况

![image.png](https://img-blog.csdnimg.cn/img_convert/2170c74d73f85fcee0118a763f4da033.png)


## 计算属性
### 计算属性的基本使用
>调用计算属性的时候，后面不用加括号。
```js
<h2>{{fullName}}</h2>
computed: {
  fullName() {
    return this.firstName + this.lastName
  }
}
```

### 计算属性的复杂操作
>下面是使用计算属性的一个例子。

![image.png](https://img-blog.csdnimg.cn/img_convert/0d11b0dee7c3f07182eebe56648ea9e9.png)

### 计算属性的setter和getter
>一般情况下，我们不适用计算属性的set方法，请看下面的例子。

```js
<div id="root">
  <h2>当前姓名为：{{fullName}}</h2>
</div>
<script src="../vue.js"></script>

<script>
  const app = new Vue({
    el: "#root",
    data: {
      count: 0,
      firstName: '张',
      lastName: '三'
    },
    computed: {
      fullName: {
        set(value) {
          const [value1,value2] = value.split('') 
          this.firstName = value1;
          this.lastName = value2;
        },
        get() {
          return this.firstName + this.lastName;
        }
      }
    }
  });
</script>
```

### 计算属性和methods的对比
>计算属性是有缓存机制的，以下面的例子为例，如果是methods，调用多少次，函数就需要执行多少次，但是如果是计算属性，调用多次，函数只执行了一次，极大的提高了性能。

![image.png](https://img-blog.csdnimg.cn/img_convert/2015c2a146bfda2ea99e9ae3e5743969.png)


## v-on
>v-on的语法糖是@

### v-on的参数传递问题
>v-on在调用的时候，是否加括号是一个指的我们探讨的问题。

1. 加不加都行的情况

![image.png](https://img-blog.csdnimg.cn/img_convert/cd66a5ee5c0376fe203a58090f7303af.png)

2. 假如函数需要接受一个参数的情况，如果加括号传入的是undefined，不加则传入的是事件对象。

![image.png](https://img-blog.csdnimg.cn/img_convert/d1daeba2945e660eb75436134ab20f4d.png)

3. 既需要event对象又需要自定义参数的情况

![image.png](https://img-blog.csdnimg.cn/img_convert/dd39002746af8a38a17517025bb2f97d.png)

### v-on的修饰符
>有些时候，我们拿到event的目的可能是进行一些事件处理，vue提供的这些修饰符就是来帮助我们方便的处理一些事件。

* .stop -阻止事件冒泡，调用event.stopPropagation()

![image.png](https://img-blog.csdnimg.cn/img_convert/9f7505ebbbd2929a7d8e3fddc588ec9d.png)

* .prevent - 调用event.preventDefault() 阻止默认事件的触发

![image.png](https://img-blog.csdnimg.cn/img_convert/78f3cba45afde4b57fa77f83868e4ad1.png)

* keyup：键盘弹起触发事件

```js
<input type="text" @keyup="key()">
```

* keyup.enter：输入回车才会触发事件

```js
<input type="text" @keyup.enter="key()">
```

* .once点击回调只会触发一次

```js
<button @click.once="oncefn">这个按钮只能被按一次</button>
```

## v-if、v-else-if、v-else的基本用法
>v-if后面的条件为false的时候，对应的元素及其子元素不会渲染，v-else后面不用加条件。

![image.png](https://img-blog.csdnimg.cn/img_convert/a668e4a50f796f416cd76161acae19ed.png)

### 解决input复用问题
>所谓的input复用问题就是切换input后，用户原本输入的值还在。解决方案就是给每一个input添加key属性。

```js
<input type="text" id="username" placeholder="使用账户登录" key="username">
```

## v-show和v-if的区别
1. 不渲染时是否在DOM中
    * v-if如果条件为false时，对应的元素就不会存在与DOM中。
    * v-show如果条件为false的时候，仅仅是将元素的diplay属性置为none。

2. 如何选择
    * 如果需要频繁的进行显示和隐藏，使用v-show。
    * 如果只有一次切换的情况，使用v-if。
    
## 响应式改变数组的方法
1. push
2. pop
3. shift
4. unshift
5. splice
6. sort
7. reverse

## 不能够响应式的操作
1. 通过下标修改元素。

## 过滤器的使用
```js
<td>{{item.price | showPrice}}</td>
filters: {
  showPrice(price) {
    return '￥' + price.toFixed(2);
  }
}
```

## v-model
>v-model主要用来实现双向数据绑定。

### 基本案例
```js
<div id="root">
    <h2>当前message：{{message}}</h2>
    <input type="text" v-model="message">
    </div>
    <script src="../vue.js"></script>

    <script>
    const app = new Vue({
      el: "#root",
      data: {
        count: 0,
        message: ''
      }
    });
</script>
```

### 原理分析
>v-model其实是一个语法糖，背后的本质包含了两个操作。

1. v-bind绑定一个value属性。
2. v-on指令给当前元素绑定input事件。

### v-model结合radio类型使用
![image.png](https://img-blog.csdnimg.cn/img_convert/0607b3b8862108ca54281f01d814a083.png)

### v-model结合checkbox使用
>单个checkbox

```js
<label for="license">
  <input type="checkbox" id="license" v-model="isAgree">同意协议
</label>
<h2>用户选择的是：{{isAgree}}</h2>
```

>多个checkbox的情况

![image.png](https://img-blog.csdnimg.cn/img_convert/3c1f2bb5e2294595b859f332448bed7b.png)

### v-model结合select使用
>只能选择一个的情况。

![image.png](https://img-blog.csdnimg.cn/img_convert/64cd633f7756771025bf41d6c7db5580.png)

>可以选择多个的情况。

![image.png](https://img-blog.csdnimg.cn/img_convert/01f50091f1820b8309509ffd4875ee8d.png)

### v-model修饰符的使用
1. lazy修饰符

>lazy修饰符可以让数据在失去焦点或者回车时才会更新。

```js
<input type="text" v-model.lazy="message">
```

2. number修饰符

>number修饰符可以让输入框汇中的内容自动转换为数字类型。

```js
<input type="text" v-model.number="message">
```

3. trim修饰符

>trim修饰符可以过滤内容两边左右的空格。

```js
<input type="text" v-model.trim="message">
```

## 组件化
### 组件化的基本使用过程
1. 创建组件构造器

```js
const myComponent = Vue.extend({
  template: `
    <div>
      <h2>模板标题</h2>
      <p>模板内容</p>
    </div>
  `
});
```

2. 注册组件

```js
Vue.component('mycpn',myComponent);
```

3. 使用组件

```js
<mycpn></mycpn>
```

### vue组件命名的规范
>如果使用驼峰命名法注册组件的时候，在使用组件的时候需要使用分割线进行分割，否则会报错。

![image.png](https://img-blog.csdnimg.cn/img_convert/eb2b77fb9a1bcba84d5d1e436e8d7998.png)

### 全局组件和局部组件
* 全局组件：意味着可以在多个Vue实例下面使用
* 局部组件：只能在某个Vue实例中使用

![image.png](https://img-blog.csdnimg.cn/img_convert/181bb1ec9845a79ef793268c48e77cab.png)

### 父组件和子组件的案例
```js
    <div id="root">
    <Father></Father>
    </div>
    <script src="../vue.js"></script>

    <script>
    // 创建子组件的构造器
    const Son = Vue.extend({
      template: `
        <div>
          <h2>这是子组件</h2>
          <p>子组件的内容是：呵呵呵<p/> 
        </div>
      `
    })

    // 创建父组件构造器
    const Father = Vue.extend({
      template: `
        <div>
          <h2>这是父组件</h2>
          <p>父组件的内容是：哈哈哈</p>
          <Son></Son>
        </div>
      `,
      components: {
        Son: Son
      }
    })

    const root = new Vue({
      el: '#root',
      data: {

      },
      components: {
        Father: Father
      }
    });
    </script>
```

### 注册组件的语法糖写法
* 注册全局组件的语法糖写法

```js
    Vue.component('cpn',{
      template: `
        <div>
          <h2>这是模板</h2>  
        </div>
      `
    });
```

* 注册局部组件的语法糖写法

```js
    const root = new Vue({
      el: "#root",
      components: {
        cpn2: {
          template: `
        <div>
          <h2>这是模板</h2>  
        </div>
      `
        }
      }
    });
```

### 组件模板抽离的写法
1. 通过script标签

![image.png](https://img-blog.csdnimg.cn/img_convert/267247b49cdeabac2f3ad1dd5a6b5c8d.png)

2. 通过template标签

```js
  <template  id="tpl">
    <div>
      <h2>这是模板标题</h2>
      <p>这是模板文本</p>
    </div>
  </template>
```

## 组件不能访问Vue实例中的数据

![image.png](https://img-blog.csdnimg.cn/img_convert/658ea43508f972661e29d2f943e7d983.png)

>组件中的data需要是一个函数通过return的形式返回。

```js
components: {
    cpn2: {
      template: '#tpl',
      data() {
        return {
          title: '这是一级标题'
        }
      }
    }
}
```

## 为什么组件data必须是函数？
>组件data必须是函数主要是为了防止不同函数实例操作相同的数据，组件复用希望复用的是功能，而不是数据复用。

## 组件通信
### 父组件向子组件传递数据
1. 通过props

* 数组形式

![image.png](https://img-blog.csdnimg.cn/img_convert/c4ccae98170b1ea0453acb2fb0806358.png)

* 对象形式（可以指定传入的类型，或指定默认值）

![image.png](https://img-blog.csdnimg.cn/img_convert/698eedcd9e5d4004ce49c73527a36e9e.png)

>调用默认值的时机就是调用组件的时候没有传参，但是模板中却使用了这个参数，此时就会使用默认参数。如果默认参数是数组或者函数，default必须是一个函数的形式。

### props中的驼峰标识
>下面的写法是不支持的

![image.png](https://img-blog.csdnimg.cn/img_convert/e59d1afdddc98401586d0aa0d3bbe7f6.png)

>但是支持下面的写法

![image.png](https://img-blog.csdnimg.cn/img_convert/383bbb7178167b7a0b5aceab1db9800a.png)

>比如props想使用的参数名是ChildMyMessage，在组件调用进行v-bind绑定的时候需要写成:child-my-message

### 子组件向父组件传递数据
>主要是通过子组件中调用$emit方法将事件传递给父组件，父组件通过v-on监听这个事件并调用自己的函数。

```js
  <div id="root">
    <cpn @item-click="cpnClick"></cpn>
  </div>
  <template id="tpl">
    <div>
      <h2>这是子组件</h2>
      <button v-for="item in categories" @click="btnClick(item)">
        {{item.name}}
      </button>
    </div>
  </template>
  <script src="../vue.js"></script>

  <script>
    // 这是子组件
    const cpn = {
      template: "#tpl",
      data() {
        return {
          categories: [
            { id: 'aaa', name: '热门推荐' },
            { id: 'bbb', name: '手机数码' }
          ]
        }
      },
      methods: {
        btnClick(item) {
          this.$emit('item-click',item)
        }
      }
    }
    // 这是父组件
    const app = new Vue({
      el: "#root",
      data: {
        count: 0
      },
      components: {
        cpn
      },
      methods: {
        cpnClick(item) {
          console.log(item);
        }
      }
    });
  </script>
```

## 父组件访问子组件
* 父组件访问子组件

>通过$children

![image.png](https://img-blog.csdnimg.cn/img_convert/20cc4e282547a5b1e6818a644b1b7a7b.png)

>通过$refs

![image.png](https://img-blog.csdnimg.cn/img_convert/6e19a078bb2b0b7787fc13db3fce3bb8.png)

* 子组件访问父组件

>使用$parent

![image.png](https://img-blog.csdnimg.cn/img_convert/cecbf31d3c6e59460b055310cf890255.png)

* 任意组件访问根组件

>通过$root

![image.png](https://img-blog.csdnimg.cn/img_convert/26145a5abef9f805f3b9afe1e84723bd.png)

## slot插槽的使用
>在Vue中最好的封装方式就是将共性抽取到组件中，将不同暴露为插槽，一旦预留了插槽，就可以让使用者根据自己的需求来决定插槽中插入的什么内容。

>插槽的基本用法

![image.png](https://img-blog.csdnimg.cn/img_convert/40c7931d020290dde1cfdf63776b1016.png)

>插槽的默认值：在调用组件的时候，如果不指定插槽内容的时候显示的结果

![image.png](https://img-blog.csdnimg.cn/img_convert/e3645e36f15ca32d4e14497dbbaf6d66.png)

>具名插槽slot的使用

![image.png](https://img-blog.csdnimg.cn/img_convert/60ca27462661d664704066f468364634.png)

## 编译作用域
>vue中查找变量是往上查找。

![image.png](https://img-blog.csdnimg.cn/img_convert/c553cc838e6f72254dd47875b1e808fd.png)

## 作用域插槽
>主要是让父组件获取到子组件插槽对应的数据。

![image.png](https://img-blog.csdnimg.cn/img_convert/1b29b0241b0305cc810801c68a9cb283.png)


 ## 通过watch监听数据的变化
 >所谓的watch监听指的就是监听一个属性是否发生变化，如果发生变化则触发响应的函数。
 
![image.png](https://img-blog.csdnimg.cn/img_convert/3514e6f6dda52f251beb5b09bd1c8887.png)

## Vue3中集成Sass
1. 安装插件

```js
npm  install sass-loader  node-sass --save-dev
```

2. 修改标签

![image.png](https://img-blog.csdnimg.cn/img_convert/681278d8ab804fe9d585fe476f6a909d.png)

## Vue3中使用localStorage

![image.png](https://img-blog.csdnimg.cn/img_convert/c294b5e3b92417abbb2b5001ce63519a.png)

## mounted生命周期函数
>这个生命周期函数是在页面加载的时候运行的。

## scoped关键字
>scoped关键字可以让css样式只适用于局部vue组件。

![image.png](https://img-blog.csdnimg.cn/img_convert/69b5267ce00ace06dacc69e1294cc045.png)


## 将父组件传递给子组件
>主要是通过传递this。

![image.png](https://img-blog.csdnimg.cn/img_convert/10281df2f88a920e807a1693f1edbf86.png)

## props验证
>所谓的props验证指的是对传入的props进行校验。

![image.png](https://img-blog.csdnimg.cn/img_convert/c3984ea9848e6e3ff91193da06a2bdb0.png)

## 单向数据流
>所有的prop都使得其父子prop之间形成了一个单向下行绑定：父级prop的更新会向下流动到子组件中，但是反过来则不行，这样会防止子组件意外变更父组件的状态，从而导致你的应用的数据流向难以理解。另外，每次父级组件发生变更的时候，子组件中所有的prop都将会更新为最新的值，这意味着不应该在一个子组件内部改变prop,如果这样做了，Vue会在浏览器的控制台发出警告。

## 父组件主动获取子组件的数据和执行子组件中的方法
1. 调用子组件的时候传入一个ref属性。

2. 通过this.$refs.xxx.属性 获取数据。

3. 通过this.$refs.header.方法执行子组件中的方法。

## 子组件主动获取父组件中的数据和执行父组件中的方法
1. 子组件通过this.$parent.数据 获取父组件的数据。

2. 子组件通过 this.$parent.方法 主动执行父组件中的方法。

## 子组件执行父组件自定义事件

>实例分析

1. 父组件中的自定义事件是fatherEvent，父组件中的方法是hello。

```js
<Header @fatherEvent="hello" />
```

2. 子组件通过$emit触发并进行传参。

```js
this.$emit('fatherEvent',this.msg)
```


## 通过emits属性对输入的参数进行检验

![image.png](https://img-blog.csdnimg.cn/img_convert/ec6bab0e532bef8cc6bde7af05cc0f56.png)

## 使用mitt插件实现非父子组件之间的传值
1. 首先安装emitt插件

```shell
npm install emitt
```

2. 定义函数并暴露对象

```js
import mitt from 'mitt'
const event = mitt();

export default event;
```

3. 需要发送数据的组件，广播事件
```js
sendLogin() {
  // 向外发射一个事件，名叫toLogin，数据是this.msg
  event.emit('toLogin',this.msg)
}
```

4. 需要接收数据的组件，监听事件
```js
// 监听事件toLogin 
event.on('toLogin',(data) => {
  console.log(data)
})
```

## 自定义组件使用v-model进行双向数据绑定
>首先明确下组件之间的结构，Home组件中包含Input组件，Input组件时Home组件的子组件。keyword是Home组件中的数据。

* Home组件

```js
<Input v-model:keyword="keyword" />
```

* Input组件

```js
<input type="text" :value="keyword" @input="$emit('update:keyword',$event.target.value)" placeholder="请输入内容">
```

## 非Prop的Attribute属性继承
>所谓的非prop的Attribute属性继承指的是，如果传入的一个属性，在子组件中并未声明接收，这个属性将被子组件的根标签继承，让我们一起来看下下面的例子。

![image.png](https://img-blog.csdnimg.cn/img_convert/2b2843127cdb2d12369589f4f288d80b.png)

## 自定义Attribute继承
>自定义Attribute继承，可以禁用默认继承，并指定哪些元素可以继承。

![image.png](https://img-blog.csdnimg.cn/img_convert/5b6c7c5569f84ed3c7beb7b8a89e502e.png)


