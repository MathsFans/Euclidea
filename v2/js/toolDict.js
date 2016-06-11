(function () {
    'use strict';
    var conf = window.conf = window.conf || {};
    conf.toolDict = {
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
        '中点': 'Midpoint'
    };

    function trans2Fig(str) {
        str = str.replace(/[(工具),，\s]+/g, ' ');
        return str;
    }

    trans2Fig('7E步骤圆，圆，直线，直线，直线，直线，直线');
}());