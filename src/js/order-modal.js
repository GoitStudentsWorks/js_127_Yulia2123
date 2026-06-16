import axios from 'axios';
// const formEl = document.querySelector('#order-modal form');

// formEl.addEventListener('submit', async e => {
//   e.preventDefault();

//   const name = e.target.elements.name.value.trim();
//   const phone = e.target.elements.phone.value.replace(/\D/g, '');

//   // if (!name || !phone) {
//   //   alert('Заповніть обов’язкові поля');
//   //   return;
//   // }

//   try {
//     await axios.post('https://paw-hut.b.goit.study/api/orders', {
//       name,
//       phone,
//       animalId: '667ad1b8e4b01a2b3c4d5e55',
//       comment: 'Текст повідомлення замовлення',
//     });

//     alert('Відправлено!');

//     formEl.reset();

//     document.getElementById('order-modal').classList.remove('is-open');

//     document.body.classList.remove('modal-open');
//   } catch {
//     alert('Помилка, введені не всі дані');
//   }
// });

// МОДАЛЬНЕ ВІКНО

(() => {
  const openBtns = document.querySelectorAll('[data-modal-open]');
  const closeBtns = document.querySelectorAll('[data-modal-close]');
  const body = document.body;

  const form = document.querySelector('#order-modal form');
  console.log('form:', form);

  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    const currentOpenModal = document.querySelector('.modal-overlay.is-open');
    if (currentOpenModal) {
      currentOpenModal.classList.remove('is-open');
    }

    modal.classList.add('is-open');
    body.classList.add('modal-open');
  }

  function closeModal(modal) {
    if (!modal) return;

    modal.classList.remove('is-open');

    const stillOpen = document.querySelector('.modal-overlay.is-open');
    if (!stillOpen) {
      body.classList.remove('modal-open');
    }
  }

  openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-modal-open');
      openModal(id);
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      closeModal(modal);
    });
  });

  document.addEventListener('click', e => {
    const openModalEl = document.querySelector('.modal-overlay.is-open');
    if (!openModalEl) return;

    if (e.target.classList.contains('modal-overlay')) {
      closeModal(openModalEl);
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const openModalEl = document.querySelector('.modal-overlay.is-open');
      closeModal(openModalEl);
    }
  });

  // ФОРМА ВАЛІДАЦІЇ + САБМІТ

  //   form.addEventListener('submit', e => {
  //     e.preventDefault();

  //     const inputs = form.querySelectorAll('input[required], textarea[required]');
  //     let valid = true;

  //     inputs.forEach(input => {
  //       const container = input.closest('.input-container');

  //       if (!input.value.trim()) {
  //         container.classList.add('error');
  //         valid = false;
  //       } else {
  //         container.classList.remove('error');
  //       }
  //     });

  //     if (!valid) return;

  //     console.log('OK submit');
  //   });

  // const form = document.querySelector('#order-modal form');

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const nameInput = form.elements.name;
    const phoneInput = form.elements.phone;

    let valid = true;

    [nameInput, phoneInput].forEach(input => {
      const container = input.closest('.input-container');

      if (!input.value.trim()) {
        container.classList.add('error');
        valid = false;
      } else {
        container.classList.remove('error');
        console.log(container.className);
      }
    });

    if (!valid) return;

    const name = nameInput.value.trim();
    const phone = phoneInput.value.replace(/\D/g, '');

    try {
      await axios.post('https://paw-hut.b.goit.study/api/orders', {
        name,
        phone,
        animalId: '667ad1b8e4b01a2b3c4d5e55',
        comment: form.elements.comment?.value || '',
      });

      alert('Відправлено!');
      form.reset();

      document.getElementById('order-modal').classList.remove('is-open');
      document.body.classList.remove('modal-open');
    } catch (err) {
      alert('Помилка відправки');
    }
  });
})();
