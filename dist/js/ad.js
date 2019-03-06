$(function () {            
            //绑定滚动条事件
              //绑定滚动条事件
            $(window).bind("scroll", function () {
                var sTop = $(window).scrollTop();
                var sTop = parseInt(sTop);
                if (sTop >= 200) {
                    if (!$(".right_p").is(":visible")) {
                        try {
                            $(".right_p").slideDown();
                        } catch (e) {
                            $(".right_p").show();
                        }                      
                    }
                }
                else {
                    if ($(".right_p").is(":visible")) {
                        try {
                            $(".right_p").slideUp();
                        } catch (e) {
                            $(".right_p").hide();
                        }                       
                    }
                } 
            });
        })
$(".side-top:not(:last)").on("click", function() {
	var index = $(this).index();
	var _top = $(".side-top").eq(index).offset().top + 100;
	$("html, body").stop().animate({
		scrollTop: _top
	}, 400);
});
$(".side-top:last").click(function() {
	$("html, body").animate({
		scrollTop: 0
	}, 500);
});
