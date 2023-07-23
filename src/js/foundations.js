
import {FoundationItem} from './foundations-markup';
import {foundationData} from './foundations-data';
import Swiper from 'swiper';
// import 'swiper/swiper-bundle.min.css';

const foundationListEl = document.querySelector('.foundation--list');
const btnSwiperEl = document.querySelector('.swiper-button-next');



let position = 0;

const addLeadingZero = value => {
  return String(value).padStart(2, '0');
};

const markupSetFunds = foundationData
  .map((el, i) => {
    position = addLeadingZero(i + 1);

    return FoundationItem(el, position);
  })
  .join('');

  foundationListEl.innerHTML = markupSetFunds;


  const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    spaceBetween: 20,
    slidesPerView: 'auto',
    rewind: true,
  
    navigation: {
      nextEl: '.swiper-button-next',
    },
  });
  
  swiper.update();
  
  btnSwiperEl.addEventListener('click', () => {
    swiper.slideNext();
  });