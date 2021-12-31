---
title: 这一次，彻底搞懂ES6新特性
date: 2021-12-31
author: Justin
top: false
cover: false
categories: 面试题
tags:
  - 面试题
---

## ES6新特性都有哪些？

### 1. 类class
>ES6中的class不是新的对象继承模型，它只是原型链的语法糖表现形式。

>ES6类的几点注意事项

* 类名最好大写
* constructor关键字在类定义的内部创建类的构造函数，这个关键字会告诉解释器在使用new操作符创建类的新实例时，应该调用这个函数，构造函数的定义不是必须的，不定义构造函数相当于将构造函数定义为空函数。
* 类的语法可以非常方便的定义属性应该存在于实例上，还是原型上，还是类本身上。（在constructor构造函数中写的存在于实例上，直接写在类中的普通函数是存在于原型上的，通过static关键字标识的函数是存在于类身上的）

```js
class Person { 
     constructor() { 
         // 存在于实例上
         this.locate = () => console.log('instance', this); 
     } 
     // 存在于原型对象上
     locate() { 
        console.log('prototype', this); 
     } 
 	// 存在于类身上
     static locate() { 
        console.log('class', this); 
     } 
} 
let p = new Person(); 
p.locate(); // instance, Person {} 
Person.prototype.locate(); // prototype, {constructor: ... } 
Person.locate(); // class, class Person {}
```

* ES6中的类使用extends关键字来继承拥有构造函数的原型的对象，这意味着不仅可以继承一个类，也可以继承普通的构造函数。

### 2. 模块化（Module）
> 在ES6模块化之前有AMD、CMD、require.js以及后面的sea.js，这些都是第三方的插件，ES6的module的不同之处在于，它的运行环境是编译时的，也就是说在编译时就会把所有的依赖导入导出。

> ES6模块化的核心就是通过export进行暴露，通过import进行引入，其中export和import可以有多个在一个文件或者模块中，但是export default只有一个，在导入的时候，如果时export暴露的，需要通过解构赋值的形式取出来，但是如果时export default则不需要。


### 3. 箭头函数
>关于箭头函数的内容，本文不再进行过多的赘述，详情请看我的这篇文章[这一次，彻底搞懂箭头函数](https://juejin.cn/post/7041055543984652319)

> 箭头函数的核心就是下面的七个特点：

1. 相比普通函数，箭头函数有更加简洁的语法。
2. 箭头函数不会绑定this，会捕获其所在上下文的this，作为自己的this。
3. 箭头函数是匿名函数，不能作为构造函数，不可以使用new命令，否则会报错。
4. 箭头函数不绑定arguments，取而代之用rest参数解决，同时没有super和new.target。
5. 使用call、apply、bind并不会改变箭头函数中的this指向。
6. 箭头函数没有原型对象prototype属性。
7. 不能使用yield关键字，不能作为generator函数。

### 4. 函数参数默认值
>ES6中为函数的参数提供了默认值，如果没有传递相关参数，相关参数则使用默认值，默认参数通过直接给参数进行赋值实现。

```js
function greet(name = 'Student', greeting = 'Welcome') {
  return `${greeting} ${name}!`;
}

greet(); // Welcome Student!
greet('James'); // Welcome James!
greet('Richard', 'Howdy'); // Howdy Richard!
```

### 5. 模板字符串
> ES6新增了使用模板字面量来定义字符串的能力。模板字面量使用反引号，模板字面量会保持反引号内部的空格，在模板字符串中通过${}的形式可以使用JavaScript表达式。


### 6. 解构赋值
>解构赋值包括对象的解构赋值和数组的结构赋值。

#### 对象的解构赋值
> 对象的解构赋值通过{key}的形式来实现，对象的解构赋值中，如果在相同作用域中存在同名的变量，就会产生冲突，如果想要避免冲突，可以在解构赋值的时候进行重命名。

```js
const obj = {
  name: '666',
  age: 3
}
const {name} = obj;
console.log(name)  // 666
```

> 重命名

```js
const obj = {
  name: '大前端',
  age: 3
}

const name = '大前端2'
const {
  name: testName
} = obj
console.log(testName)  //大前端
```

#### 数组的解构赋值
> 数组的解构赋值会根据变量的位置进行分配数组中对应位置的成员，也可以通过拓展运算符来进行解构数组最后的所有成员，也可以通过逗号进行代替解构赋值。

1. 通过位置进行解构

```js
const arr = [100,200,300];

const [foo,bar,baz] = arr;

console.log(foo); // 100
console.log(bar); // 200
console.log(baz); // 300
```

2. 使用逗号进行代替解构

```js
const arr = [100,200,300];
const [,,baz] = arr;
console.log(baz); //300
```

3. 通过拓展运算符来解构数组的最后成员

```js
const arr = [100,200,300,400];
const [,,...baz] = arr;
console.log(baz); // [300,400]
```

### 7. 拓展运算符与rest参数
> rest参数的形式为: `...变量名`,拓展运算符是三个点`...`。

#### rest参数
> rest参数用于获取函数的多余参数，与rest参数搭配的变量会变成一个数组，会将多余的参数放入数组中，需要注意的是使用rest参数的后面不能再有其他参数。

```js
function add(...values) {
  let sum = 0;
  console.log(values);  // [1,2,3]
  for (var val of values) {
    sum += val;
  }
  return sum;
}

add(1, 2, 3) // 6
```

#### 拓展运算符
> 拓展运算符可以看作是rest参数的逆运算，将一个数组转为用逗号分割的参数序列。

```js
console.log(...[1,2,3]);  // 1 2 3

console.log(1,...[2,3,4],5); // 1 2 3 4 5
```

#### rest参数和arguments对象的区别
1. rest参数只包含那些没有对应形参的实参，而arguments对象包含了传给函数的所有实参。
2. arguments对象不是一个真实的数组，而rest参数是真实地Array实例，能在这个实例上直接使用数组的所有方法。
3. arguments对象还有一些附加的属性，比如callee属性。

### 8. 对象属性简写
> 在ES6中定义对象的时候，如果对象的属性名和外部的变量名同名的时候，可以省略值，直接写属性名。

![image.png](https://img-blog.csdnimg.cn/img_convert/f7860b59c403305e564a8ac8af85fe49.png)

> 对象中定义函数的时候，可以省略function。

```js
let obj = {
  getName() {
    return 111;
  }
}
```

### 9. Promise
#### 为什么要引入Promise?
> 在没有Promise之前，要想处理异步操作，常见的做法是使用回调函数，但回调函数虽然能够解决我么能实现异步操作队列化的需求，但当出现一个方法中嵌套着多个回调函数的时候，此时代码结构就会变得十分臃肿，也就是出现了回调地狱的问题，而Promise对象的差生就是为了解决回调地狱的问题，同时Promise的另一个特性就是支持多个并发的请求，获取并发请求中的数据。

#### 什么是Promise?
> Promise是异步编程的一种解决方案，从语法上讲,Promise是一个对象，使用它可以获取异步操作的消息，从意义上将，它是承诺，承诺过一段时间会给你一个结果，Promise有三个状态：pending,fulfiled，rejected。状态一旦改变就不会在变，创造promise实例后，它会立即执行。

#### Promise的构造函数
> Promise是一个构造函数，自己身上由all,race,resolve,reject等方法，原型上由then，catch,finally等方法。Promise的构造函数接收一个参数，这个参数是一个函数，函数需要传入两个参数，resolve和reject，resolve代表的是异步操作成功的回调函数，reject是异步操作失败的回调函数。


### 10. 块级作用域let与const
> 关于块级作用域let与const，请看即将发布的[let,var,const的区别]。

### 11. 基本数据类型Symbol
> Symbol类型是为了解决属性名冲突的问题，同时还具备模拟私有属性的功能。

#### Symbol变量的特点
1. 创建Symbol变量可以使用Symbol()函数。
2. symbol可以作为对象属性名。（只有字符串和symbol类型才能用作对象属性名。）
3. 没有两个symbol的值是相等的。

```js
const symbol1 = Symbol();
const symbol2 = Symbol();
// 下面这个情况：说明两个symbol是不相等的。
console.log(symbol1 === symbol2);  // false

// 下面的这个情况说明，symbol类型可以作为对象属性名
const obj = {};
obj[symbol1] = '666';
obj[symbol2] = '777';

console.log(obj[symbol1]); // 666
console.log(obj[symbol2]); // 777
```

#### Symbol的应用场景
1. 描述信息

> symbol函数只有一个参数，字符串description,这个参数的作用是辅助调试，也就是它的toString值，需要注意的是，两个具有相同descrption的Symbol也是不相等的。

```js
const symbol1 = Symbol('my test');
const symbol2 = Symbol('my test');

// 下面这个情况说明，通过Symbol函数产生的symbol即使描述一致，也是不相等的
console.log(symbol1 === symbol2); // false
console.log(symbol1); // 'Symbol(my test)'
```

> 通过Symbol.for()创建的Symbol会添加到全局的symbol注册中心，并用这个description作为key，也就是说通过Symbol.for()创建的具有相同description的两个symbol是相等的。

```js
const symbol1 = Symbol.for('my test');
const symbol2 = Symbol.for('my test');

// 下面这个情况说明，通过symbol.for创建的symbol，如果description相同，它们就是相等的
console.log(symbol1 === symbol2); // true
console.log(symbol1); // 'Symbol(my test)'
```

> 一般不是用Symbol.for创建symbol，因为这会带来命名冲突的问题。

2. 解决命名冲突

> JavaScript内置了一个symbol，那就是ES6中的Symbol.iterator，拥有Symbol.iterator函数的对象被称为可迭代对象，可以在该对象上使用for/of循环。

```js
const fibonacci = {
  [Symbol.iterator]: function*() {
    let a = 1;
    let b = 1;
    let temp;

    yield b;

    while (true) {
      temp = a;
      a = a + b;
      b = temp;
      yield b;
    }
  }
};

// Prints every Fibonacci number less than 100
for (const x of fibonacci) {
  if (x >= 100) {
    break;
  }
  console.log(x);
}
```

3. 模拟私有属性

> 由于任何两个symbol都不相等，所以可以使用symbol来模拟私有属性，通过Object.keys或者JSON.stringify()无法获取到symbol，除非通过Object.getOwnPropertySymbols()函数获取。

```js
function getObj() {
  const symbol = Symbol('test');
  const obj = {};
  obj[symbol] = 'test';
  return obj;
}

const obj = getObj();

Object.keys(obj); // []

// 除非有这个 symbol 的引用，否则无法访问该属性
obj[Symbol('test')]; // undefined

// 用 getOwnPropertySymbols() 依然可以拿到 symbol 的引用
const [symbol] = Object.getOwnPropertySymbols(obj);

obj[symbol]; // 'test'
```

### 12. Set和Map数据结构
> Set，类似于数组，但是成员的值都是唯一的，没有重复的值，Set本身是一个构造函数，用来生成Set数据结构。

> Map，类似于对象，也是键值对的结合，但是键的范围不限于字符串，各种类型的值包括对象都可以当作键，也就是说普通的对象提供了字符串到值的对应，而Map数据结构提供了值到值的对应，是一种更加完善的Hash结构实现。

> 更多详细的内容，请参见这篇文章[深入理解：ES6中的Set和Map数据结构，Map与其它数据结构的互相转换](https://segmentfault.com/a/1190000016411261)，后续我将出一篇文章，更加详细的阐述其中的区别，但这不是本文的重点。


### 13. 提供了Proxy构造函数
#### 什么是proxy？
> proxy在目标对象之前假设一层代理，外界对该对象的访问，都必须先经过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。

#### proxy的语法
> 参数解释：target表示的是要代理的目标对象，handler表示的是定义拦截行为的配置对象。

```js
let proxy = new Proxy(target, handler);
```

#### get(target, key, receiver)

```js
const proxy1 = new Proxy(
  {
    a: 1
  },
  {
    get(target, key) {
      if (Reflect.has(target, key)) {
        return Reflect.get(target, key);
      } else {
        return false;
      }

    }
  }
)
proxy1.a //1
proxy1.b //false
```

> 上面这个例子很好的说明了，proxy的基础用法，更多关于peoxy的内容，博主将在后续的文章中更新，敬请关注。

### 14. 提供了迭代器和生成器

#### 为什么需要迭代器？
> 在ES6之前，一般通过数组的下标来进行遍历，但是随着循环的嵌套就需要追踪多个变量，这给遍历带来了很多麻烦，因此迭代器的出现就是为了消除这种复杂性并减少循环中的错误。

#### 什么是迭代器？
> 迭代器iterator，在JavaScript中，迭代器是一个独享，它提供了一个next()方法，用来返回迭代序列中的下一项，next方法是一个函数，执行完后返回一个对象包括两个属性:{done: [boolean],value: [any]}。任何数据结构只要不输Iterator接口，就可以进行遍历。

#### 迭代器的工作原理
1. 创建一个指针对象，指向数据结构的起始位置。
2. 第一次调用next方法，指针自动指向数据结构的第一个成员。
3. 接下来不断调用next方法，指针会一直往后移动，知道指向最后一个元素。
4. 每次调用next方法返回的是一个包含value和done的对象,{value: 当前成员的值，done: 布尔值},value表示当前成员的值，done对应的布尔值表示当前的数据的结构是否遍历结束。

#### 手写迭代器

```js
function makeIterator(array) {
  var nextIndex = 0
  return {
    next() {
      return nextIndex < array.length ? 
        { value: array[nextIndex++], done: false } : 
        { done: true }
    }
  }
}

// iterator 是一个迭代器对象
var iterator = makeIterator([10, 20, 30])
iterator.next() // {value: 10, done: false}
iterator.next() // {value: 20, done: false}
iterator.next() // {value: 30, done: false}
iterator.next() // {done: true}
```

#### 什么是生成器？
> 生成器是ES6提供的一种异步编程解决方案，在语法上，可以把它理解为一个状态机，内部封装了多种状态。执行generator，会生成返回一个迭代器对象，返回的迭代器对象可以遍历生成器函数的每一个状态，同时ES6规定这个迭代器是生成器的函数实例，也继承了生成器函数的原型对象上的方法。

#### 生成器的特征
1. function关键字和函数名之间有一个星号。
2. 函数内部使用yield关键字定义不同的内部状态。

#### 基本用法
> 当我们实例化一个生成器函数之后，这个实例就是一个迭代器，可以同感next方法去启动生成器以及控制生成器是否往下执行。通过yield语句可以在生成器函数内部暂停代码的执行使其挂起，此时生成器函数仍然是运行并且是活跃的，其内部资源都会保留下来，只不过是处在暂停状态。在迭代器上调用next()方法，可以使代码从暂停的位置开始继续往下执行。

```js
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();

hw.next()
// { value: 'hello', done: false }

hw.next()
// { value: 'world', done: false }

hw.next()
// { value: 'ending', done: true }

hw.next()
// { value: undefined, done: true }
```


## 参考文章
> 特别感谢以下博主的辛勤付出！

* [ES 6新特性（06）](https://juejin.cn/post/6990516970772758541#heading-15)

* [JavaScript中的Generator(生成器)](https://cloud.tencent.com/developer/article/1601616)



