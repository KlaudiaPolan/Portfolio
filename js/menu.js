var toggle = 0;


$('#hamburger').on('click', function() {
  if (toggle == 0) {
    $('.main-menu').animate({
      left: '0px'
    }, 400);
    $(this).animate({
      left: '90px'
    }, 400);
    toggle = 1;
    $('#hamburger').attr('src', 'pliki/arrow.png');
  } else {
    $('.main-menu').animate({
      left: '-61px'
    }, 400);
    $(this).animate({
      left: '20px'
    }, 400);
    toggle = 0;
    $('#hamburger').attr('src', 'pliki/menu-mobile.png');
  }
});
