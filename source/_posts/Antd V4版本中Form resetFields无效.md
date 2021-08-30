---
title: Antd V4版本中Form resetFields无效
date: 2021-06-05
categories: React
tags: 
- React
---
## 问题描述
* 给表单中的每一个表单项传入一个参数的时候，参数已经传进去了，但是initialValue并没有发生变化。
![](https://img-blog.csdnimg.cn/img_convert/f93418bd92cf40a2b4eae38046373697.png)

## 原因
>这是因为调用resetFileds的时机不对，也就是生命周期的问题。

## 解决办法
* 在生命周期函数componentDidUpdate中添加下面的代码即可。
```js
componentDidUpdate() {
    if (this.formRef.current !== null) {
        this.formRef.current.resetFields();
    }
}
```

## 全部代码
```js
export default class UpdateForm extends Component {
    formRef = React.createRef();
    static propTypes = {
        categoryName: PropTypes.string.isRequired
    }
    componentDidUpdate() {
        if (this.formRef.current !== null) {
            this.formRef.current.resetFields();
        }
    }
    render() {
        const { categoryName } = this.props;
        
        console.log(categoryName);
        
        return (
            <Form ref={this.formRef}>
                    
                <Item initialValue={categoryName} name="categoryName" >
                    <Input placeholder="请输入分类名称" />
                </Item>
                    
            </Form>
        )
    }
}
```