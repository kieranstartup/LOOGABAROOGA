jQuery(document).ready(function() {

// This all works below

jQuery(".image-container").css("display","none");


// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

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
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}


function resetCSS(){
jQuery('.image-container').css("width","70%");
jQuery('.image-container').css("max-width","800");
jQuery('.image-container').css("height","auto");
disableScroll();
}

function portraitCSS(){
jQuery('.image-container').css("width","auto");
jQuery('.image-container').css("max-width","none");
jQuery('.image-container').css("height","620");
disableScroll();
}

/* Portrait Mobile Image Sizing */
function portraitCSSMobile(){
jQuery('.image-container').css("width","auto");
jQuery('.image-container').css("max-width","none");
jQuery('.image-container').css("height","320");
disableScroll();
}

function threeImageCSS(){
jQuery('.image-container').css("width","90%");
jQuery('.image-container').css("max-width","1200");
jQuery('.image-container').css("height","auto");
disableScroll();
}

function addLandscapeClass(){
jQuery('img.reference-image').addClass('landscape');
}

function addPortraitClass(){
jQuery('img.reference-image').addClass('portrait');
}


if(jQuery(window).width() > 414){

// Landscape Image
jQuery('span#image-1').click(function() {
resetCSS();
jQuery('img.reference-image').attr('src', 'images/1.jpg');
addLandscapeClass();
jQuery('.image-container').show();
});


// Portrait Image
jQuery('span#image-2').click(function() {
jQuery('img.reference-image').attr('src', 'images/2.jpeg');
portraitCSS();
addPortraitClass();
jQuery('.image-container').show();
});

// 3 Portrait Images
jQuery('span#image-3').click(function() {
jQuery('.image-container').addClass('extended');
// jQuery('.close-image').removeClass('close-image').addClass('close-image-1');


jQuery('img.reference-image').attr('src', 'images/2.jpeg');
jQuery('img.reference-image').addClass('image-1');


jQuery('.image-container').append('<img class="reference-image image-2"/>');
// jQuery('img.reference-image.image-2').before('<div class="close-image-2"></div>');
jQuery('img.reference-image.image-2').attr('src', 'images/2.jpeg');
// jQuery('img.reference-image.image-2').wrap('<div id="image-2-container"></div>');


jQuery('.image-container').append('<img class="reference-image image-3"/>');
// jQuery('img.reference-image.image-3').before('<div class="close-image-3"></div>');
jQuery('img.reference-image.image-3').attr('src', 'images/2.jpeg');

threeImageCSS();
addPortraitClass();
jQuery('.image-container').show();
});

jQuery('span#image-4').click(function() {
jQuery('.image-container').show();
});

jQuery('span#image-5').click(function() {
jQuery('.image-container').show();
});

jQuery('span#image-6').click(function() {
jQuery('.image-container').show();
});

jQuery('span#image-7').click(function() {
jQuery('.image-container').show();
});

jQuery('span#image-8').click(function() {
jQuery('.image-container').show();
});

jQuery('span#image-9').click(function() {
jQuery('.image-container').show();
});

jQuery('span#image-10').click(function() {
jQuery('.image-container').show();
});

jQuery('span#image-11').click(function() {
jQuery('.image-container').show();
});

jQuery('span#image-12').click(function() {
jQuery('.image-container').show();
});

jQuery('span#image-13').click(function() {
jQuery('.image-container').show();
});

jQuery('span#image-14').click(function() {
jQuery('.image-container').show();
});

jQuery('span#image-15').click(function() {
jQuery('.image-container').show();
});

jQuery('span#image-16').click(function() {
jQuery('.image-container').show();
});

jQuery('span#image-17').click(function() {
jQuery('.image-container').show();
});

jQuery('span#image-18').click(function() {
jQuery('.image-container').show();
});

jQuery('span#image-19').click(function() {
jQuery('.image-container').show();
});

jQuery('span#image-20').click(function() {
jQuery('.image-container').show();
});


// jQuery('.close-image-1').click(function() {
//     jQuery('img.image-3').css("display","none");
//     console.log("clicked 1");
// });
// jQuery('.close-image-2').click(function() {
//     jQuery('img.image-1').css("display","none");
// });
// jQuery('.close-image-3').click(function() {
//     jQuery('img.image-2').css("display","none");
// });

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


jQuery('.close-image').click(function() {
    jQuery('.image-container').css("display","none");
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

jQuery(window).load(function() {

// Testing Out Scrolling
jQuery.fn.moveIt = function(){
  var jQuerywindow = jQuery(window);
  var instances = [];
  
  jQuery(this).each(function(){
    instances.push(new moveItItem(jQuery(this)));
  });
  
  window.onscroll = function(){
    var scrollTop = jQuerywindow.scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  };
};

var moveItItem = function(el){
  this.el = jQuery(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
  var pos = scrollTop / this.speed;
  this.el.css('transform', 'translateY(' + -pos + 'px)');
};

jQuery(function(){
  jQuery('[data-scroll-speed]').moveIt();
});
});