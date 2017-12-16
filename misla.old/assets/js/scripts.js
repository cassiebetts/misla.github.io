/*
* ----------------------------------------------------------------------------------------
Author       : themepoke
Template Name: Emix Onepage business Template
Version      : 1.0
* ----------------------------------------------------------------------------------------
*/
(function($) {
    'use strict';

    jQuery(document).ready(function() {

        /*START PRELOADED*/
        $(window).on('load', function() {
            $('.preloader').fadeOut();
            $('.preloader-area').delay(350).fadeOut('slow');
        });
        function showHide(shID) {
    if (document.getElementById(shID)) {
        if (document.getElementById(shID+'-show').style.display != 'none') {
            document.getElementById(shID+'-show').style.display = 'none';
            document.getElementById(shID).style.display = 'block';
        }
        else {
            document.getElementById(shID+'-show').style.display = 'inline';
            document.getElementById(shID).style.display = 'none';
        }
    }
}
        /*END PRELOADED*/

        /*START VIDEO JS*/
        function autoPlayYouTubeModal() {
            var trigger = $("body").find('[data-toggle="modal"]');
            trigger.on("click", function() {
                var theModal = $(this).data("target"),
                    videoSRC = $('#video-modal iframe').attr('src'),
                    videoSRCauto = videoSRC + "?autoplay=1";
                $(theModal + ' iframe').attr('src', videoSRCauto);
                $(theModal + ' button.close').on("click", function() {
                    $(theModal + ' iframe').attr('src', videoSRC);
                });
                $('.modal').on("click", function() {
                    $(theModal + ' iframe').attr('src', videoSRC);
                });
            });
        }
        autoPlayYouTubeModal();
        /*END VIDEO JS*/

        /*START POPUP JS*/
        $('.work-popup').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
        /*END POPUP JS*/

        /*START TESTMONIAL JS*/
        $(".testimonial-list").owlCarousel({
            items: 1,
            autoPlay: true,
            navigation: false,
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            autoHeight: true,
            pagination: true,
        });
        /*END TESTMONIAL JS*/

        /*START PERTNER JS*/
        $(".partner_list").owlCarousel({
            items: 6,
            autoPlay: true,
            navigation: false,
            itemsDesktop: [1199, 6],
            itemsDesktopSmall: [980, 6],
            itemsTablet: [768, 3],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            autoHeight: false,
            pagination: false,
        });
        /*END PERTNER JS*/

        /*START COUNTER UP JS*/
        $(".counter-number").counterUp({
            time: 2000,
            delay: 10
        });
        /*END COUNTER UP JS*/

        /*START MIXITUP JS*/
        $('.work-inner').mixItUp();
        /*END MIXITUP JS*/

        /*START MENU HIDE JS*/
        $(document).on('click', '.navbar-collapse.in', function(e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        /*END MENU HIDE JS*/

        /*START BOOTSTRAP SCROLL-SPY*/
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });
        /*END BOOTSTRAP SCROLL-SPY*/

        /*START CHANGE MENU BACKGROUND JS*/
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 200) {
                $('.header-top-area').addClass('menu-bg');
            } else {
                $('.header-top-area').removeClass('menu-bg');
            }
        });
        /*END CHANGE MENU BACKGROUND JS*/

        /*START TOOLTIP JS*/
        $('[data-toggle="tooltip"]').tooltip();
        /*END TOOLTIP JS*/

        /*START SMOOTH SCROLL JS*/
        $('a.smoth-scroll').on("click", function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 60
            }, 1000);
            e.preventDefault();
        });
        /*END SMOOTH SCROLL JS*/

        /*START CONTACT MAP JS*/
        var contact = {
            "lat": "34.0180379",
            "lon": "-118.3376118"
        }; //Change a map coordinate here!
        try {
            $('.map').gmap3({
                action: 'addMarker',
                latLng: [contact.lat, contact.lon],
                map: {
                    center: [contact.lat, contact.lon],
                    zoom: 5
                },
            }, {
                action: 'setOptions',
                args: [{
                    scrollwheel: false
                }]
            });
        } catch (err) {}
        /*END CONTACT MAP JS*/

        /*START SCROLL TO UP*/
        $(window).scroll(function() {
            if ($(this).scrollTop() > 250) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });
        $('.scrollup').on("click", function() {
            $("html, body").animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        /*END SCROLL TO UP*/
    });

})(jQuery);