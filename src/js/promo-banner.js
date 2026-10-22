export function initPromoBanner() {
  const whatsappLink = "https://wa.me/5511962384148?text=Ol%C3%A1!%20Vi%20o%20an%C3%BAncio%20do%20Grupo%20Terap%C3%AAutico%20para%20Adolescentes%20(12%20a%2016%20anos)%20e%20gostaria%20de%20saber%20se%20as%20vagas%20promocionais%20de%20R%24%2080%2C00%20ainda%20est%C3%A3o%20dispon%C3%ADveis.%20Como%20fa%C3%A7o%20para%20realizar%20a%20inscri%C3%A7%C3%A3o%3F";

  const promoHTML = `
    <!-- FAIXA SUPERIOR ANIMADA -->
    <div id="promoTopBar" class="promo-top-bar" role="button" tabindex="0" aria-label="Ver detalhes do Grupo Terapêutico para Adolescentes">
      <div class="promo-bar-content">
        <span class="promo-pill-badge" data-i18n="promo-badge">
          <i class="fa-solid fa-sparkles"></i> Vagas Limitadas
        </span>
        <span class="promo-bar-text" data-i18n="promo-bar-text">
          <strong>Grupo Terapêutico para Adolescentes (12 a 16 anos)</strong> • Inscrições promocionais abertas!
        </span>
        <span class="promo-bar-cta" data-i18n="promo-bar-cta">
          Clique para ver <i class="fa-solid fa-arrow-right"></i>
        </span>
      </div>
      <button id="closePromoBar" class="promo-bar-close" aria-label="Fechar aviso" title="Fechar">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>

    <!-- MODAL POPUP COM AS 2 IMAGENS -->
    <div id="promoModalOverlay" class="promo-modal-overlay">
      <div class="promo-modal-box">
        <button id="closePromoModal" class="promo-modal-close" aria-label="Fechar janela">
          <i class="fa-solid fa-xmark"></i>
        </button>

        <div class="promo-modal-header">
          <h3 data-i18n="promo-modal-title">Grupo Terapêutico para Adolescentes</h3>
          <p data-i18n="promo-modal-sub">De 12 a 16 anos • 100% Online • Vagas promocionais para as primeiras 20 inscrições</p>
          <span class="promo-swipe-hint" data-i18n="promo-swipe-hint">
            <i class="fa-solid fa-arrows-left-right"></i> Deslize para o lado para ver os dois cartazes
          </span>
        </div>

        <div class="promo-images-track">
          <div class="promo-flyer-item">
            <img src="img/grupo-adolescentes-1.jpg" alt="Grupo Terapêutico para Adolescentes - Informações">
          </div>
          <div class="promo-flyer-item">
            <img src="img/grupo-adolescentes-2.jpg" alt="Grupo Terapêutico para Adolescentes - Inscrições Promocionais R$ 80,00">
          </div>
        </div>

        <div class="promo-modal-footer">
          <a href="${whatsappLink}" target="_blank" rel="noopener noreferrer" class="btn-promo-whatsapp btn-shine" data-i18n="promo-whatsapp-btn">
            <i class="fa-brands fa-whatsapp"></i> Consulte aqui e garanta sua vaga
          </a>
        </div>
      </div>
    </div>
  `;

  if (!document.getElementById('promoTopBar')) {
    document.body.insertAdjacentHTML('afterbegin', promoHTML);
  }

  const topBar = document.getElementById('promoTopBar');
  const closeBarBtn = document.getElementById('closePromoBar');
  const modalOverlay = document.getElementById('promoModalOverlay');
  const closeModalBtn = document.getElementById('closePromoModal');

  // Desce a faixa suavemente 1 segundo (1000ms) após abrir o site
  setTimeout(() => {
    topBar.classList.add('show');
    document.body.classList.add('has-promo-bar');
  }, 1000);

  // Abrir o Modal ao clicar na faixa
  function openModal() {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Fechar o Modal
  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  topBar.addEventListener('click', (e) => {
    if (e.target.closest('#closePromoBar')) return;
    openModal();
  });

  // Fechar apenas a faixa superior se o usuário clicar no "X"
  closeBarBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    topBar.classList.remove('show');
    document.body.classList.remove('has-promo-bar');
  });

  closeModalBtn.addEventListener('click', closeModal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
}