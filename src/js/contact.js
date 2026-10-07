export function initContactForm() {
  const phoneInput = document.getElementById('telefone');
  
  if (phoneInput) {
    phoneInput.addEventListener('input', function (e) {
      // Remove tudo que não é número
      let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
      // Remonta a string formatada: (11) 99999-9999
      e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });
  }
}