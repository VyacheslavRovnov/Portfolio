/****** ПЛАВНАЯ ПРОКРУТКА ******/
$(document).ready(function(){
	$("div a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({
			scrollTop: destination 
		},800);
	})

	$(window).scroll(function(){
    var $arrow = $('.arrow__up'),
   		$infoPerson = $('.info__person'),
   		$infoEducation = $('.info__education'),
   		$infoBottom = $('.info__bottom'),
   		$works = $('.works'),
		scroll = $(this).scrollTop();
		console.log(scroll)

		if (scroll > 400){
			$arrow.animate({'opacity': 'show'})
		}
		else if (scroll < 400){
			$arrow.animate({'opacity': 'hide'})
		};
		
		if ((scroll > 300) && (scroll < 900)){
			$infoPerson.fadeIn('fast'),
		    $infoEducation.fadeIn('fast'),
		    $infoBottom.fadeIn('fast');
		};

		if ((scroll > 1200) || (scroll < 300)) {
			$infoPerson.fadeOut(),
			$infoEducation.fadeOut(),
		    $infoBottom.fadeOut();
		};

		if ((scroll > 900) && (scroll < 1500)){
			$works.fadeIn('fast')
		};

		if ((scroll < 900) || (scroll > 1900)){
			$works.fadeOut()
		};
	});

});

// /****** всплывание элементов ******/ 
// $(document).ready(function(){

	

// 		// else if ( scroll > 200){
// 		// 	$infoPerson.addClass('rotateInDownLeft'),
// 		// 	$infoEducation.addClass('rotateInDownRight')
// 		// }
// 		// else if ( scroll >){

// 		// 	$infoPerson.removeClass('rotateInDownLeft'),
// 		// 	$infoEducation.removeClass('rotateInDownRight')
// 		// }
// 	});

// });

// $(document).ready(function() {
// // 	$(window).scroll(function(event) {
// // 	var	$infoPerson = $('.info__person'),
// //    		$infoEducation = $('.info__education'),
// //    		$infoBottom = $('.info__bottom'),
	
		
// // 		// // if ( scroll > 200){
// // 		// 	$infoPerson.addClass('rotateInDownLeft'),
// // 		// 	$infoEducation.addClass('rotateInDownRight')
// // 		// }
// // 		// else 
// // 		// if ( 700 > scroll <200){

// // 		// 	$infoPerson.removeClass('rotateInDownLeft'),
// // 		// 	$infoEducation.removeClass('rotateInDownRight')
// // 		// }
// // 	});
// // });

// $(document).ready(function(){
// 	$(window).on('load', function () {
// 	    var $preloader = $('#preloader'),
// 	        $spinner   = $preloader.find('.spinner');
// 	    $spinner.delay(1000).fadeOut();
// 	    $preloader.delay(1000).fadeOut('slow');
// 	    $('.wrapper').css({
// 	    	overflow: 'auto',
// 	    });
// 	});
// })