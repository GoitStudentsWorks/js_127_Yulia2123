import { getAnimalsData } from './pets-list.js';

const ulElem = document.querySelector('.pets-cards');
const modal = document.querySelector('.modal-overlay-dtls');
const modalImage = modal.querySelector('.modal-image');
const modalSpecies = modal.querySelector('.modal-species');
const modalName = modal.querySelector('.modal-name');
const modalAge = modal.querySelector('.modal-age');
const modalGender = modal.querySelector('.modal-gender');
const modalDescription = modal.querySelector(
  '.modal-info-part:nth-child(2) .modal-info-text'
);
const modalHealth = modal.querySelector(
  '.modal-info-part:nth-child(3) .modal-info-text'
);
const modalBehavior = modal.querySelector(
  '.modal-info-part:nth-child(4) .modal-info-text'
);
const modalCloseBtn = modal.querySelector('.modal-close-btn');

function openModal(animal) {
  modalImage.src = animal.image;
  modalImage.alt = animal.name;
  modalSpecies.textContent = animal.species;
  modalName.textContent = animal.name;
  modalAge.textContent = animal.age;
  modalGender.textContent = animal.gender;
  modalDescription.textContent = animal.description;
  modalHealth.textContent = animal.healthStatus;
  modalBehavior.textContent = animal.behavior;

  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('is-open');
  document.body.style.overflow = '';
  document.body.classList.remove('modal-open');
}

ulElem.addEventListener('click', e => {
  const btn = e.target.closest('.learn-more-btn');
  if (!btn) return;

  const id = btn.dataset.id;
  const animal = getAnimalsData().find(a => a._id === id);
  if (animal) openModal(animal);
});

modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

const adoptBtn = modal.querySelector('.modal-info-btn');
const orderModal = document.querySelector('#order-modal');

adoptBtn.addEventListener('click', () => {
  closeModal();
  orderModal.classList.add('is-open');
  document.body.classList.add('modal-open');
});
