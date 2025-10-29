// Marca como activo el enlace del menú según la página actual y pone el año
document.addEventListener('DOMContentLoaded', () => {
  const yearEls = document.querySelectorAll('#anio');
  yearEls.forEach(el => el.textContent = new Date().getFullYear());
  const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.navbar .nav-link').forEach(a => {
    const href = (a.getAttribute('href')||'').toLowerCase();
    if (href.endsWith(current)) a.classList.add('active');
  });
});