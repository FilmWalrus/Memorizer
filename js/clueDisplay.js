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
    var tableHeight = y - mainHeadHeight - 50;
    var tableStyle = "<table id=\"clueTable\" style=\"";
    tableStyle = tableStyle + "display: block;";
    tableStyle = tableStyle + "max-height: " + tableHeight + "px;";
    tableStyle = tableStyle + "overflow-y:scroll"
    //tableStyle = tableStyle + "max-width: " + x + "px;";
    //tableStyle = tableStyle + "overflow-x:scroll"
    tableStyle = tableStyle + "\">";
    //document.getElementById("demo").innerHTML = "Debug Msg: " + mainHeadHeight;

    var displayText = tableStyle;




    ////////////////////////
    // Display the labels //
    ////////////////////////
    displayText = displayText + "<thead>";
    displayText = displayText + "<tr>";
    for (var j = 0; j < answerArray.length; j++) {
        // Topic label
        displayText = displayText + "<td>";

        var labelItem = answerArray[j].labels;
        //document.getElementById("demo").innerHTML = "Debug Msg: " + debug_text;
        displayText = displayText + labelItem.aText.fontcolor("red");


        // Clue labels
        if (labelItem.cluesOn()) {
            var clueArray = new Array();
            for (var i = 0; i < labelItem.clues.length; i++) {
                if (labelItem.clues[i].cDisplay) {
                    clueArray.push(labelItem.clues[i].cText);
                }
            }
            displayText = displayText + CreateParenthetical(clueArray).fontcolor("red");
        }

        displayText = displayText + "</td>";
    }
    displayText = displayText + "</tr>";
    displayText = displayText + "</thead>";

    ///////////////////////
    // Display the clues //
    ///////////////////////



    // Loop through the rows (items in categories)
    displayText = displayText + "<tbody>";
    for (var k = 0; k < longest_category; k++) {
        displayText = displayText + "<tr>";

        // Loop through the columns (categories)
        for (var j = 0; j < answerArray.length; j++) {

            displayText = displayText + "<td>";

            if (k < answerArray[j].iList.length) {

                var currentItem = answerArray[j].iList[k];

                if (currentItem.solved) {
                    // Display solved text
                    displayText = displayText + currentItem.dText.fontcolor("green");
                } else {
                    // Display unsolved text
                    displayText = displayText + currentItem.dText;

                    if (currentItem.cluesOn()) {
                        var clueArray = new Array();
                        for (var i = 0; i < currentItem.clues.length; i++) {
                            if (currentItem.clues[i].cDisplay) {
                                clueArray.push(currentItem.clues[i].cText);
                            }
                        }
                        displayText = displayText + CreateParenthetical(clueArray);
                    }

                }
            }

            displayText = displayText + "</td>";
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