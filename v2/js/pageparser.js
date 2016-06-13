(function ($) {
    'use strict';
    var conf = window.conf = window.conf || {};
    var $menu = $('nav.menu'),
        $menuList = $('.menu-list', $menu),
        $menuSwitch = $('.menu-switch', $menu),
        $menuButton = $('button', $menuList),
        $head = $('header'),
        firstClickMenu = true;

    $menuButton.on('click', function () {
        var command = $(this).text();
        if (command.match(/^\d/)) {
            console.log('process', command);
        }
        $menuSwitch.removeClass('hide fadeout');
        $menuList.addClass('fadeout');
    });

    $menuSwitch.on('click', function () {
        if (firstClickMenu) {
            $menuSwitch.removeClass('start').addClass('done');
        } else {
            $menuList.removeClass('hide fadeout');
            $menu.removeAttr('style');
            $menuSwitch.addClass('fadeout');
        }
    });

    $menuList.on("transitionend", function () {
        if ($menuList.hasClass('fadeout')) {
            $menuList.addClass('hide');
            $menu.css('top', -1000);
        }
    });

    $menuSwitch.on("transitionend", function () {
        if (firstClickMenu) {
            $menuList.removeClass('hide fadeout');
            $menu.removeAttr('style');
            $menuSwitch.addClass('fadeout');
            $head.addClass('fadeout');
            firstClickMenu = false;
        } else {
            if ($menuSwitch.hasClass('fadeout')) {
                $menuSwitch.addClass('hide');
            }
        }
    });
    
    $head.on("transitionend", function () {
        $head.remove();
    });

    $('section').html('a<br>b<br>c<br>d');
}(jQuery));

