//业务逻辑
require(["./requirejs.config"], () => {
	require(["jquery", "det", "url", "header","footer","cookie"], ($, item, url) => {
		item.init(url.baseUrlRap+"/detail");
		$(function(){
			//获取当前的路径
			var localUrl = decodeURI(document.location.href);
			//截取字符串
			var getstr = localUrl.substr(localUrl.indexOf('=')+1);
			/*console.log(getstr);*/
			var get = getstr.split('+');
			var id = get[0];
			console.log(id);
			var title = get[1];
			var price = get[2];
			var picture = $(".top").find('img');
		
			$("h3").text(title);
			$(".price").text("售价"+" : "+"$"+price);

			//点击按钮，构造数据对象，push到数组里面，构造成一个json
			 
			 var size;
			 $(".large").on("click",function(e){
			 	e=e||window.event;
			 	var target1 = e.target||e.srcElement;
			 	// $("li",$(".large")).css('background-color','red');
			 	if(target1.className = "large"){
			 		size=target1.innerHTML;
			 		
			 	}

			 })

			// //按钮监听事件
			 $(".addCart").on("click",function(e){
			/* $(function(e){	*/
			 	e = e ||window.event;
			 	if(size==null){
			 		alert("请选择大小");
			 	}else{
			 		window.location.href="/html/cart.html";
			 		//获取事件源
				var target = e.target||e.srcElement;
				var obj = {
					id : id,
					/*picture:picture,*/
					size:size,
					title: title,
					price: price,
					num: 1
				}
				var objString = JSON.stringify(obj);
				console.log(objString);
				if($.cookie("cart")){
			 		var thiscart = $.cookie("cart");
			 		var allcart = thiscart+" "+objString;
			 		// console.log(thiscart);
			 		
			 		$.cookie("cart", allcart, { path : '/'});	
			 	}else{
					var allcart = objString;
					$.cookie("cart", allcart, { path : '/'});
//					location.href = "mlyCar.html";
				}
				console.log(allcart);
				
			 

			 	}
				
			 	})
		})
	})
})