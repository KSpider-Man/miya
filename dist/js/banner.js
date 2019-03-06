$(function() {
	var index = -1;
	var pic = $('.pic>img');
	var length = pic.length;
	var transform = function() {
		if (index === length - 1) {
			index = 0;
		} else {
			index++;
		}
		pic.eq(index - 1).fadeOut(2000);
		pic.eq(index).fadeIn(2000);
	};
	transform();
	setInterval(transform, 3000);
});
