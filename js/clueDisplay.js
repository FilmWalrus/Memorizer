function UpdateDisplay() {

    // Figure out the longest category to dimension the hint table
    var longest_category = 0;
    for (var i = 0; i < answerArray.length; i++) {
        if (answerArray[i].iList.length > longest_category) {
            longest_category = answerArray[i].iList.length;
        }
    }

    // Save current scroll position (we will restore it later)
    var oldTable = document.getElementById('clueTable');
    var scrollDist = 0;
    if (oldTable) {
        scrollDist = oldTable.scrollTop;
    }


    // Setup the clue table's style settings.
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight || e.clientHeight || g.clientHeight;
    var mainHeadHeight = document.getElementById('mainSettings').offsetHeight;
    var tableHeight = y - mainHeadHeight - 45;
    var tableStyle = "<table id=\"clueTable\" class=\"clue-table\" style=\"";
    tableStyle = tableStyle + "display: block;";
    tableStyle = tableStyle + "max-height: " + tableHeight + "px;";
    //tableStyle = tableStyle + "overflow-y:scroll"
    //tableStyle = tableStyle + "max-width: " + x + "px;";
    //tableStyle = tableStyle + "overflow-x:scroll"
    tableStyle = tableStyle + "\">";
    //document.getElementById("demo").innerHTML = "Debug Msg: " + mainHeadHeight;

    var displayText = tableStyle;




    ////////////////////////
    // Display the labels //
    ////////////////////////
    displayText = displayText + "<tr>";
    for (var j = 0; j < answerArray.length; j++) {
        // Topic label
        displayText = displayText + "<th>";

        var labelItem = answerArray[j].labels;
        //document.getElementById("demo").innerHTML = "Debug Msg: " + debug_text;
        displayText = displayText + labelItem.aText.fontcolor("white");


        // Clue labels
        if (labelItem.cluesOn()) {
            var clueArray = new Array();
            for (var i = 0; i < labelItem.clues.length; i++) {
                if (labelItem.clues[i].cDisplay) {
                    clueArray.push(labelItem.clues[i].cText);
                }
            }
            displayText = displayText + CreateParenthetical(clueArray).fontcolor("white");
        }

        displayText = displayText + "</th>";
    }
    displayText = displayText + "</tr>";

    ///////////////////////
    // Display the clues //
    ///////////////////////



    // Loop through the rows (items in categories)
    displayText = displayText + "<tbody>";
    for (var k = 0; k < longest_category; k++) {
        displayText = displayText + "<tr>";

        // Loop through the columns (categories)
        for (var j = 0; j < answerArray.length; j++) {

            

            var clueClass = 0;

            var clueText = "";

            if (k < answerArray[j].iList.length) {

                var currentItem = answerArray[j].iList[k];

                if (currentItem.solved) {
                    // Display solved text
                    clueText = clueText + currentItem.dText; //.fontcolor("green");
                    if (currentItem.earned) {
                        clueClass = 1;
                    } else {
                        clueClass = 2;
                    }
                } else {
                    // Display unsolved text
                    clueText = clueText + currentItem.dText;

                    if (currentItem.cluesOn()) {
                        var clueArray = new Array();
                        for (var i = 0; i < currentItem.clues.length; i++) {
                            if (currentItem.clues[i].cDisplay) {
                                clueArray.push(currentItem.clues[i].cText);
                            }
                        }
                        clueText = clueText + CreateParenthetical(clueArray);
                    }

                }
            }

            if (clueClass == 0) { // Not yet solved
                displayText = displayText + "<td>";
            } else if (clueClass == 1) { // Solved through hard work (show as green)
                displayText = displayText + "<td style=\"background: #98FB98;\">";
            } else if (clueClass == 2) { // Solved through hints (show as red)
                displayText = displayText + "<td style=\"background: #CD5C5C; color: white;\">";
            }

            displayText = displayText + clueText + "</td>";
        }
        displayText = displayText + "</tr>";
    }
    displayText = displayText + "</tbody>";
    displayText = displayText + "</table>";

    //var full_text = "Clue(s):<br />" + displayText;
    document.getElementById("display_area").innerHTML = displayText;

    // Restore scroll position
    var oldTable = document.getElementById('clueTable');
    if (oldTable) {
        oldTable.scrollTop = scrollDist;
    }

    //alert ("Exit Update Display");
}

function UpdateCombo() {
    // Update the display for the player's current combo
    // The combo is the number of answers right in a row without taking a hint
    document.getElementById("Combo").innerHTML = "Combo: " + comboScore;
}

function UpdateRemainder(rightAnswers, totalAnswers) {
    // Update the display for the number of answers right out of the number of answers total
    document.getElementById("answers_remaining").innerHTML = rightAnswers + " of " + totalAnswers;
}