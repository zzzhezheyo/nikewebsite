//业务逻辑
require(["./requirejs.config"], () => {
	//引入index需要依赖的模块
	require(["jquery","template", "item", "url","header","footer"], ($,template, item, url) => {
		$(function(){
			//$(".nav").load("/html/details.html");
			//获取id
			let arrsearch = location.search.slice(1).split("=");
			let searchObj = {};
			searchObj[arrsearch[0]] = arrsearch[1];
			$.ajax({
				url:url.baseUrlRap+"/detail",
				type:"GET",
				data:searchObj,
				datatype:"json",
				success:function(res){
					let list = res.res_data;
					// //通过模板引擎渲染结构
					 let html = template("detail-template", {list});
							
					$(".detail").html(html);
				}
			})

		})
		item.init(url.baseUrlRap+"/detail");
	})

})