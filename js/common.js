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

//top 섹션1부터 opacity1 
function scrolltop() {
    let  main_scrollTop;

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

//top 버튼 클릭 > top으로 올라가기
$('main .quick').on('click', function () {
    $('html').animate({ scrollTop: 0 }, 800);
});

//nav menu click > color 변경
// menu click > scroll 이동


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


// sub1

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

$('.quick-sub a:nth-of-type(4)').on('click', function () {
    $('html').animate({ scrollTop: 0 }, 800);
});

