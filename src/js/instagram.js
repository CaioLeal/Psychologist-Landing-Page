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

  // Injetando as fotos no HTML já com os atributos do AOS
  posts.forEach((post, index) => {
    const delay = index * 100; // AOS usa delay em milissegundos

    const postHTML = `
      <a href="${post.postUrl}" target="_blank" class="insta-item" data-aos="fade-up" data-aos-delay="${delay}" aria-label="Ver post no Instagram" data-i18n="insta-post-${index + 1}">
        <img src="${post.imgUrl}" alt="Post do Instagram da Psicóloga">
        <div class="insta-overlay">
          <i class="fa-brands fa-instagram"></i>
        </div>
      </a>
    `;

    container.innerHTML += postHTML;
  });

  // Elementos injetados depois do AOS.init() precisam desse refresh
  // pra serem "descobertos" e entrarem na observação do scroll
  if (window.AOS) window.AOS.refresh();
}