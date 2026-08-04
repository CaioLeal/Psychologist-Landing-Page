export function initInstagram() {
  const container = document.getElementById('insta-grid');
  if (!container) return;

  // Substitua as URLs das imagens abaixo pelas fotos reais do perfil @cindyandriolli.
  // Futuramente, este array pode ser alimentado via fetch() consumindo sua própria API/Firebase.
  const posts = [
    {
      imgUrl: "img/instagram/img1.jpg", // Link da imagem real 1
      postUrl: "https://www.instagram.com/cindyandriolli/p/DbJO67-yEa7/" // Link da postagem 1
    },
    {
      imgUrl: "img/instagram/img2.jpg", // Link da imagem real 2
      postUrl: "https://www.instagram.com/cindyandriolli/p/DYrjiB0uBIO/" // Link da postagem 2
    },
    {
      imgUrl: "img/instagram/img3.jpg", // Link da imagem real 3
      postUrl: "https://www.instagram.com/cindyandriolli/p/DYe1lXlOaKu/" // Link da postagem 3
    },
    {
      imgUrl: "img/instagram/img4.jpg", // Link da imagem real 4
      postUrl: "https://www.instagram.com/cindyandriolli/p/DLzaweaO3w1/" // Link da postagem 4
    }
  ];

  // Injetando as fotos no HTML com o fade-up (mantendo o data-i18n na âncora)
  posts.forEach((post, index) => {
    const delay = index * 0.1; 

    const postHTML = `
      <a href="${post.postUrl}" target="_blank" class="insta-item fade-up" style="transition-delay: ${delay}s;" aria-label="Ver post no Instagram" data-i18n="insta-post-${index + 1}">
        <img src="${post.imgUrl}" alt="Post do Instagram da Psicóloga">
        <div class="insta-overlay">
          <i class="fa-brands fa-instagram"></i>
        </div>
      </a>
    `;

    container.innerHTML += postHTML;
  });
}