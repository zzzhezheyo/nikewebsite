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
	}
	return new Header();
})