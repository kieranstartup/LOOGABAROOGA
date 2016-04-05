// Special Cases Only
// For Example When There Are Multiple Images
jQuery(document).ready(function() {
    var isiPad = navigator.userAgent.match(/iPad/i) !== null;
    if (isiPad === true) {
        console.log("iPad detected");
    }

    if (jQuery(window).width() <= 414) {
        jQuery('#static-image-1,#static-image-2,#static-image-3,#static-image-4,#static-image-5,#static-image-6,#static-image-7,#static-image-8').bind('inview', function(event, visible) {
            if (visible === true) {

                jQuery(this).wrap('<div class="empty">').css('z-index', '99999');
                jQuery('.empty').fadeIn(500);

                jQuery("#static-image-1,#static-image-2,#static-image-3,#static-image-4,#static-image-5,#static-image-6,#static-image-7,#static-image-8,.empty").swipe({
                    swipeUp:function(event, distance, duration, fingerCount, fingerData, currentDirection) {
                        console.log("swipeUp from callback");

                    jQuery('#static-image-1,#static-image-2,#static-image-3,#static-image-4,#static-image-5,#static-image-6,#static-image-7,#static-image-8').fadeOut(500);
                    jQuery('.empty').fadeOut(500);
                    jQuery('#static-image-1,#static-image-2,#static-image-3,#static-image-4,#static-image-5,#static-image-6,#static-image-7,#static-image-8').unwrap('<div class="empty">');
                    }
                });

                jQuery("#static-image-1,#static-image-2,#static-image-3,#static-image-4,#static-image-5,#static-image-6,#static-image-7,#static-image-8,.empty").swipe({
                    swipeDown:function(event, distance, duration, fingerCount, fingerData, currentDirection) {
                        console.log("swipeDown from callback");

                    jQuery('#static-image-1,#static-image-2,#static-image-3,#static-image-4,#static-image-5,#static-image-6,#static-image-7,#static-image-8').fadeOut(500);
                    jQuery('.empty').fadeOut(500);
                    jQuery('#static-image-1,#static-image-2,#static-image-3,#static-image-4,#static-image-5,#static-image-6,#static-image-7,#static-image-8').unwrap('<div class="empty">');
                    }
                });

                jQuery(document.body).on('click', '.empty, #static-image-1,#static-image-2,#static-image-3,#static-image-4,#static-image-5,#static-image-6,#static-image-7,#static-image-8', function() {
                    jQuery(this).unwrap('<div class="empty">');
                    jQuery(this).fadeOut(500);
                        console.log("clicked");
                });

            }
            // else {
            //     // enableScroll();

            // }
        });
    }

    var windowSize = jQuery(window).width();

    if ((jQuery(window).width() <= 414) || (isiPad === true)) {

        jQuery('.image-container').bind('inview', function(event, visible) {
            if (visible === true) {

                jQuery(".image-container").swipe({ allowPageScroll: "horizontal" });
                jQuery("#inner-scroll").swipe({ allowPageScroll: "horizontal" });

                jQuery('body,html').css('overflow', 'hidden');

            } else {

                jQuery('html, body').css({
                    'overflow': 'auto',
                    'height': 'auto'
                });

            }

        });
    }


    if (jQuery(window).width() <= 414) {

        var imageWidth = windowSize * 2;
        var tripleImageWidth = windowSize * 3;

        var multiplicationPlusMargin = imageWidth + 38;
        var multiplicationPlusMarginPlusMargin = tripleImageWidth + 76;

        jQuery(document.body).on('click', 'span#reference-image-market', function() {

            jQuery('.extended-two-image').css('width', '100% !important');
            jQuery('.extended-two-image').css('height', 'auto');
            jQuery('#inner-scroll').css('width', multiplicationPlusMargin);

            jQuery('#inner-scroll > div.image-1-two-image-container').css('max-width', windowSize);
            jQuery('.image-1').css('max-width', windowSize);

            jQuery('#inner-scroll > div.image-2-two-image-container').css('max-width', windowSize);
            jQuery('.image-2').css('max-width', windowSize);

        });

        jQuery(document.body).on('click', 'span#reference-image-dismembered-match-balls', function() {
            jQuery('.image-1-two-image-container').css('max-width', windowSize);
            jQuery('.image-1').css('max-width', windowSize);

            jQuery('.image-2-two-image-container').css('max-width', windowSize);
            jQuery('.image-2').css('max-width', windowSize);

            jQuery('.extended-two-image').css('width', multiplicationPlusMargin);
        });
    


        jQuery(document.body).on('click', 'span#reference-image-triangle', function() {

            jQuery('.extended-two-image').css('width', '100% !important');
            jQuery('.extended-two-image').css('height', 'auto');
            jQuery('#inner-scroll').css('width', multiplicationPlusMarginPlusMargin);

            jQuery('#inner-scroll > div.image-1-triangle-container').css('max-width', windowSize);
            jQuery('.image-1').css('max-width', windowSize);

            jQuery('#inner-scroll > div.image-2-triangle-container').css('max-width', windowSize);
            jQuery('.image-2').css('max-width', windowSize);

            jQuery('#inner-scroll > div.image-3-triangle-container').css('max-width', windowSize);
            jQuery('.image-3').css('max-width', windowSize);

        });






    }
});