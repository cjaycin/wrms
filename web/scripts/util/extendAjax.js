;(function($){
	var _ajax = $.ajax;
	$.ajax=function(opt){
		var fn={
				error:function(XMLHttpRequest,textStatus,errorThrown){},
				successs:function(data,textStatus){}
		};
		if(opt.error){
			fn.error=opt.error;
		}
		if(opt.successs){
			fn.successs=opt.successs;
		}

		var _opt=$.extend(opt,{
			error:function(XMLHttpRequest,textStatus,errorThrown){
				fn.error(XMLHttpRequest,textStatus,errorThrown);
			},
			successs:function(data,textStatus){
				fn.success(data,textStatus);
			},
			beforeSend:function(XHR){
				kendo.ui.progress($('#loading'),true);
				autoResizeBodyScroller();
			},
			complete:function(XHR,TS){
				setTimeout(function(){
					kendo.ui.progress($('#loading'),false);
					}, 4000);

			}
		});
		_ajax(_opt);
	};

})(jQuery);