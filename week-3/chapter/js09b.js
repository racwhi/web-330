"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Chapter case
      
      Eating Well in Season 
      Author: Rachel White
      Date: 11/10/2024   
      
      Filename: js09b.js
 */

//Retrieve the text of the query string
let qString = location.search.slice(1);

//Replace the encoded characters in the query string
qString = qString.replace(/\+/g, " ");
qString = decodeURIComponent(qString);

//console.log(qString);

//Split the field=names pairs into separate array items
let formData = qString.split(/&/g);

for (let items of formData) {
  //Extract the field names and values
  let fieldValuePair = items.split(/=/);
  let fieldName = fieldValuePair[0];
  let fieldValue = fieldValuePair[1];

  //Create a label containing the field name
  let fieldLabel = document.createElement("label");
  fieldLabel.textContent = fieldName;
  document.getElementById("contactInfo").appendChild(fieldLabel);

  //Create a disabled input box with the field value
  let inputBox = document.createElement("input");
  inputBox.id = fieldName;
  inputBox.name = fieldName;
  inputBox.value = fieldValue;
  inputBox.disabled = true;
  document.getElementById("contactInfo").appendChild(inputBox);
}

//Store data to local storage when the user signs up
document.getElementById("signupBtn").onclick = function () {
  //data fields to be saved to local storage
  let formsFields = document.querySelectorAll(
    "#contactInfo input, input[type=radio], textarea"
  );

  //write each field name and value to local storage
  for (let fields of formsFields) {
    localStorage.setItem(fields.name, fields.value);
  }
  console.log(localStorage);
};
