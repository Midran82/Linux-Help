/*$(function(){
    $("page").load("pages/home/Home.html"); 
});

$(document).ready( function() {
    $("#load_home").on("click", function() {
        $("#content").load("content.html");
    });
});*/

$('#iframe').load(function() {
    $(this).contents().find('page').append('<scr' + 'ipt type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></scr' + 'ipt>');    
  });