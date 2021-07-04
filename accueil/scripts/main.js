import { PixelArt } from "./PixelArt.js";

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  loader.classList.add("hide");

  /*--------------------------------------------------*/
  /*----------- HAMBURGER ----------------------------*/
  /*--------------------------------------------------*/
  const hamburger = document.getElementById("nav-hamburger");
  const menu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    menu.classList.toggle("nav__menu__show");
  });

  /*---------------------------------------------------*/
  /*----------------- PIXEL-ART -----------------------*/
  /*---------------------------------------------------*/
  const form = document.getElementById("pixelArtForm");
  const invaderGrid = document.getElementById("pixelArtDisplay");
  const colorSection = document.getElementById("pixelArtSection");

  /*-----------------------------------------------*/

  var pixelArt = new PixelArt(form, invaderGrid, colorSection);

  pixelArt.init();
});
