---
title: 一篇文章掌握Next.js的核心要点
date: 2021-9-16
author: Justin
top: false
cover: false
categories: Next
- Next
---

## Next.js整体介绍
>Next.js是React服务端渲染应用框架，用于构建SEO友好的SPA应用。

1. 支持两种渲染方式，静态生成和服务器端渲染。
2. 基于页面的路由系统，路由零配置。
3. 自动代码拆分，优化页面加载速度。
4. 支持静态导出，可将应用导出为静态网站。
5. 内置CSS-in-JS库styled-jsx
6. 方案成熟，可用于生产环境，世界许多公司都在使用。
7. 应用部署简单，拥有专属部署环境vercel，也可以部署在其他环境。

## 创建Next.js项目

* 创建
```shell
npm init next-app mynext
```

* 运行
```shell
npm run dev
```

* 访问
```shell
localhost:3000
```

>出现下面的页面表示项目初始化成功。


![image.png](https://img-blog.csdnimg.cn/img_convert/81e395da6d55d73ce527f644ae4132fc.png)


## 基于页面的路由系统
### 创建页面

* 在Next.js中，页面是被放置在pages文件夹中的React组件。
* 组件需要被默认导出
* 组件文件中不需要引入react
* 页面地址与文件地址是对应的关系

>创建一个list页面

1. 在pages文件夹下创建一个list.js
```js
export default function List() {
    return (
        <div>
            <h1>Hello,Next!</h1>
        </div>
    )
}
```

2. 在路由下访问下面的地址即可
```shell
http://localhost:3000/list
```


### 页面跳转
>注意事项

* Link组件默认使用JavaScript进行页面跳转，即SPA形式的跳转。
* 如果浏览器中JavaScript被禁用，则使用链接跳转
* Link组件中不应添加除href属性以外的属性，其余属性添加到a标签上
* Link组件通过预取功能自动优化应用程序以获得最佳性能。

>从主页跳转到list页面的代码(默认去pages文件夹下找list)

```js
import Link from 'next/link'
export default function Home() {
    return (
        <div >
            <Link href="/list"><a>List Page</a></Link>
        </div>
    )
}
```

## Next.js应用中的静态访问
>应用程序根目录中的public文件夹用于提供静态资源，可以通过以下形式进行访问：（下面的/就代表了public这个文件夹）

![image.png](https://img-blog.csdnimg.cn/img_convert/9ca8bf2aaed1eb6b85bf8f46248d3acc.png)

>下面的代码将访问public文件夹下的CSS.png这个图片

```js
<img src="/images/CSS.png" alt="" />
```

## 修改页面中的元数据
>通过Head组件修改元数据。Head组件的主要作用是将html的标签添加到页面的head中。

* Home.js
```js
import Link from 'next/link'
import Head from 'next/head'
export default function Home() {
    return (
        <div >
            <Head>
                <title>My Next</title>
            </Head>
            <Link href="/list"><a>List Page</a></Link>
            <img src="/images/CSS.png" alt="" />
        </div>
    )
}
```

* list.js
```js
import Head from 'next/head'
export default function List() {
    return (
        <div>
            <Head>
                <title>List Page</title>
            </Head>
            <h1>Hello,Next!</h1>
        </div>
    )
}
```
## 添加样式的方式
### styled-jsx

>在next中内置了styled-jsx,它是一个CSS-in-JS库，允许在React组件中编写CSS，CSS仅作用于组件内部。

* 修改跳转到list页面的链接样式
```js
import Link from 'next/link'
import Head from 'next/head'
export default function Home() {
    return (
        <div >
            <Head>
                <title>My Next</title>
            </Head>
            <Link href="/list"><a className="demo" >List Page</a></Link>
            <style jsx>
                {`
                    .demo {
                        color: red;
                    }
                `}
            </style>
        </div>
    )
}
```

### CSS样式
#### CSS模块

>通过使用CSS模块功能，允许将组件的CSS样式编写在单独的CSS文件中，CSS模块约定样式文件的名称必须`组件文件名称.module.css`

```js
# list.js
import Head from 'next/head'
import styles from './list.module.css';
export default function List() {
    return (
        <div>
            <Head>
                <title>List Page</title>
            </Head>
            <h1 className={styles.demo}>Hello,Next!</h1>
        </div>
    )
}

# list.module.css
.demo {
    color: blueviolet;
}
```

#### 添加全局样式
1. 在pages文件夹下新建_app.js文件并加入如下代码。
2. 在项目根目录下创建styles文件夹，并在其中创建global.css
3. 在_app.js中通过import引入global.css
4. 重新启动开发服务器

>注意：在_app.js中需要加入下面的固定代码

```js
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}
```

## 预渲染
>什么是预渲染？

* 预渲染是指数据和HTML的拼接在服务器端提前完成
* 预渲染可以使SEO更加友好
* 预渲染会带来更好的用户体验，可以无需运行JS即可查看应用程序UI

>预渲染的两种形式

* 在Next.js中支持两种形式的预渲染：静态生成和服务器端渲染。
* 静态生成和服务器端渲染是生成HTML树的时机不同。
* 静态生成：静态生成是在构建时生成HTML，以后的每个请求都共用构建时生成好的HTML。
* 服务器端渲染：服务器端渲染是在请求时生成HTML，每个请求都会重新生成HTML。

>两种预渲染方式的选择

* Next.js允许开发者为每个页面选择不同的预渲染方式，不同的预渲染方式拥有不同的特点，应根据场景进行渲染。
* 大多数页面建议静态生成。
* 静态生成一次构建，反复使用，访问速度快，因为页面都是事先生成好的。适用场景：营销页面、博客文章、电子商务产品列表、帮助和文档。
* 服务器端渲染访问速度不如静态生成，但是由于每次请求都会重新渲染，适用于数据频繁更新的页面或页面内容随请求变化而变化的页面。

## 实现静态生成
>无数据和有数据的静态生成。

* 如果组件不需要再其他地方获取数据，直接进行静态生成。
* 如果组件需要在其他地方获取数据，在构建时next.js会预先获取组件需要的数据，然后再对组件进行静态生成。

### 无数据的静态生成

1. 先把.next文件夹删掉

2. 运行build命令
```shell
npm run build
```

### 有数据的静态生成
>通过getStaticProps方法获取组件静态生成时需要的数据，并通过props的方式将数据传递给组件，该方法是一个异步函数，需要在组件内部进行导出，在开发模式下，getStaticProps改为在每个请求上运行。

```js
import Head from 'next/head'
import styles from './list.module.css';
import { readFile } from 'fs';
import { promisify } from 'util';
import { join } from 'path'

const read = promisify(readFile);
export default function List({data}) {
    return (
        <div>
            <Head>
                <title>List Page</title>
            </Head>
            <h1 className={styles.demo}>Hello,Next!</h1>
            <h2>控制台打印的是{data}</h2>
        </div>
    )
}

export async function getStaticProps () {
    let data = await read(join(process.cwd(),'pages','_app.js'),'utf-8');
    console.log(data)
    return {
        props: {
            data
        }
    }
}
```

### npm start和npm run dev的区别
* start启动的是生产环境中的代码
* dev启动的是开发环境中的代码


### 实现基于动态路由的静态生成
>基于参数为页面组件生成HTML页面，有多少参数就生产多少HTML页面，在构建应用时，先获取用户可以访问的所有路由参数，再根据路由参数获取具体的数据，然后根据数据生成静态HTML。

1. 创建基于动态路由的页面组件文件，命名时在文件名称外面加上[]，比如[id].js


![image.png](https://img-blog.csdnimg.cn/img_convert/806d009b5b3aed3d19f93784f8b94e38.png)

2. 导出异步函数getStaticPaths，用于获取所有用户可以访问的路由参数。

3. 导出异步函数getStaticProps，用户根据路由参数获取具体的数据。

>注意：getStaticProps和getStaticPaths只运行在服务器端，永远不会运行在客户端，甚至不会被打包到客户端JavaScript中，意味着这里可以随意些服务端代码，比如查询数据库。

>[id].js

```js
export default function Post({data}) {
    return (
        <div>
            <span>{data.id}</span>
            <span>{data.title}</span>
        </div>
    )
}

// 返回用户能够访问到的所有的路由参数
export async function getStaticPaths() {
    return {
        paths: [{params: {id: '1'}},{params: {id: '2'}}],
        fallback: false
    }
}

// 返回路由参数对应的具体数据
export async function getStaticProps({params}) {
    const id = params.id;
    let data;
    switch (id) {
        case '1':
            data = {id: "1",title: 'Hello'};
            break;
        case '2':
            data = {id: "2", title: 'World'};
            break;
        default:
            data = {};
    }
    return {
        props: {
            data
        }
    }
}
```

### fallback选项的作用
>fallback设置为false表示如果用户请求的参数，不在指定参数范围内，则返回404页面，如果这个值是true,表示获取用户请求的数据并生成对应的静态页面。

>下面是fallback为true时[id].js的代码

```js
import { useRouter } from 'next/router'
export default function Post({data}) {
    const router = useRouter();
    if (router.isFallback) return <div style={{color: 'red'}}>Loading...</div>
    return (
        <div>
            <span>{data.id}</span>
            <span>{data.title}</span>
        </div>
    )
}

// 返回用户能够访问到的所有的路由参数
export async function getStaticPaths() {
    return {
        paths: [{params: {id: '1'}},{params: {id: '2'}}],
        fallback: true
    }
}

// 返回路由参数对应的具体数据
export async function getStaticProps({params}) {
    const id = params.id;
    let data;
    switch (id) {
        case '1':
            data = {id: "1",title: 'Hello'};
            break;
        case '2':
            data = {id: "2", title: 'World'};
            break;
        case '3':
            data = {id: '3',title: 'Hello World'};
            break;
        default:
            data = {};
    }
    return {
        props: {
            data
        }
    }
}
```

## 自定义404页面
>要创建自定义404页面，需要在pages文件夹中创建404.js文件。

```js
export default function Custom404() {
    return (
        <h1>404 Not Found</h1>
    )
}
```

## API Routers
>API Routers可以理解为接口，客户端向服务端发送请求获取数据的接口，Next.js应用允许React开发者编写服务器端代码创建数据接口。

### 实现API Routers
1. 在pages/api文件夹中创建API Routes文件，比如user.js
2. 在文件中默认导出请求处理函数，函数有两个参数，req为请求对象，res为响应对象。
3. 访问API Routes: localhost:3000/api/user

>注意：不要在getStaticProps或getStaticPaths函数中访问API Routers，因为这两个函数就是在服务器端运行的，可以直接写服务器端代码。

>下面是/pages/api/user.js

```js
export default (req, res) => {
    res.send({ name: 'hello' })
}
```









