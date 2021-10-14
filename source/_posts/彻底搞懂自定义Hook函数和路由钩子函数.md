---
title: 彻底搞懂自定义Hook函数和路由钩子函数
date: 2021-10-13
author: Justin
top: false
cover: false
categories: Hooks
tags:
  - Hooks
---

## 什么是自定义Hook?
* 自定义Hook是标准的封装和共享逻辑的方式。
* 自定义Hook是一个函数，其名称以use开头。
* 自定义Hook其实就是逻辑和内置的Hook的组合。

>通俗的说，自定义Hook就是对组件间共用逻辑的封装，其名称以use开头。

### 实例一：封装共有请求
>假设我们在组件挂载完成之后，需要对远程服务器发送一个GET请求，获取到文章数据，然后显示在页面中，我们可以通过下面的写法来完成，将获取数据折翼共有操作进行封装。
```js
function useGetPost() {
    const [post,setPost] = useState({});
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => setPost(res.data));
    },[])
    return [post,setPost];
}
function App() {

    const [post] = useGetPost();
    return (
        <div>
            <h1>{post.title}</h1>
            <div>{post.body}</div>
        </div>
    )
}
```

### 实例二：封装输入框的value和onChange属性
>在Form表单中输入框的value和onChange属性是十分重要的，也是使用非常频繁的，如果针对每一个输入框都单独写onChange函数是非常臃肿的，通过自定义Hook进行封装则极大提高了便利性。

```js
// 定义自定义Hook：获取input的value和onChange
function useUpdateInput(initialValue) {
    const [value,setValue] = useState(initialValue);
    return {
        value,
        onChange: e => setValue(e.target.value)
    }
}

function App() {
    const usernameInput = useUpdateInput('');
    const passwordInput = useUpdateInput('')
    const submitForm = (event) => {
        event.preventDefault();
        console.log(usernameInput.value);
        console.log(passwordInput.value);
    }
    return (
        <form onSubmit={submitForm}>
            <input type="text" name="username" {...usernameInput}/>
            <input type="password" name="password" {...passwordInput} />
            <input type="submit" />
        </form>
    )
}
```

## 什么是路由钩子函数？
>React路由钩子函数是react-router-dom这个库提供的，主要提供了以下四个钩子函数：

* useHistory
* useLocation
* useRouteMatch
* useParams

>**注意：Link和Route必须在同一个路由器上，这个路由器可以是HashRouter也可以是BrowserRouter，Link to指示路由跳转到哪个组件，Route path 指示component**

### 路由组件获取History、Location、Match与Params
>这里要想获取到Params需要使用动态路由。

* App组件
```js
function App() {
    return (
        <div>
            <div>
                <Link to='/home/xiaoming'>首页</Link>
                <Link to='/list'>列表页</Link>
            </div>
            <div>
                <Route path='/home/:name' component={Home}/>
                <Route path='/list' component={List}/>
            </div>
        </div>
    )
}

ReactDOM.render(<Router>
    <App />
</Router>, document.querySelector('#root'));
```
* Home组件（路由组件）
```js
import {useHistory,useLocation,useRouteMatch,useParams} from 'react-router-dom'
import React from 'react';

const Home = (props) => {
    console.log(useHistory());
    console.log(useLocation());
    console.log(useRouteMatch());
    console.log(useParams());
    return (
        <div>
            这是Home组件
        </div>
    );
}

export default Home;
```




