export function initDepoimentos() {
  // COMENTÁRIO EXTRA 5: Busca a div mãe onde os cartões serão injetados dinamicamente na tela
  const container = document.getElementById('depoimentos-grid');
  
  // Seção de segurança: Se a página atual não tiver o container de depoimentos, o script para aqui e não causa erros
  if (!container) return;

  // Lista (Array) contendo os dados dos pacientes. Facilita muito adicionar novos pacientes futuramente!
  const depoimentos = [
    {
      id: 1,
      name: "Paciente Confidencial",
      text: "Eu sempre me cobrei excessivamente e vivia com a sensação de estar falhando. O processo terapêutico tem sido um divisor de águas. Hoje, me sinto muito mais leve para tomar decisões na minha carreira e na minha vida sem carregar tanta culpa.",
      stars: 5,
      i18nPrefix: "dep-card1" // Prefixo usado para o script de tradução (PT, EN, ES) achar esse texto
    },
    {
      id: 2,
      name: "Paciente Confidencial",
      text: "Atendimento excepcional. A Cindy demonstra uma escuta genuína e conduz cada sessão com clareza e firmeza. Desde que iniciei o acompanhamento, minha evolução emocional tem sido evidente. Recomendo de olhos fechados.",
      stars: 5,
      i18nPrefix: "dep-card2"
    }
  ];

  // Laço de repetição: Passa por cada paciente da lista e cria o HTML correspondente
  depoimentos.forEach((dep, index) => {
    
    // COMENTÁRIO EXTRA 6: Calcula um pequeno atraso progressivo. O primeiro card surge, 0.2s depois surge o segundo, criando um efeito de cascata.
    const delay = (index + 2) * .2; 

    // Cria as estrelinhas baseadas na nota (stars) dada pelo paciente na array acima
    const starsHTML = Array.from({ length: dep.stars })
      .map(() => '<i class="fa-solid fa-star"></i>')
      .join('');

    // Molde HTML do Card (Usando Template String do JS para injetar as variáveis)
    const cardHTML = `
      <div class="depoimento-card fade-up" style="transition-delay: ${delay}s;">
        <h3 class="dep-name" data-i18n="${dep.i18nPrefix}-name">${dep.name}</h3>
        <p class="dep-text" data-i18n="${dep.i18nPrefix}-txt">${dep.text}</p>
        
        <div class="dep-rating">
          <!-- Ícone oficial do Google com a cor da marca -->
          <i class="fa-brands fa-google" style="color: #4285F4; margin-right: 5px; font-size: 1.2rem;"></i> 
          ${starsHTML}
        </div>
      </div>
    `;

    // Concatena o novo card ao container sem apagar o que já estava lá
    container.innerHTML += cardHTML;
  });
}