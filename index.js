const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const messages = document.getElementsByClassName('message');
const tooHighMessage = document.getElementById('too-high');
const tooLowMessage = document.getElementById('too-low');
const maxGuessesMessage = document.getElementById('max-guesses');
const numberOfGuessesMessage = document.getElementById('number-of-guesses');
const correctMessage = document.getElementById('correct');

let targetNumber;
let attempts = 0;
const maxNumberOfAttempts = 5;

// Returns a random number from min (inclusive) to max (exclusive)
// Usage:
// > getRandomNumber(1, 50)
// <- 32
// > getRandomNumber(1, 50)
// <- 11
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function checkGuess() {
  // Get value from guess input element
  const guess = parseInt(guessInput.value, 10);
  
  hideAllMessages();

  attempts = attempts + 1;
  const remainingAttempts = maxNumberOfAttempts - attempts;

  numberOfGuessesMessage.style.display = '';
  if (remainingAttempts === 1) {
    numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guess remaining.`;
  } else {
    numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining.`;
  }
  resetButton.style.display = true;

  if (guess < targetNumber) {
    tooLowMessage.style.display = '';
  } if (guess > targetNumber) {
    tooHighMessage.style.display = '';
  } else if (guess === targetNumber) {
    correctMessage.style.display = '';
    numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;
    submitButton.disabled = true;
    guessInput.disabled = true;
  }

  if (attempts === maxNumberOfAttempts) {
    maxGuessesMessage.style.display = '';
    submitButton.disabled = true;
    guessInput.disabled = true;
    guessInput.value = '';
  }
}

  function hideAllMessages() {
    for (let elementIndex = 0; elementIndex < messages.length; elementIndex++) {
      messages[elementIndex].style.display = 'none';
    }
  }

  function setup() {
    // Get random number
    targetNumber = getRandomNumber(1, 100);
    console.log(`target number: ${targetNumber}`);
  
    // Reset number of attempts
    attempts = 0;
  
    // Enable the input and submit button
    submitButton.disabeld = false;
    guessInput.disabled = false;
  
    hideAllMessages();
    // resetButton.style.display = 'none';
  }
  
  submitButton.addEventListener('click', checkGuess);
  resetButton.addEventListener('click', setup);
  
  setup();
  


//   if (guess === targetNumber) {
   
//     numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;

//     correctMessage.style.display = '';

//     submitButton.disabled = true;
//     guessInput.disabled = true;
//   }

//   if (guess !== targetNumber) {
    
//     } else {
//       tooLowMessage.style.display = '';
//     }

    

//     numberOfGuessesMessage.style.display = '';
//     numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;
//   }

  

  
//   resetButton.style.display = '';
// 



