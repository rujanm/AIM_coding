$(document).ready(function(){
    $("a").hover(function(){
      $(this).animate({top: '-20px'},3);
      $("#pawprint").toggleClass("show");
      var position = $(this).position();
      $("#pawprint").animate({left: position.left},6);
      $("#pawprint").animate({bottom: position.top-3},6);
    });
    $("a").mouseout(function(){
        $(this).animate({top: '0px'},3);
        
      });

  });
  
