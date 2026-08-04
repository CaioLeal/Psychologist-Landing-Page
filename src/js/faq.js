export function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // (Opcional) Fecha todos os outros antes de abrir o clicado
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });

      // Se o item clicado já não estava aberto, nós o abrimos agora
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}