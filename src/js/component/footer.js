define(["jquery"], () => {
	class Footer{
		constructor(){
			this.init();
		}
		init(){
			//加载header.html
			new Promise((resolve, reject) => {
				$("footer").load("/html/component/footer.html", () => {
					resolve();
				})
			}).then(() => {
				/*this.footerPosition();*/
			})
		}

		/*footerPosition(){
			$("footer").removeClass("fixed-bottom");
	        var contentHeight = document.body.scrollHeight,//网页正文全文高度
	            winHeight = window.innerHeight;//可视窗口高度，不包括浏览器顶部工具栏
	        if(!(contentHeight > winHeight)){
	            //当网页正文高度小于可视窗口高度时，为footer添加类fixed-bottom
	            $("footer").addClass("fixed-bottom");
	        } else {
	            $("footer").removeClass("fixed-bottom");
	        }
		}
		footerPosition();*/
	}
	return new Footer();
})