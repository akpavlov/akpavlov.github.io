$(function() {

	// Whom

	function setWhomTabs()
	{
		$('.whom__tab--active').removeClass('whom__tab--active');
		var tabId = $('.whom__item--active').data('tab');
		$('#' + tabId).addClass('whom__tab--active');
	}

	$('.whom__item').click(function() {
		$('.whom__item--active').removeClass('whom__item--active');
		$(this).addClass('whom__item--active');
		setWhomTabs();
	});

	setWhomTabs();
});