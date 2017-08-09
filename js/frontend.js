

$('.sitOnCherWeb').mouseover(function() {
	if($(window).width()>776){
  $('.textSitOnCherWeb').css('margin-left', '0');
}

});
$('.sitOnCherWeb').mouseleave(function() {
	if($(window).width()>776){
  $('.textSitOnCherWeb').css('margin-left', '-50%');
}

});

$('.toDoList').mouseover(function() {
	if($(window).width()>776){
  $('.textToDoList').css('margin-left', '0');
}

});
$('.toDoList').mouseleave(function() {
	if($(window).width()>776){
  $('.textToDoList').css('margin-left', '-50%');
}
});
$('.climbWebsite').mouseover(function() {
	if($(window).width()>776){
  $('.textclimbWebsite').css('margin-left', '0');
}

});
$('.climbWebsite').mouseleave(function() {
	if($(window).width()>776){
  $('.textclimbWebsite').css('margin-left', '-50%');
}
});
$('.hotelWebsite').mouseover(function() {
	if($(window).width()>776){
  $('.texthotelWebsite').css('margin-left', '0');
}

});
$('.hotelWebsite').mouseleave(function() {
	if($(window).width()>776){
  $('.texthotelWebsite').css('margin-left', '-50%');
}
});
$('.cplWebsite').mouseover(function() {
	if($(window).width()>776){
  $('.textcplWebsite').css('margin-left', '0');
}

});
$('.cplWebsite').mouseleave(function() {
	if($(window).width()>776){
  $('.textcplWebsite').css('margin-left', '-50%');
}
});
$('.weatherWebsite').mouseover(function() {
	if($(window).width()>776){
  $('.textweatherWebsite').css('margin-left', '0');
}

});
$('.weatherWebsite').mouseleave(function() {
	if($(window).width()>776){
  $('.textweatherWebsite').css('margin-left', '-50%');
}
});
var positionButton = ($('.textToDoList').width()) - 140;
$('.frontEndButton2').css('left', (positionButton / 2) + 'px');

$(window).resize(function() {
  positionButton = ($('.textToDoList').width()) - 140;
  $('.frontEndButton2').css('left', (positionButton / 2) + 'px');
});
