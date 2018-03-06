// Main clue object
function ClueObj(clueText) {
    this.cText = clueText.split("|")[0];
    this.cDisplay = false;
}

// Main item object
function ItemObj(iList) {
    this.aText = iList[0];
    this.dText = "?";
    this.solved = false;
    this.earned = false;
    this.clues = new Array();

    // Fill in clues
    this.clues = new Array();
    for (var i = 1; i < iList.length; i++) {
        var newClue = new ClueObj(iList[i]);
        this.clues.push(newClue);
    }

    // Check if any clues are turned on.
    this.cluesOn = function () {
        for (var j = 0; j < this.clues.length; j++) {
            if (this.clues[j].cDisplay) {
                return true;
            }
        }
        return false;
    };

    // Reset all the data
    this.resetData = function () {
        this.dText = "?";
        this.solved = false;
        for (var j = 0; j < this.clues.length; j++) {
            this.clues[j].cDisplay = false;
        }
    };
}

// Main deck object
function DeckObj(deck) {
    this.iList = new Array();
    this.solved = false;
    this.bookmark = -1;
    this.active = true;

    for (var i = 0; i < deck.length; i++) {
        if (i == 0) {
            // The first set is the labels for the list
            this.labels = new ItemObj(deck[i]);
        } else {
            // Each other set represents an item in the list
            this.iList.push(new ItemObj(deck[i]));
        }
    }

    // Shuffle the items in the deck randomly
    this.shuffleDeck = function () {
        var deckSize = this.iList.length;
        for (var j = 0; j < deckSize; j++) {
            var randnum = Math.floor(Math.random() * deckSize);
            var temp = this.iList[j];
            this.iList[j] = this.iList[randnum];
            this.iList[randnum] = temp;
        }
        this.bookmark = 0;
    };

    // Make sure the bookmark into the deck's items is value.
    // Shuffle the deck and reset the bookmark to the beginning if not.
    this.checkBookmark = function () {
        if (this.bookmark.value < 0 || this.bookmark.value >= this.iList.length) {
            this.shuffleDeck();
        }
    };

    // Get the next item in the deck according to the bookmark.
    this.getNextItem = function () {
        this.checkBookmark();

        var nextItem = this.iList[this.bookmark];
        this.bookmark++;

        nextItem.resetData();

        return nextItem;
    };
}