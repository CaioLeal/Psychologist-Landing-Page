import { gsap } from "gsap";

export function initI18n() {
    const langBtn = document.getElementById('currentLangBtn');
    const langDropdown = document.getElementById('langDropdown');
    const langOptions = document.querySelectorAll('.lang-option');

    if (!langBtn || !langDropdown) return;

    // Dicionário de Traduções (Mantido igual)
    const translations = {
        pt: {
            // FAIXA E MODAL: GRUPO DE ADOLESCENTES
            "promo-badge": "<i class=\"fa-solid fa-sparkles\"></i> Vagas Limitadas",
            "promo-bar-text": "<strong>Grupo Terapêutico para Adolescentes (12 a 16 anos)</strong> • Inscrições promocionais abertas!",
            "promo-bar-cta": "Clique para ver <i class=\"fa-solid fa-arrow-right\"></i>",
            "promo-modal-title": "Grupo Terapêutico para Adolescentes",
            "promo-modal-sub": "De 12 a 16 anos • 100% Online • Vagas promocionais para as primeiras 20 inscrições",
            "promo-swipe-hint": "<i class=\"fa-solid fa-arrows-left-right\"></i> Deslize para o lado para ver os dois cartazes",
            "promo-whatsapp-btn": "<i class=\"fa-brands fa-whatsapp\"></i> Consulte aqui e garanta sua vaga",
            
            // NAVBAR
            "nav-home": "Home",
            "nav-for-who": "Para quem é",
            "nav-benefits": "Benefícios",
            "nav-about": "A Psicóloga",
            "nav-how": "Como funciona",
            "nav-lectures": "Palestras",
            "nav-faq": "Dúvidas frequentes",
            "nav-contact": "Contato",

            // HERO SECTION
            "hero-title": "Psicoterapia para compreender o que você está vivendo e construir novos caminhos.",
            "hero-desc": "Nem sempre é fácil entender o que está acontecendo quando emoções, pensamentos e comportamentos começam a pesar no dia a dia. <strong>Um espaço de escuta e cuidado para olhar para você com mais clareza, acolhimento e profundidade.</strong>",
            "hero-btn-primary": "Agendar uma conversa",
            "hero-btn-secondary": "Conheça a Psicóloga",
            "hero-card-name": "Cindy Andriolli",
            "hero-card-crp": "Psicóloga - CRP 06/209430",

            // IDENTIFICAÇÃO (PARA QUEM É)
            "ident-badge": "Identificação",
            "ident-title": "Você tem se sentido assim ultimamente?",
            "ident-c1-title": "Ansiedade constante",
            "ident-c1-desc": "Sua mente está sempre um passo à frente, antecipando problemas que ainda nem aconteceram.",
            "ident-c2-title": "Sobrecarga invisível",
            "ident-c2-desc": "Você sustenta responsabilidades no trabalho, na família e nos relacionamentos, mas quase ninguém percebe o custo disso.",
            "ident-c3-title": "Sensação de insuficiência",
            "ident-c3-desc": "Mesmo conquistando coisas importantes, você sente que ainda não é o bastante.",
            "ident-c4-title": "Cansaço emocional",
            "ident-c4-desc": "Um esgotamento que não melhora apenas com descanso.",
            "ident-footer": "Se você <strong>se reconheceu</strong> em mais de um desses pontos,<br>talvez não seja falta de força, mas excesso de esforço.",

            // BENEFÍCIOS
            "ben-badge": "Benefícios da terapia",
            "ben-title": "Por que investir em terapia muda tudo ao redor",
            "ben-desc1": "<strong>A psicoterapia é um processo de desenvolvimento que ajuda você a compreender seus padrões.</strong>",
            "ben-desc2": "Tudo o que você quer construir começa na forma como você se sustenta por dentro. Quando sua saúde mental se fortalece, suas decisões ficam mais claras, seus limites mais firmes e sua postura mais segura.",
            "ben-desc3": "<strong>Sem estrutura emocional, você vive apagando incêndios.<br>Com acompanhamento psicológico, você constrói direção.</strong>",
            "ben-c1-title": "Segurança emocional",
            "ben-c1-desc": "Desenvolva a capacidade de sentir ansiedade sem deixar que ela conduza suas decisões.",
            "ben-c2-title": "Clareza nas decisões",
            "ben-c2-desc": "Diferencie o que é culpa do que é valor.",
            "ben-c3-title": "Limites mais saudáveis",
            "ben-c3-desc": "Aprenda a dizer não sem medo excessivo de decepcionar.",
            "ben-c4-title": "Autonomia emocional",
            "ben-c4-desc": "Construa independência emocional e profissional com mais estabilidade.",

            // A PSICÓLOGA / SOBRE
            "sobre-name": "Cindy Andriolli",
            "sobre-crp": "Psicóloga - CRP 06/209430",
            "sobre-badge": "A Psicóloga",
            "sobre-title": "Quem eu sou?",
            "sobre-p1": "<strong>Psicologia, arte e desenvolvimento humano a serviço da saúde emocional e da transformação de pessoas e organizações.</strong>",
            "sobre-p2": "Cindy Elaine Cardoso Andriolli (CRP 06/209430) é psicóloga, neuropsicóloga, atriz e palestrante corporativa, com 17 anos de atuação profissional.",
            "sobre-p3": "Sua trajetória integra os conhecimentos da Psicologia à sensibilidade artística e à comunicação, desenvolvendo experiências que promovem autoconhecimento, saúde emocional e transformação de comportamentos.",
            "sobre-p4": "Na área corporativa, atua com palestras, treinamentos e ações de promoção da saúde mental, inteligência emocional, autocuidado, relações interpessoais e prevenção de riscos psicossociais, contribuindo para o desenvolvimento de pessoas e a construção de ambientes de trabalho mais saudáveis.",
            "sobre-p5": "<strong>Seu trabalho tem como propósito aproximar conhecimento e experiência humana, transformando reflexões em atitudes e incentivando escolhas mais conscientes, tanto na vida pessoal quanto na profissional.</strong>",
            
            "sobre-l1": "Psicóloga formada pela Anhanguera Educacional (2015)",
            "sobre-l2": "Pós-graduada em Neuropsicologia, com ênfase em Avaliação e Reabilitação Neuropsicológica",
            "sobre-l3": "Especialização em Supervisão Escolar e Orientação Educacional",
            "sobre-l4": "Atuação e experiência em Psicologia Clínica e Avaliação Psicológica",
            "sobre-l5": "Formação complementar em Produção Audiovisual e Comunicação",

            // PALESTRAS E TREINAMENTOS
            "lec-badge": "In Company & Eventos",
            "lec-title": "Palestras, Treinamentos e Saúde Emocional",
            "lec-subtitle": "Experiências que unem a ciência da Psicologia, a comunicação e a sensibilidade artística para transformar ambientes corporativos, escolas e instituições.",
            "lec-card-title": "Impacto humano que gera transformação real nas organizações",
            "lec-card-p1": "Mais do que palestras expositivas, proponho encontros dinâmicos e reflexivos que conectam conhecimento técnico à vivência prática das equipes, incentivando o protagonismo e a construção de relações de trabalho mais saudáveis.",
            "lec-p1-title": "Conexão e Engajamento",
            "lec-p1-desc": "Dinâmicas de grupo e comunicação assertiva com escuta ativa.",
            "lec-p2-title": "Prevenção Psicossocial",
            "lec-p2-desc": "Ações voltadas ao bem-estar corporativo, SIPAT e campanhas como Janeiro Branco e Setembro Amarelo.",
            "lec-topics-title": "Principais temas abordados:",
            "lec-tag-1": "<i class=\"fa-solid fa-check\"></i> Inteligência Emocional no Trabalho",
            "lec-tag-2": "<i class=\"fa-solid fa-check\"></i> Prevenção ao Burnout e Sobrecarga",
            "lec-tag-3": "<i class=\"fa-solid fa-check\"></i> Relações Interpessoais e Empatia",
            "lec-tag-4": "<i class=\"fa-solid fa-check\"></i> Comunicação Não-Violenta e Liderança",
            "lec-tag-5": "<i class=\"fa-solid fa-check\"></i> Saúde Mental e Autocuidado",
            "lec-tag-6": "<i class=\"fa-solid fa-check\"></i> Prevenção de Riscos Psicossociais",
            "lec-gallery-label": "<i class=\"fa-solid fa-camera-retro\"></i> Registros de encontros, dinâmicas e palestras realizadas",
            "lec-media-1": "Palestra Corporativa • Saúde Emocional",
            "lec-media-2": "Treinamento e Desenvolvimento",
            "lec-media-3": "Dinâmica em Grupo",
            "lec-media-4": "Encontro sobre Prevenção e Autocuidado",
            "lec-media-5": "Vivência Prática • Inteligência Emocional",
            "lec-media-6": "Palestra In Company",
            "lec-media-7": "Acolhimento e Escuta nas Organizações",
            "lec-cta-text": "Deseja levar uma palestra ou treinamento personalizado para a sua empresa ou evento?",
            "lec-btn-wpp": "<i class=\"fa-brands fa-whatsapp\" style=\"margin-right: 8px;\"></i> Solicitar proposta para evento",
            "lec-btn-form": "Falar pelo formulário",

            // COMO FUNCIONA
            "cf-badge": "Como funciona",
            "cf-title": "Psicoterapia Online",
            "cf-desc": "A terapia online oferece praticidade e continuidade, mantendo o mesmo compromisso ético e técnico do atendimento presencial.",
            "cf-i1-title": "Duração da Sessão",
            "cf-i1-desc": "50 minutos",
            "cf-i2-title": "Frequência",
            "cf-i2-desc": "Sessões semanais",
            "cf-i3-title": "Modalidade de atendimento",
            "cf-i3-desc": "Terapia Online",
            "cf-i4-title": "Abordagem",
            "cf-i4-desc": "ACT - Terapia de Aceitação e Compromisso",

            // JORNADA
            "jornada-badge": "Sem complicações",
            "jornada-title": "Comece sua jornada em 4 passos",
            "jornada-c1-title": "Primeiro contato",
            "jornada-c1-desc": "Você chega pelo WhatsApp e compartilha, no seu tempo, o que está sentindo. Sem pressão e sem compromisso imediato.",
            "jornada-c2-title": "Agendamento",
            "jornada-c2-desc": "Definimos juntas o melhor horário para você. O atendimento é online, com flexibilidade e conforto.",
            "jornada-c3-title": "Primeira sessão",
            "jornada-c3-desc": "Um espaço de escuta e investigação da sua história, para entender como você aprendeu a sustentar tudo sozinha, e o custo disso para você.",
            "jornada-c4-title": "Acompanhamento",
            "jornada-c4-desc": "Sessões semanais que aprofundam seu processo, fortalecem sua autonomia emocional e ajudam você a construir mudanças reais e sustentáveis.",
            "jornada-footer-txt1": "Você não precisa esperar tudo se resolver para começar.",
            "jornada-footer-txt2": "<strong>Às vezes, começar é o que resolve.</strong>",
            "jornada-btn": "Dar o primeiro passo",

            // FAQ
            "faq-badge": "Perguntas frequentes",
            "faq-title": "Tire suas dúvidas antes de começar",
            "faq-q1": "A modalidade online tem a mesma eficácia?",
            "faq-a1": "Sim. Diversos estudos científicos comprovam que a psicoterapia online possui a mesma eficácia da presencial, com o benefício extra da flexibilidade de horários e o conforto de estar no seu próprio ambiente seguro.",
            "faq-q2": "Como funcionam os valores e formas de pagamento?",
            "faq-a2": "Os honorários são alinhados durante o nosso primeiro contato via WhatsApp, onde explicarei os pacotes mensais e sessões avulsas. O pagamento pode ser feito via PIX ou transferência bancária.",
            "faq-q3": "O que acontece na minha primeira consulta?",
            "faq-a3": "A primeira sessão é um momento de acolhimento. Vamos mapear o que te trouxe à terapia, entender um pouco da sua história e alinhar as expectativas sobre o processo e a abordagem utilizada.",
            "faq-q4": "Você aceita planos de saúde ou convênios?",
            "faq-a4": "Sim, aceito alguns planos de saúde e convênios. Para saber quais convênios são aceitos no momento e consultar a disponibilidade de atendimento, entre em contato pelo WhatsApp ou preencha o formulário abaixo. Será um prazer orientá-lo(a)!",
            "faq-q5": "Existe um tempo estimado para o fim do tratamento?",
            "faq-a5": "Não há um prazo fixo. O processo terapêutico é contínuo e varia muito de acordo com as suas necessidades e objetivos. Avaliamos constantemente sua evolução juntas ao longo dos encontros.",
            "faq-q6": "A terapia é indicada apenas para momentos de crise?",
            "faq-a6": "De forma alguma. Embora seja fundamental nas crises, a terapia também é um processo poderoso de autoconhecimento, fortalecimento emocional e desenvolvimento de autonomia para lidar com a vida antes mesmo da crise chegar.",
            "faq-q7": "É minha primeira vez na terapia. Como devo proceder?",
            "faq-a7": "Não precisa se preocupar ou 'preparar um roteiro'. Basta clicar no botão de contato, me mandar um 'Olá' e eu te guiarei a partir dali, explicando tudo com calma no seu tempo.",

            // TRATAMENTOS E DEPOIMENTOS
            "trat-badge": "Terapia de Aceitação e Compromisso (ACT)",
            "trat-title": "Algumas das demandas que podemos trabalhar juntas:",
            "tag-1": "<i class=\"fa-solid fa-sparkles\"></i> Ansiedade e Pensamentos Acelerados",
            "tag-2": "<i class=\"fa-solid fa-sparkles\"></i> Sobrecarga Emocional e Burnout",
            "tag-3": "<i class=\"fa-solid fa-sparkles\"></i> Dependência Emocional",
            "tag-4": "<i class=\"fa-solid fa-sparkles\"></i> Dificuldade em impor limites",
            "tag-5": "<i class=\"fa-solid fa-sparkles\"></i> Perfeccionismo e Autocobrança",
            "tag-6": "<i class=\"fa-solid fa-sparkles\"></i> Síndrome da Impostora",
            "tag-7": "<i class=\"fa-solid fa-sparkles\"></i> Transições de Carreira e Vida",
            "trat-btn": "Ver horários disponíveis",
            "trat-info": "• Atendimento 100% online •",
            "dep-badge": "Depoimentos de Pacientes",
            "dep-title": "O que as pacientes dizem após o atendimento",
            "dep-desc": "Os relatos refletem a construção de uma vida com mais autonomia, clareza e acolhimento. Um espaço seguro para ressignificar a forma como você lida com suas próprias emoções e escolhas.",
            "dep-btn": "Falar com a Psicóloga Cindy",

            // FORMULÁRIO DE CONTATO (Botões de Seleção)
            "contact-btn-label": "Qual modalidade de atendimento você prefere?",
            "contact-mod-osasco-title": "Presencial",
            "contact-mod-osasco-sub": "Osasco, SP",
            "contact-mod-online-title": "Online",
            "contact-mod-online-sub": "Todo o Brasil",
            "contact-submit": "Enviar solicitação",

            // INSTAGRAM
            "insta-title": "Me acompanhe também no<br>Instagram <a href=\"https://instagram.com/cindyandriolli\" target=\"_blank\">@cindyandriolli</a>",
            "insta-btn": "<i class=\"fa-brands fa-instagram\"></i> Confira no Instagram",

            // FOOTER
            "foot-badge": "Ainda ficou alguma dúvida?",
            "foot-title": "Entre em contato",
            "foot-card-email-title": "Email",
            "foot-card-email-desc": "cindyandriolli@gmail.com",
            "foot-card-wpp-title": "WhatsApp",
            "foot-card-wpp-desc": "Atendimento Online",
            "foot-card-insta-title": "Instagram",
            "foot-card-insta-desc": "@cindyandriolli",
            "foot-copy": "Cindy Andriolli. Todos os direitos reservados."
        },
        es: {
            // FAIXA E MODAL: GRUPO DE ADOLESCENTES
            "promo-badge": "<i class=\"fa-solid fa-sparkles\"></i> Cupos Limitados",
            "promo-bar-text": "<strong>Grupo Terapéutico para Adolescentes (12 a 16 años)</strong> • ¡Inscripciones promocionales abiertas!",
            "promo-bar-cta": "Clic para ver <i class=\"fa-solid fa-arrow-right\"></i>",
            "promo-modal-title": "Grupo Terapéutico para Adolescentes",
            "promo-modal-sub": "De 12 a 16 años • 100% Online • Cupos promocionales para las primeras 20 inscripciones",
            "promo-swipe-hint": "<i class=\"fa-solid fa-arrows-left-right\"></i> Desliza hacia el lado para ver ambos carteles",
            "promo-whatsapp-btn": "<i class=\"fa-brands fa-whatsapp\"></i> Consulta aquí y asegura tu cupo",

            // NAVBAR
            "nav-home": "Inicio",
            "nav-for-who": "Para quién es",
            "nav-benefits": "Beneficios",
            "nav-about": "La Psicóloga",
            "nav-how": "Cómo funciona",
            "nav-lectures": "Conferencias",
            "nav-faq": "Preguntas frecuentes",
            "nav-contact": "Contacto",

            // HERO SECTION
            "hero-title": "Psicoterapia para comprender lo que estás viviendo y construir nuevos caminos.",
            "hero-desc": "No siempre es fácil entender lo que sucede cuando las emociones, pensamientos y comportamientos comienzan a pesar en el día a día. <strong>Un espacio de escucha y cuidado para mirarte con más claridad, acogida y profundidad.</strong>",
            "hero-btn-primary": "Agendar una consulta",
            "hero-btn-secondary": "Conoce a la Psicóloga",
            "hero-card-name": "Cindy Andriolli",
            "hero-card-crp": "Psicóloga - CRP 06/209430",

            // IDENTIFICAÇÃO
            "ident-badge": "Identificación",
            "ident-title": "¿Te has sentido así últimamente?",
            "ident-c1-title": "Ansiedad constante",
            "ident-c1-desc": "Tu mente siempre está un paso adelante, anticipando problemas que aún no han ocurrido.",
            "ident-c2-title": "Sobrecarga invisible",
            "ident-c2-desc": "Sostienes responsabilidades en el trabajo, la familia y las relaciones, pero casi nadie nota el costo de ello.",
            "ident-c3-title": "Sensación de insuficiencia",
            "ident-c3-desc": "Incluso al lograr cosas importantes, sientes que todavía no es suficiente.",
            "ident-c4-title": "Cansancio emocional",
            "ident-c4-desc": "Un agotamiento que no mejora solo con descanso.",
            "ident-footer": "Si te <strong>reconociste</strong> en más de uno de estos puntos,<br>tal vez no sea falta de fuerza, sino exceso de esfuerzo.",

            // BENEFÍCIOS
            "ben-badge": "Beneficios de la terapia",
            "ben-title": "Por qué invertir en terapia cambia todo a tu alrededor",
            "ben-desc1": "<strong>La psicoterapia es un proceso de desarrollo que te ayuda a comprender tus patrones.</strong>",
            "ben-desc2": "Todo lo que quieres construir comienza en cómo te sostienes por dentro. Cuando tu salud mental se fortalece, tus decisiones se vuelven más claras, tus límites más firmes y tu postura más segura.",
            "ben-desc3": "<strong>Sin estructura emocional, vives apagando incendios.<br>Con acompañamiento psicológico, construyes dirección.</strong>",
            "ben-c1-title": "Seguridad emocional",
            "ben-c1-desc": "Desarrolla la capacidad de sentir ansiedad sin dejar que conduzca tus decisiones.",
            "ben-c2-title": "Claridad en las decisiones",
            "ben-c2-desc": "Diferencia lo que es culpa de lo que es valor.",
            "ben-c3-title": "Límites más saludables",
            "ben-c3-desc": "Aprende a decir no sin un miedo excesivo a decepcionar.",
            "ben-c4-title": "Autonomía emocional",
            "ben-c4-desc": "Construye independencia emocional y profesional con mayor estabilidad.",

            // A PSICÓLOGA / SOBRE
            "sobre-name": "Cindy Andriolli",
            "sobre-crp": "Psicóloga - CRP 06/209430",
            "sobre-badge": "La Psicóloga",
            "sobre-title": "¿Quién soy?",
            "sobre-p1": "<strong>Psicología, arte y desarrollo humano al servicio de la salud emocional y la transformación de personas y organizaciones.</strong>",
            "sobre-p2": "Cindy Elaine Cardoso Andriolli (CRP 06/209430) es psicóloga, neuropsicóloga, actriz y conferencista corporativa, con 17 años de trayectoria profesional.",
            "sobre-p3": "Su recorrido profesional integra los conocimientos de la Psicología con la sensibilidad artística y la comunicación, desarrollando experiencias que promueven el autoconocimiento, la salud emocional y la transformación de comportamientos.",
            "sobre-p4": "En el ámbito corporativo, trabaja con conferencias, capacitaciones e iniciativas de promoción de la salud mental, la inteligencia emocional, el autocuidado, las relaciones interpersonales y la prevención de riesgos psicosociales, contribuyendo al desarrollo de las personas y a la construcción de entornos laborales más saludables.",
            "sobre-p5": "<strong>Su trabajo tiene como propósito acercar el conocimiento a la experiencia humana, transformando las reflexiones en acciones y fomentando decisiones más conscientes, tanto en la vida personal como en la profesional.</strong>",
            
            "sobre-l1": "Psicóloga graduada en la Anhanguera Educacional (2015)",
            "sobre-l2": "Posgraduada en Neuropsicología, con énfasis en Evaluación y Rehabilitación Neuropsicológica",
            "sobre-l3": "Especialización en Supervisión Escolar y Orientación Educativa",
            "sobre-l4": "Experiencia en Psicología Clínica y Evaluación Psicológica",
            "sobre-l5": "Formación complementaria en Producción Audiovisual y Comunicación",

            // PALESTRAS E TREINAMENTOS
            "lec-badge": "In Company y Eventos",
            "lec-title": "Conferencias, Capacitaciones y Salud Emocional",
            "lec-subtitle": "Experiencias que unen la ciencia de la Psicología, la comunicación y la sensibilidad artística para transformar entornos corporativos, escuelas e instituciones.",
            "lec-card-title": "Impacto humano que genera una transformación real en las organizaciones",
            "lec-card-p1": "Más que charlas expositivas, propongo encuentros dinámicos y reflexivos que conectan el conocimiento técnico con la vivencia práctica de los equipos, fomentando el protagonismo y la construcción de relaciones laborales más saludables.",
            "lec-p1-title": "Conexión y Compromiso",
            "lec-p1-desc": "Dinámicas de grupo y comunicación asertiva con escucha activa.",
            "lec-p2-title": "Prevención Psicosocial",
            "lec-p2-desc": "Acciones orientadas al bienestar corporativo, semanas de salud y campañas de concientización en salud mental.",
            "lec-topics-title": "Principales temas abordados:",
            "lec-tag-1": "<i class=\"fa-solid fa-check\"></i> Inteligencia Emocional en el Trabajo",
            "lec-tag-2": "<i class=\"fa-solid fa-check\"></i> Prevención del Burnout y Sobrecarga",
            "lec-tag-3": "<i class=\"fa-solid fa-check\"></i> Relaciones Interpersonales y Empatía",
            "lec-tag-4": "<i class=\"fa-solid fa-check\"></i> Comunicación No Violenta y Liderazgo",
            "lec-tag-5": "<i class=\"fa-solid fa-check\"></i> Salud Mental y Autocuidado",
            "lec-tag-6": "<i class=\"fa-solid fa-check\"></i> Prevención de Riesgos Psicosociales",
            "lec-gallery-label": "<i class=\"fa-solid fa-camera-retro\"></i> Registros de encuentros, dinámicas y conferencias realizadas",
            "lec-media-1": "Conferencia Corporativa • Salud Emocional",
            "lec-media-2": "Capacitación y Desarrollo",
            "lec-media-3": "Dinámica en Grupo",
            "lec-media-4": "Encuentro sobre Prevención y Autocuidado",
            "lec-media-5": "Vivencia Práctica • Inteligencia Emocional",
            "lec-media-6": "Conferencia In Company",
            "lec-media-7": "Acogida y Escucha en las Organizaciones",
            "lec-cta-text": "¿Deseas llevar una conferencia o capacitación personalizada a tu empresa o evento?",
            "lec-btn-wpp": "<i class=\"fa-brands fa-whatsapp\" style=\"margin-right: 8px;\"></i> Solicitar propuesta para evento",
            "lec-btn-form": "Hablar por el formulario",

            // COMO FUNCIONA
            "cf-badge": "Cómo funciona",
            "cf-title": "Psicoterapia Online",
            "cf-desc": "La terapia en línea ofrece practicidad y continuidad, manteniendo el mismo compromiso ético y técnico que la atención presencial.",
            "cf-i1-title": "Duración de la Sesión",
            "cf-i1-desc": "50 minutos",
            "cf-i2-title": "Frecuencia",
            "cf-i2-desc": "Sesiones semanales",
            "cf-i3-title": "Modalidad de atención",
            "cf-i3-desc": "Terapia Online",
            "cf-i4-title": "Enfoque",
            "cf-i4-desc": "Psicología Analítica y TCC aparecen como enfoques principales.",

            // JORNADA
            "jornada-badge": "Sin complicaciones",
            "jornada-title": "Inicia tu camino en 4 pasos",
            "jornada-c1-title": "Primer contacto",
            "jornada-c1-desc": "Llegas por WhatsApp y compartes, a tu ritmo, lo que estás sintiendo. Sin presión y sin compromiso inmediato.",
            "jornada-c2-title": "Agendamiento",
            "jornada-c2-desc": "Definimos juntas el mejor horario para ti. La atención es en línea, con flexibilidad y comodidad.",
            "jornada-c3-title": "Primera sesión",
            "jornada-c3-desc": "Un espacio de escucha e investigación de tu historia, para entender cómo aprendiste a sostener todo sola y el costo que eso tiene para ti.",
            "jornada-c4-title": "Acompañamiento",
            "jornada-c4-desc": "Sesiones semanales que profundizan tu proceso, fortalecen tu autonomía emocional y te ayudan a construir cambios reales y sostenibles.",
            "jornada-footer-txt1": "No necesitas esperar a que todo se resuelva para empezar.",
            "jornada-footer-txt2": "<strong>A veces, empezar es lo que resuelve.</strong>",
            "jornada-btn": "Dar el primer paso",

            // FAQ
            "faq-badge": "Preguntas frecuentes",
            "faq-title": "Aclara tus dudas antes de empezar",
            "faq-q1": "¿La modalidad online tiene la misma eficacia?",
            "faq-a1": "Sí. Diversos estudios científicos comprueban que la psicoterapia en línea posee la misma eficacia que la presencial, con el beneficio extra de la flexibilidad de horarios y la comodidad de estar en tu propio entorno seguro.",
            "faq-q2": "¿Cómo funcionan los valores y formas de pago?",
            "faq-a2": "Los honorarios se alinean durante nuestro primer contacto vía WhatsApp, donde te explicaré los paquetes mensuales y las sesiones individuales. El pago puede realizarse mediante transferencia bancaria o métodos locales equivalentes.",
            "faq-q3": "¿Qué sucede en mi primera consulta?",
            "faq-a3": "La primera sesión es un momento de acogida. Mapearemos lo que te trajo a terapia, entenderemos un poco tu historia y alinearemos las expectativas sobre el proceso y el enfoque utilizado.",
            "faq-q4": "¿Aceptas planes de salud o seguros médicos?",
            "faq-a4": "Sí, acepto algunos planes de salud y convenios médicos. Para saber qué convenios acepto actualmente y consultar la disponibilidad de atención, puede ponerse en contacto conmigo por WhatsApp o completar el formulario que aparece a continuación. ¡Será un placer orientarle!",
            "faq-q5": "¿Existe un tiempo estimado para finalizar el tratamiento?",
            "faq-a5": "No hay un plazo fijo. El proceso terapéutico es continuo y varía mucho según tus necesidades y objetivos. Evaluamos constantemente tu evolución juntas a lo largo de los encuentros.",
            "faq-q6": "¿La terapia está indicada solo para momentos de crisis?",
            "faq-a6": "De ninguna manera. Aunque es fundamental en las crisis, la terapia también es un poderoso proceso de autoconocimiento, fortalecimiento emocional y desarrollo de autonomía para lidiar con la vida incluso antes de que llegue la crisis.",
            "faq-q7": "Es mi primera vez en terapia. ¿Cómo debo proceder?",
            "faq-a7": "No te preocupes ni prepares un 'guion'. Solo tienes que hacer clic en el botón de contacto, enviarme un 'Hola' y te guiaré a partir de ahí, explicándote todo con calma a tu ritmo.",

            // TRATAMENTOS E DEPOIMENTOS
            "trat-badge": "Terapia de Aceptación y Compromiso (ACT)",
            "trat-title": "Algunas de las demandas que podemos trabajar juntas:",
            "tag-1": "<i class=\"fa-solid fa-sparkles\"></i> Ansiedad y Pensamientos Acelerados",
            "tag-2": "<i class=\"fa-solid fa-sparkles\"></i> Sobrecarga Emocional y Burnout",
            "tag-3": "<i class=\"fa-solid fa-sparkles\"></i> Dependencia Emocional",
            "tag-4": "<i class=\"fa-solid fa-sparkles\"></i> Dificultad para poner límites",
            "tag-5": "<i class=\"fa-solid fa-sparkles\"></i> Perfeccionismo y Autoexigencia",
            "tag-6": "<i class=\"fa-solid fa-sparkles\"></i> Síndrome de la Impostora",
            "tag-7": "<i class=\"fa-solid fa-sparkles\"></i> Transiciones de Carrera y Vida",
            "trat-btn": "Ver horarios disponibles",
            "trat-info": "• Atención 100% online •",
            "dep-badge": "Testimonios de Pacientes",
            "dep-title": "Lo que dicen las pacientes tras la atención",
            "dep-desc": "Los relatos reflejan la construcción de una vida con más autonomía, claridad y acogida. Un espacio seguro para resignificar la forma en que manejas tus propias emociones y elecciones.",
            "dep-btn": "Hablar con la Psicóloga Cindy",

            // FORMULÁRIO DE CONTATO (Botões de Seleção)
            "contact-btn-label": "¿Qué modalidad de atención prefieres?",
            "contact-mod-osasco-title": "Presencial",
            "contact-mod-osasco-sub": "Osasco - SP",
            "contact-mod-online-title": "Online",
            "contact-mod-online-sub": "Todo el mundo",
            "contact-submit": "Enviar solicitud",

            // INSTAGRAM
            "insta-title": "Sígueme también en<br>Instagram <a href=\"https://instagram.com/cindyandriolli\" target=\"_blank\">@cindyandriolli</a>",
            "insta-btn": "<i class=\"fa-brands fa-instagram\"></i> Ver en Instagram",

            // FOOTER
            "foot-badge": "¿Aún tienes alguna duda?",
            "foot-title": "Ponte en contacto",
            "foot-card-email-title": "Correo Electrónico",
            "foot-card-email-desc": "cindyandriolli@gmail.com",
            "foot-card-wpp-title": "WhatsApp",
            "foot-card-wpp-desc": "Atención en Línea",
            "foot-card-insta-title": "Instagram",
            "foot-card-insta-desc": "@cindyandriolli",
            "foot-copy": "Cindy Andriolli. Todos los derechos reservados."
        }
    };

    // Função que executa a transição animada de texto e traduz a página
    function changeLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        
        gsap.to(elements, {
            y: -15,
            opacity: 0,
            duration: .25,
            stagger: .005, 
            ease: "power2.in",
            onComplete: () => {
                elements.forEach(el => {
                    const key = el.getAttribute('data-i18n');
                    if(translations[lang] && translations[lang][key]) {
                        el.innerHTML = translations[lang][key];
                    }
                });
                
                gsap.fromTo(elements,
                    { y: 15, opacity: 0 },
                    { y: 0, opacity: 1, duration: .3, stagger: .005, ease: "power2.out" }
                );
            }
        });
    }

    // Toggle do menu suspenso de idiomas
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('show');
    });

    document.addEventListener('click', () => {
        langDropdown.classList.remove('show');
    });

    // Clique nas opções de idioma do menu suspenso (Apenas traduz, sem mudar imagem do botão!)
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            const selectedLang = e.currentTarget.getAttribute('data-lang');
            changeLanguage(selectedLang);
        });
    });

    // Detecta o idioma do usuário automaticamente e traduz a tela ao carregar
    function detectUserLanguage() {
        const userBrowserLang = navigator.language.slice(0, 2).toLowerCase();
        const supportedLangs = ['pt', 'es'];
        let initialLang = supportedLangs.includes(userBrowserLang) ? userBrowserLang : 'pt';
        changeLanguage(initialLang);
    }

    detectUserLanguage();
}