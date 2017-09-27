(function () {
    // 高版本浏览器支持
   function filedataUrl(file, callback) {
       var reader = new FileReader();
       reader.readAsDataURL(file);
       reader.addEventListener('load',function(event){
           callback(event.target.result);
       });
   }
   function appendImage(url) {
       //添加预览图片容器
       var div = document.createElement('div');
       div.classList.add('itbox');
       document.getElementById('vbox').appendChild(div);
       //添加预览图片
       var image = new Image();
       image.src = url;
   }
   function ImageEvent(event) {
       var list = event.target.file;
       if(!list || !list.length) {
           return ;
       }
       for (var i = 0, len = list.length; i < len; i++) {
           filedataUrl(list[i],appendImage);
           event.target.parentNode.reset();
       }
   }
   document.getElementById('image').addEventListener('change', ImageEvent);
})();
