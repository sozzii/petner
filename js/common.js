// common.js

function init(){

    // load
    $('header').load('inc.html header > .head');
    $('footer').load('inc.html footer > .foot');
    
    // header scroll > background-color
    let headerscroll;

    $(window).on('scroll', function () {
        headerscroll = $(window).scrollTop();
    
        if (20 < headerscroll) {
            $('.head').addClass('active');
        } else {
            $('.head').removeClass('active');
        }
    });

    //scroll 전체 섹션 하나씩 나타나기
    let posY;
    let winH = $(window).height();
    let scrollTop;

    $(window).on('scroll', function () {
        scrollTop = $(window).scrollTop();

        $('.click').each(function (i) {
            posY = $('.click').eq(i).offset().top;

            if (posY - winH < scrollTop) {
                $('.click').eq(i).addClass('active');
            }
        });
    });

    //top 섹션1부터 opacity1 
    let scrollQ;

    $(window).on('scroll', function () {
        scrollQ = $(window).scrollTop();

        if (900 < scrollQ) {
            $('main .quick').addClass('active');
        } else {
            $('main .quick').removeClass('active');
        }
    });

    //sub2_accordion menu
    $(".sub2-1 .sub2-1-menu1").click(function() {
        $(".sub2-1 .sub2-1-menu2").slideUp();
        $(this).next().stop().slideToggle(400);
        $(this).toggleClass('on');
    });
    // $(".sub2-1 .sub2-1-menu1").click(function() {
    //     $(this).next(".sub2-1 .sub2-1-menu2").stop().slideToggle(400); // : 1개
    //     $(this).toggleClass('on').siblings().removeClass('on');
    //     $(this).next(".sub2-1 .sub2-1-menu2").siblings(".sub2-1 .sub2-1-menu2").slideUp(); // 1개는 닫히고, 1개는 펼쳐짐
    // });

    $(".sub2-2-list").click(function() {
        alert('페이지 준비중입니다~!');
    });

    //sub2_animation
    $(window).on('scroll',function(){
        scrollTop = $(window).scrollTop();
        let shape = $("main .sub2").offset().top;
        if( shape+210 < scrollTop){
            $("circle").addClass('active');
            $("rect").addClass('active');
        }
    });

<<<<<<< HEAD
    // $(".button01").click(function(){
    //     $(".button02").addClass('remove');
    //     $(".button01").addClass('active');
    //     $(".button02 p").addClass('remove');
    //     $(".button01 p").addClass('active');
    // })
    // $(".button02").click(function(){
    //     $(".button01").addClass('remove');
    //     $(".button02").addClass('active');
    //     $(".button01 p").addClass('remove');
    //     $(".button02 p").addClass('active');
    // })

    //sub4-2 accordial menu
    $(".board ul li p").click(function() {
        $(".board ul li div").slideUp();
        $(this).next().stop().slideToggle(400);
        $(this).toggleClass('on');
    });
=======
    //sub4_tap menu
    $(".button01").click(function(){
        $(".button02").addClass('remove');
        $(".button01").addClass('active');
        $(".button02 p").addClass('remove');
        $(".button01 p").addClass('active');
    })
    $(".button02").click(function(){
        $(".button01").addClass('remove');
        $(".button02").addClass('active');
        $(".button01 p").addClass('remove');
        $(".button02 p").addClass('active');
    })

    //sub3_slide_slick
    $(".slide:nth-of-type(1)").slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows:false,
        dots: false,
        asNavFor: '.slide:nth-of-type(2)',
        focusOnSelect:true,
        centerMode: true,
        infinite:true,
        draggable:true,
        initialSlide : 2
    });
    $(".slide:nth-of-type(2)").slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slide:nth-of-type(1)',
        fade: true,
        initialSlide : 2
    });
    $(".slide:nth-of-type(1) li").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('.slide:nth-of-type(1) li').removeClass('active');
    })
>>>>>>> 67b2aa96be95866a4bdc2687063ddd1d784ba4b9

}

$(window).on('load',init);
