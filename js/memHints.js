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
    // 6 = Chaos

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

        // Handle clue-type hint modes. Select which clue to reveal.
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

            // If random mode selected clue, but no clues are available, switch to letter
            if (newClueIndex < 0) {
                if (originalHintMode == 4) {
                    hintMode = 0;
                } else if (originalHintMode == 5) {
                    hintMode = 1;
                }
            }
        }


        // Loop through the items in this list.
        for (var j = 0; j < answerArray[i].iList.length; j++) {

            var currentItem = answerArray[i].iList[j];
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

    UpdateDisplay();

    // Reset the combo.
    comboScore = 0;
    UpdateCombo();

    ResetCursor();

    return bonusHintAvailable;
}