import { initNavbar } from './navbar.js';
// import { initI18n } from './i18n.js'; // Descomente quando integrar o seu script

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  //initI18n();
  
  // --- Lógica de Animação Fade Up ao fazer Scroll ---
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Dispara quando 15% do elemento estiver visível
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Adiciona a classe que faz o elemento subir e aparecer
        entry.target.classList.add('visible');
        
        // Desliga o observador para este elemento (anima só uma vez)
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Seleciona todos os elementos com a classe .fade-up e observa eles
  const fadeElements = document.querySelectorAll('.fade-up');
  fadeElements.forEach(el => observer.observe(el));
});