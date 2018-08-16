
// owl Courusel START
    $(document).ready(function() {
        
        var owl = $('.security .owl-carousel');
        owl.owlCarousel({
        margin: 10,
        nav: false,
        loop: true,
        center:true,
        responsive: {
            0: {
            items: 1
            },
            374: {
            items: 2
            },
            767: {  
            items: 3
            },
        }
        })

        var owl = $('.opportunity .owl-carousel');
        owl.owlCarousel({
        margin: 10,
        nav: false,
        dots: false,
        loop: true,
        center: true,
        responsive: {
            0: {
            items: 2
            },
            450: {
            items: 3
            },
        }
        })

        var owl = $('.packets .owl-carousel');
        owl.owlCarousel({
        margin: 10,
        nav: false,
        dots: false,
        loop: true,
        center:true,
        responsive: {
            0: {
            items: 1
            },
            767: {
            items: 3
            },
        }
        })

        var owl = $('.company .owl-carousel');
        owl.owlCarousel({
        margin: 10,
        nav: true,
        loop: true,
        center:true,
        responsive: {
            0: {
            items: 1
            },
            375: {
            items: 2
            },
            991: {
            items: 3
            }
        }
        })
    })

// owl courusel END


$(function(){

    // Sticky Menu Start
    window.onscroll = function() {
        
        var navbar = $("header .menu");
    
        if (window.pageYOffset >= 1) {
            navbar.addClass("sticky")
        } else {
            navbar.removeClass("sticky");
        }

    };
 
    // Sticky Menu End

    // Responsive Menu Start
    var menu = $('header .menu .resp-menu'),
        mobil_menu = $('header .mobil-menu'),       
        close = $('header .mobil-menu .close');
    
    menu.click(function(){
        mobil_menu.addClass('active');
    })
    close.click(function(){
        mobil_menu.removeClass('active');
    })
    // Responsive Menu End


    // Responsive Business Start    
    var btns = $(".business .mobile-btns button"),
        all_mobil_row = $(".business .mobil-row");

    btns.click(function(){
        btns.removeClass('active');
        $(this).addClass("active");
        all_mobil_row.removeClass("active");

        var value = $(this).text(),
            current_active = $(`.business .mobil-row[data-value=${value}]`);
        current_active.addClass('active');
    })
    // Responsive Business End
    
})
