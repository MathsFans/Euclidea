/**
 * parse
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
            var html = [], divStart = false, ulStart = false, liStart = false, pStart = false,
                lines = cleanSplit(mdData);

            $.each(lines, function (i) {
                var line = lines[i];

                if (!line) {
                    closeAllTag();
                }

                line = parseATag(line);
                line = parseBTag(line);
                line = parseITag(line);
                line = parseStrongTag(line);
                line = parseEmTag(line);
                line = parseBrTag(line);

                if (line.match(/^(#+)(.*)$/)) {
                    var number = RegExp.$1.length, content = RegExp.$2.trim();
                    startDivTag(content);
                    addHTag(number, content);
                } else if (line.match(/^-(.*)$/)) {
                    (!ulStart) && startUlTag();
                    (liStart) && closeLiTag();
                    startLiTag();
                    addContent(RegExp.$1);
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
            function parseATag(line) {
                if (line.match(/\[([^\]]+)\]\(([^\)]+)\)/g)) {
                    line = line.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2">$1</a>');
                }
                return line;
            }

            /**
             * @param {string} line
             */
            function parseEmTag(line) {
                if (line.match(/\*([^\*]+)\*/g)) {
                    line = line.replace(/\*([^\*]+)\*/g, '<em>$1</em>');
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
                if (line.match(/_([^_]+)_/g)) {
                    line = line.replace(/_([^_]+)_/g, '<i>$1</i>');
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
                        ext = ' data-levelid="' + RegExp.$1 + '"'
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
        }
    });
}(jQuery));