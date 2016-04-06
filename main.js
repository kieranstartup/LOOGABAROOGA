jQuery(document).ready(function() {

    var isiPad = navigator.userAgent.match(/iPad/i) !== null;
    if (isiPad === true) {
        console.log("iPad detected");
    }

    if (jQuery(window).width() > 414) {

        jQuery(document).scroll(function() {

            if (jQuery(this).scrollTop() > 12 && jQuery(this).scrollTop() < 612) {
                jQuery('#static-image-1').addClass('image-fixed');
                jQuery('#static-image-1').fadeIn(500);
            } else {
                jQuery('#static-image-1').fadeOut(500);
            }

            if (jQuery(this).scrollTop() > 1172 && jQuery(this).scrollTop() < 1772) {
                jQuery('#static-image-2').addClass('image-fixed');
                jQuery('#static-image-2').fadeIn(500);
            } else {
                jQuery('#static-image-2').fadeOut(500);
            }

            if (jQuery(this).scrollTop() > 2380 && jQuery(this).scrollTop() < 2980) {
                jQuery('#static-image-3').addClass('image-fixed');
                jQuery('#static-image-3').fadeIn(500);
            } else {
                jQuery('#static-image-3').fadeOut(500);
            }

            if (jQuery(this).scrollTop() > 3300 && jQuery(this).scrollTop() < 3900) {
                jQuery('#static-image-4').addClass('image-fixed');
                jQuery('#static-image-4').fadeIn(500);

            } else {
                jQuery('#static-image-4').fadeOut(500);

            }

            if (jQuery(this).scrollTop() > 4357 && jQuery(this).scrollTop() < 4957) {
                jQuery('#static-image-5').addClass('image-fixed');
                jQuery('#static-image-5').fadeIn(500);

            } else {
                jQuery('#static-image-5').fadeOut(500);

            }

            if (jQuery(this).scrollTop() > 5630 && jQuery(this).scrollTop() < 6330) {
                jQuery('#static-image-6').addClass('image-fixed');
                jQuery('#static-image-6').fadeIn(500);

            } else {
                jQuery('#static-image-6').fadeOut(500);

            }

            if (jQuery(this).scrollTop() > 6794 && jQuery(this).scrollTop() < 7394) {
                jQuery('#static-image-7').addClass('image-fixed');
                jQuery('#static-image-7').fadeIn(500);

            } else {
                jQuery('#static-image-7').fadeOut(500);

            }

            if (jQuery(this).scrollTop() > 7723 && jQuery(this).scrollTop() < 8322) {
                jQuery('#static-image-8').addClass('image-fixed');
                jQuery('#static-image-8').fadeIn(500);

            } else {
                jQuery('#static-image-8').fadeOut(500);
            }

        });
    }



    if (jQuery(window).width() <= 414) {
        var initialScrollPosition = 0;

        jQuery(document).scroll(function() {


            var scrolledToPosition = jQuery(this).scrollTop();
            if (scrolledToPosition > initialScrollPosition) {
                //If scrolling down, trigger this
                //If scrolling up do nothing

                if (jQuery(this).scrollTop() > 1000 && jQuery(this).scrollTop() < 2500) {
                    jQuery('#static-image-1').not('.image-fixed').fadeIn(500);
                    jQuery('.empty').show();
                    jQuery('#static-image-1').addClass('image-fixed');
                }

                if (jQuery(this).scrollTop() > 2500 && jQuery(this).scrollTop() < 4000) {
                    jQuery('#static-image-2').not('.image-fixed').fadeIn(500);
                    jQuery('#static-image-2').addClass('image-fixed');
                }

                if (jQuery(this).scrollTop() > 4000 && jQuery(this).scrollTop() < 5500) {
                    jQuery('#static-image-3').not('.image-fixed').fadeIn(500);
                    jQuery('#static-image-3').addClass('image-fixed');

                }

                if (jQuery(this).scrollTop() > 5500 && jQuery(this).scrollTop() < 7000) {
                    jQuery('#static-image-4').not('.image-fixed').fadeIn(500);
                    jQuery('#static-image-4').addClass('image-fixed');

                }

                if (jQuery(this).scrollTop() > 7000 && jQuery(this).scrollTop() < 8500) {
                    jQuery('#static-image-5').not('.image-fixed').fadeIn(500);
                    jQuery('#static-image-5').addClass('image-fixed');

                }

                if (jQuery(this).scrollTop() > 8500 && jQuery(this).scrollTop() < 10000) {
                    jQuery('#static-image-6').not('.image-fixed').fadeIn(500);
                    jQuery('#static-image-6').addClass('image-fixed');

                }

                if (jQuery(this).scrollTop() > 10000 && jQuery(this).scrollTop() < 11500) {
                    jQuery('#static-image-7').not('.image-fixed').fadeIn(500);
                    jQuery('#static-image-7').addClass('image-fixed');

                }

                if (jQuery(this).scrollTop() > 11500 && jQuery(this).scrollTop() < 12000) {
                    jQuery('#static-image-8').not('.image-fixed').fadeIn(500);
                    jQuery('#static-image-8').addClass('image-fixed');

                }

            } else {
                //Scrolling Up
                //Add back in all the data sources
                if (jQuery(this).scrollTop() >= 0 && jQuery(this).scrollTop() <= 10) {
                    jQuery('#static-image-1,#static-image-2,#static-image-3,#static-image-4,#static-image-5,#static-image-6,#static-image-7,#static-image-8').removeClass('image-fixed');
                }
            }
            initialScrollPosition = scrolledToPosition;
        });
    }
});


jQuery(window).load(function() {
    var isiPad = navigator.userAgent.match(/iPad/i) !== null;
    if (isiPad === true) {
    }

    // This all works below

    jQuery(".image-container").css("display", "none");


    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

    function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;
    }

    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }

    function disableScroll() {
        if (window.addEventListener) // older FF
            window.addEventListener('DOMMouseScroll', preventDefault, false);
        window.onwheel = preventDefault; // modern standard
        window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
        // window.ontouchmove = preventDefault; // mobile - this prevents all scrolling - we only need to stop vertical scrolling
        document.onkeydown = preventDefaultForScrollKeys;
    }


    function enableScroll() {
        if (window.removeEventListener)
            window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
        document.onkeydown = null;
    }



    // Triangle Images
    function threeImageCSS() {
        disableScroll();
    }

    function addLandscapeClass() {
        jQuery('.close-image, img.reference-image').wrapAll('<div id="inner-scroll" class="image-container-wrapper">');
        jQuery('.image-container-wrapper').addClass('landscape');
        disableScroll();
    }

    function addPortraitClass() {
        jQuery('.close-image, img.reference-image').wrapAll('<div id="inner-scroll" class="image-container-wrapper">');
        jQuery('.image-container-wrapper').addClass('portrait');
        disableScroll();
    }

    function threeImageContainerClear() {
        jQuery('.image-container-wrapper').remove();
        jQuery('.image-container').removeClass('extended');
        jQuery('.image-container').append('<div class="close-image"></div>');
        jQuery('.close-image').after('<img class="reference-image" src=""/>');
        jQuery('.image-container').css("display", "none");
        enableScroll();
    }

    function triangleImageContainerClear() {
        jQuery('.image-container-wrapper').remove();
        jQuery('.image-1-triangle-container').children().remove();
        jQuery('.image-2-triangle-container').children().remove();
        jQuery('.image-3-triangle-container').children().remove();
        jQuery('.image-container-wrapper').removeClass('extended-triangle');
        jQuery('.image-container').css("display", "none");
        enableScroll();
    }

    function twoImageContainerClear() {
        jQuery('.image-container-wrapper').remove();
        jQuery('.image-1-two-image-container').children().remove();
        jQuery('.image-2-two-image-container').children().remove();
        jQuery('.image-container').removeClass('extended-two-image');
        jQuery('.image-container').css("display", "none");
        enableScroll();
    }

    function twoPortraitImageContainerClear() {
        jQuery('.image-container-wrapper').remove();
        jQuery('.image-1-two-portrait-image-container').children().remove();
        jQuery('.image-2-two-portrait-image-container').children().remove();
        jQuery('.image-container').removeClass('extended-two-image-portrait');
        jQuery('.image-container').css("display", "none");
        enableScroll();
    }

    /////////////////////////////////////////////
    // Two Images
    ////////////////////////////////////////////
    jQuery('span#reference-image-market').click(function() {

        // This removes the old cross and adds in functionality for a new cross
        jQuery('.close-image').remove();

        jQuery('img.reference-image').attr('src', 'images/market-1.jpg');
        jQuery('img.reference-image').addClass('image-1');
        jQuery('img.reference-image').before('<div class="close-image-1"></div>');
        jQuery('.close-image-1, img.reference-image.image-1').wrapAll('<div class="image-1-two-image-container">');


        jQuery('.image-container').append('<img class="reference-image image-2"/>');
        jQuery('img.reference-image.image-2').before('<div class="close-image-2"></div>');
        jQuery('img.reference-image.image-2').attr('src', 'images/market-2.jpg');
        jQuery('.close-image-2, img.reference-image.image-2').wrapAll('<div class="image-2-two-image-container">');

        jQuery('.image-1-two-image-container, .image-2-two-image-container').wrapAll('<div id="inner-scroll" class="image-container-wrapper">');
        jQuery('.image-container-wrapper').addClass('extended-two-image');


        disableScroll();
        jQuery('.image-container').show();
    });

    jQuery(document.body).on('click', '.close-image-1', function() {
        jQuery('.image-1-two-image-container').remove();
        if (jQuery('.image-container-wrapper').children().length === 0) {
            twoImageContainerClear();
        }
    });

    jQuery(document.body).on('click', '.close-image-2', function() {
        jQuery('.image-2-two-image-container').remove();
        if (jQuery('.image-container-wrapper').children().length === 0) {
            twoImageContainerClear();
        }
    });
    /////////////////////////////////////////////
    // Two Images
    ////////////////////////////////////////////

    /////////////////////////////////////////////
    // Two Images
    ////////////////////////////////////////////
    jQuery('span#reference-image-identity-consulting').click(function() {

        // This removes the old cross and adds in functionality for a new cross
        jQuery('.close-image').remove();

        jQuery('img.reference-image').attr('src', 'images/identity-consulting-1.jpg');
        jQuery('img.reference-image').addClass('image-1');
        jQuery('img.reference-image').before('<div class="close-image-1"></div>');
        jQuery('.close-image-1, img.reference-image.image-1').wrapAll('<div class="image-1-two-image-container">');


        jQuery('.image-container').append('<img class="reference-image image-2"/>');
        jQuery('img.reference-image.image-2').before('<div class="close-image-2"></div>');
        jQuery('img.reference-image.image-2').attr('src', 'images/identity-consulting-2.jpg');
        jQuery('.close-image-2, img.reference-image.image-2').wrapAll('<div class="image-2-two-image-container">');

        jQuery('.image-1-two-image-container, .image-2-two-image-container').wrapAll('<div id="inner-scroll" class="image-container-wrapper">');
        jQuery('.image-container-wrapper').addClass('extended-two-image');


        disableScroll();
        jQuery('.image-container').show();
    });

    jQuery(document.body).on('click', '.close-image-1', function() {
        jQuery('.image-1-two-image-container').remove();
        if (jQuery('.image-container-wrapper').children().length === 0) {
            twoImageContainerClear();
        }
    });

    jQuery(document.body).on('click', '.close-image-2', function() {
        jQuery('.image-2-two-image-container').remove();
        if (jQuery('.image-container-wrapper').children().length === 0) {
            twoImageContainerClear();
        }
    });
    /////////////////////////////////////////////
    // Two Images
    ////////////////////////////////////////////


    /////////////////////////////////////////////
    // Two Images
    ////////////////////////////////////////////
    jQuery('span#reference-image-object-compositions').click(function() {

        // This removes the old cross and adds in functionality for a new cross
        jQuery('.close-image').remove();

        jQuery('img.reference-image').attr('src', 'images/Object.Compositions.1.jpg');
        jQuery('img.reference-image').addClass('image-1');
        jQuery('img.reference-image').before('<div class="close-image-1"></div>');
        jQuery('.close-image-1, img.reference-image.image-1').wrapAll('<div class="image-1-four-image-container">');


        jQuery('.image-container').append('<img class="reference-image image-2"/>');
        jQuery('img.reference-image.image-2').before('<div class="close-image-2"></div>');
        jQuery('img.reference-image.image-2').attr('src', 'images/Object.Compositions.2.jpg');
        jQuery('.close-image-2, img.reference-image.image-2').wrapAll('<div class="image-2-four-image-container">');

        // jQuery('.image-1-four-image-container, .image-2-four-image-container').wrapAll('<div id="inner-scroll" class="image-container-wrapper-top-row">');
        
        jQuery('.image-container').append('<img class="reference-image image-3"/>');
        jQuery('img.reference-image.image-3').before('<div class="close-image-3"></div>');
        jQuery('img.reference-image.image-3').attr('src', 'images/Object.Compositions.3.jpg');
        jQuery('.close-image-3, img.reference-image.image-3').wrapAll('<div class="image-3-four-image-container">');

        jQuery('.image-container').append('<img class="reference-image image-4"/>');
        jQuery('img.reference-image.image-4').before('<div class="close-image-4"></div>');
        jQuery('img.reference-image.image-4').attr('src', 'images/Object.Compositions.4.jpg');
        jQuery('.close-image-4, img.reference-image.image-4').wrapAll('<div class="image-4-four-image-container">');

        jQuery('.image-1-four-image-container, .image-2-four-image-container, .image-3-four-image-container, .image-4-four-image-container').wrapAll('<div id="inner-scroll" class="image-container-wrapper">');




        jQuery('.image-container-wrapper').addClass('extended-two-image-two-rows');
        disableScroll();
        jQuery('.image-container').show();
    });

    jQuery(document.body).on('click', '.close-image-1', function() {
        jQuery('.image-1-four-image-container').remove();
        if (jQuery('.image-container-wrapper').children().length === 0) {
            twoImageContainerClear();
        }
    });

    jQuery(document.body).on('click', '.close-image-2', function() {
        jQuery('.image-2-four-image-container').remove();
        if (jQuery('.image-container-wrapper').children().length === 0) {
            twoImageContainerClear();
        }
    });
        jQuery(document.body).on('click', '.close-image-3', function() {
        jQuery('.image-3-four-image-container').remove();
        if (jQuery('.image-container-wrapper').children().length === 0) {
            twoImageContainerClear();
        }
    });
            jQuery(document.body).on('click', '.close-image-4', function() {
        jQuery('.image-4-four-image-container').remove();
        if (jQuery('.image-container-wrapper').children().length === 0) {
            twoImageContainerClear();
        }
    });
    /////////////////////////////////////////////
    // Two Images
    ////////////////////////////////////////////




    // Portrait
    jQuery('span#reference-image-love-loughborough').click(function() {
        jQuery('img.reference-image').addClass('portrait-image');
        jQuery('img.reference-image').attr('src', 'images/2.Love_Loughborough.JPG');
        addPortraitClass();
        jQuery('.image-container').show();
    });

    // Landscape
    jQuery('span#reference-image-place-branding').click(function() {

        jQuery('img.reference-image').attr('src', 'images/3.Love_Branding.jpg');
        addLandscapeClass();
        jQuery('.image-container').show();
    });

    // Landscape
    jQuery('span#reference-image-this-bag').click(function() {
        jQuery('img.reference-image').addClass('portrait-image');
        jQuery('img.reference-image').attr('src', 'images/4.I_Like_My_Town.jpg');
        addPortraitClass();
        jQuery('.image-container').show();
    });

    // Landscape
    jQuery('span#reference-image-falcon-works').click(function() {

        jQuery('img.reference-image').attr('src', 'images/5.Falcom_Works.jpg');
        addLandscapeClass();
        jQuery('.image-container').show();
    });

    /////////////////////////////////////////////
    // Two Portrait Images
    ////////////////////////////////////////////
    jQuery('span#reference-image-immigration').click(function() {

        // This removes the old cross and adds in functionality for a new cross
        jQuery('.close-image').remove();

        jQuery('img.reference-image').attr('src', 'images/immigration-enforcement-1.jpg');
        jQuery('img.reference-image').addClass('image-1');
        jQuery('img.reference-image').before('<div class="close-image-1"></div>');
        jQuery('.close-image-1, img.reference-image.image-1').wrapAll('<div class="image-1-two-portrait-image-container">');


        jQuery('.image-container').append('<img class="reference-image image-2"/>');
        jQuery('img.reference-image.image-2').before('<div class="close-image-2"></div>');
        jQuery('img.reference-image.image-2').attr('src', 'images/immigration-enforcement-2.jpg');
        jQuery('.close-image-2, img.reference-image.image-2').wrapAll('<div class="image-2-two-portrait-image-container">');

        jQuery('.image-1-two-portrait-image-container, .image-2-two-portrait-image-container').wrapAll('<div id="inner-scroll" class="image-container-wrapper">');
        jQuery('.image-container-wrapper').addClass('extended-two-image-portrait');

        disableScroll();
        jQuery('.image-container').show();
    });

    jQuery(document.body).on('click', '.close-image-1', function() {
        jQuery('.image-1-two-portrait-image-container').remove();
        if (jQuery('.image-container-wrapper').children().length === 0) {
            twoPortraitImageContainerClear();
        }
    });

    jQuery(document.body).on('click', '.close-image-2', function() {
        jQuery('.image-2-two-portrait-image-container').remove();
        if (jQuery('.image-container-wrapper').children().length === 0) {
            twoPortraitImageContainerClear();
        }
    });
    /////////////////////////////////////////////
    // Two Portrait Images
    ////////////////////////////////////////////

    // Landscape
    jQuery('span#reference-image-postcard').click(function() {

        jQuery('img.reference-image').attr('src', 'images/7.Postcard.jpg');
        addLandscapeClass();
        jQuery('.image-container').show();
    });

    // Portrait
    jQuery('span#reference-image-coat-of-arms').click(function() {
        // portraitCSS();
        jQuery('img.reference-image').addClass('portrait-image');
        jQuery('img.reference-image').attr('src', 'images/8.Coat_of_Arms.jpg');
        addPortraitClass();
        jQuery('.image-container').show();
    });

    // Landscape
    jQuery('span#reference-image-shown-here').click(function() {

        jQuery('img.reference-image').attr('src', 'images/9.Belco.jpg');
        addLandscapeClass();
        jQuery('.image-container').show();
    });

    // Landscape
    jQuery('span#reference-image-loughborough-town-of-sanctuary').click(function() {

        jQuery('img.reference-image').attr('src', 'images/11.Town_of_Sanctuary.jpg');
        addLandscapeClass();
        jQuery('.image-container').show();
    });

    // Landscape
    jQuery('span#reference-image-exchange').click(function() {

        jQuery('img.reference-image').attr('src', 'images/12.John_Storer_House.jpg');
        addLandscapeClass();
        jQuery('.image-container').show();
    });

    // Landscape
    jQuery('span#reference-image-tatting-shuttle').click(function() {

        jQuery('img.reference-image').attr('src', 'images/13.Tatting Shuttle.jpg');
        addLandscapeClass();
        jQuery('.image-container').show();
    });

    // Portrait
    jQuery('span#reference-image-tennis-racket-grip').click(function() {
        // portraitCSS();
        jQuery('img.reference-image').addClass('portrait-image');

        jQuery('img.reference-image').attr('src', 'images/15.Racket_Grip.jpg');
        addPortraitClass();
        jQuery('.image-container').show();
    });

    /////////////////////////////////////////////
    // Two Images
    ////////////////////////////////////////////
    jQuery('span#reference-image-dismembered-match-balls').click(function() {
        // jQuery('.image-container').addClass('extended-two-image');

        // This removes the old cross and adds in functionality for a new cross
        jQuery('.close-image').remove();

        jQuery('img.reference-image').attr('src', 'images/16.Football-1.jpg');
        jQuery('img.reference-image').addClass('image-1-footballs');
        jQuery('img.reference-image').before('<div class="close-image-1"></div>');
        jQuery('.close-image-1, img.reference-image.image-1-footballs').wrapAll('<div class="image-1-two-image-container">');


        jQuery('.image-container').append('<img class="reference-image image-2-footballs"/>');
        jQuery('img.reference-image.image-2-footballs').before('<div class="close-image-2"></div>');
        jQuery('img.reference-image.image-2-footballs').attr('src', 'images/16.Football-2.jpg');
        jQuery('.close-image-2, img.reference-image.image-2-footballs').wrapAll('<div class="image-2-two-image-container">');

        jQuery('.image-1-two-image-container, .image-2-two-image-container').wrapAll('<div id="inner-scroll" class="image-container-wrapper">');
        jQuery('.image-container-wrapper').addClass('extended-two-image');


        disableScroll();
        jQuery('.image-container').show();
    });

    jQuery(document.body).on('click', '.close-image-1', function() {
        jQuery('.image-1-two-image-container').remove();
        if (jQuery('.image-container-wrapper').children().length === 0) {
            twoImageContainerClear();
        }
    });

    jQuery(document.body).on('click', '.close-image-2', function() {
        jQuery('.image-2-two-image-container').remove();
        if (jQuery('.image-container-wrapper').children().length === 0) {
            twoImageContainerClear();
        }
    });
    /////////////////////////////////////////////
    // Two Images
    ////////////////////////////////////////////


    // Triangle
    jQuery('span#reference-image-triangle').click(function() {

        // This removes the old cross and adds in functionality for a new cross
        jQuery('.close-image').remove();


        jQuery('img.reference-image').attr('src', 'images/triangle-1.jpg');
        jQuery('img.reference-image').addClass('image-1');
        jQuery('img.reference-image').before('<div class="close-image-1"></div>');
        jQuery('.close-image-1, img.reference-image.image-1').wrapAll('<div class="image-1-triangle-container">');


        jQuery('.image-container').append('<img class="reference-image image-2"/>');
        jQuery('img.reference-image.image-2').before('<div class="close-image-2"></div>');
        jQuery('img.reference-image.image-2').attr('src', 'images/triangle-2.jpg');
        jQuery('.close-image-2, img.reference-image.image-2').wrapAll('<div class="image-2-triangle-container">');


        jQuery('.image-container').append('<img class="reference-image image-3"/>');
        jQuery('img.reference-image.image-3').before('<div class="close-image-3"></div>');
        jQuery('img.reference-image.image-3').attr('src', 'images/triangle-3.jpg');
        jQuery('.close-image-3, img.reference-image.image-3').wrapAll('<div class="image-3-triangle-container">');


        jQuery('.image-1-triangle-container, .image-2-triangle-container, .image-3-triangle-container').wrapAll('<div id="inner-scroll" class="image-container-wrapper">');
        jQuery('.image-container-wrapper').addClass('extended-triangle');

        disableScroll();
        threeImageCSS();
        jQuery('.image-container').show();
    });


    jQuery(document.body).on('click', '.close-image-1', function() {
        jQuery('.image-1-triangle-container').remove();
        if (jQuery('.image-container-wrapper').children().length === 0) {
            triangleImageContainerClear();
        }
    });

    jQuery(document.body).on('click', '.close-image-2', function() {
        jQuery('.image-2-triangle-container').remove();
        if (jQuery('.image-container-wrapper').children().length === 0) {
            triangleImageContainerClear();
        }
    });

    jQuery(document.body).on('click', '.close-image-3', function() {
        jQuery('.image-3-triangle-container').remove();
        if (jQuery('.image-container-wrapper').children().length === 0) {
            triangleImageContainerClear();
        }
    });


    // 3 Portrait Images
    jQuery('span#reference-image-sports-technology-institute').click(function() {

        // This removes the old cross and adds in functionality for a new cross
        jQuery('.close-image').remove();


        jQuery('img.reference-image').attr('src', 'images/reference-image-3-1-e.jpg');
        jQuery('img.reference-image').addClass('image-1');
        jQuery('img.reference-image').before('<div class="close-image-1"></div>');
        jQuery('.close-image-1, img.reference-image.image-1').wrapAll('<div class="image-1-container">');


        jQuery('.image-container').append('<img class="reference-image image-2"/>');
        jQuery('img.reference-image.image-2').before('<div class="close-image-2"></div>');
        jQuery('img.reference-image.image-2').attr('src', 'images/reference-image-3-2-e.jpg');
        jQuery('.close-image-2, img.reference-image.image-2').wrapAll('<div class="image-2-container">');


        jQuery('.image-container').append('<img class="reference-image image-3"/>');
        jQuery('img.reference-image.image-3').before('<div class="close-image-3"></div>');
        jQuery('img.reference-image.image-3').attr('src', 'images/reference-image-3-3-e.jpg');
        jQuery('.close-image-3, img.reference-image.image-3').wrapAll('<div class="image-3-container">');


        jQuery('.image-1-container, .image-2-container, .image-3-container').wrapAll('<div id="inner-scroll" class="image-container-wrapper">');
        jQuery('.image-container-wrapper').addClass('three-images');

        threeImageCSS();
        disableScroll();
        jQuery('.image-container').show();
    });

    jQuery(document.body).on('click', '.close-image-1', function() {
        jQuery('.image-1-container').remove();
        if (jQuery('.image-container-wrapper').children().length === 0) {
            threeImageContainerClear();
        }
    });

    jQuery(document.body).on('click', '.close-image-2', function() {
        jQuery('.image-2-container').remove();
        if (jQuery('.image-container-wrapper').children().length === 0) {
            threeImageContainerClear();
        }
    });

    jQuery(document.body).on('click', '.close-image-3', function() {
        jQuery('.image-3-container').remove();
        if (jQuery('.image-container-wrapper').children().length === 0) {
            threeImageContainerClear();
        }
    });


    jQuery(document.body).on('click', '.close-image', function() {
        jQuery('.image-container').css("display", "none");
        jQuery('img.reference-image').attr('src', '');
        jQuery('img').removeClass("portrait");
        jQuery('img').removeClass("landscape");
        jQuery('.image-container-wrapper').removeClass('landscape');
        jQuery('.image-container-wrapper').removeClass('portrait');
        jQuery('img.portrait-image').removeClass('portrait-image');
        jQuery('img').removeClass("image-1");
        jQuery('img.reference-image.image-2').remove();
        jQuery('img.reference-image.image-3').remove();
        jQuery('.close-image, img.reference-image').unwrap('.image-container-wrapper');
        enableScroll();
    });
});

