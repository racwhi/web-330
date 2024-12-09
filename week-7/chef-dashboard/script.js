/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Rachel White
  Date: 12/8/2024
  Filename: chefs.js
*/

"use strict";

// TODO: Define an array of chef objects
let chefs = [
  {
    name: "Peter Piper",
    specialty: "Italian cuisine",
    weakness: "Spicy foods",
    restaurantLocation: "Barnhill, London",
  },
  {
    name: "Julia Bistro",
    specialty: "American cuisine",
    weakness: "Baking",
    restaurantLocation: " Paris, France",
  },
  {
    name: " Sam Smith",
    specialty: "French cuisine",
    weakness: "Desserts",
    restaurantLocation: " Beverly Hills, California",
  },
];

// TODO: Define a function to retrieve the first chef's information
// This function should return a promise that resolves with the chef's information after a delay
function retrieveChef1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      /*To simulate a promise rejection, you can randomly reject promises in your retrieve 
      functions using Math.random() or you could replace one of the resolves with a rejection. J
      ust make sure you uncomment the resolve line and comment the reject line when 
      you want to rest fulfilled states.
       */
      if (Math.random() < 0.3) {
        reject(`Failed to retrieve data for Chef ${chefs[0].name}`);
      } else {
        resolve(chefs[0]);
      }
    }, 2000); // 2 seconds delay
  });
}

// TODO: Define a function to retrieve the second chef's information
// This function should return a promise that resolves with the chef's information after a delay

function retrieveChef2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) {
        reject(`Failed to retrieve data for Chef ${chefs[1].name}`);
      } else {
        resolve(chefs[1]);
      }
    }, 4000); // 4 seconds delay
  });
}

// TODO: Define a function to retrieve the third chef's information
// This function should return a promise that resolves with the chef's information after a delay

function retrieveChef3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) {
        reject(`Failed to retrieve data for Chef ${chefs[2].name}`);
      } else {
        resolve(chefs[2]);
      }
    }, 6000); // 6 seconds delay
  });
}

// TODO: Use Promise.allSettled to retrieve all chefs' information and update the webpage accordingly
Promise.allSettled([retrieveChef1(), retrieveChef2(), retrieveChef3()]).then(
  (results) => {
    results.forEach((result, index) => {
      const chefContainer = document.getElementById(`chef${index + 1}`);
      if (result.status === "fulfilled") {
        const chef = result.value;
        chefContainer.innerHTML = `
                    <h2>${chef.name}</h2>
                    <p><strong>Specialty:</strong> ${chef.specialty}</p>
                    <p><strong>Weakness:</strong> ${chef.weakness}</p>
                    <p><strong>Restaurant Location:</strong> ${chef.restaurantLocation}</p>
                `;
        console.log(`Chef Data Retrieved:`, chef); // chef data
      } else {
        chefContainer.innerHTML = `
                    <h2>Error fetching data</h2>
                    <p class="error">${result.reason}</p>
                `;
        console.log("An error occurred:", result.reason); // error reason
      }
    });
  }
);
