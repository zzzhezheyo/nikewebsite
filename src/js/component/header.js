define(["jquery"], () => {
	class Header{
		constructor(){
			this.init();
		}
		init(){
			//加载header.html
			new Promise((resolve, reject) => {
				$("header").load("/html/component/header.html", () => {
					resolve();
				})
			}).then(() => {
				this.nav();
				this.star();
			})
		}
		nav(){
			var titleTop = $('.inner').offset().top;
    
		    $(document).on('scroll',function(){
		      if($(document).scrollTop() > titleTop){
		         $('.inner').css({
		             "position":"fixed",
		             "top":0
		     })
		    }else{
		 
		       $('.inner').css({
		           "position":"relative",
		           "top":0
		       })
		    }
		  })
		}

		star(){
			$("#ho1").hover(function(){
				$(".second").css("display","block");
			},function(){
				$(".second").css("display","none");
			})
			$("#ho2").hover(function(){
				$(".second").css("display","block");
			},function(){
				$(".second").css("display","none");
			})
		}

		
	}
	return new Header();
})