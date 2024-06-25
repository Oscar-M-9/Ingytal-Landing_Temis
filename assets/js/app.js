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

    /*
    if ($(window).width() > 990) {
        $(".dropdown").hover(function() {
            $(this).find(".dropdown-menu").show().addClass("animate__animated animate__zoomIn animate__faster").removeClass("animate__zoomOut");
        }, function() {
            $(this).find(".dropdown-menu").hide().addClass("animate__animated animate__zoomOut").removeClass("animate__zoomIn");
        });
    } else {
        $(".dropdown").unbind("hover");
    }
    */

    $("#btn-video-yt").click(function () {
        $("#container-video-yt").empty();
        const iframeYT = `<iframe class="youtube-iframe" src="https://www.youtube.com/embed/K5hReaRLACs?autoplay=1&rel=0&enablejsapi=1" title="Temis | Simplifica tu Gestión Legal" autoplay="true" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
        $("#container-video-yt").html(iframeYT);
        
    });

    // $("#btn-video-yt").hover(function () {
    //     $(this).addClass("animate__animated animate__zoomIn");
    // }, function (){
    //     $(this).removeClass("animate__animated animate__zoomIn");
    // })
})