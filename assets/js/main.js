$(document).ready(function($){
	"use strict";

	// Sticky fixed Menu
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();
		if (scroll > 350) {
			$(".header-fixed").addClass("sticky");
		} else {
			$(".header-fixed").removeClass("sticky");
		}
	}); 

	// Smooth scrolling active code
	// Select all links with hashes
		$('a[href*="#"]')
		  // Remove links that don't actually link to anything
		  .not('[href="#"]')
		  .not('[href="#0"]')
		  .click(function(event) {
		    // On-page links
		    if (
		      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		      && 
		      location.hostname == this.hostname
		    ) {
		      // Figure out element to scroll to
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		      // Does a scroll target exist?
		      if (target.length) {
		        // Only prevent default if animation is actually gonna happen
		        event.preventDefault();
		        $('html, body').animate({
		          scrollTop: target.offset().top
		        }, 1000, function() {
		          // Callback after animation
		          // Must change focus!
		          var $target = $(target);
		          $target.focus();
		          if ($target.is(":focus")) { // Checking if the target was focused
		            return false;
		          } else {
		            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
		            $target.focus(); // Set focus again
		          };
		        });
		      }
		    }
		  });

	// Mobile menu active
	jQuery('#mobile-menu-active').meanmenu();

	// Parallax active code
	$('.bg').parallax("50%", 0.1);

	// WOW Js Active
	new WOW().init();

	// ---- Active
    $(".owl").owlCarousel();
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');

    // Owl carousel active code
    $('.slider_active').owlCarousel({
	    loop:true,
	    autoplay: true,
	    autoplayTimeout: 7000,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})

    // Mixit up active code
	var mixer = mixitup('.portfolio');


	// Animated skill bar
	$('.skillbar').skillBars({
		from: 0,
		speed: 4000, 
		interval: 100,
		decimals: 0,
	});


	 // Testimonial carousel active code
	 $('.testimonial_wrapper').owlCarousel({
	    loop:true,
	    autoplay: true,
	    autoplayTimeout: 7000,
	    responsive:{
	        0:{
	            items:1
	        },
	        350:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})


	 // Latst blog carousel active code
	 $('.latest_blog').owlCarousel({
	    autoplay: true,
	    autoplayTimeout: 7000,
	    smartSpeed: 2000,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})


	 // Brand carousel active code
	 $('.barnd_all_active').owlCarousel({
	 	dots: false,
	    autoplay: true,
	    autoplayTimeout: 4000,
	    smartSpeed: 1000,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        768:{
	            items:2
	        },
	        1000:{
	            items:5
	        }
	    }
	})


	 // Scroll up button active
	 $(window).scroll(function() {
	 	if ($(this).scrollTop() > 400) {
	 		$(".scroll_top_btn").fadeIn();
	 	} else {
	 		$(".scroll_top_btn").fadeOut();
	 	}
	 });

	 $(".scroll_top_btn").click(function(){
	 	$("html, body").animate({
	 		scrollTop:0
	 	}, 500)
	 })

}(jQuery));