export const Utils = {
    date2str(delimiter ? : string, date ? : Date) {
        date = date || new Date();
        return ([
            ('0' + date.getDate()).slice(-2),
            ('0' + (date.getMonth() + 1)).slice(-2),
            ('0' + date.getFullYear()).slice(-2)
        ].join((delimiter === undefined ? '-' : delimiter)));
    },
    cookie(prop, val ? , eternal ? ) {
        var ret = prop ? document.cookie.match((new RegExp(prop.toString() + '=(.*?)(;|$)'))) : ['', false];
        if (val !== undefined)
            document.cookie = prop + '=' + val + (eternal ? '; expires=' + new Date('01/01/2038').toUTCString() : '') + '; path=/;';
        return val ? val : (ret && ret.length > 1 ? ret[1] : '');
    },
    tripRating(arg) {
        var ret = '';
        if (arg && arg >= 3.5) {
            if (arg <= 3.9)
                ret = 'Bom!';
            else if (arg <= 4.2)
                ret = 'Muito Bom!';
            else if (arg <= 4.4)
                ret = 'Incrível!';
            else if (arg <= 4.6)
                ret = 'Fantástico!';
            else if (arg <= 5)
                ret = 'Excepcional!';
        }
        return ret;
    },
    animate: function(win, el, style, unit, from, to, time, prop) {
        if (!el)
            return;
        if(!win)
            win = {};
        var start = (new Date()).getTime(),
            timer = function() {
                var step = Math.min(1, (new Date().getTime() - start) / time);
                if (prop) {
                    el[style] = (from + step * (to - from)) + unit;
                } else {
                    el.style[style] = (from + step * (to - from)) + unit;
                }
                if (step !== 1) {
                    if (!win['requestAnimationFrame']) {
                        win['requestAnimationFrame'] = (function() {
                            return win['webkitRequestAnimationFrame'] ||
                                win['mozRequestAnimationFrame'] ||
                                win['oRequestAnimationFrame'] ||
                                win['msRequestAnimationFrame'] ||
                                function(cb) {
                                    win['setTimeout'](cb, 1000 / 60);
                                };
                        }());
                    }
                    win['requestAnimationFrame'](timer);
                }
            };
        timer();
        el.style[style] = from + unit;
    }
}
