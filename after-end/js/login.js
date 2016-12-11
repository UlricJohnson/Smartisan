$(function(){
//	正则
	var regUsrAccount = /^1[34578]\d{9}$/;	//管理员账号为手机号
	var regUsrPsw = /\w{8}/;	//密码字母数字共8位
	
	$("input.form-control").each(function(i){
		if (i == 0){	//账号
			$(this).change(function(){
				var usrAcnt = $(this).val();
				if(!usrAcnt.match(regUsrAccount)){
					alert("请输入11位数的手机号！");
				}
			});
			$(this).blur(function(){
				if( $(this).val() == "" ){
					alert("请输入账号！");
				}
			});
		}else if(i == 1){	//密码
			$(this).change(function(){
				var usrPsw = $(this).val();
				if(!usrPsw.match(regUsrPsw)){
					alert("请输入8位的密码！");
				}
			});
			$(this).blur(function(){
				if( $(this).val() == "" ){
					alert("请输入密码！");
				}
			});
		}
	});

});


//	function test(){ 
//	   	var text="?test=1&ww=2&www=3";
//	    var re = /^\?(\w{1,}=\w{1,}&){1,}\w{1,}=\w{1,}/;//  \?表示配置问号?
//	   //  var   re =new RegExp( "^\\?(\\w{1,}=\\w{1,}&){1,}\\w{1,}=\\w{1,}");//  \\?表示配置问号?
//	    var result=  re.exec(text); 
//	    if(result){
//	        alert("ok"); 
//	        alert(result);        
//	        alert(result[0]+",0");
//	        alert(result[1]+",1");     
//	     }else{
//	      alert("err");  
//	     }   
//    };