document.addEventListener("DOMContentLoaded", function() {

	// Custom JS
	$('.testimonials-carousel').owlCarousel({
    loop:true,
    margin: 25,
    responsive:{
        0:{
            items:1
        },
        992:{
            items:2
        }
    }
	});


	$(".navbar-nav").on("click",".nav-link", function (event) {
		event.preventDefault();
		let id  = $(this).attr('href'),
			timeScroll = 1500,
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, timeScroll);
		if($(window).width() < 768){
			setTimeout(() => {
				$("#navbarSupportedContent").collapse('hide');
			}, timeScroll)
		}
	});

	$("#navbarSupportedContent").on("show.bs.collapse", function(){
		$('body').css('overflow', 'hidden');
	});
	$("#navbarSupportedContent").on("hide.bs.collapse", function(){
		$('body').css('overflow', 'scroll');
	});


});
