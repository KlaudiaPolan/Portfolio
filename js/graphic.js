$(document).ready(function() {

var liProjectMenu = $('#projects').find('li');

liProjectMenu.on('click',function(event){
  event.preventDefault();
  //console.log('click');
    if(liProjectMenu.siblings().attr('class','active')){
      liProjectMenu.siblings().removeClass('active');
    }

  $(this).addClass('active');

});

var projects = $('#projects').find('.projects');
projects.hide();
projects.eq(0).show();

liProjectMenu.eq(0).on('click', function(){
projects.hide();
projects.eq(0).show(function(){

});


});
liProjectMenu.eq(1).on('click', function(){
  projects.hide();
  projects.eq(1).show(function(){

  });

});
liProjectMenu.eq(2).on('click', function(){
  projects.hide();
  projects.eq(2).show(function(){

  });

});
liProjectMenu.eq(3).on('click', function(){
  projects.hide();
  projects.eq(3).show(function(){

  });

});

  if (($(window).width() < 950) && ($(window).width() >= 765)) {
    $('.sidebar').css('height', ($('.photo').width()) * 3 + "px");
  } else if ($(window).width() < 765) {
    $('.sidebar').css('height', "500px");

  } else {
    $('.sidebar').css('height', ($('.photo').width()) * 2 + "px");
  }
  $('.photo').css('height', $('.photo').width() + "px");


  $(window).resize(function() {

    if (($(window).width() < 950) && ($(window).width() >= 765)) {
      $('.sidebar').css('height', ($('.photo').width()) * 3 + "px");
    } else if ($(window).width() < 765) {
      $('.sidebar').css('height', "500px");

    } else {
      $('.sidebar').css('height', ($('.photo').width()) * 2 + "px");
    }
    $('.photo').css('height', $('.photo').width() + "px");

  });

  $('.arrows').on('mouseover',function(){
    $(this).css('opacity','0.2');
  });
  $('.arrows').on('mouseleave',function(){
    $(this).css('opacity','1');
  })


  $('.contactLinks img').on('mouseover',function(){
    $(this).css('opacity','0.5');
  });
  $('.contactLinks img').on('mouseleave',function(){
    $(this).css('opacity','1');
  })


});
