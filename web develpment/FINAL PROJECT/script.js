$(document).ready(function(){
	$(".right").click(function(){
		$(".box").animate({left: '+=250px'});	
	});
	$(".up").click(function(){
		$(".box").animate({bottom: '+=250px'});	
	});
	$(".rotate").click(function(){
		
		$(".box").toggleClass('X');
		$(".box").removeClass('Y');
	});

	$(".translate").click(function(){
		
		$(".box").toggleClass('Y');	
		$(".box").removeClass('X');
	});
  });