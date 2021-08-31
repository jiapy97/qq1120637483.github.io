---
title: useState是怎么回事？
date: 2021-8-31
author: Justin
top: false
cover: false
categories: Hooks
tags:
  - Hooks
---
>Hooks意为钩子，React Hooks就是一堆钩子函数，React通过这些钩子函数对函数型组件进行增强，不同的钩子函数提供了不同的功能。钩子函数有一个特点，都是以use开头。

## 为函数组件提供状态
>useState函数的内部是使用闭包来实现函数保存状态数据的。

### useState的返回值是什么？
>返回值是一个数组，数组的第一项是状态数据，第二项是设置状态数据的方法，关于这个第二项的命名，我们一般采用set+状态数据名的方法，请看下面的例子。
```js
const [count,setCount] = useState(0);
```

## useState的细节
1. 接收唯一的参数即状态初始值，初始值可以是任意数据类型。
2. 返回值为数组，数组中存储状态值和更改状态值的方法，方法名称约定以set开头，后面加上状态名称。
3. 方法可以被调用多次，用以保存不同的状态值。
4. 参数可以是一个函数，函数返回什么，初始状态就是什么，函数只会被调用一次，用在初始值是动态值的情况。

```js
function App(props) {
    const [count,setCount] = useState(() => {
        return props.count || 10;
    });
    const [person,setPerson] = useState({name: 'justin'})
    return (
        <div>
            <span>{count},{person.name}</span>
            <br />
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setPerson({name: '国家'})}>点击切换name</button>
        </div>
    )
}
```
## useState更新状态时是异步的
```js
function App(props) {
    const [count,setCount] = useState(0);
    const [person,setPerson] = useState({name: 'justin'})
    function handleCount() {
        setCount(() => {
            return count + 1;
        })
        console.log(count);   // 打印的是0，说明是异步的
    }
    return (
        <div>
            <span>{count},{person.name}</span>
            <br />
            <button onClick={handleCount}>+1</button>
            <button onClick={() => setPerson({name: '国家'})}>点击切换name</button>
        </div>
    )
}
```
## 读取state
>在class的写法中，读取state需要使用this.state，但是在hook写法中，只需要直接使用状态的变量名即可。

## 为什么叫useState而不叫createState?
>因为Create一词并不是很准确，因为state只在组件首次渲染的时候被创建，在下一次重新渲染的时候，useState返回给我们当前的state。





