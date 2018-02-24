//document.getElementById("demo").innerHTML = "Debug Msg: " + showLetters;

function NewRound() {
    NewRoundReroll(true);
}

var newRoundIndexArray;

function NewRoundReroll(reroll) {

    // Save the current settings
    saveSettings();

    answerArray.length = 0; // Reset answer array

    // Get the selected category
    var topicDropdown = document.getElementById("topic_dropdown");
    if (topicDropdown.selectedIndex < 0) {
        return;
    }
    var topicIndex = topicDropdown.options[topicDropdown.selectedIndex].value;

    // Get the letter to start with if any
    var letterTextbox = document.getElementById("letter_option");
    var letterInput = letterTextbox.value;
    var letterChoice = "";
    var useLetter = false;
    if (letterInput.length > 0) {
        useLetter = true;
        letterChoice = letterInput.charAt(0).toLocaleLowerCase();
    }

    // Get the card mode (1, several, all, or multiple sets of cards)
    var countDropdown = document.getElementById("count_dropdown");
    var countMode = countDropdown.options[countDropdown.selectedIndex].value;

    // Setup which categories we will draw answers from
    var topicCount = 1;
    
    if (countMode >= 0) {
        // Use only cards in the selected category
        if (topicIndex < 0) {
            return;
        }
        newRoundIndexArray = new Array();
        newRoundIndexArray[0] = topicIndex;
    } else if (countMode < 0) {
        // Use cards from multiple random categories
        topicCount = -countMode;
        if (reroll || !newRoundIndexArray) { // || newRoundIndexArray.length != topicCount
            newRoundIndexArray = getRandomizedIndexArray(deckArray.length);
        }
    }



    // Loop through topics in this round
    for (i = 0; i < newRoundIndexArray.length; i++) {
        var currentTopic = newRoundIndexArray[i];

        // Reset data
        var currentDeck = deckArray[currentTopic];
        currentDeck.solved = false;

        // If this topic has been toggled off, don't include it.
        if (!currentDeck.active) {
            continue;
        }

        // Shuffle the deck
        currentDeck.shuffleDeck();

        // Get the number of cards we will include from this category
        var cardCount = 1;
        if (countMode <= 0) {
            // All the cards in this category
            cardCount = currentDeck.iList.length;
        } else {
            // Only some of the cards in this category (based on the mode)
            cardCount = countMode;
        }

        var newDeck = new DeckObj(new Array([[]]));
        newDeck.labels = currentDeck.labels;
        newDeck.labels.resetData();

        // Loop through items in this category
        for (var j = 0; j < currentDeck.iList.length; j++) {
            var currentAnswer = currentDeck.getNextItem();

            // Get the default text of the current item
            var answerText = currentAnswer.aText.split("|")[0];

            var addAnswer = false;
            if (useLetter) {
                // Only include answers that start with the letter_choice
                var firstLetter = GetFirstLetter(answerText);
                if (letterChoice.localeCompare(firstLetter) == 0) {
                    addAnswer = true;
                }
            } else {
                // Include all answers
                addAnswer = true;
            }

            if (addAnswer) {
                newDeck.iList.push(currentAnswer);
            }

            // Exit early once we've hit the required number
            if (newDeck.iList.length == cardCount) {
                break;
            }
        }

        // Only add this new answer deck if there was at least one item added to it
        if (newDeck.iList.length > 0) {
            answerArray.push(newDeck);
        }

        // If we've added the correct number of categories, we can quit.
        if (answerArray.length == topicCount) {
            break;
        }
    }


    //document.getElementById("demo").innerHTML = "Debug Msg: " + debug_text;

    // Based on the difficulty mode, provide free hints.
    var difficultyDropdown = document.getElementById("difficulty_dropdown");
    var difficultyMode = difficultyDropdown.options[difficultyDropdown.selectedIndex].value;
    var bonusHintAvailable = true;
    if (difficultyMode < 2) {
        bonusHintAvailable = NewHintByMode(0); // Easy and Medium get asterisks for free
    }
    if (difficultyMode < 1 && bonusHintAvailable) {
        NewHint();  // Easy also gets a free hint, unless it they already got a built-in one.
    }


    UpdateDisplay();

    ResetCursor();
}

function TopicChange() {

    var topicDropdown = document.getElementById("topic_dropdown");

    // Get the count mode (1, several, all, or multiple sets of cards)
    var countDropdown = document.getElementById("count_dropdown");
    var countMode = countDropdown.options[countDropdown.selectedIndex].value;
    var toggleTopic;
    if (countMode >= 0) {
        // Start a new round using the selected topic, if the count mode shows they are working on a single topic.
        toggleTopic = false;

    } else {
        // Otherwise, the user is working with multiple topics, so toggle the selected one.
        toggleTopic = true;

        var topicIndex = topicDropdown.options[topicDropdown.selectedIndex].value;
        if (topicIndex >= 0) {
            deckArray[topicIndex].active = !deckArray[topicIndex].active;

            saveTopicPreference(topicIndex);
        }
    }

    // Color code topics (all white if in a single topic, green/red if multiple topics)
    ColorCodeTopics(toggleTopic);

    if (toggleTopic) {
        topicDropdown.selectedIndex = 0;
    }

    NewRoundReroll(false);
}

function CountChange() {
    var countDropdown = document.getElementById("count_dropdown");
    var countMode = countDropdown.options[countDropdown.selectedIndex].value;
    if (countMode < 0) {
        var topicDropdown = document.getElementById("topic_dropdown");
        topicDropdown.selectedIndex = 0;
    }

    TopicChange();
}




function UpdateDisplay() {

    // Figure out the longest category to dimension the hint table
    var longest_category = 0;
    for (var i = 0; i < answerArray.length; i++) {
        if (answerArray[i].iList.length > longest_category) {
            longest_category = answerArray[i].iList.length;
        }
    }

    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight || e.clientHeight || g.clientHeight;
    var mainHeadHeight = document.getElementById('mainSettings').offsetHeight;
    var tableHeight = y - mainHeadHeight - 50;
    var tableStyle = "<table style=\"";
    tableStyle = tableStyle + "display: block;";
    tableStyle = tableStyle + "max-height: " + tableHeight + "px;";
    //tableStyle = tableStyle + "max-width: " + x + "px;";
    tableStyle = tableStyle + "overflow-y:scroll"
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

    //alert ("Exit Update Display");
}



function CheckAnswer() {

    var textObj = document.getElementById("answer_input");
    var userText = textObj.value;

    //document.getElementById("demo").innerHTML = "Debug Msg: " + debug_text;

    var updateNeeded = false;
    for (var k = 0; k < answerArray.length; k++) {
        for (var j = 0; j < answerArray[k].iList.length; j++) {

            // Check to see if this answer hasn't yet been guessed
            if (!answerArray[k].iList[j].solved && !answerArray[k].iList[j].isLabel) {

                var spellingVariants = answerArray[k].iList[j].aText.split("|");

                // Loop through the spelling variants
                for (var i = 0; i < spellingVariants.length; i++) {

                    var currentAnswer = spellingVariants[i];

                    if (CompareTexts(userText, currentAnswer)) {
                        // Correct answer entered
                        answerArray[k].iList[j].solved = true;
                        answerArray[k].iList[j].dText = spellingVariants[0];

                        updateNeeded = true;
                        break;
                    }
                }
            }
        }
    }

    if (updateNeeded) {
        textObj.value = "";

        // Check whether the user has completed this quiz.
        CheckComplete();

        // Up the combo score
        comboScore++;
        UpdateCombo();

        // Update the display
        UpdateDisplay();
    }
}




function CheckComplete() {

    var missingTopic = 0;

    // Loop through the topics in this round to see if they are all complete
    for (var k = 0; k < answerArray.length; k++) {

        // Loop through the items in this topic to see if they are all complete
        var missingItem = 0;
        for (var j = 0; j < answerArray[k].iList.length; j++) {
            if (!answerArray[k].iList[j].solved) {
                missingItem++;
            }
        }

        if (missingItem == 0) {
            // Mark this topic as complete
            answerArray[k].solved = true;
        } else {
            missingTopic++;
        }
    }

    // If all answers are correct, generate new questions
    if (missingTopic == 0) {
        //NewRound();
    }
}

function UpdateCombo() {
    document.getElementById("Combo").innerHTML = "Combo: " + comboScore;
}

