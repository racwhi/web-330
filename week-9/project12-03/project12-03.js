"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Rachel White
      Date: 12/22/2024  

      Filename: project12-03.js
*/

$(document).ready(function () {
  $("article > h2").click(function () {
    // Declare variables
    var heading = $(this);
    var list = heading.next();
    var headingImage = heading.find("img");

    // Slide toggle the list
    list.slideToggle(500);

    // Change  image src
    var currentSrc = headingImage.attr("src");
    if (currentSrc === "plus.png") {
      headingImage.attr("src", "minus.png");
    } else {
      headingImage.attr("src", "plus.png");
    }
  });
});
