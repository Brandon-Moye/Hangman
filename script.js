"use strict";

// ----------------------------------------------------------------------------------------------------------------------
// let string = "asian elephant";
// const array = [...string]; //this breaks the string up and even dedicates an array section to the space, should be able to count spaces
// console.log(string);
// console.log(array);

// //creating a for loop to check
// let guess = "a";
// for (let i = 0; i < array.length; i++) {
//   if (guess === array[i]) {
//     console.log("good!");
//   } else {
//     console.log("not there");
//   }
// }

// -----------------------------------------------------------------------------------------------------------------
// let string = "asian elephant";
// const array = [...string]; //this breaks the string up and even dedicates an array section to the space, should be able to count spaces
// const visibleArray = [..."#".repeat(array.length)];

// console.log(visibleArray);

// console.log(string);
// console.log(array);

// //create an automatic for loop that checks and reveals for spaces!

// //creating a for loop to check

// let guess = window.prompt("Guess a letter"); //this allows for a user to input letters to try at hangman
// for (let i = 0; i < array.length; i++) {
//   if (guess === array[i]) {
//     // console.log("good!");
//     visibleArray[i] === guess;
//     console.log((visibleArray[i] = guess));
//   } else {
//     // console.log("not there");
//     //display the guess they tried that did not work
//     console.log(guess);
//   }
// }
// console.log(visibleArray);

// -----------------------------------------------------------------------------------------------------------------
// //THIS IS THE WORD THE USER IS TRYING TO GUESS
// let string = "asian elephant";
// const array = [...string]; //this breaks the string up and even dedicates an array section to the space, should be able to count spaces

// //FINDING THE UNIQUE VALUES OF THE STRING
// const uniqueSet = new Set(array);
// const numberOfUniqueChar = [...uniqueSet].length; //converting unique set back into array and determining its length
// //collecting the number of times a user should have to guess unique values (min amount of clicks)
// //once there are 10 unique values in the visibleArray then the game will be over!

// //CREATING THE ARRAY VISIBLE TO THE USER BASED ON WHAT THE SECRET WORD IS
// const visibleArray = [..."#".repeat(array.length)];
// let count = 0;
// for (let k = 0; k < numberOfUniqueChar; k++) {
//   if (visibleArray[k] === "#") count++;
// }
// console.log(count);
// // console.log(visibleArray);

// // console.log(string);
// // console.log(array);

// //create an automatic for loop that checks and reveals for spaces!

// //UTILIZING USER INPUTS TO LOOK THROUGH THE WORDS AND REVEAL CORRECT LETTERS ONCE ENTERED
// //creating a for loop to check
// for (let j = 0; j < numberOfUniqueChar; j++) {
//   // let guess = window.prompt("Guess a letter"); //this allows for a user to input letters to try at hangman
//   let guess = "e";
//   for (let i = 0; i < array.length; i++) {
//     if (guess === array[i]) {
//       // console.log("good!");
//       visibleArray[i] = guess;
//       // console.log((visibleArray[i] = guess));
//     } else {
//       // console.log("not there");
//       //display the guess they tried that did not work
//       // console.log(guess);
//     }
//   }
//   console.log(visibleArray);
// }

// // -----------------------------------------------------------------------------------------------------------------
// //THIS IS THE WORD THE USER IS TRYING TO GUESS
// let string = "asian elephant";
// const array = [...string]; //this breaks the string up and even dedicates an array section to the space, should be able to count spaces

// //FINDING THE UNIQUE VALUES OF THE STRING
// const uniqueSet = new Set(array);
// const numberOfUniqueChar = [...uniqueSet].length; //converting unique set back into array and determining its length
// //collecting the number of times a user should have to guess unique values (min amount of clicks)
// //once there are 10 unique values in the visibleArray then the game will be over!

// //CREATING THE ARRAY VISIBLE TO THE USER BASED ON WHAT THE SECRET WORD IS
// const visibleArray = [..."#".repeat(array.length)];
// console.log(visibleArray.length);

// // console.log(string);
// // console.log(array);

// //create an automatic for loop that checks and reveals for spaces!

// //UTILIZING USER INPUTS TO LOOK THROUGH THE WORDS AND REVEAL CORRECT LETTERS ONCE ENTERED
// //creating a for loop to check

// for (let j = 0; j < numberOfUniqueChar; j++) {
//   let guess = window.prompt("Guess a letter"); //this allows for a user to input letters to try at hangman
//   // let guess = "e";
//   for (let i = 0; i < array.length; i++) {
//     if (guess === array[i]) {
//       // console.log("good!");
//       visibleArray[i] = guess;
//       let count = 0;
//       for (let k = 0; k < visibleArray.length; k++) {
//         if (visibleArray[k] === "#") {
//           count++;
//         }
//       }
//       console.log(count);

//       // console.log((visibleArray[i] = guess));
//     } else {
//       // console.log("not there");
//       //display the guess they tried that did not work
//       // console.log(guess);
//     }
//   }
//   console.log(visibleArray);
// }

// -----------------------------------------------------------------------------------------------------------------
// THIS WILL STOP THE CODE ONCE THE FULL WORD HAS BEEN GUESSED AND DISPLAY THE NUMBER OF LIMBS PER EVERY CLICK
// NEED TO DIFFERENTIATE BETWEEN ADDING LIMBS ONLY WHEN THE GUESSED LETTER DOES NOT APPEAR IN THE HANGMAN STRING
// -----------------------------------------------------------------------------------------------------------------

// //THIS IS THE WORD THE USER IS TRYING TO GUESS
// let Hangmanstring = "giraffe";
// const array = [...Hangmanstring]; //this breaks the string up and even dedicates an array index to the space, should be able to count spaces
// // console.log(array);

// //FINDING THE UNIQUE VALUES OF THE STRING
// const uniqueSet = new Set(array); //converting to set eliminates repeated values in the string
// const numberOfUniqueChar = [...uniqueSet].length; //converting unique set back into array and determining its length
// //collecting the number of times a user should have to guess unique values (min amount of clicks)
// //once there are 10 unique values in the visibleArray then the game will be over!

// //CREATING THE ARRAY VISIBLE TO THE USER BASED ON WHAT THE SECRET WORD IS
// const visibleArray = [..."#".repeat(array.length)];
// console.log(visibleArray.length); //will show the length of the array the player is trying to guess
// console.log(visibleArray.includes("#")); //verifying it is blanked off for the programmer
// let checkForBlanks = visibleArray.includes("#");
// let limbCount = 0;
// //WHILE THERE ARE # (BLANK PLACE HOLDERS) INSIDE THE ARRAY EXECUTE THIS FUNCTION
// while (checkForBlanks === true) {
//   let guess = window.prompt("Guess a letter"); // allows the user to input letters into the game
//   //THIS FOR LOOP IS CHECKING THE ALL OF THE ELEMENTS OF THE ARRAY AGAINST THE INITIAL GUESS
//   for (let i = 0; i < visibleArray.length; i++) {
//     if (guess === array[i]) {
//       // console.log("good!");
//       visibleArray[i] = guess; //if the guess matches with the element in the array then it will be replaced w/the correct letter in the correct space
//     } else {
//       // console.log("not there");
//       //display the guess they tried that did not work
//       // console.log(guess);
//     }
//   }
//   checkForBlanks = visibleArray.includes("#"); //used to stop the while loop when there are no more place holders present
//   console.log(visibleArray); //outputs the current array with correct guessed letters
//   console.log(`You have added this many limbs to the hangman${limbCount++}`);
// }

// //THIS IS THE TEMPLATE CODE FOR WHAT WILL HAPPEN WHEN THE PLAYER WINS THE GAME
// if (visibleArray.includes("#") === false) {
//   console.log(`You guessed it! The word was ${Hangmanstring}`);
// }

// -----------------------------------------------------------------------------------------------------------------
// THIS WILL STOP THE CODE ONCE THE FULL WORD HAS BEEN GUESSED AND DISPLAY THE NUMBER OF LIMBS PER EVERY CLICK
// NEED TO DIFFERENTIATE BETWEEN ADDING LIMBS ONLY WHEN THE GUESSED LETTER DOES NOT APPEAR IN THE HANGMAN STRING
// (EXPERIMENTAL VERSION)
// -----------------------------------------------------------------------------------------------------------------

//THIS IS THE WORD THE USER IS TRYING TO GUESS
let Hangmanstring = "Trixie Mattel";
const array = [...Hangmanstring]; //this breaks the string up and even dedicates an array index to the space, should be able to count spaces
// console.log(array);

//FINDING THE UNIQUE VALUES OF THE STRING
const uniqueSet = new Set(array); //converting to set eliminates repeated values in the string
const numberOfUniqueChar = [...uniqueSet].length; //converting unique set back into array and determining its length
//collecting the number of times a user should have to guess unique values (min amount of clicks)
//once there are 10 unique values in the visibleArray then the game will be over!

//CREATING THE ARRAY VISIBLE TO THE USER BASED ON WHAT THE SECRET WORD IS
const visibleArray = [..."#".repeat(array.length)]; //displays a string with # as the filler
console.log(visibleArray.length); //will show the length of the array the player is trying to guess
console.log(visibleArray.includes("#")); //verifying it is blanked off for the programmer
let checkForBlanks = visibleArray.includes("#"); //boolean checking if we still have fillers in the string
let limbCount = 0;
//WHILE THERE ARE # (BLANK PLACE HOLDERS) INSIDE THE ARRAY EXECUTE THIS FUNCTION
while (checkForBlanks === true) {
  let guess = window.prompt("Guess a letter"); // allows the user to input letters into the game
  let limbCount = 0;
  //THIS FOR LOOP IS CHECKING THE ALL OF THE ELEMENTS OF THE ARRAY AGAINST THE INITIAL GUESS
  for (let i = 0; i < visibleArray.length; i++) {
    console.log(guess);
    if (guess === array[i]) {
      // console.log("good!");
      visibleArray[i] = guess; //if the guess matches with the element in the array then it will be replaced w/the correct letter in the correct space
    } else {
      // limbCount++;
      // console.log(limbCount);
      // console.log("not there");
      //display the guess they tried that did not work
      // console.log(guess);
    }
  }
  checkForBlanks = visibleArray.includes("#"); //used to stop the while loop when there are no more place holders present
  console.log(visibleArray); //outputs the current array with correct guessed letters
  console.log(`You have added this many limbs to the hangman${limbCount++}`);
}

//THIS IS THE TEMPLATE CODE FOR WHAT WILL HAPPEN WHEN THE PLAYER WINS THE GAME
if (visibleArray.includes("#") === false) {
  console.log(`You guessed it! The word was ${Hangmanstring}`);
}
