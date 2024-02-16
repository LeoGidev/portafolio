//mueve el background cuando mueves el scroll y da la sensacion de ir atrasado
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $('body').css('background-position', 'center ' + (-scroll/10) + 'px');
});
