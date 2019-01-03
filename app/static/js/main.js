"use strict";

// preloader
setInterval(function () {
    var p = $(".preloader");
    p.css("opacity", 0);
    setInterval(function () {
        p.remove();
    }, 1000);
}, 400);

// lang
$(".lang").click(function () {
    $(".lang__switch").toggleClass("lang__switch_rus");
    $(".lang__span").toggleClass("lang__span_selected");

    if($(".lang__span_rus").hasClass("lang__span_selected")) {
        //ссылка для переключения на русский
        console.log("rus");
        window.location = "http://127.0.0.1:8080/index_ru.html";
    } else {
        //ссылка для переключения на английский
        console.log("eng");
        window.location = "http://127.0.0.1:8080";
    }
});

// scroll
$("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
        scrollTop: top
    }, 600);
});

// hamgurger;
var hamburger = $(".hamburger");
hamburger.click(function () {
    hamburger.toggleClass("is-active");
    // $(".menu").fadeToggle();
    $(".menu").toggleClass("menu_active");

    // disable scrolling when the menu is active
    if (hamburger.hasClass("is-active")) {

        var winScrollTop = $(window).scrollTop();
        $(window).bind("scroll", function () {
            $(window).scrollTop(winScrollTop);
        });
    } else {
        $(window).off("scroll");
    }
})

$(".menu__link").click(function () {
    $(window).off("scroll");
    hamburger.toggleClass("is-active");
    $(".menu").toggleClass("menu_active");
})

// slick slaider
$('.testimonial').slick({
    infinite: true,
    fade: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'></button>"
});

// open and close projects
var projects = $(".projects__btn");
projects.click(function () {
    console.log(1);
    if (projects.text() == "All projects") {
        projects.text("close");
    } else {
        projects.text("All projects");
    }
    $(".projects__link:nth-child(n+4)").fadeToggle("200");
});

// Ajax
$('#form').submit(function (event) {
    event.preventDefault();

    $.ajax({
        url: $(this).attr('action'),
        type: $(this).attr('method'),
        contentType: false,
        cache: false,
        dataType: "json",
        data: $(this).serialize(),
        success: function () {
            $('#form').trigger('reset');
            $(".popup").fadeIn();
            $(".popup__success").fadeIn();
        },
        error: function () {
            $(".popup__error").fadeIn();
            $(".popup").fadeIn();
        }
    })
});

$(".popup p::after").click(function() {
    $(".popup").fadeOut();
    $(".popup p").fadeOut();
});

$(".popup").click(function() {
    $(".popup").fadeOut();
    $(".popup p").fadeOut();
});