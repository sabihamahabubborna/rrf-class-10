jQuery( document ).ready(function($) {
  $(".homepage-slides").owlCarousel({

  	items:1,
  	
  	loop:true,
  	nav:true,
  	autoplay:true,
  	autoplayTimeout:2000,
  	navText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
  }); 
});