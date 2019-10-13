$(document ).ready(function() {
    $(window).on("scroll", function() {
        var win_w = $(window).width();
        var win_h = $(window).height();

        // if (win_w > 1210) {
        //     if ($(this).scrollTop() > 240) {
        //         $('div.menubox').css('position', 'fixed');
        //         $('div.menubox').css('top', '0px');
        //         $('button.priembtn').css('position', 'fixed');
        //         $('button.priembtn').css('top', '0px');
        //     }
        //     else if ($(this).scrollTop() < 240) {
        //         $('div.menubox').css('position', 'absolute');
        //         $('div.menubox').css('top', '229px');
        //         $('button.priembtn').css('position', 'initial');
        //         $('button.priembtn').css('top', '0px');
        //     }
        // }
        if (win_w > 992) {
            $('div.menu__inner ul').css("display","flex");
            ismenu = true;
        }
    });
    var ismenu = false;
    $('div.hamburger').on("click", function () {
        if(ismenu == true)
        {
            $('div.menu__inner ul').css("display","none");
            $('div.menu__inner').css("height","100px");
            ismenu = false;
        }
        else
        {
            $('div.menu__inner').css("height","450px");
            $('div.menu__inner ul').css("display","flex");
            ismenu = true;
        }
    });
});