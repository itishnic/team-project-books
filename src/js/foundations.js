import { fundArray } from './fund-array';
import { markupCardFund } from './foundations-markup';
import Swiper from 'swiper';

const supportListEl = document.querySelector('.support__list-js');
const btnSwiperEl = document.querySelector('.swiper-button-next');

let position = 0;

const addLeadingZero = value => {
  return String(value).padStart(2, '0');
};

const markupSetFunds = fundArray
  .map((el, i) => {
    position = addLeadingZero(i + 1);

    return markupCardFund(el, position);
  })
  .join('');

supportListEl.innerHTML = markupSetFunds;

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: true,
  spaceBetween: 20,
  slidesPerView: 6,
  rewind: true,

  navigation: {
    nextEl: '.swiper-button-next',
  },
});

btnSwiperEl.addEventListener('click', () => {
  if (swiper.activeIndex + swiper.loopedSlides + 1 > swiper.slides.length) {
    swiper.slideToLoop(0);
  } else {
    swiper.slideNext();
  }
});

swiper.update();
