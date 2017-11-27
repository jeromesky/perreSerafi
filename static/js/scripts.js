$(document).ready(function($) {
	"use strict";

	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;

	/*-- HEADER MENU --*/
	var siteMenu = function() {
		if ( windowWidth > 1199 ) {

			// Remove Mobile Menu Events
			$(".header-menu *").unbind();

			// Actions Desktop
			$(".header-menu .sub").hoverIntent({
				timeout: 100, // milliseconds delay before onMouseOut
				over: function(){
					$(this).addClass("active");
					$(this).children("ul").slideDown("fast");
				},
				out: function(){
					$(this).removeClass("active");
					$(this).children("ul").slideUp("fast");
				}
			});
		}
		else {

			// Remove Desktop Menu Events
			$(".header-menu *").unbind();

			// Actions Mobile
			$(".header-menu .sub > a").click(function(e){
				e.preventDefault();

				$(".header-menu li ul").slideUp("normal");
				$(".header-menu li").removeClass("active");

				var element = $(this).siblings("ul");

				if ( element.is(":visible") ) {
					element.slideUp("normal");
					$(this).parent().removeClass("active");
				}
				else {
					element.slideDown("normal");
					$(this).parent().addClass("active");
				}
			});
		}
	};
	/*-- HEADER MENU END --*/

	/*-- HEADER TOGGLE --*/
	$(".site-toggle").click(function(e){
		e.preventDefault();

		var menu = $(".site-header");
		var button = $(".site-toggle");

		if( $(menu).is(":visible") ) {
			$(menu).animate({ "left": "-200px" }, 200, function(){
				$(menu).hide();
				$("body").removeClass("sidebar-on");
			});
			$(button).animate({ "left": "0px" }, 200);
		}
		else {
			$("body").addClass("sidebar-on");
			$(menu).show();
			$(menu).animate({"left": "0px"}, {duration: 200, queue: false});
			$(button).animate({"left": "200px"}, {duration: 200, queue: false});
		}
	});

	var siteToggle = function() {
		if ( windowWidth > 1199 ) {

			// Remove Styles
			$(".site-toggle, .site-header, .header-menu ul").removeAttr("style");

			// Remove Classes
			$(".header-menu li").removeClass("active");
			$("body").removeClass("sidebar-on");

		}
	};
	/*-- HEADER TOGGLE END--*/

	/*-- TEAM CAROUSEL --*/
	var owl1 = $("#owl-team");
	owl1.owlCarousel({
	  items : 3,
	  itemsDesktop : [1400,3],
	  itemsDesktopSmall : [1100,2],
	  itemsTablet: [600,2],
	  itemsMobile : [400,1],
	  pagination : true,
	  navigation : false
	});
	/*-- TEAM CAROUSEL END --*/

	/*-- TESTIMONIALS CAROUSEL --*/
	var owl2 = $("#owl-testimonials");
	owl2.owlCarousel({
	  items : 1,
	  itemsDesktop : [1400,1],
	  itemsDesktopSmall : [1100,1],
	  itemsTablet: [600,1],
	  itemsMobile : [400,1],
	  pagination : true,
	  navigation : false
	});
	/*-- TESTIMONIALS CAROUSEL END --*/

	/*-- DEFAULT CAROUSEL --*/
	var owlDefault = $(".owl-gallery");
	owlDefault.owlCarousel({
	  items : 1,
	  itemsDesktop : [1400,1],
	  itemsDesktopSmall : [1100,1],
	  itemsTablet: [600,1],
	  itemsMobile : [400,1],
	  pagination : true,
	  navigation : false,
	  navigationText: false
	});
	/*-- DEFAULT CAROUSEL END --*/

	/*-- MASONRY --*/
	var siteMasonry = function() {
		if ( windowWidth > 991 ) {
			var getMasonry = $(".masonry-list");
			getMasonry.imagesLoaded(function () {
				getMasonry.masonry({
					itemSelector: ".item",
					columnWidth: ".grid-sizer",
					isAnimated: true
				});
			});
		}
		else {
			$(".masonry-list").masonry('destroy');
		}
	};
	/*-- MASONRY END --*/

	/*-- FIT VIDEO --*/
	$(".video-full").fitVids();
	/*-- FIT VIDEO END --*/

	/*-- PRETTY PHOTO --*/
	$("a[data-rel^='prettyPhoto']").prettyPhoto({
		theme: "light_square",
		social_tools: false,
		deeplinking:false
	});
	/*-- PRETTY PHOTO END --*/

	/*-- SCROLL COMMENT FORM --*/
	$(".leave-new").click(function(e){
		e.preventDefault();
		var form = $(".comment-form").offset();
		$("html, body").animate({scrollTop: form.top}, 800);
	});
	/*-- SCROLL COMMENT FORM END --*/

	/*-- BACK TOP --*/
	$(".site-back-top").click(function(e){
		e.preventDefault();
		$("body,html").animate({scrollTop: 0}, 800);
	});

	function backTop() {
		if ( $(window).scrollTop() > 40 && windowWidth > 480 ) {
			$(".site-back-top").fadeIn();
		}
		else{
			$(".site-back-top").fadeOut();
		}
	}
	/*-- BACK TOP END --*/

	/*-- GOOGLE MAP 1 --*/
	$(".google-map-1").width("100%").height("330px").gmap3({
		map:{
			options: {
			center:[51.5209564,0.157134],
			zoom: 15,
			scrollwheel: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		},
		marker:{
			latLng:[51.5209564,0.157134]
		}
	});
	/*-- GOOGLE MAP 1 END --*/

	/*-- GOOGLE MAP 2 --*/
	$(".google-map-2").width("100%").height("614px").gmap3({
		map:{
			options: {
			center:[51.5209564,0.157134],
			zoom: 15,
			scrollwheel: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		},
		marker:{
			latLng:[51.5209564,0.157134]
		}
	});
	/*-- GOOGLE MAP 2 END --*/

	/*-- SLIDESHOW --*/
	var getGalleria = $(".galleria");

	if( getGalleria.length ==! 0 ) {

//		Galleria.loadTheme('assets/js/galleria.classic.js');
        Galleria.loadTheme('/static/js/galleria.classic.js');
		Galleria.run('.galleria', {
			imageCrop: true,
			transition: 'fade',
			autoplay: 6000,
			idleMode:false,
			showInfo: false,
			_toggleInfo: true,
			height: windowHeight
		})
	}
	/*-- SLIDESHOW END --*/

	/*-- WINDOW SCROLL --*/
	$(window).scroll(function () {
		backTop();
	});
	/*-- WINDOW SCROLL END --*/

	/*-- WINDOW LOAD --*/
	$(window).load(function() {
		$(".site-loader").delay(100).fadeOut("slow");
		siteMenu();
		siteMasonry();
		backTop();
	});
	/*-- WINDOW LOAD END --*/

	/*-- WINDOW RESIZE --*/
	$(window).resize(function() {
		windowWidth = window.innerWidth;
		windowHeight = window.innerHeight;

		siteMenu();
		siteToggle();
		siteMasonry();
		backTop();

		var tabs = $('.tab-content').html();

		if(tabs){
		    $('.tab-content #specs, .tab-content #contactme').width(homeSpaceWidth);

		} else{
		    console.log('no tabs ');
		}
	});
	/*-- WINDOW RESIZE END --*/

	var language = (function(){
			var elm = document.querySelector('.langSelect');

            //if the element is not on the page escape
			if(!elm) return;

			elm.addEventListener('click', function(e){

					console.log('inside ev listen: ', e.target.getAttribute('data-lang'));
					var lang = e.target.getAttribute('data-lang');
					var curUrl = window.location.href.split('?')[0] + '?lang=' + lang;
					// window.open(curUrl,"_self")
					// window.location.href = curUrl;
					window.location.replace(curUrl);

			});


			var langSelected = getParameterByName('lang');
			console.log(langSelected);

			if(langSelected == null){
				console.log('no language set');

			}else {
				$('.content').html(content[langSelected]);
				var swapTo = (langSelected === 'GB') ? 'ES' : 'GB';
				var imgSrc = $(".langSelect").attr("src");
				imgSrc	= imgSrc.split('/');
				imgSrc[imgSrc.length - 1] = swapTo+".png";
				console.log('imgSrc', imgSrc.join('/'));
				$(".langSelect").attr("src",imgSrc.join('/')).attr('data-lang', swapTo);
				// $('header-menu')

				$('.header-menu').find('a').each(function() {
						var link = $(this).attr('href');
						$(this).attr('href', link+'?lang='+langSelected);

						console.log(link+'?lang='+langSelected);
				});

			}


			// var default = 'GB';
			// settings = {
			// 	available = {
			// 		GB : 'GB',
			// 		ES : 'ES'
			// 	}
			// };

	})();

//	$('#homeNav a').click(function (e) {
//          e.preventDefault()
//          $(this).tab('show')
//    });



	var contacForm = (function(){

        var form = document.querySelector('form');

        if(!form) return;

        var button = document.querySelector('button');
        button.addEventListener('click', function(e){

            console.log(e);
            var name = document.querySelector('[name="name"]').value;
            var email = document.querySelector('[name="email"]').value;
            var message = document.querySelector('[name="message"]').value;
            console.log(name);
            console.log(email);
            console.log(message);



            if( name.length && email.length && message.length  ){

                var data = {
                            name: name,
                            email: email,
                            message: message
                 };

                console.log("we are ready to send");

                $.ajax({

                       url: "/contact/",
                       data: data = data

                }).done(function(e) {

                       console.log("retruned from the server", e);

                       if(!e.error){
                            $('form button').parent('div').html(e.pmessage).css('color', 'green');
                            $('[name="name"], [name="email"], [name="message"] ').val('');

                       }else{

                            alert(e.pmessage);
                       }


                });
            }

        });






	})();


	var homeSpaceWidth = $('.tab-content #home').width();

    $('.tab-content #specs, .tab-content #contactme').width(homeSpaceWidth);
});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}




