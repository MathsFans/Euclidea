(function ($) {
    'use strict';
    var conf = window.conf = window.conf || {};
    var $menu = $('nav.menu'),
        $menuList = $('.menu-list', $menu),
        $menuSwitch = $('.menu-switch', $menu),
        $menuButton = $('button', $menuList),
        $head = $('header'),
        $foot = $('footer');

    $menuButton.on('click', function () {
        var command = $(this).text();
        if (command.match(/^\d/)) {
            console.log('process', command);
        }
        $menuSwitch.removeClass('hide fadeout');
        $menuList.addClass('fadeout');
    });

    $menuSwitch.on('click', function () {
        if (conf.splashing) {
            $menuSwitch.addClass('done');
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
        if (conf.splashing) {
            $menuList.removeClass('hide fadeout');
            $menu.removeAttr('style');
            $menuSwitch.removeClass('start').addClass('fadeout');
            $head.addClass('fadeout');
            $foot.addClass('fadeout');
            conf.splashing=false;
        } else {
            if ($menuSwitch.hasClass('fadeout')) {
                $menuSwitch.addClass('hide');
            }
        }
    });

    $head.on("transitionend", function () {
        $head.hide().removeClass('fadeout');
    });

    $foot.on("transitionend", function () {
        $foot.hide().removeClass('fadeout');
    });

}(jQuery));

