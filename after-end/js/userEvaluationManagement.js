$(function(){
	$("button#audited").click(function(){	/*点击“未审核”按钮*/
		$("input[value='通过']").replaceWith("<input class='btn btn-default btn-danger' type='button' value='删除' />");
	});
	
	$("button#notReviewed").click(function(){	/*点击“已审核”按钮*/
		$("input[value='删除']").replaceWith("<input class='btn btn-default btn-success' type='button' value='通过' />");
	});
});


