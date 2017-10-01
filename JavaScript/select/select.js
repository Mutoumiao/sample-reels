//模拟数据
    var provincess = [
        {text:'广东',value:'1'},
        {text:'福建',value:'2'}
    ];
    var citys = {
        1: [
            {text:'广州',value:'1.1'},
            {text:'潮州',value:'1.2'},
            {text:'东莞',value:'1.3'},
            {text:'佛山',value:'1.4'},
            {text:'河源',value:'1.5'},
            {text:'惠州',value:'1.6'}
        ],
        2: [
            {text:'福州',value:'2.1'},
            {text:'龙岩',value:'2.2'},
            {text:'南平',value:'2.3'}
        ]
    };

    //--------------------------------------
    var demoForm = document.forms.demoForm;

    //事件兼容函数
    let addEvent = (node,event,handler) =>{
            if (!!node.addEventListener){
                node.addEventListener(event,handler,false);
            }else{
                node.attachEvent('on'+event,handler);
            }
        }


    let fillSelect = (select, list) => {
        
        for (let i = select.length -1; i > 0; i--) {
            select.remove(i);
        }

        for(let i = 0,l = list.length,data; i < l; i++ ) {
            data  = list[i];
            var option = new Option(
                data.text,data.value
            );
            select.add(option);    
        }
    }

    let  SelectEvent = (event) => {
        var value = demoForm.provinces.value,
            list = citys[value] || [];
            fillSelect(demoForm.city, list);
    }

    addEvent(demoForm.provinces, 'change', SelectEvent)
    
    fillSelect(demoForm.provinces, provincess);
