var dynamicLoading = {
		css:function(pathArray){
			if(!pathArray || pathArray.length === 0){
				return;
			}
			var myHeader = document.getElementsByTagName('HEAD').item(0);
			for(var i = 0; i<pathArray.length;i++){
				var path = pathArray[i];
				if(!path || path.length === 0){
					continue;
				}
				var str = path.indexOf('index');
				var myCss = document.createElement("link");
				myCss.href = path;
				myCss.rel = 'stylesheet';
				myCss.type = 'text/css';
				if(str != -1){
					myCss.id = 'mylink_new';
				}
				myHeader.appendChild(myCss);
			}
			
		},
		js:function(pathArray){
			if(!pathArray || pathArray.length === 0){
				return;
			}
			var myHeader = document.getElementsByTagName('HEAD').item(0);
			for(var i = 0; i<pathArray.length;i++){
				var path = pathArray[i];
				if(!path || path.length === 0){
					continue;
				}
				var myScript = document.createElement("script");
				myScript.language = 'javascript';
				myScript.type = 'text/javascript';
				myScript.src = path;
				myHeader.appendChild(myScript);
			}
		}	
};

var ajaxLoadJS = (function(){
	function request(url,opt){
		function fn(){}
			var async = opt.async !== false,
			method = opt.method ||'GET',
			data = opt.data || null,
			success = opt.success || fn,
			failure = opt.failure || fn;
			method = method.tpUpperCase();
			if(method == 'GET' && data){
				url += (url.indexOf('?') == -1 ? '?' : '&') + data;
				data = null;
			}
			var xhr = null;
			if(typeof XMLHttpRequest != 'undefined'){
				try{
					xhr = new XMLHttpRequest();
				}catch(e){
					xhr = null;
				}
				
			}else{
				var arrayActice = ['Msxml2.XMLHTTP.6.0','Msxml2.XMLHTTP.5.0','Msxml2.XMLHTTP.4.0','Msxml2.XMLHTTP.3.0','Msxml2.XMLHTTP','Microsoft.XMLHTTP'];
				for(var i = 0; i < arrayActice.length;i++){
					try{
						xhr = new ActiveXObject(arrayActice[i]);
						break;
					}catch(e){
						continue;
					}
				}
			}
			if(xhr != null){
				xhr.open(method,url,async);
				if(method == 'POST'){
					xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
				}
				xhr.onreadystatechange = function(){
					_onStateChange(xhr,success,failure);
				};
				xhr.send(data);
			}
			return xhr;
	}
	
	function _onStateChange(xhr,success,failure){
		if(xhr.readyState == 4){
			var s = xhr.status;
			if(s >= 200 && s <300){
				success(xhr);
			}else{
				failure(xhr);
			}
		}else{
			
		}
		return{
			request:request
		};
	}
}());


function scriptStr(str){
	var myHeader = document.getElementByTagName('HEAD').item(0);
	var myScript = document.createElement("script");
	myScript.language = 'javascript';
	myScript.type = 'text/javascript';
	try{
		myScript.appendChild(document.createTextNode(str));
	}catch(ex){
		myScript.text = str;
	}
	myHeader.appendChild(myScript);
}

