$(function() {

	// Мобильное меню
	$('.middle-header__mobile-menu-button').click(function() {
		$('.mobile-menu').show(200);
	});
	$('.mobile-menu__close-button').click(function() {
		$('.mobile-menu').hide(200);
	});

	// Каталог (мобильная версия)
	$('.bottom-header-mobile__link').click(function() {
		$('.bottom-header').toggle(200);
	});
	$(window).resize(function() {
		if ($(window).width() > 960) {
			$('.bottom-header').removeAttr('style');
		}
	});

	// Slider
	$('.slider').bxSlider();

	// Tabs
	$('.tabs__item--active').each(function(indx, domElement) {
		showTab($(domElement));
	})
	$('.tabs__item').click(function() {
		$(this).parent().find('.tabs__item').removeClass('tabs__item--active');
		$(this).addClass('tabs__item--active');
		showTab($(this));
		return false;
	});
	function showTab(tabJQElem) {
		var row = tabJQElem.data('row');
		var products = tabJQElem.parent().parent().parent();
		products.find('.products__row').hide();
		products.find('.row-' + row).show();
	}

	// Product images
	showImage($('.card__small-img--active'));
	$('.card__small-img').click(function() {
		$('.card__small-img').removeClass('card__small-img--active');
		$(this).addClass('card__small-img--active');
		showImage($(this));
	});
	function showImage(smallImageJQElem) {
		var imgFileName = smallImageJQElem.data('img');
		$('.card__big-img-box img').attr('src', 'images/' + imgFileName);
	}

	// Quantity
	$('.quantity__plus').click(function() {
		var jQInputElem;
		jQInputElem = $(this).parent().parent().find('.quantity__input');
		incQuantityInput(1, jQInputElem);
	});
	$('.quantity__minus').click(function() {
		var jQInputElem;
		jQInputElem = $(this).parent().parent().find('.quantity__input');
		incQuantityInput(-1, jQInputElem);
	});
	function incQuantityInput(incValue, jQInputElem) {
		var value;
		value = parseInt(jQInputElem.val()) + incValue;
		if (value < 1) {
			value = 1;
		}
		jQInputElem.val(value + ' шт.');
	}

    // Фильтры
    $('.filter-button').click(function() {
    	var top;
    	top = $(window).scrollTop();
    	$('.filter').css('top', top + 'px');
    	$('.filter').show("slide", { direction: "left" }, 300);
    });
    $('.filter__close-button').click(function() {
    	var top;
    	$('.filter').hide("slide", { direction: "left" }, 300);
    });


});