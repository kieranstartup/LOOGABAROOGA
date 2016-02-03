jQuery(document).ready(function() {

jQuery(".image-container").css("display","none");

jQuery('span#image-1').click(function() {
jQuery('img.reference-image').attr('src', 'images/1.jpg');
jQuery('img.reference-image').addClass('landscape');
jQuery('.image-container').show();
});
jQuery('span#image-2').click(function() {
jQuery('img.reference-image').attr('src', 'images/2.jpeg');
jQuery('img.reference-image').addClass('portrait');
jQuery('.image-container').show();
});
jQuery('span#image-3').click(function() {
jQuery('#image-3-container').show();
});
jQuery('span#image-4').click(function() {
jQuery('#image-4-container').show();
});
jQuery('span#image-5').click(function() {
jQuery('#image-5-container').show();
});
jQuery('span#image-6').click(function() {
jQuery('#image-6-container').show();
});
jQuery('span#image-7').click(function() {
jQuery('#image-7-container').show();
});
jQuery('span#image-8').click(function() {
jQuery('#image-8-container').show();
});
jQuery('span#image-9').click(function() {
jQuery('#image-9-container').show();
});
jQuery('span#image-10').click(function() {
jQuery('#image-10-container').show();
});
jQuery('span#image-11').click(function() {
jQuery('#image-11-container').show();
});
jQuery('span#image-12').click(function() {
jQuery('#image-12-container').show();
});
jQuery('span#image-13').click(function() {
jQuery('#image-13-container').show();
});
jQuery('span#image-14').click(function() {
jQuery('#image-14-container').show();
});
jQuery('span#image-15').click(function() {
jQuery('#image-15-container').show();
});
jQuery('span#image-16').click(function() {
jQuery('#image-16-container').show();
});
jQuery('span#image-17').click(function() {
jQuery('#image-17-container').show();
});
jQuery('span#image-18').click(function() {
jQuery('#image-18-container').show();
});
jQuery('span#image-19').click(function() {
jQuery('#image-19-container').show();
});
jQuery('span#image-20').click(function() {
jQuery('#image-20-container').show();
});

jQuery('.close-image').click(function() {
    jQuery('.image-container').css("display","none");
});

});