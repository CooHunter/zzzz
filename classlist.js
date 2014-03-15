(function(window) {
    var hasClass, addClass, removeClass;

    if (document.documentElement.classList) {
        hasClass = function(el, name) {
            return el.classList.contains(name);
        }

        addClass = function(el, name) {
            el.classList.add(name);
        }

        removeClass = function(el, name) {
            el.classList.remove(name);
        }
    } else {
        hasClass = function(el, name) {
            var re = /(^|\s+) + name + ($|\s+)/;
            return re.test(el.className);
        }

        addClass = function(el, name) {
            if (!hasClass(el, name)) {
                el.className = el.className + ' ' + name;
            }
        }

        removeClass = function(el, nmae) {
            el.className = el.className.replace(/(^|\s+) + name + ($|\s+)/, ' ');
        }
    }

    function toggleClass(el, name) {
        hasClass(el, name)? removeClass(el, name) : addClass(el, name);
    }

    var classlist = {
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass
    }

    if (!window.classlist) {
        window.classlist = classlist;
    }

})(window);
