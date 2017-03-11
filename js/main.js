/****** ПЛАВНАЯ ПРОКРУТКА ******/
$(document).ready(function(){
	$("div a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});
});

/****** всплывание элементов ******/ 
$(function(f){
    var element = f('.arrow__up');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 400	 ? 'In': 'Out')](500);          
    });
});

