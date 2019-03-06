//选择包含ul里面的li
$("li").has("ul") //给有子菜单的li添加一个图标
	.click(function(e) {
		e.stopPropagation(); //防止事件冒泡到DOM树上，也就是不触发的任何前辈元素上的事件处理函数。
		if ($(e.target).children().length) {
			$(this).children().slideToggle();
			$(this).toggleClass("minus");
			
		}
	})

/* $(function(){
            $('li:has(ul)').click(function(event){
                if(this == event.target){//此时要加上这个判断条件，否则会出现错乱
                    if($(this).children().is(':hidden')){//如果点击的子元素已经隐藏
                        $(this).css('list-style-image',"url(../images/minus.gif)")
                    }else {
                        $(this).css('list-style-image',"url(..images/plus.gif)")
                    }
                    $(this).children().toggle("slow");//toggle的用法
                }
            });
            $('li:not(:has(ul))').css('list-style','none')
        }) */