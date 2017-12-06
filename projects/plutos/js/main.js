$(function() {
	$('.header__menu-but').click(function(){
		$('.drop-down-menu').show(200);
		return false;
	});
	$(window).click(function() {
		$('.drop-down-menu').hide(200);
	})
});