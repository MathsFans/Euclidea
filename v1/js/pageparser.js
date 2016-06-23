(function ($) {
    'use strict';
    var mdContainer = $('#mdContainer');
    if (!mdContainer.length) {
        return;
    }
    $.get(mdContainer.attr('data-md') + '.md', function (data) {
        var mdParser = new Remarkable();
        mdContainer.html(mdParser.render(data));

        //隐藏标题
        $('h3', mdContainer).each(function () {
            if (/解法$/.test($(this).text())) {
                $(this).hide();
                $(this).next().hide();
            }
        });

        $('a', mdContainer).addClass('showfig');

        //修改h4标题
        $('h4', mdContainer).each(function () {
            if (/解题开始$/.test($(this).text())) {
                var $ul = $(this).next('ul').eq(0);
                $(this).addClass('briefH4');
                $ul.addClass('brief');
                $('a', $ul).removeClass('showfig').attr('target', '_blank');
            }
        });

        //修改链接功能
        var fnTitleClicked = function (ele) {
            var url = $(this).attr('data-img'),
                $link = $(this);
            if (url && $link.is('[data-img]')) {
                $link.after('<br><img src="' + url + '" style="display:block;">');
                $link.removeAttr('data-img');
            } else if ($link.next().next().is(':visible')) {
                $link.next().hide().next().hide();
            } else {
                $link.next().show().next().show();
            }
        };
        $('a.showfig', mdContainer).each(function () {
            var url = $(this).attr('href');
            $(this).attr('href', 'javascript:;');
            $(this).attr('data-img', url);
            $(this).click(fnTitleClicked);
        });

        //步骤工具
        var toolDict = {
            '点': 'Point',
            '直线': 'Line',
            '圆': 'Circle',
            '垂分': 'PerpendicularBisector',
            '垂分线': 'PerpendicularBisector',
            '垂直平分线': 'PerpendicularBisector',
            '垂线': 'Perpendicular',
            '角分': 'AngleBisector',
            '角平分线': 'AngleBisector',
            '平行': 'Parallel',
            '平行线': 'Parallel',
            '定圆': 'Compass',
            '指定半径画圆': 'Compass',
            '交点': 'Intersect',
            '相交点': 'Intersect',
            '中点': 'Midpoint',
            'next': 'Next'
        };

        function trans2Fig(str) {
            var arr, retHtml = '';
            str = str.replace(/[(工具),，\s]+/g, ' ');
            arr = str.split(' ').join(' next ').split(' ');
            $.each(arr, function (i, s) {
                retHtml += '<span class="toolIcon ' + toolDict[s] + '"></span>';
            });
            return retHtml;
        }

        $('em', mdContainer).each(function () {
            if (/步骤[:：]/.test($(this).text())) {
                var textArr = $(this).text().match(/^(.*步骤)[:：\s]*(.*)$/);
                $(this).html(textArr[1] + '：' + trans2Fig(textArr[2])).addClass('stepIcons');
            }
        });

    });

    //固定导航菜单
    var $ul = $('header ul'), topUl = parseInt($(document.body).css('padding-top')) >= 50 ? 112 : 62,
        currentUlFixStatus = false, shouldUlFixStatus = false;

    $(window).scroll(function () {
        shouldUlFixStatus = ($(document.body).scrollTop() > topUl );
        if (currentUlFixStatus !== shouldUlFixStatus) {
            currentUlFixStatus = shouldUlFixStatus;
            $ul.css({position: shouldUlFixStatus ? 'fixed' : 'relative'})
        }
    })

}(jQuery));

