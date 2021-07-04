"use strict";

loader = document.getElementById('loader');
loaderInfo = document.getElementById('loaderInfo');
window.addEventListener('DOMContentLoaded', function (event) {
  loader.classList.toggle('loader', false);
  loaderInfo.classList.toggle('hide', false);
});