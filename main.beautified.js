if (jQuery(window).load(function() {
    function e(e) {
        e = e || window.event, e.preventDefault && e.preventDefault(), e.returnValue = !1;
    }
    function i(i) {
        return j[i.keyCode] ? (e(i), !1) : void 0;
    }
    function a() {
        window.addEventListener && window.addEventListener("DOMMouseScroll", e, !1), window.onwheel = e, 
        window.onmousewheel = document.onmousewheel = e, window.ontouchmove = e, document.onkeydown = i;
    }
    function r() {
        window.removeEventListener && window.removeEventListener("DOMMouseScroll", e, !1), 
        window.onmousewheel = document.onmousewheel = null, window.onwheel = null, window.ontouchmove = null, 
        document.onkeydown = null;
    }
    function n() {
        jQuery(window).width() > 655 && (jQuery(".image-container").css("width", "680"), 
        jQuery(".image-container").css("height", "auto")), jQuery(window).width() <= 655 && (jQuery(".image-container").css("width", "100%"), 
        jQuery(".image-container").css("height", "auto")), a();
    }
    function c() {
        jQuery(window).width() > 655 && (jQuery(".image-container").css("width", "auto"), 
        jQuery(".image-container").css("height", "640")), jQuery(window).width() <= 655 && (jQuery(".image-container").css("width", "70%"), 
        jQuery(".image-container").css("height", "auto")), a();
    }
    function o() {
        jQuery(".image-container").css("width", "699px"), a();
    }
    function m() {
        jQuery(".image-container").css("width", "329px"), a();
    }
    function t() {
        jQuery(".image-container").css("width", "1048px"), a();
    }
    function g() {
        jQuery("img.reference-image").addClass("landscape");
    }
    function s() {
        jQuery("img.reference-image").addClass("portrait");
    }
    function l() {
        jQuery(".image-container-wrapper").remove(), jQuery(".image-container").removeClass("extended"), 
        jQuery(".image-container").append('<div class="close-image"></div>'), jQuery(".close-image").after('<img class="reference-image" src=""/>'), 
        jQuery(".image-container").css("display", "none"), r();
    }
    function u() {
        jQuery(".image-container-wrapper").remove(), jQuery(".image-1-triangle-container").children().remove(), 
        jQuery(".image-2-triangle-container").children().remove(), jQuery(".image-3-triangle-container").children().remove(), 
        jQuery(".image-container").removeClass("extended-triangle"), jQuery(".image-container").css("display", "none"), 
        r();
    }
    function d() {
        jQuery(".image-container-wrapper").remove(), jQuery(".image-1-two-image-container").children().remove(), 
        jQuery(".image-2-two-image-container").children().remove(), jQuery(".image-container").removeClass("extended-two-image"), 
        jQuery(".image-container").css("display", "none"), r();
    }
    function y() {
        jQuery(".image-container-wrapper").remove(), jQuery(".image-1-two-portrait-image-container").children().remove(), 
        jQuery(".image-2-two-portrait-image-container").children().remove(), jQuery(".image-container").removeClass("extended-two-image-portrait"), 
        jQuery(".image-container").css("display", "none"), r();
    }
    jQuery(".image-container").css("display", "none");
    var j = {
        37: 1,
        38: 1,
        39: 1,
        40: 1
    };
    jQuery("span#reference-image-market").click(function() {
        jQuery(".image-container").addClass("extended-two-image"), jQuery(".close-image").remove(), 
        jQuery("img.reference-image").attr("src", "images/market-1.jpg"), jQuery("img.reference-image").addClass("image-1"), 
        jQuery("img.reference-image").before('<div class="close-image-1"></div>'), jQuery(".close-image-1, img.reference-image.image-1").wrapAll('<div class="image-1-two-image-container">'), 
        jQuery(".image-container").append('<img class="reference-image image-2"/>'), jQuery("img.reference-image.image-2").before('<div class="close-image-2"></div>'), 
        jQuery("img.reference-image.image-2").attr("src", "images/market-2.jpg"), jQuery(".close-image-2, img.reference-image.image-2").wrapAll('<div class="image-2-two-image-container">'), 
        jQuery(".image-1-two-image-container, .image-2-two-image-container").wrapAll('<div class="image-container-wrapper">'), 
        o(), jQuery(".image-container").show();
    }), jQuery(document.body).on("click", ".close-image-1", function() {
        jQuery(".image-1-two-image-container").remove(), 0 === jQuery(".image-container-wrapper").children().length && d();
    }), jQuery(document.body).on("click", ".close-image-2", function() {
        jQuery(".image-2-two-image-container").remove(), 0 === jQuery(".image-container-wrapper").children().length && d();
    }), jQuery("span#reference-image-love-loughborough").click(function() {
        n(), jQuery("img.reference-image").attr("src", "images/2.Love_Loughborough.JPG"), 
        g(), jQuery(".image-container").show();
    }), jQuery("span#reference-image-place-branding").click(function() {
        n(), jQuery("img.reference-image").attr("src", "images/3.Love_Branding.jpg"), g(), 
        jQuery(".image-container").show();
    }), jQuery("span#reference-image-this-bag").click(function() {
        n(), jQuery("img.reference-image").attr("src", "images/4.I_Like_My_Town.jpg"), g(), 
        jQuery(".image-container").show();
    }), jQuery("span#reference-image-falcon-works").click(function() {
        n(), jQuery("img.reference-image").attr("src", "images/5.Falcom_Works.jpg"), g(), 
        jQuery(".image-container").show();
    }), jQuery("span#reference-image-immigration").click(function() {
        jQuery(".image-container").addClass("extended-two-image-portrait"), jQuery(".close-image").remove(), 
        jQuery("img.reference-image").attr("src", "images/immigration-enforcement-1.jpg"), 
        jQuery("img.reference-image").addClass("image-1"), jQuery("img.reference-image").before('<div class="close-image-1"></div>'), 
        jQuery(".close-image-1, img.reference-image.image-1").wrapAll('<div class="image-1-two-portrait-image-container">'), 
        jQuery(".image-container").append('<img class="reference-image image-2"/>'), jQuery("img.reference-image.image-2").before('<div class="close-image-2"></div>'), 
        jQuery("img.reference-image.image-2").attr("src", "images/immigration-enforcement-2.jpg"), 
        jQuery(".close-image-2, img.reference-image.image-2").wrapAll('<div class="image-2-two-portrait-image-container">'), 
        jQuery(".image-1-two-portrait-image-container, .image-2-two-portrait-image-container").wrapAll('<div class="image-container-wrapper">'), 
        o(), jQuery(".image-container").show();
    }), jQuery(document.body).on("click", ".close-image-1", function() {
        jQuery(".image-1-two-portrait-image-container").remove(), 0 === jQuery(".image-container-wrapper").children().length && y();
    }), jQuery(document.body).on("click", ".close-image-2", function() {
        jQuery(".image-2-two-portrait-image-container").remove(), 0 === jQuery(".image-container-wrapper").children().length && y();
    }), jQuery("span#reference-image-postcard").click(function() {
        n(), jQuery("img.reference-image").attr("src", "images/7.Postcard.jpg"), g(), jQuery(".image-container").show();
    }), jQuery("span#reference-image-coat-of-arms").click(function() {
        c(), jQuery("img.reference-image").attr("src", "images/8.Coat_of_Arms.jpg"), s(), 
        jQuery(".image-container").show();
    }), jQuery("span#reference-image-shown-here").click(function() {
        n(), jQuery("img.reference-image").attr("src", "images/9.Belco.jpg"), g(), jQuery(".image-container").show();
    }), jQuery("span#reference-image-loughborough-town-of-sanctuary").click(function() {
        n(), jQuery("img.reference-image").attr("src", "images/11.Town_of_Sanctuary.jpg"), 
        g(), jQuery(".image-container").show();
    }), jQuery("span#reference-image-exchange").click(function() {
        n(), jQuery("img.reference-image").attr("src", "images/12.John_Storer_House.jpg"), 
        g(), jQuery(".image-container").show();
    }), jQuery("span#reference-image-tatting-shuttle").click(function() {
        n(), jQuery("img.reference-image").attr("src", "images/13.Tatting Shuttle.jpg"), 
        g(), jQuery(".image-container").show();
    }), jQuery("span#reference-image-tennis-racket-grip").click(function() {
        c(), jQuery("img.reference-image").attr("src", "images/15.Racket_Grip.jpg"), s(), 
        jQuery(".image-container").show();
    }), jQuery("span#reference-image-dismembered-match-balls").click(function() {
        jQuery(".image-container").addClass("extended-two-image"), jQuery(".close-image").remove(), 
        jQuery("img.reference-image").attr("src", "images/16.Football-1.jpg"), jQuery("img.reference-image").addClass("image-1-footballs"), 
        jQuery("img.reference-image").before('<div class="close-image-1"></div>'), jQuery(".close-image-1, img.reference-image.image-1-footballs").wrapAll('<div class="image-1-two-image-container">'), 
        jQuery(".image-container").append('<img class="reference-image image-2-footballs"/>'), 
        jQuery("img.reference-image.image-2-footballs").before('<div class="close-image-2"></div>'), 
        jQuery("img.reference-image.image-2-footballs").attr("src", "images/16.Football-2.jpg"), 
        jQuery(".close-image-2, img.reference-image.image-2-footballs").wrapAll('<div class="image-2-two-image-container">'), 
        jQuery(".image-1-two-image-container, .image-2-two-image-container").wrapAll('<div class="image-container-wrapper">'), 
        m(), jQuery(".image-container").show();
    }), jQuery(document.body).on("click", ".close-image-1", function() {
        jQuery(".image-1-two-image-container").remove(), 0 === jQuery(".image-container-wrapper").children().length && d();
    }), jQuery(document.body).on("click", ".close-image-2", function() {
        jQuery(".image-2-two-image-container").remove(), 0 === jQuery(".image-container-wrapper").children().length && d();
    }), jQuery("span#reference-image-triangle").click(function() {
        jQuery(".image-container").addClass("extended-triangle"), jQuery(".close-image").remove(), 
        jQuery("img.reference-image").attr("src", "images/triangle-1.jpg"), jQuery("img.reference-image").addClass("image-1"), 
        jQuery("img.reference-image").before('<div class="close-image-1"></div>'), jQuery(".close-image-1, img.reference-image.image-1").wrapAll('<div class="image-1-triangle-container">'), 
        jQuery(".image-container").append('<img class="reference-image image-2"/>'), jQuery("img.reference-image.image-2").before('<div class="close-image-2"></div>'), 
        jQuery("img.reference-image.image-2").attr("src", "images/triangle-2.jpg"), jQuery(".close-image-2, img.reference-image.image-2").wrapAll('<div class="image-2-triangle-container">'), 
        jQuery(".image-container").append('<img class="reference-image image-3"/>'), jQuery("img.reference-image.image-3").before('<div class="close-image-3"></div>'), 
        jQuery("img.reference-image.image-3").attr("src", "images/triangle-3.jpg"), jQuery(".close-image-3, img.reference-image.image-3").wrapAll('<div class="image-3-triangle-container">'), 
        jQuery(".image-1-triangle-container, .image-2-triangle-container, .image-3-triangle-container").wrapAll('<div class="image-container-wrapper">'), 
        t(), jQuery(".image-container").show();
    }), jQuery(document.body).on("click", ".close-image-1", function() {
        jQuery(".image-1-triangle-container").remove(), 0 === jQuery(".image-container-wrapper").children().length && u();
    }), jQuery(document.body).on("click", ".close-image-2", function() {
        jQuery(".image-2-triangle-container").remove(), 0 === jQuery(".image-container-wrapper").children().length && u();
    }), jQuery(document.body).on("click", ".close-image-3", function() {
        jQuery(".image-3-triangle-container").remove(), 0 === jQuery(".image-container-wrapper").children().length && u();
    }), jQuery("span#reference-image-sports-technology-institute").click(function() {
        jQuery(".image-container").addClass("extended"), jQuery(".close-image").remove(), 
        jQuery("img.reference-image").attr("src", "images/reference-image-3-1-e.jpg"), jQuery("img.reference-image").addClass("image-1"), 
        jQuery("img.reference-image").before('<div class="close-image-1"></div>'), jQuery(".close-image-1, img.reference-image.image-1").wrapAll('<div class="image-1-container">'), 
        jQuery(".image-container").append('<img class="reference-image image-2"/>'), jQuery("img.reference-image.image-2").before('<div class="close-image-2"></div>'), 
        jQuery("img.reference-image.image-2").attr("src", "images/reference-image-3-2-e.jpg"), 
        jQuery(".close-image-2, img.reference-image.image-2").wrapAll('<div class="image-2-container">'), 
        jQuery(".image-container").append('<img class="reference-image image-3"/>'), jQuery("img.reference-image.image-3").before('<div class="close-image-3"></div>'), 
        jQuery("img.reference-image.image-3").attr("src", "images/reference-image-3-3-e.jpg"), 
        jQuery(".close-image-3, img.reference-image.image-3").wrapAll('<div class="image-3-container">'), 
        jQuery(".image-1-container, .image-2-container, .image-3-container").wrapAll('<div class="image-container-wrapper">'), 
        t(), s(), jQuery(".image-container").show();
    }), jQuery(document.body).on("click", ".close-image-1", function() {
        jQuery(".image-1-container").remove(), 0 === jQuery(".image-container-wrapper").children().length && l();
    }), jQuery(document.body).on("click", ".close-image-2", function() {
        jQuery(".image-2-container").remove(), 0 === jQuery(".image-container-wrapper").children().length && l();
    }), jQuery(document.body).on("click", ".close-image-3", function() {
        jQuery(".image-3-container").remove(), 0 === jQuery(".image-container-wrapper").children().length && l();
    }), jQuery(window).width() < 414 && jQuery("#static-image-1,#static-image-2,#static-image-3,#static-image-4,#static-image-5,#static-image-6,#static-image-7,#static-image-8").bind("inview", function(e, i) {
        i === !0 && (jQuery(this).wrap('<div class="empty">').css("z-index", "99999"), jQuery(".empty").fadeIn(500), 
        a(), jQuery(document.body).on("click", ".empty, #static-image-1,#static-image-2,#static-image-3,#static-image-4,#static-image-5,#static-image-6,#static-image-7,#static-image-8", function() {
            jQuery(this).unwrap('<div class="empty">'), jQuery(this).fadeOut(500), r();
        }));
    }), jQuery(document.body).on("click", ".close-image", function() {
        jQuery(".image-container").css("display", "none"), jQuery("img.reference-image").attr("src", ""), 
        jQuery("img").removeClass("portrait"), jQuery("img").removeClass("landscape"), jQuery(".image-container").removeClass("extended"), 
        jQuery("img").removeClass("image-1"), jQuery("img.reference-image.image-2").remove(), 
        jQuery("img.reference-image.image-3").remove(), r();
    });
}), jQuery(window).width() > 414) {
    var main = function() {
        var e = jQuery("#static-image-1"), i = jQuery("#static-image-2"), a = jQuery("#static-image-3"), r = jQuery("#static-image-4"), n = jQuery("#static-image-5"), c = jQuery("#static-image-6"), o = jQuery("#static-image-7"), m = jQuery("#static-image-8");
        jQuery(document).scroll(function() {
            jQuery(this).scrollTop() > 12 && jQuery(this).scrollTop() < 612 ? (e.addClass("image-fixed"), 
            e.fadeIn(500)) : e.fadeOut(500), jQuery(this).scrollTop() > 1172 && jQuery(this).scrollTop() < 1772 ? (i.addClass("image-fixed"), 
            i.fadeIn(500)) : i.fadeOut(500), jQuery(this).scrollTop() > 2380 && jQuery(this).scrollTop() < 2980 ? (a.addClass("image-fixed"), 
            a.fadeIn(500)) : a.fadeOut(500), jQuery(this).scrollTop() > 3300 && jQuery(this).scrollTop() < 3900 ? (r.addClass("image-fixed"), 
            r.fadeIn(500)) : r.fadeOut(500), jQuery(this).scrollTop() > 4357 && jQuery(this).scrollTop() < 4957 ? (n.addClass("image-fixed"), 
            n.fadeIn(500)) : n.fadeOut(500), jQuery(this).scrollTop() > 5630 && jQuery(this).scrollTop() < 6330 ? (c.addClass("image-fixed"), 
            c.fadeIn(500)) : c.fadeOut(500), jQuery(this).scrollTop() > 6794 && jQuery(this).scrollTop() < 7394 ? (o.addClass("image-fixed"), 
            o.fadeIn(500)) : o.fadeOut(500), jQuery(this).scrollTop() > 7723 && jQuery(this).scrollTop() < 8322 ? (m.addClass("image-fixed"), 
            m.fadeIn(500)) : m.fadeOut(500);
        });
    };
    jQuery(document).ready(main);
}

if (jQuery(window).width() < 414) {
    var initialScrollPosition = 0, main = function() {
        var e = jQuery("#static-image-1"), i = jQuery("#static-image-2"), a = jQuery("#static-image-3"), r = jQuery("#static-image-4"), n = jQuery("#static-image-5"), c = jQuery("#static-image-6"), o = jQuery("#static-image-7"), m = jQuery("#static-image-8");
        jQuery(document).scroll(function() {
            var t = jQuery(this).scrollTop();
            t > initialScrollPosition ? (jQuery(this).scrollTop() > 12 && jQuery(this).scrollTop() < 612 && (e.not(".image-fixed").fadeIn(500), 
            jQuery(".empty").show(), e.addClass("image-fixed")), jQuery(this).scrollTop() > 1172 && jQuery(this).scrollTop() < 1772 && (i.not(".image-fixed").fadeIn(500), 
            i.addClass("image-fixed")), jQuery(this).scrollTop() > 2380 && jQuery(this).scrollTop() < 2980 && (a.not(".image-fixed").fadeIn(500), 
            a.addClass("image-fixed")), jQuery(this).scrollTop() > 3300 && jQuery(this).scrollTop() < 3900 && (r.not(".image-fixed").fadeIn(500), 
            r.addClass("image-fixed")), jQuery(this).scrollTop() > 4357 && jQuery(this).scrollTop() < 4957 && (n.not(".image-fixed").fadeIn(500), 
            n.addClass("image-fixed")), jQuery(this).scrollTop() > 5630 && jQuery(this).scrollTop() < 6330 && (c.not(".image-fixed").fadeIn(500), 
            c.addClass("image-fixed")), jQuery(this).scrollTop() > 6794 && jQuery(this).scrollTop() < 7394 && (o.not(".image-fixed").fadeIn(500), 
            o.addClass("image-fixed")), jQuery(this).scrollTop() > 7723 && jQuery(this).scrollTop() < 8322 && (m.not(".image-fixed").fadeIn(500), 
            m.addClass("image-fixed"))) : jQuery(this).scrollTop() >= 0 && jQuery(this).scrollTop() <= 10 && jQuery("#static-image-1,#static-image-2,#static-image-3,#static-image-4,#static-image-5,#static-image-6,#static-image-7,#static-image-8").removeClass("image-fixed"), 
            initialScrollPosition = t;
        });
    };
    jQuery(document).ready(main);
}