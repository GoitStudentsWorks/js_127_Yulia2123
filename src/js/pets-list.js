import axios from "axios";

const API_URL = axios.create("https://paw-hut.b.goit.study/api/categories",);

const getCategories = async (id, name) => {
    const response = await API_URL.get('')
    return response.data;
}


const filterContainer = document.querySelector('.pets-list'); 

filterContainer.addEventListener('click', (e) => {
    const btnElem = e.target.closest('[data-category]');
    btnElem.classList.toggle('active');
});
