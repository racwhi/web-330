/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Rachel White
  Date:11/3/2024
  Filename: script.js
*/

"use strict";

function createCharacter(name, gender, charClass) {
  // TODO: Implement this function

  return {
    getName: function () {
      return name;
    },
    getGender: function () {
      return gender;
    },
    getClass: function () {
      return charClass;
    },
  };
}

document.getElementById("generateHero").addEventListener("click", function (e) {
  e.preventDefault();

  // TODO: Get form values
  const name = document.getElementById("heroName").value;
  const gender = document.getElementById("heroGender").value;
  const charClass = document.getElementById("heroClass").value;

  // TODO: Create character
  const newCharacter = createCharacter(name, gender, charClass);

  // TODO: Display character information
  const characterOutput = document.getElementById("characterOutput");
  characterOutput.innerHTML = `
        <h2>Character Created</h2>
        <p>Name: ${newCharacter.getName()}</p>
        <p>Gender:${newCharacter.getGender()}</p>
        <p>Class: ${newCharacter.getClass()}</p>
    `;
});
