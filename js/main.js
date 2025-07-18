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
        var menu = document.getElementById('mobile-menu');
        var burger = document.getElementById('burger-icon');
        var close = document.getElementById('close-icon');

        if (toggle && menu && burger && close) {
          toggle.addEventListener('click', function () {
            var isOpen = !menu.classList.contains('hidden');
            menu.classList.toggle('hidden');
            burger.classList.toggle('hidden', !isOpen);
            close.classList.toggle('hidden', isOpen);
          });
        }
      }
    })
    .catch(function (err) {
      console.error('Header load error:', err);
    });
});
