import Accordion from 'accordion-js';

export function initFaq() {
  const container = document.querySelector('.accordion-container');
  if (!container) return;

  new Accordion(container, {
    duration: 200,
    showMultiple: false,
    collapse: true,
  });
}
