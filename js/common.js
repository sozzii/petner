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

