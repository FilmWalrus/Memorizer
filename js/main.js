//document.getElementById("demo").innerHTML = "Debug Msg: " + showLetters;

function NewRound() {
    NewRoundReroll(true);
}

var newRoundIndexArray;

function NewRoundReroll(reroll) {

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
        if (reroll || !newRoundIndexArray || newRoundIndexArray.length != topicCount) {
            newRoundIndexArray = getRandomizedIndexArray(deckArray.length);
        }
    }



    // Loop through topics in this round
    for (i = 0; i < deckArray.length; i++) {
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

    saveSettings();

    TopicChange();
}



function BleepOutAnswer(displayText, answerText, showLetters) {

    if (showLetters > 0 && displayText.charAt(0).localeCompare("*") == 0) {
        // Check to see if we should also show bonus letters (The, An, A)
        showLetters = parseInt(showLetters) + GetFreeLetters(answerText);
    }

    var newText = "";
    var lettersRevealed = 0;
    for (var k = 0; k < answerText.length; k++) {
        var answerChar = answerText.charAt(k);
        var displayChar = displayText.charAt(k);
        if (!IsAlphaNumeric(answerChar)) {
            // Always display non-alphanumeric as themselves
            newText = newText + answerChar;
        } else if (displayChar.localeCompare("*") == 0 && lettersRevealed < showLetters) {
            // If it is a bleeped letter, reveal it if within the hint system
            newText = newText + answerChar;
            lettersRevealed++;
        } else {
            // Otherwise, bleep it out
            if (displayText.search("[?]") == 0) {
                newText = newText + "*";
            } else {
                newText = newText + displayText.charAt(k);
            }
        }
    }

    return newText;
}

function NewHint() {
    // Get the hint mode
    var hintDropdown = document.getElementById("hint_dropdown");
    var hintMode = hintDropdown.options[hintDropdown.selectedIndex].value;

    NewHintByMode(hintMode);
}

function NewHintByMode(hintMode) {
    // Hint Modes
    // 0 = Letter-Ordered
    // 1 = Letter-Random
    // 2 = Clue-Ordered
    // 3 = Clue-Random
    // 4 = Either-Ordered
    // 5 = Either-Random

    var originalHintMode = hintMode;
    var bonusHintAvailable = true;

    for (var i = 0; i < answerArray.length; i++) {

        if (originalHintMode == 4) {
            // Hint mode = Either-Ordered
            if (Math.random() < 0.5) {
                hintMode = 0;
            } else {
                hintMode = 2;
            }
        } else if (originalHintMode == 5) {
            // Hint mode = Either-Random
            if (Math.random() < 0.5) {
                hintMode = 1;
            } else {
                hintMode = 3;
            }
        }

        // Handle clue-type hint modes. Select which clue to show.
        var newClueIndex = -1;
        if (hintMode == 2 || hintMode == 3) {
            var labelItem = answerArray[i].labels;
            var indexArray = getRandomizedIndexArray(labelItem.clues.length);
            for (var k = 0; k < labelItem.clues.length; k++) {
                var clueIndex = k; // Hint mode = Next Clue
                if (hintMode == 3) {
                    // Hint mode = Random Clue
                    clueIndex = indexArray[k];
                }
                if (!labelItem.clues[clueIndex].cDisplay) {
                    newClueIndex = clueIndex;
                    labelItem.clues[newClueIndex].cDisplay = true;
                    break;
                }
            }
        }



        // Loop through the items in this list.
        for (var j = 0; j < answerArray[i].iList.length; j++) {

            var currentItem = answerArray[i].iList[j];

            if (hintMode == 0 || hintMode == 1) {
                var firstLetterHint = (currentItem.dText.search("[?]") == 0);

                if (firstLetterHint || hintMode == 0) {
                    // Hint mode = Ordered Letter
                    var answerText = currentItem.aText.split("|")[0];
                    currentItem.dText = BleepOutAnswer(currentItem.dText, answerText, 1);

                    if (currentItem.dText.search("[*]") == 0) {
                        var letterTextbox = document.getElementById("letter_option");
                        var letterInput = letterTextbox.value;
                        if (letterInput.length > 0) {
                            // Reveal the 1st letter if it is already known
                            currentItem.dText = BleepOutAnswer(currentItem.dText, answerText, 1);
                            bonusHintAvailable = false;
                        }
                    }
                } else if (hintMode == 1) {
                    // Hint mode = Random Letter
                    var indexArray = getRandomizedIndexArray(currentItem.dText.length);
                    for (var k = 0; k < currentItem.dText.length; k++) {
                        var charIndex = indexArray[k];
                        var oldChar = currentItem.dText.charAt(charIndex);
                        if (oldChar.localeCompare("*") == 0) {
                            var newText = "";
                            for (var m = 0; m < currentItem.dText.length; m++) {
                                if (m == charIndex) {
                                    newText = newText + currentItem.aText.charAt(m);
                                } else {
                                    newText = newText + currentItem.dText.charAt(m);
                                }
                            }
                            currentItem.dText = newText;
                            break;
                        }
                    }
                }


            } else if (newClueIndex >= 0) {
                // Activate a new clue if the clue index was valid.
                currentItem.clues[newClueIndex].cDisplay = true;
            }
        }
    }

    UpdateDisplay();

    // Reset the combo.
    comboScore = 0;
    UpdateCombo();

    ResetCursor();

    return bonusHintAvailable;
}



function UpdateDisplay() {

    // Figure out the longest category to dimension the hint table
    var longest_category = 0;
    for (var i = 0; i < answerArray.length; i++) {
        if (answerArray[i].iList.length > longest_category) {
            longest_category = answerArray[i].iList.length;
        }
    }

    var displayText = "<table>";

    ////////////////////////
    // Display the labels //
    ////////////////////////
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

    ///////////////////////
    // Display the clues //
    ///////////////////////

    // Loop through the rows (items in categories)
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

