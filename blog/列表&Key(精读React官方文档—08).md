---
title: 列表&Key(精读React官方文档—08)
date: 2021-06-26
categories: 精读React官方文档
tags: 
- 精读React官方文档
---
## React中将元素转换为列表
**类似map的方法**
```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);
```

## 渲染多个组件
**将数组中的每个元素变为li标签**
```js
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);
```

**把整个 listItems 插入到 \<ul/> 元素中，然后渲染进 DOM：**
```js
ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);
```

## 基础列表组件
* 把上面介绍的例子提取为一个组件
```js
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

>官方描述：当我们运行这段代码，将会看到一个警告 a key should be provided for list items，意思是当你创建一个元素时，必须包括一个特殊的 key 属性。

**解决警告**

给每个列表元素分配一个 key 属性
```js
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

## Key
**为什么要给每一个li元素添加key属性？**
>官方描述：key 帮助 React 识别哪些元素改变了，比如被添加或删除。

**解读**

React是在更新DOM的时候，是使用Diffing算法进行比较，只有发生了变化的元素才会更新DOM，如果通过key属性可以让React知道哪个li元素发生了变化。

* 一个元素的 key 最好是这个元素在列表中拥有的一个独一无二的字符串。通常，我们使用数据中的 id 来作为元素的 key。
```js
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
```

* 当元素没有确定 id 的时候，万不得已你可以使用元素索引 index 作为 key
```js
const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);
```
**为什么不建议通过索引来作为key属性**

>官方描述：如果列表项目的顺序可能会变化，我们不建议使用索引来用作 key 值，因为这样做会导致性能变差，还可能引起组件状态的问题。可以看看 Robin Pokorny 的深度解析使用索引作为 key 的负面影响这一篇文章。如果你选择不指定显式的 key 值，那么 React 将默认使用索引用作为列表项目的 key 值。

**解读**

使用索引作为key属性，一旦数组元素的顺序发生了变化，就可能带来意想不到的错误，所以React官方不推荐。

## 用key提取组件
>官方描述：元素的 key 只有放在就近的数组上下文中才有意义。比方说，如果你提取出一个 ListItem 组件，你应该把 key 保留在数组中的这个 <ListItem /> 元素上，而不是放在 ListItem 组件中的 \<li/> 元素上。

**例子：不正确的使用 key 的方式**
```js
function ListItem(props) {
  const value = props.value;
  return (
    // 错误！你不需要在这里指定 key：
    <li key={value.toString()}>
      {value}
    </li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // 错误！元素的 key 应该在这里指定：
    <ListItem value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

**例子：正确的使用 key 的方式**
```js
function ListItem(props) {
  // 正确！这里不需要指定 key：
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // 正确！key 应该在数组的上下文中被指定
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```
**官方给的技巧**

>在 map() 方法中的元素需要设置 key 属性。

## key 只是在兄弟节点之间必须唯一
>官方描述：数组元素中使用的 key 在其兄弟节点之间应该是独一无二的。然而，它们不需要是全局唯一的。当我们生成两个不同的数组时，我们可以使用相同的 key 值。
![image.png](https://img-blog.csdnimg.cn/img_convert/71541d7ddf838f4a15cdc86ba24090f3.png)

**key 会传递信息给 React ，但不会传递给你的组件**。
如果你的组件中需要使用 key 属性的值，请用其他属性名显式传递这个值：
```js
const content = posts.map((post) =>
  <Post
    key={post.id}
    id={post.id}
    title={post.title} />
);
```
**上面例子中，Post 组件可以读出 props.id，但是不能读出 props.key,所以我们一定要注意这一点**

## 在 JSX 中嵌入 map()
JSX 允许在大括号中嵌入任何表达式，所以我们可以内联 map() 返回的结果：
![image.png](https://img-blog.csdnimg.cn/img_convert/e48e800d532acce502fd309f543ce238.png)
