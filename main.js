var navOffsetTop
$(document).ready(function() {
    navOffsetTop = $('nav').offset().top
    $(window).on('scroll', onScroll)
})
function onScroll() {
    if (navOffsetTop < $(window).scrollTop() && !$('nav').hasClass('is-fixed-top')) {
        $('nav').addClass('is-fixed-top')
        $('body').css("padding-top", $('nav').height()-50)
    }
    if (navOffsetTop > $(window).scrollTop() && $('nav').hasClass('is-fixed-top')) {
        $('nav').removeClass('is-fixed-top')
        $('body').css("padding-top", 0)
    }
}