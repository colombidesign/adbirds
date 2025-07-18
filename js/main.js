// js/main.js

document.addEventListener('DOMContentLoaded', function () {
  // Caricamento header
  fetch('./partials/header.html')
    .then(function (res) {
      if (!res.ok) throw new Error('Failed to fetch header');
      return res.text();
    })
    .then(function (html) {
      var placeholder = document.getElementById('header-placeholder');
      if (placeholder) {
        placeholder.innerHTML = html;
      }
    })
    .catch(function (err) {
      console.error('Header load error:', err);
    });

  // Qui potrai aggiungere altre logiche in futuro
  // Esempio:
  // initHeroAnimation();
});
