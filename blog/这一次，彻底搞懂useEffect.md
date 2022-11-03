---
title: 这一次，彻底搞懂useEffect
date: 2021-9-3
author: Justin
top: false
cover: false
categories: Hooks
tags:
  - Hooks
---
## 什么是useEffect?
>让函数型组件拥有处理副作用的能力，类似生命周期函数。

### 1. useEffect执行时机
>可以把useEffect看做componentDidMount,componentDidUpdate,componentWillUnmount这三个函数的组合。

![image.png](https://img-blog.csdnimg.cn/img_convert/f92c585c136ca03a11a8b27c36a1e890.png)

* 当做componentDidMount和componentDidUpdate的时候
```js
function App() {
    const [count,setCount] = useState(0);
    // 组件挂载完成之后 或 组件数据更新完成之后 执行
    useEffect(() => {
        console.log('组件挂载完成之后 或 组件数据更新完成之后 执行');
    })
    return (
        <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    )
}
```
* 仅当做comonentDidMount的时候
```js
useEffect(() => {
    console.log('仅当做componentDidMount');
},[])
```
* 当做componentWillunmount的时候(注意：这里不是仅当做componentWillunmount)
```js
useEffect(() => () => {
    console.log('当做componentWillUnmount');
})
```


### 2. useEffect的使用方法示例
1. 为window对象添加滚动事件。（挂载完成后绑定事件，卸载组件后解除绑定）
```js
function App() {
    function onScroll() {
        console.log('监听到页面发生滚动了');
    }
    useEffect(() => {
        window.addEventListener('scroll',onScroll);
        return () => {
            // 卸载组件时解除对事件的绑定
            window.removeEventListener('scroll',onScroll);
        }
    })
    return (
        <div>
            App 
        </div>
    )
}
```
2. 设置定时器让count数值每隔一秒增加1。
```js
function App() {
    
    const [count,setCount] = useState(0);
    useEffect(() => {
        const timeId = setInterval(() => {
           setCount(count => count + 1); 
        },1000)
        return () => {
            clearInterval(timeId);
        }
    },[])
    return (
        <div>
            <h1>当前求和为：{count}</h1> 
        </div>
    )
}
```

### 3. useEffect解决的问题
1. 将一组相干的业务逻辑归置到了同一个副作用函数中.
2. 简化重复代码,使组件内部代码更加清晰.

### 4：useEffect的第二个参数
* 只有指定数据发生变化的时候才触发effect
```js
useEffect(() => {
    document.title = count;
}, [count]) 
```

### 5：useEffect结合异步函数
>在useEffect中直接使用async和await是会报错的，推荐使用立即执行函数来包裹异步函数。
```js
function getData() {
    return new Promise(resolve => {
        resolve({msg: 'Hello'})
    })
}
function App() {

    useEffect(() => {
        (async function () {
            const result = await getData();
            console.log(result);
        })()
    },[])
    
    return (
        <div>
            App
        </div>
    )
}
```

## 参考文献
* [官方文档](https://zh-hans.reactjs.org/docs/hooks-reference.html#useeffect)



