$(document).ready(function () {
    $('.open-menu').click(function () {
        var mobileMenu = $('.mobile-menu');

        mobileMenu.toggleClass('menu-open');

        if (mobileMenu.hasClass('menu-open')) {
            mobileMenu.css('display', 'block');
            mobileMenu.css('left', '0');
        } else {
            mobileMenu.css('display', 'none'); // Ou outro valor desejado para o estilo display
            mobileMenu.css('left', '-250px'); // Ou outro valor desejado para o estilo left
        }
    });
});
