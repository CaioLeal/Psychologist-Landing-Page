export function initFloatingButtons() {
    const topBtn = document.getElementById("backToTop");

    if (!topBtn) return;

    // Detecta a rolagem da página
    window.addEventListener("scroll", () => {
        const scrolly = window.scrollY;
        
        // Mostra o botão após rolar 300px para baixo
        if (scrolly > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    // Rola suavemente para o topo ao clicar
    topBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}