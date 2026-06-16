import axios from "axios";

const filterContainer = document.querySelector('.pets-list');

const axiosInstance = axios.create({
    baseURL: 'https://paw-hut.b.goit.study',
});

let activeFilters = [];

async function initPetFilters() {
    if (!filterContainer) return;

    await renderFilterButtons();

    setupFilterListener();
}

async function renderFilterButtons() {
    try {
        const response = await axiosInstance.get('/api/categories');
        const categories = response.data;

        /*ЦЕ Я ЗРОБИВ КАСТОМНЕ СОРТУВАННЯ ДЛЯ ВІДОБРАЖЕННЯ ЯК НА МАКЕТІ*/
        const customOrder = [
            "Собаки",
            "Коти",
            "Кролики",
            "Гризуни",
            "Птахи",
            "Тварини з особливими потребами",
            "Терміново шукають дім",
        ];

        let buttonsMarkup = `
            <li>
                <button type="button" class="filter-btn active" data-category="all">
                    Всі
                </button>
            </li>
        `;

        categories.sort((a, b) => {
            const aIndex = customOrder.indexOf(a.name);
            const bIndex = customOrder.indexOf(b.name);

            return (aIndex === -1 ? Infinity : aIndex) -
                (bIndex === -1 ? Infinity : bIndex);
        });

        buttonsMarkup += categories.map(filter => {
            return `
                <li>
                    <button type="button" class="filter-btn" data-category="${filter._id}">
                        ${filter.name}
                    </button>
                </li>
            `;
        }).join('');

        filterContainer.innerHTML = buttonsMarkup;

    } catch (error) {
        console.error("Помилка завантаження категорій з БД:", error);
        filterContainer.innerHTML = '<li>Помилка завантаження фільтрів</li>';
    }
}

function setupFilterListener() {
    filterContainer.addEventListener('click', (e) => {
        const btnElem = e.target.closest('[data-category]');
        if (!btnElem) return;

        const categoryId = btnElem.dataset.category; 
        const allBtn = filterContainer.querySelector('[data-category="all"]');

        if (categoryId === 'all') {
            activeFilters = [];
            const activeButtons = filterContainer.querySelectorAll('.filter-btn.active');
            activeButtons.forEach(btn => btn.classList.remove('active'));
            allBtn.classList.add('active');
        } else {
            if (allBtn) allBtn.classList.remove('active');
            btnElem.classList.toggle('active');

            if (btnElem.classList.contains('active')) {
                if (!activeFilters.includes(categoryId)) {
                    activeFilters.push(categoryId);
                }
            } else {
                activeFilters = activeFilters.filter(item => item !== categoryId);
            }

            if (activeFilters.length === 0 && allBtn) {
                allBtn.classList.add('active');
            }
        }

        /* МАЙБУТНЯ ФУНКЦІЯ РЕНДЕРУ
        markup(activeFilters); 
        */
    });
}

initPetFilters();
