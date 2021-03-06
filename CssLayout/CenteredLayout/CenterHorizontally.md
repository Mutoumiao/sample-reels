# 居中布局
![水平居中](https://s1.ax1x.com/2017/10/04/1vVOK.png)
### 水平居中
-----------------------------------------
#### 实例要求
>要求: 在父容器与子容器都不定宽的情况下实现居中布局
```html
<div class="parent">
    <div class="child">DEMO</div>
<div>    
```
#### 实现思路(1):
- inline-block(行内块元素) + text-align (文本方向属性)
```css
    .child {
        display:inline-block;
    }
    .parent {
        text-align: center;
    }
```
#### 解决方案说明:
> - 特点: 由于`text-align`属性对`inline-block`属性元素起左右,因此将子容器进行居中处理,因子容器设置`inline-block`属性,因此宽度为内容宽度
> - 优点: 兼容性好,能够兼容更低版本浏览器,利用父容器继承方式进行设置
> - 缺点: 如果对子容器内容居中需要更改,尽管可以通过子容器添加额外的属性进行设置,因此缺点需要额外的代码通过对子容器修改
-----------------------------------------
#### 实现思路(2):
- table(块元素) + margin (外边距)
```css
    .child {
        display: table;
        margin: 0 auto;
    }
```
#### 解决方案说明
> - 说明: 因将子容器设置为`table`属性,因此子容器会变成宽度为内容宽度块元素,因此再利用`margin: 0 auto`,即可完成居中
> - 特点: 兼容到IE8以上,并在更少的代码实现居中,兼容IE6-7时,可将子容器改成`table`结构完成;
> - 优点: 兼容性好,并在更少的代码实现居中,重要是不干涉到父容器,只选择自己需要的子容器设置
> - 缺点: 不兼容IE6-7
-----------------------------------------
#### 实现思路(3):
- absolut(绝对定位) + transform(变换)
```css
.parent {
    position: relative;
}
.child {
    position: absolute;
    left: 50%;
    transform: translateX(-50%); /*如果定宽的话,可以使用mrgin-left : -<自身宽度一半>px*/
}
```
#### 解决方案说明
> - 说明: 利用绝对定位属性对子容器进行50%移动,并通过`transform`(变换)属性对自身参照物进行位移自身元素,并完成居中
> - 特点: 因使用绝对定位原因,因此子容器为内容宽度,因此再配合变换属性完成
> - 优点: 因`absolute`(绝对定位)属性脱离文档流,因此不影响其他子容器
> - 缺点: 因`transform`(变换)属性是CSS3定义的属性,因此需要在高版本浏览器中进行使用,因此缺点是兼容性低

#### 实现思路(3):
- relative(相对定位) + absolute(绝对定位)
```css
.parent {
    position: relative;
}
.child {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
}
```
#### 解决方案说明
> - 说明: 当`left`、`right`为0时,`margin-left`&`right`设置`auto`的话会无限延伸占满空间并且平分
> - 优点: 因`absolute`(绝对定位)属性脱离文档流,因此不影响其他子容器,简单,兼容性较好(ie8+)
> - 缺点: 脱离文档流
--------------------------------------
#### 实现思路(4):
- flex(弹性盒子) + justify-content(设置弹性盒子对齐方式)
```css
.parent {
    display:flex;
    justify-content: center; 
}

方法二:
.parent {
    display:flex;
}
.child {
    margin: 0 auto;
}
```
#### 解决方案说明
> - 说明:利用弹性盒子的特性,并对父容器设置为盒子属性,并对盒子对齐方式进行设置为`居中`,因此完成居中
> - 特点: 因将父容器设置为弹性盒子属性,因此子容器为宽度如果不设置,默认为内容宽度
> - 优点: 弹性盒子灵活使用,并只需要对父容器进行设置,即可完成居中
> - 缺点: 兼容性低
