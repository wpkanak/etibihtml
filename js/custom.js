(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {
        /*========== Responsive Menu  ==========*/
        $("#mobilemenu").slicknav({
            prependTo: '#responsive-menu1'
        });
        /*========== scroll to top  ==========*/
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 200) {
                $('.scroll-top').fadeIn(200);
            } else {
                $('.scroll-top').fadeOut(200);
            }
        });
        $('.scroll-top').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
        });
        /*==========  menu scroll  ==========*/
        $('.main-menu li a').on('click', function (event) {
            $('.menu-right li a').parent().removeClass('active');
            var $anchor = $($(this).attr('href')).offset().top - 70;
            $(this).parent().addClass('active');
            $('body, html').animate({
                scrollTop: $anchor
            }, 800);
            event.preventDefault();
            return false;
        });
        /*==========  menu sticky  ==========*/
        $('.main-menu').sticky({
            topSpacing: 0,
            zIndex:9999
        });
        /*==========  counterUp  ==========*/
        $('.counter1').counterUp({
            delay: 100,
            time: 3000
        });
        /*========== Project Grid  ==========*/
            var $grid = $('.project-grid').isotope({});
            /*========== Project Filter  ==========*/
            $('.project-filter').on('click', 'li', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
              /*========== Project Active  ==========*/
            $('.project-filter').on('click', 'li', function () {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
            });
        /*==========  isotop  ==========*/
        jQuery(window).on('load', function () {
            jQuery(".Etibi-loader").fadeOut(500);
        });
    });
})(jQuery);