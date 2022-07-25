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
        $(this).next(".sub2-1 .sub2-1-menu2").stop().slideToggle(400); // : 1개
        $(this).toggleClass('on').siblings().removeClass('on');
        $(this).next(".sub2-1 .sub2-1-menu2").siblings(".sub2-1 .sub2-1-menu2").slideUp(400); // 1개는 닫히고, 1개는 펼쳐짐
    });

    $(".sub2-2-list").click(function() {
        alert('페이지 준비중입니다~!');
    });

    //sub2_animation
    $(window).on('scroll',function(){
        scrollTop = $(window).scrollTop();
        let shape = $('main .sub2').offset().top;
        if( shape+210 < scrollTop){
            $('circle').addClass('active');
            $('rect').addClass('active');
        }
    });

    $('main .tab-menu a:nth-of-type(1)').on('click',function(){
        $('sub1-1').offset().top;
        posY = $('.click').eq(i).offset().top;

        if (posY - winH < scrollTop) {
            $('.click').eq(i).addClass('active');
        }
    })
    $('main .tab-menu a:eq(2)').on('click',function(){
        $('sub1-2').offset().top;
    })

}


$(window).on('load',init);
