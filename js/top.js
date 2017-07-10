$(document).ready(function() {
      $('#top').css('height', $(window).height() + "px");

      $(window).resize(function() {
        $('#top').css('height', $(window).height() + "px");

      });
      $(document).on('click', 'a', function(event){
    	    //event.preventDefault();
    	    $('body').animate({
    	        scrollTop: $($.attr(this, 'href')).offset().top
    	    }, 800);
      });
  });
