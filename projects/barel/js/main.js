$(function() {
	$('.mobile__menu-button').click(function() {
		$('.main-menu').toggle(200);
		$('.main-menu').toggleClass('mobile');
		return false;
	});

	$(window).click(function() {
		if ($('.main-menu').hasClass('mobile')) {
			$('.main-menu').removeClass('mobile');
			$('.main-menu').hide(200);
		}
	})

	$('.modal-img').click(function() {
		$('.modal-img').removeClass('visible');
	});

	$('.portfolio__list a').click(function() {
		showImg($(this).attr('data-img'));
	});

	function showImg(fileName) {
		$('.modal-img img').attr('src', 'images/' + fileName);
		$('.modal-img').addClass('visible');
	}

	
});