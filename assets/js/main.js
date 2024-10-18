(function ($) {
    "use strict";

    $(window).on('load', function(){
        //===== Prealoder
        $("#preloader").delay(400).fadeOut();
    });

    // sticky header
    $(window).scroll(function() {    
		var scroll = $(window).scrollTop();
	
		//>=, not <=
		if (scroll >= 1) {
			//clearHeader, not clearheader - caps H
			$(".header-area").addClass("is-stick");
		}else{
			$(".header-area").removeClass("is-stick");
		};
	});

    // Hamburger-menu
    $('.hamburger-menu').on('click', function () {
        $('.hamburger-menu, #menu').toggleClass('current');
    });


    // header-bottm-active owlCarousel
	$('.header-bottm-active').owlCarousel({
		loop: true,
		margin: 0,
		items: 1,
		nav: true,
        navText: ['<img src="assets/img/sl-arrow-1.png" alt="">', '<img src="assets/img/sl-arrow-1.png" alt="">'],
		dots: false,
	})
    // hero-active owlCarousel
	$('.hero-active').owlCarousel({
		loop: true,
		margin: 0,
		items: 1,
		nav: false,
		dots: false,
		autoplay:true,
        autoplayTimeout:4000,
        smartSpeed:450,
	})
    // fair-active owlCarousel
	$('.fair-active').owlCarousel({
		loop: true,
		margin: 25,
		items: 1,
		nav: true,
        navText: ['<img src="assets/img/sl-arrow-2.png" alt="">', '<img src="assets/img/sl-arrow-2.png" alt="">'],
		dots: false,
		autoplay:false,
        autoplayTimeout:4000,
        smartSpeed:450,
		responsive: {
			0: {
				items: 1
			},
			767: {
				items: 2
			},
			992: {
				items: 3,
				margin: 15,
			},
			1199: {
				items: 4
			},
		}
	})
    // owlCarousel
	$('.catagory-active').owlCarousel({
		loop: true,
		margin: 0,
		items: 1,
		nav: false,
		dots: false,
		autoplay:true,
        autoplayTimeout:4000,
        smartSpeed:450,
		responsive: {
			0: {
				items: 1
			},
			767: {
				items: 2
			},
			992: {
				items: 3
			}
		}
	})

    // nice select
	$('select').niceSelect();


    // get year activation on footer
	var elements = document.getElementsByClassName("getyear");

    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = (new Date().getFullYear());
    }

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });

    //Animate the scroll to top
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

})(jQuery);