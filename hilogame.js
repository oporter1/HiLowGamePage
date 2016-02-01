var name= prompt("Please enter your name: ");

var randomNumber = Math.floor((Math.random() * 100) + 1);
var numTries = 1;

function processGuess() {
  // alert("random number here: " + randomNumber);
  var guess = parseInt(document.getElementById('guess').value);
  var headTitle = document.getElementById('headTitle');

  document.getElementById('guess').value=" ";
  if (guess < 1 || guess > 100) {
      headTitle.innerHTML = "Number must be between 1 and 100";
  } else if (guess > randomNumber) {
    headTitle.innerHTML = "Too high.";
  }
  else if (guess < randomNumber) {
    headTitle.innerHTML = "Too low.";
  } else if (guess === randomNumber) {
    headTitle.innerHTML = "You win "+ name + "!";
  } else if (isNaN(guess)) {
      headTitle.innerHTML = "Please only enter numbers";
  }

  var list = document.getElementById('guessList');
  var entry = document.createElement('li');
  entry.appendChild(document.createTextNode(guess));
  list.appendChild(entry);
  numTries++;
  if(numTries===8 && guess != randomNumber){
    headTitle.innerHTML = "Game Over.";
    process.disabled = true;
  }
}




// }



  // var randomNumber = 0;
  // var numberGuess = 0;
  // var numTries = 1;


  // do {
  //   lastGuess = parseInt(prompt("Enter guess:"))
  //
  //
  //   if (numberGuess < 1 || numberGuess > 100) {
  //       alert("too high" + numTries + " of 7")
  //   }
  //   else if (numberGuess > randomNumber) {
  //       alert("too high: " + numTries + " of 7");
  //   }
  //   else if (numberGuess < randomNumber){
  //       alert("too high" + numTries + " of 7");
  //   }
  //   else if (isNaN(numberGuess)) {
  //     alert("enter a number " + numTries + " of 7");
  //   }
  //   numTries++;
  // }
  // while (numberGuess != randomNumber && numTries < 7);
  // if (numberGuess === randomNumber) {
  //   alert("You guessed " + randomNumber + " correctly, " + userName + "!");
  // }
  // else {
  //   alert("You suck, " + userName + "!\nThe number you were looking for was " + randomNumber + "!");
  // }

// };
