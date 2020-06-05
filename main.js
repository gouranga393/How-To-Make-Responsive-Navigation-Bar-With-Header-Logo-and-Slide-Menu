$(document).ready(function () {
    $('.show-search').click(function () {
        $('.nav-search').css('display', 'block');
        $('.search-input:first').focus();
    });
    $('.hide-search').click(function () {
        $('.nav-search').css('display', 'none');
    });
    $('.show-mobile-menu').click(function () {
        $('body').addClass('nav-active');
    });
    $('.hide-mobile-menu').click(function () {
        $('body').removeClass('nav-active');
    });
});
