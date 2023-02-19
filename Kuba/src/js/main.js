$(document).ready(function () {
    $('.photo__slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2500,
        cssEase: 'linear'
    });

    $('.header__menu-btn').on('click', function () {
        $('.header__menu-list').slideToggle();
    })
});