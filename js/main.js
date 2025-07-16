// js/main.js

fetch('./partials/header.html')
  .then(res => {
    if (!res.ok) throw new Error('Failed to fetch header');
    return res.text();
  })
  .then(html => {
    const placeholder = document.getElementById('header-placeholder');
    if (placeholder) {
      placeholder.innerHTML = html;
    }
  })
  .catch(err => console.error('Header load error:', err));
