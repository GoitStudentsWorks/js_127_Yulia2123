import './js/modal-menu.js';
import './js/order-modal.js';
import './js/faq-section.js';
import './js/animal-details-modal.js';
import './js/success-stories.js';
import './js/hero.js';
import './js/pets-list.js';
import './js/about-us.js';
import './js/footer.js';


import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordionEl = document.querySelector('.accordion-container');

if (accordionEl) {
  new Accordion(accordionEl);
}

import 'css-star-rating/css/star-rating.css';

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const instance = basicLightbox.create(`
  <img src="./img/photo.jpg" alt="photo">
`);

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.open-modal');

  if (!btn) return;

  btn.addEventListener('click', () => {
    instance.show();
  });
});
