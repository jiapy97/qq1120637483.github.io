---
title: Refs转发(精读React官方文档—17)
date: 2021-07-07
categories: 精读React官方文档
tags: 
- 精读React官方文档
---
## 什么是Ref转发？
>Ref转发是一项将ref自动地通过组件传递到其一子组件的技巧。

## 转发refs到DOM组件
* 下面的组件是一个渲染原生DOM元素button的FancyButton组件
```js
function FancyButton(props) {
  return (
    <button className="FancyButton">
      {props.children}
    </button>
  );
}
```
* Ref转发是一个可选特性，其允许某些组件接收ref,并将其向下传递给子组件。
>之所以要使用React.forwardRef是因为函数式组件无法直接接收ref.

* 下面的实例中，FancyButton使用React.forwardRef来获取传递给它的ref,然后转发到它渲染的DOM button中
```js
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// 你可以直接获取 DOM button 的 ref：
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
```
>通过上述的方法，可以使得FancyButton的组件可以获取DOM节点button的ref,并在必要时访问，就像其直接使用DOM button一样。

## 步骤解析
1. 通过React.createRef创建一个ref变量。
2. 指定ref属性 \<FancyButton ref={ref}>
3. React传递ref给forwardRef作为其第二个参数。
4. 向下转发ref参数到button，并将其指定为JSX属性。
5. 当ref挂载完成，ref.current将指向button DOM节点。

## 组件库维护者的注意事项
* 当使用forwardRf时，应将其视为一个新的主版本，因为这可能会造成明显的不同的行为。

## 在高阶组件中转发refs
>转发ref对高阶组件是很有用的，让我们从一个输出组件props到控制台的高阶组件为例
```js
function logProps(WrappedComponent) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return LogProps;
}
```
* logProps组件是一个高阶组件，props将会传递到其包裹的组件。这个高阶组件可以记录所有传递到fancyButton组件的props
```js
class FancyButton extends React.Component {
  focus() {
    // ...
  }

  // ...
}

// 我们导出 LogProps，而不是 FancyButton。
// 虽然它也会渲染一个 FancyButton。
export default logProps(FancyButton);
```
* 需要注意的是：refs不会传递过去，因为ref不是prop属性，就像key一样，ref背React进行了特殊处理。
* 如果使用传统的ref传递方式，意味着ref实际上被挂载到了LogProps组件上
```js
import FancyButton from './FancyButton';

const ref = React.createRef();

// 我们导入的 FancyButton 组件是高阶组件（HOC）LogProps。
// 尽管渲染结果将是一样的，
// 但我们的 ref 将指向 LogProps 而不是内部的 FancyButton 组件！
// 这意味着我们不能调用例如 ref.current.focus() 这样的方法
<FancyButton
  label="Click Me"
  handleClick={handleClick}
  ref={ref}
/>;
```
* 解决办法：使用React.forwardRef明确的将refs转发到内部的FancyButton组件。
```js
function logProps(Component) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      const {forwardedRef, ...rest} = this.props;

      // 将自定义的 prop 属性 “forwardedRef” 定义为 ref
      return <Component ref={forwardedRef} {...rest} />;
    }
  }

  // 注意 React.forwardRef 回调的第二个参数 “ref”。
  // 我们可以将其作为常规 prop 属性传递给 LogProps，例如 “forwardedRef”
  // 然后它就可以被挂载到被 LogProps 包裹的子组件上。
  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardedRef={ref} />;
  });
}
```
## 在DevTolls中显示自定义名称
* 下面的组件将在DevTools中显示为“ForwardRef”
```js
const WrappedComponent = React.forwardRef((props, ref) => {
  return <LogProps {...props} forwardedRef={ref} />;
});
```
* 自定义命名的情况(将显示ForwardRef(myFunction))
```js
const WrappedComponent = React.forwardRef(
  function myFunction(props, ref) {
    return <LogProps {...props} forwardedRef={ref} />;
  }
);
```
* 设置函数的displayName属性来包含被包裹组件的名称
```js
function logProps(Component) {
  class LogProps extends React.Component {
    // ...
  }

  function forwardRef(props, ref) {
    return <LogProps {...props} forwardedRef={ref} />;
  }

  // 在 DevTools 中为该组件提供一个更有用的显示名。
  // 例如 “ForwardRef(logProps(MyComponent))”
  const name = Component.displayName || Component.name;
  forwardRef.displayName = `logProps(${name})`;

  return React.forwardRef(forwardRef);
}
```

## 参考资料
* [hooks 中转发ref用法的汇总](https://www.bilibili.com/video/BV1mp4y1Y74f?from=search&seid=8910195420967703293)
