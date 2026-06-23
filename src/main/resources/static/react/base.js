function loadScript() {
    let args = arguments;
    for(let i = 0, len = args.length; i < len; i ++) {
        var url = args[i];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.charset = 'UTF-8';
        script.async = true;
        script.src = url;
        document.head.appendChild(script);
    }
}

function loadScriptDefer() {
    let args = arguments;
    for(let i = 0, len = args.length; i < len; i ++) {
        var url = args[i];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.charset = 'UTF-8';
        script.defer = true;
        script.src = url;
        document.head.appendChild(script);
    }
}

// <link rel="stylesheet" type="text/css" href="theme.css" />
function loadCss() {
    let args = arguments;
    for(let i = 0, len = args.length; i < len; i ++) {
        var url = args[i];
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        document.head.appendChild(link);
    }
}

function loadScriptHandler(src, callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'UTF-8';
    // script.async = true;
    script.src = src;
    if (script.addEventListener) {
        script.addEventListener('load', function () {
            callback();
        }, false);
    } else if (script.attachEvent) {
        script.attachEvent('onreadystatechange', function () {
            var target = window.event.srcElement;
            if (target.readyState === 'loaded') {
                callback();
            }
        });
    }
    document.head.appendChild(script);
}

window.getRootUrl = function() {
    var origin = window.location.origin;
    var pathName = window.location.pathname;
    return origin + "/" + pathName.split('/')[1];
}

function getDefaultLang() {
    // URL 中的 locale 参数
    let locale = getUrlParam('locale');
    if (!locale) {
        // localstorage 中的 lang 参数
        locale = localStorage.getItem("lang");
    }
    if (!locale) {
        // 浏览器的默认语言
        locale = navigator.language; // zh-CN
        locale = locale.replace('-', '_');
    }
    if(!locale) {
        locale = 'zh_CN';
    }
    return locale;
}

/**
 * 获取参数对应的值；若存在同样的key，返回后面key对应的值
 */
function getUrlParam(key) {
    let url = window.location.href;
    let urlParts = url.split("?");
    for (let index = urlParts.length - 1; index > 0; index--) {
        const urlPart = urlParts[index];
        if (!urlPart || urlPart.indexOf('=') < 0) {
            continue;
        }

        let params = urlPart.split('&');
        for (let index = 0; index < params.length; index++) {
            const param = params[index];
            if (param.split("=")[0] === key) {
                return param.split("=")[1];
            }
        }
    }
    return null;
};