$(function() {
	// Поиск
	$('.search__close').click(function() {
		$('.search').hide(100);
	});
	$('.main-menu__search').click(function() {
		$('.search').show(100);
		$('.search__box input').focus();
	});

	// Мобильное меню
	$('.header__mobile-menu').click(function() {
		$('.header__menu').show(100);
	});
	$('.header__mobile-menu-close').click(function() {
		$('.header__menu').hide(100);
	});
	$(window).resize(function() {
		if ($(window).width() > 540) {
			$('.header__menu').removeAttr('style');
		}
	});

	// Слайдер диапазона цен
    $("#slider-range" ).slider({
      range: true,
      min: 100,
      max: 100000,
      values: [ 1000, 50000 ],
      slide: function( event, ui ) {
      	$('#price-begin').val("от " + ui.values[0] + " Р");
      	$('#price-end').val("до " + ui.values[1] + " Р");
      }
    });
    $('#price-begin').val("от " + $( "#slider-range" ).slider( "values", 0 ) + " Р");
    $('#price-end').val("до " + $( "#slider-range" ).slider( "values", 1 ) + " Р");

    // Фильтры
    $('.filter .filter__header div').click(function() {
    	$(this).toggleClass('filter-close');
    	$(this).parent().parent().find('.filter__content').toggle(200);
    });

});