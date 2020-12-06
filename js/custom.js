jQuery(document).ready(function($) {
    'use strict';
    var templateUXCarousel = function() {
        $('.wide-slider').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 0,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            nav: false,
            autoplayHoverPause: false,
            items: 1,
            autoheight: true,

            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 1,
                    nav: false
                }
            }
        });


    };
    templateUXCarousel();
    // init Isotope
    var $grid = $('.grid').isotope({
        // options
    });
    // filter items on button click
    $('.filter-button-group').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    //typo
    var app = document.getElementById('app');

    var typewriter = new Typewriter(app, {
        loop: true
    });

    typewriter.typeString('Technologies.')
        .pauseFor(1800)
        .deleteAll()
        .typeString('Graphics and Creatives.')
        .pauseFor(1800)
        .deleteAll()
        .typeString('Graphics and Creatives.')
        .start();
    //tabs
    var tabbuttons = document.querySelectorAll(".tabcontainer .buttoncontainer button");
    var tabpanels = document.querySelectorAll(".tabcontainer .tabpanel");

    function showpanel(panelindex, colorCode) {
        tabbuttons.forEach(function(node) {
            node.style.backgroundColor = "";
            node.style.color = "";
        });
        tabbuttons[panelindex].style.backgroundColor = colorCode;
        tabbuttons[panelindex].style.Color = "white";
        tabpanels.forEach(function(node) {
            node.style.display = "none";
        });
        tabpanels[panelindex].style.display = "block";
        tabpanels[panelindex].style.backgroundColor = "";
    }
    showpanel(0, '#3399ff');
});