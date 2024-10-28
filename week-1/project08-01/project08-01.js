"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Rachel White
      Date:  10/27/2024

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

// Constructor function for the timer
function Timer(min, sec) {
  this.minutes = min;
  this.seconds = sec;
  this.timeID = null;
}

// Method to run or pause the timer
Timer.prototype.runPause = function (timer, minBox, secBox) {
  if (timer.timeID) {
    window.clearInterval(timer.timeID);
    timer.timeID = null;
  } else {
    timer.timeID = window.setInterval(() => {
      countdown(timer, minBox, secBox);
    }, 1000);
  }
};

// Countdown function to update the timer
function countdown(timer, minBox, secBox) {
  if (timer.seconds > 0) {
    timer.seconds--;
  } else if (timer.minutes > 0) {
    timer.minutes--;
    timer.seconds = 59;
  } else {
    window.clearInterval(timer.timeID);
    timer.timeID = null;
  }

  minBox.value = timer.minutes;
  secBox.value = timer.seconds;
}

/*---------------Interface Code -----------------*/
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

// Create an instance of the timer
let myTimer = new Timer(Number(minBox.value) || 0, Number(secBox.value) || 0);

// Update timer on input change
minBox.onchange = function () {
  myTimer.minutes = Number(minBox.value);
};

secBox.onchange = function () {
  myTimer.seconds = Number(secBox.value);
};

// Add event handler for the run/pause button
runPauseTimer.onclick = function () {
  myTimer.runPause(myTimer, minBox, secBox);
};
