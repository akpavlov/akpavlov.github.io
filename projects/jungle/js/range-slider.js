$(function() {
  // Слайдер диапазона веса
  $('.filter__range--weight').slider({
    range: true,
    min: 10,
    max: 100,
    values: [ 20, 80 ],
    slide: function( event, ui ) {
      $('.filter__begin--weight').val(ui.values[0]);
      $('.filter__end--weight').val(ui.values[1]);
    }
  });
  $('.filter__begin--weight').val($( ".filter__range--weight" ).slider( "values", 0 ));
  $('.filter__end--weight').val($( ".filter__range--weight" ).slider( "values", 1 ));

  // Слайдер диапазона цен
  $('.filter__range--price').slider({
    range: true,
    min: 100,
    max: 1000,
    values: [ 200, 800 ],
    slide: function( event, ui ) {
      $('.filter__begin--price').val(ui.values[0]);
      $('.filter__end--price').val(ui.values[1]);
    }
  });
  $('.filter__begin--price').val($( ".filter__range--price" ).slider( "values", 0 ));
  $('.filter__end--price').val($( ".filter__range--price" ).slider( "values", 1 ));
});