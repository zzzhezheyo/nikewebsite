require(["./requirejs.config"], () => {
	
	require(["jquery","header","cookie"], () => {
		$(function(){
			//判断是否有名为shopCar的cookie
			if(!($.cookie("shopCar"))){
				$(".emptyCar").css({
					"display":"block"
				})
				$(".haveCar").css({
					"display":"none"
				})
			}else{
				
				$(".emptyCar").css({
					"display":"none"
				})
				$(".haveCar").css({
					"display":"block"
				})
				let thiscookie = $.cookie("shopCar")
				let get = thiscookie.split(':')
				if(get.length > 2){
					for(let i = 0; i < get.length-2; i++){
						$(".trtwo").after(
							`<tr class="add">
								<th>
									<img src="/static/images/15409757545.png"/>
								</th>
								<th>
									<span class="allxx"></span>
								</th>
								<th>
									<span class="dj">
									</span>
								</th>
								<th>
									<div>
										<a class="prev" href="javascript:;">-</a>
										<span class="num">1</span>
										<a class="next" href="javascript:;">+</a>
									</div>
								</th>
								<th>
									<span class="xj">
									</span>
								</th>
								<th>
									<a class="del" href="javascript:;">X</a>
								</th>
							</tr>`
							
						)
					}
					addfun()
					delfn()
				}
				function addfun(){
					let allxx = $(".allxx")
					let dj = $(".dj")
					let xj = $(".xj")
					let num = $(".num")
					for(let i = 0; i < allxx.length; i++){
						let name = get[i].split('  ')[0]
						let banben = get[i].split('  ')[2]
						let color = get[i].split('  ')[1]
						let mon = get[i].split('  ')[3]
						let phnum = get[i].split('  ')[4]
						allxx[i].innerHTML = name+"("+banben+"  "+color+")"
						dj[i].innerHTML = mon
						xj[i].innerHTML = mon
						num[i].innerHTML = phnum
					}
					
				}
				addfun()
				//计算所有价格
				function allmoney(){
					//获取所有数量和单价
					let xj = $(".xj")
					let num = $(".num")
					let moneys = 0
					for(let i = 0; i < num.length; i++){
						let jg = Number(xj[i].innerHTML.split('￥')[1])
						let sl = Number(num[i].innerHTML)
						moneys += jg*sl
					}
					$("#zj").text("￥"+moneys)
				}
				allmoney()
				//删除按钮
				function delfn(){
					let dels = $(".del")
					for(let i = 0; i < dels.length; i++){
						dels[i].onclick = function(){
							this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)
							allmoney()
							cook()
						}
						
					}
					
				}
				delfn()
				//数量增减
				function adddel(){
					let dels = $(".del")
					let nums = $(".num")
					let prevs = $(".prev")
					let nexts = $(".next")
					for(let i = 0; i < prevs.length; i++){
						
						prevs[i].onclick = function(){
							let thisnum = Number(nums[i].innerHTML)
							thisnum--
							if(thisnum == 0){
								dels[i].onclick()
								allmoney()
								cook()
							}else{
								nums[i].innerHTML = thisnum
								allmoney()
								cook()
							}
						}
						nexts[i].onclick=function(){
							let thisnum = Number(nums[i].innerHTML)
							thisnum++
							nums[i].innerHTML = thisnum
							allmoney()
							cook()
						}
					}
				}
				adddel()
				//存cookie
				function cook(){
					let allxx = $(".allxx")
					let dj = $(".dj")
					let num = $(".num")
					let cookstr = null
					for(let i = 0 ; i < dj.length; i++){
						let all= allxx[i].innerHTML
						let name = all.split('(')[0]
						let banben = all.split('(')[1].split('  ')[0]
						let colors = all.split('(')[1].split('  ')[1].split(')')[0]
						
						if(i >= 1){
							cookstr += name + "  " +colors+ "  " +banben+ "  "+dj[i].innerHTML+"  "+num[i].innerHTML+":"
						}else{
							cookstr = name + "  " +colors+ "  " +banben+ "  "+dj[i].innerHTML+"  "+num[i].innerHTML+":"
						}
					}
					$.cookie("shopCar",cookstr, {path: "/"});
				}
				cook()
				$("#gopay").on("click",function(){
					//检测是否登陆
					if($.cookie("username") != undefined){
						alert("有钱吗你就买")
					}else{
						alert("请先登陆！")
						location.href = "ml/login.html";
					}
				})
			}
			
		})
	})
})


// e=e||event;

// 				var target = e.target||e.srcElement;
// 				console.log(tr);
// 				//找到当前的tr
// 				var tr = target.parentNode.parentNode;
// 				if(target.className === "delBtn"){
// 					if(confirm("您真的不买我了吗？")){
// 						tr.parentNode.removeChild(tr);
// 						//如果被选中，减去
// 					}
// 					// reprice();
// 				}else if(target.className==="reduce"){
// 					if(value.num=<1){
// 						value.num =1;
// 					}else{
// 						value.num--;
// 					}
// 					$(".renum").text(value.num);
// 					// reprice();
// 				}else if(target.className==="add"){
// 					value.num++;
// 					value.num = value.num;

// 					$(".renum",tr).text(value.num);
					
// 					// reprice();
// 				}


// 			})
// 			//遍历获取价格
// 			// function reprice(){
// 			// 	var sum = 0 ;
// 			// 	var newArr = [];
// 			// 	var tr =$("tr",tbody);
// 			// 	/*console.log(tr.length);*/
// 			// 	for(var i=0;i<tr.length;i++){
// 			// 		var x1 = $("span",tr[i])[1].innerHTML;
// 			// 		var x2 = value.num;
// 			// 		console.log(x1);
// 			// 		console.log(x2);
// 			// 	}
// 			// }				