---
title: 代码分割(精读React官方文档—14)
date: 2021-07-03
categories: 精读React官方文档
tags: 
- 精读React官方文档
---
## 打包
>官方描述：大多数 React 应用都会使用 Webpack，Rollup 或 Browserify 这类的构建工具来打包文件。打包是一个将文件引入并合并到一个单独文件的过程，最终形成一个 “bundle”。接着在页面上引入该 bundle，整个应用即可一次性加载。

**实例：打包前文件和打包后文件对比**
* 打包前
```js
// app.js
import { add } from './math.js';

console.log(add(16, 26)); // 42
```
```js
// math.js
export function add(a, b) {
  return a + b;
}
```
* 打包后
```js
function add(a, b) {
  return a + b;
}

console.log(add(16, 26)); // 42
```

## 代码分割
**打包应该注意的问题：**

1. 随着应用体积的增加，避免因为体积过大而导致加载过慢的问题。
2. Webapck等构建工具是支持代码分割的。
3. 代码分割能够懒加载用户所需要的内容，能显著的提高应用的性能。
4. 尽管没有减少应用整体的代码体积，但是避免了加载用户永远不需要的代码，减少了所需的代码量。

## import()
>官方描述：引入代码分割的最佳方式是通过动态imort语法。

* 使用之前
```js
import { add } from './math';

console.log(add(16, 26));
```
* 使用之后
```js
import("./math").then(math => {
  console.log(math.add(16, 26));
});
```
**解读**

1. 当Webpack解析到该语法的时候，会进行自动的代码分割。
2. 如果你是使用的create-react-app等脚手架的情况下，该功能开箱即用。
3. 当自己配置Webpack或者Babel的时候，需要根据相关配置文件进行操作。

## React.lazy
>React.lazy函数能让你像渲染常规这件一样处理动态引入。

* 使用之前
```js
import OtherComponent from './OtherComponent';
```
* 使用之后
```js
const OtherComponent = React.lazy(() => import('./OtherComponent'));
```
>上面的代码将会在组件首次渲染的时候，自动导入包含OtherComponent的组件，React.lazy接收一个函数，这个函数动态调用import并返回一个Promise,该Promise需要resolve一个default export 的组件。然后应在Suspense组件中渲染lazy组件。

```js
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```
**解读**

1. fallback属性中可以接收任何在组件加载过程中想要展示的React组件。
2. 可以将Suspense组件至于懒加载组件之上的任何位置。
3. 可以用一个Suspense组件包裹多个懒加载组件。

```js
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));
const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <OtherComponent />
          <AnotherComponent />
        </section>
      </Suspense>
    </div>
  );
}
```
## 异常捕获边界
>为什么需要异常捕获边界？
* 因为一旦模块加载失败，会触发一个错误，我们可以通过异常捕获边界技术来处理这些情况，以显示良好的用户体验。

**解读**

解决这个问题的本质还是通过Supense和React.lazy进行结合。
```js
import React, { Suspense } from 'react';
import MyErrorBoundary from './MyErrorBoundary';

const OtherComponent = React.lazy(() => import('./OtherComponent'));
const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

const MyComponent = () => (
  <div>
    <MyErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <OtherComponent />
          <AnotherComponent />
        </section>
      </Suspense>
    </MyErrorBoundary>
  </div>
);
```
## 基于路由的代码分割

1. 如何选择代码分割的位置，需要考虑代码分割不能影响用户的体验。
2. 一般选择从路由开始进行分割。

**基于路由的分割实例**
```js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
    </Suspense>
  </Router>
);
```
## 命名导出
>React.lazy目前只支持默认导出，如果想让其支持命名导出，可以考虑创建一个中间模块。

### 第一步：分别暴露组件地址
```js
// ManyComponents.js
export const MyComponent = /* ... */;
export const MyUnusedComponent = /* ... */;
```
### 第二步：将分别暴露转为默认暴露
```js
// MyComponent.js
export { MyComponent as default } from "./ManyComponents.js";
```
### 第三步：调用懒加载
```js
// MyApp.js
import React, { lazy } from 'react';
const MyComponent = lazy(() => import("./MyComponent.js"));
```