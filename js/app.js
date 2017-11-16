
//clicky button go bye bye

//Hide contact
$(".contactMe span").hide();
$(".contactMe").append("<button>If you would like to contact me click here!</button>");
$("button").click(function(){
//Show contact
$(".contactMe span").show();
$("button").remove();
});
