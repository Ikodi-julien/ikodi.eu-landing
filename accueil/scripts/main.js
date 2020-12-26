document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  loader.classList.add("hide");

  // document.addEventListener("click", () => {
  //   loader.classList.toggle("hide");
  // });

  /*--------------------------------------------------*/
  /*----------- HAMBURGER ----------------------------*/
  /*--------------------------------------------------*/
  const hamburger = document.getElementById("nav-hamburger");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
  });
});
