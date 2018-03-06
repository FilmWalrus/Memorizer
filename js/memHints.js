function NewHint() {
    NewHintByMode(-1);
}

function NewHintByMode(hintMode) {
    // Hint Modes
    // 0 = Letter-Ordered
    // 1 = Letter-Random
    // 2 = Clue-Ordered
    // 3 = Clue-Random

    var hintArray = new Array();
    if (hintMode >= 0) {
        // If the caller specified a hint mode just use that
        hintArray.push(hintMode);
    } else {
        // Otherwise build an array of all the active hint types
        if (document.getElementById("hint_letter_next").checked) {
            hintArray.push(0);
        }
        if (document.getElementById("hint_letter_random").checked) {
            hintArray.push(1);
        }
        if (document.getElementById("hint_clue_next").checked) {
            hintArray.push(2);
        }
        if (document.getElementById("hint_clue_random").checked) {
            hintArray.push(3);
        }
    }

    // Loop through the decks and provide a new hint for each
    for (var i = 0; i < answerArray.length; i++) {
        NewHintForDeck(answerArray[i], hintArray);
    }

    UpdateDisplay();

    // Reset the combo.
    comboScore = 0;
    UpdateCombo();

    ResetCursor();
}

function NewHintForDeck(answerDeck, hintArray){

    // Randomly sort the array of active hint types
    hintArray.sort(function (a, b) { return 0.5 - Math.random(); });

    var hintMode = -1;
    var newClueIndex = -1;

    // See what style of hint this deck will get
    for (var i = 0; i < hintArray.length; i++) {
        hintMode = hintArray[i];

        // Handle clue-type hint modes. Select which clue to reveal.
        if (hintMode == 2 || hintMode == 3) {
            var labelItem = answerDeck.labels;
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

            // If an as-yet unrevealed clue wasn't found, mark this hint style as invalid and try another
            if (newClueIndex < 0) {
                hintMode = -1;
            }
        }

        // If a valid hint style was found, exit early.
        if (hintMode >= 0) {
            break;
        }
    }

    // If no hint styles were valid, exit without a hint
    if (hintMode < 0) {
        return;
    }



    // Loop through the items in this deck.
    for (var j = 0; j < answerDeck.iList.length; j++) {

        var currentItem = answerDeck.iList[j];
        if (currentItem.solved) {
            continue;
        }

        // Handle letter-type hint modes. Select which letter to reveal.
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

            // If all letters have been revealed, mark this item solved.
            var allLettersRevealed = (currentItem.dText.search("[*]") < 0);
            if (allLettersRevealed) {
                currentItem.solved = true;
                currentItem.earned = false;
            }


        } else if (newClueIndex >= 0) {
            // Activate a new clue if the clue index was valid.
            currentItem.clues[newClueIndex].cDisplay = true;
        }
    }


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