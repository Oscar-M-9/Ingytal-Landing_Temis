
let intervalo;

$(document).ready(function () {
    if ($(window).width() > 990) {
        $(".dropdown").hover(function() {
            $(this).find(".dropdown-menu").show().addClass("animate__animated animate__zoomIn animate__faster").removeClass("animate__zoomOut");
        }, function() {
            $(this).find(".dropdown-menu").hide().addClass("animate__animated animate__zoomOut").removeClass("animate__zoomIn");
        });
    } else {
        $(".dropdown").unbind("hover");
    }

    const priceAnual = [400, 800]
    const priceAnualTached = [600, 1200]
    const priceMensual = [600, 1200]
    const priceMensualTached = [900, 1800]

    $('#switch-price').change(function() {
        if ($(this).is(':checked')) {
            // console.log('El switch está activado');
            $("#price-basico").text(priceMensual[0]);
            $("#price-basico-old").text('S/ '+ priceMensualTached[0]);
            $("#price-intermedio").text(priceMensual[1]);
            $("#price-intermedio-old").text('S/ '+ priceMensualTached[1]);
            // Realiza acciones si el switch está activado
        } else {
            $("#price-basico").text(priceAnual[0]);
            $("#price-basico-old").text('S/ '+ priceAnualTached[0]);
            $("#price-intermedio").text(priceAnual[1]);
            $("#price-intermedio-old").text('S/ '+ priceAnualTached[1]);
        }
    });

    
    
})