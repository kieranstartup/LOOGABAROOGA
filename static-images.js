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



    if (jQuery(window).width() < 414) {
        var initialScrollPosition = 0;

        jQuery(document).scroll(function() {


            var scrolledToPosition = jQuery(this).scrollTop();
            if (scrolledToPosition > initialScrollPosition) {
                //If scrolling down, trigger this
                //If scrolling up do nothing

                if (jQuery(this).scrollTop() > 12 && jQuery(this).scrollTop() < 612) {
                    jQuery('#static-image-1').not('.image-fixed').fadeIn(500);
                    jQuery('.empty').show();
                    jQuery('#static-image-1').addClass('image-fixed');
                }

                if (jQuery(this).scrollTop() > 1172 && jQuery(this).scrollTop() < 1772) {
                    jQuery('#static-image-2').not('.image-fixed').fadeIn(500);
                    jQuery('#static-image-2').addClass('image-fixed');
                }

                if (jQuery(this).scrollTop() > 2380 && jQuery(this).scrollTop() < 2980) {
                    jQuery('#static-image-3').not('.image-fixed').fadeIn(500);
                    jQuery('#static-image-3').addClass('image-fixed');

                }

                if (jQuery(this).scrollTop() > 3300 && jQuery(this).scrollTop() < 3900) {
                    jQuery('#static-image-4').not('.image-fixed').fadeIn(500);
                    jQuery('#static-image-4').addClass('image-fixed');

                }

                if (jQuery(this).scrollTop() > 4357 && jQuery(this).scrollTop() < 4957) {
                    jQuery('#static-image-5').not('.image-fixed').fadeIn(500);
                    jQuery('#static-image-5').addClass('image-fixed');

                }

                if (jQuery(this).scrollTop() > 5630 && jQuery(this).scrollTop() < 6330) {
                    jQuery('#static-image-6').not('.image-fixed').fadeIn(500);
                    jQuery('#static-image-6').addClass('image-fixed');

                }

                if (jQuery(this).scrollTop() > 6794 && jQuery(this).scrollTop() < 7394) {
                    jQuery('#static-image-7').not('.image-fixed').fadeIn(500);
                    jQuery('#static-image-7').addClass('image-fixed');

                }

                if (jQuery(this).scrollTop() > 7723 && jQuery(this).scrollTop() < 8322) {
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