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
          if (hero) {
            hero.style.height = `calc(100vh - ${headerHeight}px)`;
          }
        });

        // Inizializzazione del menu mobile dopo il render
        var toggle = document.getElementById('menu-toggle');
        var mobileMenu = document.getElementById('mobile-menu');
        var burgerIcon = document.getElementById('burger-icon');
        var closeIcon = document.getElementById('close-icon');
      
        toggle.addEventListener('click', function () {
          var isOpen = !mobileMenu.classList.contains('hidden');
          mobileMenu.classList.toggle('hidden');
          burgerIcon.classList.toggle('hidden', !isOpen);
          closeIcon.classList.toggle('hidden', isOpen);
        });
      }
    })
    .catch(function (err) {
      console.error('Header load error:', err);
    });
});
