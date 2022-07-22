
$(function () {
    $(".s1 .slide-wrap").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        
        // visual slide 자동슬라이드
        autoplay: true, 
        autoplaySpeed: 3000,
    });
});
