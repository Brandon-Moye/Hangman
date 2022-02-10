# Hangman

This is a project in the works to have a functioning hangman game.

Currently it utilizes while/for loops and arrays indices.

2/9/2022 I have pretty much completed the majority of the game! I have a few small features and additional styling I would like to do before I call it finished
- Next Steps:
  - Add a reset button that lives on the main page in case a user gets a repeat word
  - continue styling the sheet and making iteractions/effects smoother  


2/8/2022
- Current features:
  - Blank boxes will autogenerate on the page after a random word has been selected from the wordBank object
  - Incorrect letters will populate in an incorrect letter section
  - hints are provided based on what the value's keys are to help the user
- Next steps:
  - create a hangman animation based on the number incorrect guesses
  - make it more ✨visually appealing✨

2/7/2022
Made progress with populating a webpage using the table element and adding columns based on the number of characters in the array. It needs to be connected to the rest of the code and change when the correct value is guessed like in the console.

2/6/2022
I decided to add to the guess list as the code is checking if the letter was in the word or not. I used the .unshift() method to add to the beginning of the list every time a player inputs a wrong answer.
- Current features: (all within the console)
  - Array of provided word is displayed using '#' as the blanks
  - Once a correct letter is input, the '#' will be replaced with it
  - There is a limb counter so every time a player guesses a wrong answer the code keeps track so I can implement a game       over code
  - Loop to reveal blanks before player starts guessing letters
  - There is a list of wrong guesses only generated so the player can keep track of what they have submitted
- Next step features:
  - Move the displayed output from the console onto the webpage with CSS and HTML

  - Develop a game over code block based on the number of wrong guesses (limb count)
  - Code input box to only allow for one letter at a time to be input, and no repeats to be input

2/5/2022
I am able to generate a list of guessed letters that will display for the player. Currently I am trying to determine how to generate a just list of guessed letters that are incorrect. I have tried loops, .splice(), .pop(), and .push(). I feel like I should get it to work with one of these combos but will need more time to experiment with the code.

2/4/2022
I began building this project focusing mainly on logic and most of it runs/ is displayed in the console.
My next steps will be building it using more HTML and CSS elements and have it functional on the page.
