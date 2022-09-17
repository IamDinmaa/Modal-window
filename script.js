const Modal = document.querySelectorAll('.show');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modalText = document.querySelector('.modal-text');

const closeModal = function () {
  modalText.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modalText.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < Modal.length; i++) {
  Modal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalText.classList.contains('hidden')) {
    closeModal();
  }
});
