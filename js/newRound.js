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
    var answerCount = 0;
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
            answerCount = answerCount + newDeck.iList.length;
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
    if (difficultyMode < 2) {
        NewHintByMode(0); // Easy and Medium get asterisks for free
    }
    if (difficultyMode < 1) {
        NewHint();  // Easy also gets a free hint
    }

    UpdateRemainder(0, answerCount);

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













