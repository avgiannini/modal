const modal = document.querySelector('#modal');

const exibirModal = () => {
  if (modal.style.display === '') {
    modal.style.display = 'flex';
  }
}

setInterval(exibirModal, 5000);