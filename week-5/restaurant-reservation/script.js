/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Rachel White
  Date: 11/24/2024
  Filename: script.js
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  // Add your table objects here
  { tableNumber: 1, capacity: 2, isReserved: false },
  { tableNumber: 2, capacity: 4, isReserved: false },
  { tableNumber: 3, capacity: 2, isReserved: false },
  { tableNumber: 4, capacity: 6, isReserved: false }
];

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  // Add your code here
  const table = tables.find((t) => t.tableNumber === tableNumber);
  if (table) {
    if (!table.isReserved) {
      table.isReserved = true;
      setTimeout(() => time);
    } else {
      callback(`Table ${tableNumber} is already reserved.`);
    }
  } else {
    callback(`Table ${tableNumber} does not exist.`);
  }
}

// When the form is submitted, call the reserveTable function
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    // Add your code here
    e.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value;
    const tableNumber = parseInt(
      document.getElementById("tableNumber").value,
      10
    );
    const messageElement = document.getElementById("message");

    reserveTable(
      tableNumber,
      (message) => {
        messageElement.textContent = message;
      },
      1000
    ); // Set a 1-second delay for the reservation confirmation
  });
