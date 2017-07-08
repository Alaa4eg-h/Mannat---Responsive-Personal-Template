/// <reference path="../node_modules/@types/jquery/index.d.ts" />

$(document).ready(function () {

    // add/remove class when press burger icon //
    $('.responsive-menu').on("click", function () {
        $(".top-nav, .nav-links").toggleClass("nav-toggle");
    });
    // Resize top nav when scroll //
    $(document).on("scroll", function () {
        if ($(document).scrollTop() > 10) {
            $(".top-nav").css({
                paddingTop: "10px",
                paddingBottom: "10px",
                borderBottom: "1px solid #41B548",
            });
        } else {
            $(".top-nav").css({
                paddingTop: "20px",
                paddingBottom: "20px",
                borderBottom: "none",
            });
        }
    });


    // remove class nav-toggle when click on list items //
    $(".nav-links li").on("click", function () {
        $(".top-nav, .nav-links").removeClass("nav-toggle");
        $(this).addClass("active").siblings().removeClass("active");
    });
    $(window).on("resize", function () {
        $(".top-nav, .nav-links").removeClass("nav-toggle");
    });
    // Smooth Scrolling to Sections //
    $(".section").on("click", function (link) {
        link.preventDefault();
        var linkHref = $(this).attr("href"),
            navHeight = $(".top-nav").height();
        if (linkHref == "#about") {
            $("html, body").animate({
                scrollTop: $(linkHref).offset().top - navHeight - 20
            }, 1000);
        } else {
            $("html, body").animate({
                scrollTop: $(linkHref).offset().top - navHeight - 20
            }, 1000);
        }
    });



    // Start Porgress Bar plugin //
    var progressVal1 = $(".creative").attr("data-value"),
        progressVal2 = $(".wordpress").attr("data-value"),
        progressVal3 = $(".design").attr("data-value"),
        progressVal4 = $(".coding").attr("data-value");
    $('.creative').circleProgress({
        value: progressVal1 / 100,
        size: 160,
        animation: {
            duration: 3000
        },
        startAngle: -1.5,
        fill: {
            color: ["#41B548"]
        }
    });
    $('.wordpress').circleProgress({
        value: progressVal2 / 100,
        size: 160,
        animation: {
            duration: 3000
        },
        startAngle: -1.5,
        fill: {
            color: ["#41B548"]
        }
    });
    $('.design').circleProgress({
        value: progressVal3 / 100,
        size: 160,
        animation: {
            duration: 3000
        },
        startAngle: -1.5,
        fill: {
            color: ["#41B548"]
        }
    });
    $('.coding').circleProgress({
        value: progressVal4 / 100,
        size: 160,
        animation: {
            duration: 3000
        },
        startAngle: -1.5,
        fill: {
            color: ["#41B548"]
        }
    }); // End Porgress Bar plugin //

    // Portfolio Filter //
    $(".portfolio ul li").on("click", function (fill) {
        fill.preventDefault();
        var folioFilter = $(this).attr("data-value");
        if (folioFilter == ".all") {
            $(".portfolio .gallary").show(1000);
        } else {
            $(".portfolio .gallary").not(folioFilter).hide(1000);
            $(".portfolio .gallary").filter(folioFilter).show(1000);
        }
        $(this).addClass("active").siblings().removeClass("active");
    });

    // To Hold Classes On Refresh Page //
    if ($(document).scrollTop() > 10) {
        $(".top-nav").css({
            paddingTop: "10px",
            paddingBottom: "10px",
            borderBottom: "1px solid #41B548",
        });
    } else {
        $(".top-nav").css({
            paddingTop: "20px",
            paddingBottom: "20px",
            borderBottom: "none",
        });
    }
    // Auto Slider //
    (function autoSlider() {
        $(".clients-container .active").each(function () {
            if(!$(this).is(":last-child")) {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass("active").next().addClass("active").fadeIn();
                    autoSlider();
                });
            }else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(".clients-container div").eq(0).addClass("active").fadeIn(1000).siblings().removeClass("active");
                    autoSlider();                    
                });
            }
        });
    }());
});