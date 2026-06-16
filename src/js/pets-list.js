import axios from "axios";

const filterList = document.querySelector('.pets-list');
const galleryContainer = document.querySelector('.pets-cards');

const BASE_URL = "https://paw-hut.b.goit.study";
let activeFilters = [];

const categoryToIdMap = {
    'dogs': '667ac6a4e4b0c8a2a7c1c1a1',
    'cats': '667ac6a4e4b0c8a2a7c1c1a2',
    'rabbits': '667ac6a4e4b0c8a2a7c1c1a3',
    'rodents': '667ac6a4e4b0c8a2a7c1c1a4',
    'birds': '667ac6a4e4b0c8a2a7c1c1a5',
    'special': '667ac6a4e4b0c8a2a7c1c1a6',
    'urgent': '667ac6a4e4b0c8a2a7c1c1a7'
};

function initPetFilters() {
    if (!filterList) return;

    filterList.addEventListener('click', async (e) => {
        const btnElem = e.target.closest('[data-category]');
        if (!btnElem) return;

        const categorySlug = btnElem.dataset.category;
        const allBtn = filterList.querySelector('[data-category="all"]');

        if (categorySlug === 'all') {
            activeFilters = [];
            const activeButtons = filterList.querySelectorAll('.filter-btn.active');
            activeButtons.forEach(btn => btn.classList.remove('active'));
            allBtn.classList.add('active');
        } else {
            if (allBtn) allBtn.classList.remove('active');
            btnElem.classList.toggle('active');

            const backendId = categoryToIdMap[categorySlug];

            if (btnElem.classList.contains('active')) {
                activeFilters.push(backendId);
            } else {
                activeFilters = activeFilters.filter(item => item !== backendId);
            }

            if (activeFilters.length === 0 && allBtn) {
                allBtn.classList.add('active');
            }
        }

        try {
            galleryContainer.innerHTML = '<li class="loading">Завантаження...</li>';
            let response;

            if (activeFilters.length === 0) {
                response = await axios.get(`${BASE_URL}/api/animals?page=1&limit=10`); 
            } else {
                const categoriesQuery = activeFilters.join(',');
                
                response = await axios.get(`${BASE_URL}/api/animals?page=1&limit=10&category=${categoriesQuery}`);
            }

            /* МАЙБУТНЯ ФУНКЦІЯ РЕНДЕРУ
            markup(response.data);
            */

        } catch (error) {
            console.error("Помилка фільтрації:", error);
            galleryContainer.innerHTML = '<li style="color: red;">Не вдалося завантажити тварин.</li>';
        }
    });
}

initPetFilters();