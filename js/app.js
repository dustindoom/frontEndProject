
//clicky button go bye bye


$(".contactMe span").hide();
$(".contactMe").append("<button>If you would like to contact me click here!</button>");
$("button").click(function(){
$(".contactMe span").show();
$("button").remove();
});
