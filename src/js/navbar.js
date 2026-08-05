export function initNavbar() {
  const btnMobile = document.getElementById('btn-mobile');
  const navLinks = document.getElementById('nav-links');
  const langBtn = document.getElementById('currentLangBtn');
  const langDropdown = document.getElementById('langDropdown');
  const navbarPill = document.getElementById('navbarPill'); // A Navbar global

  // 1. Lógica do Scroll (Shrink / Super Pill)
  if (navbarPill) {
    window.addEventListener('scroll', () => {
      // Se a tela rolar mais de 50px para baixo, ativa a pílula
      if (window.scrollY > 50) {
        navbarPill.classList.add('scrolled');
      } else {
        navbarPill.classList.remove('scrolled');
      }
    });
  }

  // 2. Lógica do Menu Hamburger
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

  // 3. Lógica do Menu de Idioma (Bandeiras)
  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation(); 
      langDropdown.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      langDropdown.classList.remove('show');
    });
  }
}