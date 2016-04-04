// Special Cases Only
// For Example When There Are Multiple Images
jQuery(window).load(function() {
    var isiPad = navigator.userAgent.match(/iPad/i) !== null;
    if (isiPad === true) {
        console.log("iPad detected");
    }

        if (jQuery(window).width() <= 414) {
        jQuery('#static-image-1,#static-image-2,#static-image-3,#static-image-4,#static-image-5,#static-image-6,#static-image-7,#static-image-8').bind('inview', function(event, visible) {
            if (visible === true) {

                jQuery(this).wrap('<div class="empty">').css('z-index', '99999');
                jQuery('.empty').fadeIn(500);

                // window.onscroll = function(e) {
                //     jQuery('#static-image-1,#static-image-2,#static-image-3,#static-image-4,#static-image-5,#static-image-6,#static-image-7,#static-image-8').fadeOut(1000);
                //     jQuery('.empty').fadeOut(1000);
                //     jQuery('#static-image-1,#static-image-2,#static-image-3,#static-image-4,#static-image-5,#static-image-6,#static-image-7,#static-image-8').unwrap('<div class="empty">');
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

    var windowSize = jQuery(window).width();
    console.log(windowSize);

    if ((jQuery(window).width() <= 414) || (isiPad === true)) {




        jQuery('.image-container').bind('inview', function(event, visible) {
            if (visible === true) {


                document.addEventListener('touchmove', function(e){
                    e.preventDefault();
                }, false);

                document.getElementById('inner-scroll').addEventListener('touchmove', function(e){
                    e.stopPropagation();
                }, false);


                jQuery('body').lockscroll(true, 'vertical');
                jQuery('#wrapper').lockscroll(true, 'vertical');
                jQuery('.image-container').lockscroll(true, 'vertical');
                jQuery('#inner-scroll').lockscroll(true, 'vertical');
                jQuery('.image-container-wrapper').lockscroll(true, 'vertical');
                console.log('locked!');
                

            } else {
                // jQuery('#inner-scroll').lockscroll(false);
                // console.log('unlocked!');

            }

        });
    }


    if (jQuery(window).width() <= 414) {

        var imageWidth = windowSize * 2;
        console.log(imageWidth);

        var multiplicationPlusMargin = imageWidth + 38;
        console.log(multiplicationPlusMargin);

        jQuery('span#reference-image-market').click(function() {
            jQuery('.image-1-two-image-container').css('max-width', windowSize);
            jQuery('.image-1').css('max-width', windowSize);

            jQuery('.image-2-two-image-container').css('max-width', windowSize);
            jQuery('.image-2').css('max-width', windowSize);

            jQuery('.extended-two-image').css('width', multiplicationPlusMargin);
        });

        jQuery('span#reference-image-dismembered-match-balls').click(function() {
            jQuery('.image-1-two-image-container').css('max-width', windowSize);
            jQuery('.image-1').css('max-width', windowSize);

            jQuery('.image-2-two-image-container').css('max-width', windowSize);
            jQuery('.image-2').css('max-width', windowSize);

            jQuery('.extended-two-image').css('width', multiplicationPlusMargin);
        });
    }


});