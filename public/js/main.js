$(document).ready(function() {
    $('.switch').on('click', function() {
        console.log('ddd');
       $('body').toggleClass('menu-active');
    });
});

$(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
        $('header').addClass('sticky');
    }
    else {
        $('header').removeClass('sticky');
    }
});