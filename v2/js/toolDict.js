(function () {
    'use strict';
    var conf = window.conf = window.conf || {};
    conf.toolDict = {
        '点': 'Point',
        '线': 'Line',
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
        'Next': 'Next'
    };


    /**
     * @param strStep
     * @returns {string}
     */
    conf.transferStep2Fig = function (strStep) {
        var arrStep, retHtml = '';
        arrStep = strStep.replace(/[,，\s]+/g, ' ').split(' ').join(' Next ').split(' ');
        $.each(arrStep, function (i, k) {
            retHtml += '<span class="toolIcon ' + conf.toolDict[k] + '"></span>';
        });
        return retHtml;
    };

}());