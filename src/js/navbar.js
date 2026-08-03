export function initNavbar() {
  // Elementos do Menu Mobile
  const btnMobile = document.getElementById('btn-mobile');
  const navLinks = document.getElementById('nav-links');
  
  // Elementos do Menu de Idioma
  const langBtn = document.getElementById('currentLangBtn');
  const langDropdown = document.getElementById('langDropdown');

  // 1. Lógica do Menu Hamburger
  if (btnMobile && navLinks) {
    btnMobile.addEventListener('click', () => {
      btnMobile.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        btnMobile.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // 2. Lógica do Menu de Idioma
  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Impede que o clique se propague e feche imediatamente
      langDropdown.classList.toggle('show');
    });

    // Fecha o dropdown se o usuário clicar fora dele
    document.addEventListener('click', () => {
      langDropdown.classList.remove('show');
    });
  }
}