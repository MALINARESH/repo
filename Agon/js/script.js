$(document).ready(function() {
    $(".tabs__nav li a").click(function() {
        $('.tabs__nav li ').removeClass('active');
        $(this).parent().addClass('active');
        $('.tab__content').hide();
        var activeTab = $(this).attr('href');
        $(activeTab).fadeIn();
        return false;
    });
    $(".btn--popup").click(function() {
        var activepopup = $(this).attr('data-modal')
        $(activepopup).addClass('show');
    });
    $(".close").click(function() {
        $('.modal').removeClass('show');
    })
    $('.slider1').owlCarousel({
        loop: true,
        margin: 20,

        responsive: {
            1320: {
                items: 3,
            },
            768: {
                items: 1
            },
            1024: {
                items: 2
            },
            578: {
                items: 1
            },
            480: {
                items: 1
            },
            360: {
                items: 1
            },
            320: {
                items: 1,

            },
        }

    })
    $('.slider2').owlCarousel({
        loop: true,
        margin: 20,
        items: 4,
        nav: true,
        dots: false,
        responsive: {
            1320: {
                items: 4,
            },
            1024: {
                items: 2,
            },
            768: {
                items: 2,
            },
            578: {
                items: 1
            },
            480: {
                items: 1,
                nav: false,
            },
            360: {
                items: 1,
                nav: false,
            },
            320: {
                items: 1,
                nav: false,
            },
        }

    })

});