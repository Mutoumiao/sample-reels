// 基础功能实现 
// 不做兼容处理
(function(){
    // 动画事件结束监听
    var animationEnd = function(elem, handler) {
        elem.addEventListener('animationend', handler, false);
        elem.addEventListener('webkitAnimationEnd',handler, false);
    };
    // 驱动函数
    function ripple (event) {
        // 获取鼠标点击位置
        var x = event.pageX,
            y = event.pageY,
        //获取相对位置
            widths = 50;
            x = x - widths / 2;
            y = y - widths / 2;
            var ripples = document.createElement('span');
            ripples.className = 'ripple';
            document.body.appendChild(ripples);
            ripples.style.cssText = 'top: ' + y + 'px;left: ' + x + 'px';
            ripples.classList.add('rippleEffect');
            animationEnd(ripples,function(){
                this.parentNode.removeChild(ripples);
            });     
    }
    // 事件回调
    function ck (e){
        ripple(e);
    }
    // 事件触发
    document.addEventListener('click',ck);
}());