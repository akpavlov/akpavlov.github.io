$(function() {

	// Мобильное меню для планшета

	$('.header__menu ul').clone().appendTo('.header__menu-md');
	$('.mobile-menu-button--md').click(function() {
		$('.header__menu-md-box').toggleClass('md-show');
		$(this).toggleClass('mobile-menu-button--close');
	});

	// Мобильное меню для телефона

	$('.header__menu ul').clone().prependTo('.header__menu-sm');
	$('.header__user').clone().removeClass('sm-hide').prependTo('.header__menu-sm');
	$('.mobile-menu-button--sm').click(function() {
		if ($(this).hasClass('mobile-menu-button--close')) {
			closeHeaderMenu();
		} else {
			openHeaderMenu();
		}
	});

	function openHeaderMenu()
	{
		$('.header__menu-sm').animate({
			left: 0
		});
		$('body').animate({
			left: 255
		});
		$('body').addClass('no-scroll');
		if ($('.header').hasClass('sm-fixed')) {
			$('.header').css('left', '255px');
		}
		$('.mobile-menu-button--sm').toggleClass('mobile-menu-button--close');
	}

	function closeHeaderMenu()
	{
		$('.header__menu-sm').animate({
			left: -255
		});
		$('body').animate({
			left: 0
		});
		$('body').removeClass('no-scroll');
		$('.header').css('left', '0');	
		$('.mobile-menu-button--sm').toggleClass('mobile-menu-button--close');
	}

	// Мобильное меню (закрытие на тачскрине)

	var pageX = 0;

	$('.header__menu-sm').on('touchstart', function(event) {
		if (event.originalEvent.touches[0].pageX) {
			pageX = event.originalEvent.touches[0].pageX;
		}
	});

	$('.header__menu-sm').on('touchmove', function(event) {
		if (event.originalEvent.touches[0].pageX) {
			if (pageX - event.originalEvent.touches[0].pageX > 10) {
				pageX = 0;
				closeHeaderMenu();
			}
		}
	});

	// Главный слайдер

	$(".city-banner__slider").owlCarousel({
		items: 1,
		loop: true
	});

	// Слайдер выбора диапазона цены

	$( "#price-slider" ).slider({
		range: true,
		min: 0,
		max: 500,
		values: [ 75, 300 ],
		slide: function( event, ui ) {
        	$( "#price-begin" ).val(ui.values[0]);
        	$( "#price-end" ).val(ui.values[1]);
        	$('.ui-slider-handle').text(ui.values[0]);
			$('.ui-slider-handle+.ui-slider-handle').text(ui.values[1]);
		}
    });
    $("#price-begin").val($("#price-slider").slider("values", 0));
	$("#price-end").val($("#price-slider").slider("values", 1));

	$('.ui-slider-handle').text($("#price-slider").slider("values", 0));
	$('.ui-slider-handle+.ui-slider-handle').text($("#price-slider").slider("values", 1));


	// Количество человек
	
	$('.filter__person-count-plus').click(function() {
		var count = parseInt($('.filter__person-count').val()) + 1;
		$('.filter__person-count').val(count);
	});
	$('.filter__person-count-minus').click(function() {
		var count = parseInt($('.filter__person-count').val()) - 1;
		if (count < 1) {
			count = 1;
		}
		$('.filter__person-count').val(count);
	});

	// Фильтр

	$('.filter-header').click(function() {
		$(this).toggleClass('filter-header--opened')
		$('.filter').toggleClass('sm-hide')
	});

	// Самые популярные экскурсии, копирование рейтинга и заголовка

	$('.popular__item').each(function(index, element) {
		var raiting = $(element).find('.popular__raiting-box').clone();
		raiting.removeClass('lg-show');
		raiting.addClass('lg-hide');
		raiting.appendTo($(element).find('.popular__cover'));

		var title = $(element).find('h3').clone();
		title.removeClass('sm-hide');
		title.addClass('sm-show');
		title.prependTo($(element).find('.popular__cover'));
	});

	// Слайдер с гидами

	$(".guides__slider").owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		dots: false,
		navText: ['', ''],
		autoWidth: true
	});

	// Слайдер отзывы
	
	$(".testimonials__slider").owlCarousel({
		items: 1,
		autoplay: true,
		autoplayTimeout: 15000,
		loop: true
	});

	// Анимации (эффекты)

	wow = new WOW({
		offset: 0,          // default
		mobile: false,       
		live: true        // default
	});
	wow.init();

	// Прокрутка

	var scrollTop = $(window).scrollTop();
	$(window).scroll(function() {
		if ($(window).scrollTop() > $('.header').outerHeight()) {
			$('.header').addClass('sm-fixed');
			if (mobileMenuOpened()) {
				$('.header').css('left', '255px');	
			}
		} else {
			$('.header').removeClass('sm-fixed');
			$('.header').css('left', '0');
		}
		if ($(window).scrollTop() > scrollTop) {
			if (!mobileMenuOpened()) {	
				if ($('.header').hasClass('sm-fixed')) {
					$('.header').addClass('sm-hide');
				}
			}
		} else {
			$('.header').removeClass('sm-hide');
		}
		scrollTop = $(window).scrollTop();
	});

	function mobileMenuOpened()
	{
		return ($('.mobile-menu-button--sm').hasClass('mobile-menu-button--close'));
	}

});

