$(function() {

	// Фиксация шапки

	var headerHeight;

	headerHeight = $('header').outerHeight();
	$('<div class="clone-header">').insertBefore('header').css('height', headerHeight);
	setHeader();

	$(window).scroll(setHeader);
	$(window).resize(setHeader);

	function setHeader() {
		winPos = $(window).scrollTop();
		if (winPos > 83) {
			$('header').addClass('header-fixed');
			$('.clone-header').show();
		} else {
			$('header').removeClass('header-fixed');
			$('.clone-header').hide();
		}
	};

	// Меню
	$('.to-goods').click(function() {
		$('body, html').animate({scrollTop: $('#goods').position().top - 50}, 500);
	});
	$('.to-support').click(function() {
		$('body, html').animate({scrollTop: $('#support').position().top - 50}, 500);
	});
	$('.to-footer').click(function() {
		$('body, html').animate({scrollTop: $('#footer').position().top - 50}, 500);

	});

	// Закрытие модального окна по клику на любом месте
	$('.blackout').click(function(event) {
		if ($(event.target).hasClass('blackout')) {
			hideModal();
		}
	});

	// Открытие формы заказа по клику на любую кнопку "Заказать"
	$('.button-order').click(function() {
		showModal('.modal-order');		
	});

	// Открытие формы заказа по клику на кнопку "Написать письмо"
	$('.header__send').click(function() {
		showModal('.modal-order');		
	});

	// Открытие модального окна
	function showModal(condition) {
		$('.blackout').addClass('visible');
		$('.modal').removeClass('visible');
		$(condition).addClass('visible');
		$('body').addClass('hide-scroll');
		// Кнопка "Закрыть"
		if ($(condition + ' .modal__close-button').length == 0) {
			$(condition).append('<div class="modal__close-button"></div>');
			$('.modal__close-button').click(function() {
				hideModal();
			});
		}
	}

	// Скрытие модального окна
	function hideModal() {
		$('.blackout').removeClass('visible');
		$('.modal').removeClass('visible');
		$('body').removeClass('hide-scroll');
	}

	// Модальные окна на клике по товару
	$('.good-1').click(function() { showModal('.modal-1');	});
	$('.good-2').click(function() { showModal('.modal-2');	});
	$('.good-3').click(function() { showModal('.modal-3');	});
	$('.good-4').click(function() { showModal('.modal-4');	});
	$('.good-5').click(function() { showModal('.modal-5');	});
	$('.good-6').click(function() { showModal('.modal-6');	});
	$('.good-7').click(function() { showModal('.modal-7');	});
	$('.good-8').click(function() { showModal('.modal-8');	});
	$('.good-9').click(function() { showModal('.modal-9');	});

	// Отправка формы
	$('.order_form').submit(function() {
		$.ajax({
			url: 'wp-content/themes/kulichi/php/ajax_form_handler.php',
			type: 'POST',
			dataType: 'html',
			data: $('.order_form').serialize(),
			success: function(response) {
						if (response == 'OK') {
							msg('Сообщение успешно отправлено');
							hideModal();
						} else {
							msg('При отправке формы произошла ошибка. Попробуйте позже.');
						}	
					},
			error: function(jqXHR, status) {
						msg('При отправке формы произошла ошибка');
					}
		});
		return false;
	});

	// Сообщение (модальное самоисчезающее)
	function msg(msgText) {
		$('.modal-msg p').html(msgText);
		$('.modal-msg').addClass('visible');
		setTimeout(function() {
			$('.modal-msg').removeClass('visible');
		}, 2000);
	}

});