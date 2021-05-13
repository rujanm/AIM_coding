$(document).ready(function(){ 
    $('#add').click(function(){
        if($('select').val() == 'Home'){
            $('#home').append('<li>' + $('input').value + '</li>')
        }
        else{
            $('#work').append('<li>' + $('input').value + '</li>')
        }
    }) 
    $('li').click(function(){
        $(this).toggleClass('stroked')
    })
  $('#clear').click(function(){
    $("ul").empty()
  })
})