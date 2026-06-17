import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper-about', {
  modules: [Pagination],
  loop: true,
  pagination: {
    el: '.swiper-about .swiper-pagination',
    clickable: true,
  },
});

document.querySelectorAll('.about-btn-next').forEach(btn => {
  btn.addEventListener('click', () => swiper.slideNext());
});

document.querySelectorAll('.about-btn-prev').forEach(btn => {
  btn.addEventListener('click', () => swiper.slidePrev());
});
