function CheckAnswer() {

    var textObj = document.getElementById("answer_input");
    var userText = textObj.value;

    //document.getElementById("demo").innerHTML = "Debug Msg: " + debug_text;
    var countRight = 0;
    var countTotal = 0;

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
                        answerArray[k].iList[j].earned = true;
                        answerArray[k].iList[j].dText = spellingVariants[0];

                        updateNeeded = true;
                        break;
                    }
                }
            }

            if (answerArray[k].iList[j].solved) {
                countRight++;
            }
        }

        countTotal = countTotal + answerArray[k].iList.length;
    }

    if (updateNeeded) {
        textObj.value = "";

        // Check whether the user has completed this quiz.
        CheckComplete();

        // Up the combo score
        comboScore++;
        UpdateCombo();

        // Update the # correct of # total
        UpdateRemainder(countRight, countTotal);

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

function SolveAll() {

    // Loop through the topics in this round
    for (var k = 0; k < answerArray.length; k++) {

        // Loop through the items in this topic and set them all to solved
        var missingItem = 0;
        for (var j = 0; j < answerArray[k].iList.length; j++) {
            var currentAnswer = answerArray[k].iList[j];
            currentAnswer.dText = answerArray[k].iList[j].aText.split("|")[0];
            if (!currentAnswer.solved) {
                currentAnswer.solved = true;
                currentAnswer.earned = false;
            }
        }
    }

    UpdateDisplay();
}