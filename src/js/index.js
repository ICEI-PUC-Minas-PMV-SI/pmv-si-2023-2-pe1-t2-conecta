$(document).ready(function () {
    // Abre mobile menu
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

    // Ativa overlay ao abrir menu mobile
    $(".menu-toggle").click(function() {
        $("#mobile-menu").toggleClass("open-menu");
        $("#page-overlay").toggle();
    });
});


// Fecha o menu ao redimensionar a tela para fora do modo mobile e remove overlay
$(window).resize(function () {
    if ($(window).width() > 768) {
        $('.mobile-menu').css('display', 'none');
        $("#page-overlay").hide();
    }
});
