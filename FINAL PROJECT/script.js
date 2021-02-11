$(document).ready(function(){

	$(".val").click(function(e){
		e.preventDefault();
		var a = $(this).attr("href");
		$(".screen").append(a);
		$(".outcome").val($(".outcome").val() + a);
		
    });
    
    $("#sin").click(function(e){
		e.preventDefault();
		var a = $(this).attr("href");
		$(".screen").append('sin(');
		$(".outcome").val($(".outcome").val() + a);
		
    });
    $("#cos").click(function(e){
		e.preventDefault();
		var a = $(this).attr("href");
		$(".screen").append('cos(');
		$(".outcome").val($(".outcome").val() + a);
		
	});

	$(".equal").click(function(){
		$(".outcome").val(eval($(".outcome").val()));
		$(".screen").html(eval($(".outcome").val()));
	});
	$(".clear").click(function(){
		$(".outcome").val("");
		$(".screen").html("");
	});      
 });