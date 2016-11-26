/**
 * mini markdown parse for Euclidea Solutions site
 * compatible with MD basic syntax, but extended special syntax
 */

(function ($) {
    'use strict';
    var conf = window.conf = window.conf || {};
    $.extend(conf, {
        /**
         * parse MD string to html
         * @param {string} mdData
         * @returns {*|HTMLElement}
         */
        parse: function (mdData) {
            var html = [], divStart = false, ulStart = false, liStart = false, pStart = false, figureStart = false,
                lines = cleanSplit(mdData);

            $.each(lines, function (i) {
                var line = lines[i];

                if (!line) {
                    closeAllTag();
                }

                line = parseBrTag(line);
                line = parseImgTag(line);
                line = parseButtonTag(line);
                line = parseATag(line);
                line = parseBTag(line);
                line = parseITag(line);
                line = parseStrongTag(line);
                line = parseEmTag(line);
                line = parseStep(line);

                if (line.match(/^(#+)(.*)$/)) {
                    var number = RegExp.$1.length, content = RegExp.$2.trim();
                    startDivTag(content);
                    addHTag(number, content);
                } else if (line.match(/^-(.*)$/)) {
                    (figureStart) && closeFigureTag()
                    (!ulStart) && startUlTag();
                    (liStart) && closeLiTag();
                    startLiTag();
                    addContent(RegExp.$1);
                } else if (line.match(/^\+(.*[:：])(.*)$/)) {
                    (figureStart) && closeFigureTag()
                    (!ulStart) && startUlTag();
                    (liStart) && closeLiTag();
                    startLiTag();
                    addHideContent(RegExp.$1, RegExp.$2);
                } else {
                    if (line && isAllTagClose()) {
                        startPTag();
                    }
                    addContent(line);
                }
            });

            closeAllTag();

            return html.join('');

            //=====================================================================================
            //function defines
            //=================

            function closeAllTag() {
                closeFigureTag();
                closeLiTag();
                closeUlTag();
                closePTag();
                closeDivTag();
            }

            /**
             * @returns {boolean}
             */
            function isAllTagClose() {
                return !(divStart || pStart);
            }


            /**
             * @param {string} line
             */
            function parseStep(line) {
                if (line.match(/步骤[:：]([点线圆垂分角平行定交，, ]+)/)) {
                    line = line.replace(/步骤[:：]([点线圆垂分角平行定交，, ]+)/g, '步骤：' + transferStep2Fig(RegExp.$1));
                }
                return line;
            }

            /**
             * @param {string} line
             */
            function parseImgTag(line) {
                if (line.match(/!\[([^\]]+)]\(([^\)]+\.(png|gif|svg))\)/g)) {
                    line = line.replace(/!\[([^\]]+)]\(([^\)]+\.(png|gif|svg))\)/g, '<img src="$2" alt="$1">');
                }
                return line;
            }

            /**
             * @param {string} line
             */
            function parseButtonTag(line) {
                if (line.match(/\[([^\]]+)]\(([^\)]+\.(png|gif|svg))\)/g)) {
                    line = line.replace(/\[([^\]]+)]\(([^\)]+\.(png|gif|svg))\)/g, '<button data-img="$2">$1</button>');
                }
                return line;
            }

            /**
             * @param {string} line
             */
            function parseATag(line) {
                if (line.match(/\[([^\]]+)]\(([^\)]+)\)/g)) {
                    line = line.replace(/\[([^\]]+)]\(([^\)]+)\)/g, '<a href="$2">$1</a>');
                }
                return line;
            }

            /**
             * @param {string} line
             */
            function parseEmTag(line) {
                if (line.match(/([^\\])\*([^\*]+)\*/g)) {
                    line = line.replace(/([^\\])\*([^\*]+)\*/g, '$1<em>$2</em>');
                    line = line.replace(/\\\*/g, '*');
                }
                return line;
            }

            /**
             * @param {string} line
             */
            function parseStrongTag(line) {
                if (line.match(/\*\*([^\*]+)\*\*/g)) {
                    line = line.replace(/\*\*([^\*]+)\*\*/g, '<strong>$1</strong>');
                }
                return line;
            }

            /**
             * @param {string} line
             */
            function parseITag(line) {
                if (line.match(/_([^_<]+)_/g)) {
                    line = line.replace(/_([^_<]+)_/g, '<i>$1</i>');
                }
                return line;
            }

            /**
             * @param {string} line
             */
            function parseBTag(line) {
                if (line.match(/__([^_]+)__/g)) {
                    line = line.replace(/__([^_]+)__/g, '<b>$1</b>');
                }
                return line;
            }

            /**
             * @param {string} line
             */
            function parseBrTag(line) {
                if (line.match(/ \s+$/)) {
                    line = line.replace(/ \s+$/, '<br>');
                }
                return line;
            }

            /**
             * @param {string} c - content
             */
            function addContent(c) {
                html.push(c);
            }

            /**
             * @param t - title
             * @param c - hideen content
             */
            function addHideContent(t, c) {
                var h = ('00000' + (conf.indexHideId++)).slice(-5),
                    extClass = (t.match(/步骤/)) ? 'step-container' : '';
                html.push('<span class="vm">' + t + '</span>');
                html.push('<button class="vm" data-h="' + h + '">点击显示</button>');

                html.push('<figure class="vm ' + extClass + ' nodisp" data-h="' + h + '">' + c);
            }

            /**
             * @param {number} n - header level, h1 h2 h3 h4 h5 h6
             * @param {string} c - header content
             */
            function addHTag(n, c) {
                html.push('<h' + n + '>' + c + '</h' + n + '>');
            }

            function startLiTag() {
                if (!liStart) {
                    liStart = true;
                    html.push('<li>');
                }
            }

            function startUlTag() {
                if (!ulStart) {
                    ulStart = true;
                    html.push('<ul>\n');
                }
            }

            function startFigureTag() {
                if (!figureStart) {
                    figureStart = true;
                    html.push('<figure>\n');
                }
            }

            function startPTag() {
                if (!pStart) {
                    pStart = true;
                    html.push('<p>');
                }
            }

            /**
             * @param {string} c - first line content
             */
            function startDivTag(c) {
                var ext = '';
                if (!divStart) {
                    divStart = true;
                    if (c.match(/^([\d\.]+)/)) {
                        ext = ' class="level" data-levelid="' + RegExp.$1 + '"';
                    }
                    html.push('<div' + ext + '>');
                }
            }

            function closeLiTag() {
                if (liStart) {
                    liStart = false;
                    html.push('</li>\n');
                }
            }

            function closeUlTag() {
                if (ulStart) {
                    ulStart = false;
                    html.push('</ul>\n');
                }
            }

            function closeFigureTag() {
                if (figureStart) {
                    figureStart = false;
                    html.push('</figure>\n');
                }
            }

            function closePTag() {
                if (pStart) {
                    pStart = false;
                    html.push('</p>\n');
                }
            }

            function closeDivTag() {
                if (divStart) {
                    divStart = false;
                    html.push('</div>\n');
                }
            }

            /**
             * remove redundant lines and trail space, then split to an array
             * @param text
             * @returns {Array}
             */
            function cleanSplit(text) {
                var lines = text.replace(/[\r\n]/g, '\n').concat('\n\n').split('\n');
                $.each(lines, function (i) {
                    lines[i] = lines[i].replace(/^\s+$/, '');
                });
                return lines.join('\n').replace(/\n\n+/g, '\n\n').split('\n');
            }

            /**
             * @param strStep
             * @returns {string}
             */
            function transferStep2Fig(strStep) {
                var arrStep, retHtml = '';
                arrStep = strStep.replace(/[,，\s]+/g, ' ').split(' ').join(' Next ').split(' ');
                $.each(arrStep, function (i, k) {
                    retHtml += '<span class="tool ' + conf.toolDict[k] + '"></span>';
                });
                return retHtml;
            }
        },
        indexHideId: 0,
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
        }
    });
}(jQuery));
