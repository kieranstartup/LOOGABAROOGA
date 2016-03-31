// jQuery(document).ready(function(){

// });

jQuery(window).load(function() {
var isiPad = navigator.userAgent.match(/iPad/i) !== null;
if (isiPad === true) {
console.log("iPad detected");
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
        window.ontouchmove = preventDefault; // mobile
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


    function resetCSS() {
        if( (jQuery(window).width() > 655) && (isiPad === false)){
            jQuery('.image-container').css("width", "680");
            jQuery('.image-container').css("height", "auto");
        }
        if( (jQuery(window).width() <= 655) || (isiPad === true)){
            jQuery('.image-container').css("width", "100%");
            jQuery('.image-container').css("height", "auto");
        }
        disableScroll();
    }

    function portraitCSS() {
        if( (jQuery(window).width() > 655) && (isiPad === false)){
            jQuery('.image-container').css("width", "auto");
            jQuery('.image-container').css("height", "640");
        }
        if( (jQuery(window).width() <= 655) || (isiPad === true)){
            jQuery('.image-container').css("width", "70%");
            jQuery('.image-container').css("height", "auto");
        }
        disableScroll();
    }

    /* Portrait Mobile Image Sizing */
    function portraitCSSMobile() {
        jQuery('.image-container').css("width", "auto");
        jQuery('.image-container').css("max-width", "none");
        jQuery('.image-container').css("height", "320");
        disableScroll();
    }

    function twoImageCSS() {
        jQuery('.image-container').css("width", "699px");
        disableScroll();
    }

        function twoImageCSSAlt() {
        jQuery('.image-container').css("width", "329px");
        disableScroll();
    }

    function threeImageCSS() {
        jQuery('.image-container').css("width", "1048px");
        disableScroll();
    }

    function addLandscapeClass() {
        jQuery('img.reference-image').addClass('landscape');
    }

    function addPortraitClass() {
        jQuery('img.reference-image').addClass('portrait');
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
        jQuery('.image-container').removeClass('extended-triangle');
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
        jQuery('.image-container').addClass('extended-two-image');

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

        jQuery('.image-1-two-image-container, .image-2-two-image-container').wrapAll('<div class="image-container-wrapper">');

        twoImageCSS();
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

    // Landscape
    jQuery('span#reference-image-love-loughborough').click(function() {
        resetCSS();
        jQuery('img.reference-image').attr('src', 'images/2.Love_Loughborough.JPG');
        addLandscapeClass();
        jQuery('.image-container').show();
    });

    // Landscape
    jQuery('span#reference-image-place-branding').click(function() {
        resetCSS();
        jQuery('img.reference-image').attr('src', 'images/3.Love_Branding.jpg');
        addLandscapeClass();
        jQuery('.image-container').show();
    });

    // Landscape
    jQuery('span#reference-image-this-bag').click(function() {
        resetCSS();
        jQuery('img.reference-image').attr('src', 'images/4.I_Like_My_Town.jpg');
        addLandscapeClass();
        jQuery('.image-container').show();
    });

    // Landscape
    jQuery('span#reference-image-falcon-works').click(function() {
        resetCSS();
        jQuery('img.reference-image').attr('src', 'images/5.Falcom_Works.jpg');
        addLandscapeClass();
        jQuery('.image-container').show();
    });

    /////////////////////////////////////////////
    // Two Portrait Images
    ////////////////////////////////////////////
    jQuery('span#reference-image-immigration').click(function() {
        jQuery('.image-container').addClass('extended-two-image-portrait');

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

        jQuery('.image-1-two-portrait-image-container, .image-2-two-portrait-image-container').wrapAll('<div class="image-container-wrapper">');

        twoImageCSS();
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
        resetCSS();
        jQuery('img.reference-image').attr('src', 'images/7.Postcard.jpg');
        addLandscapeClass();
        jQuery('.image-container').show();
    });

    // Portrait
    jQuery('span#reference-image-coat-of-arms').click(function() {
        portraitCSS();
        jQuery('img.reference-image').attr('src', 'images/8.Coat_of_Arms.jpg');
        addPortraitClass();
        jQuery('.image-container').show();
    });

    // Landscape
    jQuery('span#reference-image-shown-here').click(function() {
        resetCSS();
        jQuery('img.reference-image').attr('src', 'images/9.Belco.jpg');
        addLandscapeClass();
        jQuery('.image-container').show();
    });

    // Landscape
    jQuery('span#reference-image-loughborough-town-of-sanctuary').click(function() {
        resetCSS();
        jQuery('img.reference-image').attr('src', 'images/11.Town_of_Sanctuary.jpg');
        addLandscapeClass();
        jQuery('.image-container').show();
    });

    // Landscape
    jQuery('span#reference-image-exchange').click(function() {
        resetCSS();
        jQuery('img.reference-image').attr('src', 'images/12.John_Storer_House.jpg');
        addLandscapeClass();
        jQuery('.image-container').show();
    });

    // Landscape
    jQuery('span#reference-image-tatting-shuttle').click(function() {
        resetCSS();
        jQuery('img.reference-image').attr('src', 'images/13.Tatting Shuttle.jpg');
        addLandscapeClass();
        jQuery('.image-container').show();
    });

    // Portrait
    jQuery('span#reference-image-tennis-racket-grip').click(function() {
        portraitCSS();
        jQuery('img.reference-image').attr('src', 'images/15.Racket_Grip.jpg');
        addPortraitClass();
        jQuery('.image-container').show();
    });

    /////////////////////////////////////////////
    // Two Images
    ////////////////////////////////////////////
    jQuery('span#reference-image-dismembered-match-balls').click(function() {
        jQuery('.image-container').addClass('extended-two-image');

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

        jQuery('.image-1-two-image-container, .image-2-two-image-container').wrapAll('<div class="image-container-wrapper">');

        twoImageCSSAlt();
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
        jQuery('.image-container').addClass('extended-triangle');

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


        jQuery('.image-1-triangle-container, .image-2-triangle-container, .image-3-triangle-container').wrapAll('<div class="image-container-wrapper">');

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
        jQuery('.image-container').addClass('extended');

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


        jQuery('.image-1-container, .image-2-container, .image-3-container').wrapAll('<div class="image-container-wrapper">');



        threeImageCSS();
        addPortraitClass();
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

    // }




    if( (jQuery(window).width() < 414) || (isiPad === true)) {
        jQuery('#static-image-1,#static-image-2,#static-image-3,#static-image-4,#static-image-5,#static-image-6,#static-image-7,#static-image-8').bind('inview', function(event, visible) {
            if (visible === true) {
                jQuery(this).wrap('<div class="empty">').css('z-index', '99999');
                jQuery('.empty').fadeIn(500);
                disableScroll();

                // window.onscroll = function (e) {
                //     jQuery('#static-image-1,#static-image-2,#static-image-3,#static-image-4,#static-image-5,#static-image-6,#static-image-7,#static-image-8').unwrap('<div class="empty">');
                //     jQuery('#static-image-1,#static-image-2,#static-image-3,#static-image-4,#static-image-5,#static-image-6,#static-image-7,#static-image-8').fadeOut(500);
                // };


                jQuery(document.body).on('click', '.empty, #static-image-1,#static-image-2,#static-image-3,#static-image-4,#static-image-5,#static-image-6,#static-image-7,#static-image-8', function() {
                    jQuery(this).unwrap('<div class="empty">');
                    jQuery(this).fadeOut(500);
                    enableScroll();
                });

            } else {
                    // enableScroll();

            }
        });
    }



    jQuery(document.body).on('click', '.close-image', function() {
        jQuery('.image-container').css("display", "none");
        jQuery('img.reference-image').attr('src', '');
        jQuery('img').removeClass("portrait");
        jQuery('img').removeClass("landscape");
        jQuery('.image-container').removeClass('extended');
        jQuery('img').removeClass("image-1");
        jQuery('img.reference-image.image-2').remove();
        jQuery('img.reference-image.image-3').remove();
        enableScroll();
    });

});

if( (jQuery(window).width() > 414) && (isiPad === false)){
var isiPad = navigator.userAgent.match(/iPad/i) !== null;
if (isiPad === true) {
console.log("iPad detected");
}

    var main = function() {
        var staticImage1 = jQuery('#static-image-1');
        var staticImage2 = jQuery('#static-image-2');
        var staticImage3 = jQuery('#static-image-3');
        var staticImage4 = jQuery('#static-image-4');
        var staticImage5 = jQuery('#static-image-5');
        var staticImage6 = jQuery('#static-image-6');
        var staticImage7 = jQuery('#static-image-7');
        var staticImage8 = jQuery('#static-image-8');

        jQuery(document).scroll(function() {

            if (jQuery(this).scrollTop() > 12 && jQuery(this).scrollTop() < 612) {
                staticImage1.addClass('image-fixed');
                staticImage1.fadeIn(500);
            } else {
                staticImage1.fadeOut(500);
            }

            if (jQuery(this).scrollTop() > 1172 && jQuery(this).scrollTop() < 1772) {
                staticImage2.addClass('image-fixed');
                staticImage2.fadeIn(500);
            } else {
                staticImage2.fadeOut(500);
            }

            if (jQuery(this).scrollTop() > 2380 && jQuery(this).scrollTop() < 2980) {
                staticImage3.addClass('image-fixed');
                staticImage3.fadeIn(500);
            } else {
                staticImage3.fadeOut(500);
            }

            if (jQuery(this).scrollTop() > 3300 && jQuery(this).scrollTop() < 3900) {
                staticImage4.addClass('image-fixed');
                staticImage4.fadeIn(500);

            } else {
                staticImage4.fadeOut(500);

            }

            if (jQuery(this).scrollTop() > 4357 && jQuery(this).scrollTop() < 4957) {
                staticImage5.addClass('image-fixed');
                staticImage5.fadeIn(500);

            } else {
                staticImage5.fadeOut(500);

            }

            if (jQuery(this).scrollTop() > 5630 && jQuery(this).scrollTop() < 6330) {
                staticImage6.addClass('image-fixed');
                staticImage6.fadeIn(500);

            } else {
                staticImage6.fadeOut(500);

            }

            if (jQuery(this).scrollTop() > 6794 && jQuery(this).scrollTop() < 7394) {
                staticImage7.addClass('image-fixed');
                staticImage7.fadeIn(500);

            } else {
                staticImage7.fadeOut(500);

            }

            if (jQuery(this).scrollTop() > 7723 && jQuery(this).scrollTop() < 8322) {
                staticImage8.addClass('image-fixed');
                staticImage8.fadeIn(500);

            } else {
                staticImage8.fadeOut(500);

            }

        });
    };
    jQuery(document).ready(main);
}





if (jQuery(window).width() < 414) {
    var initialScrollPosition = 0;

    var main = function() {
        var staticImage1 = jQuery('#static-image-1');
        var staticImage2 = jQuery('#static-image-2');
        var staticImage3 = jQuery('#static-image-3');
        var staticImage4 = jQuery('#static-image-4');
        var staticImage5 = jQuery('#static-image-5');
        var staticImage6 = jQuery('#static-image-6');
        var staticImage7 = jQuery('#static-image-7');
        var staticImage8 = jQuery('#static-image-8');

        jQuery(document).scroll(function() {


            var scrolledToPosition = jQuery(this).scrollTop();
            if (scrolledToPosition > initialScrollPosition) {
                //If scrolling down, trigger this
                //If scrolling up do nothing

                if (jQuery(this).scrollTop() > 12 && jQuery(this).scrollTop() < 612) {
                    staticImage1.not('.image-fixed').fadeIn(500);
                    jQuery('.empty').show();
                    staticImage1.addClass('image-fixed');
                }

                if (jQuery(this).scrollTop() > 1172 && jQuery(this).scrollTop() < 1772) {
                    staticImage2.not('.image-fixed').fadeIn(500);
                    staticImage2.addClass('image-fixed');
                }

                if (jQuery(this).scrollTop() > 2380 && jQuery(this).scrollTop() < 2980) {
                    staticImage3.not('.image-fixed').fadeIn(500);
                    staticImage3.addClass('image-fixed');

                }

                if (jQuery(this).scrollTop() > 3300 && jQuery(this).scrollTop() < 3900) {
                    staticImage4.not('.image-fixed').fadeIn(500);
                    staticImage4.addClass('image-fixed');

                }

                if (jQuery(this).scrollTop() > 4357 && jQuery(this).scrollTop() < 4957) {
                    staticImage5.not('.image-fixed').fadeIn(500);
                    staticImage5.addClass('image-fixed');

                }

                if (jQuery(this).scrollTop() > 5630 && jQuery(this).scrollTop() < 6330) {
                    staticImage6.not('.image-fixed').fadeIn(500);
                    staticImage6.addClass('image-fixed');

                }

                if (jQuery(this).scrollTop() > 6794 && jQuery(this).scrollTop() < 7394) {
                    staticImage7.not('.image-fixed').fadeIn(500);
                    staticImage7.addClass('image-fixed');

                }

                if (jQuery(this).scrollTop() > 7723 && jQuery(this).scrollTop() < 8322) {
                    staticImage8.not('.image-fixed').fadeIn(500);
                    staticImage8.addClass('image-fixed');

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

    };
    jQuery(document).ready(main);
}