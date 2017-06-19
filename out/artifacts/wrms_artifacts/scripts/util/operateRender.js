
// 系统菜单功能按钮控制显示

$(function() {
	operateRender();
	clearTextAreaDefaultValue();
});

function operateRender() {

}

function contains(obj, arr) {
	var i = arr.length;
	while (i--) {
		if (obj == arr[i].id) {
			return true;
		}
	}
	return false;
}

function clearTextAreaDefaultValue(){
	var textObj = $("textarea");
	if(textObj != undefined){
		
		for ( var i = 0; i < textObj.length; i++) {
			var msg =textObj[i].value;
			if($.trim(msg) == ''){
				textObj[i].value = '';
			}	
		}
	}
}
