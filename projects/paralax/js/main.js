$(function() {
	$(window).scroll(function() {
		var st = $(this).scrollTop();
		console.log(st);
		$('.paralax img').css({
			"transform" : "translate(0%, " + st/20 + "%)"
		});
	});
});