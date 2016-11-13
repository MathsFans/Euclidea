(function ($) {
    'use strict';
    var conf = window.conf;
    var $menu = $('nav.menu'),
        $menuList = $('.menu-list', $menu),
        $menuSwitch = $('.menu-switch', $menu),
        $menuButton = $('button', $menuList),
        $head = $('header'),
        $foot = $('footer'),
        $section = $('section.md-container'),
        $aniContainer = $('.aniContainer'),
        $aniBlock = $('.aniBlock'),
        $figure = $('figure.figure');

    /**
     * initial page
     */
    (function initPage() {
        fixAniBlockSize();
        $('body').delegate(
            'button[data-h]', 'click', hideStepButtonClicked
        ).delegate(
            'button[data-img]', 'click', showImageButtonClicked
        ).delegate(
            'figure.figure', 'click', figureClicked
        );
    }());

    /**
     * fix the rotated schema size
     */
    function fixAniBlockSize() {
        var w = $aniContainer.width(),
            h = $aniContainer.height(),
            s = (w > h ? w : h) * 1.3;
        $aniBlock.css({
            width: s,
            height: s,
            top: h / 2 - s / 2,
            left: w / 2 - s / 2
        });
        $menuList.removeAttr('style');
        var h2 = $menuList.height();
        $menuList.css({
            'height': h,
            'padding-top': (h - h2) / 2
        });
    }

    /**
     * load pack md and parse to relative section
     * @param packName
     */
    function loadPack(packName) {
        if (!conf.inRamPack[packName]) {
            $.get(packName + '.md', function (data) {
                conf.inRamPack[packName] = true;
                insertContent(packName, data);
                showPack(packName);
            });
        } else {
            showPack(packName);
        }
        window.scrollTo(0, 0);
    }

    /**
     * insert markdown as html
     * @param packName
     * @param data
     */
    function insertContent(packName, data) {
        $('section[data-md="' + packName + '"]').html(conf.parse(data));
    }

    /**
     * show pointed pack and hide all other
     * @param packName
     */
    function showPack(packName) {
        $section.hide();
        $('section[data-md="' + packName + '"]').show();
    }

    /**
     * event handler
     */
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

    /**
     * event handler
     */
    function menuSwitchClicked() {
        if (conf.splashing) {
            $menuSwitch.addClass('done');
        } else {
            $menuList.removeClass('hide fadeout');
            $menu.removeAttr('style');
            $menuSwitch.addClass('fadeout');
        }
    }

    /**
     * event handler
     */
    function menuListTransitionend() {
        if ($menuList.hasClass('fadeout')) {
            $menuList.addClass('hide');
            $menu.css('top', -1000);
        }
    }

    /**
     * event handler
     */
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

    /**
     * event handler
     */
    function headTransitionend() {
        $head.hide().removeClass('fadeout');
    }

    /**
     * event handler
     */
    function footTransitionend() {
        $foot.hide().removeClass('fadeout');
    }

    function showImageButtonClicked() {
        var img = $(this).attr('data-img');
        $figure.addClass('show-figure').html('<div><img src="' + img + '"><span class="close">+</span></div>');

    }

    function figureClicked() {
        $figure.removeClass('show-figure').empty();
    }

    function hideStepButtonClicked() {
        $(this).hide();
        $('figure[data-h="' + $(this).attr('data-h') + '"]').removeClass('nodisp');
    }

    $menuButton.on('click', menuButtonClicked);
    $menuSwitch.on('click', menuSwitchClicked);
    $menuList.on('transitionend', menuListTransitionend);
    $menuSwitch.on('transitionend', menuSwitchTransitionend);
    $head.on('transitionend', headTransitionend);
    $foot.on('transitionend', footTransitionend);
    $(window).on('resize', fixAniBlockSize);

}(jQuery));

