/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author:Rachel White
  Date: 12/11/2024
  Filename: script.js
*/

"use strict";

const movies = [
  // Add your movie objects here
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    synopsis: "A thief who steals corporate secrets.",
  },
  {
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    year: 1999,
    synopsis: "A computer hacker who learns and lives in The Matrix.",
  },
  {
    title: "Jurassic Park",
    director: "J. A. Bayona, Colin Trevorrow, Steven Spielberg, Joe Johnston",
    year: 1993,
    synopsis: "A group of experts brought to an island with dinosaurs.",
  },
];

function fetchMovie(title) {
  // Implement this function
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const movie = movies.find(
        (movie) => movie.title.toLowerCase() === title.toLowerCase()
      );
      if (movie) {
        resolve(movie);
      } else {
        reject(new Error(`Movie titled "${title}" not found.`));//Error object
      }
    }, 1000); //  1 second  delay
  });
}

document
  .getElementById("movie-form")
  .addEventListener("submit", async (event) => {
    // Implement this function
    event.preventDefault();

    const titleInput = document.getElementById("title-input");
    const movieTitle = document.getElementById("movie-title");
    const movieDirector = document.getElementById("movie-director");
    const movieYear = document.getElementById("movie-year");
    const movieSynopsis = document.getElementById("movie-synopsis");
    const errorMessage = document.getElementById("error-message");

    //Reset previous results
    movieTitle.textContent = "";
    movieDirector.textContent = "";
    movieYear.textContent = "";
    movieSynopsis.textContent = "";
    errorMessage.textContent = "";

    try {
      const movie = await fetchMovie(titleInput.value);

      movieTitle.textContent = movie.title;
      movieDirector.textContent = `Director: ${movie.director}`;
      movieYear.textContent = `Release Year: ${movie.year}`;
      movieSynopsis.textContent = `Synopsis: ${movie.synopsis}`;
    } catch (error) {
      //accessing message property in catch block for error

      movieTitle.textContent = "";
      movieDirector.textContent = "";
      movieYear.textContent = "";
      movieSynopsis.textContent = "";
      errorMessage.textContent = error.message;
    }
  });


