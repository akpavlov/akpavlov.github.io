$(function() {
  // Слайдер диапазона цен
  $('.filter__range').slider({
    range: true,
    min: 60000,
    max: 160000,
    values: [ 90000, 120000 ],
    slide: function( event, ui ) {
      $('.filter__begin').val('от ' + ui.values[0] + ' руб.');
      $('.filter__end').val('до ' + ui.values[1] + ' руб.');
    }
  });
  $('.filter__begin').val('от ' + $( ".filter__range" ).slider( "values", 0 ) + ' руб.');
  $('.filter__end').val('до ' + $( ".filter__range" ).slider( "values", 1 ) + ' руб.');
});