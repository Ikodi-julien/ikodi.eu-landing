"use strict";

/* --- SCROLL REVEAL --- */
var sr = ScrollReveal({
  delay: 400,
  duration: 600,
  reset: true,
  distance: '0',
  origin: 'bottom'
}); //imgs

sr.reveal('.section__img', {});
sr.reveal('p', {
  origin: 'bottom'
});
sr.reveal('.section__span', {
  duration: 400,
  origin: 'left',
  distance: '150px',
  easing: 'cubic-bezier(.77, .11, .7, 1.4)'
});