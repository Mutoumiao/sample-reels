# 等分布局
![等分布局](https://s1.ax1x.com/2017/10/05/39JIO.png)
-----------------------------------------
#### 实例要求
>要求: 子容器4列平均宽度,分别每列有20px间距
```html
<div class="parent">
   <div class="column"><p>1</p></div>
   <div class="column"><p>2</p></div>
   <div class="column"><p>3</p></div>
   <div class="column"><p>4</p></div>
<div>    
```
#### 实现思路(1):
- float(浮动) 
```css
.parent {
    margin-left: -20px;
}
.column {
    float: left;
    width: 25%;
    padding-left: 20px;
    box-sizing: border-box;
}

```
#### 解决方案说明:
> - 特点: 通过在父容器中添加宽度`20px`,再通过`box-sizing`属性机制完成
> - 优点: 兼容性好,在IE8以上都没问题
> - 缺点: 无法兼容IE7-6,如果因为间距`padding`属性区具有背景覆盖,需要用背景属性更改为内容区显示
-----------------------------------------
#### 实现思路(2):
- table(表格)
```html
<div class="parent-flx">
    <div class="parent">
        <div class="column"><p>1</p></div>
        <div class="column"><p>2</p></div>
        <div class="column"><p>3</p></div>
        <div class="column"><p>4</p></div>
    <div> 
</div>    
```
```css
 .parent-fix {
     margin-left: -20px;
 }
 .parent {
     display: table;
     width: 100%;
     table-layout: fixed;
 }
 .column {
     display: table-cell;
     padding-left: 20px;
 }
}
```
#### 解决方案说明
> - 说明: 因table无法添加`margin`属性,因此需要更改结构,在外层添加父容器,另单元格设置`table-layout`属性,会自动撑开宽度,因此达成效果
> - 优点: 兼容性好
> - 缺点: 使用padding-right的方案来处理间距会存在部分兼容问题。
> - 问题表现：在webkit和ie内核中会有这个问题，而firefox正常。从表现上看，似乎chrome等浏览器无故多出了其他padding，如padding-bottom，从而导致了用background-clip:content-box来裁剪背景后背景没有等高的问题。 
> - 问题解决：所以，为了解决这个兼容性问题，我们可以去掉padding-right的设置，变成border-right:20px solid transparent，然后把background-clilp改成padding-box，问题就解决了。

--------------------------------------
#### 实现思路(3):
- flex(弹性盒子)
```css
.parent {
    display: flex;
}
.column {
    flex: 1;
}
.column + .column {
    margin-left: 20px
}
```
#### 解决方案说明
> - 说明:通过`flex`弹性盒子属性的自动功能,
> - 优点: 灵活简单
> - 缺点: 兼容性低
