//cookie数据转换为js对象
function getcookie () {
    var cookie = {};
    var all = document.cookie;
    if (all === '') {
        return cookie;
    }
    var list = all.split(';');
    for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var p = item.indexOf('=');
        var name = item.substring(0, p);
        name = decodeURIComponent(name);
        var value = item.substring(p + 1);
        value = decodeURIComponent(value);
        cookie[name] = value;
    }
    return cookie;
} 

//cookie设置/修改
function setCookie (name, value, expires, path, domain, secure) {
    var cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    if (expires) cookie += '; expires=' + expires.toGMTString();
    if (path) cookie += '; path=' + path;
    if (domain) cookie += '; domain=' + domain;
    if (secure) cookie += '; secure=' + secure;
    document.cookie = cookie;
}

