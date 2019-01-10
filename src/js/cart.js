 //业务逻辑
 require(["./requirejs.config"], () => {
 	//引入index需要依赖的模块
 	require(["jquery", "header","footer","cookie"], () => {
 		 $(function(){
		// 	$(".create").load("/html/cart.html");

		 	var myCart = $.cookie('cart');

		 	console.log("wo"+myCart);

		 	//table
		 	var box = $("#box");
		 	var	table = $("table",box)[0];
		 	var tbody = $("tbody", box)[0];
		 	/*var arr = JSON.parse(tools.cookie("cart"));*/
		 	var sumAll= $("b",$("tfoot",box)[0])[0];
		 	sumAll.innerHTML = 0;

			var str = "";
			var arr=$.cookie("cart")?($.cookie("cart")):[];
			
			var getstr = arr.split(" ");
	
			var arr=[];
			for(var i=0;i<getstr.length;i++){
				/*var get = JSON.parse(getstr[i]);*/
				var get = getstr[i];
				var getobj = JSON.parse(get);
				console.log(getobj);
				arr.push(getobj);
			}
			console.log(arr);
			for(var value of arr){
				for(var key in value){
					value[key]=decodeURIComponent(value[key]);
				}
				str +='<tr>'+
					  '<td><input type="checkbox" class="check" /></td>'+
					  '<td><span class="Ttitle">'+value.title+'</span></td>'+
					  '<td><span class="Tprice">'+value.price+'</span></td>'+
					  '<td><span class="Tnum">'
					  		
					  '</span></td>'+
					  '<td>'+
		            	'<a href="javascript:;" class="delBtn">删除</a>'+
		             '</td>'+
		             
	       		  '</tr>'
			}
			tbody.innerHTML =str;
			
			
			$("table").on("click",function(e){
				
			})



 		 })
 	})

 })