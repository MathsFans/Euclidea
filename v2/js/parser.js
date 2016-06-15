/**
 * parse 
 */

(function ($) {
    'use strict';
    var conf = window.conf = window.conf || {};
    $.extend(conf, {
        parse:function(mdData){
            return $('<div>' + mdData + '</div>');
        }

    });

}(jQuery));