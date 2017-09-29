      (function(){
            var form = document.forms.loginForm,
                nmsg = document.getElementById('message');
            
            function md5(msg){
            	return msg;
            }
        
            function showMessage(clazz,msg){
            	if (!clazz){
        	    	nmsg.innerHTML = '';
        	    	nmsg.classList.remove('j-suc');
        	    	nmsg.classList.remove('j-err');
            	}else{
        	    	nmsg.innerHTML = msg;
        	    	nmsg.classList.add(clazz);
            	}
            }
        
            function disableSubmit(disabled){
            	form.loginBtn.disabled = !!disabled;
            	var method = !disabled?'remove':'add';
                form.loginBtn.classList[method]('j-disabled');
            }
        
            function invalidInput(node,msg){
            	showMessage('j-err',msg);
            	node.classList.add('j-error');
            	node.focus();
            }
        
            function clearInvalid(node){
            	showMessage();
            	node.classList.remove('j-error');
            }
        
            form.telephone.addEventListener(
            	'invalid',function(event){
            		event.preventDefault();
            		var input = form.telephone;
        			invalidInput(input,'请输入正确的手机号码');
            	}
            );
        
            form.addEventListener(
                'input',function(event){
                	// 还原错误状态
                	clearInvalid(event.target);
                    // 还原登录按钮状态
                    disableSubmit(false);
                }
            );
        
            form.addEventListener(
                'submit',function(event){
                    // 密码验证
                    var input = form.password,
                        pswd = input.value,
                        emsg = '';
                    if (pswd.length<6){
                    	emsg = '密码长度必须大于6位';
                    }else if(!/\d/.test(pswd)||!/[a-z]/i.test(pswd)){
                    	emsg = '密码必须包含数字和字母';
                    }
                    // 密码验证不通过
                    if (!!emsg){
                    	event.preventDefault();
                    	invalidInput(input,emsg);
            			return;
                    }
                    input.value = md5(pswd);
                    // 禁用提交按钮
                    disableSubmit(true);
                }
            );
            
            var frame = document.getElementById('result');
            frame.addEventListener(
            	'load',function(event){
            		try{
            			var result = JSON.parse(
        					frame.contentWindow.document.body.textContent
            			);
            			// 还原登录按钮状态
            			disableSubmit(false);
                    	// 识别登录结果
            			if (result.code===200){
            				showMessage('j-suc','登录成功！');
            				form.reset();
            			}
            		}catch(ex){
            			// ignore
            		}
            	}
            );
            
        })();
