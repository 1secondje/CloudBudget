$(document).ready(function () {
    $('.menu-burger__header').click(function () {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.menu').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
    });
});

$(document).ready(function () {
    $('.menu__link').click(function (event) {
        $('.menu-burger__header').removeClass('open-menu');
        $('.menu').removeClass('open-menu');
        $('body').removeClass('fixed-page');
    });
});

$(function () {
            $("[data-scroll]").on("click", function (event) {
                event.preventDefault();

                let elementId = $(this).data('scroll');
                let elementOffset = $(elementId).offset().top;
                console.log(elementOffset);

                $("html, body").animate({
                    scrollTop: elementOffset - 60
                }, 700);
            });
        });

        $(function(){
            $(window).scroll(function(){
                event.preventDefault();
                if ($(this).scrollTop() > 200)
                $('a#scrolling').fadeIn();
                else 
                    $('a#scrolling').fadeOut(400);
            });
            $('a#scrolling').click(function(){
                $('body, html').animate({
                    scrollTop: 0
                }, 700);
                return false;
            });
        });