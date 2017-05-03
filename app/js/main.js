$(document).ready(function(){

    /*numbers count up*/
    $('.counter').counterUp({

    });

    /*preloader*/
    $(window).on('load', function () {
        var $preloader = $('.preloader'),
            $spinner   = $preloader.find('.preloader-spinner');
        $spinner.fadeOut();
        $preloader.delay(350).fadeOut('slow');
    });

    /*lazy load*/
    $(function() {
        $('.lazy').Lazy({
            effect: 'fadeIn',
            effectTime: 350,
            visibleOnly: false
        });
    });

    /*fixed header*/
    $(window).scroll(function(){
        var sticky = $('.header'),
            scroll = $(window).scrollTop();

        if (scroll >= 200) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

    /*anchors*/
    $('a[href^="#"]').click(function () {
        var el = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(el).offset().top
        }, 700);
        if($(window).width() < 768){
            $(".header-nav").hide();
            $(".burg-wrapper").removeClass("change");
        }
    });

    /*twitter slider*/
    $('.twitter-wrap').slick({
        dots: true,
        prevArrow: false,
        nextArrow: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll:1
    });

    /*review slider*/
    $('.review-wrap').slick({
        dots: true,
        prevArrow: false,
        nextArrow: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1
    });

    /*testimonials slider*/
    $('.testimonials-wrap').slick({
        dots: true,
        prevArrow: false,
        nextArrow: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    /*MENU BURGER*/
    $('.burg-wrapper').click(function () {
        $('.header-nav').fadeToggle();
        $(this).toggleClass('change');
        $('body').toggleClass('overflow-hidden');
    });


    /*tabs*/
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');
        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
        });


    /*circular progress bar*/
    $('.circle').circleProgress({
        size: 145,
        startAngle: 5,
        animation: {
            duration: 3000
        },
        fill: {
            color: "#00ccff"
        }
    }).on('circle-animation-progress', function(event, progress, stepValue) {
        $(this).find('.circle-percent').html(stepValue.toFixed(2).substr(2)+'%');
    });


});

/*wow effects initialize*/
new WOW().init();

/*google maps*/
function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru,
        scrollwheel: false
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
