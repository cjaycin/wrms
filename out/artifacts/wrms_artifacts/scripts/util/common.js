
var pageables = {
		refresh : true,
		pageSizes : true,
		buttonCount : 5,
		page : 1,
		pageSize : window.localStorage.getItem('pageSize'),
		pageSizes : [ 5, 10, 20, 30 ],
		messages : {
			display : "显示 {0}-{1} 共 {2} 项",
			empty : "没有数据",
			itemsPerPage : "每面显示数量",
			first : "第一页",
			last : "最后一页",
			next : "下一页",
			previous : "上一页"
		}
	};
$(".panel-title a").click(function () {
	$(this).children().toggleClass('fa-chevron-down');
	$(this).siblings().slideToggle();
});
//$(".panel-title span[class^='tip-pull-right fa fa-chevron']").click(function () {
//    $(this).toggleClass('fa-chevron-down');
//    $(this).parent().siblings().slideToggle();
//});

//签名操作
function signClick(){
	var comment=document.getElementById("comments").value;
	var userName=document.getElementById("signName").value;
	var time=getNowFormatDate();
	document.getElementById("comments").value+="          "+userName+" "+time;
	/*console.info(comment+":"+userName+":"+time);*/
}
//清空input框内容，id和中文名两个框
function clearContent(eleId,eleName){
	if(eleId!=""){
		document.getElementById(eleId).value="";
	}
	if(eleName!=""){
		document.getElementById(eleName).value="";
	}
}
//从系统服务目录里获得所有系统名
function getSystemNames(){
	var res;
	$.ajax({
		url:"/ita/getSystemNames.action",
		type:'POST',//POST方式
		async:false,//非异步，为了传值给res
		dataType:'json',//返回jason类型
		success:function(data,status){
			var d=eval(data);//解析
			//console.info(d);
			res=d;
		},
		complete:function(xmlHttpRequest,status){
		  
		},
		error:function(){
		  
		}
		});
	return res;
}
//kendoui grid里的单选下拉框
function singleSelectEditor(container, options) {
	   $('<input data-bind="value:' + options.field + '"/>')
	   //$('<input data-text-field="relationKey" data-value-field="relation" data-bind="value:' + options.field + '"/>')
           .appendTo(container)
           .kendoDropDownList({
        	   //autoBind:false,
               //dataTextField: "relationKey",
               //dataValueField: "relation",
               dataSource: options.values,
               filter: "contains"
               //suggest: true,
               //optionLabel: "请选择"
           });
       //$('$<span class="k-invalid-msg" data-for="relationKey"></span>').appendTo(container);
 }
//kendoui grid里的多选下拉框
function multiSelectEditor(container, options) {
	   $('<input data-bind="value:' + options.field + '"/>')
       .appendTo(container)
       .kendoMultiSelect({
           //dataTextField: "key",
           //dataValueField: "typImpl",
           dataSource: options.values
       });
}
//kendoui grid里的日期选择器
function dateEditor(container, options){
	kendo.culture('zh-CN');
	$('<input data-text-field="'+options.field+'" data-value-field="'+options.field+'" data-bind="value:' + options.field + '" data-format="' + options.format + '"/>')
	.appendTo(container).kendoDatePicker({});
}
//kendoui grid里的日期选择器
function timeEditor(container, options){
	kendo.culture('zh-CN');
	$('<input data-text-field="'+options.field+'" data-value-field="'+options.field+'" data-bind="value:' + options.field + '" data-format="' + options.format + '"/>')
	.appendTo(container).kendoTimePicker({});
}
//获取当前日期 2016年05月02日19：04：32
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var hour=date.getHours();
    var minute=date.getMinutes();
    var second=date.getSeconds();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    if (hour >= 0 && hour <= 9) {
        hour = "0" + hour;
    }
    if (minute >= 0 && minute <= 9) {
        minute = "0" + minute;
    }
    if (second >= 0 && second <= 9) {
        second = "0" + second;
    }
    var currentdate = year + "年" + month + "月" + strDate
            + "日 " + hour + seperator2 + minute
            + seperator2 + second;
    return currentdate;
}
//选radio的时候同时更改按钮的名称
function clickCheckboxAndChangeSubmitBtnName(){
	var checkbox=document.getElementsByName("checkOptions");
	if(checkbox[0].checked){
		document.getElementById("submitBtn").innerHTML="提交";
	}
	else{
		document.getElementById("submitBtn").innerHTML="退回";
	}
}
//不允许上传的文件为office的格式
function checkFileName(o){
	var filename=o.value.split(".");
	var format=filename[filename.length-1];
	/*console.info(format);
	if(format.indexOf("doc")>-1||format.indexOf("xls")>-1||format.indexOf("ppt")>-1){
		alert("不允许上传"+format+"格式的文件！");
		o.value="";
		return false;
	}*/
}
function sleep(d){
	for(var t=Date.now();Date.now()-t<=d;);
}
//处理action submit执行后的跳转
function dealSuccess(entity){
	if(entity['result']=="ok"){
		toastr.success("提交成功，已发送给["+entity['dealer']+"]");
		setTimeout(function jump(){
			window.location.href="/ita/getNotify.action";
		},2000); 
	}
	else if(entity['result']=="ret"){
		toastr.success("退回成功");
		setTimeout(function jump(){
			window.location.href="/ita/getNotify.action";
		},2000); 
	}
	else if(entity['result']=="unallow"){
		toastr.error("权限不允许执行");
		/*setTimeout(function jump(){
			window.location.href="/ita/getNotify.action";
		},2000); */
	}
	else{
		console.info(entity);
		toastr.error("处理失败，请联系系统管理员");
		/*setTimeout(function jump(){
			window.location.href="/ita/getNotify.action";
		},2000); */
	}
	window.parent.myTodoTotalNum();
}

//处理action submit执行后的跳转
function dealResult(entity){
	//console.info(entity);
	if(entity['success']){
		if(entity['message']=="ok"||entity['message']=="ret"){
			toastr.success(entity['detail']);
		}
		else{
			toastr.error(entity['detail']);
		}
		setTimeout(function jump(){
			window.location.href="/ita/getNotify.action";
		},2000); 
	}
	else{
		//console.info(entity);
		toastr.error("处理失败："+entity['detail']+"，请联系系统管理员.");
		/*setTimeout(function jump(){
			window.location.href="/ita/getNotify.action";
		},2000); */
	}
	window.parent.myTodoTotalNum();
}

function dealStore(){
	toastr.success("保存成功，请到[我的申请]中查看");
	setTimeout(function jump(){
		window.location.href="/ita/getNotify.action";
	},2000); 
	window.parent.myTodoTotalNum();
}
/*function clickCheckbox(){
	var checkbox=document.getElementsByName("checkOptions");
	var submitBtn=document.getElementById("submitBtn");
	var submitBtn1=document.getElementById("submitBtn1");
	var returnBtn=document.getElementById("returnBtn");
	var returnBtn1=document.getElementById("returnBtn1");
	if(checkbox[0].checked){
	}
	else{
	}
}*/

var modal = $('.modal');
for(var i=0;i < modal.length;i++){
	var item = modal[i];
	$("#"+item.id).on('show.bs.modal',function(){
			clearTextAreaDefaultValue();
			autoModalSizeDiv(this);
	});
	$("#"+item.id).resize(function(){
		autoModalSizeDiv(this);
	});
}

//关闭当前tab页
$("#closeTabBtn").click(
	function(event) {
		window.parent.closeCurrentTab();
	}
);

function autoModalSizeDiv(item){
	var browser = navigator.appName;
	if(browser == "Microsoft Internet Explorer"){
		var browserVersion = navigator.appVersion;
		var versionArray = browserVersion.split(";");
		var version = versionArray[1].replace(" ","");
		if(version ==  'MSIE 8.0' || version ==  ' MSIE 8.0' || version ==  'MSIE8.0'
			|| version ==  'MSIE 7.0' || version ==  ' MSIE 7.0' || version ==  'MSIE7.0'){
			var imageDiv = $(".app-main");
			item.style.width = "870";
			var imageDivWidth = imageDiv[0].style.width || imageDiv[0].clientWidth|| imageDiv[0].offsetWidth || imageDiv[0].scrollWidth;
			var modalWidth = item.style.pixelWidth;
			item.style.marginLeft = (imageDivWidth - modalWidth+25)/2 +"px";
		}
	}
}
// 隐藏buttonBottom中的退回上一步按钮
function DisplayReturnBtn1() {
	//$("#returnBtn1").hide();

}
//解绑transfer默认操作，传参=2给goSubmit函数后台单独处理
function unbindAndReBingTransfer(){
	$("#transferDeal").unbind();
	$("#transferDeal").bind("click", function()
		{
			$("#choosePersonsModal").modal();
			initialChoosePersonData('inputTargetID','',true,3, '选择处理人');
		}
	);
	$("#selectPersonAndSubmitBtn").click(function(event) {
		event.preventDefault();
		var userSelect = document.getElementById("inputTargetID");
		if (userSelect.value == "") {
			toastr.error("转处理请选择一个人员");
			return false;
		} else {
			goSubmit('2');
		}
	});
}
//解绑returnBack默认操作，传参=4给goSubmit函数后台单独处理
function unbindAndReBingReturnBack(){
	$("#returnBackBtn").unbind();
	$("#returnBackBtn").bind("click", function()
		{
			goSubmit('4');
		}
	);
}