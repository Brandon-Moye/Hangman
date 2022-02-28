"use strict";
//refactoring edits from jeff

function removeClassName (idName, className) {
  document.getElementById(idName).classList.remove(className);
}

function addClassName (idName, className) {
  document.getElementById(idName).classList.add(className);
}

function doByElementId (idName) {
  document.getElementById(idName);
}

//
//-----------------------------------------------------------------------------------------------------------------------
//
let wordBank = {
  0: ["succession", "game of thrones", "rupauls drag race", "family guy"],
  1: ["wyoming", "yellowstone", "the smoky mountains", "new york city"],
  2: ["sushi", "coffee", "stouts", "hummus"],
  3: ["camping", "video games", "coding", "cooking"],
};

const categoriesArray = ["tvShows", "places", "foodAndDrinks", "hobbies"];
function getRandomCategoryAndWord(max) {
  return Math.floor(Math.random() * max);
}
let randomCategory = getRandomCategoryAndWord(4);
let randomWord = getRandomCategoryAndWord(4);

//THIS IS THE WORD THE USER IS TRYING TO GUESS
/* I am thinking of having a bank of words that let people know more 
about me and my interests, or just do like an animal list and go from there */
let Hangmanstring = wordBank[randomCategory][randomWord];
const array = [...Hangmanstring]; //this breaks the string up and even dedicates an array index to the space, should be able to count spaces

if (randomCategory === 0) {
  randomCategory = "tvShows";
} else if (randomCategory === 1) {
  randomCategory = "places";
} else if (randomCategory === 2) {
  randomCategory = "foodAndDrinks";
} else if (randomCategory === 3) {
  randomCategory = "hobbies";
}
document.getElementById("hint").innerHTML = `Hint: favorite ${randomCategory}`;
// doByElementId("hint").innerHTML = `Hint: favorite ${randomCategory}`;
//CREATING THE ARRAY VISIBLE TO THE USER BASED ON WHAT THE SECRET WORD IS
const ArrayVisibleToPlayer = [..."?".repeat(array.length)]; //displays a string with # as the filler

//boolean checking if we still have fillers in the string - code will run if true
let checkForBlanks = ArrayVisibleToPlayer.includes("?");
let incorrectGuessCount = 0; //initializing variables - how many wrong letters the player has guessed
let checkForCorrectGuess = 0; //initializing variables - used to edit wrong letters list and add to the limb count
let guessedLetters = []; //initializing variable

let incorrectLettersList = [];

function guessingLetters() {
  let guessAttempt = document.getElementById("letter").value;
  guessedLetters.push(guessAttempt); //pushes every guess into an array for code to reference in the event listener that is not refreshed
  return false;
}

let addedBlanks = document.getElementById("visibleCells");
for (let i = 0; i < ArrayVisibleToPlayer.length; i++) {
  let checkForSpaces = array[i].indexOf(" "); // returns 0 if true, -1 if false
  let blankForLetter = document.createElement("td");
  blankForLetter.id = "cell" + i;
  // let myColumnId = `"${myColumn.id}"`;
  blankForLetter.innerHTML = ArrayVisibleToPlayer[i];
  addedBlanks.appendChild(blankForLetter);
  if (checkForSpaces === 0) {
    ArrayVisibleToPlayer[i] = " ";
    // document.getElementById("cell" + i).classList.add("blank");
    addClassName(("cell" + i),"blank"); //this is a short version for the line above
  }

}

document.querySelector(".submit").addEventListener("click", function () {
  guessingLetters(); //calling the function above
  if (checkForBlanks === true) {
    let guess = guessedLetters[guessedLetters.length - 1]; //pulls the most recent guess from the guessedLetters array made above in the function
    checkForCorrectGuess = 0; //initializing variable
    //THIS FOR LOOP IS CHECKING THE ALL OF THE ELEMENTS OF THE ARRAY AGAINST THE INITIAL GUESS

    for (let i = 0; i < ArrayVisibleToPlayer.length; i++) {
      if (guess === array[i]) {
        checkForCorrectGuess++;
        ArrayVisibleToPlayer[i] = guess; //if the guess matches with the element in the array then it will be replaced w/the correct letter in the correct space
        addedBlanks.children[i].innerHTML = guess;
      }
    }

    if (checkForCorrectGuess === 0) {
      incorrectGuessCount++;
      console.log(`You have guessed ${incorrectGuessCount} wrong letters`);
      incorrectLettersList.unshift(guess); //adding the current guess value to the wrong letters list
      if (incorrectGuessCount === 1) {
        removeClassName("platform","hidden");
      } else if (incorrectGuessCount === 2) {
        removeClassName("post","hidden");
      } else if (incorrectGuessCount === 3) {
        removeClassName("rope","hidden");
      } else if (incorrectGuessCount === 4) {
        removeClassName("head", "hidden");
      } else if (incorrectGuessCount === 5) {
        removeClassName("body","hidden");
      } else if (incorrectGuessCount === 6) {
        removeClassName("leftArm","hidden");
      } else if (incorrectGuessCount === 7) {
        removeClassName("rightArm","hidden");
      } else if (incorrectGuessCount === 8) {
        removeClassName("leftLeg","hidden");
      } else if (incorrectGuessCount === 9) {
        removeClassName("rightLeg","hidden");
      } else if (incorrectGuessCount > 9) {
        removeClassName("reset","hidden");
        document.getElementById(
          "finalMessage"
        ).innerHTML = `Oh no! The correct word was ${Hangmanstring}. Try again!`;
        // document.getElementById("letter").classList.add("hidden");
        addClassName("letter","hidden");
        // document.getElementById("submit").classList.add("hidden");
        addClassName("submit","hidden");
        // document.getElementById("hangmanContainer").classList.add("gameLost");
        addClassName("hangmanContainer","gameLost");
      }
    }

    console.log(`You're incorrect guesses are: ${incorrectLettersList}`);
    console.log(incorrectLettersList);
    document.getElementById("wrongGuessContainer").innerHTML = incorrectLettersList;
    checkForBlanks = ArrayVisibleToPlayer.includes("?");
    // console.log(checkForBlanks); //used to stop the while loop when there are no more place holders present
    // console.log(ArrayVisibleToPlayer); //outputs the current/live version of the array with correct guessed letters
  }

  //THIS IS THE TEMPLATE CODE FOR WHAT WILL HAPPEN WHEN THE PLAYER WINS THE GAME
  if (checkForBlanks === false && incorrectGuessCount <= 9) {
    // console.log(`You guessed it! The word was ${Hangmanstring}`);
    document.getElementById(
      "finalMessage"
    ).innerHTML = `You guessed it! The answer is "${Hangmanstring}"`;
    removeClassName("reset","hidden");
    addClassName("letter","hidden");
    addClassName("submit","hidden");
    addClassName("hangmanContainer","gameWon");
  }
  //clearing the guess box after submit
  function clearGuess() {
    document.getElementById("letter").value = "";
  }
  clearGuess();
});

document.querySelector(".reset").addEventListener("click", function () {
  //need to write code to reset the game and pick a new word to try to solve
  location.reload(); //just reloading the page now
});

document.querySelector(".reload").addEventListener("click", function () {
  //need to write code to reset the game and pick a new word to try to solve
  location.reload(); //just reloading the page now
});

