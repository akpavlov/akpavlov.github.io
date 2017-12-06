$(function() {
	var navPos, winPos, navHeight;
	navPos = $('.v2-navbar').offset().top;
	navHeight = $('.v2-navbar').outerHeight();

	$('<div class="v2-clone-navbar">').insertBefore('.v2-navbar').css('height', navHeight);

	setMenu();

	$(window).scroll(setMenu);
	$(window).resize(setMenu);

	// Слайдер
	$('.v2-brend-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 3,
		variableWidth: true
  	});

	// Кнопка Вверх (плавный скроллинг)
	$('.v2-to-top').click(function() {
		$('body, html').animate({scrollTop: $('#v2-header').position().top}, 1000);
	});

	// Корзина
	$('.v2-cart-title').click(function() {
		$('.cart-block-body').toggle(300);
	});

	function setMenu() {
		winPos = $(window).scrollTop();
		var cartLeft;
		// Меню
		if (winPos > navPos) {
			$('.v2-navbar').addClass('v2-navbar-fixed v2-navbar-shadow');
			$('.v2-nav>ul').removeClass('v2-center');
			$('.v2-clone-navbar').show();
			$('.v2-cart-block').addClass('v2-cart-block-fixed')
			cartLeft = $('.v2-navbar .v2-container').offset().left
						+ $('.v2-navbar .v2-container').width()
						-$('.v2-cart-block').width() - 40;
			$('.v2-cart-block').css('left', cartLeft);
			
		} else {
			$('.v2-navbar').removeClass('v2-navbar-fixed v2-navbar-shadow');
			$('.v2-nav>ul').addClass('v2-center');
			$('.v2-clone-navbar').hide();
			$('.v2-cart-block').removeClass('v2-cart-block-fixed')
		}

		// Кнопка Вверх (показываем/скрываем)
		if (winPos > 500) {
			$('.v2-to-top').addClass('v2-to-top-active');
		} else {
			$('.v2-to-top').removeClass('v2-to-top-active');
		}

	};

	

});