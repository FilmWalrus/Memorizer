function CreateParenthetical(textArray) {
    if (textArray.length == 0) {
        return "";
    }

    var parenthical = " (";
    for (var i = 0; i < textArray.length; i++) {
        parenthical = parenthical + textArray[i];
        if (i < textArray.length - 1) {
            parenthical = parenthical + "; ";
        }
    }
    parenthical = parenthical + ")";
    return parenthical;
}


function GetFreeLetters(str) {
    var l_str = str.toLocaleLowerCase();
    var free_letters = 0;
    if (l_str.search("the ") == 0) {
        free_letters = 3;
    } else if (l_str.search("an ") == 0) {
        free_letters = 2;
    } else if (l_str.search("a ") == 0) {
        free_letters = 1;
    }
    return free_letters;
}

function GetFirstLetter(str) {
    var l_str = str.toLocaleLowerCase();
    if (l_str.search("the ") == 0 && l_str.length >= 5) {
        return l_str.charAt(4);
    } else if (l_str.search("an ") == 0 && l_str.length >= 4) {
        return l_str.charAt(3);
    } else if (l_str.search("a ") == 0 && l_str.length >= 3) {
        return l_str.charAt(2);
    } else if (l_str.length > 0) {
        return l_str.charAt(0);
    }
    return "";
}

function IsAlphaNumeric(str) {
    return str.length === 1 && str.match(/[a-z0-9]/i);
}

function ScrubText(str) {

    // Replace ampersands with the word "and"
    str = str.replace("&", "and");

    // Skip leading The/An/A
    var start_index = GetFreeLetters(str);

    // Remove anything other than letters from a text
    var str_scrub = "";
    for (var i = start_index; i < str.length; i++) {
        if (IsAlphaNumeric(str.charAt(i))) {
            str_scrub = str_scrub + str.charAt(i);
        }
    }
    return str_scrub;
}

function CompareTexts(userText, answerText) {

    // Scrub out anything other than letters and then compare them lowercase
    var user_scrub = ScrubText(userText);
    var answer_scrub = ScrubText(answerText);

    return (user_scrub.toLocaleLowerCase().localeCompare(answer_scrub.toLocaleLowerCase()) == 0);
}

function ResetCursor() {
    document.getElementById("answer_input").focus();
}

function getRandomizedIndexArray(arrayLength) {
    var indexArray = new Array();
    for (var i = 0; i < arrayLength; i++) {
        indexArray[i] = i;
    }
    indexArray.sort(function (a, b) { return 0.5 - Math.random(); });
    return indexArray;
}

// This function disables hitting Enter in a textbox from reloading the page.
function NoEnter() {
    return !(window.event && window.event.keyCode == 13);
}

function ColorCodeTopics(toggleMode) {
    var topicDropdown = document.getElementById("topic_dropdown");
    for (var i = 0; i < topicDropdown.options.length; i++) {
        var topicIndex = topicDropdown.options[i].value;
        if (topicIndex < 0) {
            topicDropdown.options[i].style.background = "white";
            topicDropdown.options[i].style.color = "black ";
            if (toggleMode) {
                topicDropdown.options[i].text = "Toggle Topic On/Off";
            } else {
                topicDropdown.options[i].text = "Select Topic";
            }
        }else if (!toggleMode) {
            topicDropdown.options[i].style.background = "white";
            topicDropdown.options[i].style.color = "black ";
        } else if (deckArray[topicIndex].active) {
            topicDropdown.options[i].style.background = "palegreen";
            topicDropdown.options[i].style.color = "black ";
        } else {
            topicDropdown.options[i].style.background = "indianred ";
            topicDropdown.options[i].style.color = "white ";
        }
    }
}