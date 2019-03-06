$(function() {
	//绑定滚动条事件
	//绑定滚动条事件
	$(window).bind("scroll", function() {
		var sTop = $(window).scrollTop();
		var sTop = parseInt(sTop);
		if (sTop >= 200) {
			if (!$(".left_p").is(":visible")) {
				try {
					$(".left_p").slideDown();
				} catch (e) {
					$(".left_p").show();
				}
			}
		} else {
			if ($(".left_p").is(":visible")) {
				try {
					$(".left_p").slideUp();
				} catch (e) {
					$(".left_p").hide();
				}
			}
		}
	});
})


$(".PubBtnHover").mouseover(function (){  
            $(".wxmore").show();  
        }).mouseout(function (){  
            $(".wxmore").hide();  
        });  