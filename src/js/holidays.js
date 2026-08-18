export function initHolidays() {
    // =========================================================================
    // 1. CONFIGURAÇÃO DOS EVENTOS SAZONAIS E FERIADOS
    // =========================================================================
    // Os meses vão de 1 (Jan) a 12 (Dez).
    // Intensidade: 0.01 (muito sutil) | 0.03 (normal/elegante) | 0.08 (tempestade)
    const feriados = {
        natal: {
            ativo: true, 
            inicio: { mes: 11, dia: 20 }, 
            fim: { mes: 12, dia: 25 },
            novaLogo: "", // Opcional: Coloque o caminho da logo de natal da Cindy aqui se tiver
            imagemFooter: "", // Opcional: Uma borda de neve no rodapé (Recomendado 1920x300 PNG)
            imagemVoadora: "", 
            intervaloVoo: 180000, 
            icone: ["fa-solid fa-snowflake"], 
            // Cores ajustadas para a paleta da Cindy (Branco e tons de Azul da marca)
            cores: ["#75FFFF", "#1D9DF2", "#BCBCF5", "#0061A6"],
            // Física mais suave para um site de psicologia
            fisica: { gravidade: .8, vento: .5, rotacao: 1, tamanhoBase: 8, intensidade: .06 }
        },
        carnaval: {
            ativo: false, // Desativado por padrão (Carnaval pode ser muito vibrante para psicologia)
            inicio: { mes: 2, dia: 1 }, 
            fim: { mes: 2, dia: 28 }, 
            novaLogo: "", 
            imagemFooter: "", 
            imagemVoadora: "", 
            intervaloVoo: 180000,
            icone: ["fa-solid fa-circle", "fa-solid fa-star"], 
            // Cores pasteis para não agredir a visão
            cores: ["#ffb3ba", "#baffc9", "#bae1ff", "#ffffba", "#e5ebe9"],
            fisica: { gravidade: 1.5, vento: 1, rotacao: 10, tamanhoBase: 5, intensidade: 0.04 } 
        },
        pascoa: {
            ativo: true,
            inicio: { mes: 3, dia: 15 },
            fim: { mes: 4, dia: 5 },
            novaLogo: "", 
            imagemFooter: "", 
            imagemVoadora: "", 
            intervaloVoo: 180000,
            icone: ["fa-solid fa-egg", "fa-solid fa-seedling"], // Ovos e plantinhas (renovação)
            cores: ["#00FFB3", "#0086FF", "#FF6B00"], // Paleta da marca
            fisica: { gravidade: 1, vento: .2, rotacao: 3, tamanhoBase: 8, intensidade: .02 } 
        },
        outono: { // NOVO EVENTO SUGERIDO: Muito comum em temas de psicologia (Folhas caindo / Deixar ir)
            ativo: true,
            inicio: { mes: 3, dia: 20 },
            fim: { mes: 5, dia: 30 },
            novaLogo: "", 
            imagemFooter: "", 
            imagemVoadora: "", 
            intervaloVoo: 180000,
            icone: ["fa-solid fa-leaf"], // Folha
            cores: ["#aa9c91", "#7a756f", "#8c9e95", "#d1dbd6"], // Tons terrosos e verdes secos do site
            fisica: { gravidade: .6, vento: 1.2, rotacao: 15, tamanhoBase: 10, intensidade: .015 } // Cai beeem devagar, vento constante
        },
        diaDaMulher: { // NOVO EVENTO SUGERIDO: Já que o foco é atendimento a mulheres!
            ativo: true,
            inicio: { mes: 10, dia: 1 },
            fim: { mes: 10, dia: 10 },
            novaLogo: "", 
            imagemFooter: "", 
            imagemVoadora: "", 
            intervaloVoo: 180000,
            icone: ["fa-solid fa-spa", "fa-solid fa-heart"], // Flores e corações
            cores: ["#FF00E1", "#A31C93", "#E67ED9"], // Azul suave do site
            fisica: { gravidade: .8, vento: .3, rotacao: 2, tamanhoBase: 8, intensidade: .02 } 
        },
        setembroAmarelo: { // NOVO EVENTO SUGERIDO: Muito importante para a área clínica
            ativo: true,
            inicio: { mes: 9, dia: 1 },
            fim: { mes: 9, dia: 30 },
            novaLogo: "", 
            imagemFooter: "", 
            imagemVoadora: "", 
            intervaloVoo: 180000,
            icone: ["fa-solid fa-ribbon"], // Fita de conscientização
            cores: ["#E4E67E", "#ffc107", "#fff176"], // Tons de amarelo da campanha
            fisica: { gravidade: 1, vento: .5, rotacao: 5, tamanhoBase: 15, intensidade: .015 } 
        },
                janeiroBranco: {
            ativo: true,
            inicio: { mes: 1, dia: 1 },
            fim: { mes: 1, dia: 31 },
            novaLogo: "",
            imagemFooter: "",
            imagemVoadora: "",
            intervaloVoo: 180000,
            icone: ["fa-solid fa-brain", "fa-solid fa-heart"],
            cores: ["#FFFFFF", "#E8F4F8", "#D9EEF2", "#B8DDE5"],
            fisica: { gravidade: .7, vento: .3, rotacao: 2, tamanhoBase: 8, intensidade: .015 }
        },

        diaDaMulher: {
            ativo: true,
            inicio: { mes: 3, dia: 1 },
            fim: { mes: 3, dia: 10 },
            novaLogo: "",
            imagemFooter: "",
            imagemVoadora: "",
            intervaloVoo: 180000,
            icone: ["fa-solid fa-spa", "fa-solid fa-heart"],
            cores: ["#E8A9D8", "#C77BC9", "#F3C6E8", "#A86BA8"],
            fisica: { gravidade: .8, vento: .3, rotacao: 2, tamanhoBase: 8, intensidade: .02 }
        },

        diaDoAutismo: {
            ativo: true,
            inicio: { mes: 4, dia: 1 },
            fim: { mes: 4, dia: 3 },
            novaLogo: "",
            imagemFooter: "",
            imagemVoadora: "",
            intervaloVoo: 180000,
            icone: ["fa-solid fa-puzzle-piece", "fa-solid fa-heart"],
            cores: ["#6EC6FF", "#A78BFA", "#7DD3A8", "#F9C74F"],
            fisica: { gravidade: .7, vento: .4, rotacao: 3, tamanhoBase: 8, intensidade: .015 }
        },

        saudeMental: {
            ativo: true,
            inicio: { mes: 10, dia: 7 },
            fim: { mes: 10, dia: 12 },
            novaLogo: "",
            imagemFooter: "",
            imagemVoadora: "",
            intervaloVoo: 180000,
            icone: ["fa-solid fa-brain", "fa-solid fa-heart"],
            cores: ["#75FFFF", "#1D9DF2", "#BCBCF5", "#0061A6"],
            fisica: { gravidade: .7, vento: .3, rotacao: 2, tamanhoBase: 8, intensidade: .015 }
        },

        outubroRosa: {
            ativo: true,
            inicio: { mes: 10, dia: 1 },
            fim: { mes: 10, dia: 31 },
            novaLogo: "",
            imagemFooter: "",
            imagemVoadora: "",
            intervaloVoo: 180000,
            icone: ["fa-solid fa-ribbon", "fa-solid fa-heart"],
            cores: ["#F7A8C4", "#F4C2D7", "#E879A9", "#FFF0F5"],
            fisica: { gravidade: .8, vento: .4, rotacao: 3, tamanhoBase: 10, intensidade: .015 }
        },

        novembroAzul: {
            ativo: true,
            inicio: { mes: 11, dia: 1 },
            fim: { mes: 11, dia: 30 },
            novaLogo: "",
            imagemFooter: "",
            imagemVoadora: "",
            intervaloVoo: 180000,
            icone: ["fa-solid fa-ribbon", "fa-solid fa-heart"],
            cores: ["#75FFFF", "#1D9DF2", "#0061A6", "#9DD9FF"],
            fisica: { gravidade: .8, vento: .4, rotacao: 3, tamanhoBase: 10, intensidade: .015 }
        },

        pessoaComDeficiencia: {
            ativo: true,
            inicio: { mes: 12, dia: 1 },
            fim: { mes: 12, dia: 5 },
            novaLogo: "",
            imagemFooter: "",
            imagemVoadora: "",
            intervaloVoo: 180000,
            icone: ["fa-solid fa-universal-access", "fa-solid fa-heart"],
            cores: ["#75FFFF", "#1D9DF2", "#BCBCF5", "#0061A6"],
            fisica: { gravidade: .7, vento: .3, rotacao: 2, tamanhoBase: 8, intensidade: .015 }
        }
    };

    // =========================================================================
    // 2. VERIFICA QUE DIA/ANO É HOJE E SE TEM FERIADO ATIVO
    // =========================================================================
    const hoje = new Date();
    const anoAtual = hoje.getFullYear(); 
    const mesAtual = hoje.getMonth() + 1; 
    const diaAtual = hoje.getDate();

    let feriadoAtual = null;

    for (const [nome, config] of Object.entries(feriados)) {
        if (!config.ativo) continue;

        const anoPermitido = !config.anos || config.anos.includes(anoAtual);

        let taNoPeriodo = false;
        if (config.inicio.mes > config.fim.mes) {
            // Lógica para virada de ano (ex: Dezembro até Janeiro)
            taNoPeriodo = (mesAtual === config.inicio.mes && diaAtual >= config.inicio.dia) || 
                          (mesAtual === config.fim.mes && diaAtual <= config.fim.dia) ||
                          (mesAtual > config.inicio.mes || mesAtual < config.fim.mes);
        } else {
            // Lógica para meses normais
            const depoisDoInicio = (mesAtual > config.inicio.mes) || (mesAtual === config.inicio.mes && diaAtual >= config.inicio.dia);
            const antesDoFim = (mesAtual < config.fim.mes) || (mesAtual === config.fim.mes && diaAtual <= config.fim.dia);
            taNoPeriodo = depoisDoInicio && antesDoFim;
        }

        if (taNoPeriodo && anoPermitido) {
            feriadoAtual = config;
            break; 
        }
    }

    if (!feriadoAtual) return; // Se não tem feriado hoje, o script encerra silenciosamente.

    // =========================================================================
    // 2.5 TROCA A LOGO SE O FERIADO PEDIR
    // =========================================================================
    if (feriadoAtual.novaLogo && feriadoAtual.novaLogo !== "") {
        const logoImg = document.querySelector(".logo img");
        if (logoImg) {
            logoImg.src = feriadoAtual.novaLogo;
        }
    }

    // =========================================================================
    // 2.6 INJETA A IMAGEM TEMÁTICA NO FOOTER
    // =========================================================================
    if (feriadoAtual.imagemFooter && feriadoAtual.imagemFooter !== "") {
        const footer = document.querySelector("footer");
        if (footer) {
            footer.style.position = "relative"; 
            footer.style.overflow = "hidden"; 

            const imgFooter = document.createElement("img");
            imgFooter.src = feriadoAtual.imagemFooter;
            imgFooter.style.position = "absolute";
            imgFooter.style.bottom = "0";
            imgFooter.style.left = "0";
            imgFooter.style.width = "100%";
            imgFooter.style.pointerEvents = "none"; 
            imgFooter.style.zIndex = "0"; 
            imgFooter.style.opacity = "0.8"; 
            
            footer.insertBefore(imgFooter, footer.firstChild);
        }
    }

    // =========================================================================
    // 2.7 INJETA A IMAGEM VOADORA CRUZANDO A TELA
    // =========================================================================
    if (feriadoAtual.imagemVoadora && feriadoAtual.imagemVoadora !== "") {
        const voador = document.createElement("img");
        voador.src = feriadoAtual.imagemVoadora;
        voador.style.position = "fixed"; 
        voador.style.left = "-500px"; 
        voador.style.width = "200px"; // Menor e mais delicado
        voador.style.zIndex = "9999"; 
        voador.style.pointerEvents = "none"; 
        
        document.body.appendChild(voador);

        const iniciarVoo = () => {
            voador.style.top = `${Math.floor(Math.random() * 20) + 10}%`;
            voador.style.transition = "none";
            voador.style.transform = `translateX(0px)`;
            
            setTimeout(() => {
                voador.style.transition = "transform 15s linear"; // Voo mais lento e suave
                voador.style.transform = `translateX(${window.innerWidth + 1000}px)`;
            }, 100);
        };

        setTimeout(iniciarVoo, 3000);
        setInterval(iniciarVoo, feriadoAtual.intervaloVoo);
    }

    // =========================================================================
    // 3. CRIA O PALCO PARA CHOVER OS ÍCONES
    // =========================================================================
    const weatherContainer = document.createElement("div");
    weatherContainer.style.position = "fixed";
    weatherContainer.style.top = "0";
    weatherContainer.style.left = "0";
    weatherContainer.style.width = "100vw";
    weatherContainer.style.height = "100vh";
    weatherContainer.style.pointerEvents = "none";
    weatherContainer.style.zIndex = "9998"; 
    weatherContainer.style.overflow = "hidden";
    document.body.appendChild(weatherContainer);

    // RASTREADOR DO MOUSE
    let mouseX = -1000;
    let mouseY = -1000;
    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    let particulas = [];

    // =========================================================================
    // 4. A FÍSICA DAS PARTÍCULAS CAINDO
    // =========================================================================
    class ParticulaSazonal {
        constructor() {
            this.element = document.createElement("i");
            
            const iconesPossiveis = feriadoAtual.icone;
            this.element.className = iconesPossiveis[Math.floor(Math.random() * iconesPossiveis.length)];
            this.element.style.color = feriadoAtual.cores[Math.floor(Math.random() * feriadoAtual.cores.length)];
            
            this.element.style.position = "absolute";
            // Adiciona uma leve transparência para ficar mais elegante e menos sólido
            this.element.style.opacity = (Math.random() * 0.5 + 0.3).toFixed(2); 
            this.element.style.fontSize = `${Math.random() * 8 + feriadoAtual.fisica.tamanhoBase}px`; 
            
            this.x = Math.random() * window.innerWidth;
            this.y = -30; 
            
            this.vy = Math.random() * 1.5 + feriadoAtual.fisica.gravidade; 
            this.vx = (Math.random() - 0.5) * feriadoAtual.fisica.vento; 
            this.rotacao = Math.random() * 360;
            this.velocidadeRotacao = (Math.random() - 0.5) * feriadoAtual.fisica.rotacao;

            weatherContainer.appendChild(this.element);
        }

        update() {
            // EFEITO DE REPULSÃO (QUICAR) NO MOUSE
            const dx = this.x - mouseX;
            const dy = this.y - mouseY;
            const distancia = Math.sqrt(dx * dx + dy * dy);
            
            if (distancia < 50) { 
                const forcaImpacto = (50 - distancia) / 80; 
                this.vx += (dx / distancia) * forcaImpacto * 0.8; 
                this.vy += (dy / distancia) * forcaImpacto * 0.8; 
                this.velocidadeRotacao += (Math.random() - 0.5) * 10; 
            }

            // Movimento estilo "folha caindo" ou "neve" com seno (Sway)
            this.x += this.vx + Math.sin(this.y / 80) * (feriadoAtual.fisica.vento / 1.5);
            this.y += this.vy;
            this.rotacao += this.velocidadeRotacao;

            this.element.style.transform = `translate(${this.x}px, ${this.y}px) rotate(${this.rotacao}deg)`;
            
            return this.y < window.innerHeight + 50 && this.x > -50 && this.x < window.innerWidth + 50; 
        }
    }

    // =========================================================================
    // 5. O MOTOR DE ANIMAÇÃO CONSTANTE
    // =========================================================================
    const animate = () => {
        if (Math.random() < feriadoAtual.fisica.intensidade) { 
            particulas.push(new ParticulaSazonal());
        }
        
        particulas = particulas.filter(particula => {
            const taViva = particula.update();
            if (!taViva) {
                particula.element.remove();
            }
            return taViva;
        });

        requestAnimationFrame(animate);
    };

    animate();
}