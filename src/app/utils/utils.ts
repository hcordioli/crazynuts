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
    }
}
