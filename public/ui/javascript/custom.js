(function ($) {
    'use strict';

    $(window).scroll(function () {
        var sticky = $('header'),
            scroll = $(window).scrollTop();

        if (scroll >= 250) {
            sticky.addClass('sticky-nav');
            $('body').addClass('fixed-content');
        } else {
            sticky.removeClass('sticky-nav');
            $('body').removeClass('fixed-content');
        }

    });

    jQuery(document).ready(function ($) {

        // Scroll next section

        function videoTrigger() {
            var trigger = $('.video-trigger');
            if (!trigger.length) return;
            trigger.fancybox();
        }
        videoTrigger();

        AOS.init({
            once: true,
        });

       

        // our-service-carousel
        $('.our-service-carousel .owl-carousel').owlCarousel({
            loop: true,
            autoplay: false,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            margin:15,
            lazyLoad: true,
            items: 1,
            responsiveClass: true,
            nav: true,
            dots: false,
            center:true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
        
        // our-service-carousel
        $('.testimonials-carousel .owl-carousel').owlCarousel({
            loop: true,
            autoplay: false,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            margin:30,
            lazyLoad: true,
            items: 1,
            responsiveClass: true,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });

            
     
      

        $('.news-carousel .owl-carousel').owlCarousel({
            loop: false,
            autoplay: false,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            margin:15,
            lazyLoad: true,
            items: 1,
            responsiveClass: true,
            nav: true,
            dots: false,
            
            // center:true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1200: {
                    items: 5
                }
            }
        });


        //our-venues-carousel

        $('.our-venues-carousel .owl-carousel').owlCarousel({
            loop: true,
            autoplay: false,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            margin:15,
            lazyLoad: true,
            items: 1,
            responsiveClass: true,
            nav: true,
            dots: false,
            center:true,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });

        //carousel_images
        

        $('.carousel_images .owl-carousel').owlCarousel({
            loop: true,
            autoplay: false,
            autoplayTimeout: 6000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            margin:15,
            lazyLoad: true,
            items: 1,
            responsiveClass: true,
            nav: false,
            dots: true,
            responsive: {
                
                1200: {
                    items: 1
                }
            }
        });

        //partner-carousel

        $('.partner-carousel .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout:4000,
            autoplaySpeed: 1500,
            smartSpeed: 1500,
            margin:30,
            lazyLoad: true,
            items: 1,
            responsiveClass: true,
            nav: false,
            dots: false,
            responsive: {
                0: {
                    items:3,
                },
                768: {
                    items: 5
                },
                1024: {
                    items: 6
                },
                1200: {
                    items: 9
                }
            }
        });


// funfact-carousel


if ($('div').hasClass('our-venues')) {
    var ourVenuesCarousel = $('#ourVenues');

    ourVenuesCarousel.owlCarousel({

            loop: true,
            // nav:true,
            dots:false,
            margin: 30,
            autoplay: false,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            touchDrag:false,
            slideBy: 2,
            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 2
                },
                1000: {
                    items: 2
                }
            }
        });

    $(".pwNext").click(function() {
        ourVenuesCarousel.trigger('next.owl.carousel');
    });
    $(".pwPrev").click(function() {
        ourVenuesCarousel.trigger('prev.owl.carousel');
    });
}

if ($('div').hasClass('our-venues')) {
    var ourVenuesCarousel2 = $('#ourVenues2');

    ourVenuesCarousel2.owlCarousel({

            loop: true,
            // nav:true,
            dots:false,
            margin: 30,
            autoplay: false,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            touchDrag:false,
            slideBy: 1,
            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

    $(".pwNext").click(function() {
        ourVenuesCarousel2.trigger('next.owl.carousel');
    });
    $(".pwPrev").click(function() {
        ourVenuesCarousel2.trigger('prev.owl.carousel');
    });
}


$('.funfact-carousel .owl-carousel').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout:4000,
    autoplaySpeed: 1500,
    smartSpeed: 1500,
    margin:30,
    lazyLoad: true,
    items: 1,
    responsiveClass: true,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items:1,
        },
        768: {
            items: 1
        },
        1024: {
            items: 2
        },
        1200: {
            items: 2
        }
    }
});

//programs-available-carousel


$('.programs-available-carousel .owl-carousel').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout:4000,
    autoplaySpeed: 1500,
    smartSpeed: 1500,
    margin:30,
    lazyLoad: true,
    items: 1,
    responsiveClass: true,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items:1,
        },
        768: {
            items: 2
        },
        1024: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
});
//



// our-service-carousel
$('.our-service-carousel2 .owl-carousel').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 6000,
    autoplaySpeed: 1500,
    smartSpeed: 1500,
    margin:15,
    lazyLoad: true,
    items: 1,
    responsiveClass: true,
    nav: true,
    dots: false,
    center:true,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
//


        
        $( function() {
            $( "#selectDate" ).datepicker();
            
            
            $(".timepicker").timepicker({
                timeFormat: "h:mm p", 
                interval: 30, 
                minTime: "06", 
                maxTime: "23:55pm", 
                defaultTime: "06", 
                startTime: "01:00", 
                dynamic: true, 
                dropdown: true, 
                scrollbar: false,
              });
          });


        // Start Counter
        $.fn.digits = function () {
            return this.each(function () {
                $(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            })
        }
        $('.bg-content .left-side span').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');


            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },

                {

                    duration: 10000,
                    easing: 'linear',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        $($this).digits();
                        //alert('finished');
                    }

                });
        });

        $(window).scroll(function(){
            
            var svrollTop = $(window).scrollTop()
            if(svrollTop > 300){
                $('.gotop').css({"right": "17px", "transition": "ease all 1s"});
            }else{
                $('.gotop').css({"right": "-100px", "transition": "ease all 1s"});
            }
            
            console.log(svrollTop/2);
            $('.banner img').css('top', svrollTop/2)
        })
            
     $('.gotop').click(function(){
        window.scrollTo({ top: 0, behavior: 'smooth' });

     })


        //phone number with country
        var input = document.querySelector("#phone");
        intlTelInput(input, {
          initialCountry: "auto",
          geoIpLookup: function (success, failure) {
            $.get("https://ipinfo.io", function () { }, "jsonp").always(function (resp) {
              var countryCode = (resp && resp.country) ? resp.country : "us";
              success(countryCode);
            });
          },
        });

//hover
    document.addEventListener("DOMContentLoaded", function(){
    // make it as accordion for smaller screens
        if (window.innerWidth > 992) {
    
        document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
    
            everyitem.addEventListener('mouseover', function(e){
    
                let el_link = this.querySelector('a[data-bs-toggle]');
    
                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.add('show');
                    nextEl.classList.add('show');
                }
    
            });
            everyitem.addEventListener('mouseleave', function(e){
                let el_link = this.querySelector('a[data-bs-toggle]');
    
                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.remove('show');
                    nextEl.classList.remove('show');
                }
    
    
            })
        });
     }
     
    }); 
//


 });

  

}(jQuery));

