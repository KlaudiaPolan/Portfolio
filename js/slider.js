
var count=$('.foto_items').find('img').length;
var one_item_width=(($(window).width()-40)/3)*1.5;

var active_item=1;

$('.websites').css('width',$(window).width()-160+'px');

$('.foto_items').find('img').css('width', one_item_width+'px');
$('.foto_items').css('margin-left', ($('.websites').width()-(one_item_width*3+40))/2+'px')
$('.foto_items').css('width',count*(one_item_width+40)+'px');



$(window).resize(function(){

count=$('.foto_items').find('img').length;
one_item_width=(($(window).width()-40)/3)*1.5;

$('.websites').css('width',$(window).width()-160+'px');

$('.foto_items').find('img').css('width', one_item_width+'px');
$('.foto_items').css('margin-left', ($('.websites').width()-(one_item_width*3+40))/2+'px')
$('.foto_items').css('width',count*(one_item_width+40)+'px');


});

var margin_left=0;
var left=$('.left_item');
var right=$('.right_item');
var next=$('.left_item').next();
var prev=$('.right_item').prev();
var first_items=$('.foto_items img:first-child');
var last_items=$('.foto_items img:last-child');




$('.arrow_left').on('click', function(){
if(active_item>0){
	
	active_item--;
	margin_left=parseInt($('.foto_items').css('margin-left'))+one_item_width;
	$('.foto_items').css('margin-left', margin_left+'px');


	left=$('.left_item');
	right=$('.right_item');


	if(active_item+1==count-1){
		prev=$('.left_item').prev();
		next=$('.left_item').next();
		left.removeClass('left_item');
		$('#last_item').addClass('right_item');
		

	}else{
		prev=$('.left_item').prev();
		next=$('.right_item').prev();
		left.removeClass('left_item');
		right.removeClass('right_item');
	}
	prev.addClass('left_item');
	next.addClass('right_item');
}else{

}


});

$('.arrow_right').on('click', function(){

if(active_item<count-1){
	margin_left=parseInt($('.foto_items').css('margin-left'))-one_item_width;
	active_item++;
	$('.foto_items').css('margin-left', margin_left+'px');

	left=$('.left_item');
	right=$('.right_item');

	console.log(active_item);

	if(active_item-1==0){
		next=$('.right_item').next();
		prev=$('.right_item').prev();
		left.removeClass('left_item');
		right.removeClass('right_item');
		first_items.addClass('left_item');
		

	}else{
		next=$('.left_item').next();
		prev=$('.right_item').next();
		left.removeClass('left_item');
		right.removeClass('right_item');
	}

	if(active_item==count-1){
		next=null;
		prev=last_items.prev();
	}
    
	
	prev.addClass('left_item');
	next.addClass('right_item');

}else{

}

});