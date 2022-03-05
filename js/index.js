const modal = document.querySelector('#modal');

const teste = () => {
  if (modal.style.display === '') {
    modal.style.display = 'flex';
  }
}

setInterval(teste, 5000);