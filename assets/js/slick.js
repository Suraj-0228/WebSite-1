$(document).ready(function () {
    // Hero Slider {home.html}
    $('.hero-slider').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                arrows: false
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                arrows: false
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        }
        ]
    });
    // Movie Card Slider {home.html}

    // Offer Image Slider {home.html}
    $('.img-slider').slick({
        slidesToShow: 2,        // Show 2 on desktop
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        responsive: [
            {
                breakpoint: 768,    // Below 768px (mobile)
                settings: {
                    slidesToShow: 1,  // Show 1 on mobile
                    arrows: false,
                    centerMode: true
                }
            }
        ]
    });
    // Movie Slider {movies.html}
    $('.movie-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        dots: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });
    // Catagory-slider {movies.html}
    $('.catagory-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: true,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    // Cast/Crew Slider {movies-setails.html}
    $('.cast-slider, .crew-slider').slick({
        slidesToShow: 5,        // Show 2 on desktop
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,    // Below 768px (mobile)
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    arrows: false,
                    centerMode: false,
                    dots: false
                }
            }
        ]
    });
});