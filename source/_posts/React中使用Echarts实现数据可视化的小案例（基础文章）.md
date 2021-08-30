---
title: React中使用Echarts实现数据可视化的小案例（基础文章）
date: 2021-8-28
author: Justin
top: false
cover: false
categories: React
tags:
  - React
---
## 1. 安装echarts-for-react插件(两个都要装)
```
npm install echarts-for-react
npm install echarts
```

## 2. 导入ReactEcharts库
```js
import ReactECharts from 'echarts-for-react';
```

## 3. 渲染ReactEcharts组件，并通过option导入数据
```js
<ReactECharts option={this.getOption(sales,stores)} />
```

## 4. 设置数据源option
```js
getOption = (sales,stores) => {
    return {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data: ['销量', '库存']
        },
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [1,2,3,4],
        }, {
            name: '库存',
            type: 'bar',
            data: [2,5,4,6]
        }]

    }
}
```

## 如何将柱状图改为折线图
>只需将series的对象中的type更改为line即可。
```js
getOption = (sales,stores) => {
    return {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data: ['销量', '库存']
        },
        xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'line',
            data: sales,
        }, {
            name: '库存',
            type: 'line',
            data: stores
        }]

    }
}
```
>柱状图和折线图的实现效果，如下图所示

![柱状图](https://img-blog.csdnimg.cn/img_convert/4dba1135680613dbcdef254fcbf1f3f8.png)
![折线图](https://img-blog.csdnimg.cn/img_convert/61840f54f0ab7c31d84abd1b3386c816.png)

## 如何修改柱状图的颜色
>通过在option中设置color属性，既可以进行全局的样式柱状图颜色修改，也可以局部的修改某一个柱状图的颜色。更多的属性设置需要去查官方文档或者根据官方的实例进行修改。

**示例代码**
```js
option = {
    // 全局调色盘。
    color: ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],

    series: [{
        type: 'bar',
        // 此系列自己的调色盘。
        color: ['#dd6b66','#759aa0','#e69d87','#8dc1a9','#ea7e53','#eedd78','#73a373','#73b9bc','#7289ab', '#91ca8c','#f49f42'],
        ...
    }, {
        type: 'pie',
        // 此系列自己的调色盘。
        color: ['#37A2DA', '#32C5E9', '#67E0E3', '#9FE6B8', '#FFDB5C','#ff9f7f', '#fb7293', '#E062AE', '#E690D1', '#e7bcf3', '#9d96f5', '#8378EA', '#96BFFF'],
        ...
    }]
}
```
## Echarts的按需引入
```js
import React from 'react';
import {Card} from 'antd';
import echartTheme from './../themeLight'
//不是按需加载的话文件太大
//import echarts from 'echarts'
//下面是按需加载
import echarts from 'echarts/lib/echarts'
//导入折线图
import 'echarts/lib/chart/line';  //折线图是line,饼图改为pie,柱形图改为bar
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import ReactEcharts from 'echarts-for-react';
export default class Line extends React.Component{
  componentWillMount(){
    //主题的设置要在willmounted中设置
    echarts.registerTheme('Imooc',echartTheme);
  }
  getOption =()=> {
    let option = {
      title:{
        text:'用户骑行订单',
        x:'center'
      },
      tooltip:{
        trigger:'axis',
      },
      xAxis:{
        data:['周一','周二','周三','周四','周五','周六','周日']
      },
      yAxis:{
        type:'value'
      },
      series:[
        {
          name:'OFO订单量',
          type:'line',   //这块要定义type类型，柱形图是bar,饼图是pie
          data:[1000,2000,1500,3000,2000,1200,800]
        }
      ]
    }
   return option
  }

  render(){
    return(
      <div>
        <Card title="折线图表之一">
            <ReactEcharts option={this.getOption()} theme="Imooc"  style={{height:'400px'}}/>
        </Card>

      </div>
    )
  }
}
```
## 参考资料
* [echarts-for-react](https://www.jianshu.com/p/f6c1c4618c22)
* [ECharts for React官网](https://git.hust.cc/echarts-for-react/)
* [【React】react项目引入echarts插件](https://www.jianshu.com/p/f6c1c4618c22)


