# 定宽与自适应
![1列定宽与1列自适应](https://s1.ax1x.com/2017/10/04/39ZIU.png)
### 1列定宽与1列自适应
-----------------------------------------
#### 实例要求
>要求: 左容器定宽100px,距离右边容器间距20px,右边容器自适应
```html
<div class="parent">
    <div class="left"><p>left</p></div>
    <div class="right">
        <p>right</p>
        <p>right</p>
    </div>
<div>    
```
#### 实现思路(1):
- float(浮动) + margin (外边距) 
```css
    .left {
        float: left;
        width: 100px;
    }
    .right {
        margin-left: -120px;
    }
```
#### 解决方案说明:
> - 特点: 通过利用`left`容器元素向左边浮动,并通过`margin`属性向右边位移后,并达到实现效果
> - 优点: 在IE7以上兼容性较好,并代码简单;
> - 缺点: 在IE6中会因为使用`margin-left`属性原因并产生3像素的BUG,如果在`right`容器的子元素中进行清除浮动,并会产生子元素崩塌
-----------------------------------------
#### 实现思路(2):
- float + margin + (fix)
```html
<div class="parent">
    <div class="left"><p>left</p></div>
    <div class="right-fix">
        <div class="right">
            <p>right</p>
            <p>right</p>
        </div>
    </div>
<div> 
```
```css
    .left {
        float: left; 
        width: 100px;
    }
    .right-flx {
        float: right;
        width: 100%;
        margin-left: -100px;
    }
    .right {
        margin-left: 120px
    }
```
#### 解决方案说明
> - 说明: 在使用思路(1)中,因产生多个BUG原因得出来的兼容版本,并需要更改一下HTML结构,并达到兼容性更好的方法
> - 特点: 通过思路(1)进行兼容性的改进版,并解决了多个BUG的影响
> - 优点: 兼容性好
> - 缺点: 多出了HTML结构并添加了多个代码数
--------------------------------------
#### 实现思路(3):
- float(浮动) + overflow(溢出属性) | 可以实现不定宽要求
```css
.left {
    float: left;
    width: 100px; 
    margin-right: 20px;
}
.right {
    overflow: hidden;
}
```
#### 解决方案说明
> - 说明:通过`overflow`属性对`right`容器进行设置,并会形成一个BFC状态,因BFC内部与浮动互不相干,因此不受浮动影响,不会环绕着浮动,因此向右边移动
> - 优点: 兼容性好,样式简单
> - 缺点: 在IE6不支持该写法
------------------------------------------
#### 实现思路(4):
- table(表格元素) 
```css
.parent {
    display: table;
    width: 100%;
    table-layout: fixed;
}
.left,.right {
    display: table-cell;
}
.left {
    width: 100px;
    padding-right: 20px;
}
```
#### 解决方案说明
> - 说明:通过在父容器中设置`table`结构,由于`table`为内容宽度,因此设置100%宽度撑开,再通过将两个子容器设置为表格元素,由于单元格无法使用`margin`,因此使用`padding`制作出边距,由于`right`容器的宽度是因父容器的宽度走,跟内容宽度无关,因此需要添加`table-layout`属性(该属性会提供table渲染速度,布局优先)并完成内容宽度,因此完成了实现
> - 优点: 兼容性好
> - 缺点: 代码量多
-----------------------------------------
#### 实现思路(5):
- flex(弹性盒子) |  可以实现不定宽要求
```css
.parent {
    display: flex;
}
.left {
    width: 100px;
    margin-right: 20px;
}
.right {
    flex: 1;
}
```
#### 解决方案说明
> - 优点: 简单方便,灵活
> - 缺点: 兼容性太低
---------------------------------------------
### 2列定宽与1列自适应
![2列定宽与1列自适应](https://s1.ax1x.com/2017/10/04/39miF.png)

#### 实例要求
>要求: 左容器定宽100px,距离右边人容器间距20px,中间定宽100px,右边容器自适应
```html
<div class="parent">
    <div class="left"><p>left</p></div>
    <div class="center"><p>conter</p></div>
    <div class="right">
        <p>right</p>
        <p>right</p>
    </div>
<div>  
```
#### 实现思路(1):
- float(浮动) + overflow(溢出属性) | 可以实现不定宽要求
```css
    .left,.center {
        float: left;
        width: 100px;
        margin-right: 20px;
    }
    .right {
        overflow: hidden;
    }
    
```
#### 解决方案说明:
> - 说明:通过`overflow`属性对`right`容器进行设置,并会形成一个BFC状态,因BFC内部与浮动互不相干,因此不受浮动影响,不会环绕着浮动,因此向右边移动
> - 优点: 兼容性好,样式简单
> - 缺点: 在IE6不支持该写法
