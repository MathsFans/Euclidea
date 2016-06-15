(function ($) {
    'use strict';
    var conf = window.conf;
    var $menu = $('nav.menu'),
        $menuList = $('.menu-list', $menu),
        $menuSwitch = $('.menu-switch', $menu),
        $menuButton = $('button', $menuList),
        $head = $('header'),
        $foot = $('footer'),
        mdParser = new Remarkable();

    /**
     * load pack md and parse to relative section
     * @param packName
     */
    function loadPack(packName) {
        if (!conf.inRamPack[packName]) {
            $.get('solved/' + packName + '.md', function (data) {
                conf.inRamPack[packName] = true;
                insertMardDown(packName, data);
                showPack(packName);
            });
        } else {
            showPack(packName);
        }
    }

    /**
     * insert markdown as html
     * @param packName
     * @param data
     */
    function insertMardDown(packName, data) {
        $('section.md-container[data-md="' + packName + '"]').html(parseMardDown(data));
    }

    /**
     * parse markdown to html
     * @param data
     * @returns {*|HTMLElement}
     */
    function parseMardDown(data) {
        var html = mdParser.render(data);
        //大量中间处理。。。。。。。。。
        return $(html);
    }

    /**
     * show pointed pack and hide all other
     * @param packName
     */
    function showPack(packName) {
        $('section.md-container').hide();
        $('section.md-container[data-md="' + packName + '"]').show();
    }

    function menuButtonClicked() {
        var command = $(this).text();
        if (command.match(/^\d/)) {
            if (command !== conf.currentPack) {
                conf.currentPack = command;
                loadPack(command);
            }
        }
        $menuSwitch.removeClass('hide fadeout');
        $menuList.addClass('fadeout');

    }

    function menuSwitchClicked() {
        if (conf.splashing) {
            $menuSwitch.addClass('done');
        } else {
            $menuList.removeClass('hide fadeout');
            $menu.removeAttr('style');
            $menuSwitch.addClass('fadeout');
        }

    }

    function menuListTransitionend() {
        if ($menuList.hasClass('fadeout')) {
            $menuList.addClass('hide');
            $menu.css('top', -1000);
        }
    }

    function menuSwitchTransitionend() {

        if (conf.splashing) {
            $menuList.removeClass('hide fadeout');
            $menu.removeAttr('style');
            $menuSwitch.removeClass('start').addClass('fadeout');
            $head.addClass('fadeout');
            $foot.addClass('fadeout');
            conf.splashing = false;
        } else {
            if ($menuSwitch.hasClass('fadeout')) {
                $menuSwitch.addClass('hide');
            }
        }
    }

    function headTransitionend() {
        $head.hide().removeClass('fadeout');
    }

    function footTransitionend() {
        $foot.hide().removeClass('fadeout');
    }

    $menuButton.on('click', menuButtonClicked);
    $menuSwitch.on('click', menuSwitchClicked);
    $menuList.on("transitionend", menuListTransitionend);
    $menuSwitch.on("transitionend", menuSwitchTransitionend);
    $head.on("transitionend", headTransitionend);
    $foot.on("transitionend", footTransitionend);

}(jQuery));

