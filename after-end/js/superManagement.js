
$(function(){
	$("button.btn-danger").click(function(){	//点击红色“编辑”按钮弹出
		$("#editMsg").css({"display":"block"});
	});
	
	$("#back").css({	//灰色背景div
		width:$(document).width() + "px",
		height:$(document).height() + "px"
	});
	 
	$("button.close").click(function() {	//点击关闭按钮
		$("#editMsg").css({"display":"none"});
	});
	 
	 $("input.btn-success[value='完成']").click(function(){//点击“完成”按钮
	 	$("#editMsg").css({"display":"none"});
	 });
});


