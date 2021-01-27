$(document).ready(function(){
    let i = 1;
    let j = 1;
    
    $("#home").click(function(){
        if($("#input").val() == ""){
            alert("Write something!");
        }
        else{
            $("#ToDoList_Home").append("<p class ='added' id='" + i + "'>"  + $("#input").val() + "</p>");
            i++;
        }
        
    });
    $("#work").click(function(){
        if($("#input").val() == ""){
            alert("Write something!");
        }
        else{
            $("#ToDoList_Work").append("<p class ='added' id='" + j + "'>"  + $("#input").val() + "</p>");
            j++;
        }
        
    });
    $("#clearAll").click(function(){
        $('#ToDoList_Home').find('*').not('h1').remove();
        $('#ToDoList_Work').find('*').not('h1').remove();
    });
    
    $('body').on("click", ".added", function(){
        $(this).remove();
    });
});

