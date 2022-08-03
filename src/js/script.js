$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="icon/catalog/chevron_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icon/catalog/chevron_right.png"></button>',
        autoplay: true,
        autoplaySpeed: 2000
    });
});