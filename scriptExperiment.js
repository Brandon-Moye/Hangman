"use strict";

//
//
// -----------------------------------------------------------------------------------------------------------------
// EXPERIMENTING WITH CHANGING THE PROMPT/INPUT FEATURE
// -----------------------------------------------------------------------------------------------------------------
//
//

//THIS IS THE WORD THE USER IS TRYING TO GUESS
/* I am thinking of having a bank of words that let people know more 
about me and my interests, or just do like an animal list and go from there */
let Hangmanstring = "Roll Tide";
const array = [...Hangmanstring]; //this breaks the string up and even dedicates an array index to the space, should be able to count spaces

//CREATING THE ARRAY VISIBLE TO THE USER BASED ON WHAT THE SECRET WORD IS
const visibleArray = [..."#".repeat(array.length)]; //displays a string with # as the filler
// console.log(visibleArray.length); //will show the length of the array the player is trying to guess
// console.log(visibleArray.includes("#")); //verifying it is blanked off for the programmer

//boolean checking if we still have fillers in the string - code will run if true
let checkForBlanks = visibleArray.includes("#");
let limbCount = 0; //initializing variables - how many wrong letters the player has guessed
let checkForCorrect = 0; //initializing variables - used to edit wrong letters list and add to the limb count
let guessedLetters = []; //initializing variable

let newVisibleList = [];

function guessingLetters() {
  let guessAttempt = document.getElementById("letter").value;
  guessedLetters.push(guessAttempt); //pushes every guess into an array for code to reference in the event listener that is not refreshed
  return false;
}

// for loop to reveal any blanks in the hangman string
// I can get the logic to work but when it gets in a loop it fails
for (let i = 0; i < visibleArray.length; i++) {
  let checkForSpaces = array[i].indexOf(" "); // returns 0 if true, -1 if false
  // console.log(checkForSpaces);
  if (checkForSpaces === 0) {
    //this is what reads as true
    visibleArray[i] = " ";
    console.log(visibleArray);
  }
}

document.querySelector(".submit").addEventListener("click", function () {
  guessingLetters(); //calling the function above
  // had this as a while function and it would freak out the webpage big time, changed to if statement and that fixed the problem
  // this is just checking if the word has been guessed or not and will only run the code if there are blanks remaining
  if (checkForBlanks === true) {
    let guess = guessedLetters[guessedLetters.length - 1]; //pulls the most recent guess from the guessedLetters array made above in the function
    checkForCorrect = 0; //initializing variable
    //THIS FOR LOOP IS CHECKING THE ALL OF THE ELEMENTS OF THE ARRAY AGAINST THE INITIAL GUESS
    for (let i = 0; i < visibleArray.length; i++) {
      if (guess === array[i]) {
        checkForCorrect++;
        visibleArray[i] = guess; //if the guess matches with the element in the array then it will be replaced w/the correct letter in the correct space
      }
    }

    //this is the logic for when a wrong letter is guessed
    if (checkForCorrect === 0) {
      limbCount++;
      console.log(`You have guessed ${limbCount} wrong letters`);
      newVisibleList.unshift(guess); //adding the current guess value to the wrong letters list
    }
    console.log(`You're incorrect guesses are: ${newVisibleList}`);

    checkForBlanks = visibleArray.includes("#"); //used to stop the while loop when there are no more place holders present
    console.log(visibleArray); //outputs the current/live version of the array with correct guessed letters
  }

  //THIS IS THE TEMPLATE CODE FOR WHAT WILL HAPPEN WHEN THE PLAYER WINS THE GAME
  if (checkForBlanks === false) {
    console.log(`You guessed it! The word was ${Hangmanstring}`);
  }
});
