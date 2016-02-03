jQuery(document).ready(function() {
jQuery('#image-2').bind('inview', function (event, visible) {
  if (visible === true) {

jQuery('img.reference-image').attr('src', 'images/2.jpeg');
portraitCSS();
addPortraitClass();
jQuery('.image-container').show();

  } else {
    // element has gone out of viewport
  }
});
});