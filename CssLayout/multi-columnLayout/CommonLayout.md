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
    box-sizing: border-box;
    height: 100%;
    padding: 0 215px 0 115px;  
    margin: -80px 0 -60px 0;
    border-top: 80px solid transparent;
    border-bottom: 60px solid transparent;
}
.left {
    margin-left: -100%;  
    position: relative;
    left: -115px;  
    float: left;
    width: 100px;
    height: 100%;
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
    position: relative;
    left: 215px; 
    width: 200px;
    height: 100%;
    margin-left: -200px; 
    float: left;
    background-color: blue;

}
.footer{
    height: 60px;
    background-color: #ccc;
}
```