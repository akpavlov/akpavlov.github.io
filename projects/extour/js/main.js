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
		if ($('.header').hasClass('header--sm-fixed')) {
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

	// Слайдер вы здесь еще не были

	$(".here__slider").owlCarousel({

		loop: true,
		margin: 30,
		nav: true,
		dots: false,
		autoWidth: true,
		navText: ['', '']
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

	//////////////////////// Прокрутка ////////////////////////

	var scrollTop = $(window).scrollTop();
	$(window).scroll(function() {

		// Шапка для мобильной версии

		if ($(window).scrollTop() > $('.header').outerHeight()) {
			$('.header').addClass('header--sm-fixed');
			if (mobileMenuOpened()) {
				$('.header').css('left', '255px');	
			}
		} else {
			$('.header').removeClass('header--sm-fixed');
			$('.header').css('left', '0');
		}
		if ($(window).scrollTop() > scrollTop) {
			if (!mobileMenuOpened()) {	
				if ($('.header').hasClass('header--sm-fixed')) {
					$('.header').addClass('sm-hide');
				}
			}
		} else {
			$('.header').removeClass('sm-hide');
		}
		scrollTop = $(window).scrollTop();

		setHeaderTransparent();
	});

	function setHeaderTransparent() {
		if (($(window).scrollTop() > $('.city-banner').outerHeight()) || 
			($('.submenu.show').length > 0)) {
			$('.header--transparent').addClass('header--not-sm-fixed');
			$('.header--transparent .header__menu-md-box').removeClass('header__menu-md-box--bg');
		} else {
			$('.header--transparent').removeClass('header--not-sm-fixed');
			$('.header--transparent .header__menu-md-box').addClass('header__menu-md-box--bg');
		}
	}

	setHeaderTransparent();

	function mobileMenuOpened()
	{
		return ($('.mobile-menu-button--sm').hasClass('mobile-menu-button--close'));
	}

	function isMobile() {
		return ($(window).width() < 760);
	}

	////////////////////// submenu ///////////////////////

	$('.submenu-open').click(function() {
		if (!isMobile()) {
			var submenuClass = $(this).data('submenu');
			submenuToggle('.' + submenuClass);
			return false;
		}
	});

	function submenuToggle(submenuSelector) {
		var isShow = $(submenuSelector).hasClass('show');
		$('.submenu.show').removeClass('show');
		if (!isShow) {
			$(submenuSelector).addClass('show');
			$(submenuSelector).css('top', $('.header').outerHeight());
		}
	}

	// submenu--cities

	$('.submenu--cities .submenu__close').click(function() {
		submenuToggle('.submenu--cities');
	});

	// submenu--more

	$('.submenu--more .submenu__close').click(function() {
		submenuToggle('.submenu--more');
	});

	$('.submenu--more>div>ul>li>a').click(function(event) {
		if (event.target != event.currentTarget) {
			exit;
		}
		var isShow = !($(this).parent().find('ul').hasClass('show'));
		$('.submenu--more>div>ul>li>ul.show').removeClass('show');
		if (isShow) {
			$(this).parent().find('ul').addClass('show');			
		}

		// $(this).parent().find('ul').toggleClass('show');
		return false;
	});

	///////////////////// end of submenu //////////////////////

	// datetimepicker

	$('#dates').datepicker({
		range: true,
		multipleDatesSeparator: ' по '
	});

	// Расширенный поиск

	$('.search__filter-button').click(function() {
		$('.search-filter').toggleClass('visible');
	});

	// Открытие модального окна

	function showModal(selector) {
		$(selector).addClass('visible');
		$('.overlay').addClass('visible');
	}

	// Закрытие всех модальных окон

	function closeModal() {
		$('.modal.visible').removeClass('visible');
		$('.overlay.visible').removeClass('visible');
	}

	// Кнопка закрытия модального окна

	$('.modal__close-button').click(function() {
		closeModal();
	});

	// Закрытие модального окна по клику вне модального окна

	$('.overlay').click(function(event) {
		if (event.target == event.currentTarget) {
			closeModal();
			return false;
		}
	});

	// Вход

	$('.header__login').click(function() {
		showModal('.login');
		return false;
	});

	// Стать партнером

	$('#to-partner').click(function() {
		showModal('.topartner');
		return false;
	})

});

