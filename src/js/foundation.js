

//  отрисовка списка поддержки

import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { charityItems } from './foundation-data';


const charityEl = document.querySelector('.swiper-wrapper');
const charityItemsHtml = charityItems.map(({ url, img, imgRetina, title }, index) =>
  `<div class="charity-item swiper-slide tooltip">
    <a href="${url}" class="charity-link" 
      target="_blank"
      rel="noopener noreferrer nofollow">
    <span class="charity_index">${(index + 1).toString().padStart(2, "0")}</span>
     <img class="foundation_logo"  srcset = "
        ${img} 1x,
        ${imgRetina} 2x
        "
        src="${img}" alt="${title}">
    </a>
    <span class="tooltiptext tooltip-right">
    ${title}
    </span>
  </div>`).join('');

charityEl.innerHTML = charityItemsHtml;
const swiperEl = document.querySelector('.swiper');

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  loop: true,
  spaceBetween: 20,
  slidesPerView: 4,
  breakpoints: {
    768: {
      slidesPerView: 6
    }
  }
});

const nextBtnEl = document.querySelector('.foundation--nextSlide');
nextBtnEl.addEventListener('click', () => {
  if (swiper.activeIndex + swiper.loopedSlides + 1 > swiper.slides.length) {
    swiper.slideToLoop(0)
  } else {
    swiper.slideNext()
  }
});