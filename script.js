'use strict';

// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = 'Correct Number'

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 16;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 44;

// function clickMethod() {
//     console.log(document.querySelector('.guess').value);
// }

let secretNumber = Math.random();
let formattedSecretNumber = Math.trunc(secretNumber * 20) + 1;
console.log(formattedSecretNumber, typeof formattedSecretNumber);



let highestScore = 0;
let currentScore = 20;

document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.random();
    formattedSecretNumber = Math.trunc(secretNumber * 20) + 1;
    console.log(formattedSecretNumber)
    currentScore = 20;
    document.querySelector('.score').textContent = currentScore;
    document.querySelector('.highscore').textContent = highestScore;
    document.body.style.backgroundColor = '#222'
});





document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log('Score is : '+ currentScore)

  

  if (!guess || guess === 0) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess > formattedSecretNumber) {
        if (currentScore > 0) {
            currentScore = currentScore - 1;
            document.querySelector('.message').textContent = 'Too HIGH!';
            document.querySelector('.score').textContent = currentScore;
        } else {
            document.querySelector('.message').textContent = 'You lost the GAME!, click Again';
        }
        document.querySelector('.guess').value = '';
  } else if (guess < formattedSecretNumber) {
        if (currentScore > 0) {
                currentScore = currentScore - 1;
                currentScore = currentScore - 1;
                document.querySelector('.message').textContent = 'Too LOW!';
                document.querySelector('.score').textContent = currentScore;
        } else {
            document.querySelector('.check').disabled = true;
            document.querySelector('.message').textContent = 'You lost the GAME!, click Again';
        }
        // document.querySelector('.guess').value = '';
  } else if (guess === formattedSecretNumber) {
    highestScore = (currentScore > highestScore) ? currentScore : highestScore;
    document.querySelector('.message').textContent = 'CORRECT!';
    document.querySelector('.highscore').textContent = highestScore;
    document.body.style.backgroundColor = 'olive';
  }
//   document.querySelector('.guess').value = '';
});
