export function initNavbar() {
  const btnMobile = document.getElementById('btn-mobile');
  const navLinks = document.getElementById('nav-links');
  const navbarPill = document.getElementById('navbarPill'); // A Navbar global
  const body = document.body;

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
      const isActive = navLinks.classList.toggle('active');
      btnMobile.classList.toggle('active');
      
      if (isActive) {
        body.style.overflow = 'hidden'; // Trava o fundo
        navbarPill.classList.add('menu-open'); // Remove a prisão de vidro
      } else {
        body.style.overflow = ''; // Libera o fundo
        navbarPill.classList.remove('menu-open'); // Devolve o vidro
      }
    });

    // Fecha o menu automaticamente quando clicar em um link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        btnMobile.classList.remove('active');
        navLinks.classList.remove('active');
        body.style.overflow = '';
        navbarPill.classList.remove('menu-open');
      });
    });
  }
}