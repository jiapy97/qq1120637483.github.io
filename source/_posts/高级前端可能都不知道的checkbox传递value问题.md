---
title: 高级前端可能都不知道的checkbox传递value问题
date: 2021-11-26
author: Justin
top: false
cover: false
categories: HTML
tags:
  - HTML
---

## 问题描述
>在博主使用Egg.js写一个管理系统的时候，在静态页面中有一个表单，表单中含有两个checkbox，但是博主发现，在通过这个表单进行post数据的时候，如果checkbox没有选中是不会传递value的，这令我很震惊，当然也让我付出了将近两个小时的努力，因此特地分享出来，为后续遇到这个问题的兄弟填下坑。

### 未修改前代码

```html
<input type="checkbox" value="1" name="isBest"  <%if(product.isBest == 1){%>checked<%}%>  id="is_best"> <label for="is_best">精品</label>  &nbsp;&nbsp;
<input type="checkbox" value="1" name="isHot"  <%if(product.isHot == 1){%>checked<%}%>  id="is_hot"> <label for="is_hot">热销</label> 
```

## 解决办法
>通过设置两个隐藏的input表单来解决这个问题，因为如果这两个checkbox的value是0的话，隐藏的表单会代替这两个表达进行post数据，当我第一次看到这个方法的时候，我感觉很妙啊。

```html
<input type="hidden" name="isBest" value="0">
<input type="hidden" name="isHot" value="0">
<input type="checkbox" value="1" name="isBest"  <%if(product.isBest == 1){%>checked<%}%>  id="is_best"> <label for="is_best">精品</label>  &nbsp;&nbsp;
<input type="checkbox" value="1" name="isHot"  <%if(product.isHot == 1){%>checked<%}%>  id="is_hot"> <label for="is_hot">热销</label> 
```

## 注意事项
* 一定要将隐藏表单放到前面，你想啊，首先默认是0，下边的数据如果是0，则就传递上边的数据，如果下边的不是0，下边的会覆盖上面的数据。
* 表单中含有checkbox的时候，一定要注意这个问题，一旦不注意极有可能带来不可预知的Bug。
* 尽量避免将checkbox的value设置为0，可以考虑设置其他的值，如果无法避免，可以考虑使用隐藏表单的方式来解决这个问题。

## 参考文档
* [checkbo不选中传值](https://www.cnblogs.com/hsd1727728211/p/6516129.html)
                             
