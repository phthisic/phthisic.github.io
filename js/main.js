$(document).ready(function () {
    //adjust the bg picture
    var $windowHight = $(window).height();
    $(".home").attr("style", "height:" + $windowHight + "px;");
    var $navigationPosition = 0.25 * $windowHight;
    $(".navigation").attr("style", "margin-top:" + $navigationPosition + "px;");

    $(window).resize(function () {
        if ($(".home").css("display")=="block"){
            $windowHight = $(window).height();
            $(".home").attr("style", "height:" + $windowHight + "px;");
            $navigationPosition = 0.2 * $windowHight;
            $(".navigation").attr("style", "margin-top:" + $navigationPosition + "px;");
        }
        
    });

    //show and hide each section by clicking on the vertical navigation
    $(".info").attr("style", "display:none;");
    $(".work").attr("style", "display:none;");
    $(".contact").attr("style", "display:none;");

    $("#navi-home").click(function () {
        $windowHight = $(window).height();
        $(".home").attr("style", "display:block;");
        $(".home").attr("style", "height:" + $windowHight + "px;");
        $(".info").attr("style", "display:none;");
        $(".work").attr("style", "display:none;");
        $(".contact").attr("style", "display:none;");
        $(".reference").attr("style", "display:none;");
        event.preventDefault();
    });

    $("#navi-info").click(function () {
        $(".home").attr("style", "display:none;");
        $(".info").fadeIn(700);
        $(".info").attr("style", "display:block;");
        $(".work").attr("style", "display:none;");
        $(".contact").attr("style", "display:none;");
        $(".reference").attr("style", "display:none;");
        $(".info .intro-detail").css("height", $windowHight+"px");
        event.preventDefault();
    });

    $("#navi-work").click(function () {
        $(".home").attr("style", "display:none;");
        $(".info").attr("style", "display:none;");
        $(".work").fadeIn(700);
        $(".work").attr("style", "display:block;");
        $(".contact").attr("style", "display:none;");
        $(".reference").attr("style", "display:none;");
        event.preventDefault();
    });

    $("#navi-contact, #intro-contact").click(function () {
        $(".home").attr("style", "display:none;");
        $(".info").attr("style", "display:none;");
        $(".work").attr("style", "display:none;");
        $(".contact").fadeIn(700);
        $(".contact").attr("style", "display:block;");
        $(".reference").attr("style", "display:none;");
        event.preventDefault();
    });

    $("#navi-refer").click(function () {
        $(".home").attr("style", "display:none;");
        $(".info").attr("style", "display:none;");
        $(".work").attr("style", "display:none;");
        $(".contact").attr("style", "display:none;");
        $(".reference").fadeIn(700);
        $(".reference").attr("style", "display:block;");
        event.preventDefault();
    });
    //css of the current section
    $("#navi-home").addClass("activeLink");
    $("nav ul li").click(function () {
        $(this).siblings().removeClass("activeLink");
        $(this).addClass("activeLink");
    });

    $(".work-navi li").click(function () {
        $(this).siblings().removeClass("activeWorkLink");
        $(this).addClass("activeWorkLink");
    });
});