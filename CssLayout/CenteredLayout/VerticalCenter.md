  # 居中布局
![垂直居中](http://ww3.sinaimg.cn/large/0060lm7Tly1fk6d038diij304t09imx1.jpg)
### 垂直居中

#### 实例要求
> "图片"垂直居中

#### 实现思路
```css
.parent {
    height: 150px;
    line-height: 150px;
    font-size: 0;
}
img.child {
    vertival-align: middle;
}
```

#### 解决方案说明:
> - 优点: 简单,兼容性好
> - 缺点: 需要添加`font-size: 0;` 才可以完全的垂直居中；不过需要注意`html`中`.parent`包裹`img`之间需要有换行或空格；熟悉`line-height`和`vertical-align`的基友关系较难

-----------------------------------------
#### 实例要求
>要求: 在父容器与子容器都不定宽的情况下实现垂直居中
```html
<div class="parent">
    <div class="child">DEMO</div>
<div>    
```
#### 实现思路(1):
- table-cell(单元格) + vertical-align (垂直对其方式)
```css
    .parent {
        display: table-cell;
        vertical-align: middle;
    }
```
#### 解决方案说明:
> - 特点: 由于`vertical-align`(垂直对其方式)属性对`table-cell`(单元格)属性元素起左用,因此将父容器进行设置成单元格元素,因此子元素收到`vertical-align`(垂直对其方式)属性的影响,因此完成垂直居中
> - 优点: 兼容性好,能够兼容IE8以上的浏览器,利用父容器继承方式进行设置,如果需要兼容IE6-7,即可把结构更改即可
-----------------------------------------
#### 实现思路(2):
- absolut(绝对定位) + transform(变换)
```css
.parent {
    position: relative;
}
.child {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
```
#### 解决方案说明
> - 说明: 利用绝对定位属性对子容器进行50%移动,并通过`transform`(变换)属性对自身参照物进行位移自身元素,并完成垂直居中
> - 特点: 因使用绝对定位原因,因此子容器为内容宽度,因此再配合变换属性完成
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
    margin: auto 0;
}
```
#### 解决方案说明
> - 说明: 当`top`、`bottom`为0时,`margin-top`&`bottom`设置`auto`的话会无限延伸占满空间并且平分
> - 优点: 因`absolute`(绝对定位)属性脱离文档流,因此不影响其他子容器,简单,兼容性较好(ie8+)
> - 缺点: 脱离文档流
--------------------------------------
#### 实现思路(3):
- flex(弹性盒子) + align-items(flex子项在flex容器的当前行的侧轴（纵轴）方向上的对齐方式)
```css
.parent {
    display:flex;
    align-items: center; 
}
```
- flex(弹性盒子) + align-self
```css
.parent {
    display:flex;
}
.child {
    align-self: center;
}
```
- flex(弹性盒子) + margin (外边距)
```css
.parent {
    display:flex;
}
.child {
    margin: auto 0;
}
```

#### 解决方案说明
> - 说明:利用弹性盒子的特性,并对父容器设置为弹性盒子属性,在设置后,因为属性默认样式原因,因此会把子容器撑开,所以再加上方向上的对齐方式设置为居中属性,因此达到垂直居中
> - 优点: 简单灵活,功能强大
> - 缺点: PC端兼容性不好，移动端（Android4.0+）
