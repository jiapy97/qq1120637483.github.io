---
title: 一篇文章学会Flex布局的基本使用
date: 2021-8-1
author: Justin
top: false
cover: false
categories: Flex
tags:
  - Flex
---
## 传统布局与Flex布局的区别
* 传统布局兼容性好，flex布局兼容性较差。
* 传统布局不能在移动端很好的布局，flex布局则适合在移动端布局。
* 传统布局布局较为繁琐，Flex布局较为简单。

## flxe的布局原理
* flex布局意为弹性布局，用来为盒状模型提供最大的灵活性，任何一个容器都可以指定为flxe布局。
* 当为父盒子设置flex布局之后，子元素的float、clear和vertical-align属性都将失效。
* 采用Flex布局的元素，称为Flex容器，简称容器，它的所有子元素自动成为容器成员，并称为Flex项目。

>**总结Flex布局原理：就是用过给父盒子添加flex属性，来控制子盒子的位置和排列方式。**

## Flex布局常见的父项属性
### 分清主轴和侧轴
![image.png](https://img-blog.csdnimg.cn/img_convert/c75b28991149bc19840e640ee86b5601.png)

### flex-direction设置主轴方向
![image.png](https://img-blog.csdnimg.cn/img_convert/5b1e9011ad7026532eb59229e8a6e452.png)

* row的默认值是从左到右排列。（相当于省略了flex-direction: row;）我们的元素是跟着主轴走的。

[codeSandBox在线演示](https://codesandbox.io/s/02flex-directionshezhizhuzhoufangxiang-u9nsp?file=/index.html)

### justify-content设置主轴上子元素的排列方式
![image.png](https://img-blog.csdnimg.cn/img_convert/669b98774d8dc629ee649e5771078dd4.png)

* 这个属性的默认值是flex-start，假如不写就默认这个。
```css
div {   
    display: flex;
    width: 800px;
    height: 300px;
    background-color: pink;
    /* justify-content: space-around; */
    justify-content: space-between;
    /* justify-content: space-around; */

}
```
[codeSandBox在线演示](https://codesandbox.io/s/03justify-contentshezhizhuzhoushangziyuansudepailiefangshi-y0oi6?file=/index.html)

### flex-wrap设置子元素是否换行
>在flex布局中默认是不换行的。

![image.png](https://img-blog.csdnimg.cn/img_convert/0cae09563a0451985110ea741bddecb8.png)

```css
div {   
    display: flex;
    width: 600px;
    height: 400px;
    background-color: pink;
    flex-wrap: wrap;
}
```

[codeSandBox在线演示](https://codesandbox.io/s/04flex-wrapshezhiziyuansushifouhuanxing-x3vwl)

### align-items设置侧轴上的子元素排列方式（单行）
![image.png](https://img-blog.csdnimg.cn/img_convert/d2f0896a2d1c643d9dacf621cd423838.png)

```css
div {   
    display: flex;
    width: 600px;
    height: 400px;
    background-color: pink;
    justify-content: center;
    align-items: center;
}
```

[codeSandBox在线演示](https://codesandbox.io/s/05align-itemsshezhizizhou-004vz?file=/index.html)

### align-content：设置侧轴上子元素的排列方式（适用于多行，这个属性在单行下是没有效果的）
![image.png](https://img-blog.csdnimg.cn/img_convert/ab7838ced0b461577df276675ddf4187.png)

```css
div {   
    display: flex;
    width: 800px;
    height: 400px;
    background-color: pink;
    flex-wrap: wrap;
    /* align-content: flex-start; */
    /* align-content: flex-end; */
    align-content: space-between;
}
```

[codeSandBox在线演示](https://codesandbox.io/s/06align-contentshezhizaicezhoufangxiangshangziyuansudepailiefangshijinguayongyuduoxingqingkuang-qk0b9?file=/index.html)

### align-content和align-items的区别
![image.png](https://img-blog.csdnimg.cn/img_convert/764291bc98caa0cfac0aafa770aeb089.png)

### flex-flow: flex-direction和flex-wrap属性的复合属性
* 下面的两段代码是等价的
```css
flex-direction: column;
flex-wrap: wrap;
```
```css
flex-flow: column wrap;
```

[codeSandBox在线演示](https://codesandbox.io/s/07flex-flowshiflex-directionheflex-wrapdefuheshuxingyigedingliadexiaoguo-seste)

## Flex布局中常见的子项属性
### flex属性：将剩余空间分配给子项目，表示子项目占多少份数
![image.png](https://img-blog.csdnimg.cn/img_convert/5ac4d254a1d4a4ad1b94b2741b52eac3.png)
```css
section {
    display: flex;
    width: 60%;
    height: 150px;
    background-color: pink;
    margin: 0 auto;
}
section div:nth-child(1) {
    width: 100px;
    height: 150px;
    background-color: red;
}
section div:nth-child(2) {
    flex: 1;
    background-color: aqua;
}
section div:nth-child(3) {
    width: 100px;
    height: 150px;
    background-color: blue;
}
```
* [codeSandBox在线演示（圣杯布局）](https://codesandbox.io/s/08zixiangshuxingzhiflexshixianshengbeibuju-3cxeu?file=/index.html)

### align-self：控制子项自己在侧轴上的排列方式（注意和align-items的区别）
![image.png](https://img-blog.csdnimg.cn/img_convert/31712246f2b71dc063cc9acb443172b4.png)

```css
div span:nth-child(3) {
    align-self: flex-end;
}
```
[codeSandBox在线演示](https://codesandbox.io/s/09align-selfdingyicezhoushanggebiezixiangdebuju-9g1gf?file=/index.html)

### order属性：定义项目的排列顺序
![image.png](https://img-blog.csdnimg.cn/img_convert/a7f1a1b51d4b468cd651e9979f9a6e83.png)

```css
// 这个属性的初始值默认是0，如果你想交换到默认顺序的左边直接设置一个比0小的值即可。
div span:nth-child(2) {
    order: -1;
}
```
[codeSandBox在线演示](https://codesandbox.io/s/10ordershuxingdingyizixiangdexianhoushunxu-j03iu?file=/index.html)



        
