"use strict";

var _PixelArt = require("./PixelArt.js");

document.addEventListener("DOMContentLoaded", function () {
  var loader = document.getElementById("loader");
  loader.classList.add("hide");
  /*--------------------------------------------------*/

  /*----------- HAMBURGER ----------------------------*/

  /*--------------------------------------------------*/

  var hamburger = document.getElementById("nav-hamburger");
  var menu = document.getElementById("nav-menu");
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("open");
    menu.classList.toggle("nav__menu__show");
  });
  /*---------------------------------------------------*/

  /*----------------- PIXEL-ART -----------------------*/

  /*---------------------------------------------------*/

  var form = document.getElementById("pixelArtForm");
  var invaderGrid = document.getElementById("pixelArtDisplay");
  var colorSection = document.getElementById("pixelArtSection");
  /*-----------------------------------------------*/

  var pixelArt = new _PixelArt.PixelArt(form, invaderGrid, colorSection);
  pixelArt.init();
});