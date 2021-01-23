$(document).ready(function(){
    $("#home").click(function(){
        $("#ToDoList_Home").append("<p class ='added'>" + $("#input").val() + "</p>")
    })
    $("#work").click(function(){
        $("#ToDoList_Work").append("<p class ='added'>" + $("#input").val() + "</p>")
    })
    $("#clearAll").click(function(){
        $('#ToDoList_Home').find('*').not('h1').remove()
        $('#ToDoList_Work').find('*').not('h1').remove()
    })
    
    $('body').on
})

