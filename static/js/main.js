var $winWidth = $(window).innerWidth();
var $slidesView = '1';
var $slidesView2 = '3';

function goBurger() {
	$('#burger-btn, #menu-mobile a').click(function() {
		$(this).toggleClass('active-on');
		$("#mobile-menu, .second-nav").toggleClass('active-on');
	});
}

function checkDevice() {
	if ($winWidth <= 768) {
		$device = 'sm';
		$slidesView = '1';
		$slidesView2 = '3';
	} else {
		$slidesView = '3';
		$slidesView2 = '6';
		if ($winWidth <= 1200) {
			$device = 'md';
		} else{
			$device = 'lg';
		};
	};
}
function initSwiperEvents(){
	var mySwiper = new Swiper ('.swiper-events', {
	slidesPerView: $slidesView,
    spaceBetween: 60,
	  pagination: {
	    el: '.swiper-pagination',
	    clickable: true,
	  },
	autoplay: 2500,
	autoplayDisableOnInteraction: false,
    direction: 'horizontal',
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}
function initSwiperPartners(){
	var mySwiper = new Swiper ('.swiper-partners', {
	slidesPerView: $slidesView2,
    spaceBetween: 100,
    direction: 'horizontal',
    pagination: {
	clickable: true,
	},
	autoplay: 2500,
	autoplayDisableOnInteraction: false,
	loop: true,
  });
}

function initSwiperTestimonials(){
	var mySwiper = new Swiper ('.swiper-testimonials', {
	slidesPerView: 1,
    spaceBetween: 100,
    direction: 'horizontal',
    pagination: {
	  clickable: true,
    },
	autoplay: 2500,
	autoplayDisableOnInteraction: false,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}

function clickMenu(){
	$('#menu-dsk a, #menu-mobile a').click(function() {
		$('#burger-btn').removeClass('active-on');
		$('html, body').animate({ scrollTop: $( $.attr(this, 'href') ).offset().top}, 1500);
	    return false;
	});
}

function clickSiteScroll(){
	$('.site-scroll').click(function() {
		$('html, body').animate({ scrollTop: $('#events').offset().top}, 1000);
	    return false;
	});
}

$(document).ready(function(){
	clickMenu();
	clickSiteScroll();
	checkDevice();
	initSwiperEvents();
	initSwiperPartners();
	initSwiperTestimonials();
	goBurger();
});