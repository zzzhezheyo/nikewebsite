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
				/*console.log(getobj);*/
				arr.push(getobj);
			}
			
			for(var value of arr){
				for(var key in value){
					value[key]=decodeURIComponent(value[key]);
				}
				var num = value.num;
				// console.log(num);
			str +='<tr class="new">'+
					  '<td><input type="checkbox" class="check"/></td>'+
					  '<td><span>'+ value.size +'</span></td>'+
					  '<td><span>'+value.title+'</span></td>'+
					  '<td><span>'+Number(value.price)+'</span></td>'+
					  '<td><a href="javascript:;" class="prev">-</a><span class="num">'+
					  num+
					  '</span><a href="javascript:;" class="next">+</a></td>'+
					  '<td>'+
		            	'<a href="javascript:;" class="delBtn">删除</a>'+
		             '</td>'+
		             
	       		  '</tr>'
			}
			tbody.innerHTML=str;
	

			var n = 0; // 记录单选按钮被选中的数量

			$("table").on("click",function(e){
				e = e || event;
				//找到事件源
				var target = e.target || e.srcElement;
				//找到当前tr
				var tr = target.parentNode.parentNode;
				var same1 = value.title;
				var same2 = $("span",tr)[1].innerHTML;
				var same3 = value.size;
				var same4 = $("span",tr)[0].innerHTML;
				// console.log(tr);
				if(target.className === "delBtn"){
					if(confirm("您真的不买我了吗？")){
						tr.parentNode.removeChild(tr);
						//判断当前一行是否被选中
						var check = $(".check", tr)[0];
						//如果被选中，n减一
						if(check.checked) n--;
					}
					reprice();
				}else if(target.className === "check"){
					target.checked? n++ : n--;
					var aChecked = $(".check",box);
					reprice();
				}else if(target.className === "prev"){
					// console.log(tr);
					// console.log($("span",tr)[3].html;		
					console.log(value.title);
					console.log($("span",tr)[1].innerHTML);
					console.log(same3);
					console.log(same4);
					if(num>1){
						num--;
					}

					// if(same1 == same2&&same3==same4){
						reprice();
					// }
					
				}else if(target.className === "next"){
					if(num>0){
						num++;
						// console.log(num);
					}
					// if(same1 == same2&&same3==same4){
						reprice();
					// }
				}

			})

						//
			function reprice(){
				var sum=0;
				var newArr = [];
				var tr = $("tr",tbody);
				for(var i=0;i<tr.length;i++){
					var check = $(".check",tr[i])[0];
					if(check.checked===true){
						var x1 = Number($("span",tr[i])[2].innerHTML);
						var x2 = num;
						// console.log(x1);
						// console.log(x2);
						var trMoney=x1*x2;
						sum+=trMoney;
						// console.log(sum);
					}
					//重新存cookie
					// tr.find('span').css('background-color', 'red');

					var num1 = tr.find(".num").html(num);
					//console.log(num1);

					var obj={
						size:$("span",tr[i])[0].innerHTML,
						title:$("span",tr[i])[1].innerHTML,
						price:$("span",tr[i])[2].innerHTML,
						num:num
					};

					for(var key in obj){
						obj[key]=obj[key];
					}

					var objString = JSON.stringify(obj);

					$.cookie("cart", objString, { path : '/'});
				}
				sumAll.innerHTML=sum;
			}

			// console.log($.cookie('cart'));

 		 })
 	})

 })
