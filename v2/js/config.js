(function ($) {
    'use strict';
    var conf = window.conf = window.conf || {};
    $.extend(conf, {
        splashing: true,
        currentPack: '',
        inRamPack: {},
        toolDict: {
            '点': 'point',
            '线': 'line',
            '圆': 'circle',
            '垂分': 'perpendicular-bisector',
            '垂线': 'perpendicular',
            '角分': 'angle-bisector',
            '平行': 'parallel',
            '定圆': 'compass',
            '交点': 'intersect',
            'Next': 'next'
        },

        /**
         * @param strStep
         * @returns {string}
         */
        transferStep2Fig: function (strStep) {
            var arrStep, retHtml = '';
            arrStep = strStep.replace(/[,，\s]+/g, ' ').split(' ').join(' Next ').split(' ');
            $.each(arrStep, function (i, k) {
                retHtml += '<span class="tool ' + conf.toolDict[k] + '"></span>';
            });
            return retHtml;
        }
    });

}(jQuery));