AOS.init({
	duration: 1200,
	disable: 'mobile'
}); 

// Product Filter JS
$(".filter__product h4").click(function(){
	$(".product__filter--box").slideToggle("slow");
});

// Video Popup
$('.popup-youtube').magnificPopup({
    type: 'iframe'
});
// Image Popup
$('.popup-gallery').magnificPopup({
	delegate: 'a',
	type: 'image',
	tLoading: 'Loading image #%curr%...',
	mainClass: 'mfp-img-mobile',
	gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	},
	image: {
	tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
	}
});

// Home Main Banner Start
var swiper = new Swiper(".home__slider", {
	effect: 'fade',
	loop: true,
	observer: true,  
	observeParents: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true
	}
});     
// Home Main Banner End	

// Product Slider Start
var swiper = new Swiper('.product__slider', {
	spaceBetween: 30,
	slidesPerGroup: 1,
	loop: true,
	observer: true,  
    observeParents: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
        320: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 4
        },
    }
});
// Product Slider End

// Testimonial Slider Start
var swiper = new Swiper('.testimonial__slider', {
	spaceBetween: 30,
	slidesPerGroup: 1,
	loop: true,
	observer: true,  
    observeParents: true,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true
	},
	breakpoints: {
        320: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 2
        },
    }
});
// Testimonial Slider End

// Clients Slider Start
var swiper = new Swiper('.clients__slider', {
	spaceBetween: 30,
	centeredSlides: true,
	speed: 6000,
	autoplay: {
		delay: 1,
	},
	loop: true,
	slidesPerView:'auto',
	allowTouchMove: false,
	disableOnInteraction: true,
	observer: true,  
    observeParents: true,
	breakpoints: {
        320: {
          slidesPerView: 2.5
        },
        768: {
          slidesPerView: 4.5
        },
        1024: {
          slidesPerView: 5.5
        },
    }
});
// Clients Slider End

// Favorite Picks Slider Start
var swiper = new Swiper(".favorite__slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
 });
// var swiper = new Swiper('.favorite__slider', {
// 	spaceBetween: 30,
// 	speed: 6000,
// 	autoplay: {
// 		delay: 3000,
// 		disableOnInteraction: false,
// 	},
// 	loop: true,
// 	slidesPerView: '1',
// 	disableOnInteraction: true,
// 	observer: true,  
//   observeParents: true,
// 	breakpoints: {
//         320: {
//           slidesPerView: 1
//         },
//         768: {
//           slidesPerView: 2
//         },
//         1024: {
//           slidesPerView: 3
//         },
//     }
// });
// Favorite Picks Slider End

// Blog Slider Start
var swiper = new Swiper('.blog__slider', {
	spaceBetween: 30,
	slidesPerGroup: 1,
	loop: true,
	observer: true,  
    observeParents: true,
	breakpoints: {
        320: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        },
    }
});
// Blog Slider End

// Single Product JS Start
// var swiper = new Swiper(".small__image", {
// 	loop: true,
// 	spaceBetween: 10,
// 	slidesPerView: 4,
// 	freeMode: true,
// 	watchSlidesVisibility: true,
// 	watchSlidesProgress: true,
// 	breakpoints: {
//         320: {
//           slidesPerView: 3
//         },
//         768: {
//           slidesPerView: 3
//         },
//         1024: {
//           slidesPerView: 4
//         },
//     }
// });
// var swiper2 = new Swiper(".large__image", {
// 	loop: true,
// 	navigation: {
// 	  nextEl: ".swiper-button-next",
// 	  prevEl: ".swiper-button-prev",
// 	},
// 	thumbs: {
// 	  swiper: swiper,
// 	},
// });
// Single Product JS End

// Search Toggle Start
$(".header--search .header__search__icon").click(function(){
	$(".header__search").slideToggle();
});
// Search Toggle End

// header Fixed JS Start
$(window).scroll(function() {
	var sticky = $('header'),
	scroll = $(window).scrollTop();
	   
	if (scroll >= 200) { 
		sticky.addClass('fixed'); 
	}
	else { 
		sticky.removeClass('fixed');
	}
});
// header Fixed JS End

// Mobile Menu Start
$(".mobile_menu").click(function(){
	$(".header__menu, .mobile_menu").toggleClass("open");
});

$(".submenu__expant").click(function() {
	$(this).toggleClass("active");
	$(this).siblings().toggleClass("active");
});
// Mobile Menu End

// SVG file to SVG code convert JS Start
function img2svg() {
	jQuery('.in__svg').each(function (i, e) {
	
		var $img = jQuery(e);
		
		var imgID = $img.attr('id');
		
		var imgClass = $img.attr('class');
		
		var imgURL = $img.attr('src');
		
		jQuery.get(imgURL, function (data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');
			
			// Add replaced image's ID to the new SVG
			if (typeof imgID !== 'undefined') {
			$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if (typeof imgClass !== 'undefined') {
			$svg = $svg.attr('class', ' ' + imgClass + ' replaced-svg');
			}
			
			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');
		
			// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
			// if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
			// $svg.attr(`viewBox 0 0 ${$svg.attr('height')} ${$svg.attr('width')}`);
			// }
		
			// Replace image with new SVG
			$img.replaceWith($svg);
			}, 'xml');
		});
	}
	img2svg();

// SVG file to SVG code convert JS End

// Bottom to Top Arrow JS Start
var back_top_top = $('.bottom__top__top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    back_top_top.addClass('show');
  } else {
    back_top_top.removeClass('show');
  }
});

back_top_top.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
// Bottom to Top Arrow JS End
