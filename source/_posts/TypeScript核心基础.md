---
title: TypeScript核心基础
date: 2021-9-23
author: Justin
top: false
cover: false
categories: TypeScript
tags:
  - TypeScript
---

## 配置VScode自动生成TS文件
* 生成ts配置文件
```js
tsc --init
```

* 激活输出路径
![image.png](https://img-blog.csdnimg.cn/img_convert/632424ce8189318838bd1cb1ebd6b645.png)

* 配置保存即输出到指定路径

1. 点击终端下的运行任务
![image.png](https://img-blog.csdnimg.cn/img_convert/55bca9ada4d0197bdc290b8d129676bd.png)
2. 点击typescript
![image.png](https://img-blog.csdnimg.cn/img_convert/1772984e91806ed69a505940da85dcdd.png)
3. 点击tsc监视

## TS中的基本数据类型
### boolean类型
```js
let flag: boolean = true;
flag = false;
```

### number类型
```js
let num: number = 666;
num = 777;
```

### string类型
```js
let str: string = '666';
str = '777';
```

### array类型
```js
// 方式1
let arr: number[] = [1,2,3];
// 方式2
let arr2: Array<number> = [6,7,8];
```

### 元组类型(tuple)
```js
// 元组类型
let arr: [number,string,boolean] = [1,'60',true];
```

### 枚举类型
```js
// 枚举类型
enum Flag{color1 = 'blue',color2 = 'pink'};

let flag: Flag = Flag.color2;

console.log(flag);
```

### 任意类型any
```js
// 任意类型
let num: any = 666;
num = 'test';
num = true;
```

### undefined类型
```js
// undefined类型
let num: undefined;
console.log(num);
```

### null类型
```js
let num: null;
num = null;
```

### void类型
* 表示方法没有任何返回类型
```js
function run(): void{
    console.log('run');
}
```

### never类型
>表示无法到达终点的函数，例如死循环或者抛出异常。
```js
function test(): never {
    throw new Error('错误');
}
```

## TS的函数类型
### 基本形式
```js
function test(name: string,age: number): string{
    return `${name} ---- ${age}`
}
test('nihao',666);
```

### 可选参数
>在JS中，函数定义的参数可传也可不传，但是在TS中是必须传递的，如果不传需要配置可选参数。
```js
function test(name: string,age?: number): string{
    return `${name} ---- ${age}`
}
test('nihao');
```

### 默认参数
>下面的例子中的number是默认参数。
```js
function test(name: string,age: number=20): string{
    return `${name} ---- ${age}`
}
test('nihao');
```

### 剩余参数
```js
function sum(...arg: number[]): number{
    return arg.reduce((pre,cur) => pre + cur,0)
}
sum(1,2,3,4)
```

### 函数重载
>在JS中一旦出现同名方法在同一作用域的情况下，下面的会覆盖上面的，但是在TS中则存在重载的情况。
* 注意：下面的any并不是说可以传递任意类型。
```js
function test(name: string): string;

function test(age: number): string;
// 这里的any其实并不是真正的any，必须传递上面的两种类型之一，反之报错
function test(str: any): string{
    if (typeof str === 'string') {
        return '姓名' + str;
    } else {
        return '年龄' + str;
    }
}
test('里斯');
```

## TS中的类
### 类中属性和方法的定义
```ts
class Person{
    name: string;
    constructor(n: string) {
        this.name = n;
    }   
    run() :void {
        console.log(this.name);
    }
}

const p = new Person('张三');
p.run();
```

### TS中实现继承
>TS中实现继承主要用到了extends和super两个关键字。
```js
class Person{
    name: string;

    constructor(name: string) {
        this.name = name;
    }
    run(): string {
        return `${this.name}在学习`
    }
}

class child extends Person{
    constructor(name: string) {
        super(name);
    }
}

const c = new child('小明');
console.log(c.run());
```

### 类中的修饰符
* public: 自身可以调用，子类可以调用，实例可以调用
```js
class Person{
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
    run(): string {
        return `${this.name}在学习`
    }
}

const p = new Person('张三');
console.log(p.name);
```
* protected: 自身可以调用，子类可以调用
```js
class Person{
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
    run(): string {
        return `${this.name}在学习`
    }
}

class Child extends Person{
    
    constructor(name: string) {
        super(name)
    }
    run2(): void{
        console.log(this.name);
    }
}

const c = new Child('666');
console.log(c.run());
```
* private：只有自身能够访问
```js
class Person{
    private name: string;

    constructor(name: string) {
        this.name = name;
    }
    run(): string {
        return `${this.name}在学习`
    }
}

const p = new Person('张三');
p.name   // 报错
```
>注意：如果不写类成员修饰符默认是public.

### 静态属性和静态方法
* 通过static关键词定义静态属性
```ts
class Person{
    name: string;
    constructor(name: string){
        this.name = name;
    }

    run() {
        console.log(this.name);
    }
    static work() {
        console.log('这是类的静态方法');
    }
}

const p = new Person('张三');

// p.work()  // 报错
Person.work();
```
* 静态方法只能调用静态属性不能调用实例属性
```ts
class Person{
    name: string;
    static age: number = 18;
    constructor(name: string){
        this.name = name;
    }

    run() {
        console.log(this.name);
    }
    static work() {
        console.log('这是类的静态方法');
        console.log('年龄是：',Person.age);        
    }
}

const p = new Person('张三');

Person.age;
Person.work();
```

### 多态
>多态指的是父类定义一个方法不去实现，让子类去实现，每一个子类有不同的表现。

```ts
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat(): void {
        console.log('这是父类的eat');
    }
}

class Cat extends Animal {
    name: string;
    constructor(name: string) {
        super(name)
        this.name = name;
    }
    eat(): void {
        console.log('这是子类的多态：',this.name);
        
    }
}
const c = new Cat('小猫');
c.eat();
```

### 抽象类
>用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体的实现且必须在派生类中实现。抽象方法只能放在抽象类中。

1. 抽象类无法进行具体的实例化
```ts
abstract class Animal{
    abstract eat(): void;
}
const a = new Animal()   // 直接报错
```

2. 抽象类的子类必须实现抽象类中的抽象方法
```ts
abstract class Animal {
    abstract eat(): void;
}
class cat extends Animal {
    eat(): void {
        console.log(666);
    }
}
const c = new cat();
c.eat()
```

## TS中的接口
>接口的存在也是为了定义标准。

### 属性接口
```ts
interface fullname {
    firstName: string;
    secondName: string;
}
function getName (name: fullname) {
    console.log(`${name.firstName} + '---' + ${name.secondName}`);
}
const obj = {
    firstName: '小',
    secondName: '明'
}
getName(obj);
```

### 接口的可选属性
```ts
interface fullname {
    firstName: string;
    secondName?: string;
}
function getName (name: fullname) {
    console.log(`${name.firstName} + '---' + ${name.secondName}`);
}
const obj = {
    firstName: '小',
    // secondName: '明'
}
getName(obj);
```

### 函数类型的接口
```ts
interface encrypht {
    (key: string,value: string): string;
}
const md5: encrypht = function md5(key: string, value: string): string {
    return key + value;
}
console.log(md5('1','2'));
```

### 可索引接口
>这个接口主要是对数组和对象的约束。

* 对数组的约束
```ts
interface useArr {
    [index: number]: string;
}

const arr: useArr = ['1','2']
```
* 对对象的约束
```ts
interface useObj {
    [index: string]: string;
}
const obj: useObj = {
    name: '张三',
    age: '666'
}
```

### 类类型接口
>类类型接口存在的意义主要是对类进行约束。

```ts
interface Animal {
    name: string;
    eat(str: string): void;
}
class Cat implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat(str: string): void {
        console.log(this.name + str);
    }
}
const cat = new Cat('小猫咪');
console.log(cat.eat('玉米'));
```

### 接口拓展
>接口拓展指的是接口可以继承另一个接口。

```ts
interface Animal {
    eat(): void;
}
interface Person extends Animal {
    work(): void;
}
class people implements Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat() {
        console.log('eat');
    }
    work() {
        console.log('work');
    }
}
const p = new people('小张');
p.eat()
p.work()
```

### 继承+实现
```ts
interface Animal {
    eat(): void;
}
interface Person extends Animal {
    work(): void;
}
class Programer {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    coding(): void {
        console.log(this.name + '在写代码');
    }
}
class people extends Programer implements Person {
    name: string;
    constructor(name: string) {
        super(name);
        this.name = name;
    }
    eat() {
        console.log('eat');
    }
    work() {
        console.log('work');
    }
}
const p = new people('小张');
p.coding();
```

## TS中的泛型
>泛型可以支持不特定的类型。

### 泛型定义
```ts
function getData<T>(value: T): T {
    return value;
}

console.log(getData<string>('123'));
console.log(getData<number>(123));
```

### 类的泛型
```ts
class MinClass<T> {
    list: T[] = [];

    add(num: T) {
        this.list.push(num);
    }

    min(): T {
        let minNum = this.list[0];
        for (let v of this.list) {
            if (v < minNum) {
                minNum = v;
            }
        }
        return minNum;
    }
}
const m = new MinClass<number>();
```

### 泛型接口
* 写法1
```ts
interface configFn {
    <T>(value: T): T;
}

const fn: configFn = function<T>(value: T): T {

    return value;
}

console.log(fn<string>('666'));
```
* 写法2
```ts
interface configFn<T> {
    (value: T): T;
}

function getData<T>(value: T): T {
    return value;
}

const myGetData: configFn<string> = getData;

myGetData('20')
```

### 泛型类实现泛型接口（用于逻辑复用）
>泛型类快速实现泛型接口的方法

1. 定义好初始结构
```ts
class MongoDb<T> implements DBI<T> {
    
}
```
2. 光标悬浮然后点击快速修复
![image.png](https://img-blog.csdnimg.cn/img_convert/0efd3feec3b2d71e6cd0158406fd6fbf.png)

3. 点击实现接口
![image.png](https://img-blog.csdnimg.cn/img_convert/64fdad63cff639b1f9b18fa95c8a8e08.png)

* 经典实例
```ts
interface DBI<T> {
    add(info: T): boolean;
    update(info: T): boolean;
    delete(id: number): boolean;
    get(id: number): any[];
}

/**
 * @description: 要实现泛型接口的类也必须是泛型类
 * @param {*}
 * @return {*}
 */
class MysqlDb<T> implements DBI<T> {
    add(info: T): boolean {
        throw new Error("Method not implemented.");
    }
    update(info: T): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        throw new Error("Method not implemented.");
    }
}

class MongoDb<T> implements DBI<T> {
    add(info: T): boolean {
        console.log(info);
        return true;
        
    }
    update(info: T): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        throw new Error("Method not implemented.");
    }
    
}

class User {
    username: string | undefined;
    password: string | undefined;   
}

const u = new User();
u.username = '张三';
u.password = '123';

const m = new MongoDb();
m.add(u);
```


## 命名空间
* 命名空间和模块的区别
>命名空间：内部模块，主要用于组织代码，避免命名冲突。
>模块：TS的外部模块的简称，侧重代码的复用，一个模块里可能会有多个命名空间。

```ts
namespace A {
    export class Animal {
        name: string | undefined;
        age: number | undefined;
    }
}
namespace B {
    export class Animal {
        name: string | undefined;
        age: number | undefined;
    }
}
const cat = new A.Animal()
const dog = new B.Animal()
```

## TS装饰器
### 装饰器有什么用？
>装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为。通俗的讲装饰器就是一个方法，可以注入到类、方法、属性参数上来拓展类、属性、方法，参数的功能。

### 类装饰器
>注意：类装饰器功能的实现需要在tsconfig.json文件中配置如下代码。

```ts
"experimentalDecorators": true
```

1. 普通装饰器（无法传参）

```ts
function logClass(params: any) {
    // 这里的params指的就是被装饰器下面的函数
    console.log(params);
    // 下面就是我们动态拓展的属性
    params.prototype.apiUrl = 'http://www.baidu.com'
}

// 
@logClass
class HttpClient {
    constructor() {

    }
    getData() {

    }
}

const h: any = new HttpClient();
console.log(h.apiUrl);
```

2. 装饰器工厂（可以传参）

```ts
// 装饰器工厂
function logClass(params: any) {
    // params：是装饰器传过来的参数
    // 下面的target才是指的类本身
    return function(target: any) {
        console.log('这是target：',target);
        console.log('这是params：',params);
        target.prototype.apiUrl = params;
    }
}

// 
@logClass('666')
class HttpClient {
    constructor() {

    }
    getData() {

    }
}
const h: any = new HttpClient();
console.log(h.apiUrl);  //666
```

### 类装饰器重载
```ts
function logClass(target: any) {
    return class extends target {
        apiUrl: string = '这个是修改后的url';
        getData() {
            this.apiUrl = '这个是修改后的url---'
            console.log(this.apiUrl);
            
        }
    }
}
@logClass
class HttpClient {
    apiUrl: string | undefined;
    constructor() {
        this.apiUrl = '这是构造函数中的URL'
    }
    getData() {
        console.log(this.apiUrl);
    }
}
const h = new HttpClient();
h.getData();
```

### 属性装饰器
>属性装饰器表达式会在运行时当做函数被调用，传入下列两个参数
1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
2. 成员的名字。

```ts
// 属性装饰器
function logProperty(params: any) {
    return function(target: any,attr: any) {
        // 这里的target指的就是类的原型对象
        // 这里的attr指的是类的属性
        console.log(target);
        console.log(attr);
        target[attr] = params;
    }
}
class HttpClient {
    @logProperty('http://www.baidu.com')
    url: string | undefined;
    constructor() {

    }
    getData() {
        console.log(this.url);
    }
}
const h = new HttpClient();
h.getData()
```

### 方法装饰器
>在方法装饰器中可以修改方法装饰器对应的方法或属性。

```ts
/**
 * @description: 方法装饰器
 * @param {any} params
 * @return {*}
 */
function logFun(params: any) {
    /**
     * @description: 
     * @param {any} target：原型对象
     * @param {any} methodName：方法名
     * @param {any} desc：方法的属性描述
     * @return {*}
     */
    return function(target: any,methodName: any,desc: any) {
        console.log(target);
        console.log(methodName);
        console.log(desc.value);

        const oldMethod = desc.value;
        desc.value = function(...args: any[]) {
            args = args.map(item => {
                return String(item)
            })
            oldMethod.apply(this,args)
        }
    }
}
class HttpClient {
    url: string | undefined;
    constructor() {
    }
    @logFun('你好')
    getData(...args: any[]) {
        console.log(args);  // ['123','666']
        console.log('这是getData中的方法');
    }
}
const h = new HttpClient();
h.getData(123,'666')
```

### 方法参数装饰器
```ts
/**
 * @description: 方法参数装饰器
 * @param {any} params
 * @return {*}
 */
function logParams(params: any) {
    /**
     * @description: 
     * @param {any} target：类的原型对象
     * @param {any} methodName：参数对应的方法名
     * @param {any} paramsIndex：参数对应的索引
     * @return {*}
     */
    return function(target: any,methodName: any,paramsIndex: any) {
        console.log(params);
        console.log(target);
        console.log(methodName);
        console.log(paramsIndex);
        // 增加一个属性
        target.apiUrl = params;
    }
}
class HttpClient {
    url: string | undefined;
    constructor() {
    }
    getData(@logParams('你好') uuid: any) {
        console.log(uuid);
    }
}
const h: any = new HttpClient();
h.getData(123);
console.log(h.apiUrl);   //你好
```

### 装饰器的执行顺序
>首先看下面的代码

```ts
function logClass1(params: any) {
    return function(target: any) {
        console.log('类装饰器1');
    }
}
function logClass2(params: any) {
    return function(target: any) {
        console.log('类装饰器2');
    }
}
function logAttribute() {
    return function(target: any,attr: any) {
        console.log('属性装饰器');
    }
}
function logMethod() {
    return function(target: any,methodName: any,desc: any) {
        console.log('方法装饰器');
    }
}
function logParams1() {
    return function (target: any,methodName: any,paramsIndex: any) {
        console.log('方法参数装饰器1'); 
    }
}
function logParams2() {
    return function (target: any,methodName: any,paramsIndex: any) {
        console.log('方法参数装饰器2'); 
    }
}

@logClass1('111')
@logClass2('2222')
class HttpClient {
    @logAttribute()
    url: string | undefined;
    constructor() {
    }
    @logMethod()
    getData() {
        return true
    }
    setDate(@logParams1() attr1: any,@logParams2() attr2: any) {
        return true;
    }
}
```

![image.png](https://img-blog.csdnimg.cn/img_convert/ed7a97c9040340387ad196ded9624c6c.png)

>注意：在class内部执行顺序是按照代码顺序来的。









