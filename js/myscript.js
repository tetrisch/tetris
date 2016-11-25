// JavaScript Document

$(function(){		
			$("[data-toggle=tooltip]").tooltip();
		
			
			$("#to-top").hide();
			
			//スクロールが十分されたら表示，戻ったら非表示
			$(window).scroll(function(){
				$("#pos").text($(this).scrollTop());
				
				if($(this).scrollTop() > 60){
					$("#to-top").fadeIn();
				}else{
					$("#to-top").fadeOut();
				}
				
			});
			
			//to-topがクリックされたら上に戻る
			
			$("#to-top a").click(function(){
				$("body,html").animate({
						scrollTop:0	
				},500	);
				return false;
				
			});
			
	

});