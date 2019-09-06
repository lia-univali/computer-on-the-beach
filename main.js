var navOffsetTop
$(document).ready(function() {
    navOffsetTop = $('nav').offset().top
    $(window).on('scroll', onScroll)
})
function onScroll() {
    if (navOffsetTop < $(window).scrollTop() && !$('nav').hasClass('fixed')) {
        $('nav').addClass('fixed')
        $('body').css("padding-top", $('nav').height())
    }
    if (navOffsetTop > $(window).scrollTop() && $('nav').hasClass('fixed')) {
        $('nav').removeClass('fixed')
        $('body').css("padding-top", 0)
    }
}