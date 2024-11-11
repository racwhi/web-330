"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Chapter case
      
      Eating Well in Season Retrieving Data from Local Storage
       Author: Rachel White
      Date: 11/10/2024   
      
      Filename: js09c.js
 */
//Eating well preference keys
let keys = [
  "name",
  "email",
  "phone",
  "address",
  "city",
  "state",
  "zip",
  "allergies",
  "frequency",
  "size",
];

for (let item of keys) {
  let newRow = document.createElement("tr");

  //display the storage key
  let keyCell = document.createElement("td");
  keyCell.textContent = item;
  newRow.appendChild(keyCell);

  //display the  key value
  let keyValue = document.createElement("td");
  keyValue.textContent = localStorage.getItem(item);
  newRow.appendChild(keyValue);

  //append each key=name pair as a table row
  document.getElementById("prefTable").appendChild(newRow);
}

//Remove eating well keys when remove preference button is clicked
document.getElementById("removePrefBtn").onclick = function () {
  for (let item of keys) {
    localStorage.removeItem(item);
  }
};
