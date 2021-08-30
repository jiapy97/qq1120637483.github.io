---
title: React项目引入路由（基础）
date: 2021-05-15
categories: React
tags: 
- React
---
## 1. 安装工具包
```
npm install react-router-dom
```
## 2. 引入路由器、路由、Switch等
```js
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Admin from './pages/admin';
import Login from './pages/login';
export default class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/' component={Admin}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
```



