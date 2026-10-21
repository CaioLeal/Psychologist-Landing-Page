export function initDepoimentos() {
  const container = document.getElementById('depoimentos-grid');
  if (!container) return;

  // 1. INJETA A ESTRUTURA DA CARTA OCULTA NO FIM DO SITE
  const modalHTML = `
    <div id="carta-modal" class="carta-overlay">
      <div class="carta-papel">
        <button class="carta-close" onclick="fecharCarta()"><i class="fa-solid fa-xmark"></i></button>
        
        <div class="dep-header">
          <img id="carta-img" src="" alt="Paciente" class="dep-photo">
          <div class="dep-title-area">
            <h3 id="carta-nome" class="dep-name"></h3>
            <div class="dep-rating" id="carta-estrelas"></div>
          </div>
        </div>
        
        <div class="carta-body">
          <p id="carta-texto" class="handwriting-text"></p>
        </div>
      </div>
    </div>
  `;
  if (!document.getElementById('carta-modal')) {
    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }

  // 2. DADOS DOS PACIENTES
  const depoimentos = [
    {
      id: 1,
      name: "Ana Mora",
      image: "img/treatment/anamora.png",
      shortText: `"Você tem medo de se olhar no espelho?". Foi uma pergunta que a minha mãe me fez antes de eu começar a terapia. E, naquela época, por mais que eu não conseguisse dizer...`,
      fullText: `"Você tem medo de se olhar no espelho?". Foi uma pergunta que a minha mãe me fez antes de eu começar a terapia. E, naquela época, por mais que eu não conseguisse dizer em voz alta, a resposta era sim. Eu tinha medo de me olhar. Medo de me encontrar. Medo de descobrir quem eu era quando não estava tentando fugir de mim mesma. Na minha família, assim como em tantas outras, a gente nunca se sentou muito para conversar sobre sentimentos. Os conflitos existiam, mas nem sempre eram encarados. Muitas vezes, a vida só seguia. E eu aprendi a fazer o mesmo. Se algo doía, eu seguia. Se algo me incomodava, eu guardava. Fugir acabou se tornando uma forma de me proteger.<br><br>Até que comecei a terapia. E nas primeiras semanas, parecia que eu tinha entrado numa sala cheia de espelhos. Só que aqueles espelhos não mostravam só quem eu era naquele momento. Cada um deles parecia guardar uma versão de mim. Uma idade. Uma lembrança. Um medo. Uma dor. Um conflito. Um pedacinho da minha história. Algumas coisas que eu não queria olhar. E, numa das sessões, eu falei para a cindy sobre a pergunta da minha mãe. Contei que sentia como se estivesse fingindo ser quem eu era. Como se estivesse o tempo todo fugindo de mim mesma, evitando conflitos e sentimentos, e ao mesmo tempo sentindo tudo intensamente. Eu sentia demais. E, por sentir demais, me culpava por sentir.<br><br>Foi então que ela me disse que havia muitos pedaços meus espalhados por aí. Pedaços que eu não estava querendo encontrar. Que eu precisava encontrar aqueles pedaços perdidos no passado para conseguir ser inteira no meu presente. Essa frase ficou comigo. Porque eu percebi que havia versões de mim que eu tinha deixado cobertas. Na terapia, fui e fui descobrindo alguns desses espelhos. E, em vez de medo, eu sinto, curiosidade. Como se, ao invés de quebrá-los, eu pudesse juntar os cacos com cuidado, entendendo o que cada um ainda quer me mostrar. Hoje, eu entro nessa sala de espelhos não mais tremendo, mas com uma espécie de paz curiosa. Pronta para descobrir, mais do que fugir. Fazer terapia é como uma caminhada guiada ao reencontro consigo mesmo.`,
      stars: 5,
      i18nPrefix: "dep-card1"
    },
    {
      id: 2,
      name: "Lorena Araujo",
      image: "img/treatment/lorenaaraujo.png",
      shortText: "Excelente profissional, muito competente e sempre pronta para ouvir seus pacientes com clareza...",
      fullText: "Excelente profissional, muito competente e sempre pronta para ouvir seus pacientes com clareza. Recomendo de olhos fechados para todos, a sensação de acolhimento, compreensão e apoio que ela te envolve durante a sessão é maravilhosa! 👏", 
      stars: 5,
      i18nPrefix: "dep-card2"
    },
    {
      id: 3,
      name: "Gustavo Lima Timoteo", 
      image: "img/treatment/user.png", 
      shortText: "Excelente profissional, muito atenciosa e acolhedora, gosto bastante das sessões, recomendo!",
      fullText: "Excelente profissional, muito atenciosa e acolhedora, gosto bastante das sessões, recomendo!", 
      stars: 5,
      i18nPrefix: "dep-card3" 
    },
    {
      id: 4,
      name: "Marcia Lucas", 
      image: "img/treatment/marcialucas.png", 
      shortText: "Maravilhosa ! Atenciosa, sempre disposta a ouvir e orientar com muita empatiac e humanidade...",
      fullText: "Maravilhosa ! Atenciosa, sempre disposta a ouvir e orientar com muita empatiac e humanidade. Excelente profissional esta me ajudando muito em vários aspectos como depressão, ansiedade TDHA, entre outros. Recomendo muito.", 
      stars: 5,
      i18nPrefix: "dep-card4" 
    },
    {
      id: 5,
      name: "Flavia Falco", 
      image: "img/treatment/flaviafalco.png", 
      shortText: "Encontrar ela foi a melhor coisa que me aconteceu, e muito fácil gostar dela e do jeito dela em tratar as pessoas...",
      fullText: "Encontrar ela foi a melhor coisa que me aconteceu, e muito fácil gostar dela e do jeito dela em tratar as pessoas. Posso dizer que muitas coisas mudaram na minha vida devido as sessões que temos! E impressionante como uma boa conversa com ela os problemas encontram saida sem  esse lugar de dor. Falar com ela pode-se dizer que encontramos paz e conforto.", 
      stars: 5,
      i18nPrefix: "dep-card5" 
    },
    {
      id: 6,
      name: "Gabrielle Viana", 
      image: "img/treatment/gabrielleviana.png", 
      shortText: "Maravilhosa!! A Cindy é uma profissional excelente! É minha primeira psicóloga e desde o início me senti muito confortável com ela...",
      fullText: "Maravilhosa!! A Cindy é uma profissional excelente! É minha primeira psicóloga e desde o início me senti muito confortável com ela. Gosto muito da atenção e do cuidado que ela tem, além de o espaço das sessões ser acolhedor e bem localizado. Tenho recomendado o trabalho dela para várias pessoas que conheço! <3", 
      stars: 5,
      i18nPrefix: "dep-card6" 
    },
    {
      id: 7,
      name: "Caio Leal", 
      image: "img/treatment/user.png", 
      shortText: "Psicóloga incrível! Tem sido fundamental no meu processo. Com a escuta atenta e o olhar cuidadoso dela, consegui entender coisas sobre mim que eu nunca tinha percebido...",
      fullText: "Psicóloga incrível! Tem sido fundamental no meu processo. Com a escuta atenta e o olhar cuidadoso dela, consegui entender coisas sobre mim que eu nunca tinha percebido, e ela me encaminhou para a avaliação que eu precisava. Super recomendo!", 
      stars: 5,
      i18nPrefix: "dep-card7" 
    }
  ];

  // 3. GERA OS CARDS (Duplica a lista para o loop infinito funcionar de forma limpa)
  const itensDuplicados = [...depoimentos, ...depoimentos];
  
  container.innerHTML = '';
  itensDuplicados.forEach((dep, index) => {
    // Usamos o índice original (dep.id - 1) para a função de abrir carta não se perder nos duplicados
    const indexOriginal = dep.id - 1; 
    
    // Animação fade-up apenas nos primeiros itens (para não pesar os duplicados ocultos)
    const fadeClass = index < depoimentos.length ? 'fade-up' : '';
    const delay = index < depoimentos.length ? (index + 2) * .2 : 0; 
    
    const starsHTML = Array.from({ length: dep.stars }).map(() => '<i class="fa-solid fa-star"></i>').join('');
    const imgHTML = dep.image ? `<img src="${dep.image}" alt="${dep.name}" class="dep-photo">` : '';

    const btnLerMais = dep.fullText ? `<button class="read-more-btn" onclick="abrirCarta(${indexOriginal})" data-i18n="read-more">Ler depoimento completo</button>` : '';

    const cardHTML = `
      <div class="depoimento-card ${fadeClass}" style="transition-delay: ${delay}s;">
        <div class="dep-header">
          ${imgHTML}
          <div class="dep-title-area">
            <h3 class="dep-name" data-i18n="${dep.i18nPrefix}-name">${dep.name}</h3>
            <div class="dep-rating">
              <i class="fa-brands fa-google" style="color: #4285F4; margin-right: 5px; font-size: 1.2rem;"></i> 
              ${starsHTML}
            </div>
          </div>
        </div>
        <p class="dep-text line-clamp" data-i18n="${dep.i18nPrefix}-short">${dep.shortText}</p>
        <div class="dep-footer-action">
          ${btnLerMais}
        </div>
      </div>
    `;
    container.innerHTML += cardHTML;
  });

  // 4. LÓGICA DO CARROSSEL DE AUTOSCROLL
  let animationId;
  let isHovered = false; // Flag para pausar no mouse
  let isModalOpen = false; // Flag para pausar quando a cartinha estiver aberta
  let scrollSpeed = 0.5; // Velocidade de rolagem (Pixels por quadro). Aumente se quiser mais rápido.
  let currentScroll = 0; // Posição atual armazenada em variável fracionária para maior fluidez

  // Ponto exato onde o carrossel atinge o meio invisível (e devemos zerar)
  // (A largura total dividida por 2, pois o conteúdo foi duplicado)
  const calculateResetPoint = () => container.scrollWidth / 2;

  function autoScroll() {
    // Só rola se não tiver mouse em cima, cartinha aberta, ou dedo tocando na tela
    if (!isHovered && !isModalOpen) {
      currentScroll += scrollSpeed;
      container.scrollLeft = currentScroll;

      // Se a rolagem atual ultrapassar a metade (o limite dos cards originais), volta instantaneamente para o zero.
      if (currentScroll >= calculateResetPoint()) {
        currentScroll = 0;
        container.scrollLeft = 0;
      }
    }
    animationId = requestAnimationFrame(autoScroll);
  }

  // Inicia o motor
  autoScroll();

  // Pausar no Hover (Desktop)
  container.addEventListener('mouseenter', () => { isHovered = true; });
  container.addEventListener('mouseleave', () => { 
    isHovered = false; 
    // Atualiza a posição atual de scroll caso o usuário tenha rolado com a rodinha
    currentScroll = container.scrollLeft; 
  });

  // Pausar no Toque (Mobile)
  container.addEventListener('touchstart', () => { isHovered = true; });
  container.addEventListener('touchend', () => { 
    isHovered = false;
    currentScroll = container.scrollLeft;
  });

  // Sincronizar caso o usuário use o mouse para rolar o conteúdo horizontalmente
  container.addEventListener('scroll', () => {
    if (isHovered) {
      currentScroll = container.scrollLeft;
    }
  });


  // 5. FUNÇÕES GLOBAIS DE ABRIR E FECHAR A CARTA
  window.abrirCarta = function(index) {
    const dep = depoimentos[index];
    const modal = document.getElementById('carta-modal');
    
    // Pausa o carrossel
    isModalOpen = true;

    const modalImg = document.getElementById('carta-img');
    if (dep.image) {
      modalImg.src = dep.image;
      modalImg.style.display = 'block';
    } else {
      modalImg.style.display = 'none';
    }

    const nomeEl = document.getElementById('carta-nome');
    nomeEl.setAttribute('data-i18n', `${dep.i18nPrefix}-name`);
    nomeEl.innerHTML = dep.name;

    const textoEl = document.getElementById('carta-texto');
    textoEl.setAttribute('data-i18n', `${dep.i18nPrefix}-full`);
    textoEl.innerHTML = dep.fullText;

    document.getElementById('carta-estrelas').innerHTML = `<i class="fa-brands fa-google" style="color: #4285F4; margin-right: 5px; font-size: 1.2rem;"></i>` + 
      Array.from({ length: dep.stars }).map(() => '<i class="fa-solid fa-star"></i>').join('');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; 

    try {
      const paperSound = new Audio('audio/paper.mp3'); 
      paperSound.volume = .5; 
      paperSound.play();
    } catch (e) {
      console.log('Sem áudio de papel no momento');
    }
  };

  window.fecharCarta = function() {
    document.getElementById('carta-modal').classList.remove('active');
    document.body.style.overflow = ''; 
    // Retoma o carrossel
    isModalOpen = false;
  };

  document.getElementById('carta-modal').addEventListener('click', function(e) {
    if (e.target === this) fecharCarta();
  });
}