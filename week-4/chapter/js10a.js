"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Chapter case

    Oak Top House
     Author: Rachel White
     Date: 11/17/2024

    Filename: js10a.js
*/

window.addEventListener("load", setupRoom);

// Perform setup tasks when the page first loads
function setupRoom() {
  // Page objects
  let room = document.getElementById("room"); // banquet hall
  let storage = document.getElementById("storage"); // storage room
  let roomTables = document.querySelectorAll("#room > div.table"); // Tables in the banquet hall
  let storageTables = storage.querySelectorAll("div.table"); // Tables in the storage room
  let zIndexCounter = 0; // Count the highest z-Index value

  // Function to calculate available seats in the room layout
  function countSeats() {
    let guests = 0;
    let seatCount = document.getElementById("seatCount");
    let tablesToCount = document.querySelectorAll("#room > div.table");
    for (let items of tablesToCount) {
      guests += parseInt(items.textContent) || 0; // Handle NaN gracefully
    }
    seatCount.textContent = guests;
  }

  // Add tables from storage to the banquet hall
  for (let item of storageTables) {
    item.onclick = function () {
      let storageCopy = item.cloneNode(true);
      room.appendChild(storageCopy);
      zIndexCounter++;
      storageCopy.style.zIndex = zIndexCounter;
      countSeats();
      storageCopy.addEventListener("pointerdown", grabTable); // Attach event listener
    };
  }
}

// Grab a table from the banquet hall to begin drag and drop
let startingX,
  startingY,
  tableX,
  tableY,
  zIndexCounter = 0; // Declare here to be globally accessible

function grabTable(e) {
  if (e.shiftKey) {
    //remove the table from the room
    e.target.parentElement.removeChild(e.target);
    countSeats();
  } else {
    startingX = e.clientX;
    startingY = e.clientY;
    e.target.style.touchAction = "none"; // Prevent default
    zIndexCounter++;
    e.target.style.zIndex = zIndexCounter; // Set zIndex to current counter
    tableX = e.target.offsetLeft;
    tableY = e.target.offsetTop;

    e.target.addEventListener("pointermove", moveTable);
    e.target.addEventListener("pointerup", dropTable);
  }
}

// Move the table along with the pointer
function moveTable(e) {
  let currentX = e.clientX;
  let currentY = e.clientY;
  let deltaX = currentX - startingX;
  let deltaY = currentY - startingY;

  // Calculate the tables new position
  e.target.style.left = tableX + deltaX + "px";
  e.target.style.top = tableY + deltaY + "px";
}

function dropTable(e) {
  e.target.removeEventListener("pointermove", moveTable);
  e.target.removeEventListener("pointerup", dropTable);
}
