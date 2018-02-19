function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";";
}

function getCookieText(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getCookieNumeric(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return parseInt(c.substring(name.length, c.length));
        }
    }
    return 0;
}

function saveSettings() {

    var countDropdown = document.getElementById("count_dropdown");
    var countMode = countDropdown.options[countDropdown.selectedIndex].value;

    setCookie("CountMode", countMode);
}

function loadSettings() {

    var countMode = getCookieNumeric("CountMode");

    var countDropdown = document.getElementById("count_dropdown");
    for (var i = 0; i < countDropdown.options.length; i++) {
        if (countDropdown.options[i].value == countMode) {
            countDropdown.options[i].selected = true;
            break;
        }
    }


}