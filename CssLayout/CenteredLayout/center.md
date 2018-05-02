# 居中布局
![居中](https://s1.ax1x.com/2017/10/04/1veeO.png)
### 居中
-----------------------------------------
#### 实例要求
>要求: 在父容器与子容器都不定宽的情况下实现浏览器居中显示
```html
<div class="parent">
    <div class="child">DEMO</div>
</div>    
```
#### 实现思路(1):
- inline-block(行内块元素) + text-align(水平对齐方式) + table-cell(单元格元素) + vertical-align(垂直对齐) 
```css
    .parent {
        display: table-cell;
        vertical-align: middle;
        text-align: center;
    }
    .child {
        display: inline-block;
    }
```
#### 解决方案说明:
> - 特点: 综合水平居中与垂直居中方案,对父容器进行水平居中对齐,因子容器为`inline-block`属性,因此水平居中显示,再通过对父容器进行单元格设置,因此可以使用`vertical-align`(垂直对齐属性)进行垂直居中处理,因此完成居中显示
> - 优点: 兼容性好,能够兼容IE8以上的浏览器;
-----------------------------------------
#### 实现思路(2):
- absolut(绝对定位) + transform(变换)
```css
.parent {
    position: relative;
}
.child {
    position: absolute;
    left: 50%;
    top: 50%
    transform: translate(-50%, -50%);

}
```
#### 解决方案说明
> - 说明: 利用绝对定位属性对子容器进行50%移动,并通过`transform`(变换)属性对自身参照物进行位移自身元素,并完成垂直居中
> - 特点: 因使用绝对定位原因,因此子容器为内容宽度高度,因此再配合变换属性完成
> - 优点: 因`absolute`(绝对定位)属性脱离文档流,因此不影响其他子容器
> - 缺点: 因`transform`(变换)属性是CSS3定义的属性,因此需要在高版本浏览器中进行使用,因此缺点是兼容性低

#### 实现思路(2):
- relative(相对定位) + absolute(绝对定位)
```css
.parent {
    position: relative;
}
.child {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}
```
#### 解决方案说明
> - 说明: 当`left`、`right`、`top`、`bottom`为0时,`margin`设置`auto`的话会无限延伸占满空间并且平分
> - 优点: 因`absolute`(绝对定位)属性脱离文档流,因此不影响其他子容器,简单,兼容性较好(ie8+)
> - 缺点: 脱离文档流
--------------------------------------
#### 实现思路(3):
- flex(弹性盒子) + justify-content(盒子垂直对齐) + align-items(flex子项在flex容器的当前行的侧轴（纵轴）方向上的对齐方式)
```css
.parent {
    display:flex;
    justify-content: center;
    align-items: center; 
}
```
或 
```css
.parent {
    display:flex;
}
.child {
    margin: auto
}
```

#### 解决方案说明
> - 说明:利用弹性盒子的特性,并对父容器设置为弹性盒子属性,在设置后,因为属性默认样式原因,因此会把子容器高度撑开,所以再加上方向上的对齐方式设置为居中属性,因此达到居中
> - 优点: 弹性盒子灵活使用,并只需要对父容器进行设置,即可完成居中
> - 缺点: 兼容性低

--------------------------------------
#### 实现思路(4):
#### 视窗居中
- margin(外边距) + vh视口单位 + translateY(变换)
```css
.child {
    /*0如果去掉，则会多出滚动条并且上下都是50vh的margin。如果去掉就给body加上overflow:hidden;*/
    margin: 50vh auto 0;  
    transform: translateY(-50%);
}
```

#### 解决方案说明
> - 说明:vh为视口单位，视口即文档可视的部分，50vh就是视口高度的50/100，设置50vh上边距再
> - 优点: 简单,容易理解,两句代码达到屏幕水平垂直居中
> - 缺点: 兼容性不好（ie9+，Android4.4+）
