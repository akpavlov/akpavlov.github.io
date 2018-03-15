$(function() {

	///////////////////////// Header //////////////////////////////

	// Показать/скрыть мобильное меню
	$('.header__mobile-menu-button').click(function() {
		$('.mobile-menu').toggleClass('mobile-menu--visible');
		return false;
	});
	$(document).click(function() {
		$('.mobile-menu--visible').removeClass('mobile-menu--visible');
	});

	// Копируем основное меню в мобильное меню
	$('.header__menu > li').clone().addClass('md-show').prependTo($('.mobile-menu'));
	$('.header__menu-box').addClass('md-hide');

	// Копируем личный кабинет
	$('.header__backoffice').clone().addClass('md-show').appendTo('.header__bar');
	$('.header__backoffice').addClass('md-hide');

	// Копируем телефон в счетчик
	$('.header__tel').clone().addClass('xs-show').prependTo('.header__counter-box');
	$('.header__tel').addClass('xs-hide');

	///////////////////////// End of Header ////////////////////////

	// file

	$('#file').change(function() {
		var file = $(this).val();
		file = file.replace(/\\/g, "/").split('/').pop();
		$('.vacancy__file span').text(file);
	});

	// wow
	new WOW().init();
});
