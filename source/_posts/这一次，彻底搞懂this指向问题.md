---
title: 这一次，彻底搞懂this指向问题
date: 2022-02-25
author: Justin
top: false
cover: false
categories: 面试题
tags:
  - 面试题
---

## this到底是什么？
> this的本质是指针，this并不是总是指向自身，关于this到底指向哪里，一直是面试中的常考问题，最重要的是要搞懂this的绑定规则，那么接下来就让我们一起来学习this的绑定规则吧~

## this的绑定规则
### 规则1：默认绑定
> 默认绑定指的是function中的this指向，在严格模式下指向undefined，非严格模式下指向window（浏览器环境中），如果是node环境下不是挂载在全局对象上。

```js
  var name = 666;
  function test() {
    var name = 777;
    function test2() {
      console.log("看全局：",this.name);  // 看全局：666
      console.log(name);   // 777
    }
    test2();
  }
  test()
```

### 规则2：隐式绑定
> 隐式绑定的特点是XXX.func()，能够影响到this的是最后一层的调用位置。

```js
function sayHi(){
    console.log('Hello,', this.name);  // Hello, 张三
}
var person2 = {
    name: '张三',
    sayHi: sayHi
}
var person1 = {
    name: '李四',
    friend: person2
}
person1.friend.sayHi();  
```

### 规则3：显示绑定（硬绑定）
> 显示绑定指的是通过call、apply、bind的方式来指定this指向，其中call、apply、bind的第一个参数就是要指向的对象，区别在于call和apply都会执行对应的函数，但是bind不会。

```js
function sayHi(){
  console.log('Hello,', this.name);  // Hello, 张三
}
var person = {
  name: '张三',
  sayHi: sayHi
}
var name = '李四';
var Hi = person.sayHi;
Hi.call(person); 
```

> 需要注意的是如果给call、apply、bind的第一个参数传入的是null,此时的this指向的是window或者undefiend。

```js
function sayHi(){
    console.log('Hello,', this.name);  // Hello, Wiliam
}
var person = {
    name: 'YvetteLau',
    sayHi: sayHi
}
var name = 'Wiliam';
var Hi = function(fn) {
    fn.call(this);
}
Hi.call(null,person.sayHi);
```

> 丢失绑定的情况，主要是调用的时候是如何调用的。下面的这个例子就是因为fn()是直接调用的，相当于是默认绑定。

```js
function sayHi(){
    console.log('Hello,', this.name); // Hello, Wiliam
}
var person = {
    name: 'YvetteLau',
    sayHi: sayHi
}
var name = 'Wiliam';
var Hi = function(fn) {
    fn();
}
Hi.call(person, person.sayHi); 
```

### 规则4：new绑定
> new绑定指的是通过new操作符会将this指向新创建的对象。

```js
function sayHi(name){
  this.name = name;

}
var Hi = new sayHi('zhangsan');
console.log('Hello,', Hi.name);  // Hello, zhangsan
```

## 绑定规则之间的优先级关系
> 优先级顺序按照下面的序号进行排列：

1. call(null)
2. new绑定
3. 显示绑定
4. 隐式绑定
5. 默认绑定

## 箭头函数中this的指向
> 箭头函数中的this指向主要看两种情况，箭头函数定义的上下文有没有function，有则和这个function的this指向相同，没有则是window。

```js
var obj = {
    hi: function(){
        console.log(this);
        return ()=>{
            console.log(this);
        }
    },
    sayHi: function(){
        return function() {
            console.log(this);
            return ()=>{
                console.log(this);
            }
        }
    },
    say: ()=>{
        console.log(this);
    }
}
let hi = obj.hi();  //输出obj对象
hi();               //输出obj对象
let sayHi = obj.sayHi();
let fun1 = sayHi(); //输出window
fun1();             //输出window
obj.say();          //输出window
```

> 下面给出详细的解释：

```
let hi = obj.hi();  //输出obj对象
```

> 这个语句首先执行了obj中的hi方法，此时函数中的this指的是obj，并返回了一个箭头函数给hi，所以输出的是obj对象。

```js
hi();               //输出obj对象
```

> 上面我们说过了hi是一个箭头函数，箭头函数的this看的是定义的位置，定义的位置被一个function包裹，因此和这个function的this相同，因此也是obj对象。

```js
let sayHi = obj.sayHi();
let fun1 = sayHi(); //输出window
```

> obj.sayHi()直接返回了一个函数给sayHi,由于sayhi没有按照隐式绑定的XXX.func的形式进行调用，所以此时变成了默认绑定，那么默认绑定的this指的是window对象，执行完之后返回给fun1一个箭头函数。

```js
fun1();             //输出window
```

> 由于fun1是一个箭头函数，其定义的位置被一个function包裹着，因此和这个function的this指向相同，因此是window。

```js
obj.say();          //输出window
```

> obj.say()返回的是一个箭头函数，由于这个箭头函数没有被function包裹，此时指向的是window。

## RQ：箭头函数的this能够改变吗？
> 箭头函数的this不能被改变，即使是显式绑定也不行。
