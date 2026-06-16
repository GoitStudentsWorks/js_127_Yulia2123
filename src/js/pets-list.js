import axios from "axios";

const API_URL = axios.create({
    baseURL: "https://paw-hut.b.goit.study/api/categories",
});

const getCategories = async () => {
    const response = await API_URL.get('')
    return response.data;
}

const categoryTranslations = {
    "dogs": "Собаки",
    "cats": "Коти",
    "rabbits": "Кролики",
    "rodents": "Гризуни",
    "birds": "Птахи",
    "special": "Тварини з особливими потребами",
    "urgent": "Терміново шукають дім",
};

const filterBtns = document.querySelectorAll('[data-category]');

filterBtns.forEach(button => {
    button.addEventListener('click', async (e) => {
        const englishCategory = e.target.dataset.category.toLowerCase();

        const ukrainianName = categoryTranslations[englishCategory];

        if (!ukrainianName) {
            console.error(`Не знайдено перекладу для категорії: ${englishCategory}`);
            return;
        }

        try {
            const allCategories = await getCategories(); 
            const foundCategory = allCategories.find(
                item => item.name.toLowerCase() === ukrainianName.toLowerCase()
            );

            if (foundCategory) {
                const categoryId = foundCategory._id || foundCategory.id;
                const categoryName = foundCategory.name;

                console.log({ id: categoryId, name: categoryName });
            } else {
                console.warn(`Категорію "${ukrainianName}" не знайдено на бекенді.`);
            }

        } catch (error) {
            console.error("Помилка:", error);
        }
    });
});