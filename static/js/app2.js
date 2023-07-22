/*新增插件*/
$(function(){
	var cname="";
	$("#topnav li").hover(function(){
		cname=$(this).attr("class");
		if(!cname){$(this).addClass("hover");}
		$("dl",this).show();
	},function(){
		$("dl",this).hide();
		if(!cname){$(this).removeClass("hover");}
	});

	//返回顶部
	var top=$("#backtop");
	$(window).scroll(function()
	{
		if($(window).scrollTop()>150)
		{
			top.slideDown();
		}
		else
		{
			top.slideUp();
		}
	});
	})