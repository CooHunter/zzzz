var browserDetect = function() {
    var ua = navigator.userAgent.toLowerCase(),
        version,
        browserName,
        os;


    //判断系统
    function dectOS() {
        var dectOS = /intel (mac) os x (\d\d?[.\w]\d([.\w]\d)?)/mi; //可以判断mac版本，不想写弄win的了

        var matches = ua.match(dectOS);
        if (matches) {
            // macversion = matches[2]
            os = matches[1];
        } else if (navigator.platform) {
            os = navigator.platform.substr(0, 3).toLowerCase();
        }
    }

    //判断浏览器版本
    function dectVersion(regex) {
        var matches = ua.match(regex);
        if (matches) {
            version = matches[1] || matches[2];
        }
    }

    //判断最新版360，不可靠
    function is360() {
        for (var i = 0, len = navigator.plugins.length; i <= len; i++) {
            if (navigator.plugins[i].name == 'fancy3d') {
                return true;
            }
        }
        return false;
    }

    //safari
    if (ua.indexOf('safari') > -1 && ua.indexOf('chrome') == -1) {
        browserName = 'safari';
        var safariVersion = /version\/(\d\.\d.\d)/mi;

        dectOS();
        dectVersion(safariVersion);
    }

    //firefox
    if (ua.indexOf('firefox') > -1) {
        browserName = 'firefox';
        var ffVersion = /firefox\/(\d\d?\.\d)/im;


        dectOS();
        dectVersion(ffVersion);
    }


    //chrome系
    if (ua.indexOf('chrome') > -1) {
        dectOS();

        //遨游,搜狗: 只判断win7最新版
        if (ua.indexOf('maxthon') > -1) {
            browserName = 'maxthon';
            var maxthonVersion = /maxthon\/(\d\.\d\.\d)/im;
            dectVersion(maxthonVersion);
        } else if (ua.indexOf('se') > -1) {
            browserName = 'sogou';
            version = "搜狗的没法判断";
        } else if (is360()) {
            browserName = '360';
            version = '360是个垃圾'
        }

        else {
            browserName = 'chrome';
            var chromeVersion = /chrome\/(\d\d?)/im;
            dectVersion(chromeVersion);
        }
    }

    //ie
    if (ua.indexOf('msie') > -1) {
        browserName = 'ie';
        var ieVersion = /msie (\d\d?\.\d)/im;

        dectOS();
        dectVersion(ieVersion);
    }

    //opera, 放最后防止被chrome覆盖，没事换毛引擎
    if (window.opr || window.opera) {
        browserName = 'opera';
        var oprVersion = /version\/(\d\d?\.\d\d?)|opr\/(\d\d)/im;

        dectOS();
        dectVersion(oprVersion);
    }


    document.write('OS: ' + os + '<br />' + 'Browse: ' + browserName + '<br />' + 'Version: ' + version);
}();