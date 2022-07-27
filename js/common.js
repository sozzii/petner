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

//visual slide
function visual() {
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

//main staff fadeIn-fadeOut
let now = 0;
let img = 3;
$('.s2 .s2-img img').eq(0).siblings().hide();

function staffFade() {
    if (now == img) {
        $('.s2 .s2-img img').eq(now).fadeOut(1000);
        $('.s2 .s2-img img').eq(0).fadeIn(1000);
        now = 0;
    }
    else {
        $('.s2 .s2-img img').eq(now).fadeOut(1000);
        $('.s2 .s2-img img').eq(now + 1).fadeIn(1000);
        now++;
    }
}
setInterval(staffFade, 3000);


//main top opacity 0, 섹션1부터 opacity1 
function scrolltop() {
    let main_scrollTop;

    $(window).on('scroll', function () {
        main_scrollTop = $(window).scrollTop();

        if (900 < main_scrollTop) {
            $('main .quick').addClass('active');
        } else {
            $('main .quick').removeClass('active');
        }
    });
}

$(window).on('load', scrolltop);

//main top 버튼 클릭 > top으로 올라가기
$('main .quick').on('click', function () {
    $('html').animate({ scrollTop: 0 }, 800);
});


// sub tabMenu click > scroll 이동, tabMenu indi active 현위치 표시

$('.quick-sub a:nth-of-type(4)').on('click', function () {
    $('html').animate({ scrollTop: 0 }, 800);
});

$('.tab-menu a, .quick-sub a').on('click', function () {
    event.preventDefault()
    let idx = $(this).index();
    let clickTop = $('.subscroll').eq(idx).offset().top - 200;
    // let clickTopElse = $('.subscroll').eq(0).offset().top; 

    // if(idx){
    //     clickTop
    // } else{
    //     clickTopElse
    //     $('html').animate({ scrollTop: 0 }, 800);
    // }

    $('html').animate({ scrollTop: clickTop }, 800);

    $('.tab-menu a').removeClass('active').eq(idx).addClass('active');
    $('.quick-sub a').removeClass('active').eq(idx).addClass('active');
});


//main, sub > scroll 섹션 하나씩 나타나기
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


// sub quickMenu

function topscroll() {
    let sub_scrollTop;

    $(window).on('scroll', function () {
        sub_scrollTop = $(window).scrollTop();

        if (900 < sub_scrollTop) {
            $('main .quick-sub').addClass('active');
        } else {
            $('main .quick-sub').removeClass('active');
        }
    });
}

$(window).on('load', topscroll);



