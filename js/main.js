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

        // Aspetta che l'header venga renderizzato prima di calcolare l'altezza
        requestAnimationFrame(function () {
          var hero = document.getElementById('hero');
          var headerHeight = placeholder.offsetHeight;
          hero.style.height = `calc(100vh - ${headerHeight}px)`;
        });
      }
    })
    .catch(function (err) {
      console.error('Header load error:', err);
    });
});
