(function(win){
    //collapse
    //-------------
    function Collapse (options) {
        if(!options) {
            return alert('请填写需要的数据');
        }
        
        this.list = document.querySelector('.'+options.listclassName);
        this.item = this.list.querySelectorAll('.accordion-item');
        // ture: across false: vertical
        this.direction = this.list.className === 'accordion-list-across'? true : false ;

        this.container = options.container;
        this.contentwh = options.contentwh || 100 ;
        this.content = options.content || false;
        
        if(this.content) {
            this.setContent(this.content);
        }
        this._initEvent();
    }
    
    //帮助方法
    //---------------
    Collapse.extend = Collapse.prototype.extend= function (obj) {
        for (var key in obj) {
            if (typeof this[key] === 'undefined') {
                this[key] = obj[key];
            }
        }
    };


    // 使用混入Mixin的方式注入静态方法与实例方法
    Collapse.extend({

        isLikeArray : function (arr) {
            if ( typeof arr === 'function' || typeof arr !== 'object') {
                return false;
            }
            if ( ({}).toString.call(arr) === '[object Array]') {
                return true;
            }
            if ( 'length' in arr && ( arr.length === 0 || arr.length -1 in arr)) {
                return true;
            }
        },
        each : function(obj, fn) {
            var i, len, key;
            if(Collapse.isLikeArray(obj)) {
                for ( i = 0, len = obj.length; i < len; i++) {
                    if ( fn.call( obj[i], i, obj[i] ) === false ) {
                        break;
                    }
                }
            } else {
                for ( key in obj) {
                    if ( fn.call( obj[key], key, obj[key] ) === false) {
                        break;
                    }
                }
            }
        }
    });
    // 实例方法
    Collapse.prototype.extend({
        
        setContent: function (content) {
            Collapse.each(this.item, function(i){
                    var toggle =  this.querySelector('.accordion-item-toggle');
                    var body = this.querySelector('.accordion-item-body');
                    toggle.innerHTML = content[i].loggle;
                    body.innerHTML = content[i].body;
                });
        },
        show: function (item) {
            var content = item.querySelector('.accordion-item-body');
            if(!this.direction) {
                content.style.height = this.contentwh + 'px';
            }else {
                content.style.width = this.contentwh + 'px';
            }
            if(!content.classList.contains('accordion-item-expand')) {
                item.classList.add('accordion-item-expand');
            }
        },
        hide: function (item) {
            var content = item.querySelector('.accordion-item-body');
			item.classList.remove('accordion-item-expand');
            if(!this.direction) {
                content.style.height = 0 + 'px';
            }else {
                content.style.width = 0 + 'px';
            }
        },
        _initEvent: function () {
            var selt = this;
            Collapse.each(this.item,function(){
                if(this.classList.contains('accordion-item-expand')){
                  selt.show(this);
                }              
            });
            Collapse.each(this.item, function(i) {
                var that = this;
               that.querySelector('.accordion-item-toggle').addEventListener(
                    'click', function() {
                        var Node = that.parentNode;
                        var items = Node.querySelector('.accordion-item.accordion-item-expand');
                        selt.hide(items);
                        selt.show(this.parentNode);
                    }
               );
            });
        }
    });

    // 暴露接口
    win.Collapse = Collapse;

}(window));