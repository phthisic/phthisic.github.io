$(document).ready(function () {
    var $workHight;
    $(".work-navi").css("display", "none");
    $("#navi-work").click(function () {
        $workHight = $(window).height() + "px";
        $(".work").css("height", $workHight);
    });

    $(".more-Info-for-work").click(function () {
        console.log($(this).attr("id"));
        var $workId = "#" + $(this).attr("id");
        if ($workId == "#work-7180") {
            $(".work-navi").fadeIn(500);
            $(".work-navi").css("display", "block");
            $("#work-navi-home").addClass("activeworkLink");
            $(".work-navi li").click(function () {
                $(this).siblings().removeClass("activeworkLink");
                $(this).addClass("activeworkLink");
                // console.log($(this).attr("id"));
                // var $workLink = "#" + $(this).attr("id") + "-7180";
                // console.log($workLink);
                // $("html, body, .work-detail").animate({ "scrollTop": $($workLink).offset().top - 50 }, 500);
            });
        }
        $($workId + "-detail").fadeIn(500);
        $($workId + "-detail").css("display", "block");
    });

    $("nav ul li").click(function () {
        $(".work-detail").css("display", "none");
        $(".work-navi").css("display", "none");
    });

    $(".close").click(function () {
        $(".work-detail").fadeOut(300);
        $(".work-navi").fadeOut(300);
    });

    // $('.work-navi li').click(function (event) {
    // console.log($(this).attr("id"));
    // var $workLink = "#" + $(this).attr("id") + "-7180";
    // console.log($workLink);
    // $(".work-detail").animate({ scrollTop: $($workLink).offset().top - 50 }, 500);
    //     event.preventDefault();
    // });
    // $('#introduction').click(function (event) {
    //     $(".work-detail").animate({ scrollTop: $("#introduction-7180").offset().top - 30 }, 500);
    //     event.preventDefault();
    // });

    // $('#design-exploration').click(function (event) {
    //     $(".work-detail").animate({ scrollTop: $("#design-exploration-7180").offset().top - 30 }, 500);
    //     event.preventDefault();
    // });

    // $('#partA').click(function (event) {
    //     $(".work-detail").animate({ scrollTop: $("#partA-7180").offset().top - 30 }, 500);
    //     event.preventDefault();
    // });

    // $('#introduction').click(function (event) {
    //     $(".work-detail").animate({ scrollTop: $("#introduction-7180").offset().top - 30 }, 500);
    //     event.preventDefault();
    // });

    // $('#introduction').click(function (event) {
    //     $(".work-detail").animate({ scrollTop: $("#introduction-7180").offset().top - 30 }, 500);
    //     event.preventDefault();
    // });
});