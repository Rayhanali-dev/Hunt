$(function(){
    $('.banner-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        arrows: true,
        prevArrow: '.prev-arrow',
        nextArrow: '.next-arrow',
        responsive: [
            {
              breakpoint: 576,
              settings: {
                arrows: false,
              }
            },
        ]
    });
    $('.service-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        arrows: true,
        vertical: true,
        centerMode: true,
        initialSlide: 1,
        centerPadding: '0px',
        prevArrow: '.up-arrows',
        nextArrow: '.down-arrows',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                vertical: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false,
              }
            },
            {
              breakpoint: 768,
              settings: {
                vertical: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
              }
            },
            {
              breakpoint: 576,
              settings: {
                vertical: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
              }
            },
        ]
    });

    $('.comment-left-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        arrows: true,
        vertical: true,
        centerMode: true,
        initialSlide: 1,
        centerPadding: '0px',
        prevArrow: '.comment-prev',
        nextArrow: '.comment-next',
        asNavFor: '.comment-right-wrapper',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                vertical: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '0px',
              }
            },
            {
              breakpoint: 768,
              settings: {
                vertical: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
              }
            },
            {
              breakpoint: 576,
              settings: {
                vertical: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
              }
            },
        ]
    });
    
    $('.comment-right-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        arrows: false,
        vertical: true,
        centerMode: false,
        initialSlide: 1,
        asNavFor: '.comment-left-wrapper',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                vertical: false,
              }
            },
            {
              breakpoint: 768,
              settings: {
                vertical: false,
              }
            },
            {
              breakpoint: 576,
              settings: {
                vertical: false,
              }
            },
        ]
    });

    $('.counter').counterUp({
        delay: 9,
        time: 1000
    });

    $('.sponser-wrapper').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        arrows: false,
        centerMode: true,
        initialSlide: 2,
        centerPadding: '0px',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                centerMode: false,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
        ]
    });

    new VenoBox({
        selector: '.my-image-links',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'rotating-plane'
    });

    $(window).scroll(function(){
        if ($(window).scrollTop () > 300) {
            $('.navbar').addClass('sticky-menu')
        }
        else {
            $('.navbar').removeClass('sticky-menu')
        }
    })
})


// For mibile menu start

 let mobile_menu = document.getElementById("mobile-menu")
 let bars = document.querySelector(".bars")
 let line_one = document.querySelector(".line-one")
 let line_two = document.querySelector(".line-two")
 let line_three = document.querySelector(".line-three")

 bars.addEventListener("click", function(){
    mobile_menu.classList.toggle("slide-menu")
 })

 bars.addEventListener("click", function(){
    line_one.classList.toggle("baka-1");
    line_two.classList.toggle("baka-2");
    line_three.classList.toggle("baka-3");
 })


// For mibile menu end


// scroll spy part start

var html_body = $('html, body');
$('.collapse a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 140
            }, 1500);
            return false;
        }
    }
})

// scroll spy part end
// scroll spy part start

var html_body = $('html, body');
$('#mobile-menu a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 140
            }, 1500);
            return false;
        }
    }
})

// scroll spy part end

