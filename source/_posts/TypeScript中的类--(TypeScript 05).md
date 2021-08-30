---
title: TypeScript中的类--(TypeScript 05)
date: 2021-8-14
author: Justin
top: false
cover: false
categories: TypeScript
tags:
  - TypeScript
---
## 类的注解方式
>1. 需要对实例的属性进行注解。
>2. 类的方法中有参数的需要进行注解。

```ts
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
```

## 继承中的super
### 1. 构造函数内部的super指的是父类的构造函数
![image.png](https://img-blog.csdnimg.cn/img_convert/fdaa62ffd8d65a6b0b53f4ad2844a33c.png)

### 2. 构造函数外部的super指的是父类本身
![image.png](https://img-blog.csdnimg.cn/img_convert/4409018cf52ad939fc96f02bcbd5093b.png)

```ts
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");

sam.move();
```

## 类成员的修饰符
### 1. public：公共的成员属性
* 自身可以调用
* 实例可以调用
* 子类可以调用

```ts
class Animal {
    public name: string;
    public constructor(theName: string) { this.name = theName; }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
```

### 2. private : 只有自身可以调用
```ts
class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

new Animal("Cat").name; // 错误: 'name' 是私有的.
```

### 3. protected: 自身可以调用，子类也可以调用，但是实例不可以调用
```ts
class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name)
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // 错误
```

## readonly修饰符
>readobly关键字将属性设置为只读，这个属性必须在声明或者构造函数中被初始化。readonly不能对方法进行修饰。
```ts
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
```

## 参数属性
>参数属性本质上就是一种简写的首发，就是将声明和赋值合并在一处。下面两种方式其实是等价的。
```ts
// 方式1
class Octopus {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {
    }
}

// 方式2
class test {
    readonly numerOfLegs: number = 8;
    readonly name: string;
    constructor(Thename: string) {
        this.name = Thename;
    }
}
```

