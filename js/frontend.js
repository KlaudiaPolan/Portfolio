$('.sitOnCherWeb').mouseover(function() {
  $('.textSitOnCherWeb').css('margin-left', '0');

});
$('.sitOnCherWeb').mouseleave(function() {
  $('.textSitOnCherWeb').css('margin-left', '-50%');

});

$('.toDoList').mouseover(function() {
  $('.textToDoList').css('margin-left', '0');

});
$('.toDoList').mouseleave(function() {
  $('.textToDoList').css('margin-left', '-50%');

});

var positionButton = ($('.textToDoList').width()) - 140;
$('.frontEndButton2').css('left', (positionButton / 2) + 'px');

$(window).resize(function() {
  positionButton = ($('.textToDoList').width()) - 140;
  $('.frontEndButton2').css('left', (positionButton / 2) + 'px');
});
