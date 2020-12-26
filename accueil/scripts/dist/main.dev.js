"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var loader = document.getElementById("loader");
  loader.classList.add("hide"); // document.addEventListener("click", () => {
  //   loader.classList.toggle("hide");
  // });

  /*--------------------------------------------------*/

  /*----------- HAMBURGER ----------------------------*/

  /*--------------------------------------------------*/

  var hamburger = document.getElementById("nav-hamburger");
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("open");
  });
});