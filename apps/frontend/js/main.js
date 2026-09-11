document.addEventListener('DOMContentLoaded', () => {
  // 1. Ícones Lucide
  if (window.lucide) {
    lucide.createIcons();
  }

  // 2. Menu Hambúrguer Simples
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');

      menuToggle.innerHTML = isOpen
        ? '<i data-lucide="x"></i>'
        : '<i data-lucide="menu"></i>';

      if (window.lucide) {
        lucide.createIcons();
      }
    });

    document.querySelectorAll('.nav-link, .nav-mobile-btn').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.innerHTML = '<i data-lucide="menu"></i>';
        if (window.lucide) {
          lucide.createIcons();
        }
      });
    });
  }

  // 3. Scroll Reveal
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.feature-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s`;
    observer.observe(card);
  });
});