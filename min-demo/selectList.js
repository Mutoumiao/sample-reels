function cascade(selectList,data){  
        // 这里selectList为依次级联的选择器元素列表，如[select1,select2,select3,...]  
        // TODO  
        for(var i = 0; i < selectList.length;i++){  
            var temp_data=data;  
            for(var j = 0; j < i; j ++){  
                temp_data=temp_data[0].list;  
            }  
            fillSelect(selectList[i],temp_data);  
            // 点击选中变更事件  
            selectList[i].addEventListener("change",function(event){  
                    var value=event.target.value;  
                    var arr=value.split(".");  
                    var arr_length=arr.length;  
                    //如果选中的是是最后一个select就直接返回  
                    if(arr_length>=selectList.length) {
                        return;
                    }
                    else {
                    //构造新的选择器  
                        var newSelectList=[];  
                        for(var j=arr_length;j<selectList.length;j++)  
                            newSelectList.push(selectList[j]);  
                    //构造新的数据  
                        var newData=data;  
                        for(var j=0;j<arr.length;j++){  
                            newData=newData[parseInt(arr[j])-1].list;  
                        }  
                        cascade(newSelectList,newData);  
                    }
                }  
            );  
        }  
           
    }  
    //更新select  
    function fillSelect(select,list){  
        select.innerHTML="";  
        list.forEach(function(data){  
            var option=new Option(data.text,data.value);  
            select.add(option);  
        });  
    }
