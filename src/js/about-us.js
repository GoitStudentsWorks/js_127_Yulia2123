import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const prevBtns = document.querySelectorAll('.about-btn-prev');
const nextBtns = document.querySelectorAll('.about-btn-next');

function updateButtons(swiper) {
  prevBtns.forEach(btn => {
    btn.disabled = swiper.isBeginning;
  });
  nextBtns.forEach(btn => {
    btn.disabled = swiper.isEnd;
  });
}

const swiper = new Swiper('.swiper-about', {
  modules: [Pagination],
  loop: false,
  pagination: {
    el: '.swiper-about .swiper-pagination',
    clickable: true,
  },
  on: {
    init(swiper) {
      updateButtons(swiper);
    },
    slideChange(swiper) {
      updateButtons(swiper);
    },
  },
});

document.querySelectorAll('.about-btn-prev').forEach(btn => {
  btn.addEventListener('click', () => swiper.slidePrev());
});

document.querySelectorAll('.about-btn-next').forEach(btn => {
  btn.addEventListener('click', () => swiper.slideNext());
});
