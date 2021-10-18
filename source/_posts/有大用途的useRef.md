---
title: 有大用途的useRef
date: 2021-10-18
author: Justin
top: false
cover: false
categories: Hooks
tags:
  - Hooks
---

## 使用useRef获取DOM元素
>使用useRef获取DOM元素是目前useRef最常用的用法。

### 基本用法
```js
function App() {
    const box = useRef();

    return (
        <div ref={box}>
            <button onClick={() => console.log(box)}>点击获取div</button>
        </div>
    )
}
```
![image.png](https://img-blog.csdnimg.cn/img_convert/690a1254e0f8fa452719c4f1ad1a82a0.png)

## 使用useRef跨组件周期保存数据
>即使组件重新渲染，保存的数据仍然还在，保存的数据被更改不会触发组件重新渲染。

### 基本用法
```js
/**
 * @description: 组件挂载完成之后开启一个循环定时器，使用useRef的保存数据功能
 *               不会随着组件的更新而丢失数据
 * @param {*}
 * @return {*}
 */
function App() {
    const [count,setCount] = useState(0)
    const timeId = useRef;
    useEffect(() => {
        timeId.current = setInterval(() => {
            setCount(count => count + 1);
        },1000)
    }, []);
    const handleSetInterval = () => {
        clearInterval(timeId.current)
    }
    return (
        <div>
            <h1>当前求和为{count}</h1>
            <button onClick={handleSetInterval}>点我清除定时器</button>
        </div>
    )
}
```
>这里我们需要注意的是数据并不是直接保存在useRef返回的这个对象中的，而是保存在这个对象的current属性上的。

