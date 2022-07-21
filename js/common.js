// common.js

function init(){
    // load
    $('header').load('inc.html header > .head');
    $('footer').load('inc.html footer > .foot');
}

$(window).on('load',init);
