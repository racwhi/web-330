"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Rachel White
      Date:   12/8/2024 

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function () {
  // Step 1: Retrieve values from postal code and country
  const codeValue = postalCode.value; //postalCode.value.trim(); // Get postal code and remove extra spaces
  const countryValue = country.value; // Get selected country

  // Step 2: Clear the place and region fields
  place.value = "";
  region.value = "";

  // Step 3: Construct the API URL based on the selected country and postal code
  const apiUrl = `https://api.zippopotam.us/${countryValue}/${codeValue}`;

  // Step 4: Use Fetch to access the API
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((json) => {
      // Step 5: Populate the place and region fields with the data retrieved
      if (json.places && json.places.length > 0) {
        // Check if places exists
        place.value = json.places[0]["place name"]; // e.g., "Springfield"
        region.value = json.places[0]["state abbreviation"]; // e.g., "MA"
      } else {
        console.error("No places found for this postal code.");
      }
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};
