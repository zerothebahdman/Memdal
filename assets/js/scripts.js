//slider script
$('#courses').owlCarousel({
    items: 5,
    autoplay: true,
    smartSpeed: 1500,
    loop: true,
    autoplayHover: true,
    dots: true,
    navText: ['<i class="fas fa-chevron-left fa-2x></i>"', '<i class="fas fa-chevron-right fa-2x"></i>'],
    nav: true,
    touchDrag: true,
    responsiveClass: true, //want it to pay attention to responsive sites
    responsive: {
        0: { //for size of width from 0px and above
            items: 2
        },

        780: { //780px and above
            items: 3
        },
        1024: {
            items: 5
        }
    }

});


$('.dropdown').hover(function () {
    $(this).toggleClass('open');
});