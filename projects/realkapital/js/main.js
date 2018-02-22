$(function() {

	// Popup

	$('.show-lot').click(function() {
		var lotNum = $(this).data('lot');
		showLot(lotNum);
		return false;
	});

	$('.popup-lot').click(function() {
		hideLot();
	});

	$('.single').click(function() {
		return false;
	});

	$('.single__close').click(function() {
		hideLot();
	});

	function showLot(lotNum) {
		$('#lot-' + lotNum).addClass('popup-lot--visible');
		$('html').addClass('noscroll');
	};

	function hideLot() {
		$('.popup-lot--visible').removeClass('popup-lot--visible');
		$('html').removeClass('noscroll');	
	}

	// Images on popup

	$('.single__small-image').click(function() {
		$(this).parent().find('.single__small-image--active').removeClass('single__small-image--active');
		$(this).addClass('single__small-image--active');
		setImg($(this).parent().parent().find('.single__big-image'));
	});

	function setImg(jQImgElem) {
		var img = jQImgElem.parent().find('.single__small-image--active').data('img');
		jQImgElem.attr('src', 'images/' + img);
	}

	$('.single__big-image').each(function(index) {
		setImg($(this));
	});

	// Images on static

	$('.images__small-image').click(function() {
		$(this).parent().find('.images__small-image--active').removeClass('images__small-image--active');
		$(this).addClass('images__small-image--active');
		setImgStatic($(this).parent().parent().find('.images__big-image img'));
	});

	function setImgStatic(jQImgElem) {
		var img = jQImgElem.parent().parent().find('.images__small-image--active').data('big-img');
		jQImgElem.attr('src', img);
	}

	setImgStatic($('.images__big-image img'));
});