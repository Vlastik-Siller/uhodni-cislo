'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Enter Your Guess...';
// document.querySelector('.guess').value = 0;

let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (str) {
  document.querySelector('.message').textContent = str;
};

document.querySelector('.again').addEventListener('click', function () {
  // window.location.reload();
  score = 20;
  secret = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing ...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('Please enter some number ...');
  } else if (guess === secret) {
    displayMessage('YAAAY! You got the secret!');
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.number').textContent = secret;
    document.querySelector('body').style.backgroundColor = '#59b200';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secret) {
    if (score > 1) {
      displayMessage(
        guess > secret ? '↓ .. Secret is LOWER' : '↑ .. Secret is HIGHER'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(':( sorry U loose the game :(');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#c5101b';
    }
  }
});
