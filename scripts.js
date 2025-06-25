// Reveal on scroll (fade-in animation)
function reveal() {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 60) el.classList.add('visible');
  });
}
reveal();
window.addEventListener('scroll', reveal, { passive: true });

// Smooth scroll for anchor links
document.querySelectorAll('.pixel-nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if(href && href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
