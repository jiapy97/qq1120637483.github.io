---
title: React哲学(精读React官方文档—12)
date: 2021-06-30
categories: 精读React官方文档
tags: 
- 精读React官方文档
---
## 引入React哲学
>React最棒的部分之一是引导我们思考如何构建一个应用，接下来本文将通过React构建一个可搜索的产品数据表格来深刻的领会React哲学。

## 从设计稿开始
* 假设我们已经拥有了以下几个东西

1. 一个能够返回JSON数据的API
```json
[
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
```
2. 设计师提供的组件设计稿
![image.png](https://img-blog.csdnimg.cn/img_convert/ca4fb70ddcf9190c7eed12d8cea07403.png)

## 第一步：将设计好的UI划分为组件层级
* 在设计稿上圈出每一个组件，并进行合适的命名。
* 一个组件原则上只负责一个功能，如果需要负责更多的功能，需要考虑将它拆分成更小的组件。

>下面的应用包含了五个组件，分别用不同的颜色进行了标注
1. FilterableProductTable (橙色):整个示例的整体组件。
2. SearchBar (蓝色): 接收用户输入的组件。
3. ProductTable (绿色): 展示数据内容并根据用户输入筛选结果的组件。
4. ProductCategoryRow (天蓝色): 展示每一个产品类别的组件。
5. ProductRow (红色): 每一个产品的组件。

![image.png](https://img-blog.csdnimg.cn/img_convert/581daa9d847b17b0269217a48ea4c3f6.png)

**解读**

>为什么不在ProductTable的表头设置为一个组件，官方认为这个示例中表头只是起到了渲染数据集的作用，不复杂，所以就没有将其设置为一个独立的组件。

>现在组件的层级如下所示：

* FilterableProductTable
    * SearchBar
    * ProductTable
        * ProductCategoryRow
        * ProductRow

## 第二步：用React创建一个静态版本
```js
class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const rows = [];
    let lastCategory = null;
    
    this.props.products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}
const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
 
ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('container')
);
```
>官方建议：首先用已有的数据渲染一个不包含交互功能的UI，将UI渲染和添加交互分开，因为写静态页面时不用考虑太多交互细节，添加交互功能的时候则需考虑大量细节。

1. 尽量使用props来构建应用的静态版本，而不是props.
2. 在构建应用的时候，可以采取自上而下，也可以采取自下而上，自下而上意味着从最基本的组件开始编写，这时适用于较为大型的项目。
3. React单向数据流的思想使得组件模块化，易于快速开发。

## 第三步：确定UI state的最小完整表示
>要想UI具备交互功能，需要出发基础数据模型改变的能力，React通过state来完成这个任务。为了正确的构建应用，需要找出应用所需的state的最小表示。

* 示例应该包含下面这些数据
    * 所有产品的列表
    * 用户输入的搜索词
    * 复选框是否选中
    * 经过搜索筛选的产品列表

>问自己三个问题，看看目标数据是否应该放在state中
1. 如果该数据是通过父组件的props传递过来的，那么这个数据不应该放在state中。
2. 数据是否随着时间的推移保持不变，如果不变那么这个数据依然不应该放在state中。
3. 如果能够根据现有的state或props推算出的数据，也不应该放在state中。

* 根据上面的三个筛选法则，我们认为只要用户输入的搜索词和复选框是否选中指的放入state中。

## 第四步：确定state放置的位置
```js
class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name}
        />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={filterText} />
        <p>
          <input
            type="checkbox"
            checked={inStockOnly} />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}


const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('container')
);
```
* 第三步已经确定了哪些数据应该放入state，接下来我们需要确定哪个组件能够改变state。

* 哪个组件应该拥有state是我们需要理解的，我们可以通过以下步骤来判断
    * 找到根据这个state进行渲染的所有组件。
    * 找到这些组件的共同祖先组件。
    * 该共同祖先组件该拥有state.
    * 如果找不到该组件，可以自己创建后，然后将state放入该组件中。

* 根据上面我们分析的策略，我们应当这样设置state
    * ProductTable 需要根据 state 筛选产品列表。SearchBar 需要展示搜索词和复选框的状态。
    * 上面两个组件的共同祖先是FilterableProductTable。
    * 所以搜索词和复选框的值应该很自然的存放在共同祖先组件中。
    
>官方描述：很好，我们已经决定把这些 state 存放在 FilterableProductTable 组件中。首先，将实例属性 this.state = {filterText: '', inStockOnly: false} 添加到 FilterableProductTable 的 constructor 中，设置应用的初始 state；接着，将 filterText 和 inStockOnly 作为 props 传入 ProductTable 和 SearchBar；最后，用这些 props 筛选 ProductTable 中的产品信息，并设置 SearchBar 的表单值。

## 第五步：添加反向数据流
```js
class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name}
        />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }
  
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  
  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }
  
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
    
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}


const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('container')
);
```
* 通过上文的步骤，我们已经实现了数据的自上而下传递，接下来我们尝试让处于底层的组件去更新处于较高层级的state.

**官方解释**

由于 state 只能由拥有它们的组件进行更改，FilterableProductTable 必须将一个能够触发 state 改变的回调函数（callback）传递给 SearchBar。我们可以使用输入框的 onChange 事件来监视用户输入的变化，并通知 FilterableProductTable 传递给 SearchBar 的回调函数。然后该回调函数将调用 setState()，从而更新应用。

**解读**

>子组件要想修改父组件的state，可以让父组件通过props将能够修改父组件state的回调函数传递给子组件，子组件通过这个回调函数来修改父组件的state.



