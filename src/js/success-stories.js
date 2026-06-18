import { Navigation, Pagination } from 'swiper/modules';
import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios, { isCancel, AxiosError } from "axios";
const swiperFeedback = new Swiper('.feedback-swiper', {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 32,

  allowTouchMove: true,

  pagination: {
    el: '.feedback-swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.arrow-button-forward',
    prevEl: '.arrow-button-back',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },
});

swiperFeedback.on('reachEnd', () => {
  console.log('end');
});
let PER_PAGE = 4;
let TOTAL_SEARCH_RESULTS;
let TOTAL_PAGES;
let CURRENT_PAGE = 1;
const refs = {
  buttonNext: document.querySelector('.js-button-back'),
  buttonPrev: document.querySelector('.js-button-forward'),
};

function slideTemplate(elem) {
  return `        <div class="swiper-slide">
          <ul class="feedback-list">
            <li class="feedback-item">
              <div class="rating value-${Math.ceil(elem.rate)} star-svg">
                <div class="star-container" id="stars-wrapper">
                  <div class="star">
                    <svg class="star-empty" id="empty-black-star">
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="./img/sprite.svg#icon-star-empty"
                      ></use>
                    </svg>
                    <svg class="star-filled" id="filled-black-star">
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="./img/sprite.svg#icon-star-filled"
                      ></use>
                    </svg>
                  </div>
                  <div class="star">
                    <svg class="star-empty" id="empty-black-star">
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="./img/sprite.svg#icon-star-empty"
                      ></use>
                    </svg>
                    <svg class="star-filled" id="filled-black-star">
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="./img/sprite.svg#icon-star-filled"
                      ></use>
                    </svg>
                  </div>
                  <div class="star">
                    <svg class="star-empty" id="empty-black-star">
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="./img/sprite.svg#icon-star-empty"
                      ></use>
                    </svg>
                    <svg class="star-filled" id="filled-black-star">
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="./img/sprite.svg#icon-star-filled"
                      ></use>
                    </svg>
                  </div>
                  <div class="star">
                    <svg class="star-empty" id="empty-black-star">
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="./img/sprite.svg#icon-star-empty"
                      ></use>
                    </svg>
                    <svg class="star-filled" id="filled-black-star">
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="./img/sprite.svg#icon-star-filled"
                      ></use>
                    </svg>
                  </div>
                  <div class="star">
                    <svg class="star-empty" id="empty-black-star">
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="./img/sprite.svg#icon-star-empty"
                      ></use>
                    </svg>
                    <svg class="star-filled" id="filled-black-star">
                      <use
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        xlink:href="./img/sprite.svg#icon-star-filled"
                      ></use>
                    </svg>
                  </div>
                </div>
              </div>
              <p class="feedback-comment">${elem.description}</p>
              <p class="feedback-author">${elem.author}</p>
            </li>
          </ul>
        </div>`;
}

function createSlides(array) {
  const markup = array.map(el => slideTemplate(el));
}
function renderSlides(slides) {
  swiperFeedback.appendSlide([...slides]);
}
