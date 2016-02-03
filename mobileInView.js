jQuery(document).ready(function() {

jQuery(".image-container").css("display","none");


/* Portrait Mobile Image Sizing */
function portraitCSSMobile(){
jQuery('.image-container').css("width","auto");
jQuery('.image-container').css("max-width","none");
jQuery('.image-container').css("height","320");
disableScroll();
}



if (jQuery(window).width() < 414){
jQuery('#image-2').bind('inview', function (event, visible) {
  if (visible === true) {

jQuery('img.reference-image').attr('src', 'images/2.jpeg');
portraitCSSMobile();
addPortraitClass();
jQuery('.image-container').fadeIn(1500);
enableScroll();

  } else {

jQuery('.image-container').fadeOut(1500);

  }
});
}


});