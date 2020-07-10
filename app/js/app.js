document.addEventListener("DOMContentLoaded", function() {

	// Custom JS
	$('.testimonials-carousel').owlCarousel({
    loop:true,
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:2
        }
    }
	})
});
