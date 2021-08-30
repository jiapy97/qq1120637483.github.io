---
title: TypeScript的类型注解--(TypeScript 02)
date: 2021-7-21
author: Justin
top: false
cover: false
categories: TypeScript
tags:
  - TypeScript
---
## TS中的类型注解
* 基础类型：boolean string number null undefined symbol any never
* 对象：interface
* 数组：number[] string[] boolean[] 
* 泛型的写法：Array\<number>

## TS带来的新的语法特性
1. as 断言
2. class(OOP面向对象的三大特性)：封装、继承、多态
还有其他的，后续文章会进行详细的介绍。

## 创建tsconfig.json
```
tsc --init
```

## 修改tsc的输出路径
1. 在tsconfig.json中对下面两行进行修改。
![image.png](https://img-blog.csdnimg.cn/img_convert/e83fb35f98746323709b2b422252c495.png)

2. 直接运行tsc指令，系统将直接将编译好的js文件输出到dist目录下。

## 原始数据的注解
1. 布尔值的注解
```js
let isDone: boolean = false;
```
2. 数字类型的注解
```ts
let decLiteral: number = 6;
```
3. 字符串类型的注解
```ts
let name2: string = "bob";
name2 = "smith";
```
4. any类型的注解
>any类型可以表示任意类型，通过此类型的注解，不会有相应的代码提示，但是可以赋值为不同类型的数据。
```ts
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```
>通过Object类型的注解可以赋值为任意类型，但是却只能调用真正的Object上的属性，也就是说只有你是真的对象才可以调用上面的方法。
```js
let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
```
>未给初始值的变量，初始值是any.
![image.png](https://img-blog.csdnimg.cn/img_convert/dc0dee707eb7c5c52ca47d35f4034fe2.png)

5. void类型的注解
>void类型的变量只能赋值为undefined和null,当一个函数没有返回值的时候，其注解类型为void.
```js
function warnUser(): void {
    console.log("This is my warning message");
}
```

6. undefined和null类型的注解
```js
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
```
>在配置项中将"strictNullChecks"置为false的时候，undefined和null可以成为任何类型的子类型，所谓的子类型，就是说类型为number或其他的类型的值可以使undefined和null.
```js
let a: number = undefined;
let b: number = null;
```

**注意：在类型注解的时候，可以使用或运算符，同时注解多个类型**
```ts
let a: string | boolean = true;
```

7. never类型的注解
>返回never的函数必须存在无法达到的终点，never是任何类型的子类型，其他任何类型都不能赋值给never.
```ts
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
```

8. Object类型的注解
>使用Object类型的注解，可以很好的表示非原始类型，也就是除`number`，`string`，`boolean`，`symbol`，`null`或`undefined`之外的类型。使用Object类型进行注解，可以很好的表示很多API。
```js
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
```
## 引用类型的注解
1. 数组类型的注解
```ts
// 方式1
let list: number[] = [1,2,3];

// 方式2
let list2: Array<number> = [4,5,6]
// 使用接口注解数组
interface list {
    [index: number] : number | string
}
let temp: list = [1,2,3,'60']
// 注解类数组
interface Args {
    [index: number]: any;
    length: number;
    callee: Function;
}

function test() {
    let args: IArguments = arguments;
}

test()
```
2. 函数的注解
* 函数声明的注解方式
```ts
// 函数声明的注解方式：参数和返回值
function test(a: number,b: number): number {
    return a + b;
}

test(1,2)
```
* 函数表达式的注解方式
```ts
// 函数表达式的注解方式
let test2: (a: number, b: number) => number = function (a: number, b: number): number {
    return a + b;
}
// 可以简写为下面的形式，也是较为常见的形式
let test: (a: number,b: number) => number = function (a,b) {
    return a + b;
}
```
* 可选参数和默认参数
```ts
// 可选参数
function test(a: number,b?: number): number {
    return a; 
}
// 默认参数
function test2(a: number,b = '666'): string {
    return a + b;
}
```
* 剩余参数
```ts
// 剩余参数
function test(a: number,b: number,...restOfName: string[]): number {
    return a + b;
}
test(1,2,'3')
```
* 参数的解构赋值
```ts
// 参数的解构赋值
function test({first,second}: {first: number,second: number}) {
    return first + second;
}
test({first: 1,second: 2})
```
### 函数注解中的this指向问题
```ts

interface Card {
    suits: string[];
    cards: number[];
}

interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}

let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);
```

## 重载
>重载的意义在于告诉我们传入不同的参数，得到不同的结果。

```ts


## 类型断言
>类型断言类似于其他语言中的类型转换。

**尖括号语法**
```ts
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
```

**as语法**
```ts
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```

**推荐使用as语法，因为如果你使用JSX的时候，只有as语法是被允许的。**

## 欢迎大家关注我的专栏，一起学习TypeScript!
