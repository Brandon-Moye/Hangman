"use strict";

let wordBank = {
  0: ["succession", "game of thrones", "rupauls drag race", "family guy"],
  1: ["wyoming", "yellowstone", "the great smoky sountains", "new york city"],
  2: ["sushi", "coffee", "stouts", "hummus"],
  3: ["camping", "video games", "coding", "cooking"],
};

const categoriesArray = ["tvShows", "places", "foodAndDrinks", "hobbies"];
function getRandomKeyAndValue(max) {
  return Math.floor(Math.random() * max);
}
let randomKey = getRandomKeyAndValue(4);
let randomValue = getRandomKeyAndValue(4);

//THIS IS THE WORD THE USER IS TRYING TO GUESS
/* I am thinking of having a bank of words that let people know more 
about me and my interests, or just do like an animal list and go from there */
let Hangmanstring = wordBank[randomKey][randomValue];
const array = [...Hangmanstring]; //this breaks the string up and even dedicates an array index to the space, should be able to count spaces

if (randomKey === 0) {
  randomKey = "tvShows";
} else if (randomKey === 1) {
  randomKey = "places";
} else if (randomKey === 2) {
  randomKey = "foodAndDrinks";
} else if (randomKey === 3) {
  randomKey = "hobbies";
}
document.getElementById("hint").innerHTML = `Hint: favorite ${randomKey}`;
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
let addedBlanks = document.getElementById("visibleCells");
for (let i = 0; i < visibleArray.length; i++) {
  let myColumn = document.createElement("td");
  myColumn.id = "cell" + i;
  let myColumnId = `"${myColumn.id}"`;
  console.log(myColumnId);
  console.log(array[i]);
  // if (array[i] === String) {
  // document.getElementById(myColumnId).value = "#";
  //
  //
  //
  //this works! will need to connect it throughout the rest of the code
  myColumn.innerHTML = visibleArray[i];
  // }
  //maybe try pushing to new array?
  addedBlanks.appendChild(myColumn);
  //
  //
  //
}

// this does work for somereason -->
// document.getElementById("cell0").innerHTML = array[2];
// <--

// RANDOM WORD BANK GENERATOR

// console.log(categoriesArray[0]);

// console.log(randomKey, randomValue);

// console.log(5);
// console.log(randomKey, randomValue);
// console.log(wordBank.randomKey[randomValue]);
// expected output: 0, 1 or 2

//this is a way to call things in the object

// console.log(wordBank[0]["tvShows"][0]);

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
        addedBlanks.children[i].innerHTML = guess;
        // visibleCells.cells[i].innerHTML = guess;
      }
    }

    //this is the logic for when a wrong letter is guessed
    if (checkForCorrect === 0) {
      limbCount++;
      console.log(`You have guessed ${limbCount} wrong letters`);
      newVisibleList.unshift(guess); //adding the current guess value to the wrong letters list
    }

    console.log(`You're incorrect guesses are: ${newVisibleList}`);
    console.log(newVisibleList);
    document.getElementById("wrongGuessContainer").innerHTML = newVisibleList;

    checkForBlanks = visibleArray.includes("#"); //used to stop the while loop when there are no more place holders present
    console.log(visibleArray); //outputs the current/live version of the array with correct guessed letters
  }

  //THIS IS THE TEMPLATE CODE FOR WHAT WILL HAPPEN WHEN THE PLAYER WINS THE GAME
  if (checkForBlanks === false) {
    console.log(`You guessed it! The word was ${Hangmanstring}`);
    document.getElementById(
      "finalMessage"
    ).innerHTML = `You guessed it! The answer is ${Hangmanstring}`;
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
