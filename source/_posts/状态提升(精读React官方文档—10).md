---
title: 状态提升(精读React官方文档—10)
date: 2021-06-28
categories: 精读React官方文档
tags: 
- 精读React官方文档
---
## 为什么需要状态提升？
>有时候，多个组件需要共享状态，此时需要将共享状态提升到最近的共同父组件中去。

## 首先创建一个判断水是否沸腾的组件BoilingVerdict
>celsius 温度作为一个 prop.
```js
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}
```
>官方描述：接下来, 我们创建一个名为 Calculator 的组件。它渲染一个用于输入温度的 \<input>，并将其值保存在 this.state.temperature 中。另外, 它根据当前输入值渲染 BoilingVerdict 组件。
```js
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />
        <BoilingVerdict
          celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}
```

## 添加第二个输入框
>在已有摄氏温度输入框的基础上，我们提供华氏度的输入框，并保持两个输入框的数据同步。
>先从 Calculator 组件中抽离出 TemperatureInput 组件，然后为其添加一个新的 scale prop，它可以是 "c" 或是 "f"
```js
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}
```

>修改 Calculator 组件让它渲染两个独立的温度输入框组件：
```js
class Calculator extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}
```
**解读**

我们希望的是当一个输入框的值发生变化的时候，另一个输入框的值也发生变化。即让他们保持同步。

## 编写转换函数
>编写两个可以在摄氏度与华氏度之间相互转换的函数：
```js
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
```
>编写另一个函数，它接受字符串类型的 temperature 和转换函数作为参数并返回一个字符串。
```js
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
```
>举例说明
* tryConvert('abc', toCelsius) 返回一个空字符串，而 tryConvert('10.22', toFahrenheit) 返回 '50.396'。

## 状态提升
>截止到现在，两个 TemperatureInput 组件均在各自内部的 state 中相互独立地保存着各自的数据。
```js
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    // ...  
```
**解读**

我们要想保持两个输入框中内容的同步，必须将子组件的状态移动到其共同的父组件中。

>首先我们将 TemperatureInput 组件中的 this.state.temperature 替换为 this.props.temperature。
```js
 render() {
    // Before: const temperature = this.state.temperature;
    const temperature = this.props.temperature;
    // ...
```
**解读**

由于props是只读的，由于temperature是通过props传递过来的，所以子组件现在失去了对它的控制权。所以此时我们要想继续修改temperature我们需调用this.props.onTemperatureChange 来更新它：
```js
handleChange(e) {
    // Before: this.setState({temperature: e.target.value});
    this.props.onTemperatureChange(e.target.value);
    // ...
```
>官方提示：自定义组件中的 temperature 和 onTemperatureChange 这两个 prop 的命名没有任何特殊含义。我们可以给它们取其它任意的名字，例如，把它们命名为 value 和 onChange 就是一种习惯。

**阶段性回顾**

>我们首先移出了组件自身的state，过使用 this.props.temperature 替代 this.state.temperature 来读取温度数据。当我们想要响应数据改变时，我们需要调用 Calculator 组件提供的 this.props.onTemperatureChange()，而不再使用 this.setState()。

```js
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}
```
>我们可以存储两个输入框中的值，但这并不是必要的。我们只需要存储最近修改的温度及其计量单位即可，根据当前的 temperature 和 scale 就可以计算出另一个输入框的值。

**解读**

我们只需要存储最近一次输入的值即可。因为两个输入框中的值来自于同一个state的更新。

```js
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
```
## 梳理回顾整个流程
1. React会调用每一个TemperatureInput中的handleChange方法
2. 调用的handleChange方法均有父组件提供
3. 无论哪个输入框的输入发生变化都会调用父组件更新两个输入框中的状态值

## 为什么任何可变数据应当只有一个相对应的唯一数据源？
>带来的好处是，排查和隔离 bug 所需的工作量将会变少。由于“存在”于组件中的任何 state，仅有组件自己能够修改它，因此 bug 的排查范围被大大缩减了。


