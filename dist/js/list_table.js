/* $.ajax({
	type:'get',//HTTP请求类型
	data:{"tid":"13","page":"1","limit":"9"},
	url:"http://47.104.244.134:8080/goodsbytid.do",
	success:function(data){
		
		console.log(data.data[0].picurl);
		console.log(data.data.length);
		for(let i=0;i<data.data.length;i++){
			
			var imgs = data.data[i].picurl;
			console.log(imgs);
			var oImg = `<img class="oimg" src=${imgs}>`;
			console.log(data.data[i].picurl);
			$("#list_shop").append(oImg);
			
		}
// 		var str="";
// 		str +=
	}
}); */

$(function(){
	$.ajax({
		type:"get",
		url:"http://47.104.244.134:8080/goodsbytid.do",
		data:{
			"tid":13,
			"page":1,
			"limit":13,
		},
		success:function(rel){
			console.log(rel.data);
			for(let i=1;i<rel.data.length;i++){
				
				var $figure = $("<figure class='shangpi'></figure>");//每个商品的容器
				var $img = `<img src=${rel.data[i].picurl}>`;//商品图片
				var $a = `<a href="#">${rel.data[i].name}</a>`;//商品名字
				var $span = `<span>￥${rel.data[i].price}</span>`;//价格
				var $submit =`<input type="button" id=${rel.data[i].id} class="submit" value="加入购物车">`;//准备转入详情页的按钮
				$figure.append($img);
				$figure.append($a);
				$figure.append($span);
				$figure.append($submit);
				$("#list_shop").append($figure);
			}
			for(let j=0;j<$("img").length;j++){//每个按钮添加事件
				$("img").eq(j).on("click",function(){
					var aid=$("img").eq(j).attr("id");
					window.location.href = 'http://127.0.0.1:8848/miya/fangdajing.html';
				});
			}
		}
	});
	
});
