$(document).ready(function () {
    
    $('.slick-comments').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        infinite: false,
        speed: 300,
        // centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // $(".dropdown").hover(function() {
    //     $(this).find(".dropdown-menu").show();
    // }, function () {
    //     $(this).find(".dropdown-menu").hide();
    // });

    if ($(window).width() > 990) {
        $(".dropdown").hover(function() {
            $(this).find(".dropdown-menu").show();
        }, function() {
            $(this).find(".dropdown-menu").hide();
        });
    } else {
        $(".dropdown").unbind("hover");
    }
})