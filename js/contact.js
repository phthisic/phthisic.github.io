$(document).ready(function () {
    var $boxHight;
    $(".contact-method-span").css("display", "none");
    $("#navi-contact , #intro-contact").click(function () {
        $boxHight = $(window).height() + "px";
        $(".contact-method").css("height", $boxHight);
    });

    $(".contact-method").click(function () {
        console.log($(this).attr("id"));
        var $clickId = "#" + $(this).attr("id");
        $($clickId).addClass("showbox");
        $($clickId + ">div:last-child").fadeIn(500);
        $($clickId + ">div:last-child").css("display", "block");
    });


    $("#feedback-submit").click(function () {
        var $feedback = $("#feedback-content").val();
        $("#feedback-send").attr("href", "Mailto:lzr1996@live.cn?Body=" + $feedback)
    });

    $("nav ul li, #intro-contact").click(function () {
        $(".contact-method-span").css("display", "none");
    });
});