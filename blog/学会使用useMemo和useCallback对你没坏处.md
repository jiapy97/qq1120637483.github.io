---
title: 学会使用useMemo和useCallback对你没坏处
date: 2021-9-6
author: Justin
top: false
cover: false
categories: Hooks
tags:
  - Hooks
---
## 什么是useMemo？
>useMemo的行为类似Vue中的计算属性，可以检测某个值的变化，根据变化值计算新值。useMemo会缓存计算结果，如果检测值没有发生变化，即使组件重新渲染，也不会重新计算，此行为可以有助于避免在每个渲染上进行昂贵的计算。不要再useMemo函数中执行与渲染无关的操作。

### useMemo的基本用法
```js
function App() {

    const [bool,setBool] = useState(true);
    const [age,setAge] = useState('666');
    
    const result = useMemo(() => {
        console.log('检测到age发生变化');
        return age * 2; 
    },[age])
    return (
        <div>
            {age}
            {bool ? '真': '假'}
            <button onClick={() => setBool(!bool)}>点我切换布尔值</button>
            <button onClick={() => setAge(age*1 + 1)}>点我age+1</button>
            result是：{result}
        </div>
    )
}
```
## memo方法
>memo方法可以用于性能优化，如果本组件中的数据没有发生变化，阻止组件更新，类似类组件中的PureComponent和shouldComponentUpdate.

### memo方法的基本用法
```js
function App() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <Foo />
            <h1>当前求和为：{count}</h1>
            <button onClick={() => setCount(count + 1)}>点我+1</button>
        </div>
    )

}

const Foo = memo(function Foo() {
    console.log('Foo被渲染了');
    return (
        <div>这是Foo组件</div>
    )
})
```

## useCallback是什么？
>常用于性能优化，缓存函数，使得组件重新渲染时得到相同的函数实例。

### useCallback的基本用法
>在这里我们需要注意的是useCallback的第一个参数时我们需要缓存的函数，第二个参数是一个数组，数组中包含的是没有变化的目标函数。

```js
function App() {
    const [count, setCount] = useState(0);
    const resetCount = useCallback(() => setCount(0),[setCount]);
    return (
        <div>
            <Foo resetCount={resetCount}/>
            <h1>当前求和为：{count}</h1>
            <button onClick={() => setCount(count + 1)}>点我+1</button>
            
        </div>
    )
}
const Foo = memo(function Foo(props) {
    console.log('Foo被渲染了');
    return (
        <div>
            这是Foo组件
            <button onClick={props.resetCount}>点我归零</button>
        </div>
    )
})
```

## 参考资料
* [官方文档：useCallback](https://zh-hans.reactjs.org/docs/hooks-reference.html#usecallback)
* [官方文档：useMemo](https://zh-hans.reactjs.org/docs/hooks-reference.html#usememo)

