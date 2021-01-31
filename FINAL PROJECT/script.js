$(document).ready(function(){
    
    $("#1").click(function(){
        $("#display").val(function() {
            return this.value + '1';
        });
    });
    
});