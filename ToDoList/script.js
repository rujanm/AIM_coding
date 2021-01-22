$(document).ready(function(){
    $("#home").click(function(){
        $("#ToDoList_Home").append("<p id ='added'>" + $("#input").val() + "</p>")
    })
    $("#work").click(function(){
        $("#ToDoList_Work").append("<p id ='added'>" + $("#input").val() + "</p>")
    })
    $("#clearAll").click(function(){
        $('#ToDoList_Home').find('*').not('h1').remove()
        $('#ToDoList_Work').find('*').not('h1').remove()
    })
    
    $("p").click(function() {
        $(this).toggleClass("line");
      });
})

