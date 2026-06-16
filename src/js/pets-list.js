import axios from "axios";

const API_URL = axios.create({
    baseURL: "https://paw-hut.b.goit.study/api/categories",
});

const getCategories = async () => {
    const response = await API_URL.get('', {})
    return response.data;
}

const filterBtns = document.querySelectorAll(['data-category']);

filterBtns.forEach(button => {
    button.addEventListener('click',(e) => {
        const category = e.target.dataset.filter;

        console.log(getCategories(category));
    });
});