function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";";
}

function getCookieText(cname, defaultValue) {
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
    return defaultValue;
}

function getCookieNumeric(cname, defaultValue) {
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
    return defaultValue;
}

function saveDropdownSettings(dropdownName, settingName) {
    var dropdown = document.getElementById(dropdownName);
    var settingValue = dropdown.options[dropdown.selectedIndex].value;
    setCookie(settingName, settingValue);
}

function loadDropdownSettings(dropdownName, settingName, defaultValue) {

    var settingValue = getCookieNumeric(settingName, defaultValue);

    var dropdown = document.getElementById(dropdownName);
    for (var i = 0; i < dropdown.options.length; i++) {
        if (dropdown.options[i].value == settingValue) {
            dropdown.options[i].selected = true;
            break;
        }
    }

}

function saveSettings() {

    // Save settings

    // Topic
    saveDropdownSettings("topic_dropdown", "TopicMode");

    // Count mode
    saveDropdownSettings("count_dropdown", "CountMode");

    // Letter
    var letterTextbox = document.getElementById("letter_option");
    var letterInput = letterTextbox.value;
    setCookie("TextFilter", letterInput);

    // Difficulty
    saveDropdownSettings("difficulty_dropdown", "Difficulty");

    // Hint Style
    saveDropdownSettings("hint_dropdown", "HintMode");

    // Topic preferences
    // Call these manually.
}





function loadSettings() {

    // Load settings
    loadDropdownSettings("topic_dropdown", "TopicMode", 0);
    loadDropdownSettings("count_dropdown", "CountMode", -5);
    loadDropdownSettings("difficulty_dropdown", "Difficulty", 0);
    loadDropdownSettings("hint_dropdown", "HintMode", 5);

    var textFilter = getCookieText("TextFilter", "");
    var letterTextbox = document.getElementById("letter_option");
    letterTextbox.value = textFilter;

    // Load topic preferences
    loadTopicPreferences();
}

function saveTopicPreference(topicIndex) {
    if (topicIndex < 0 || topicIndex >= deckArray.length) {
        return;
    }

    var settingName = deckArray[topicIndex].labels.aText;
    if (settingName && settingName.length > 0) {
        // Save the topic preference if it is valid.
        if (deckArray[topicIndex].active) {
            setCookie(settingName, 1);
        } else {
            setCookie(settingName, 0);
        }
    }
}

function saveTopicPreferences() {
    for (var i = 0; i < deckArray.length; i++) {
        saveTopicPreference(i);
    }
}

function loadTopicPreferences() {

    for (var i = 0; i < deckArray.length; i++) {
        var settingName = deckArray[i].labels.aText;


        // If this is a valid topic name, attempt to load the user's preference for it.
        if (settingName && settingName.length > 0) {
            var topicState = getCookieNumeric(settingName, -1);

            if (topicState < 0) {
                topicState = 1; // Default topics to on
            }

            deckArray[i].active = (topicState == 1);
        } else {
            deckArray[i].active = true;
        }
    }
}
