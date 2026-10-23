export function initLectures() {
  const grid = document.getElementById('palestras-grid');
  if (!grid) return;

  // Lista com os 7 itens enviados pela cliente (2 vídeos + 5 imagens)
  // Layout planejado para fechar 12 blocos exatos (grid 4x3 no desktop):
  // Item 1 (2x2 = 4) + Item 2 (1x1) + Item 3 (1x1) + Item 4 (2x1 = 2) + Item 5 (2x1 = 2) + Item 6 (1x1) + Item 7 (1x1) = 12 células!
  const mediaItems = [
    {
      type: 'video',
      src: 'img/lectures/6.mp4',
      spanClass: 'span-2x2',
      i18nKey: 'lec-media-1',
      defaultCaption: 'Depressão e a Curiosidade • Inteligência Emocional'
    },
    {
      type: 'image',
      src: 'img/lectures/2.png',
      spanClass: '',
      i18nKey: 'lec-media-2',
      defaultCaption: 'Treinamento e Desenvolvimento'
    },
    {
      type: 'image',
      src: 'img/lectures/1.png',
      spanClass: '',
      i18nKey: 'lec-media-3',
      defaultCaption: 'Dinâmica em Grupo'
    },
    {
      type: 'image',
      src: 'img/lectures/3.png',
      spanClass: 'span-2x1',
      i18nKey: 'lec-media-4',
      defaultCaption: 'Encontro sobre Prevenção e Autocuidado'
    },
    {
      type: 'image',
      src: 'img/lectures/8.jpeg',
      spanClass: 'span-2x1',
      i18nKey: 'lec-media-5',
      defaultCaption: 'Depressão e a Curiosidade • Inteligência Emocional'
    },
    {
      type: 'image',
      src: 'img/lectures/4.png',
      spanClass: '',
      i18nKey: 'lec-media-6',
      defaultCaption: 'Palestra In Company'
    },
    {
      type: 'image',
      src: 'img/lectures/9.jpeg',
      spanClass: '',
      i18nKey: 'lec-media-7',
      defaultCaption: 'Acolhimento e Escuta nas Organizações'
    }
  ];

  // 1. Renderiza o Bento Grid
  grid.innerHTML = '';
  mediaItems.forEach((item, index) => {
    const isVideo = item.type === 'video';
    
    const mediaTag = isVideo
      ? `<video src="${item.src}#t=0.5" muted loop playsinline preload="metadata"></video>`
      : `<img src="${item.src}" alt="${item.defaultCaption}" loading="lazy">`;

    const badgeIcon = isVideo
      ? `<div class="bento-badge-play"><i class="fa-solid fa-play"></i></div>`
      : `<div class="bento-zoom-icon"><i class="fa-solid fa-expand"></i></div>`;

    const itemHTML = `
      <div class="bento-item ${item.spanClass} ${isVideo ? 'is-video' : ''}" data-index="${index}">
        ${mediaTag}
        ${badgeIcon}
        <div class="bento-overlay">
          <span class="bento-caption" data-i18n="${item.i18nKey}">${item.defaultCaption}</span>
        </div>
      </div>
    `;
    grid.insertAdjacentHTML('beforeend', itemHTML);
  });

  // Preview silencioso ao passar o mouse nos vídeos no Desktop
  const videoCards = grid.querySelectorAll('.bento-item.is-video');
  videoCards.forEach(card => {
    const video = card.querySelector('video');
    if (video) {
      card.addEventListener('mouseenter', () => video.play().catch(() => {}));
      card.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0.5;
      });
    }
  });

  // 2. Cria o Modal Lightbox no final do body
  if (!document.getElementById('lec-lightbox')) {
    const lightboxHTML = `
      <div class="lec-lightbox" id="lec-lightbox">
        <div class="lec-lightbox-content">
          <button class="lec-lightbox-close" id="lec-lightbox-close" aria-label="Fechar">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <div id="lec-lightbox-media-container"></div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);
  }

  const lightbox = document.getElementById('lec-lightbox');
  const mediaContainer = document.getElementById('lec-lightbox-media-container');
  const closeBtn = document.getElementById('lec-lightbox-close');

  // Abre o Lightbox ao clicar em qualquer foto ou vídeo
  grid.querySelectorAll('.bento-item').forEach(card => {
    card.addEventListener('click', () => {
      const idx = card.getAttribute('data-index');
      const item = mediaItems[idx];

      if (item.type === 'video') {
        mediaContainer.innerHTML = `<video src="${item.src}" controls autoplay playsinline></video>`;
      } else {
        mediaContainer.innerHTML = `<img src="${item.src}" alt="${item.defaultCaption}">`;
      }

      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    mediaContainer.innerHTML = ''; // Pausa o vídeo imediatamente ao fechar
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}