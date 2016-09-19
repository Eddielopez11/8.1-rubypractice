// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

document.addEventListener("DOMContentLoaded", function() {

  var header = document.querySelector("[data-js='main__header']");
  var paragraph = document.querySelector("[data-js='main__paragraph']");

  var headerLength = header.textContent.length;
  var pLength = paragraph.textContent.length;
  var lengthIs = "Length of text is: ";

  console.log(lengthIs + headerLength);
  console.log(lengthIs + pLength);
})
