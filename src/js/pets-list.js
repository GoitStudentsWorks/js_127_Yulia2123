import axios from "axios";

const API_URL = axios.create({
    baseURL: "https://paw-hut.b.goit.study/api/categories",
});

const getCategories = async () => {
    const response = await API_URL.get('')
    return response.data;
}

const filterBtns = document.querySelectorAll('[data-category]');

filterBtns.forEach(button => {
    button.addEventListener ('click', async (e) => {
        const selectedCategory = e.target.dataset.category;

        try {
            const allCategories = await getCategories();

            const foundCategory = allCategories.find((item) => {item.name === selectedCategory})

            if (foundCategory){
                const categoryId = foundCategory._id;
                const categoryName = foundCategory.name;

                console.log("Знайдено категорію для рендеру:", { id: categoryId, name: categoryName });
            }else {
                console.warn(`Категорію "${selectedCategory}" не знайдено на бекенді.`);
            }
        }catch (error) {
            console.error("Помилка при отриманні або фільтрації категорій:", error);
        }
    });
});