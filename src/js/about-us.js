import { Navigation, Pagination } from 'swiper/modules';
import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
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

const aboutUsSwiper = new Swiper('.swiper-about', {
  modules: [Navigation, Pagination],
  loop: false,
  pagination: {
    el: '.about-us-swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 3,
  },
  on: {
    init(swiper) {
      updateButtons(swiper);
    },
    slideChange(swiper) {
      updateButtons(swiper);
    },
  },
  navigation: {
    nextEl: '.about-btn-next',
    prevEl: '.about-btn-prev',
  },
});
