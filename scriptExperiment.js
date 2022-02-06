"use strict";

// -----------------------------------------------------------------------------------------------------------------
// THIS WILL STOP THE CODE ONCE THE FULL WORD HAS BEEN GUESSED AND DISPLAY THE NUMBER OF LIMBS PER EVERY CLICK
// WILL COUNT HOW MANY TIMES A LETTER IS GUESSED WRONGLY AND DISPLAY THE AMOUNT OF LIMBS DRAWN
// (EXPERIMENTAL VERSION)
// -----------------------------------------------------------------------------------------------------------------

// //THIS IS THE WORD THE USER IS TRYING TO GUESS
// let Hangmanstring = "Dog";
// const array = [...Hangmanstring]; //this breaks the string up and even dedicates an array index to the space, should be able to count spaces
// // console.log(array);

// //FINDING THE UNIQUE VALUES OF THE STRING -- I don't think I need this
// const uniqueSet = new Set(array); //converting to set eliminates repeated values in the string
// const numberOfUniqueChar = [...uniqueSet].length; //converting unique set back into array and determining its length
// //collecting the number of times a user should have to guess unique values (min amount of clicks)
// //once there are 10 unique values in the visibleArray then the game will be over!

// //CREATING THE ARRAY VISIBLE TO THE USER BASED ON WHAT THE SECRET WORD IS
// const visibleArray = [..."#".repeat(array.length)]; //displays a string with # as the filler
// console.log(visibleArray.length); //will show the length of the array the player is trying to guess
// console.log(visibleArray.includes("#")); //verifying it is blanked off for the programmer
// let checkForBlanks = visibleArray.includes("#"); //boolean checking if we still have fillers in the string
// let limbCount = 0; //initializing variables
// let checkForCorrect = 0; //initializing variables

// //WHILE THERE ARE # (BLANK PLACE HOLDERS) INSIDE THE ARRAY EXECUTE THIS FUNCTION
// while (checkForBlanks === true) {
//   let guess = window.prompt("Guess a letter"); // allows the user to input letters into the game
//   checkForCorrect = 0;
//   //THIS FOR LOOP IS CHECKING THE ALL OF THE ELEMENTS OF THE ARRAY AGAINST THE INITIAL GUESS
//   for (let i = 0; i < visibleArray.length; i++) {
//     console.log(guess);

//     if (guess === array[i]) {
//       checkForCorrect++;
//       visibleArray[i] = guess; //if the guess matches with the element in the array then it will be replaced w/the correct letter in the correct space
//     }
//   }
//   console.log(checkForCorrect);

//   //this is the logic to count the amount of times a user picks the wrong letter
//   if (checkForCorrect === 0) {
//     console.log(checkForCorrect);
//     limbCount++;
//     console.log(`You have lost ${limbCount} limbs`);
//   }
//   checkForBlanks = visibleArray.includes("#"); //used to stop the while loop when there are no more place holders present
//   console.log(visibleArray); //outputs the current array with correct guessed letters
//   // console.log(`You have added this many limbs to the hangman${limbCount++}`);
// }

// //THIS IS THE TEMPLATE CODE FOR WHAT WILL HAPPEN WHEN THE PLAYER WINS THE GAME
// if (visibleArray.includes("#") === false) {
//   console.log(`You guessed it! The word was ${Hangmanstring}`);
// }

//
//
// -----------------------------------------------------------------------------------------------------------------
// EXPERIMENTING WITH CHANGING THE PROMPT/INPUT FEATURE
// -----------------------------------------------------------------------------------------------------------------
//
//

//THIS IS THE WORD THE USER IS TRYING TO GUESS
let Hangmanstring = "hedgehog";
const array = [...Hangmanstring]; //this breaks the string up and even dedicates an array index to the space, should be able to count spaces
// console.log(array);

//FINDING THE UNIQUE VALUES OF THE STRING -- I don't think I need this
const uniqueSet = new Set(array); //converting to set eliminates repeated values in the string
const numberOfUniqueChar = [...uniqueSet].length; //converting unique set back into array and determining its length
//collecting the number of times a user should have to guess unique values (min amount of clicks)
//once there are 10 unique values in the visibleArray then the game will be over!

//CREATING THE ARRAY VISIBLE TO THE USER BASED ON WHAT THE SECRET WORD IS
const visibleArray = [..."#".repeat(array.length)]; //displays a string with # as the filler
console.log(visibleArray.length); //will show the length of the array the player is trying to guess
console.log(visibleArray.includes("#")); //verifying it is blanked off for the programmer
let checkForBlanks = visibleArray.includes("#"); //boolean checking if we still have fillers in the string
let limbCount = 0; //initializing variables
let checkForCorrect = 0; //initializing variables

let guessedLetters = [];

let UniqueList = new Set(guessedLetters);
let visibleList = [...UniqueList]; //this variable is what the guessed box will display
// console.log(visibleList);
let newVisibleList = [];

function guessingLetters() {
  let guessAttempt = document.getElementById("letter").value;
  guessedLetters.push(guessAttempt);
  // console.log(guessedLetters);
  return false;
}
// let newVisibleList = [];

document.querySelector(".submit").addEventListener("click", function () {
  guessingLetters();
  // console.log(guessedLetters.pop());
  //WHILE THERE ARE # (BLANK PLACE HOLDERS) INSIDE THE ARRAY EXECUTE THIS FUNCTION
  // had this as a while function and it would freak out the webpage big time, changed to if statement and that fixed the problem
  if (checkForBlanks === true) {
    // let guess = window.prompt("Guess a letter"); // allows the user to input letters into the game
    // let guess = document.querySelector("#letter").value;
    let guess = guessedLetters[guessedLetters.length - 1];
    checkForCorrect = 0;
    //THIS FOR LOOP IS CHECKING THE ALL OF THE ELEMENTS OF THE ARRAY AGAINST THE INITIAL GUESS
    for (let i = 0; i < visibleArray.length; i++) {
      console.log(guess);

      if (guess === array[i]) {
        checkForCorrect++;
        visibleArray[i] = guess; //if the guess matches with the element in the array then it will be replaced w/the correct letter in the correct space
      }
    }
    //the checkForCorrect parameter can be used to filter out correct letters in the final list
    // console.log(checkForCorrect);

    // let UniqueList = new Set(guessedLetters);
    // let visibleList = [...UniqueList]; //this variable is what the guessed box will display
    // console.log(visibleList);

    //this is the logic to count the amount of times a user picks the wrong letter
    // console.log(visibleList);
    if (checkForCorrect === 0) {
      // console.log(checkForCorrect);
      limbCount++;
      console.log(`You have guessed ${limbCount} wrong letters`);
      // console.log(guessedLetters);
      // console.log(guess);
      newVisibleList.unshift(guess);
      // console.log(newVisibleList);
      // I don't believe this code block will work ->
      // newVisibleList = visibleList.splice(1, 0, guess);
      // console.log(visibleList.splice(1, 0, guess));
      // <-
    }
    console.log(newVisibleList);

    // console.log(newVisibleList);

    checkForBlanks = visibleArray.includes("#"); //used to stop the while loop when there are no more place holders present
    console.log(visibleArray); //outputs the current array with correct guessed letters
    // console.log(`You have added this many limbs to the hangman${limbCount++}`);
  }

  //THIS IS THE TEMPLATE CODE FOR WHAT WILL HAPPEN WHEN THE PLAYER WINS THE GAME
  if (visibleArray.includes("#") === false) {
    console.log(`You guessed it! The word was ${Hangmanstring}`);
  }

  //trying to experiement with something here ->
  //this could be what I used to display the letters guessed
  //
  // let UniqueList = new Set(guessedLetters);
  // let visibleList = [...UniqueList]; //this variable is what the guessed box will display
  // // console.log(visibleList);
  // let newVisibleList = [];
  // //need to create a for loop that ran the array of guessed letters through the blanks to remove correct guessed letters
  // for (let i = 0; i < array.length; i++) {
  //   for (let j = 0; j < visibleList.length; j++) {
  //     if (array[i] === visibleList[j]) {
  //       newVisibleList = visibleList.splice(0, 0, visibleList[j]);
  //       console.log(visibleList.splice(visibleList[j], 1));
  //     }
  //   }
  // }
});
