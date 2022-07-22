//header, footer 연결
$('header').load('inc.html .head');
$('footer').load('inc.html footer');

//header scroll down > background-color변경
function scroll() {
    let headerscroll;

    $(window).on('scroll', function () {
        headerscroll = $(window).scrollTop();

        if (20 < headerscroll) {
            $('.head').addClass('active');
        } else {
            $('.head').removeClass('active');
        }
    });
}

$(window).on('load', scroll);

//nav menu click > color 변경


//scroll 전체 섹션 하나씩 나타나기
function init() {
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
}

$(window).on('load', init);

// menu click > scroll 이동


//visual slide
function visual(){
    $('.slide-wrap').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
}

//section1
function aniMove(){
    $('.s2-ani .s2-info p')

    $('s2-ani .s2-img')
}


//top 섹션1부터 opacity1 
function topscroll() {
    let scrollTop;

    $(window).on('scroll', function () {
        scrollTop = $(window).scrollTop();

        if (900 < scrollTop) {
            $('main .quick').addClass('active');
        } else {
            $('main .quick').removeClass('active');
        }
    });
}

$(window).on('load', topscroll);

//top 버튼 클릭 > top으로 올라가기
$('main .quick').on('click', function () {
    $('html').animate({ scrollTop: 0 }, 800);
});

// sub1
let aTab

$('.tab-menu a').on('click',function(){
    $('.tab-menu a').addClass('active')
})

function topscroll() {
    let scrollTop;

    $(window).on('scroll', function () {
        scrollTop = $(window).scrollTop();

        if (900 < scrollTop) {
            $('main .quick-sub').addClass('active');
        } else {
            $('main .quick-sub').removeClass('active');
        }
    });
}

$(window).on('load', topscroll);

$('.quick-sub a:nth-of-type(4)').on('click', function () {
    $('html').animate({ scrollTop: 0 }, 800);
});

