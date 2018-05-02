# 常用布局 
![全屏两列定宽中间自适应](http://wx4.sinaimg.cn/mw690/0060lm7Tly1fqx677az3lj30pm0jyjra.jpg)
### 全屏两列定宽中间自适应
-----------------------------------------
#### 实现思路(1):
- 双飞翼布局方法 + box-sizing

```html
<div class="header">header</div>
<div class="parent">
    <div class="center">
        <div class="center-box">center</div>
    </div>
    <div class="left">left</div>
    <die class="right">right</die>zin
</div>
<div class="footer">footer</div>
```

```CSS
html, *{
    margin: 0;
    padding: 0;
}
html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.header {
    height: 80px;
    background-color: #cccccc;
}
.parent {
    height: 100%;
    margin: -80px 0 -60px 0;
    border-top: 80px solid transparent;
    border-bottom: 60px solid transparent;
    box-sizing: border-box;
}
.left {
    float: left;
    width: 100px;
    height: 100%;
    margin-left: -100%;
    background-color: red;
}
.center {
    float: left;
    width: 100%;
    height: 100%;
    background-color: yellow;
}
.center .center-box {
    height: 100%;
    margin: 0 220px 0 120px;
    background-color: coral;
}
.right {
    float: left;
    width: 200px;
    height: 100%;
    margin-left: -200px;
    background-color: blue;
}
.footer {
    clear: both;
    height: 60px;
    background-color:#cccccc;
}

```
-----------------------------------------
#### 实现思路(2):
- 圣杯布局方法 

```html
<div class="header">header</div>
<div class="parent">
    <div class="center">center</div>
    <div class="left">left</div>
    <die class="right">right</die>
</div>
<div class="footer">footer</div>
```


```css
html, *{
    margin: 0;
    padding: 0;
}
html, body {
    width: 100%;
    height: 100%;
}
.header{
    height: 80px;
    background-color: #ccc;
}
.parent {
    height: 100%;
    margin: -80px 0 -60px 0;
    padding: 0 215px 0 115px;  
    border-top: 80px solid transparent;
    border-bottom: 60px solid transparent;
    box-sizing: border-box;
}
.left {
    float: left;
    position: relative;
    width: 100px;
    height: 100%;
    left: -115px;  
    margin-left: -100%;  
    background-color: red;
}
.center {
    float: left;
    width: 100%;  
    height: 100%;
    box-sizing: border-box;
    background-color: yellow;

}
.right {
    float: left;
    position: relative;
    width: 200px;
    height: 100%;
    margin-left: -200px; 
    left: 215px; 
    background-color: blue;

}
.footer{
    height: 60px;
    background-color: #ccc;
}
```
-----------------------------------------
#### 实现思路(3):
- Grid 网格布局方法

```html
<div class="parent">
    <div class="header">header</div>
    <div class="center">center</div>
    <div class="left">left</div>
    <die class="right">right</die>
    <div class="footer">footer</div>
</div>
```
```css
html,
* {
    margin: 0;
    padding: 0;
}
html,
body {
    width: 100%;
    height: 100%;
}
.parent {
    display: grid;
    height: 100%;
    grid-template-columns: 100px 1fr 200px;
    grid-template-rows: 80px 1fr 60px;
    grid-template-areas: 
        "header header header" 
        "leftside main rightside"
        "footer footer footer";
}
.header {
    grid-area: header;
    background-color: #cccccc;
}
.left {
    grid-area: leftside;
    background-color: red;
}
.center {
    grid-area: main;
    background-color: yellow;
    margin: 0 15px;
    /* 边距 */
}
.right {
    grid-area: rightside;
    background-color: blue;
}
.footer {
    grid-area: footer;
    background-color: #cccccc;
}
```
-----------------------------------------
![九宫格](http://wx3.sinaimg.cn/mw690/0060lm7Tly1fqxdtkpu9nj308q08jmwy.jpg)
### 九宫格
> 实现之前使用 reset 清除浏览器默认样式
-----------------------------------------
#### 实现思路(1):
- flex + box-sizing + :nth-child(CSS3选择器) 

```html
  <ul class="grid">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
  </ul>
```
```css
.grid {
    display: flex;
    flex-wrap: wrap; /* 核心代码 */                         
    width: 300px;
    /* ------为了偏移展示(可选)-------- */
    position: relative;
    left: 200px;
    top: 100px;
    /* ------------------------- */
}
.grid li {
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    border: 4px solid black;
    /* --------核心代码---------- */
    box-sizing: border-box;
    margin-left: -4px;
    margin-top: -4px; 
    /* ------------------------ */
}
   /* --------核心代码---------- */
.grid li:nth-child(-n+3) {
    margin-top: 0;
}
.grid li:nth-child(3n+1) {
    margin-left: 0;
}
 /* ------------------------ */
.grid li:hover {
    border-color: red;
    z-index: 2;
}
```

